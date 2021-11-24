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
import { AuditEventChange } from './auditEventChange';
import { IdName } from './idName';
import { IdNameType } from './idNameType';

export class AuditEventResponse {
    /**
    * The unique ID for the event
    */
    'id': string;
    'owner': IdNameType;
    'entity': IdNameType;
    'user': IdName;
    /**
    * The UTC date when the event was recorded in the system
    */
    'date': string;
    /**
    * The class of the event
    */
    'eventClass': string;
    /**
    * The type of event in the given class
    */
    'eventType': AuditEventResponse.EventTypeEnum;
    /**
    * A list of changes that were applied
    */
    'changes': Array<AuditEventChange>;

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
            "name": "entity",
            "baseName": "entity",
            "type": "IdNameType"
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "IdName"
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "string"
        },
        {
            "name": "eventClass",
            "baseName": "eventClass",
            "type": "string"
        },
        {
            "name": "eventType",
            "baseName": "eventType",
            "type": "AuditEventResponse.EventTypeEnum"
        },
        {
            "name": "changes",
            "baseName": "changes",
            "type": "Array<AuditEventChange>"
        }    ];

    static getAttributeTypeMap() {
        return AuditEventResponse.attributeTypeMap;
    }
}

export namespace AuditEventResponse {
    export enum EventTypeEnum {
        Created = <any> 'created',
        Modified = <any> 'modified',
        Deleted = <any> 'deleted'
    }
}
