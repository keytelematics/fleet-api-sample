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
import { DashboardWidgetDataSource } from './dashboardWidgetDataSource';
import { DashboardWidgetPlacement } from './dashboardWidgetPlacement';
import { WidgetOptions } from './widgetOptions';

export class DashboardWidget {
    /**
    * Inherited widgets are tied to a parent dashboard and cannot have their `widgetType` or `options` modified, as  they are tracked with the parent dashboard widget.
    */
    'inherited'?: boolean | null;
    /**
    * If a widget was cloned from another widget, the ID of the source widget will be stored here.
    */
    'sourceId'?: string | null;
    /**
    * The name of the widget.
    */
    'name'?: string | null;
    /**
    * A short description of the widget.
    */
    'description'?: string | null;
    /**
    * The type of widget
    */
    'widgetType'?: DashboardWidget.WidgetTypeEnum;
    'options'?: WidgetOptions;
    /**
    * Should the widget be displayed on the dashboard or not.
    */
    'hidden'?: boolean | null;
    'placement'?: DashboardWidgetPlacement;
    'dataSource'?: DashboardWidgetDataSource;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "inherited",
            "baseName": "inherited",
            "type": "boolean"
        },
        {
            "name": "sourceId",
            "baseName": "sourceId",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "widgetType",
            "baseName": "widgetType",
            "type": "DashboardWidget.WidgetTypeEnum"
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "WidgetOptions"
        },
        {
            "name": "hidden",
            "baseName": "hidden",
            "type": "boolean"
        },
        {
            "name": "placement",
            "baseName": "placement",
            "type": "DashboardWidgetPlacement"
        },
        {
            "name": "dataSource",
            "baseName": "dataSource",
            "type": "DashboardWidgetDataSource"
        }    ];

    static getAttributeTypeMap() {
        return DashboardWidget.attributeTypeMap;
    }
}

export namespace DashboardWidget {
    export enum WidgetTypeEnum {
        Chart = <any> 'chart',
        Grid = <any> 'grid',
        Text = <any> 'text',
        Stat = <any> 'stat',
        Pie = <any> 'pie'
    }
}
