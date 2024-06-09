/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Conversion as PrismaConversion } from "@prisma/client";
import { ConversionCreateInput } from "./ConversionCreateInput";

export class ConversionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ConversionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.conversion.count(args);
  }

  async conversions<T extends Prisma.ConversionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConversionFindManyArgs>
  ): Promise<PrismaConversion[]> {
    return this.prisma.conversion.findMany<Prisma.ConversionFindManyArgs>(args);
  }
  async conversion<T extends Prisma.ConversionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConversionFindUniqueArgs>
  ): Promise<PrismaConversion | null> {
    return this.prisma.conversion.findUnique(args);
  }
  async createConversion<T extends Prisma.ConversionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConversionCreateArgs>
  ): Promise<PrismaConversion> {
    return this.prisma.conversion.create<T>(args);
  }
  async updateConversion<T extends Prisma.ConversionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConversionUpdateArgs>
  ): Promise<PrismaConversion> {
    return this.prisma.conversion.update<T>(args);
  }
  async deleteConversion<T extends Prisma.ConversionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ConversionDeleteArgs>
  ): Promise<PrismaConversion> {
    return this.prisma.conversion.delete(args);
  }
  async CreateConversion(args: ConversionCreateInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async LogConversion(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
