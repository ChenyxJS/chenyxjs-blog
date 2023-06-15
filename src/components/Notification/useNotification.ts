import { reactive } from "vue";

export enum NotificationType {
    info,
    success,
    warning,
    error,
}
export type Notification = {
    id?: string;
    title?: string;
    type?: NotificationType;
    text: string;
    isAutoClose?: boolean;
    showTime?: number;
};
export type NotificationEmit = {
    notifications: Notification[];
};

export const useNotification = () => {
    const state = reactive({
        notifications: [] as Notification[],
    });
    function notification(note: Notification) {
        // 初始化通知id
        note.id =
            new Date().getTime().toString() +
            Math.floor(Math.random()).toString();
        // 添加至通知队列
        state.notifications.push(note);
        // 判断是否自动关闭
        if (note.isAutoClose) {
            setTimeout(() => {
                close(note);
            }, note.showTime || 3000);
        }
    }
    function close(note: Notification) {
        state.notifications.splice(state.notifications.indexOf(note), 1);
    }
    return {
        notifications: state.notifications,
        notification,
        close,
    };
};
