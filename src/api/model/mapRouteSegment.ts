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
import { GeoJson } from './geoJson';

/**
* A route segment
*/
export class MapRouteSegment {
    /**
    * The total distance of the segment, in kilometers
    */
    'distance': number;
    /**
    * The total travel time of the segment, in seconds
    */
    'time': number;
    'geom': GeoJson;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "distance",
            "baseName": "distance",
            "type": "number"
        },
        {
            "name": "time",
            "baseName": "time",
            "type": "number"
        },
        {
            "name": "geom",
            "baseName": "geom",
            "type": "GeoJson"
        }    ];

    static getAttributeTypeMap() {
        return MapRouteSegment.attributeTypeMap;
    }
}
