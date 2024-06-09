/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { VendorConfigService } from "../vendorConfig.service";
import { VendorConfigCreateInput } from "./VendorConfigCreateInput";
import { VendorConfig } from "./VendorConfig";
import { VendorConfigFindManyArgs } from "./VendorConfigFindManyArgs";
import { VendorConfigWhereUniqueInput } from "./VendorConfigWhereUniqueInput";
import { VendorConfigUpdateInput } from "./VendorConfigUpdateInput";

export class VendorConfigControllerBase {
  constructor(protected readonly service: VendorConfigService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: VendorConfig })
  async createVendorConfig(
    @common.Body() data: VendorConfigCreateInput
  ): Promise<VendorConfig> {
    return await this.service.createVendorConfig({
      data: data,
      select: {
        configData: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [VendorConfig] })
  @ApiNestedQuery(VendorConfigFindManyArgs)
  async vendorConfigs(@common.Req() request: Request): Promise<VendorConfig[]> {
    const args = plainToClass(VendorConfigFindManyArgs, request.query);
    return this.service.vendorConfigs({
      ...args,
      select: {
        configData: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: VendorConfig })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async vendorConfig(
    @common.Param() params: VendorConfigWhereUniqueInput
  ): Promise<VendorConfig | null> {
    const result = await this.service.vendorConfig({
      where: params,
      select: {
        configData: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: VendorConfig })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateVendorConfig(
    @common.Param() params: VendorConfigWhereUniqueInput,
    @common.Body() data: VendorConfigUpdateInput
  ): Promise<VendorConfig | null> {
    try {
      return await this.service.updateVendorConfig({
        where: params,
        data: data,
        select: {
          configData: true,
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: VendorConfig })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteVendorConfig(
    @common.Param() params: VendorConfigWhereUniqueInput
  ): Promise<VendorConfig | null> {
    try {
      return await this.service.deleteVendorConfig({
        where: params,
        select: {
          configData: true,
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
