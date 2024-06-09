import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PushNotificationServiceBase } from "./base/pushNotification.service.base";

@Injectable()
export class PushNotificationService extends PushNotificationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
