import { SortOrder } from "../../util/SortOrder";

export type WhatsAppMessageOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  recipientNumber?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
