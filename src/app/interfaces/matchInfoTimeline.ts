export interface MatchInfoTimelineInterface {
  metadata: Metadata;
  info: Info;
}

export interface Info {
  frameInterval: number;
  frames: Frame[];
  gameId: number;
  participants: Participant[];
}

export interface Frame {
  events: Event[];
  participantFrames: { [key: string]: ParticipantFrame };
  timestamp: number;
}

export interface Event {
  level?: number;
  participantId?: number;
  timestamp: number;
  type: EventType;
  realTimestamp?: number;
  levelUpType?: LevelUpType;
  skillSlot?: number;
  itemId?: number;
  afterId?: number;
  beforeId?: number;
  goldGain?: number;
  creatorId?: number;
  wardType?: WardType;
  bounty?: number;
  killStreakLength?: number;
  killerId?: number;
  position?: Position;
  victimDamageDealt?: VictimDamage[];
  victimDamageReceived?: VictimDamage[];
  victimId?: number;
  killType?: string;
  assistingParticipantIds?: number[];
  laneType?: LaneType;
  teamId?: number;
  multiKillLength?: number;
  buildingType?: string;
  towerType?: string;
  killerTeamId?: number;
  monsterSubType?: string;
  monsterType?: string;
  gameId?: number;
  winningTeam?: number;
}

export enum LaneType {
  BotLane = 'BOT_LANE',
  MidLane = 'MID_LANE',
  TopLane = 'TOP_LANE',
}

export enum LevelUpType {
  Normal = 'NORMAL',
}

export interface Position {
  x: number;
  y: number;
}

export enum EventType {
  BuildingKill = 'BUILDING_KILL',
  ChampionKill = 'CHAMPION_KILL',
  ChampionSpecialKill = 'CHAMPION_SPECIAL_KILL',
  EliteMonsterKill = 'ELITE_MONSTER_KILL',
  GameEnd = 'GAME_END',
  ItemDestroyed = 'ITEM_DESTROYED',
  ItemPurchased = 'ITEM_PURCHASED',
  ItemSold = 'ITEM_SOLD',
  ItemUndo = 'ITEM_UNDO',
  LevelUp = 'LEVEL_UP',
  PauseEnd = 'PAUSE_END',
  SkillLevelUp = 'SKILL_LEVEL_UP',
  TurretPlateDestroyed = 'TURRET_PLATE_DESTROYED',
  WardKill = 'WARD_KILL',
  WardPlaced = 'WARD_PLACED',
}

export interface VictimDamage {
  basic: boolean;
  magicDamage: number;
  name: Name;
  participantId: number;
  physicalDamage: number;
  spellName: string;
  spellSlot: number;
  trueDamage: number;
  type: VictimDamageDealtType;
}

export enum Name {
  SRUAPTurretChaos1 = 'SRUAP_Turret_Chaos1',
  SRUAPTurretChaos2 = 'SRUAP_Turret_Chaos2',
  SRUAPTurretChaos3 = 'SRUAP_Turret_Chaos3',
  SRUAPTurretOrder2 = 'SRUAP_Turret_Order2',
  SRUChaosMinionMelee = 'SRU_ChaosMinionMelee',
  SRUChaosMinionRanged = 'SRU_ChaosMinionRanged',
  SRUChaosMinionSiege = 'SRU_ChaosMinionSiege',
  SRUGromp = 'SRU_Gromp',
  SRUOrderMinionMelee = 'SRU_OrderMinionMelee',
  SRUOrderMinionRanged = 'SRU_OrderMinionRanged',
  SRUOrderMinionSiege = 'SRU_OrderMinionSiege',
  SRURazorbeak = 'SRU_Razorbeak',
  SRURazorbeakMini = 'SRU_RazorbeakMini',
  Varus = 'Varus',
  Yasuo = 'Yasuo',
}

export enum VictimDamageDealtType {
  Minion = 'MINION',
  Monster = 'MONSTER',
  Other = 'OTHER',
  Tower = 'TOWER',
}

export enum WardType {
  BlueTrinket = 'BLUE_TRINKET',
  ControlWard = 'CONTROL_WARD',
  Undefined = 'UNDEFINED',
  YellowTrinket = 'YELLOW_TRINKET',
}

export interface ParticipantFrame {
  championStats: { [key: string]: number };
  currentGold: number;
  damageStats: { [key: string]: number };
  goldPerSecond: number;
  jungleMinionsKilled: number;
  level: number;
  minionsKilled: number;
  participantId: number;
  position: Position;
  timeEnemySpentControlled: number;
  totalGold: number;
  xp: number;
}

export interface Participant {
  participantId: number;
  puuid: string;
}

export interface Metadata {
  dataVersion: string;
  matchId: string;
  participants: string[];
}
