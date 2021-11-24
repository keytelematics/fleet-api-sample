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
import { Contact } from './contact';
import { IdName } from './idName';

export class AssetCategoryUpdateRequest {
    /**
    * The index number of this asset category (0 - 4)
    */
    'index'?: number | null;
    /**
    * A unique name for this entity
    */
    'name'?: string | null;
    'parent'?: IdName;
    /**
    * A list of contacts applicable to this asset category
    */
    'contacts'?: Array<Contact> | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "index",
            "baseName": "index",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "parent",
            "baseName": "parent",
            "type": "IdName"
        },
        {
            "name": "contacts",
            "baseName": "contacts",
            "type": "Array<Contact>"
        }    ];

    static getAttributeTypeMap() {
        return AssetCategoryUpdateRequest.attributeTypeMap;
    }
}

