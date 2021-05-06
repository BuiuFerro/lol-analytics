import { ObjectType } from '@nestjs/graphql';
import { HealthIndicatorResult, HealthIndicatorStatus } from '@nestjs/terminus';

@ObjectType()
export default class HealthIndicatorResultModel
  implements HealthIndicatorResult {
  [key: string]: { [optionalKeys: string]: any; status: HealthIndicatorStatus };
}
