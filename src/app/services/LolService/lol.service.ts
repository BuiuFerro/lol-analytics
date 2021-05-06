import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import RIOT_API from 'src/app/constants/riotApi';
import { MatchInfoInterface } from 'src/app/interfaces/matchInfo';
import { MatchInfoTimelineInterface } from 'src/app/interfaces/matchInfoTimeline';
import { SummonerInfoInterface } from 'src/app/interfaces/summonerInfo';

@Injectable()
export class LolService {

  constructor(private httpService: HttpService, private configService: ConfigService) { }

  getSummonerByName(summonerName: string): Observable<AxiosResponse<SummonerInfoInterface>> {
    summonerName = 'o Dont Blink o';
    return this.httpService.get<SummonerInfoInterface>(`${RIOT_API.SUMMONER_INFO_URL}/${summonerName}`, {
      headers: {
        'X-Riot-Token': this.configService.get<string>('LOL_API_KEY')
      }
    })
  }

  getMatchList(uuid: string): Observable<AxiosResponse<string[]>> {
    return this.httpService.get<string[]>(`${RIOT_API.MATCH_LIST}/${uuid}/ids`, {
      headers: {
        'X-Riot-Token': this.configService.get<string>('LOL_API_KEY')
      },
      params: {
        start: 0, count: 20
      },
    })
  }

  getMatchInfo(matchId: string): Observable<AxiosResponse<MatchInfoInterface>> {
    return this.httpService.get<MatchInfoInterface>(`${RIOT_API.MATCH_INFO}/${matchId}`, {
      headers: {
        'X-Riot-Token': this.configService.get<string>('LOL_API_KEY')
      }
    })
  }

  getMatchInfoTimeLine(matchId: string): Observable<AxiosResponse<MatchInfoTimelineInterface>> {
    return this.httpService.get<MatchInfoTimelineInterface>(`${RIOT_API.MATCH_INFO}/${matchId}/timeline`, {
      headers: {
        'X-Riot-Token': this.configService.get<string>('LOL_API_KEY')
      }
    })
  }
}
