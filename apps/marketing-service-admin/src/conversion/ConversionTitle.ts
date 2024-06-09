import { Conversion as TConversion } from "../api/conversion/Conversion";

export const CONVERSION_TITLE_FIELD = "name";

export const ConversionTitle = (record: TConversion): string => {
  return record.name?.toString() || String(record.id);
};
