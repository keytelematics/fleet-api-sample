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

export class SmsGatewayProviderUpdateRequest {
    /**
    * The name of the sms gateway provider
    */
    'name'?: string | null;
    'type'?: IdName;
    /**
    * Whether or not the sms gateway is oneway or twoway
    */
    'direction'?: SmsGatewayProviderUpdateRequest.DirectionEnum;
    /**
    * The state this entity
    */
    'state'?: SmsGatewayProviderUpdateRequest.StateEnum;
    'parameters'?: { [key: string]: object; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "IdName"
        },
        {
            "name": "direction",
            "baseName": "direction",
            "type": "SmsGatewayProviderUpdateRequest.DirectionEnum"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "SmsGatewayProviderUpdateRequest.StateEnum"
        },
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "{ [key: string]: object; }"
        }    ];

    static getAttributeTypeMap() {
        return SmsGatewayProviderUpdateRequest.attributeTypeMap;
    }
}

export namespace SmsGatewayProviderUpdateRequest {
    export enum DirectionEnum {
        Oneway = <any> 'oneway',
        Twoway = <any> 'twoway'
    }
    export enum StateEnum {
        Active = <any> 'active',
        Suspended = <any> 'suspended',
        Deleted = <any> 'deleted'
    }
}
