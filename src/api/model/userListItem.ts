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
import { IdNameType } from './idNameType';

export class UserListItem {
    /**
    * The unique UUID of this entity
    */
    'id': string;
    'owner': IdNameType;
    'name'?: string | null;
    /**
    * The user\'s email address, used to log into the system
    */
    'emailAddress'?: string | null;
    /**
    * An optional mobile number used for SMS notifications
    */
    'mobile'?: string | null;
    /**
    * The time zone identifier for the user (uses the tz datbase for timezones, see https://en.wikipedia.org/wiki/Tz_database)
    */
    'timeZoneId'?: string | null;
    /**
    * The language code for this user
    */
    'language'?: string | null;
    /**
    * The state of the user object
    */
    'state'?: UserListItem.StateEnum;
    'defaultClient'?: IdName;
    'costCentre'?: IdName;
    /**
    * The date the user was last modified
    */
    'modifiedDate': string;

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
            "name": "emailAddress",
            "baseName": "emailAddress",
            "type": "string"
        },
        {
            "name": "mobile",
            "baseName": "mobile",
            "type": "string"
        },
        {
            "name": "timeZoneId",
            "baseName": "timeZoneId",
            "type": "string"
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "UserListItem.StateEnum"
        },
        {
            "name": "defaultClient",
            "baseName": "defaultClient",
            "type": "IdName"
        },
        {
            "name": "costCentre",
            "baseName": "costCentre",
            "type": "IdName"
        },
        {
            "name": "modifiedDate",
            "baseName": "modifiedDate",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UserListItem.attributeTypeMap;
    }
}

export namespace UserListItem {
    export enum StateEnum {
        Inactive = <any> 'inactive',
        Active = <any> 'active',
        Suspended = <any> 'suspended',
        Deleted = <any> 'deleted'
    }
}
