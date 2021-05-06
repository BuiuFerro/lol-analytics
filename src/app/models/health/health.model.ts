/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { HealthCheckResult, HealthIndicatorResult } from '@nestjs/terminus';
import { HealthCheckStatus } from '@nestjs/terminus/dist/health-check';
import HealthIndicatorResultModel from './healthIndicatorResult.model';

@ObjectType()
export default class HealthModel implements HealthCheckResult {
  @ApiProperty({ required: true })
  @Field((type) => String)
  status: HealthCheckStatus;

  @Field()
  @ApiProperty()
  info?: HealthIndicatorResultModel;

  @Field()
  @ApiProperty()
  error?: HealthIndicatorResult;

  @Field()
  @ApiProperty({ required: true })
  details: HealthIndicatorResult;
}
