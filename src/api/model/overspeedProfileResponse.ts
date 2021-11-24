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
import { EntityInfo } from './entityInfo';
import { IdNameType } from './idNameType';
import { OverspeedBandItem } from './overspeedBandItem';

export class OverspeedProfileResponse {
    /**
    * The unique UUID of this entity
    */
    'id': string;
    'owner': IdNameType;
    /**
    * A unique name for this entity
    */
    'name'?: string | null;
    /**
    * The current state of this entity
    */
    'state'?: OverspeedProfileResponse.StateEnum;
    /**
    * The overspeed band items for this profile
    */
    'items'?: Array<OverspeedBandItem> | null;
    'entity': EntityInfo;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "owner",
            "baseName": "owner",
            "type": "IdNameType"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "OverspeedProfileResponse.StateEnum"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<OverspeedBandItem>"
        },
        {
            "name": "entity",
            "baseName": "entity",
            "type": "EntityInfo"
        }    ];

    static getAttributeTypeMap() {
        return OverspeedProfileResponse.attributeTypeMap;
    }
}

export namespace OverspeedProfileResponse {
    export enum StateEnum {
        Active = <any> 'active',
        Deleted = <any> 'deleted'
    }
}
