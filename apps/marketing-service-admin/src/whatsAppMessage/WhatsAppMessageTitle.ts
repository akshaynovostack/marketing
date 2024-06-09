import { WhatsAppMessage as TWhatsAppMessage } from "../api/whatsAppMessage/WhatsAppMessage";

export const WHATSAPPMESSAGE_TITLE_FIELD = "recipientNumber";

export const WhatsAppMessageTitle = (record: TWhatsAppMessage): string => {
  return record.recipientNumber?.toString() || String(record.id);
};
