import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PushNotificationService } from "./pushNotification.service";
import { PushNotificationControllerBase } from "./base/pushNotification.controller.base";

@swagger.ApiTags("pushNotifications")
@common.Controller("pushNotifications")
export class PushNotificationController extends PushNotificationControllerBase {
  constructor(protected readonly service: PushNotificationService) {
    super(service);
  }
}
