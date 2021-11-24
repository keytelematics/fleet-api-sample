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
import { AnalyticsDimension } from './analyticsDimension';
import { AnalyticsOutputFilters } from './analyticsOutputFilters';
import { AnalyticsSortOptions } from './analyticsSortOptions';
import { AnalyticsTable } from './analyticsTable';
import { AnalyticsUpdateSettings } from './analyticsUpdateSettings';
import { CalculatedMeasureSettings } from './calculatedMeasureSettings';
import { ChartOptions } from './chartOptions';
import { MeasureDescription } from './measureDescription';
import { PieChartOptions } from './pieChartOptions';
import { StatChartOptions } from './statChartOptions';

export class AnalyticsOutputSettings {
    'name': string;
    'description': string;
    'dateRange': string;
    'row': AnalyticsDimension;
    'group': AnalyticsDimension;
    'flipped': boolean;
    'measures': Array<MeasureDescription>;
    'table': AnalyticsTable;
    'sort': AnalyticsSortOptions;
    'graph'?: ChartOptions;
    'pie'?: PieChartOptions;
    'stat'?: StatChartOptions;
    'calculatedMeasures'?: CalculatedMeasureSettings;
    'filters'?: AnalyticsOutputFilters;
    'timeOptions'?: Array<AnalyticsOutputSettings.TimeOptionsEnum>;
    'shiftsEnabled'?: boolean | null;
    'doNotTemplate'?: boolean | null;
    'updates'?: AnalyticsUpdateSettings;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "dateRange",
            "baseName": "dateRange",
            "type": "string"
        },
        {
            "name": "row",
            "baseName": "row",
            "type": "AnalyticsDimension"
        },
        {
            "name": "group",
            "baseName": "group",
            "type": "AnalyticsDimension"
        },
        {
            "name": "flipped",
            "baseName": "flipped",
            "type": "boolean"
        },
        {
            "name": "measures",
            "baseName": "measures",
            "type": "Array<MeasureDescription>"
        },
        {
            "name": "table",
            "baseName": "table",
            "type": "AnalyticsTable"
        },
        {
            "name": "sort",
            "baseName": "sort",
            "type": "AnalyticsSortOptions"
        },
        {
            "name": "graph",
            "baseName": "graph",
            "type": "ChartOptions"
        },
        {
            "name": "pie",
            "baseName": "pie",
            "type": "PieChartOptions"
        },
        {
            "name": "stat",
            "baseName": "stat",
            "type": "StatChartOptions"
        },
        {
            "name": "calculatedMeasures",
            "baseName": "calculatedMeasures",
            "type": "CalculatedMeasureSettings"
        },
        {
            "name": "filters",
            "baseName": "filters",
            "type": "AnalyticsOutputFilters"
        },
        {
            "name": "timeOptions",
            "baseName": "timeOptions",
            "type": "Array<AnalyticsOutputSettings.TimeOptionsEnum>"
        },
        {
            "name": "shiftsEnabled",
            "baseName": "shiftsEnabled",
            "type": "boolean"
        },
        {
            "name": "doNotTemplate",
            "baseName": "doNotTemplate",
            "type": "boolean"
        },
        {
            "name": "updates",
            "baseName": "updates",
            "type": "AnalyticsUpdateSettings"
        }    ];

    static getAttributeTypeMap() {
        return AnalyticsOutputSettings.attributeTypeMap;
    }
}

export namespace AnalyticsOutputSettings {
    export enum TimeOptionsEnum {
        Days = <any> 'days',
        Hours = <any> 'hours'
    }
}
