import * as graphql from "@nestjs/graphql";
import { VendorConfigResolverBase } from "./base/vendorConfig.resolver.base";
import { VendorConfig } from "./base/VendorConfig";
import { VendorConfigService } from "./vendorConfig.service";

@graphql.Resolver(() => VendorConfig)
export class VendorConfigResolver extends VendorConfigResolverBase {
  constructor(protected readonly service: VendorConfigService) {
    super(service);
  }
}
