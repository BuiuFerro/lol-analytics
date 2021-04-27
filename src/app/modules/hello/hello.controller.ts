import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Query, Resolver } from '@nestjs/graphql';
import { AppService } from '../../services/ServiceExample/app.service';

@Controller()
export class HelloController {
  constructor(private readonly appService: AppService, private configService: ConfigService) { }

  @Get()
  getHello(): string {
    console.log(this.configService.get<string>('LOL_API_KEY'))
    return this.appService.getHello();
  }
}
