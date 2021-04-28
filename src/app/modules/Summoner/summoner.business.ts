import { Injectable } from '@nestjs/common';
import { LolService } from 'src/app/services/LolService/lol.service';
import { map, mergeMap } from 'rxjs/operators'
import { observable, Observable, zip, } from 'rxjs';
import SummonerModel from 'src/app/models/summoner/summoner.model';

@Injectable()
export class SummonerBusiness {

    constructor(private lolService: LolService) { }

    getSummoner(summonerName: string): Observable<SummonerModel> {

        return this.lolService.getSummonerByName(summonerName)
            .pipe(
                map(summonerResponse => summonerResponse.data),
                mergeMap(summonerData =>
                    this.lolService.getMatchList(summonerData.puuid).pipe(
                        map(matchListResponse => {
                            return new SummonerModel({ ...summonerData, macthList: matchListResponse.data })
                        })
                    )
                ),
            )
    }
}


