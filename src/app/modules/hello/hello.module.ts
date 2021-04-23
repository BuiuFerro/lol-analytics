import { Module } from '@nestjs/common';
import { ServiceModule } from 'src/app/services/service.module';
import { HelloBusiness } from './hello.business';
import { HelloController } from './hello.controller';


@Module({
  imports: [ServiceModule],
  controllers: [HelloController],
  providers: [HelloBusiness],
})
export class HelloModule {}
