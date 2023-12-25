import { Directive } from "vue";

type FadeOption = {
    translateY: number;
    duration: number;
};

const animationMap = new WeakMap<Element, Animation>();

// IntersectionObserver监听dom元素
const oberver: IntersectionObserver = new IntersectionObserver((entries) => {
    for (const entity of entries) {
        if (entity.isIntersecting) {
            const animation = animationMap.get(entity.target);
            animation?.play();
            oberver.unobserve(entity.target);
        }
    }
});
// 定义自定义指令
export const fade: Directive = {
    mounted(el: Element, bindings: any) {
        const fadeOption: FadeOption = bindings.value;
        // 创建动画
        const animation = el.animate(
            [
                {
                    transform: `translateY(${fadeOption.translateY}px)`,
                    opacity: 0,
                },
                {
                    transform: `translateY(0)`,
                    opacity: 1,
                },
            ] as Keyframe[],
            {
                duration: fadeOption.duration,
                easing: "ease",
            } as KeyframeAnimationOptions
        );
        // 动画创建完成后先暂停动画
        animation.pause();
        // 将动画添加至map中
        animationMap.set(el, animation);
        // 监听dom元素
        oberver.observe(el);
    },
    unmounted(el: Element) {
        // 销毁时取消监听
        oberver.unobserve(el);
    },
};
