import { Message as TMessage } from "../api/message/Message";

export const MESSAGE_TITLE_FIELD = "status";

export const MessageTitle = (record: TMessage): string => {
  return record.status?.toString() || String(record.id);
};
