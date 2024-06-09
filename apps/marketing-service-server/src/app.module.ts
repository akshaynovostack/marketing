import { RabbitMQModule } from "./rabbitmq/rabbitmq.module";
import { Module } from "@nestjs/common";
import { EmailModule } from "./email/email.module";
import { ConversionModule } from "./conversion/conversion.module";
import { FunnelModule } from "./funnel/funnel.module";
import { LogModule } from "./log/log.module";
import { MessageModule } from "./message/message.module";
import { WhatsAppMessageModule } from "./whatsAppMessage/whatsAppMessage.module";
import { PushNotificationModule } from "./pushNotification/pushNotification.module";
import { VendorConfigModule } from "./vendorConfig/vendorConfig.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { KafkaModule } from "./rabbitmq/kafka.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    RabbitMQModule,
    KafkaModule,
    EmailModule,
    ConversionModule,
    FunnelModule,
    LogModule,
    MessageModule,
    WhatsAppMessageModule,
    PushNotificationModule,
    VendorConfigModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
