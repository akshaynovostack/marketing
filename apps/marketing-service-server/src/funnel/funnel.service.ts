import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FunnelServiceBase } from "./base/funnel.service.base";

@Injectable()
export class FunnelService extends FunnelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
