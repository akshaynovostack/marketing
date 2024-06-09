import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VendorConfigService } from "./vendorConfig.service";
import { VendorConfigControllerBase } from "./base/vendorConfig.controller.base";

@swagger.ApiTags("vendorConfigs")
@common.Controller("vendorConfigs")
export class VendorConfigController extends VendorConfigControllerBase {
  constructor(protected readonly service: VendorConfigService) {
    super(service);
  }
}
