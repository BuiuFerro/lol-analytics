import { Field, ObjectType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HealthCheckResult, HealthIndicatorResult, HealthIndicatorStatus } from "@nestjs/terminus";
import { HealthCheckStatus } from "@nestjs/terminus/dist/health-check";

@ObjectType()
export default class HealthIndicatorResultModel implements HealthIndicatorResult {
    [key: string]: { [optionalKeys: string]: any; status: HealthIndicatorStatus; };
}