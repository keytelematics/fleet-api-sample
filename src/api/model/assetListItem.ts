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
import { AssetGeoLock } from './assetGeoLock';
import { IdName } from './idName';

export class AssetListItem {
    /**
    * The unique ID for this asset
    */
    'id': string;
    /**
    * A client unique name for this asset. This can be any value that is relevant for the client.
    */
    'name': string;
    'owner': IdName;
    /**
    * One or more clients to which this asset has been shared.
    */
    'sharedWith': Array<IdName>;
    'assetType': IdName;
    /**
    * One of more asset groups that this asset belongs to
    */
    'groups': Array<IdName>;
    /**
    * Up to 5 different categories that this asset belongs to
    */
    'categories': Array<IdName>;
    'costCentre': IdName;
    /**
    * One or more devices that provide telemetry data for this asset.
    */
    'devices': Array<IdName>;
    'assetTag': string;
    'tags': Array<string>;
    'fields': { [key: string]: object; };
    /**
    * The color of the icon for this asset
    */
    'color': AssetListItem.ColorEnum;
    /**
    * The current state of the asset object
    */
    'state': AssetListItem.StateEnum;
    'geoLock'?: AssetGeoLock;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "owner",
            "baseName": "owner",
            "type": "IdName"
        },
        {
            "name": "sharedWith",
            "baseName": "sharedWith",
            "type": "Array<IdName>"
        },
        {
            "name": "assetType",
            "baseName": "assetType",
            "type": "IdName"
        },
        {
            "name": "groups",
            "baseName": "groups",
            "type": "Array<IdName>"
        },
        {
            "name": "categories",
            "baseName": "categories",
            "type": "Array<IdName>"
        },
        {
            "name": "costCentre",
            "baseName": "costCentre",
            "type": "IdName"
        },
        {
            "name": "devices",
            "baseName": "devices",
            "type": "Array<IdName>"
        },
        {
            "name": "assetTag",
            "baseName": "assetTag",
            "type": "string"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>"
        },
        {
            "name": "fields",
            "baseName": "fields",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "color",
            "baseName": "color",
            "type": "AssetListItem.ColorEnum"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "AssetListItem.StateEnum"
        },
        {
            "name": "geoLock",
            "baseName": "geoLock",
            "type": "AssetGeoLock"
        }    ];

    static getAttributeTypeMap() {
        return AssetListItem.attributeTypeMap;
    }
}

export namespace AssetListItem {
    export enum ColorEnum {
        Blue = <any> 'blue',
        Lightblue = <any> 'lightblue',
        Green = <any> 'green',
        Olive = <any> 'olive',
        Orange = <any> 'orange',
        Pink = <any> 'pink',
        Purple = <any> 'purple',
        Red = <any> 'red',
        Teal = <any> 'teal',
        Yellow = <any> 'yellow',
        White = <any> 'white',
        Gray = <any> 'gray'
    }
    export enum StateEnum {
        Inactive = <any> 'inactive',
        Active = <any> 'active',
        Suspended = <any> 'suspended',
        Deleted = <any> 'deleted'
    }
}
