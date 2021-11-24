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
import { ColumnFormatting } from './columnFormatting';

export class CellProperties {
    'raw'?: object | null;
    'format'?: ColumnFormatting;
    'doNotShowOnChart'?: boolean | null;
    'type': CellProperties.TypeEnum;
    'seriesKey'?: string | null;
    'uniquename'?: string | null;
    'dimension'?: string | null;
    'level'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "raw",
            "baseName": "raw",
            "type": "object"
        },
        {
            "name": "format",
            "baseName": "format",
            "type": "ColumnFormatting"
        },
        {
            "name": "doNotShowOnChart",
            "baseName": "doNotShowOnChart",
            "type": "boolean"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CellProperties.TypeEnum"
        },
        {
            "name": "seriesKey",
            "baseName": "seriesKey",
            "type": "string"
        },
        {
            "name": "uniquename",
            "baseName": "uniquename",
            "type": "string"
        },
        {
            "name": "dimension",
            "baseName": "dimension",
            "type": "string"
        },
        {
            "name": "level",
            "baseName": "level",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CellProperties.attributeTypeMap;
    }
}

export namespace CellProperties {
    export enum TypeEnum {
        Average = <any> 'average',
        Max = <any> 'max',
        Min = <any> 'min',
        Total = <any> 'total',
        Data = <any> 'data'
    }
}
