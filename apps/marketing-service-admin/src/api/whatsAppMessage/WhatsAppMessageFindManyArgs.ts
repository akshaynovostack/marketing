import { WhatsAppMessageWhereInput } from "./WhatsAppMessageWhereInput";
import { WhatsAppMessageOrderByInput } from "./WhatsAppMessageOrderByInput";

export type WhatsAppMessageFindManyArgs = {
  where?: WhatsAppMessageWhereInput;
  orderBy?: Array<WhatsAppMessageOrderByInput>;
  skip?: number;
  take?: number;
};
