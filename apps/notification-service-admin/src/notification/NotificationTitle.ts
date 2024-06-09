import { Notification as TNotification } from "../api/notification/Notification";

export const NOTIFICATION_TITLE_FIELD = "post";

export const NotificationTitle = (record: TNotification): string => {
  return record.post?.toString() || String(record.id);
};
