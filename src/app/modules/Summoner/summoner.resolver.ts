/* eslint-disable @typescript-eslint/no-unused-vars */
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import SummonerStatisticModel from 'src/app/models/summoner/summoner.model';
import { SummonerBusiness } from './summoner.business';

@Resolver((_of: any) => SummonerStatisticModel)
export class SummonerResolver {
  constructor(private summonerService: SummonerBusiness) {}
  @Query((_returns) => SummonerStatisticModel)
  findSummonerName(
    @Args('summonerName', { type: () => String }) summonerName: string,
  ): Observable<SummonerStatisticModel> {
    return this.summonerService.getSummoner(summonerName);
  }
}
