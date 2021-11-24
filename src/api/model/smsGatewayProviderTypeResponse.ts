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

export class SmsGatewayProviderTypeResponse {
    /**
    * The unique UUID of this entity
    */
    'id': string;
    'owner': IdNameType;
    /**
    * The name of the sms gateway provider type
    */
    'name': string;
    /**
    * The tag to apply to the sms gateway provider type
    */
    'tag': string;
    /**
    * The parameters used by the sms gateway type
    */
    'parameterDefinition'?: string | null;
    /**
    * Whether or not the sms gateway type is oneway or twoway
    */
    'direction'?: SmsGatewayProviderTypeResponse.DirectionEnum;
    /**
    * The state this entity
    */
    'state'?: SmsGatewayProviderTypeResponse.StateEnum;
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
            "name": "tag",
            "baseName": "tag",
            "type": "string"
        },
        {
            "name": "parameterDefinition",
            "baseName": "parameterDefinition",
            "type": "string"
        },
        {
            "name": "direction",
            "baseName": "direction",
            "type": "SmsGatewayProviderTypeResponse.DirectionEnum"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "SmsGatewayProviderTypeResponse.StateEnum"
        },
        {
            "name": "entity",
            "baseName": "entity",
            "type": "EntityInfo"
        }    ];

    static getAttributeTypeMap() {
        return SmsGatewayProviderTypeResponse.attributeTypeMap;
    }
}

export namespace SmsGatewayProviderTypeResponse {
    export enum DirectionEnum {
        Oneway = <any> 'oneway',
        Twoway = <any> 'twoway'
    }
    export enum StateEnum {
        Active = <any> 'active',
        Deleted = <any> 'deleted'
    }
}
