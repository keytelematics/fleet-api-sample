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
import { AssetCounterValue } from './assetCounterValue';

/**
* A collection of counter values
*/
export class AssetCounterValues {
    'odometer'?: AssetCounterValue;
    'hours'?: AssetCounterValue;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "odometer",
            "baseName": "odometer",
            "type": "AssetCounterValue"
        },
        {
            "name": "hours",
            "baseName": "hours",
            "type": "AssetCounterValue"
        }    ];

    static getAttributeTypeMap() {
        return AssetCounterValues.attributeTypeMap;
    }
}

