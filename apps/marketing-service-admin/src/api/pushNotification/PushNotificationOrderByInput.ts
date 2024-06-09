import { SortOrder } from "../../util/SortOrder";

export type PushNotificationOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  recipient?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
