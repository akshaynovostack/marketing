import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LogWhereInput = {
  id?: StringFilter;
  message?: StringNullableFilter;
  status?: StringNullableFilter;
  typeField?: StringNullableFilter;
};
