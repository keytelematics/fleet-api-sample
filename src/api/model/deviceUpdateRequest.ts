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
import { DeviceAccessory } from './deviceAccessory';
import { DeviceParameters } from './deviceParameters';
import { IdName } from './idName';

export class DeviceUpdateRequest {
    /**
    * The serial or IMEI of the device that is used to uniquely identify it. The value used will depend on the device type.
    */
    'name'?: string | null;
    /**
    * The current state of the device object
    */
    'state'?: DeviceUpdateRequest.StateEnum;
    'deviceType'?: IdName;
    'provider'?: IdName;
    'asset'?: IdName;
    'simcard'?: IdName;
    'parameters'?: DeviceParameters;
    'settings'?: { [key: string]: object; };
    /**
    * Device accessories add extra optional functionality to a device.
    */
    'accessories'?: { [key: string]: DeviceAccessory; };
    'fields'?: { [key: string]: object; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "DeviceUpdateRequest.StateEnum"
        },
        {
            "name": "deviceType",
            "baseName": "deviceType",
            "type": "IdName"
        },
        {
            "name": "provider",
            "baseName": "provider",
            "type": "IdName"
        },
        {
            "name": "asset",
            "baseName": "asset",
            "type": "IdName"
        },
        {
            "name": "simcard",
            "baseName": "simcard",
            "type": "IdName"
        },
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "DeviceParameters"
        },
        {
            "name": "settings",
            "baseName": "settings",
            "type": "{ [key: string]: object; }"
        },
        {
            "name": "accessories",
            "baseName": "accessories",
            "type": "{ [key: string]: DeviceAccessory; }"
        },
        {
            "name": "fields",
            "baseName": "fields",
            "type": "{ [key: string]: object; }"
        }    ];

    static getAttributeTypeMap() {
        return DeviceUpdateRequest.attributeTypeMap;
    }
}

export namespace DeviceUpdateRequest {
    export enum StateEnum {
        Inactive = <any> 'inactive',
        Active = <any> 'active',
        Suspended = <any> 'suspended',
        Deleted = <any> 'deleted'
    }
}
