import { Module } from '@nestjs/common';
import { HealthModule } from './modules/health/health.module';
import { HelloModule } from './modules/hello/hello.module';

@Module({
  imports: [HelloModule, HealthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
