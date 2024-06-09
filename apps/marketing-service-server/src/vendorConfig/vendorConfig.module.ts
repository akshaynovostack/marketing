import { Module } from "@nestjs/common";
import { VendorConfigModuleBase } from "./base/vendorConfig.module.base";
import { VendorConfigService } from "./vendorConfig.service";
import { VendorConfigController } from "./vendorConfig.controller";
import { VendorConfigResolver } from "./vendorConfig.resolver";

@Module({
  imports: [VendorConfigModuleBase],
  controllers: [VendorConfigController],
  providers: [VendorConfigService, VendorConfigResolver],
  exports: [VendorConfigService],
})
export class VendorConfigModule {}
