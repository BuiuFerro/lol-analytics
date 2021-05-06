import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { HealthModule } from './modules/health/health.module';
import { HelloModule } from './modules/hello/hello.module';
import { SummonerModule } from './modules/summoner/summoner.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://buiuferro:lol-cluster@lol-cluster.bizxl.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    HelloModule,
    HealthModule,
    SummonerModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      include: [HelloModule, SummonerModule],
    }),
    ConfigModule.forRoot({
      envFilePath: ['.env.local', '.env'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
