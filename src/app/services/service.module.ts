import { Global, HttpModule, HttpService, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppService } from './ServiceExample/app.service';


@Global()
@Module({
  imports: [HttpModule],
  exports: [AppService],
  providers: [
    ConfigService,
    AppService
  ],
})
export class ServiceModule {}
