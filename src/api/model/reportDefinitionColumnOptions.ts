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

/**
* Describes column options
*/
export class ReportDefinitionColumnOptions {
    /**
    * The id of the column
    */
    'id': string;
    /**
    * The title of the column
    */
    'title': string;
    /**
    * The width of the column
    */
    'width': number;
    /**
    * Indicates whether this column is suggested as a default
    */
    'def': boolean;
    /**
    * Indicates whether this column is required
    */
    'required': boolean;
    /**
    * The text alignment, either \'Left\', \'Center\' or \'Right\'
    */
    'align': ReportDefinitionColumnOptions.AlignEnum;
    /**
    * The calculated measures expression to use
    */
    'expression'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "width",
            "baseName": "width",
            "type": "number"
        },
        {
            "name": "def",
            "baseName": "def",
            "type": "boolean"
        },
        {
            "name": "required",
            "baseName": "required",
            "type": "boolean"
        },
        {
            "name": "align",
            "baseName": "align",
            "type": "ReportDefinitionColumnOptions.AlignEnum"
        },
        {
            "name": "expression",
            "baseName": "expression",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ReportDefinitionColumnOptions.attributeTypeMap;
    }
}

export namespace ReportDefinitionColumnOptions {
    export enum AlignEnum {
        Left = <any> 'Left',
        Center = <any> 'Center',
        Right = <any> 'Right'
    }
}
