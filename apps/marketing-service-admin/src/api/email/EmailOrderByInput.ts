import { SortOrder } from "../../util/SortOrder";

export type EmailOrderByInput = {
  body?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  recipient?: SortOrder;
  subject?: SortOrder;
  updatedAt?: SortOrder;
};
