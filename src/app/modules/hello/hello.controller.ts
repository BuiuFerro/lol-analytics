import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Query, Resolver } from '@nestjs/graphql';
import { AppService } from '../../services/ServiceExample/app.service';

@Controller()
export class HelloController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
