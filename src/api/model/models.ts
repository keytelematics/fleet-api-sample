import localVarRequest from 'request';

export * from './alertAction';
export * from './alertCreateRequest';
export * from './alertListItem';
export * from './alertListResponse';
export * from './alertNotify';
export * from './alertResponse';
export * from './alertUpdateRequest';
export * from './analyticsDataSourceOptions';
export * from './analyticsDimension';
export * from './analyticsLevels';
export * from './analyticsOutputFilter';
export * from './analyticsOutputFilters';
export * from './analyticsOutputRangeFilter';
export * from './analyticsOutputRequest';
export * from './analyticsOutputSettings';
export * from './analyticsSettingsRequest';
export * from './analyticsSortOptions';
export * from './analyticsTable';
export * from './analyticsUpdateFrequencyOffset';
export * from './analyticsUpdateSettings';
export * from './analyticsUpdateSettingsDaily';
export * from './apiKey';
export * from './assetAnalogParameter';
export * from './assetCategoryCreateRequest';
export * from './assetCategoryListResponse';
export * from './assetCategoryResponse';
export * from './assetCategoryUpdateRequest';
export * from './assetCounterValue';
export * from './assetCounterValues';
export * from './assetCreateRequest';
export * from './assetCurfewParameter';
export * from './assetGeoLock';
export * from './assetGroupCreateRequest';
export * from './assetGroupListResponse';
export * from './assetGroupResponse';
export * from './assetGroupUpdateRequest';
export * from './assetListItem';
export * from './assetListResponse';
export * from './assetLocation';
export * from './assetMoveRequest';
export * from './assetParameters';
export * from './assetRatingPenalty';
export * from './assetRatingProfileCreateRequest';
export * from './assetRatingProfileListItem';
export * from './assetRatingProfileListResponse';
export * from './assetRatingProfileResponse';
export * from './assetRatingProfileUpdateRequest';
export * from './assetResponse';
export * from './assetStateItem';
export * from './assetStateProfileCreateRequest';
export * from './assetStateProfileListItem';
export * from './assetStateProfileListResponse';
export * from './assetStateProfileResponse';
export * from './assetStateProfileUpdateRequest';
export * from './assetTagCreateRequest';
export * from './assetTagListItem';
export * from './assetTagListResponse';
export * from './assetTagResponse';
export * from './assetTagTypeListResponse';
export * from './assetTagTypeResponse';
export * from './assetTagUpdateRequest';
export * from './assetTemperatureParameter';
export * from './assetTypeListResponse';
export * from './assetTypeResponse';
export * from './assetUpdateRequest';
export * from './assetZoneTarget';
export * from './auditEventChange';
export * from './auditEventFeedResponse';
export * from './auditEventKeyValue';
export * from './auditEventResponse';
export * from './authEndpoint';
export * from './authInfo';
export * from './authRefreshTokenRequest';
export * from './authRequest';
export * from './authResetPasswordRequest';
export * from './authSetPasswordRequest';
export * from './authUserResponse';
export * from './badRequestError';
export * from './calculatedMeasure';
export * from './calculatedMeasureFormat';
export * from './calculatedMeasureSettings';
export * from './cellProperties';
export * from './cellSet';
export * from './cellSetAverage';
export * from './cellSetFilters';
export * from './cellSetResponse';
export * from './cellValue';
export * from './chartAxisMaxMin';
export * from './chartLabel';
export * from './chartOptions';
export * from './chartSeriesItem';
export * from './chartXAxis';
export * from './chartXAxisLabels';
export * from './chartYAxis';
export * from './clientCreateRequest';
export * from './clientDetailsUpdateRequest';
export * from './clientListItem';
export * from './clientListResponse';
export * from './clientMeasurementUnits';
export * from './clientMeta';
export * from './clientResponse';
export * from './clientUpdateRequest';
export * from './columnFormatting';
export * from './companyAddress';
export * from './companyGroupCreateRequest';
export * from './companyGroupListResponse';
export * from './companyGroupResponse';
export * from './companyGroupUpdateRequest';
export * from './companyMessages';
export * from './companyResponse';
export * from './companySupportDetails';
export * from './completedReportDataRequest';
export * from './completedReportListResponse';
export * from './completedReportRequest';
export * from './completedReportResponse';
export * from './completedReportUpdateRequest';
export * from './contact';
export * from './costCentreCreateRequest';
export * from './costCentreListResponse';
export * from './costCentreResponse';
export * from './costCentreUpdateRequest';
export * from './customFieldDefinition';
export * from './customFieldKeyValue';
export * from './dailyShift';
export * from './dashboardCreateRequest';
export * from './dashboardListItem';
export * from './dashboardListResponse';
export * from './dashboardResponse';
export * from './dashboardTemplateCreateRequest';
export * from './dashboardTemplateListItem';
export * from './dashboardTemplateListResponse';
export * from './dashboardTemplateResponse';
export * from './dashboardTemplateUpdateRequest';
export * from './dashboardUpdateRequest';
export * from './dashboardWidget';
export * from './dashboardWidgetDataSource';
export * from './dashboardWidgetDataSourceOptions';
export * from './dashboardWidgetPlacement';
export * from './deviceAccessory';
export * from './deviceAnalogConfig';
export * from './deviceCANConfig';
export * from './deviceCameraConfig';
export * from './deviceCounterConfig';
export * from './deviceCreateRequest';
export * from './deviceDigitalConfig';
export * from './deviceIOParameters';
export * from './deviceListItem';
export * from './deviceListResponse';
export * from './deviceOutputConfig';
export * from './deviceParameters';
export * from './deviceProviderCreateRequest';
export * from './deviceProviderListItem';
export * from './deviceProviderListResponse';
export * from './deviceProviderResponse';
export * from './deviceProviderTypeListItem';
export * from './deviceProviderTypeListResponse';
export * from './deviceProviderTypeResponse';
export * from './deviceProviderUpdateRequest';
export * from './deviceResponse';
export * from './deviceTemperatureConfig';
export * from './deviceTypeAccessory';
export * from './deviceTypeCreateRequest';
export * from './deviceTypeFeature';
export * from './deviceTypeIOCapabilities';
export * from './deviceTypeListItem';
export * from './deviceTypeListResponse';
export * from './deviceTypeResponse';
export * from './deviceTypeUpdateRequest';
export * from './deviceUpdateRequest';
export * from './deviceValueConfig';
export * from './dimensionFilterItem';
export * from './distributorCreateRequest';
export * from './distributorDetailsUpdateRequest';
export * from './distributorListItem';
export * from './distributorListResponse';
export * from './distributorResponse';
export * from './distributorUpdateRequest';
export * from './domainInfo';
export * from './domainThemeResponse';
export * from './emailConfig';
export * from './emailProviderCreateRequest';
export * from './emailProviderListItem';
export * from './emailProviderListResponse';
export * from './emailProviderResponse';
export * from './emailProviderTypeListItem';
export * from './emailProviderTypeListResponse';
export * from './emailProviderTypeResponse';
export * from './emailProviderUpdateRequest';
export * from './emailServerConfiguration';
export * from './emailTemplateConfig';
export * from './entityInfo';
export * from './entitySearchResponse';
export * from './entitySearchResult';
export * from './entitySoftLimit';
export * from './errorBase';
export * from './eventActionFilter';
export * from './eventActorFilter';
export * from './eventComment';
export * from './eventCommentRequest';
export * from './eventFeedResponse';
export * from './eventFilter';
export * from './eventFilterCondition';
export * from './eventHandled';
export * from './eventListResponse';
export * from './eventMedia';
export * from './eventResponse';
export * from './eventTargetFilter';
export * from './exportTaskCreateRequest';
export * from './exportTaskListItem';
export * from './exportTaskListResponse';
export * from './exportTaskResponse';
export * from './exportTaskUpdateRequest';
export * from './forbiddenError';
export * from './forwardGeocodeResponse';
export * from './forwardGeocodeResult';
export * from './geoJson';
export * from './geocoderAddress';
export * from './geocoderBounds';
export * from './healthIssueDates';
export * from './healthIssueListResponse';
export * from './healthIssueResolutionDetail';
export * from './healthIssueResponse';
export * from './healthIssueUpdateRequest';
export * from './healthIssueUpdateRequestResolved';
export * from './idName';
export * from './idNameState';
export * from './idNameType';
export * from './ioTypeCreateRequest';
export * from './ioTypeListItem';
export * from './ioTypeListResponse';
export * from './ioTypeRateConfig';
export * from './ioTypeResponse';
export * from './ioTypeTextConfig';
export * from './ioTypeUpdateRequest';
export * from './mapRoute';
export * from './mapRouteResponse';
export * from './mapRouteSegment';
export * from './mapSetLayer';
export * from './mapSetListItem';
export * from './mapSetListResponse';
export * from './mapSetResponse';
export * from './mapsetCreateRequest';
export * from './mapsetUpdateRequest';
export * from './measureDescription';
export * from './mediaInfoListResponse';
export * from './mediaInfoResponse';
export * from './mediaVideoEventCreateRequest';
export * from './mediaVideoEventUpdateRequest';
export * from './notFoundError';
export * from './notificationActions';
export * from './notificationFeedResponse';
export * from './notificationResponse';
export * from './notificationSettings';
export * from './openIdConnectIssuer';
export * from './overspeedBandItem';
export * from './overspeedProfileCreateRequest';
export * from './overspeedProfileListItem';
export * from './overspeedProfileListResponse';
export * from './overspeedProfileResponse';
export * from './overspeedProfileUpdateRequest';
export * from './pieChartOptions';
export * from './pieChartSeriesItem';
export * from './policy';
export * from './policyStatement';
export * from './queueReportRequest';
export * from './queuedReportListResponse';
export * from './queuedReportResponse';
export * from './rebuildDashboardWidgetResponse';
export * from './reminderCreateRequest';
export * from './reminderListItem';
export * from './reminderListResponse';
export * from './reminderReset';
export * from './reminderResetDaily';
export * from './reminderResetMonthly';
export * from './reminderResetWeekly';
export * from './reminderResponse';
export * from './reminderTriggerValue';
export * from './reminderUpdateRequest';
export * from './reportConfig';
export * from './reportDefinitionColumnOptions';
export * from './reportDefinitionGroupingOptions';
export * from './reportDefinitionLayoutOptions';
export * from './reportDefinitionListResponse';
export * from './reportDefinitionResponse';
export * from './reportDefinitionStyleLimits';
export * from './reportDefinitionStyleOptions';
export * from './reportOutputOptions';
export * from './reportTemplateConfig';
export * from './reportTemplateCreateRequest';
export * from './reportTemplateListResponse';
export * from './reportTemplateResponse';
export * from './reportTemplateUpdateRequest';
export * from './reverseGeocode';
export * from './reverseGeocodeResponse';
export * from './reverseGeocodeResult';
export * from './schedule';
export * from './scheduledReportCreateRequest';
export * from './scheduledReportListItem';
export * from './scheduledReportListResponse';
export * from './scheduledReportReport';
export * from './scheduledReportResponse';
export * from './scheduledReportUpdateRequest';
export * from './selectedMeasureValues';
export * from './selectedUserTokenResponse';
export * from './shift';
export * from './shiftConfig';
export * from './shiftPattern';
export * from './signOutRequest';
export * from './simCardCreateRequest';
export * from './simCardListItem';
export * from './simCardListResponse';
export * from './simCardResponse';
export * from './simCardUpdateRequest';
export * from './smsGatewayProviderCreateRequest';
export * from './smsGatewayProviderListItem';
export * from './smsGatewayProviderListResponse';
export * from './smsGatewayProviderResponse';
export * from './smsGatewayProviderTypeListItem';
export * from './smsGatewayProviderTypeListResponse';
export * from './smsGatewayProviderTypeResponse';
export * from './smsGatewayProviderUpdateRequest';
export * from './softLimits';
export * from './speedLimits';
export * from './statChartOptions';
export * from './statsEntityOutputOptions';
export * from './successResponse';
export * from './targetLine';
export * from './taskCreateRequest';
export * from './taskDates';
export * from './taskListResponse';
export * from './taskOptions';
export * from './taskResponse';
export * from './telemetryFeedResponse';
export * from './telemetryIOValue';
export * from './telemetryListResponse';
export * from './telemetryLocation';
export * from './telemetryResponse';
export * from './telemetryState';
export * from './telemetryStateResponse';
export * from './telemetryTrip';
export * from './testNotificationsRequest';
export * from './themeCreateRequest';
export * from './themeInfo';
export * from './themeListItem';
export * from './themeListResponse';
export * from './themeResponse';
export * from './themeUpdateRequest';
export * from './timeRange';
export * from './tokenResponse';
export * from './tooManyRequestsError';
export * from './tripFeedResponse';
export * from './tripListResponse';
export * from './tripLocation';
export * from './tripRating';
export * from './tripRatingPenalty';
export * from './tripResponse';
export * from './tripStats';
export * from './unauthorizedError';
export * from './unexpectedError';
export * from './updateUserPasswordRequest';
export * from './userApiKeyCreateRequest';
export * from './userApiKeyCreateResponse';
export * from './userClientPermissions';
export * from './userCreateRequest';
export * from './userCreateResponse';
export * from './userListItem';
export * from './userListResponse';
export * from './userPermissions';
export * from './userProfileResponse';
export * from './userResetRequest';
export * from './userResetResponse';
export * from './userResponse';
export * from './userRoleCreateRequest';
export * from './userRoleListItem';
export * from './userRoleListResponse';
export * from './userRoleResponse';
export * from './userRoleUpdateRequest';
export * from './userSession';
export * from './userSessionResponse';
export * from './userUpdateRequest';
export * from './vendorCreateRequest';
export * from './vendorDetailsUpdateRequest';
export * from './vendorListItem';
export * from './vendorListResponse';
export * from './vendorResponse';
export * from './vendorUpdateRequest';
export * from './widgetExtraData';
export * from './widgetOptions';
export * from './zoneBounds';
export * from './zoneCenter';
export * from './zoneCreateRequest';
export * from './zoneGroupCreateRequest';
export * from './zoneGroupListItem';
export * from './zoneGroupListResponse';
export * from './zoneGroupResponse';
export * from './zoneGroupUpdateRequest';
export * from './zoneListItem';
export * from './zoneListResponse';
export * from './zonePoint';
export * from './zoneResponse';
export * from './zoneUpdateRequest';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AlertAction } from './alertAction';
import { AlertCreateRequest } from './alertCreateRequest';
import { AlertListItem } from './alertListItem';
import { AlertListResponse } from './alertListResponse';
import { AlertNotify } from './alertNotify';
import { AlertResponse } from './alertResponse';
import { AlertUpdateRequest } from './alertUpdateRequest';
import { AnalyticsDataSourceOptions } from './analyticsDataSourceOptions';
import { AnalyticsDimension } from './analyticsDimension';
import { AnalyticsLevels } from './analyticsLevels';
import { AnalyticsOutputFilter } from './analyticsOutputFilter';
import { AnalyticsOutputFilters } from './analyticsOutputFilters';
import { AnalyticsOutputRangeFilter } from './analyticsOutputRangeFilter';
import { AnalyticsOutputRequest } from './analyticsOutputRequest';
import { AnalyticsOutputSettings } from './analyticsOutputSettings';
import { AnalyticsSettingsRequest } from './analyticsSettingsRequest';
import { AnalyticsSortOptions } from './analyticsSortOptions';
import { AnalyticsTable } from './analyticsTable';
import { AnalyticsUpdateFrequencyOffset } from './analyticsUpdateFrequencyOffset';
import { AnalyticsUpdateSettings } from './analyticsUpdateSettings';
import { AnalyticsUpdateSettingsDaily } from './analyticsUpdateSettingsDaily';
import { ApiKey } from './apiKey';
import { AssetAnalogParameter } from './assetAnalogParameter';
import { AssetCategoryCreateRequest } from './assetCategoryCreateRequest';
import { AssetCategoryListResponse } from './assetCategoryListResponse';
import { AssetCategoryResponse } from './assetCategoryResponse';
import { AssetCategoryUpdateRequest } from './assetCategoryUpdateRequest';
import { AssetCounterValue } from './assetCounterValue';
import { AssetCounterValues } from './assetCounterValues';
import { AssetCreateRequest } from './assetCreateRequest';
import { AssetCurfewParameter } from './assetCurfewParameter';
import { AssetGeoLock } from './assetGeoLock';
import { AssetGroupCreateRequest } from './assetGroupCreateRequest';
import { AssetGroupListResponse } from './assetGroupListResponse';
import { AssetGroupResponse } from './assetGroupResponse';
import { AssetGroupUpdateRequest } from './assetGroupUpdateRequest';
import { AssetListItem } from './assetListItem';
import { AssetListResponse } from './assetListResponse';
import { AssetLocation } from './assetLocation';
import { AssetMoveRequest } from './assetMoveRequest';
import { AssetParameters } from './assetParameters';
import { AssetRatingPenalty } from './assetRatingPenalty';
import { AssetRatingProfileCreateRequest } from './assetRatingProfileCreateRequest';
import { AssetRatingProfileListItem } from './assetRatingProfileListItem';
import { AssetRatingProfileListResponse } from './assetRatingProfileListResponse';
import { AssetRatingProfileResponse } from './assetRatingProfileResponse';
import { AssetRatingProfileUpdateRequest } from './assetRatingProfileUpdateRequest';
import { AssetResponse } from './assetResponse';
import { AssetStateItem } from './assetStateItem';
import { AssetStateProfileCreateRequest } from './assetStateProfileCreateRequest';
import { AssetStateProfileListItem } from './assetStateProfileListItem';
import { AssetStateProfileListResponse } from './assetStateProfileListResponse';
import { AssetStateProfileResponse } from './assetStateProfileResponse';
import { AssetStateProfileUpdateRequest } from './assetStateProfileUpdateRequest';
import { AssetTagCreateRequest } from './assetTagCreateRequest';
import { AssetTagListItem } from './assetTagListItem';
import { AssetTagListResponse } from './assetTagListResponse';
import { AssetTagResponse } from './assetTagResponse';
import { AssetTagTypeListResponse } from './assetTagTypeListResponse';
import { AssetTagTypeResponse } from './assetTagTypeResponse';
import { AssetTagUpdateRequest } from './assetTagUpdateRequest';
import { AssetTemperatureParameter } from './assetTemperatureParameter';
import { AssetTypeListResponse } from './assetTypeListResponse';
import { AssetTypeResponse } from './assetTypeResponse';
import { AssetUpdateRequest } from './assetUpdateRequest';
import { AssetZoneTarget } from './assetZoneTarget';
import { AuditEventChange } from './auditEventChange';
import { AuditEventFeedResponse } from './auditEventFeedResponse';
import { AuditEventKeyValue } from './auditEventKeyValue';
import { AuditEventResponse } from './auditEventResponse';
import { AuthEndpoint } from './authEndpoint';
import { AuthInfo } from './authInfo';
import { AuthRefreshTokenRequest } from './authRefreshTokenRequest';
import { AuthRequest } from './authRequest';
import { AuthResetPasswordRequest } from './authResetPasswordRequest';
import { AuthSetPasswordRequest } from './authSetPasswordRequest';
import { AuthUserResponse } from './authUserResponse';
import { BadRequestError } from './badRequestError';
import { CalculatedMeasure } from './calculatedMeasure';
import { CalculatedMeasureFormat } from './calculatedMeasureFormat';
import { CalculatedMeasureSettings } from './calculatedMeasureSettings';
import { CellProperties } from './cellProperties';
import { CellSet } from './cellSet';
import { CellSetAverage } from './cellSetAverage';
import { CellSetFilters } from './cellSetFilters';
import { CellSetResponse } from './cellSetResponse';
import { CellValue } from './cellValue';
import { ChartAxisMaxMin } from './chartAxisMaxMin';
import { ChartLabel } from './chartLabel';
import { ChartOptions } from './chartOptions';
import { ChartSeriesItem } from './chartSeriesItem';
import { ChartXAxis } from './chartXAxis';
import { ChartXAxisLabels } from './chartXAxisLabels';
import { ChartYAxis } from './chartYAxis';
import { ClientCreateRequest } from './clientCreateRequest';
import { ClientDetailsUpdateRequest } from './clientDetailsUpdateRequest';
import { ClientListItem } from './clientListItem';
import { ClientListResponse } from './clientListResponse';
import { ClientMeasurementUnits } from './clientMeasurementUnits';
import { ClientMeta } from './clientMeta';
import { ClientResponse } from './clientResponse';
import { ClientUpdateRequest } from './clientUpdateRequest';
import { ColumnFormatting } from './columnFormatting';
import { CompanyAddress } from './companyAddress';
import { CompanyGroupCreateRequest } from './companyGroupCreateRequest';
import { CompanyGroupListResponse } from './companyGroupListResponse';
import { CompanyGroupResponse } from './companyGroupResponse';
import { CompanyGroupUpdateRequest } from './companyGroupUpdateRequest';
import { CompanyMessages } from './companyMessages';
import { CompanyResponse } from './companyResponse';
import { CompanySupportDetails } from './companySupportDetails';
import { CompletedReportDataRequest } from './completedReportDataRequest';
import { CompletedReportListResponse } from './completedReportListResponse';
import { CompletedReportRequest } from './completedReportRequest';
import { CompletedReportResponse } from './completedReportResponse';
import { CompletedReportUpdateRequest } from './completedReportUpdateRequest';
import { Contact } from './contact';
import { CostCentreCreateRequest } from './costCentreCreateRequest';
import { CostCentreListResponse } from './costCentreListResponse';
import { CostCentreResponse } from './costCentreResponse';
import { CostCentreUpdateRequest } from './costCentreUpdateRequest';
import { CustomFieldDefinition } from './customFieldDefinition';
import { CustomFieldKeyValue } from './customFieldKeyValue';
import { DailyShift } from './dailyShift';
import { DashboardCreateRequest } from './dashboardCreateRequest';
import { DashboardListItem } from './dashboardListItem';
import { DashboardListResponse } from './dashboardListResponse';
import { DashboardResponse } from './dashboardResponse';
import { DashboardTemplateCreateRequest } from './dashboardTemplateCreateRequest';
import { DashboardTemplateListItem } from './dashboardTemplateListItem';
import { DashboardTemplateListResponse } from './dashboardTemplateListResponse';
import { DashboardTemplateResponse } from './dashboardTemplateResponse';
import { DashboardTemplateUpdateRequest } from './dashboardTemplateUpdateRequest';
import { DashboardUpdateRequest } from './dashboardUpdateRequest';
import { DashboardWidget } from './dashboardWidget';
import { DashboardWidgetDataSource } from './dashboardWidgetDataSource';
import { DashboardWidgetDataSourceOptions } from './dashboardWidgetDataSourceOptions';
import { DashboardWidgetPlacement } from './dashboardWidgetPlacement';
import { DeviceAccessory } from './deviceAccessory';
import { DeviceAnalogConfig } from './deviceAnalogConfig';
import { DeviceCANConfig } from './deviceCANConfig';
import { DeviceCameraConfig } from './deviceCameraConfig';
import { DeviceCounterConfig } from './deviceCounterConfig';
import { DeviceCreateRequest } from './deviceCreateRequest';
import { DeviceDigitalConfig } from './deviceDigitalConfig';
import { DeviceIOParameters } from './deviceIOParameters';
import { DeviceListItem } from './deviceListItem';
import { DeviceListResponse } from './deviceListResponse';
import { DeviceOutputConfig } from './deviceOutputConfig';
import { DeviceParameters } from './deviceParameters';
import { DeviceProviderCreateRequest } from './deviceProviderCreateRequest';
import { DeviceProviderListItem } from './deviceProviderListItem';
import { DeviceProviderListResponse } from './deviceProviderListResponse';
import { DeviceProviderResponse } from './deviceProviderResponse';
import { DeviceProviderTypeListItem } from './deviceProviderTypeListItem';
import { DeviceProviderTypeListResponse } from './deviceProviderTypeListResponse';
import { DeviceProviderTypeResponse } from './deviceProviderTypeResponse';
import { DeviceProviderUpdateRequest } from './deviceProviderUpdateRequest';
import { DeviceResponse } from './deviceResponse';
import { DeviceTemperatureConfig } from './deviceTemperatureConfig';
import { DeviceTypeAccessory } from './deviceTypeAccessory';
import { DeviceTypeCreateRequest } from './deviceTypeCreateRequest';
import { DeviceTypeFeature } from './deviceTypeFeature';
import { DeviceTypeIOCapabilities } from './deviceTypeIOCapabilities';
import { DeviceTypeListItem } from './deviceTypeListItem';
import { DeviceTypeListResponse } from './deviceTypeListResponse';
import { DeviceTypeResponse } from './deviceTypeResponse';
import { DeviceTypeUpdateRequest } from './deviceTypeUpdateRequest';
import { DeviceUpdateRequest } from './deviceUpdateRequest';
import { DeviceValueConfig } from './deviceValueConfig';
import { DimensionFilterItem } from './dimensionFilterItem';
import { DistributorCreateRequest } from './distributorCreateRequest';
import { DistributorDetailsUpdateRequest } from './distributorDetailsUpdateRequest';
import { DistributorListItem } from './distributorListItem';
import { DistributorListResponse } from './distributorListResponse';
import { DistributorResponse } from './distributorResponse';
import { DistributorUpdateRequest } from './distributorUpdateRequest';
import { DomainInfo } from './domainInfo';
import { DomainThemeResponse } from './domainThemeResponse';
import { EmailConfig } from './emailConfig';
import { EmailProviderCreateRequest } from './emailProviderCreateRequest';
import { EmailProviderListItem } from './emailProviderListItem';
import { EmailProviderListResponse } from './emailProviderListResponse';
import { EmailProviderResponse } from './emailProviderResponse';
import { EmailProviderTypeListItem } from './emailProviderTypeListItem';
import { EmailProviderTypeListResponse } from './emailProviderTypeListResponse';
import { EmailProviderTypeResponse } from './emailProviderTypeResponse';
import { EmailProviderUpdateRequest } from './emailProviderUpdateRequest';
import { EmailServerConfiguration } from './emailServerConfiguration';
import { EmailTemplateConfig } from './emailTemplateConfig';
import { EntityInfo } from './entityInfo';
import { EntitySearchResponse } from './entitySearchResponse';
import { EntitySearchResult } from './entitySearchResult';
import { EntitySoftLimit } from './entitySoftLimit';
import { ErrorBase } from './errorBase';
import { EventActionFilter } from './eventActionFilter';
import { EventActorFilter } from './eventActorFilter';
import { EventComment } from './eventComment';
import { EventCommentRequest } from './eventCommentRequest';
import { EventFeedResponse } from './eventFeedResponse';
import { EventFilter } from './eventFilter';
import { EventFilterCondition } from './eventFilterCondition';
import { EventHandled } from './eventHandled';
import { EventListResponse } from './eventListResponse';
import { EventMedia } from './eventMedia';
import { EventResponse } from './eventResponse';
import { EventTargetFilter } from './eventTargetFilter';
import { ExportTaskCreateRequest } from './exportTaskCreateRequest';
import { ExportTaskListItem } from './exportTaskListItem';
import { ExportTaskListResponse } from './exportTaskListResponse';
import { ExportTaskResponse } from './exportTaskResponse';
import { ExportTaskUpdateRequest } from './exportTaskUpdateRequest';
import { ForbiddenError } from './forbiddenError';
import { ForwardGeocodeResponse } from './forwardGeocodeResponse';
import { ForwardGeocodeResult } from './forwardGeocodeResult';
import { GeoJson } from './geoJson';
import { GeocoderAddress } from './geocoderAddress';
import { GeocoderBounds } from './geocoderBounds';
import { HealthIssueDates } from './healthIssueDates';
import { HealthIssueListResponse } from './healthIssueListResponse';
import { HealthIssueResolutionDetail } from './healthIssueResolutionDetail';
import { HealthIssueResponse } from './healthIssueResponse';
import { HealthIssueUpdateRequest } from './healthIssueUpdateRequest';
import { HealthIssueUpdateRequestResolved } from './healthIssueUpdateRequestResolved';
import { IdName } from './idName';
import { IdNameState } from './idNameState';
import { IdNameType } from './idNameType';
import { IoTypeCreateRequest } from './ioTypeCreateRequest';
import { IoTypeListItem } from './ioTypeListItem';
import { IoTypeListResponse } from './ioTypeListResponse';
import { IoTypeRateConfig } from './ioTypeRateConfig';
import { IoTypeResponse } from './ioTypeResponse';
import { IoTypeTextConfig } from './ioTypeTextConfig';
import { IoTypeUpdateRequest } from './ioTypeUpdateRequest';
import { MapRoute } from './mapRoute';
import { MapRouteResponse } from './mapRouteResponse';
import { MapRouteSegment } from './mapRouteSegment';
import { MapSetLayer } from './mapSetLayer';
import { MapSetListItem } from './mapSetListItem';
import { MapSetListResponse } from './mapSetListResponse';
import { MapSetResponse } from './mapSetResponse';
import { MapsetCreateRequest } from './mapsetCreateRequest';
import { MapsetUpdateRequest } from './mapsetUpdateRequest';
import { MeasureDescription } from './measureDescription';
import { MediaInfoListResponse } from './mediaInfoListResponse';
import { MediaInfoResponse } from './mediaInfoResponse';
import { MediaVideoEventCreateRequest } from './mediaVideoEventCreateRequest';
import { MediaVideoEventUpdateRequest } from './mediaVideoEventUpdateRequest';
import { NotFoundError } from './notFoundError';
import { NotificationActions } from './notificationActions';
import { NotificationFeedResponse } from './notificationFeedResponse';
import { NotificationResponse } from './notificationResponse';
import { NotificationSettings } from './notificationSettings';
import { OpenIdConnectIssuer } from './openIdConnectIssuer';
import { OverspeedBandItem } from './overspeedBandItem';
import { OverspeedProfileCreateRequest } from './overspeedProfileCreateRequest';
import { OverspeedProfileListItem } from './overspeedProfileListItem';
import { OverspeedProfileListResponse } from './overspeedProfileListResponse';
import { OverspeedProfileResponse } from './overspeedProfileResponse';
import { OverspeedProfileUpdateRequest } from './overspeedProfileUpdateRequest';
import { PieChartOptions } from './pieChartOptions';
import { PieChartSeriesItem } from './pieChartSeriesItem';
import { Policy } from './policy';
import { PolicyStatement } from './policyStatement';
import { QueueReportRequest } from './queueReportRequest';
import { QueuedReportListResponse } from './queuedReportListResponse';
import { QueuedReportResponse } from './queuedReportResponse';
import { RebuildDashboardWidgetResponse } from './rebuildDashboardWidgetResponse';
import { ReminderCreateRequest } from './reminderCreateRequest';
import { ReminderListItem } from './reminderListItem';
import { ReminderListResponse } from './reminderListResponse';
import { ReminderReset } from './reminderReset';
import { ReminderResetDaily } from './reminderResetDaily';
import { ReminderResetMonthly } from './reminderResetMonthly';
import { ReminderResetWeekly } from './reminderResetWeekly';
import { ReminderResponse } from './reminderResponse';
import { ReminderTriggerValue } from './reminderTriggerValue';
import { ReminderUpdateRequest } from './reminderUpdateRequest';
import { ReportConfig } from './reportConfig';
import { ReportDefinitionColumnOptions } from './reportDefinitionColumnOptions';
import { ReportDefinitionGroupingOptions } from './reportDefinitionGroupingOptions';
import { ReportDefinitionLayoutOptions } from './reportDefinitionLayoutOptions';
import { ReportDefinitionListResponse } from './reportDefinitionListResponse';
import { ReportDefinitionResponse } from './reportDefinitionResponse';
import { ReportDefinitionStyleLimits } from './reportDefinitionStyleLimits';
import { ReportDefinitionStyleOptions } from './reportDefinitionStyleOptions';
import { ReportOutputOptions } from './reportOutputOptions';
import { ReportTemplateConfig } from './reportTemplateConfig';
import { ReportTemplateCreateRequest } from './reportTemplateCreateRequest';
import { ReportTemplateListResponse } from './reportTemplateListResponse';
import { ReportTemplateResponse } from './reportTemplateResponse';
import { ReportTemplateUpdateRequest } from './reportTemplateUpdateRequest';
import { ReverseGeocode } from './reverseGeocode';
import { ReverseGeocodeResponse } from './reverseGeocodeResponse';
import { ReverseGeocodeResult } from './reverseGeocodeResult';
import { Schedule } from './schedule';
import { ScheduledReportCreateRequest } from './scheduledReportCreateRequest';
import { ScheduledReportListItem } from './scheduledReportListItem';
import { ScheduledReportListResponse } from './scheduledReportListResponse';
import { ScheduledReportReport } from './scheduledReportReport';
import { ScheduledReportResponse } from './scheduledReportResponse';
import { ScheduledReportUpdateRequest } from './scheduledReportUpdateRequest';
import { SelectedMeasureValues } from './selectedMeasureValues';
import { SelectedUserTokenResponse } from './selectedUserTokenResponse';
import { Shift } from './shift';
import { ShiftConfig } from './shiftConfig';
import { ShiftPattern } from './shiftPattern';
import { SignOutRequest } from './signOutRequest';
import { SimCardCreateRequest } from './simCardCreateRequest';
import { SimCardListItem } from './simCardListItem';
import { SimCardListResponse } from './simCardListResponse';
import { SimCardResponse } from './simCardResponse';
import { SimCardUpdateRequest } from './simCardUpdateRequest';
import { SmsGatewayProviderCreateRequest } from './smsGatewayProviderCreateRequest';
import { SmsGatewayProviderListItem } from './smsGatewayProviderListItem';
import { SmsGatewayProviderListResponse } from './smsGatewayProviderListResponse';
import { SmsGatewayProviderResponse } from './smsGatewayProviderResponse';
import { SmsGatewayProviderTypeListItem } from './smsGatewayProviderTypeListItem';
import { SmsGatewayProviderTypeListResponse } from './smsGatewayProviderTypeListResponse';
import { SmsGatewayProviderTypeResponse } from './smsGatewayProviderTypeResponse';
import { SmsGatewayProviderUpdateRequest } from './smsGatewayProviderUpdateRequest';
import { SoftLimits } from './softLimits';
import { SpeedLimits } from './speedLimits';
import { StatChartOptions } from './statChartOptions';
import { StatsEntityOutputOptions } from './statsEntityOutputOptions';
import { SuccessResponse } from './successResponse';
import { TargetLine } from './targetLine';
import { TaskCreateRequest } from './taskCreateRequest';
import { TaskDates } from './taskDates';
import { TaskListResponse } from './taskListResponse';
import { TaskOptions } from './taskOptions';
import { TaskResponse } from './taskResponse';
import { TelemetryFeedResponse } from './telemetryFeedResponse';
import { TelemetryIOValue } from './telemetryIOValue';
import { TelemetryListResponse } from './telemetryListResponse';
import { TelemetryLocation } from './telemetryLocation';
import { TelemetryResponse } from './telemetryResponse';
import { TelemetryState } from './telemetryState';
import { TelemetryStateResponse } from './telemetryStateResponse';
import { TelemetryTrip } from './telemetryTrip';
import { TestNotificationsRequest } from './testNotificationsRequest';
import { ThemeCreateRequest } from './themeCreateRequest';
import { ThemeInfo } from './themeInfo';
import { ThemeListItem } from './themeListItem';
import { ThemeListResponse } from './themeListResponse';
import { ThemeResponse } from './themeResponse';
import { ThemeUpdateRequest } from './themeUpdateRequest';
import { TimeRange } from './timeRange';
import { TokenResponse } from './tokenResponse';
import { TooManyRequestsError } from './tooManyRequestsError';
import { TripFeedResponse } from './tripFeedResponse';
import { TripListResponse } from './tripListResponse';
import { TripLocation } from './tripLocation';
import { TripRating } from './tripRating';
import { TripRatingPenalty } from './tripRatingPenalty';
import { TripResponse } from './tripResponse';
import { TripStats } from './tripStats';
import { UnauthorizedError } from './unauthorizedError';
import { UnexpectedError } from './unexpectedError';
import { UpdateUserPasswordRequest } from './updateUserPasswordRequest';
import { UserApiKeyCreateRequest } from './userApiKeyCreateRequest';
import { UserApiKeyCreateResponse } from './userApiKeyCreateResponse';
import { UserClientPermissions } from './userClientPermissions';
import { UserCreateRequest } from './userCreateRequest';
import { UserCreateResponse } from './userCreateResponse';
import { UserListItem } from './userListItem';
import { UserListResponse } from './userListResponse';
import { UserPermissions } from './userPermissions';
import { UserProfileResponse } from './userProfileResponse';
import { UserResetRequest } from './userResetRequest';
import { UserResetResponse } from './userResetResponse';
import { UserResponse } from './userResponse';
import { UserRoleCreateRequest } from './userRoleCreateRequest';
import { UserRoleListItem } from './userRoleListItem';
import { UserRoleListResponse } from './userRoleListResponse';
import { UserRoleResponse } from './userRoleResponse';
import { UserRoleUpdateRequest } from './userRoleUpdateRequest';
import { UserSession } from './userSession';
import { UserSessionResponse } from './userSessionResponse';
import { UserUpdateRequest } from './userUpdateRequest';
import { VendorCreateRequest } from './vendorCreateRequest';
import { VendorDetailsUpdateRequest } from './vendorDetailsUpdateRequest';
import { VendorListItem } from './vendorListItem';
import { VendorListResponse } from './vendorListResponse';
import { VendorResponse } from './vendorResponse';
import { VendorUpdateRequest } from './vendorUpdateRequest';
import { WidgetExtraData } from './widgetExtraData';
import { WidgetOptions } from './widgetOptions';
import { ZoneBounds } from './zoneBounds';
import { ZoneCenter } from './zoneCenter';
import { ZoneCreateRequest } from './zoneCreateRequest';
import { ZoneGroupCreateRequest } from './zoneGroupCreateRequest';
import { ZoneGroupListItem } from './zoneGroupListItem';
import { ZoneGroupListResponse } from './zoneGroupListResponse';
import { ZoneGroupResponse } from './zoneGroupResponse';
import { ZoneGroupUpdateRequest } from './zoneGroupUpdateRequest';
import { ZoneListItem } from './zoneListItem';
import { ZoneListResponse } from './zoneListResponse';
import { ZonePoint } from './zonePoint';
import { ZoneResponse } from './zoneResponse';
import { ZoneUpdateRequest } from './zoneUpdateRequest';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AlertAction.TypeEnum": AlertAction.TypeEnum,
        "AlertCreateRequest.StateEnum": AlertCreateRequest.StateEnum,
        "AlertCreateRequest.PriorityEnum": AlertCreateRequest.PriorityEnum,
        "AlertListItem.StateEnum": AlertListItem.StateEnum,
        "AlertListItem.PriorityEnum": AlertListItem.PriorityEnum,
        "AlertNotify.TypeEnum": AlertNotify.TypeEnum,
        "AlertResponse.StateEnum": AlertResponse.StateEnum,
        "AlertResponse.PriorityEnum": AlertResponse.PriorityEnum,
        "AlertUpdateRequest.StateEnum": AlertUpdateRequest.StateEnum,
        "AlertUpdateRequest.PriorityEnum": AlertUpdateRequest.PriorityEnum,
        "AnalyticsDataSourceOptions.RollupEnum": AnalyticsDataSourceOptions.RollupEnum,
        "AnalyticsDimension.DimEnum": AnalyticsDimension.DimEnum,
        "AnalyticsOutputFilter.ModeEnum": AnalyticsOutputFilter.ModeEnum,
        "AnalyticsOutputRequest.RowEnum": AnalyticsOutputRequest.RowEnum,
        "AnalyticsOutputRequest.GroupEnum": AnalyticsOutputRequest.GroupEnum,
        "AnalyticsOutputSettings.TimeOptionsEnum": AnalyticsOutputSettings.TimeOptionsEnum,
        "AnalyticsSettingsRequest.RowEnum": AnalyticsSettingsRequest.RowEnum,
        "AnalyticsSettingsRequest.GroupEnum": AnalyticsSettingsRequest.GroupEnum,
        "AnalyticsSortOptions.TypeEnum": AnalyticsSortOptions.TypeEnum,
        "AnalyticsSortOptions.DirectionEnum": AnalyticsSortOptions.DirectionEnum,
        "AssetCreateRequest.ColorEnum": AssetCreateRequest.ColorEnum,
        "AssetCreateRequest.StateEnum": AssetCreateRequest.StateEnum,
        "AssetListItem.ColorEnum": AssetListItem.ColorEnum,
        "AssetListItem.StateEnum": AssetListItem.StateEnum,
        "AssetRatingProfileCreateRequest.StateEnum": AssetRatingProfileCreateRequest.StateEnum,
        "AssetRatingProfileListItem.StateEnum": AssetRatingProfileListItem.StateEnum,
        "AssetRatingProfileResponse.StateEnum": AssetRatingProfileResponse.StateEnum,
        "AssetRatingProfileUpdateRequest.StateEnum": AssetRatingProfileUpdateRequest.StateEnum,
        "AssetResponse.ColorEnum": AssetResponse.ColorEnum,
        "AssetResponse.StateEnum": AssetResponse.StateEnum,
        "AssetStateProfileCreateRequest.StateEnum": AssetStateProfileCreateRequest.StateEnum,
        "AssetStateProfileListItem.StateEnum": AssetStateProfileListItem.StateEnum,
        "AssetStateProfileResponse.StateEnum": AssetStateProfileResponse.StateEnum,
        "AssetStateProfileUpdateRequest.StateEnum": AssetStateProfileUpdateRequest.StateEnum,
        "AssetTagCreateRequest.ModeEnum": AssetTagCreateRequest.ModeEnum,
        "AssetTagCreateRequest.StateEnum": AssetTagCreateRequest.StateEnum,
        "AssetTagListItem.ModeEnum": AssetTagListItem.ModeEnum,
        "AssetTagListItem.StateEnum": AssetTagListItem.StateEnum,
        "AssetTagResponse.ModeEnum": AssetTagResponse.ModeEnum,
        "AssetTagResponse.StateEnum": AssetTagResponse.StateEnum,
        "AssetTagUpdateRequest.ModeEnum": AssetTagUpdateRequest.ModeEnum,
        "AssetTagUpdateRequest.StateEnum": AssetTagUpdateRequest.StateEnum,
        "AssetUpdateRequest.ColorEnum": AssetUpdateRequest.ColorEnum,
        "AssetUpdateRequest.StateEnum": AssetUpdateRequest.StateEnum,
        "AssetZoneTarget.ZoneTypeEnum": AssetZoneTarget.ZoneTypeEnum,
        "AssetZoneTarget.TargetSelectionTypeEnum": AssetZoneTarget.TargetSelectionTypeEnum,
        "AuditEventChange.ActionEnum": AuditEventChange.ActionEnum,
        "AuditEventResponse.EventTypeEnum": AuditEventResponse.EventTypeEnum,
        "AuthEndpoint.TypeEnum": AuthEndpoint.TypeEnum,
        "AuthInfo.AvailableAuthEnum": AuthInfo.AvailableAuthEnum,
        "CalculatedMeasure.FormatEnum": CalculatedMeasure.FormatEnum,
        "CellProperties.TypeEnum": CellProperties.TypeEnum,
        "CellSet.StatusEnum": CellSet.StatusEnum,
        "CellValue.TypeEnum": CellValue.TypeEnum,
        "ChartSeriesItem.OrientationEnum": ChartSeriesItem.OrientationEnum,
        "ChartSeriesItem.YAxisEnum": ChartSeriesItem.YAxisEnum,
        "ChartXAxisLabels.LayoutEnum": ChartXAxisLabels.LayoutEnum,
        "ClientCreateRequest.StateEnum": ClientCreateRequest.StateEnum,
        "ClientListItem.StateEnum": ClientListItem.StateEnum,
        "ClientMeasurementUnits.DistanceUnitEnum": ClientMeasurementUnits.DistanceUnitEnum,
        "ClientMeasurementUnits.AltitudeUnitEnum": ClientMeasurementUnits.AltitudeUnitEnum,
        "ClientMeasurementUnits.SpeedUnitEnum": ClientMeasurementUnits.SpeedUnitEnum,
        "ClientMeasurementUnits.AreaUnitEnum": ClientMeasurementUnits.AreaUnitEnum,
        "ClientMeasurementUnits.VolumeUnitEnum": ClientMeasurementUnits.VolumeUnitEnum,
        "ClientMeasurementUnits.WeightUnitEnum": ClientMeasurementUnits.WeightUnitEnum,
        "ClientMeasurementUnits.TimeUnitEnum": ClientMeasurementUnits.TimeUnitEnum,
        "ClientMeasurementUnits.DateUnitEnum": ClientMeasurementUnits.DateUnitEnum,
        "ClientMeasurementUnits.TemperatureUnitEnum": ClientMeasurementUnits.TemperatureUnitEnum,
        "ClientResponse.StateEnum": ClientResponse.StateEnum,
        "ClientUpdateRequest.StateEnum": ClientUpdateRequest.StateEnum,
        "CompanyResponse.StateEnum": CompanyResponse.StateEnum,
        "CompanyResponse.TypeEnum": CompanyResponse.TypeEnum,
        "CompletedReportResponse.SourceEnum": CompletedReportResponse.SourceEnum,
        "CompletedReportResponse.StatusEnum": CompletedReportResponse.StatusEnum,
        "CompletedReportResponse.OutputFormatEnum": CompletedReportResponse.OutputFormatEnum,
        "CompletedReportResponse.TriggeredByEnum": CompletedReportResponse.TriggeredByEnum,
        "Contact.TypeEnum": Contact.TypeEnum,
        "DashboardCreateRequest.LevelEnum": DashboardCreateRequest.LevelEnum,
        "DashboardListItem.LevelEnum": DashboardListItem.LevelEnum,
        "DashboardResponse.LevelEnum": DashboardResponse.LevelEnum,
        "DashboardTemplateListItem.StateEnum": DashboardTemplateListItem.StateEnum,
        "DashboardTemplateResponse.StateEnum": DashboardTemplateResponse.StateEnum,
        "DashboardTemplateUpdateRequest.StateEnum": DashboardTemplateUpdateRequest.StateEnum,
        "DashboardUpdateRequest.LevelEnum": DashboardUpdateRequest.LevelEnum,
        "DashboardWidget.WidgetTypeEnum": DashboardWidget.WidgetTypeEnum,
        "DashboardWidgetDataSource.TypeEnum": DashboardWidgetDataSource.TypeEnum,
        "DeviceCreateRequest.StateEnum": DeviceCreateRequest.StateEnum,
        "DeviceListItem.StateEnum": DeviceListItem.StateEnum,
        "DeviceProviderCreateRequest.StateEnum": DeviceProviderCreateRequest.StateEnum,
        "DeviceProviderListItem.StateEnum": DeviceProviderListItem.StateEnum,
        "DeviceProviderResponse.StateEnum": DeviceProviderResponse.StateEnum,
        "DeviceProviderTypeListItem.StateEnum": DeviceProviderTypeListItem.StateEnum,
        "DeviceProviderTypeResponse.StateEnum": DeviceProviderTypeResponse.StateEnum,
        "DeviceProviderUpdateRequest.StateEnum": DeviceProviderUpdateRequest.StateEnum,
        "DeviceResponse.StateEnum": DeviceResponse.StateEnum,
        "DeviceTypeCreateRequest.StateEnum": DeviceTypeCreateRequest.StateEnum,
        "DeviceTypeListItem.StateEnum": DeviceTypeListItem.StateEnum,
        "DeviceTypeResponse.StateEnum": DeviceTypeResponse.StateEnum,
        "DeviceTypeUpdateRequest.StateEnum": DeviceTypeUpdateRequest.StateEnum,
        "DeviceUpdateRequest.StateEnum": DeviceUpdateRequest.StateEnum,
        "DistributorCreateRequest.StateEnum": DistributorCreateRequest.StateEnum,
        "DistributorListItem.StateEnum": DistributorListItem.StateEnum,
        "DistributorResponse.StateEnum": DistributorResponse.StateEnum,
        "DistributorUpdateRequest.StateEnum": DistributorUpdateRequest.StateEnum,
        "EmailProviderCreateRequest.StateEnum": EmailProviderCreateRequest.StateEnum,
        "EmailProviderListItem.StateEnum": EmailProviderListItem.StateEnum,
        "EmailProviderResponse.StateEnum": EmailProviderResponse.StateEnum,
        "EmailProviderTypeListItem.StateEnum": EmailProviderTypeListItem.StateEnum,
        "EmailProviderTypeResponse.StateEnum": EmailProviderTypeResponse.StateEnum,
        "EmailProviderUpdateRequest.StateEnum": EmailProviderUpdateRequest.StateEnum,
        "EmailServerConfiguration.StateEnum": EmailServerConfiguration.StateEnum,
        "EventActorFilter.ActorTypeEnum": EventActorFilter.ActorTypeEnum,
        "EventActorFilter.ActorSelectionTypeEnum": EventActorFilter.ActorSelectionTypeEnum,
        "EventMedia.MediaTypeEnum": EventMedia.MediaTypeEnum,
        "EventTargetFilter.TargetSelectionTypeEnum": EventTargetFilter.TargetSelectionTypeEnum,
        "ExportTaskCreateRequest.StateEnum": ExportTaskCreateRequest.StateEnum,
        "ExportTaskCreateRequest.DeliveryMethodEnum": ExportTaskCreateRequest.DeliveryMethodEnum,
        "ExportTaskCreateRequest.DocumentVersionEnum": ExportTaskCreateRequest.DocumentVersionEnum,
        "ExportTaskListItem.StateEnum": ExportTaskListItem.StateEnum,
        "ExportTaskListItem.DeliveryMethodEnum": ExportTaskListItem.DeliveryMethodEnum,
        "ExportTaskListItem.DocumentVersionEnum": ExportTaskListItem.DocumentVersionEnum,
        "ExportTaskResponse.StateEnum": ExportTaskResponse.StateEnum,
        "ExportTaskResponse.DeliveryMethodEnum": ExportTaskResponse.DeliveryMethodEnum,
        "ExportTaskResponse.DocumentVersionEnum": ExportTaskResponse.DocumentVersionEnum,
        "ExportTaskUpdateRequest.StateEnum": ExportTaskUpdateRequest.StateEnum,
        "ExportTaskUpdateRequest.DeliveryMethodEnum": ExportTaskUpdateRequest.DeliveryMethodEnum,
        "ExportTaskUpdateRequest.DocumentVersionEnum": ExportTaskUpdateRequest.DocumentVersionEnum,
        "ForwardGeocodeResult.TypeEnum": ForwardGeocodeResult.TypeEnum,
        "IdNameState.StateEnum": IdNameState.StateEnum,
        "IoTypeCreateRequest.StateEnum": IoTypeCreateRequest.StateEnum,
        "IoTypeCreateRequest.TypeEnum": IoTypeCreateRequest.TypeEnum,
        "IoTypeCreateRequest.SmoothingTypeEnum": IoTypeCreateRequest.SmoothingTypeEnum,
        "IoTypeListItem.StateEnum": IoTypeListItem.StateEnum,
        "IoTypeListItem.TypeEnum": IoTypeListItem.TypeEnum,
        "IoTypeListItem.SmoothingTypeEnum": IoTypeListItem.SmoothingTypeEnum,
        "IoTypeRateConfig.TypeEnum": IoTypeRateConfig.TypeEnum,
        "IoTypeResponse.StateEnum": IoTypeResponse.StateEnum,
        "IoTypeResponse.TypeEnum": IoTypeResponse.TypeEnum,
        "IoTypeResponse.SmoothingTypeEnum": IoTypeResponse.SmoothingTypeEnum,
        "IoTypeUpdateRequest.StateEnum": IoTypeUpdateRequest.StateEnum,
        "IoTypeUpdateRequest.TypeEnum": IoTypeUpdateRequest.TypeEnum,
        "IoTypeUpdateRequest.SmoothingTypeEnum": IoTypeUpdateRequest.SmoothingTypeEnum,
        "MapRoute.StrategyEnum": MapRoute.StrategyEnum,
        "MapSetLayer.ServerTypeEnum": MapSetLayer.ServerTypeEnum,
        "MapSetLayer.ImageTypeEnum": MapSetLayer.ImageTypeEnum,
        "MapSetListItem.StateEnum": MapSetListItem.StateEnum,
        "MapSetResponse.StateEnum": MapSetResponse.StateEnum,
        "MapsetCreateRequest.StateEnum": MapsetCreateRequest.StateEnum,
        "MapsetUpdateRequest.StateEnum": MapsetUpdateRequest.StateEnum,
        "MeasureDescription.FormatEnum": MeasureDescription.FormatEnum,
        "MediaInfoResponse.StatusEnum": MediaInfoResponse.StatusEnum,
        "NotificationActions.LowEnum": NotificationActions.LowEnum,
        "NotificationActions.MediumEnum": NotificationActions.MediumEnum,
        "NotificationActions.HighEnum": NotificationActions.HighEnum,
        "OverspeedProfileCreateRequest.StateEnum": OverspeedProfileCreateRequest.StateEnum,
        "OverspeedProfileListItem.StateEnum": OverspeedProfileListItem.StateEnum,
        "OverspeedProfileResponse.StateEnum": OverspeedProfileResponse.StateEnum,
        "OverspeedProfileUpdateRequest.StateEnum": OverspeedProfileUpdateRequest.StateEnum,
        "PieChartOptions.DataEnum": PieChartOptions.DataEnum,
        "PolicyStatement.EffectEnum": PolicyStatement.EffectEnum,
        "QueueReportRequest.SourceEnum": QueueReportRequest.SourceEnum,
        "QueueReportRequest.OutputFormatEnum": QueueReportRequest.OutputFormatEnum,
        "QueuedReportResponse.SourceEnum": QueuedReportResponse.SourceEnum,
        "QueuedReportResponse.StatusEnum": QueuedReportResponse.StatusEnum,
        "QueuedReportResponse.OutputFormatEnum": QueuedReportResponse.OutputFormatEnum,
        "QueuedReportResponse.TriggeredByEnum": QueuedReportResponse.TriggeredByEnum,
        "RebuildDashboardWidgetResponse.StatusEnum": RebuildDashboardWidgetResponse.StatusEnum,
        "ReminderCreateRequest.TypeEnum": ReminderCreateRequest.TypeEnum,
        "ReminderCreateRequest.ModeEnum": ReminderCreateRequest.ModeEnum,
        "ReminderListItem.TypeEnum": ReminderListItem.TypeEnum,
        "ReminderListItem.ModeEnum": ReminderListItem.ModeEnum,
        "ReminderReset.TypeEnum": ReminderReset.TypeEnum,
        "ReminderResponse.TypeEnum": ReminderResponse.TypeEnum,
        "ReminderResponse.ModeEnum": ReminderResponse.ModeEnum,
        "ReminderUpdateRequest.TypeEnum": ReminderUpdateRequest.TypeEnum,
        "ReminderUpdateRequest.ModeEnum": ReminderUpdateRequest.ModeEnum,
        "ReportDefinitionColumnOptions.AlignEnum": ReportDefinitionColumnOptions.AlignEnum,
        "ReportDefinitionResponse.SourceEnum": ReportDefinitionResponse.SourceEnum,
        "ReportTemplateConfig.OutputFormatEnum": ReportTemplateConfig.OutputFormatEnum,
        "ReverseGeocodeResult.TypeEnum": ReverseGeocodeResult.TypeEnum,
        "Schedule.ScheduleTypeEnum": Schedule.ScheduleTypeEnum,
        "ScheduledReportCreateRequest.StateEnum": ScheduledReportCreateRequest.StateEnum,
        "ScheduledReportCreateRequest.ScheduleTypeEnum": ScheduledReportCreateRequest.ScheduleTypeEnum,
        "ScheduledReportListItem.StateEnum": ScheduledReportListItem.StateEnum,
        "ScheduledReportListItem.ScheduleTypeEnum": ScheduledReportListItem.ScheduleTypeEnum,
        "ScheduledReportReport.OutputFormatEnum": ScheduledReportReport.OutputFormatEnum,
        "ScheduledReportResponse.StateEnum": ScheduledReportResponse.StateEnum,
        "ScheduledReportResponse.ScheduleTypeEnum": ScheduledReportResponse.ScheduleTypeEnum,
        "ScheduledReportUpdateRequest.StateEnum": ScheduledReportUpdateRequest.StateEnum,
        "ScheduledReportUpdateRequest.ScheduleTypeEnum": ScheduledReportUpdateRequest.ScheduleTypeEnum,
        "SimCardCreateRequest.StateEnum": SimCardCreateRequest.StateEnum,
        "SimCardListItem.StateEnum": SimCardListItem.StateEnum,
        "SimCardResponse.StateEnum": SimCardResponse.StateEnum,
        "SimCardUpdateRequest.StateEnum": SimCardUpdateRequest.StateEnum,
        "SmsGatewayProviderCreateRequest.DirectionEnum": SmsGatewayProviderCreateRequest.DirectionEnum,
        "SmsGatewayProviderCreateRequest.StateEnum": SmsGatewayProviderCreateRequest.StateEnum,
        "SmsGatewayProviderListItem.DirectionEnum": SmsGatewayProviderListItem.DirectionEnum,
        "SmsGatewayProviderListItem.StateEnum": SmsGatewayProviderListItem.StateEnum,
        "SmsGatewayProviderResponse.DirectionEnum": SmsGatewayProviderResponse.DirectionEnum,
        "SmsGatewayProviderResponse.StateEnum": SmsGatewayProviderResponse.StateEnum,
        "SmsGatewayProviderTypeListItem.DirectionEnum": SmsGatewayProviderTypeListItem.DirectionEnum,
        "SmsGatewayProviderTypeListItem.StateEnum": SmsGatewayProviderTypeListItem.StateEnum,
        "SmsGatewayProviderTypeResponse.DirectionEnum": SmsGatewayProviderTypeResponse.DirectionEnum,
        "SmsGatewayProviderTypeResponse.StateEnum": SmsGatewayProviderTypeResponse.StateEnum,
        "SmsGatewayProviderUpdateRequest.DirectionEnum": SmsGatewayProviderUpdateRequest.DirectionEnum,
        "SmsGatewayProviderUpdateRequest.StateEnum": SmsGatewayProviderUpdateRequest.StateEnum,
        "StatChartOptions.DataEnum": StatChartOptions.DataEnum,
        "StatChartOptions.TrendEnum": StatChartOptions.TrendEnum,
        "StatsEntityOutputOptions.GroupLevelEnum": StatsEntityOutputOptions.GroupLevelEnum,
        "StatsEntityOutputOptions.RowLevelEnum": StatsEntityOutputOptions.RowLevelEnum,
        "TargetLine.TypeEnum": TargetLine.TypeEnum,
        "TaskResponse.StateEnum": TaskResponse.StateEnum,
        "TestNotificationsRequest.NotificationChannelsEnum": TestNotificationsRequest.NotificationChannelsEnum,
        "ThemeCreateRequest.StateEnum": ThemeCreateRequest.StateEnum,
        "ThemeResponse.StateEnum": ThemeResponse.StateEnum,
        "ThemeUpdateRequest.StateEnum": ThemeUpdateRequest.StateEnum,
        "TripResponse.TripTypeEnum": TripResponse.TripTypeEnum,
        "UserCreateRequest.StateEnum": UserCreateRequest.StateEnum,
        "UserCreateResponse.StateEnum": UserCreateResponse.StateEnum,
        "UserListItem.StateEnum": UserListItem.StateEnum,
        "UserProfileResponse.StateEnum": UserProfileResponse.StateEnum,
        "UserResetResponse.StateEnum": UserResetResponse.StateEnum,
        "UserResponse.StateEnum": UserResponse.StateEnum,
        "UserUpdateRequest.StateEnum": UserUpdateRequest.StateEnum,
        "VendorCreateRequest.StateEnum": VendorCreateRequest.StateEnum,
        "VendorListItem.StateEnum": VendorListItem.StateEnum,
        "VendorResponse.StateEnum": VendorResponse.StateEnum,
        "VendorUpdateRequest.StateEnum": VendorUpdateRequest.StateEnum,
        "ZoneCreateRequest.StateEnum": ZoneCreateRequest.StateEnum,
        "ZoneCreateRequest.ZoneTypeEnum": ZoneCreateRequest.ZoneTypeEnum,
        "ZoneListItem.StateEnum": ZoneListItem.StateEnum,
        "ZoneListItem.ZoneTypeEnum": ZoneListItem.ZoneTypeEnum,
        "ZoneResponse.StateEnum": ZoneResponse.StateEnum,
        "ZoneResponse.ZoneTypeEnum": ZoneResponse.ZoneTypeEnum,
        "ZoneUpdateRequest.StateEnum": ZoneUpdateRequest.StateEnum,
        "ZoneUpdateRequest.ZoneTypeEnum": ZoneUpdateRequest.ZoneTypeEnum,
}

let typeMap: {[index: string]: any} = {
    "AlertAction": AlertAction,
    "AlertCreateRequest": AlertCreateRequest,
    "AlertListItem": AlertListItem,
    "AlertListResponse": AlertListResponse,
    "AlertNotify": AlertNotify,
    "AlertResponse": AlertResponse,
    "AlertUpdateRequest": AlertUpdateRequest,
    "AnalyticsDataSourceOptions": AnalyticsDataSourceOptions,
    "AnalyticsDimension": AnalyticsDimension,
    "AnalyticsLevels": AnalyticsLevels,
    "AnalyticsOutputFilter": AnalyticsOutputFilter,
    "AnalyticsOutputFilters": AnalyticsOutputFilters,
    "AnalyticsOutputRangeFilter": AnalyticsOutputRangeFilter,
    "AnalyticsOutputRequest": AnalyticsOutputRequest,
    "AnalyticsOutputSettings": AnalyticsOutputSettings,
    "AnalyticsSettingsRequest": AnalyticsSettingsRequest,
    "AnalyticsSortOptions": AnalyticsSortOptions,
    "AnalyticsTable": AnalyticsTable,
    "AnalyticsUpdateFrequencyOffset": AnalyticsUpdateFrequencyOffset,
    "AnalyticsUpdateSettings": AnalyticsUpdateSettings,
    "AnalyticsUpdateSettingsDaily": AnalyticsUpdateSettingsDaily,
    "ApiKey": ApiKey,
    "AssetAnalogParameter": AssetAnalogParameter,
    "AssetCategoryCreateRequest": AssetCategoryCreateRequest,
    "AssetCategoryListResponse": AssetCategoryListResponse,
    "AssetCategoryResponse": AssetCategoryResponse,
    "AssetCategoryUpdateRequest": AssetCategoryUpdateRequest,
    "AssetCounterValue": AssetCounterValue,
    "AssetCounterValues": AssetCounterValues,
    "AssetCreateRequest": AssetCreateRequest,
    "AssetCurfewParameter": AssetCurfewParameter,
    "AssetGeoLock": AssetGeoLock,
    "AssetGroupCreateRequest": AssetGroupCreateRequest,
    "AssetGroupListResponse": AssetGroupListResponse,
    "AssetGroupResponse": AssetGroupResponse,
    "AssetGroupUpdateRequest": AssetGroupUpdateRequest,
    "AssetListItem": AssetListItem,
    "AssetListResponse": AssetListResponse,
    "AssetLocation": AssetLocation,
    "AssetMoveRequest": AssetMoveRequest,
    "AssetParameters": AssetParameters,
    "AssetRatingPenalty": AssetRatingPenalty,
    "AssetRatingProfileCreateRequest": AssetRatingProfileCreateRequest,
    "AssetRatingProfileListItem": AssetRatingProfileListItem,
    "AssetRatingProfileListResponse": AssetRatingProfileListResponse,
    "AssetRatingProfileResponse": AssetRatingProfileResponse,
    "AssetRatingProfileUpdateRequest": AssetRatingProfileUpdateRequest,
    "AssetResponse": AssetResponse,
    "AssetStateItem": AssetStateItem,
    "AssetStateProfileCreateRequest": AssetStateProfileCreateRequest,
    "AssetStateProfileListItem": AssetStateProfileListItem,
    "AssetStateProfileListResponse": AssetStateProfileListResponse,
    "AssetStateProfileResponse": AssetStateProfileResponse,
    "AssetStateProfileUpdateRequest": AssetStateProfileUpdateRequest,
    "AssetTagCreateRequest": AssetTagCreateRequest,
    "AssetTagListItem": AssetTagListItem,
    "AssetTagListResponse": AssetTagListResponse,
    "AssetTagResponse": AssetTagResponse,
    "AssetTagTypeListResponse": AssetTagTypeListResponse,
    "AssetTagTypeResponse": AssetTagTypeResponse,
    "AssetTagUpdateRequest": AssetTagUpdateRequest,
    "AssetTemperatureParameter": AssetTemperatureParameter,
    "AssetTypeListResponse": AssetTypeListResponse,
    "AssetTypeResponse": AssetTypeResponse,
    "AssetUpdateRequest": AssetUpdateRequest,
    "AssetZoneTarget": AssetZoneTarget,
    "AuditEventChange": AuditEventChange,
    "AuditEventFeedResponse": AuditEventFeedResponse,
    "AuditEventKeyValue": AuditEventKeyValue,
    "AuditEventResponse": AuditEventResponse,
    "AuthEndpoint": AuthEndpoint,
    "AuthInfo": AuthInfo,
    "AuthRefreshTokenRequest": AuthRefreshTokenRequest,
    "AuthRequest": AuthRequest,
    "AuthResetPasswordRequest": AuthResetPasswordRequest,
    "AuthSetPasswordRequest": AuthSetPasswordRequest,
    "AuthUserResponse": AuthUserResponse,
    "BadRequestError": BadRequestError,
    "CalculatedMeasure": CalculatedMeasure,
    "CalculatedMeasureFormat": CalculatedMeasureFormat,
    "CalculatedMeasureSettings": CalculatedMeasureSettings,
    "CellProperties": CellProperties,
    "CellSet": CellSet,
    "CellSetAverage": CellSetAverage,
    "CellSetFilters": CellSetFilters,
    "CellSetResponse": CellSetResponse,
    "CellValue": CellValue,
    "ChartAxisMaxMin": ChartAxisMaxMin,
    "ChartLabel": ChartLabel,
    "ChartOptions": ChartOptions,
    "ChartSeriesItem": ChartSeriesItem,
    "ChartXAxis": ChartXAxis,
    "ChartXAxisLabels": ChartXAxisLabels,
    "ChartYAxis": ChartYAxis,
    "ClientCreateRequest": ClientCreateRequest,
    "ClientDetailsUpdateRequest": ClientDetailsUpdateRequest,
    "ClientListItem": ClientListItem,
    "ClientListResponse": ClientListResponse,
    "ClientMeasurementUnits": ClientMeasurementUnits,
    "ClientMeta": ClientMeta,
    "ClientResponse": ClientResponse,
    "ClientUpdateRequest": ClientUpdateRequest,
    "ColumnFormatting": ColumnFormatting,
    "CompanyAddress": CompanyAddress,
    "CompanyGroupCreateRequest": CompanyGroupCreateRequest,
    "CompanyGroupListResponse": CompanyGroupListResponse,
    "CompanyGroupResponse": CompanyGroupResponse,
    "CompanyGroupUpdateRequest": CompanyGroupUpdateRequest,
    "CompanyMessages": CompanyMessages,
    "CompanyResponse": CompanyResponse,
    "CompanySupportDetails": CompanySupportDetails,
    "CompletedReportDataRequest": CompletedReportDataRequest,
    "CompletedReportListResponse": CompletedReportListResponse,
    "CompletedReportRequest": CompletedReportRequest,
    "CompletedReportResponse": CompletedReportResponse,
    "CompletedReportUpdateRequest": CompletedReportUpdateRequest,
    "Contact": Contact,
    "CostCentreCreateRequest": CostCentreCreateRequest,
    "CostCentreListResponse": CostCentreListResponse,
    "CostCentreResponse": CostCentreResponse,
    "CostCentreUpdateRequest": CostCentreUpdateRequest,
    "CustomFieldDefinition": CustomFieldDefinition,
    "CustomFieldKeyValue": CustomFieldKeyValue,
    "DailyShift": DailyShift,
    "DashboardCreateRequest": DashboardCreateRequest,
    "DashboardListItem": DashboardListItem,
    "DashboardListResponse": DashboardListResponse,
    "DashboardResponse": DashboardResponse,
    "DashboardTemplateCreateRequest": DashboardTemplateCreateRequest,
    "DashboardTemplateListItem": DashboardTemplateListItem,
    "DashboardTemplateListResponse": DashboardTemplateListResponse,
    "DashboardTemplateResponse": DashboardTemplateResponse,
    "DashboardTemplateUpdateRequest": DashboardTemplateUpdateRequest,
    "DashboardUpdateRequest": DashboardUpdateRequest,
    "DashboardWidget": DashboardWidget,
    "DashboardWidgetDataSource": DashboardWidgetDataSource,
    "DashboardWidgetDataSourceOptions": DashboardWidgetDataSourceOptions,
    "DashboardWidgetPlacement": DashboardWidgetPlacement,
    "DeviceAccessory": DeviceAccessory,
    "DeviceAnalogConfig": DeviceAnalogConfig,
    "DeviceCANConfig": DeviceCANConfig,
    "DeviceCameraConfig": DeviceCameraConfig,
    "DeviceCounterConfig": DeviceCounterConfig,
    "DeviceCreateRequest": DeviceCreateRequest,
    "DeviceDigitalConfig": DeviceDigitalConfig,
    "DeviceIOParameters": DeviceIOParameters,
    "DeviceListItem": DeviceListItem,
    "DeviceListResponse": DeviceListResponse,
    "DeviceOutputConfig": DeviceOutputConfig,
    "DeviceParameters": DeviceParameters,
    "DeviceProviderCreateRequest": DeviceProviderCreateRequest,
    "DeviceProviderListItem": DeviceProviderListItem,
    "DeviceProviderListResponse": DeviceProviderListResponse,
    "DeviceProviderResponse": DeviceProviderResponse,
    "DeviceProviderTypeListItem": DeviceProviderTypeListItem,
    "DeviceProviderTypeListResponse": DeviceProviderTypeListResponse,
    "DeviceProviderTypeResponse": DeviceProviderTypeResponse,
    "DeviceProviderUpdateRequest": DeviceProviderUpdateRequest,
    "DeviceResponse": DeviceResponse,
    "DeviceTemperatureConfig": DeviceTemperatureConfig,
    "DeviceTypeAccessory": DeviceTypeAccessory,
    "DeviceTypeCreateRequest": DeviceTypeCreateRequest,
    "DeviceTypeFeature": DeviceTypeFeature,
    "DeviceTypeIOCapabilities": DeviceTypeIOCapabilities,
    "DeviceTypeListItem": DeviceTypeListItem,
    "DeviceTypeListResponse": DeviceTypeListResponse,
    "DeviceTypeResponse": DeviceTypeResponse,
    "DeviceTypeUpdateRequest": DeviceTypeUpdateRequest,
    "DeviceUpdateRequest": DeviceUpdateRequest,
    "DeviceValueConfig": DeviceValueConfig,
    "DimensionFilterItem": DimensionFilterItem,
    "DistributorCreateRequest": DistributorCreateRequest,
    "DistributorDetailsUpdateRequest": DistributorDetailsUpdateRequest,
    "DistributorListItem": DistributorListItem,
    "DistributorListResponse": DistributorListResponse,
    "DistributorResponse": DistributorResponse,
    "DistributorUpdateRequest": DistributorUpdateRequest,
    "DomainInfo": DomainInfo,
    "DomainThemeResponse": DomainThemeResponse,
    "EmailConfig": EmailConfig,
    "EmailProviderCreateRequest": EmailProviderCreateRequest,
    "EmailProviderListItem": EmailProviderListItem,
    "EmailProviderListResponse": EmailProviderListResponse,
    "EmailProviderResponse": EmailProviderResponse,
    "EmailProviderTypeListItem": EmailProviderTypeListItem,
    "EmailProviderTypeListResponse": EmailProviderTypeListResponse,
    "EmailProviderTypeResponse": EmailProviderTypeResponse,
    "EmailProviderUpdateRequest": EmailProviderUpdateRequest,
    "EmailServerConfiguration": EmailServerConfiguration,
    "EmailTemplateConfig": EmailTemplateConfig,
    "EntityInfo": EntityInfo,
    "EntitySearchResponse": EntitySearchResponse,
    "EntitySearchResult": EntitySearchResult,
    "EntitySoftLimit": EntitySoftLimit,
    "ErrorBase": ErrorBase,
    "EventActionFilter": EventActionFilter,
    "EventActorFilter": EventActorFilter,
    "EventComment": EventComment,
    "EventCommentRequest": EventCommentRequest,
    "EventFeedResponse": EventFeedResponse,
    "EventFilter": EventFilter,
    "EventFilterCondition": EventFilterCondition,
    "EventHandled": EventHandled,
    "EventListResponse": EventListResponse,
    "EventMedia": EventMedia,
    "EventResponse": EventResponse,
    "EventTargetFilter": EventTargetFilter,
    "ExportTaskCreateRequest": ExportTaskCreateRequest,
    "ExportTaskListItem": ExportTaskListItem,
    "ExportTaskListResponse": ExportTaskListResponse,
    "ExportTaskResponse": ExportTaskResponse,
    "ExportTaskUpdateRequest": ExportTaskUpdateRequest,
    "ForbiddenError": ForbiddenError,
    "ForwardGeocodeResponse": ForwardGeocodeResponse,
    "ForwardGeocodeResult": ForwardGeocodeResult,
    "GeoJson": GeoJson,
    "GeocoderAddress": GeocoderAddress,
    "GeocoderBounds": GeocoderBounds,
    "HealthIssueDates": HealthIssueDates,
    "HealthIssueListResponse": HealthIssueListResponse,
    "HealthIssueResolutionDetail": HealthIssueResolutionDetail,
    "HealthIssueResponse": HealthIssueResponse,
    "HealthIssueUpdateRequest": HealthIssueUpdateRequest,
    "HealthIssueUpdateRequestResolved": HealthIssueUpdateRequestResolved,
    "IdName": IdName,
    "IdNameState": IdNameState,
    "IdNameType": IdNameType,
    "IoTypeCreateRequest": IoTypeCreateRequest,
    "IoTypeListItem": IoTypeListItem,
    "IoTypeListResponse": IoTypeListResponse,
    "IoTypeRateConfig": IoTypeRateConfig,
    "IoTypeResponse": IoTypeResponse,
    "IoTypeTextConfig": IoTypeTextConfig,
    "IoTypeUpdateRequest": IoTypeUpdateRequest,
    "MapRoute": MapRoute,
    "MapRouteResponse": MapRouteResponse,
    "MapRouteSegment": MapRouteSegment,
    "MapSetLayer": MapSetLayer,
    "MapSetListItem": MapSetListItem,
    "MapSetListResponse": MapSetListResponse,
    "MapSetResponse": MapSetResponse,
    "MapsetCreateRequest": MapsetCreateRequest,
    "MapsetUpdateRequest": MapsetUpdateRequest,
    "MeasureDescription": MeasureDescription,
    "MediaInfoListResponse": MediaInfoListResponse,
    "MediaInfoResponse": MediaInfoResponse,
    "MediaVideoEventCreateRequest": MediaVideoEventCreateRequest,
    "MediaVideoEventUpdateRequest": MediaVideoEventUpdateRequest,
    "NotFoundError": NotFoundError,
    "NotificationActions": NotificationActions,
    "NotificationFeedResponse": NotificationFeedResponse,
    "NotificationResponse": NotificationResponse,
    "NotificationSettings": NotificationSettings,
    "OpenIdConnectIssuer": OpenIdConnectIssuer,
    "OverspeedBandItem": OverspeedBandItem,
    "OverspeedProfileCreateRequest": OverspeedProfileCreateRequest,
    "OverspeedProfileListItem": OverspeedProfileListItem,
    "OverspeedProfileListResponse": OverspeedProfileListResponse,
    "OverspeedProfileResponse": OverspeedProfileResponse,
    "OverspeedProfileUpdateRequest": OverspeedProfileUpdateRequest,
    "PieChartOptions": PieChartOptions,
    "PieChartSeriesItem": PieChartSeriesItem,
    "Policy": Policy,
    "PolicyStatement": PolicyStatement,
    "QueueReportRequest": QueueReportRequest,
    "QueuedReportListResponse": QueuedReportListResponse,
    "QueuedReportResponse": QueuedReportResponse,
    "RebuildDashboardWidgetResponse": RebuildDashboardWidgetResponse,
    "ReminderCreateRequest": ReminderCreateRequest,
    "ReminderListItem": ReminderListItem,
    "ReminderListResponse": ReminderListResponse,
    "ReminderReset": ReminderReset,
    "ReminderResetDaily": ReminderResetDaily,
    "ReminderResetMonthly": ReminderResetMonthly,
    "ReminderResetWeekly": ReminderResetWeekly,
    "ReminderResponse": ReminderResponse,
    "ReminderTriggerValue": ReminderTriggerValue,
    "ReminderUpdateRequest": ReminderUpdateRequest,
    "ReportConfig": ReportConfig,
    "ReportDefinitionColumnOptions": ReportDefinitionColumnOptions,
    "ReportDefinitionGroupingOptions": ReportDefinitionGroupingOptions,
    "ReportDefinitionLayoutOptions": ReportDefinitionLayoutOptions,
    "ReportDefinitionListResponse": ReportDefinitionListResponse,
    "ReportDefinitionResponse": ReportDefinitionResponse,
    "ReportDefinitionStyleLimits": ReportDefinitionStyleLimits,
    "ReportDefinitionStyleOptions": ReportDefinitionStyleOptions,
    "ReportOutputOptions": ReportOutputOptions,
    "ReportTemplateConfig": ReportTemplateConfig,
    "ReportTemplateCreateRequest": ReportTemplateCreateRequest,
    "ReportTemplateListResponse": ReportTemplateListResponse,
    "ReportTemplateResponse": ReportTemplateResponse,
    "ReportTemplateUpdateRequest": ReportTemplateUpdateRequest,
    "ReverseGeocode": ReverseGeocode,
    "ReverseGeocodeResponse": ReverseGeocodeResponse,
    "ReverseGeocodeResult": ReverseGeocodeResult,
    "Schedule": Schedule,
    "ScheduledReportCreateRequest": ScheduledReportCreateRequest,
    "ScheduledReportListItem": ScheduledReportListItem,
    "ScheduledReportListResponse": ScheduledReportListResponse,
    "ScheduledReportReport": ScheduledReportReport,
    "ScheduledReportResponse": ScheduledReportResponse,
    "ScheduledReportUpdateRequest": ScheduledReportUpdateRequest,
    "SelectedMeasureValues": SelectedMeasureValues,
    "SelectedUserTokenResponse": SelectedUserTokenResponse,
    "Shift": Shift,
    "ShiftConfig": ShiftConfig,
    "ShiftPattern": ShiftPattern,
    "SignOutRequest": SignOutRequest,
    "SimCardCreateRequest": SimCardCreateRequest,
    "SimCardListItem": SimCardListItem,
    "SimCardListResponse": SimCardListResponse,
    "SimCardResponse": SimCardResponse,
    "SimCardUpdateRequest": SimCardUpdateRequest,
    "SmsGatewayProviderCreateRequest": SmsGatewayProviderCreateRequest,
    "SmsGatewayProviderListItem": SmsGatewayProviderListItem,
    "SmsGatewayProviderListResponse": SmsGatewayProviderListResponse,
    "SmsGatewayProviderResponse": SmsGatewayProviderResponse,
    "SmsGatewayProviderTypeListItem": SmsGatewayProviderTypeListItem,
    "SmsGatewayProviderTypeListResponse": SmsGatewayProviderTypeListResponse,
    "SmsGatewayProviderTypeResponse": SmsGatewayProviderTypeResponse,
    "SmsGatewayProviderUpdateRequest": SmsGatewayProviderUpdateRequest,
    "SoftLimits": SoftLimits,
    "SpeedLimits": SpeedLimits,
    "StatChartOptions": StatChartOptions,
    "StatsEntityOutputOptions": StatsEntityOutputOptions,
    "SuccessResponse": SuccessResponse,
    "TargetLine": TargetLine,
    "TaskCreateRequest": TaskCreateRequest,
    "TaskDates": TaskDates,
    "TaskListResponse": TaskListResponse,
    "TaskOptions": TaskOptions,
    "TaskResponse": TaskResponse,
    "TelemetryFeedResponse": TelemetryFeedResponse,
    "TelemetryIOValue": TelemetryIOValue,
    "TelemetryListResponse": TelemetryListResponse,
    "TelemetryLocation": TelemetryLocation,
    "TelemetryResponse": TelemetryResponse,
    "TelemetryState": TelemetryState,
    "TelemetryStateResponse": TelemetryStateResponse,
    "TelemetryTrip": TelemetryTrip,
    "TestNotificationsRequest": TestNotificationsRequest,
    "ThemeCreateRequest": ThemeCreateRequest,
    "ThemeInfo": ThemeInfo,
    "ThemeListItem": ThemeListItem,
    "ThemeListResponse": ThemeListResponse,
    "ThemeResponse": ThemeResponse,
    "ThemeUpdateRequest": ThemeUpdateRequest,
    "TimeRange": TimeRange,
    "TokenResponse": TokenResponse,
    "TooManyRequestsError": TooManyRequestsError,
    "TripFeedResponse": TripFeedResponse,
    "TripListResponse": TripListResponse,
    "TripLocation": TripLocation,
    "TripRating": TripRating,
    "TripRatingPenalty": TripRatingPenalty,
    "TripResponse": TripResponse,
    "TripStats": TripStats,
    "UnauthorizedError": UnauthorizedError,
    "UnexpectedError": UnexpectedError,
    "UpdateUserPasswordRequest": UpdateUserPasswordRequest,
    "UserApiKeyCreateRequest": UserApiKeyCreateRequest,
    "UserApiKeyCreateResponse": UserApiKeyCreateResponse,
    "UserClientPermissions": UserClientPermissions,
    "UserCreateRequest": UserCreateRequest,
    "UserCreateResponse": UserCreateResponse,
    "UserListItem": UserListItem,
    "UserListResponse": UserListResponse,
    "UserPermissions": UserPermissions,
    "UserProfileResponse": UserProfileResponse,
    "UserResetRequest": UserResetRequest,
    "UserResetResponse": UserResetResponse,
    "UserResponse": UserResponse,
    "UserRoleCreateRequest": UserRoleCreateRequest,
    "UserRoleListItem": UserRoleListItem,
    "UserRoleListResponse": UserRoleListResponse,
    "UserRoleResponse": UserRoleResponse,
    "UserRoleUpdateRequest": UserRoleUpdateRequest,
    "UserSession": UserSession,
    "UserSessionResponse": UserSessionResponse,
    "UserUpdateRequest": UserUpdateRequest,
    "VendorCreateRequest": VendorCreateRequest,
    "VendorDetailsUpdateRequest": VendorDetailsUpdateRequest,
    "VendorListItem": VendorListItem,
    "VendorListResponse": VendorListResponse,
    "VendorResponse": VendorResponse,
    "VendorUpdateRequest": VendorUpdateRequest,
    "WidgetExtraData": WidgetExtraData,
    "WidgetOptions": WidgetOptions,
    "ZoneBounds": ZoneBounds,
    "ZoneCenter": ZoneCenter,
    "ZoneCreateRequest": ZoneCreateRequest,
    "ZoneGroupCreateRequest": ZoneGroupCreateRequest,
    "ZoneGroupListItem": ZoneGroupListItem,
    "ZoneGroupListResponse": ZoneGroupListResponse,
    "ZoneGroupResponse": ZoneGroupResponse,
    "ZoneGroupUpdateRequest": ZoneGroupUpdateRequest,
    "ZoneListItem": ZoneListItem,
    "ZoneListResponse": ZoneListResponse,
    "ZonePoint": ZonePoint,
    "ZoneResponse": ZoneResponse,
    "ZoneUpdateRequest": ZoneUpdateRequest,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
