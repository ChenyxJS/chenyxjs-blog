import { Directive } from "vue";

type SildeInOption = {
    translateY: number;
    duration: number;
};

const animationMap = new WeakMap<Element, Animation>();
const isBelowViewport = (el: Element) => {
    const rect = el.getBoundingClientRect();
    return rect.top > window.innerHeight;
};
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
export const sildeIn: Directive = {
    mounted(el: Element, bindings: any) {
        // 当dom元素在视口之下时才添加动画
        if (!isBelowViewport(el)) {
            return;
        }
        const sildeInOption: SildeInOption = bindings.value;
        // 创建动画
        const animation = el.animate(
            [
                {
                    transform: `translateY(${sildeInOption.translateY}px)`,
                    opacity: 0,
                },
                {
                    transform: `translateY(0)`,
                    opacity: 1,
                },
            ] as Keyframe[],
            {
                duration: sildeInOption.duration,
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
