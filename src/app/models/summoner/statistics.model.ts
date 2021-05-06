/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { ISummonerStatistics } from 'src/app/utils/interfaces/ISummonerStatistics';

@ObjectType()
export default class Statistics implements ISummonerStatistics {
  @ApiProperty({ required: true })
  @Field((type) => Number)
  assists: number;

  @ApiProperty({ required: true })
  @Field((type) => Number)
  kills: number;

  @ApiProperty({ required: true })
  @Field((type) => Number)
  deaths: number;

  @ApiProperty({ required: true })
  @Field((type) => Number)
  detectorWardsPlaced: number;

  @ApiProperty({ required: true })
  @Field((type) => Number)
  wardsPlaced: number;

  @ApiProperty({ required: true })
  @Field((type) => Number)
  wardsKilled: number;

  @ApiProperty({ required: true })
  @Field((type) => Number)
  visionScore: number;

  @ApiProperty({ required: true })
  @Field((type) => Number)
  dragonKills: number;

  @ApiProperty({ required: true })
  @Field((type) => Number)
  goldEarned: number;

  @ApiProperty({ required: true })
  @Field((type) => Number)
  goldSpent: number;

  @ApiProperty({ required: true })
  @Field((type) => Number)
  magicDamageDealt: number;

  @ApiProperty({ required: true })
  @Field((type) => Number)
  magicDamageDealtToChampions: number;

  @ApiProperty({ required: true })
  @Field((type) => Number)
  magicDamageTaken: number;

  @ApiProperty({ required: true })
  @Field((type) => Number)
  neutralMinionsKilled: number;

  @ApiProperty({ required: true })
  @Field((type) => Number)
  totalMinionsKilled: number;

  @ApiProperty({ required: true })
  @Field((type) => Number)
  physicalDamageDealt: number;

  @ApiProperty({ required: true })
  @Field((type) => Number)
  physicalDamageDealtToChampions: number;

  @ApiProperty({ required: true })
  @Field((type) => Number)
  physicalDamageTaken: number;

  @ApiProperty({ required: true })
  @Field((type) => Number)
  totalDamageDealt: number;

  @ApiProperty({ required: true })
  @Field((type) => Number)
  totalDamageDealtToChampions: number;

  @ApiProperty({ required: true })
  @Field((type) => Number)
  totalDamageShieldedOnTeammates: number;

  @ApiProperty({ required: true })
  @Field((type) => Number)
  totalDamageTaken: number;

  @ApiProperty({ required: true })
  @Field((type) => Number)
  totalHeal: number;

  @ApiProperty({ required: true })
  @Field((type) => Number)
  totalHealsOnTeammates: number;

  @ApiProperty({ required: true })
  @Field((type) => Number)
  totalTimeSpentDead: number;

  @ApiProperty({ required: true })
  @Field((type) => Number)
  totalUnitsHealed: number;

  @ApiProperty({ required: true })
  @Field((type) => Number)
  trueDamageDealt: number;

  @ApiProperty({ required: true })
  @Field((type) => Number)
  trueDamageDealtToChampions: number;

  @ApiProperty({ required: true })
  @Field((type) => Number)
  trueDamageTaken: number;

  @ApiProperty({ required: true })
  @Field((type) => Number)
  firstBloodAssist: number;

  @ApiProperty({ required: true })
  @Field((type) => Number)
  firstBloodKill: number;

  @ApiProperty({ required: true })
  @Field((type) => Number)
  firstTowerAssist: number;

  @ApiProperty({ required: true })
  @Field((type) => Number)
  firstTowerKill: number;

  @ApiProperty({ required: true })
  @Field((type) => Number)
  objectivesStolen: number;

  @ApiProperty({ required: true })
  @Field((type) => Number)
  objectivesStolenAssists: number;

  @ApiProperty({ required: true })
  @Field((type) => Number)
  turretKills: number;

  @ApiProperty({ required: true })
  @Field((type) => Number)
  turretsLost: number;

  @ApiProperty({ required: true })
  @Field((type) => Number)
  win: number;

  constructor(
    assists: number,
    kills: number,
    deaths: number,
    detectorWardsPlaced: number,
    wardsPlaced: number,
    wardsKilled: number,
    visionScore: number,
    dragonKills: number,
    goldEarned: number,
    goldSpent: number,
    magicDamageDealt: number,
    magicDamageDealtToChampions: number,
    magicDamageTaken: number,
    neutralMinionsKilled: number,
    totalMinionsKilled: number,
    physicalDamageDealt: number,
    physicalDamageDealtToChampions: number,
    physicalDamageTaken: number,
    totalDamageDealt: number,
    totalDamageDealtToChampions: number,
    totalDamageShieldedOnTeammates: number,
    totalDamageTaken: number,
    totalHeal: number,
    totalHealsOnTeammates: number,
    totalTimeSpentDead: number,
    totalUnitsHealed: number,
    trueDamageDealt: number,
    trueDamageDealtToChampions: number,
    trueDamageTaken: number,
    firstBloodAssist: number,
    firstBloodKill: number,
    firstTowerAssist: number,
    firstTowerKill: number,
    objectivesStolen: number,
    objectivesStolenAssists: number,
    turretKills: number,
    turretsLost: number,
    win: number,
  ) {
    this.assists = assists;
    this.kills = kills;
    this.deaths = deaths;
    this.detectorWardsPlaced = detectorWardsPlaced;
    this.wardsPlaced = wardsPlaced;
    this.wardsKilled = wardsKilled;
    this.visionScore = visionScore;
    this.dragonKills = dragonKills;
    this.goldEarned = goldEarned;
    this.goldSpent = goldSpent;
    this.magicDamageDealt = magicDamageDealt;
    this.magicDamageDealtToChampions = magicDamageDealtToChampions;
    this.magicDamageTaken = magicDamageTaken;
    this.neutralMinionsKilled = neutralMinionsKilled;
    this.totalMinionsKilled = totalMinionsKilled;
    this.physicalDamageDealt = physicalDamageDealt;
    this.physicalDamageDealtToChampions = physicalDamageDealtToChampions;
    this.physicalDamageTaken = physicalDamageTaken;
    this.totalDamageDealt = totalDamageDealt;
    this.totalDamageDealtToChampions = totalDamageDealtToChampions;
    this.totalDamageShieldedOnTeammates = totalDamageShieldedOnTeammates;
    this.totalDamageTaken = totalDamageTaken;
    this.totalHeal = totalHeal;
    this.totalHealsOnTeammates = totalHealsOnTeammates;
    this.totalTimeSpentDead = totalTimeSpentDead;
    this.totalUnitsHealed = totalUnitsHealed;
    this.trueDamageDealt = trueDamageDealt;
    this.trueDamageDealtToChampions = trueDamageDealtToChampions;
    this.trueDamageTaken = trueDamageTaken;
    this.firstBloodAssist = firstBloodAssist;
    this.firstBloodKill = firstBloodKill;
    this.firstTowerAssist = firstTowerAssist;
    this.firstTowerKill = firstTowerKill;
    this.objectivesStolen = objectivesStolen;
    this.objectivesStolenAssists = objectivesStolenAssists;
    this.turretKills = turretKills;
    this.turretsLost = turretsLost;
    this.win = win;
  }
}
