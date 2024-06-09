import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type WhatsAppMessageWhereInput = {
  id?: StringFilter;
  message?: StringNullableFilter;
  recipientNumber?: StringNullableFilter;
  status?: StringNullableFilter;
};
