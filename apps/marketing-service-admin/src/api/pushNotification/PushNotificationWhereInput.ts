import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PushNotificationWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  recipient?: StringNullableFilter;
  title?: StringNullableFilter;
};
