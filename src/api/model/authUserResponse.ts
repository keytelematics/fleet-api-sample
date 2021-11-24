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

export class AuthUserResponse {
    /**
    * The unique user identifier
    */
    'id': string;
    /**
    * The user\'s username (usually his email address)
    */
    'username': string;
    /**
    * The user\'s full name
    */
    'name': string;
    'owner': IdNameType;
    'defaultClient': IdName;
    'costCentre': IdName;
    /**
    * The user\'s timezone, either as a region/city value (i.e. America/New_York) or a specific timezone (i.e. GMT+2)
    */
    'timeZoneId': string;
    /**
    * The user\'s chosen language
    */
    'language': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "username",
            "baseName": "username",
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
            "type": "IdNameType"
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
            "name": "timeZoneId",
            "baseName": "timeZoneId",
            "type": "string"
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AuthUserResponse.attributeTypeMap;
    }
}

