import { Log as TLog } from "../api/log/Log";

export const LOG_TITLE_FIELD = "status";

export const LogTitle = (record: TLog): string => {
  return record.status?.toString() || String(record.id);
};
