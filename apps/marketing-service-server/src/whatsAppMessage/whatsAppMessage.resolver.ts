import * as graphql from "@nestjs/graphql";
import { WhatsAppMessageResolverBase } from "./base/whatsAppMessage.resolver.base";
import { WhatsAppMessage } from "./base/WhatsAppMessage";
import { WhatsAppMessageService } from "./whatsAppMessage.service";

@graphql.Resolver(() => WhatsAppMessage)
export class WhatsAppMessageResolver extends WhatsAppMessageResolverBase {
  constructor(protected readonly service: WhatsAppMessageService) {
    super(service);
  }
}
