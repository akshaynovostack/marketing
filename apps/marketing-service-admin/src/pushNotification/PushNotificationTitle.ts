import { PushNotification as TPushNotification } from "../api/pushNotification/PushNotification";

export const PUSHNOTIFICATION_TITLE_FIELD = "title";

export const PushNotificationTitle = (record: TPushNotification): string => {
  return record.title?.toString() || String(record.id);
};
