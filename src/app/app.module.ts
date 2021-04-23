import { Module } from '@nestjs/common';
import { HealthModule } from './modules/health/health.module';
import { HelloModule } from './modules/hello/hello.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    HelloModule,
    HealthModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      include: [HelloModule]
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
