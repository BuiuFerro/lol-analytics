import { Injectable } from '@nestjs/common';
import { LolService } from 'src/app/services/LolService/lol.service';
import { map, mergeMap } from 'rxjs/operators';
import { forkJoin, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { MatchInfoInterface } from 'src/app/interfaces/matchInfo';
import { SummonerInfoInterface } from 'src/app/interfaces/summonerInfo';
import { caculateStatistic } from 'src/app/utils/calculateStatistic';
import { ISummonerStatistics } from 'src/app/utils/interfaces/ISummonerStatistics';
import SummonerWithMatchListModel from 'src/app/models/summoner/summoner.model';

@Injectable()
export class SummonerBusiness {
    constructor(private lolService: LolService) { }

    getSummoner(summonerName: string): Observable<any> {
        return this.lolService.getSummonerByName(summonerName).pipe(
            map(this.buildSummonerResponse),
            mergeMap(this.buildObservableSummonerWithMatchList),
            mergeMap((summonerWithMatchListModel) => {
                const observablesMatchList = this.buildObservablesMatchList(
                    summonerWithMatchListModel,
                );
                return forkJoin([...observablesMatchList]).pipe(
                    map((match) => {
                        const gamesList = this.buildGameList(
                            match,
                            summonerWithMatchListModel,
                        );
                        const statistics: ISummonerStatistics[] = gamesList.map((game) => {
                            return game.reduce((acc: ISummonerStatistics, value) => {
                                return acc
                            }, caculateStatistic);
                        });
                    }),
                );
            }),
            map((a) => a),
        );
    }

    private buildGameList(
        match: AxiosResponse<MatchInfoInterface>[],
        summonerWithMatchListModel: SummonerWithMatchListModel,
    ) {
        return match.map(({ data: { info: { participants } } }) =>
            participants.filter(
                (fil) => fil.puuid === summonerWithMatchListModel.puuid,
            ),
        );
    }

    private buildObservablesMatchList(
        summonerWithMatchListModel: SummonerWithMatchListModel,
    ) {
        return summonerWithMatchListModel.macthList.map((matchid) =>
            this.lolService.getMatchInfo(matchid),
        );
    }

    private buildSummonerResponse(
        response: AxiosResponse<SummonerInfoInterface>,
    ): SummonerInfoInterface {
        return response.data;
    }

    private buildObservableSummonerWithMatchList(
        summonerData: SummonerInfoInterface,
    ): Observable<SummonerWithMatchListModel> {
        return this.lolService
            .getMatchList(summonerData.puuid)
            .pipe(map(this.buildSummonerWithMatchList(summonerData)));
    }

    private buildSummonerWithMatchList(summonerData: SummonerInfoInterface) {
        return (response: AxiosResponse<string[]>) => {
            return new SummonerWithMatchListModel({
                ...summonerData,
                macthList: response.data,
            });
        };
    }
}
