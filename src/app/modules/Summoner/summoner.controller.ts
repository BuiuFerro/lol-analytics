import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiResponse, ApiOkResponse } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { SummonerInfoInterface } from 'src/app/interfaces/summonerInfo';
import SummonerModel from 'src/app/models/summoner/summoner.model';
import { SummonerBusiness } from './summoner.business';

@Controller('summoner')
export class SummonerController {

  summonerName: string | PromiseLike<string>

  constructor(private summonerService: SummonerBusiness) { }

  @Post()
  async enterSummonerName(@Body() summoner: string): Promise<string> {
    this.summonerName = summoner;
    return this.summonerName;
  }

  @Get(':summonerName')
  @ApiResponse({ status: 200, description: 'Summoner data.', type: SummonerModel })
  findSummonerName(@Param('summonerName') summonerName: string): Observable<SummonerModel> {
    return this.summonerService.getSummoner(summonerName)
  }

  @Post(':summonerName')
  async getSummonerInfo(@Param('summonerName') summonerName: string): Promise<SummonerInfoInterface> {
    this.summonerName = summonerName;
    return;
  }

  @Get(':summonerInfo')
  async findSummonerInfo(@Param('summonerName') summonerName: string) {
    this.summonerName = summonerName;
    return this.summonerName;
    ;
  }
}
