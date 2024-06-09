import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FunnelService } from "./funnel.service";
import { FunnelControllerBase } from "./base/funnel.controller.base";

@swagger.ApiTags("funnels")
@common.Controller("funnels")
export class FunnelController extends FunnelControllerBase {
  constructor(protected readonly service: FunnelService) {
    super(service);
  }
}
