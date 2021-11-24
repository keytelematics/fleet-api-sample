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

export class TripRatingPenalty {
    /**
    * The unique id for this penalty
    */
    'id': string;
    /**
    * Name of the penalty
    */
    'name': string;
    /**
    * Number of instances that this penalty occurred
    */
    'instances': number;
    /**
    * Score for this penalty
    */
    'score': number;
    'max': number;
    /**
    * The monetary cost incurred each time this incident occurs
    */
    'cost': number;

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
            "name": "instances",
            "baseName": "instances",
            "type": "number"
        },
        {
            "name": "score",
            "baseName": "score",
            "type": "number"
        },
        {
            "name": "max",
            "baseName": "max",
            "type": "number"
        },
        {
            "name": "cost",
            "baseName": "cost",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return TripRatingPenalty.attributeTypeMap;
    }
}
