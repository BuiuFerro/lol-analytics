export interface ISummonerStatistics {
  assists: number;
  kills: number;
  deaths: number;

  detectorWardsPlaced: number;
  wardsPlaced: number;
  wardsKilled: number;
  visionScore: number;

  dragonKills: number;
  goldEarned: number;
  goldSpent: number;

  magicDamageDealt: number;
  magicDamageDealtToChampions: number;
  magicDamageTaken: number;

  neutralMinionsKilled: number;
  totalMinionsKilled: number;

  physicalDamageDealt: number;
  physicalDamageDealtToChampions: number;
  physicalDamageTaken: number;

  totalDamageDealt: number;
  totalDamageDealtToChampions: number;
  totalDamageShieldedOnTeammates: number;
  totalDamageTaken: number;

  totalHeal: number;
  totalHealsOnTeammates: number;

  totalTimeSpentDead: number;
  totalUnitsHealed: number;
  trueDamageDealt: number;
  trueDamageDealtToChampions: number;
  trueDamageTaken: number;

  firstBloodAssist: number;
  firstBloodKill: number;
  firstTowerAssist: number;
  firstTowerKill: number;

  objectivesStolen: number;
  objectivesStolenAssists: number;

  turretKills: number;
  turretsLost: number;

  win: number;
}
