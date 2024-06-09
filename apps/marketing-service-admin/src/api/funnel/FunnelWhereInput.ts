import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type FunnelWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  step?: IntNullableFilter;
};
