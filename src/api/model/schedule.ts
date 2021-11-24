/**
 * Fleet API Specification
 * Welcome to the Key Telematics Fleet API specification. This document outlines the REST routes and data structures returned by the  API and offers examples of usage.  The API publishes a [swagger](https://swagger.io/) specification that can be used to [generate a client library](https://github.com/swagger-api/swagger-codegen) for your language of choice.   The latest swagger file is available for download from the following link: [https://api.eu1.kt1.io/fleet/v2/swagger.json](https://api.eu1.kt1.io/fleet/v2/swagger.json)
 *
 * The version of the OpenAPI document: 2.2.8
 * Contact: support@keytelematics.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class Schedule {
    /**
    * The type of schedule
    */
    'scheduleType'?: Schedule.ScheduleTypeEnum;
    /**
    * The time of schedule initation. Also sets the time at which reports run.
    */
    'startTime'?: string | null;
    /**
    * For daily and hourly scheduled, every {{every}} x hours/days
    */
    'every'?: number | null;
    /**
    * For weekly schedules, the days of the week in which to run (0-6 where 0 = sunday). For monthly schedule, a single value with the day of the month to run on.
    */
    'days'?: Array<number> | null;
    /**
    * For monthly schedules, the month number (1-12) in which to run.
    */
    'months'?: Array<number> | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "scheduleType",
            "baseName": "scheduleType",
            "type": "Schedule.ScheduleTypeEnum"
        },
        {
            "name": "startTime",
            "baseName": "startTime",
            "type": "string"
        },
        {
            "name": "every",
            "baseName": "every",
            "type": "number"
        },
        {
            "name": "days",
            "baseName": "days",
            "type": "Array<number>"
        },
        {
            "name": "months",
            "baseName": "months",
            "type": "Array<number>"
        }    ];

    static getAttributeTypeMap() {
        return Schedule.attributeTypeMap;
    }
}

export namespace Schedule {
    export enum ScheduleTypeEnum {
        Once = <any> 'once',
        Hourly = <any> 'hourly',
        Daily = <any> 'daily',
        Weekly = <any> 'weekly',
        Monthly = <any> 'monthly'
    }
}