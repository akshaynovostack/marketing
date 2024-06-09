import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VendorConfigServiceBase } from "./base/vendorConfig.service.base";

@Injectable()
export class VendorConfigService extends VendorConfigServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
