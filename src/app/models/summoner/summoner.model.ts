/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

interface ISummonerWithMacthListModel {
    id: string;
    accountId: string;
    puuid: string;
    name: string;
    profileIconId: number;
    revisionDate: number;
    summonerLevel: number;
    macthList: string[];
}

@ObjectType()
export default class SummonerWithMatchListModel implements ISummonerWithMacthListModel {
    @ApiProperty({ required: true })
    @Field((type) => String)
    id: string;

    @ApiProperty({ required: true })
    @Field((type) => String)
    accountId: string;

    @ApiProperty({ required: true })
    @Field((type) => String)
    puuid: string;

    @ApiProperty({ required: true })
    @Field((type) => String)
    name: string;

    @ApiProperty({ required: true })
    @Field((type) => Number)
    profileIconId: number;

    @ApiProperty({ required: true })
    @Field((type) => Number)
    revisionDate: number;

    @ApiProperty({ required: true })
    @Field((type) => Number)
    summonerLevel: number;

    @ApiProperty({ required: true })
    @Field((type) => [String])
    macthList: string[];

    constructor({
        id,
        accountId,
        name,
        puuid,
        profileIconId,
        revisionDate,
        summonerLevel,
        macthList,
    }: ISummonerWithMacthListModel) {
        this.id = id;

        this.accountId = accountId;

        this.puuid = puuid;

        this.name = name;

        this.profileIconId = profileIconId;

        this.revisionDate = revisionDate;

        this.summonerLevel = summonerLevel;

        this.macthList = macthList;
    }
}
