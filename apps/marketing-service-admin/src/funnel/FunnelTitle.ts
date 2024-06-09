import { Funnel as TFunnel } from "../api/funnel/Funnel";

export const FUNNEL_TITLE_FIELD = "id";

export const FunnelTitle = (record: TFunnel): string => {
  return record.id?.toString() || String(record.id);
};
