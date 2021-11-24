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
import { IdName } from './idName';
import { IdNameType } from './idNameType';

export class AssetTagResponse {
    /**
    * The unique UUID of this entity
    */
    'id': string;
    'owner': IdNameType;
    /**
    * A friendly name to identify this tag
    */
    'name'?: string | null;
    /**
    * The serial number of the Asset Tag that is used to uniquely identify it.
    */
    'serialNumber'?: string | null;
    'assetTagType'?: IdName;
    /**
    * The asset tag operation mode. Options are \'movable\' for movable assets, \'fixed\' for fixed assets and \'stock\' for temporary stock control uses.
    */
    'mode'?: AssetTagResponse.ModeEnum;
    /**
    * The current state of the object
    */
    'state'?: AssetTagResponse.StateEnum;
    'asset'?: IdName;
    'fields'?: { [key: string]: object; };
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
            "name": "serialNumber",
            "baseName": "serialNumber",
            "type": "string"
        },
        {
            "name": "assetTagType",
            "baseName": "assetTagType",
            "type": "IdName"
        },
        {
            "name": "mode",
            "baseName": "mode",
            "type": "AssetTagResponse.ModeEnum"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "AssetTagResponse.StateEnum"
        },
        {
            "name": "asset",
            "baseName": "asset",
            "type": "IdName"
        },
        {
            "name": "fields",
            "baseName": "fields",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "entity",
            "baseName": "entity",
            "type": "EntityInfo"
        }    ];

    static getAttributeTypeMap() {
        return AssetTagResponse.attributeTypeMap;
    }
}

export namespace AssetTagResponse {
    export enum ModeEnum {
        Movable = <any> 'movable',
        Fixed = <any> 'fixed',
        Stock = <any> 'stock'
    }
    export enum StateEnum {
        Active = <any> 'active',
        Deleted = <any> 'deleted'
    }
}