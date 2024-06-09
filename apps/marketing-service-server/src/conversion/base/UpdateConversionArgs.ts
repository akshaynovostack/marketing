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
import { ConversionWhereUniqueInput } from "./ConversionWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ConversionUpdateInput } from "./ConversionUpdateInput";

@ArgsType()
class UpdateConversionArgs {
  @ApiProperty({
    required: true,
    type: () => ConversionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ConversionWhereUniqueInput)
  @Field(() => ConversionWhereUniqueInput, { nullable: false })
  where!: ConversionWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ConversionUpdateInput,
  })
  @ValidateNested()
  @Type(() => ConversionUpdateInput)
  @Field(() => ConversionUpdateInput, { nullable: false })
  data!: ConversionUpdateInput;
}

export { UpdateConversionArgs as UpdateConversionArgs };