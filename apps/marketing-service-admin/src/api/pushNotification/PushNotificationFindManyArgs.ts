import { PushNotificationWhereInput } from "./PushNotificationWhereInput";
import { PushNotificationOrderByInput } from "./PushNotificationOrderByInput";

export type PushNotificationFindManyArgs = {
  where?: PushNotificationWhereInput;
  orderBy?: Array<PushNotificationOrderByInput>;
  skip?: number;
  take?: number;
};
