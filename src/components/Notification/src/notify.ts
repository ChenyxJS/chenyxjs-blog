import NotificationConstructor from "./Notification.vue";
import { createVNode, render } from "vue";
import type { AppContext, Ref, VNode } from "vue";
import type {
    NotificationProps,
    NotificationQueue,
    Notify,
    NotifyFn,
} from "./notification";

const notifications: NotificationQueue = [];

let seed = 1;
const GAP_SIZE = 16;

const notify: NotifyFn & Partial<Notify> & { _context: AppContext | null } =
    function (
        options = {} as NotificationProps,
        context: AppContext | null = null
    ) {
        let verticalOffset = options.offset || 0;
        const id = `notification_${seed++}`;

        notifications.forEach(({ vm }) => {
            verticalOffset += (vm.el?.offsetHeight || 0) + GAP_SIZE;
        });
        verticalOffset += GAP_SIZE;

        const userOnClose = options.onClose;
        const props: Partial<NotificationProps> = {
            ...options,
            offset: verticalOffset,
            id,
            onClose: () => {
                close(id, userOnClose);
            },
        };

        let appendTo: HTMLElement | null = document.body;

        const container = document.createElement("div");

        const vm = createVNode(
            NotificationConstructor,
            props,
            () => props.message
        );

        vm.appContext = context ?? notify._context;

        // clean notification element preventing mem leak
        vm.props!.onDestroy = () => {
            render(null, container);
        };

        // instances will remove this item when close function gets called. So we do not need to worry about it.
        render(vm, container);
        notifications.push({ vm });
        appendTo.appendChild(container.firstElementChild!);

        return {
            // instead of calling the onClose function directly, setting this value so that we can have the full lifecycle
            // for out component, so that all closing steps will not be skipped.
            close: () => {
                (
                    vm.component!.exposed as { visible: Ref<boolean> }
                ).visible.value = false;
            },
        };
    };

export function close(id: string, userOnClose?: (vm: VNode) => void): void {
    // maybe we can store the index when inserting the vm to notification list.
    const orientedNotifications = notifications;
    const idx = orientedNotifications.findIndex(
        ({ vm }) => vm.component?.props.id === id
    );
    if (idx === -1) return;
    const { vm } = orientedNotifications[idx];
    if (!vm) return;
    userOnClose?.(vm);

    // note that this is called @before-leave, that's why we were able to fetch this property.
    const removedHeight = vm.el!.offsetHeight;
    orientedNotifications.splice(idx, 1);
    const len = orientedNotifications.length;
    if (len < 1) return;
    // starting from the removing item.
    for (let i = idx; i < len; i++) {
        // new position equals the current offsetTop minus removed height plus 16px(the gap size between each item)
        const { el, component } = orientedNotifications[i].vm;
        const pos =
            Number.parseInt(el!.style.top, 10) - removedHeight - GAP_SIZE;
        component!.props.offset = pos;
    }
}

export function closeAll(): void {
    const orientedNotifications = notifications;
    orientedNotifications.forEach(({ vm }) => {
        // same as the previous close method, we'd like to make sure lifecycle gets handle properly.
        (vm.component!.exposed as { visible: Ref<boolean> }).visible.value =
            false;
    });
}

notify.closeAll = closeAll;
notify._context = null;

export default notify as Notify;
