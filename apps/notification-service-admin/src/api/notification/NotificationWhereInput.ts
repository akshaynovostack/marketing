import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type NotificationWhereInput = {
  id?: StringFilter;
  message?: StringNullableFilter;
  post?: StringNullableFilter;
  status?: StringNullableFilter;
  typeField?: StringNullableFilter;
};
