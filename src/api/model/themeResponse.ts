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

export class ThemeResponse {
    /**
    * The unique UUID of this entity
    */
    'id': string;
    'owner': IdNameType;
    /**
    * The ID of the base theme CSS
    */
    'theme'?: string | null;
    /**
    * The name of the theme
    */
    'name'?: string | null;
    /**
    * An optional description of the theme
    */
    'description'?: string | null;
    /**
    * The current state of this entity
    */
    'state'?: ThemeResponse.StateEnum;
    /**
    * A collection of CSS variables for the theme
    */
    'variables'?: { [key: string]: string; };
    /**
    * A collection of setting values for the theme
    */
    'settings'?: { [key: string]: object; };
    /**
    * The custom overwrites that will be injected after the theme css
    */
    'customStyles'?: string | null;
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
            "name": "theme",
            "baseName": "theme",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "ThemeResponse.StateEnum"
        },
        {
            "name": "variables",
            "baseName": "variables",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "settings",
            "baseName": "settings",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "customStyles",
            "baseName": "customStyles",
            "type": "string"
        },
        {
            "name": "entity",
            "baseName": "entity",
            "type": "EntityInfo"
        }    ];

    static getAttributeTypeMap() {
        return ThemeResponse.attributeTypeMap;
    }
}

export namespace ThemeResponse {
    export enum StateEnum {
        Active = <any> 'active',
        Deleted = <any> 'deleted'
    }
}
