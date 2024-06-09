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
import { FunnelService } from "../funnel.service";
import { FunnelCreateInput } from "./FunnelCreateInput";
import { Funnel } from "./Funnel";
import { FunnelFindManyArgs } from "./FunnelFindManyArgs";
import { FunnelWhereUniqueInput } from "./FunnelWhereUniqueInput";
import { FunnelUpdateInput } from "./FunnelUpdateInput";

export class FunnelControllerBase {
  constructor(protected readonly service: FunnelService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Funnel })
  async createFunnel(@common.Body() data: FunnelCreateInput): Promise<Funnel> {
    return await this.service.createFunnel({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        step: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Funnel] })
  @ApiNestedQuery(FunnelFindManyArgs)
  async funnels(@common.Req() request: Request): Promise<Funnel[]> {
    const args = plainToClass(FunnelFindManyArgs, request.query);
    return this.service.funnels({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        step: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Funnel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async funnel(
    @common.Param() params: FunnelWhereUniqueInput
  ): Promise<Funnel | null> {
    const result = await this.service.funnel({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        step: true,
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
  @swagger.ApiOkResponse({ type: Funnel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateFunnel(
    @common.Param() params: FunnelWhereUniqueInput,
    @common.Body() data: FunnelUpdateInput
  ): Promise<Funnel | null> {
    try {
      return await this.service.updateFunnel({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          step: true,
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
  @swagger.ApiOkResponse({ type: Funnel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteFunnel(
    @common.Param() params: FunnelWhereUniqueInput
  ): Promise<Funnel | null> {
    try {
      return await this.service.deleteFunnel({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          step: true,
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
