/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import Statistics from './statistics.model';

@ObjectType()
export default class SummonerStatisticModel {
  @ApiProperty({ required: true })
  @Field((type) => String)
  name: string;

  @ApiProperty({ required: true })
  @Field((type) => Number)
  profileIconId: number;

  @ApiProperty({ required: true })
  @Field((type) => Number)
  summonerLevel: number;

  @ApiProperty({ required: true })
  @Field((type) => Statistics)
  statistic: Statistics;

  constructor(
    name: string,
    profileIconId: number,
    summonerLevel: number,
    statistic: Statistics,
  ) {
    this.name = name;
    this.profileIconId = profileIconId;
    this.summonerLevel = summonerLevel;
    this.statistic = statistic;
  }
}
