import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EmailWhereInput = {
  body?: StringNullableFilter;
  id?: StringFilter;
  recipient?: StringNullableFilter;
  subject?: StringNullableFilter;
};
