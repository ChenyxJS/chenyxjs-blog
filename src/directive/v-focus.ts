import { Directive } from "vue";

export const focus: Directive = {
    mounted(el: HTMLElement, bindings: any) {
        el.focus();
    },
};
