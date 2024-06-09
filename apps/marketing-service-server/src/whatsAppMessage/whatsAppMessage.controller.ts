import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WhatsAppMessageService } from "./whatsAppMessage.service";
import { WhatsAppMessageControllerBase } from "./base/whatsAppMessage.controller.base";

@swagger.ApiTags("whatsAppMessages")
@common.Controller("whatsAppMessages")
export class WhatsAppMessageController extends WhatsAppMessageControllerBase {
  constructor(protected readonly service: WhatsAppMessageService) {
    super(service);
  }
}
