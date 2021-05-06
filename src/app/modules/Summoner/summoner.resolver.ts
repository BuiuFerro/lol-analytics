/* eslint-disable @typescript-eslint/no-unused-vars */
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import SummonerWithMatchListModel from 'src/app/models/summoner/summoner.model';
import { SummonerBusiness } from './summoner.business';

@Resolver((_of: any) => SummonerWithMatchListModel)
export class SummonerResolver {
    constructor(private summonerService: SummonerBusiness) { }
    @Query((_returns) => SummonerWithMatchListModel)
    findSummonerName(
        @Args('summonerName', { type: () => String }) summonerName: string,
    ): Observable<SummonerWithMatchListModel> {
        return this.summonerService.getSummoner(summonerName);
    }
}
