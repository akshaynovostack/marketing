import { Module } from "@nestjs/common";
import { WhatsAppMessageModuleBase } from "./base/whatsAppMessage.module.base";
import { WhatsAppMessageService } from "./whatsAppMessage.service";
import { WhatsAppMessageController } from "./whatsAppMessage.controller";
import { WhatsAppMessageResolver } from "./whatsAppMessage.resolver";

@Module({
  imports: [WhatsAppMessageModuleBase],
  controllers: [WhatsAppMessageController],
  providers: [WhatsAppMessageService, WhatsAppMessageResolver],
  exports: [WhatsAppMessageService],
})
export class WhatsAppMessageModule {}
