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

export class IoTypeRateConfig {
    /**
    * The type of rate conversion to do
    */
    'type'?: IoTypeRateConfig.TypeEnum;
    /**
    * A multiplier for the value
    */
    'multiplier'?: number | null;
    /**
    * The unit once the rate conversion is done
    */
    'unit'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "IoTypeRateConfig.TypeEnum"
        },
        {
            "name": "multiplier",
            "baseName": "multiplier",
            "type": "number"
        },
        {
            "name": "unit",
            "baseName": "unit",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoTypeRateConfig.attributeTypeMap;
    }
}

export namespace IoTypeRateConfig {
    export enum TypeEnum {
        None = <any> 'none',
        ValPerKm = <any> 'val_per_km',
        KmPerVal = <any> 'km_per_val',
        ValPerMile = <any> 'val_per_mile',
        MilePerVal = <any> 'mile_per_val',
        ValPerHour = <any> 'val_per_hour',
        HourPerVal = <any> 'hour_per_val'
    }
}
