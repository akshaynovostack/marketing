/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { WhatsAppMessageWhereInput } from "./WhatsAppMessageWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class WhatsAppMessageListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => WhatsAppMessageWhereInput,
  })
  @ValidateNested()
  @Type(() => WhatsAppMessageWhereInput)
  @IsOptional()
  @Field(() => WhatsAppMessageWhereInput, {
    nullable: true,
  })
  every?: WhatsAppMessageWhereInput;

  @ApiProperty({
    required: false,
    type: () => WhatsAppMessageWhereInput,
  })
  @ValidateNested()
  @Type(() => WhatsAppMessageWhereInput)
  @IsOptional()
  @Field(() => WhatsAppMessageWhereInput, {
    nullable: true,
  })
  some?: WhatsAppMessageWhereInput;

  @ApiProperty({
    required: false,
    type: () => WhatsAppMessageWhereInput,
  })
  @ValidateNested()
  @Type(() => WhatsAppMessageWhereInput)
  @IsOptional()
  @Field(() => WhatsAppMessageWhereInput, {
    nullable: true,
  })
  none?: WhatsAppMessageWhereInput;
}
export { WhatsAppMessageListRelationFilter as WhatsAppMessageListRelationFilter };
