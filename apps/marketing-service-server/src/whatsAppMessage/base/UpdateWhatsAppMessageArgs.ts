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
import { WhatsAppMessageWhereUniqueInput } from "./WhatsAppMessageWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { WhatsAppMessageUpdateInput } from "./WhatsAppMessageUpdateInput";

@ArgsType()
class UpdateWhatsAppMessageArgs {
  @ApiProperty({
    required: true,
    type: () => WhatsAppMessageWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WhatsAppMessageWhereUniqueInput)
  @Field(() => WhatsAppMessageWhereUniqueInput, { nullable: false })
  where!: WhatsAppMessageWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => WhatsAppMessageUpdateInput,
  })
  @ValidateNested()
  @Type(() => WhatsAppMessageUpdateInput)
  @Field(() => WhatsAppMessageUpdateInput, { nullable: false })
  data!: WhatsAppMessageUpdateInput;
}

export { UpdateWhatsAppMessageArgs as UpdateWhatsAppMessageArgs };