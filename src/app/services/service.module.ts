import { Global, HttpModule, HttpService, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LolService } from './LolService/lol.service';
import { AppService } from './ServiceExample/app.service';


@Global()
@Module({
  imports: [HttpModule, ConfigModule],
  exports: [AppService, LolService],
  providers: [
    ConfigService,
    AppService,
    LolService,
  ],
})
export class ServiceModule { }
