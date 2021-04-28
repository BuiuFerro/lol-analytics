import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiOkResponse } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import SummonerModel from 'src/app/models/summoner/summoner.model';
import { SummonerBusiness } from './summoner.business';

@Controller('summoner')
export class SummonerController {
    constructor(private summonerService: SummonerBusiness) { }
    @Get(':summonerName')
    @ApiResponse({ status: 200, description: 'Summoner data.', type: SummonerModel })
    findSummonerName(@Param('summonerName') summonerName: string): Observable<SummonerModel> {
        return this.summonerService.getSummoner(summonerName)
    }
}
