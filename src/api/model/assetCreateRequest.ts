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
import { AssetLocation } from './assetLocation';
import { AssetParameters } from './assetParameters';
import { AssetZoneTarget } from './assetZoneTarget';
import { Contact } from './contact';
import { IdName } from './idName';

export class AssetCreateRequest {
    /**
    * A client unique name for this asset. This can be any value that is relevant for the client.
    */
    'name': string;
    'assetType': IdName;
    /**
    * The color of the icon for this asset
    */
    'color'?: AssetCreateRequest.ColorEnum;
    'tags'?: Array<string> | null;
    'costCentre': IdName;
    'ratingProfile'?: IdName;
    /**
    * One or more asset state profiles to use for this asset
    */
    'assetStateProfiles'?: Array<IdName> | null;
    'overspeedProfile'?: IdName;
    /**
    * One of more asset groups that this asset belongs to
    */
    'groups': Array<IdName>;
    /**
    * Up to 5 different categories that this asset belongs to
    */
    'categories'?: Array<IdName> | null;
    /**
    * One or more clients to which this asset has been shared.
    */
    'sharedWith'?: Array<IdName> | null;
    'assetTag'?: IdName;
    /**
    * The current state of the asset object
    */
    'state'?: AssetCreateRequest.StateEnum;
    'fields'?: { [key: string]: object; };
    'parameters'?: AssetParameters;
    'geoLock'?: AssetGeoLock;
    /**
    * One or more contacts that are relevant to this asset
    */
    'contacts'?: Array<Contact> | null;
    'location'?: AssetLocation;
    /**
    * A list of zones and routes that are relevant to this asset
    */
    'zones'?: Array<AssetZoneTarget> | null;
    'ownerId': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "assetType",
            "baseName": "assetType",
            "type": "IdName"
        },
        {
            "name": "color",
            "baseName": "color",
            "type": "AssetCreateRequest.ColorEnum"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>"
        },
        {
            "name": "costCentre",
            "baseName": "costCentre",
            "type": "IdName"
        },
        {
            "name": "ratingProfile",
            "baseName": "ratingProfile",
            "type": "IdName"
        },
        {
            "name": "assetStateProfiles",
            "baseName": "assetStateProfiles",
            "type": "Array<IdName>"
        },
        {
            "name": "overspeedProfile",
            "baseName": "overspeedProfile",
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
            "name": "sharedWith",
            "baseName": "sharedWith",
            "type": "Array<IdName>"
        },
        {
            "name": "assetTag",
            "baseName": "assetTag",
            "type": "IdName"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "AssetCreateRequest.StateEnum"
        },
        {
            "name": "fields",
            "baseName": "fields",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "AssetParameters"
        },
        {
            "name": "geoLock",
            "baseName": "geoLock",
            "type": "AssetGeoLock"
        },
        {
            "name": "contacts",
            "baseName": "contacts",
            "type": "Array<Contact>"
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "AssetLocation"
        },
        {
            "name": "zones",
            "baseName": "zones",
            "type": "Array<AssetZoneTarget>"
        },
        {
            "name": "ownerId",
            "baseName": "ownerId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AssetCreateRequest.attributeTypeMap;
    }
}

export namespace AssetCreateRequest {
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
