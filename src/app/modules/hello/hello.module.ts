import { Module } from '@nestjs/common';
import { ServiceModule } from 'src/app/services/service.module';
import { HelloBusiness } from './hello.business';
import { HelloController } from './hello.controller';
import { HelloResolver } from './hello.resolver';

@Module({
  imports: [ServiceModule],
  controllers: [HelloController],
  providers: [HelloBusiness, HelloResolver],
})
export class HelloModule {}
