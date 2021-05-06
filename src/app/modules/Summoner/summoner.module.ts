import { Module } from '@nestjs/common';
import { SummonerResolver } from './summoner.resolver';
import { SummonerController } from './summoner.controller';
import { SummonerBusiness } from './summoner.business';
import { ServiceModule } from 'src/app/services/service.module';

@Module({
  imports: [ServiceModule],
  controllers: [SummonerController],
  providers: [SummonerResolver, SummonerBusiness],
})
export class SummonerModule {}
