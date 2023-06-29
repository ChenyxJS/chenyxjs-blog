import type { VNode } from "vue";

export enum NotificationType {
    info,
    success,
    warning,
    error,
}
export type NotificationEmit = {
    notifications: Notification[];
};

export const notificationTypes = [
    "success",
    "info",
    "warning",
    "error",
] as const;

export type NotificationProps = {
    /**
     * @description duration before close. It will not automatically close if set 0
     */
    duration?: number;
    /**
     * @description notification dom id
     */
    id?: string;
    /**
     * @description description text
     */
    message: string;
    /**
     * @description title
     */
    title?: string;
    /**
     * @description notification type
     */
    type?: string;
    /**
     * @description offset from the top edge of the screen. Every Notification instance of the same moment should have the same offset
     */
    offset?: number;
    /**
     * @description initial zIndex
     */
    zIndex?: number;
    /**
     * @description auto close
     */
    autoClose?: boolean;
    /**
     * @description whether to close the notification automatically
     */
    onClose?: () => void;
};

export const notificationEmits = {
    destroy: () => true,
};
export type NotificationEmits = typeof notificationEmits;

export type NotificationInstance = InstanceType<typeof Notification>;

export type NotificationOptionsTyped = Omit<NotificationOptions, "type">;

export interface NotificationHandle {
    close: () => void;
}

export type NotifyFn = ((options?: NotificationProps) => NotificationHandle) & {
    closeAll: () => void;
};

export type NotifyTypedFn = (options?: NotificationProps) => NotificationHandle;

export interface Notify extends NotifyFn {
    success: NotifyTypedFn;
    warning: NotifyTypedFn;
    error: NotifyTypedFn;
    info: NotifyTypedFn;
}

export interface NotificationQueueItem {
    vm: VNode;
}

export type NotificationQueue = NotificationQueueItem[];
