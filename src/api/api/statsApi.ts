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


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { CellSetResponse } from '../model/cellSetResponse';
import { ForbiddenError } from '../model/forbiddenError';
import { NotFoundError } from '../model/notFoundError';
import { StatsEntityOutputOptions } from '../model/statsEntityOutputOptions';
import { TooManyRequestsError } from '../model/tooManyRequestsError';
import { UnexpectedError } from '../model/unexpectedError';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';
import { HttpBasicAuth, HttpBearerAuth, ApiKeyAuth, OAuth } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'http://localhost/fleet/v2';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum StatsApiApiKeys {
    access_token,
}

export class StatsApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'access_token': new ApiKeyAuth('header', 'x-access-token'),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: StatsApiApiKeys, value: string) {
        (this.authentications as any)[StatsApiApiKeys[key]].apiKey = value;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Retrieve data for a stats report.
     * @param type 
     * @param id The type of the entity. The UUID of the entity. The stats metric.
     * @param metric 
     * @param options 
     */
    public async getOutputForEntity (type: 'client' | 'vendor' | 'distributor' | 'system' | 'user' | 'device', id: string, metric: 'devices' | 'users' | 'assets' | 'companion-cameras' | 'distributors' | 'vendors' | 'clients' | 'records' | 'bytes' | 'connections' | 'minutes', options: StatsEntityOutputOptions, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: CellSetResponse;  }> {
        const localVarPath = this.basePath + '/stats/entity/{type}/{id}/{metric}'
            .replace('{' + 'type' + '}', encodeURIComponent(String(type)))
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
            .replace('{' + 'metric' + '}', encodeURIComponent(String(metric)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'type' is not null or undefined
        if (type === null || type === undefined) {
            throw new Error('Required parameter type was null or undefined when calling getOutputForEntity.');
        }

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getOutputForEntity.');
        }

        // verify required parameter 'metric' is not null or undefined
        if (metric === null || metric === undefined) {
            throw new Error('Required parameter metric was null or undefined when calling getOutputForEntity.');
        }

        // verify required parameter 'options' is not null or undefined
        if (options === null || options === undefined) {
            throw new Error('Required parameter options was null or undefined when calling getOutputForEntity.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(options, "StatsEntityOutputOptions")
        };

        let authenticationPromise = Promise.resolve();
        if (this.authentications.access_token.apiKey) {
            authenticationPromise = authenticationPromise.then(() => this.authentications.access_token.applyToRequest(localVarRequestOptions));
        }
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: CellSetResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "CellSetResponse");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}
