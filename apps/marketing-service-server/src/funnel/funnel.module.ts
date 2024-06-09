import { Module } from "@nestjs/common";
import { FunnelModuleBase } from "./base/funnel.module.base";
import { FunnelService } from "./funnel.service";
import { FunnelController } from "./funnel.controller";
import { FunnelResolver } from "./funnel.resolver";

@Module({
  imports: [FunnelModuleBase],
  controllers: [FunnelController],
  providers: [FunnelService, FunnelResolver],
  exports: [FunnelService],
})
export class FunnelModule {}
