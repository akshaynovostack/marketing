/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FunnelWhereInput } from "./FunnelWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { FunnelOrderByInput } from "./FunnelOrderByInput";

@ArgsType()
class FunnelFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FunnelWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => FunnelWhereInput, { nullable: true })
  @Type(() => FunnelWhereInput)
  where?: FunnelWhereInput;

  @ApiProperty({
    required: false,
    type: [FunnelOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [FunnelOrderByInput], { nullable: true })
  @Type(() => FunnelOrderByInput)
  orderBy?: Array<FunnelOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { FunnelFindManyArgs as FunnelFindManyArgs };
