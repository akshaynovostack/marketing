import * as graphql from "@nestjs/graphql";
import { FunnelResolverBase } from "./base/funnel.resolver.base";
import { Funnel } from "./base/Funnel";
import { FunnelService } from "./funnel.service";

@graphql.Resolver(() => Funnel)
export class FunnelResolver extends FunnelResolverBase {
  constructor(protected readonly service: FunnelService) {
    super(service);
  }
}
