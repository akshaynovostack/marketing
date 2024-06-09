import * as graphql from "@nestjs/graphql";
import { PushNotificationResolverBase } from "./base/pushNotification.resolver.base";
import { PushNotification } from "./base/PushNotification";
import { PushNotificationService } from "./pushNotification.service";

@graphql.Resolver(() => PushNotification)
export class PushNotificationResolver extends PushNotificationResolverBase {
  constructor(protected readonly service: PushNotificationService) {
    super(service);
  }
}
