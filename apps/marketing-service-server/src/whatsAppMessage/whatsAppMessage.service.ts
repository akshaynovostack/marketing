import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WhatsAppMessageServiceBase } from "./base/whatsAppMessage.service.base";

@Injectable()
export class WhatsAppMessageService extends WhatsAppMessageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
