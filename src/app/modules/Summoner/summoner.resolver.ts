/* eslint-disable @typescript-eslint/no-unused-vars */
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import SummonerModel from 'src/app/models/summoner/summoner.model';
import { SummonerBusiness } from './summoner.business';

@Resolver((_of: any) => SummonerModel)
export class SummonerResolver {
  constructor(private summonerService: SummonerBusiness) {}
  @Query((_returns) => SummonerModel)
  findSummonerName(
    @Args('summonerName', { type: () => String }) summonerName: string,
  ): Observable<SummonerModel> {
    return this.summonerService.getSummoner(summonerName);
  }
}
