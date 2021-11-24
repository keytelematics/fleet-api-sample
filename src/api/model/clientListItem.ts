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

/**
* Summary client information returned in lists.
*/
export class ClientListItem {
    /**
    * The client\'s unique UUID
    */
    'id': string;
    /**
    * The client\'s display name
    */
    'name': string;
    /**
    * The client website (if available)
    */
    'website': string;
    'owner': IdName;
    /**
    * The group to which this client belongs.
    */
    'group': string;
    /**
    * The state of this client.
    */
    'state': ClientListItem.StateEnum;
    'counts'?: { [key: string]: number; };
    /**
    * The date this client was created.
    */
    'creationDate': string;
    /**
    * The date that this client was last modified.
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
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "website",
            "baseName": "website",
            "type": "string"
        },
        {
            "name": "owner",
            "baseName": "owner",
            "type": "IdName"
        },
        {
            "name": "group",
            "baseName": "group",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "ClientListItem.StateEnum"
        },
        {
            "name": "counts",
            "baseName": "counts",
            "type": "{ [key: string]: number; }"
        },
        {
            "name": "creationDate",
            "baseName": "creationDate",
            "type": "string"
        },
        {
            "name": "modifiedDate",
            "baseName": "modifiedDate",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ClientListItem.attributeTypeMap;
    }
}

export namespace ClientListItem {
    export enum StateEnum {
        Inactive = <any> 'inactive',
        Active = <any> 'active',
        Suspended = <any> 'suspended',
        Deleted = <any> 'deleted'
    }
}
