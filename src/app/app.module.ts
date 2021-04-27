import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from './modules/health/health.module';
import { HelloModule } from './modules/hello/hello.module';

@Module({
  imports: [
    HelloModule,
    HealthModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      include: [HelloModule]
    }),
    ConfigModule.forRoot({
      envFilePath: ['.env.local', '.env']
    }
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
