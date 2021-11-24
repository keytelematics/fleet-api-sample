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
import { IdName } from './idName';
import { ZonePoint } from './zonePoint';

export class ZoneUpdateRequest {
    /**
    * A unique name for this zone
    */
    'name'?: string | null;
    'group'?: IdName;
    'costCentre'?: IdName;
    /**
    * The state of this zone
    */
    'state'?: ZoneUpdateRequest.StateEnum;
    /**
    * The type of zone
    */
    'zoneType'?: ZoneUpdateRequest.ZoneTypeEnum;
    /**
    * A speed limit (in km/h) to apply to this zone. Any asset that enters this zone will have the road speed limit overriden by the zone speed limit.
    */
    'speed'?: number | null;
    /**
    * For zone proximity alerts, specifiy a distance in km from the center of the zone.
    */
    'radius'?: number | null;
    /**
    * The points for the zone polygon/polyline. Only populated on `get*` routes.
    */
    'points'?: Array<ZonePoint> | null;
    /**
    * The tag entity
    */
    'tag'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "group",
            "baseName": "group",
            "type": "IdName"
        },
        {
            "name": "costCentre",
            "baseName": "costCentre",
            "type": "IdName"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "ZoneUpdateRequest.StateEnum"
        },
        {
            "name": "zoneType",
            "baseName": "zoneType",
            "type": "ZoneUpdateRequest.ZoneTypeEnum"
        },
        {
            "name": "speed",
            "baseName": "speed",
            "type": "number"
        },
        {
            "name": "radius",
            "baseName": "radius",
            "type": "number"
        },
        {
            "name": "points",
            "baseName": "points",
            "type": "Array<ZonePoint>"
        },
        {
            "name": "tag",
            "baseName": "tag",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ZoneUpdateRequest.attributeTypeMap;
    }
}

export namespace ZoneUpdateRequest {
    export enum StateEnum {
        Inactive = <any> 'inactive',
        Active = <any> 'active',
        Deleted = <any> 'deleted'
    }
    export enum ZoneTypeEnum {
        Location = <any> 'location',
        Keepin = <any> 'keepin',
        Nogo = <any> 'nogo',
        Route = <any> 'route'
    }
}
