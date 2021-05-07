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
import SummonerStatisticModel from 'src/app/models/summoner/summoner.model';

@Injectable()
export class SummonerBusiness {
  constructor(private lolService: LolService) {}

  getSummoner(summonerName: string): Observable<SummonerStatisticModel> {
    return this.lolService.getSummonerByName(summonerName).pipe(
      map(buildSummonerData()),
      mergeMap((summonerData) =>
        this.lolService
          .getMatchList(summonerData.puuid)
          .pipe(map(buildSummonerMatchList(summonerData))),
      ),
      mergeMap((summonerWithMatchList) => {
        const observablesMatchList = summonerWithMatchList.macthList.map(
          (matchid) => this.lolService.getMatchInfo(matchid),
        );
        return forkJoin([...observablesMatchList])
          .pipe(
            map((match) => {
              const gamesList = findSummonerByMatchList(
                match,
                summonerWithMatchList,
              );

              return buildSummonerStatisticsList(gamesList);
            }),
          )
          .pipe(
            map((response) => {
              const {
                name,
                summonerLevel,
                profileIconId,
              } = summonerWithMatchList;
              return {
                name,
                summonerLevel,
                profileIconId,
                statistic: response,
              };
            }),
          );
      }),
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
  gamesList: Participant[],
): ISummonerStatistics {
  return gamesList.reduce((acc, value) => {
    Object.keys(acc).forEach((key) => (acc[key] += Number(value[key])));
    return acc;
  }, caculateStatistic);
}

function findSummonerByMatchList(
  match: AxiosResponse<MatchInfoInterface>[],
  summonerWithMatchList: ISummonerMatchList,
) {
  return match.map(({ data: { info: { participants } } }) =>
    participants.find(
      (fil) =>
        fil.summonerName === summonerWithMatchList.name.toLocaleLowerCase(),
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
