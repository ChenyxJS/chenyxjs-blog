import { Directive } from "vue";

type SnowBorderOption = {
    size: number;
    color: string;
    borderRadius: number;
};

export const snowBorder: Directive = {
    mounted(el: HTMLDivElement, bindings: { value: SnowBorderOption }) {
        const snowBorderOption: SnowBorderOption = bindings.value;
        const snowBorder = document.createElement("div");
        snowBorder.classList.add("snow-border");
        snowBorder.style.width = `100%`;
        snowBorder.style.height = `${Math.round(snowBorderOption.size)}px`; // 将 size 转为整数
        // 定位在元素最顶部s
        snowBorder.style.position = "absolute";
        snowBorder.style.top = "0";
        snowBorder.style.left = "0";

        // 直接添加提供的 SVG 代码
        const svgCode = `
          <svg viewBox="0 0 100 50" preserveAspectRatio="xMidYMax meet" width="70%" height="50%" x="15%" y="50%" overflow="visible">
            <g filter="url(#snow-drift)">
              <text x="50%" y="80%" text-anchor="middle" fill="skyBlue" stroke="lightBlue" stroke-width="0.7" font-size="24" font-weight="bold" font-family="Britannic, Charcoal CY, StencilStd, Impact, sans-serif" style="text-transform: uppercase; text-decoration: underline; font-stretch: condensed">Cool Yule</text>
            </g>
          </svg>
        `;

        // 将 SVG 代码添加到 snowBorder 中
        snowBorder.innerHTML = svgCode;

        // 将 snowBorder 添加到 el 中
        el.appendChild(snowBorder);
    },
};
