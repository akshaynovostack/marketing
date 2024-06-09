import { Module } from "@nestjs/common";
import { PushNotificationModuleBase } from "./base/pushNotification.module.base";
import { PushNotificationService } from "./pushNotification.service";
import { PushNotificationController } from "./pushNotification.controller";
import { PushNotificationResolver } from "./pushNotification.resolver";

@Module({
  imports: [PushNotificationModuleBase],
  controllers: [PushNotificationController],
  providers: [PushNotificationService, PushNotificationResolver],
  exports: [PushNotificationService],
})
export class PushNotificationModule {}
