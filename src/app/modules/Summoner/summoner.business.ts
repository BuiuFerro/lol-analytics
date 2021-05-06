import { Injectable } from '@nestjs/common';
import { LolService } from 'src/app/services/LolService/lol.service';
import { map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';
import { ISummonerStatistics } from 'src/app/utils/interfaces/ISummonerStatistics';
import { caculateStatistic } from 'src/app/utils/calculateStatistic';
import { AxiosResponse } from 'axios';
import { SummonerInfoInterface } from 'src/app/interfaces/summonerInfo';
import { ISummonerMatchList } from 'src/app/utils/interfaces/ISummonerMatchList';
import { MatchInfoInterface, Participant } from 'src/app/interfaces/matchInfo';

@Injectable()
export class SummonerBusiness {
  constructor(private lolService: LolService) {}

  getSummoner(summonerName: string): Observable<any> {
    return this.lolService.getSummonerByName(summonerName).pipe(
      map(buildSummonerData()),
      mergeMap((summonerData) =>
        this.lolService
          .getMatchList(summonerData.puuid)
          .pipe(map(buildSummonerMatchList(summonerData))),
      ),
      mergeMap((summonerWithMatchListModel) => {
        const observablesMatchList = summonerWithMatchListModel.macthList.map(
          (matchid) => this.lolService.getMatchInfo(matchid),
        );
        return forkJoin([...observablesMatchList])
          .pipe(
            map((match) => {
              const gamesList = findSummonerByMatchList(
                match,
                summonerWithMatchListModel,
              );
              const statistics: ISummonerStatistics[] = buildSummonerStatisticsList(
                gamesList,
              );

              const statisticsGlobal: ISummonerStatistics = buildSummonerStatisticsGlobal(
                statistics,
              );

              return statisticsGlobal;
            }),
          )
          .pipe(
            map((response) => {
              const {
                name,
                summonerLevel,
                profileIconId,
              } = summonerWithMatchListModel;
              return {
                name,
                summonerLevel,
                profileIconId,
                statistic: response,
              };
            }),
          );
      }),
      map((e) => e),
    );
  }
}
function buildSummonerStatisticsGlobal(
  statistics: ISummonerStatistics[],
): ISummonerStatistics {
  return statistics.reduce((acc, value) => {
    Object.keys(acc).forEach((key) => (acc[key] += Number(value[key])));
    return acc;
  }, caculateStatistic);
}

function buildSummonerStatisticsList(
  gamesList: Participant[][],
): ISummonerStatistics[] {
  return gamesList.map((game) =>
    game.reduce((acc, value) => {
      Object.keys(acc).forEach((key) => (acc[key] += Number(value[key])));
      return acc;
    }, caculateStatistic),
  );
}

function findSummonerByMatchList(
  match: AxiosResponse<MatchInfoInterface>[],
  summonerWithMatchListModel: ISummonerMatchList,
) {
  return match.map(({ data: { info: { participants } } }) =>
    participants.filter(
      (fil) => fil.puuid === summonerWithMatchListModel.puuid,
    ),
  );
}

function buildSummonerMatchList(
  summonerData: SummonerInfoInterface,
): (value: AxiosResponse<string[]>, index: number) => ISummonerMatchList {
  return (matchListResponse) => ({
    ...summonerData,
    macthList: matchListResponse.data,
  });
}

function buildSummonerData() {
  return (
    summonerResponse: AxiosResponse<SummonerInfoInterface>,
  ): SummonerInfoInterface => summonerResponse.data;
}
