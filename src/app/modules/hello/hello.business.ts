import { Injectable } from '@nestjs/common';

import { AppService } from 'src/app/services/ServiceExample/app.service';

@Injectable()
export class HelloBusiness {
  constructor(private appService: AppService) {}

  getPaymentLinkByShortId(): string {
    return this.appService.getHello();
  }
}
