import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SummonerInfoInterface } from 'src/interfaces/summonerInfo';
import { Summoner } from 'src/interfaces/summonerName';

@Controller('app')
export class AppController {

  private summonerName: string;

  @Post()
  async enterSummonerName(@Body() summoner: Summoner): Promise<string> {
    this.summonerName = summoner.summonerName;
    return this.summonerName;
  }

  @Get(':summonerName')
  async findSummonerName(@Param('summonerName') summonerName: string) {
    this.summonerName = summonerName;
    return this.summonerName;
    ;
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