/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { ISummonerStatistics } from 'src/app/utils/interfaces/ISummonerStatistics';

interface ISummonerWithMacthListModel {
  name: string;
  profileIconId: number;
  summonerLevel: number;
  statistic: ISummonerStatistics;
}

@ObjectType()
export default class SummonerWithMatchListModel
  implements ISummonerWithMacthListModel {
  @ApiProperty({ required: true })
  @Field((type) => String)
  name: string;

  @ApiProperty({ required: true })
  @Field((type) => Number)
  profileIconId: number;

  @ApiProperty({ required: true })
  @Field((type) => Number)
  summonerLevel: number;

  statistic: ISummonerStatistics;
}
