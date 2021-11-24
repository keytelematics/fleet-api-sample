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
import { DeviceTypeFeature } from './deviceTypeFeature';
import { DeviceTypeIOCapabilities } from './deviceTypeIOCapabilities';

export class DeviceTypeAccessory {
    /**
    * A descriptive name for the accessory
    */
    'name'?: string | null;
    /**
    * A form definition for custom settings in this device type accessory
    */
    'settingsDefinition'?: string | null;
    'ioCapabilities'?: DeviceTypeIOCapabilities;
    'features'?: { [key: string]: DeviceTypeFeature; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "settingsDefinition",
            "baseName": "settingsDefinition",
            "type": "string"
        },
        {
            "name": "ioCapabilities",
            "baseName": "ioCapabilities",
            "type": "DeviceTypeIOCapabilities"
        },
        {
            "name": "features",
            "baseName": "features",
            "type": "{ [key: string]: DeviceTypeFeature; }"
        }    ];

    static getAttributeTypeMap() {
        return DeviceTypeAccessory.attributeTypeMap;
    }
}

