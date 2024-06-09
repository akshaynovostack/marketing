/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { WhatsAppMessage } from "./WhatsAppMessage";
import { WhatsAppMessageCountArgs } from "./WhatsAppMessageCountArgs";
import { WhatsAppMessageFindManyArgs } from "./WhatsAppMessageFindManyArgs";
import { WhatsAppMessageFindUniqueArgs } from "./WhatsAppMessageFindUniqueArgs";
import { CreateWhatsAppMessageArgs } from "./CreateWhatsAppMessageArgs";
import { UpdateWhatsAppMessageArgs } from "./UpdateWhatsAppMessageArgs";
import { DeleteWhatsAppMessageArgs } from "./DeleteWhatsAppMessageArgs";
import { WhatsAppMessageCreateInput } from "./WhatsAppMessageCreateInput";
import { WhatsAppMessageService } from "../whatsAppMessage.service";
@graphql.Resolver(() => WhatsAppMessage)
export class WhatsAppMessageResolverBase {
  constructor(protected readonly service: WhatsAppMessageService) {}

  async _whatsAppMessagesMeta(
    @graphql.Args() args: WhatsAppMessageCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [WhatsAppMessage])
  async whatsAppMessages(
    @graphql.Args() args: WhatsAppMessageFindManyArgs
  ): Promise<WhatsAppMessage[]> {
    return this.service.whatsAppMessages(args);
  }

  @graphql.Query(() => WhatsAppMessage, { nullable: true })
  async whatsAppMessage(
    @graphql.Args() args: WhatsAppMessageFindUniqueArgs
  ): Promise<WhatsAppMessage | null> {
    const result = await this.service.whatsAppMessage(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => WhatsAppMessage)
  async createWhatsAppMessage(
    @graphql.Args() args: CreateWhatsAppMessageArgs
  ): Promise<WhatsAppMessage> {
    return await this.service.createWhatsAppMessage({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => WhatsAppMessage)
  async updateWhatsAppMessage(
    @graphql.Args() args: UpdateWhatsAppMessageArgs
  ): Promise<WhatsAppMessage | null> {
    try {
      return await this.service.updateWhatsAppMessage({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => WhatsAppMessage)
  async deleteWhatsAppMessage(
    @graphql.Args() args: DeleteWhatsAppMessageArgs
  ): Promise<WhatsAppMessage | null> {
    try {
      return await this.service.deleteWhatsAppMessage(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => String)
  async SendMessageWhatsApp(
    @graphql.Args()
    args: WhatsAppMessageCreateInput
  ): Promise<string> {
    return this.service.SendMessageWhatsApp(args);
  }

  @graphql.Query(() => String)
  async SendWhatsAppMessage(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.SendWhatsAppMessage(args);
  }
}
