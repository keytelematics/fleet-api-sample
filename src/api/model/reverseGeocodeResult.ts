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
import { GeocoderAddress } from './geocoderAddress';
import { GeocoderBounds } from './geocoderBounds';
import { ZonePoint } from './zonePoint';

/**
* A reverse geocode search result item
*/
export class ReverseGeocodeResult {
    'type': ReverseGeocodeResult.TypeEnum;
    'id'?: string | null;
    'text': string;
    'lon': number;
    'lat': number;
    'bounds'?: GeocoderBounds;
    'address'?: GeocoderAddress;
    'geometry'?: Array<ZonePoint> | null;
    /**
    * speed limit in km/h
    */
    'speed'?: number | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "ReverseGeocodeResult.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "text",
            "baseName": "text",
            "type": "string"
        },
        {
            "name": "lon",
            "baseName": "lon",
            "type": "number"
        },
        {
            "name": "lat",
            "baseName": "lat",
            "type": "number"
        },
        {
            "name": "bounds",
            "baseName": "bounds",
            "type": "GeocoderBounds"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "GeocoderAddress"
        },
        {
            "name": "geometry",
            "baseName": "geometry",
            "type": "Array<ZonePoint>"
        },
        {
            "name": "speed",
            "baseName": "speed",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ReverseGeocodeResult.attributeTypeMap;
    }
}

export namespace ReverseGeocodeResult {
    export enum TypeEnum {
        Location = <any> 'location',
        Keepin = <any> 'keepin',
        Nogo = <any> 'nogo',
        Route = <any> 'route',
        Address = <any> 'address'
    }
}