import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  post?: SortOrder;
  status?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
