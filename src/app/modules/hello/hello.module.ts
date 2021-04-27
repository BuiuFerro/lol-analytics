import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServiceModule } from 'src/app/services/service.module';
import { HelloBusiness } from './hello.business';
import { HelloController } from './hello.controller';
import { HelloResolver } from './hello.resolver';


@Module({
  imports: [ServiceModule, ConfigModule],
  controllers: [HelloController],
  providers: [HelloBusiness, HelloResolver],
})
export class HelloModule { }
