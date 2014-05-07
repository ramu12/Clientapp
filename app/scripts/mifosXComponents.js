define(['underscore', 'mifosX'], function() {
  var components = {
    models: [
      'LoggedInUser',
      'roleMap',
      'Langs',
      'paypalUser'
    ],
    services: [
      'ResourceFactoryProvider',
      'HttpServiceProvider',
      'AuthenticationService',
      'SessionManager',
      'Paginator',
      'HTValidationServiceProvider',
      'PermissionService'
    ],
    controllers: [
      'main/MainController',
      'main/LoginFormController',
      'main/TaskController',
      'main/SearchController',
      'main/NavigationController',
      'main/ProfileController',
      'main/MessangerController',
      'prospects/ProspectsController',
      'prospects/ViewProspectsController',
      'prospects/CreateProspectsController',
      'prospects/CancelProspectsController',
      'prospects/EditProspectsController',
      'prospects/FollowProspectsController',
      'client/ClientController',
      'client/CreateOrderController',
      'client/OrderController',
      'client/OrderDisconnectController',
      'client/OrderRenewalController',
      'client/AdjustmentClientController',
      'client/PaymentsClientController',
      'client/ClientInvoiceController',
      'client/StatementController',
      'client/EditClientController',
      'client/ViewClientController',
      'client/CreateClientController',
      'client/ViewFinancialTranController',
      'client/ClientDocumentController',
      'client/ClientIdentifierController',
      'client/ClientOneTimeSaleController',
      'client/ViewClientOneTimeSaleController',
      'client/AllocateHardwareOneTimeSaleController',
      'client/UploadClientIdentifierDocumentController',
      'client/CreateClientControllerwizard',
      'client/CreateProvisioningController',
      'client/CreateActivationController',
      'client/EditProvisioningController',
      'user/UserController',
      'user/UserFormController',
      'user/UserSettingController',
      'user/UserListController',
      'user/ViewUserController',
      'organization/RoleController',
      'organization/ViewRoleController',
      'organization/CreateRoleController',
      'organization/EditPermissionsController',
      'organization/MakerCheckerController',
      'organization/OfficesController',
      'organization/ViewOfficeController',
      'organization/CreateOfficeController',
      'organization/EditOfficeController',
      'organization/CurrencyConfigController',
      'organization/CreateUserController',
      'organization/EditUserController',
      'organization/ViewEmployeeController',
      'organization/EditEmployeeController',
      'organization/EmployeeController',
      'organization/CreateEmployeeController',
      'organization/GroupsDetailsController',
      'accounting/AccFreqPostingController',
      'accounting/AccCoaController',
      'accounting/AccCreateGLAccountContoller',
      'accounting/AccViewGLAccountContoller',
      'accounting/AccEditGLAccountController',
      'accounting/ViewTransactionController',
      'accounting/JournalEntryController',
      'accounting/SearchTransactionController',
      'accounting/AccountingClosureController',
      'accounting/ViewAccountingClosureController',
      'accounting/AccountingRuleController',
      'accounting/AccCreateRuleController',
      'accounting/AccEditRuleController',
      'accounting/ViewAccRuleController',
      'system/CodeController',
      'system/MappingController',
      'system/EditCodeController',
      'system/ViewCodeController',
      'system/AddCodeController',
      'system/ViewDataTableController',
      'system/DataTableController',
      'system/ReportsController',
      'system/ViewReportController',
      'system/CreateReportController',
      'system/EditReportController',
      'system/CreateDataTableController',
      'system/EditDataTableController',
      'system/MakeDataTableEntryController',
      'system/DataTableEntryController',
      'system/SchedulerJobsController',
      'system/EditJobParameters',
      'system/ViewSchedulerJobController',
      'system/EditSchedulerJobController',
      'system/ViewSchedulerJobHistoryController',
      'organization/HolController',
      'organization/ViewHolController',
      'organization/AddHolController',
      'reports/ViewReportsController',
      'reports/RunReportsController',
      'private/SuperuserController',
      'configurations/GlobalConfigurationController',
      'system/AuditController',
      'system/ViewAuditController',
      'organization/PlanController',
      'organization/CreatePlanController',
      'organization/ViewPlanController',
      'organization/EditPlanController',
      'organization/PriceController',
      'organization/CreatePriceController',
      'organization/ViewPriceController',
      'organization/EditPriceController',
      'organization/MediaController',
      'organization/CreateMediaController',
      'organization/ViewMediaController',
      'organization/EditMediaController',
      'organization/ContractController',
      'organization/CreateContractController',
      'organization/ViewContractController',
      'organization/EditContractController',
      'organization/VoucherpinController',
      'organization/CreateVoucherPinController',
      'organization/DiscountsController',
      'organization/CreateDiscountsController',
      'organization/ViewDiscountsController',
      'organization/EditDiscountsController',
      'organization/CurrencyDetailsController',
      'organization/CreateCurrencyDetailsController',
      'organization/ViewCurrencyDetailsController',
      'organization/EditCurrencyDetailsController',
      'inventory/InventoryController',
      'import/ImportController',
      'import/AddImportFileController',
      'import/ViewImportController',
      'organization/ServicesController',
      'organization/CreateServiceController',
      'organization/ViewServiceController',
      'organization/EditServiceController',
      'tickets/AssignedTicketController',
      'organization/MessageController',
      'organization/CreateMessageController',
      'organization/ViewMessageController',
      'organization/EditMessageController',
      'organization/EventController',
      'organization/CreateEventController',
      'organization/ViewEventController',
      'organization/CreatePriceController',
      'organization/ViewPriceController',
      'organization/ViewEventPriceController',
      'organization/RegionController',
      'organization/CreateRegionController',
      'organization/ViewRegionController',
      'organization/editRegionController',
      'organization/ChargeCodeController',
      'organization/CreateChargeCodeController',
      'organization/ViewChargeCodeController',
      'organization/EditChargeCodeController',
      'organization/TaxMappingController',
      'organization/CreateTaxMappingController',
      'organization/ViewTaxMappingController',
      'organization/EditTaxMappingController',
      'client/CreateTicketController',
      'client/TicketController',
      'client/ViewTicketController',
      'inventory/AddGRNController',
      'inventory/ViewGrnController',
      'inventory/ViewItemController',
      'inventory/EditItemController',
      'inventory/CreateItemController',
      'inventory/CreateItemDetailsController',
      'inventory/CreateMrnController',
      'inventory/CreateSupplierController',
      'client/AddOwnHardwareController',
      'client/ViewOwnHardwareController',
      'client/EditOwnHardwareController',
      'inventory/CreateMrnController',
      'inventory/ViewMrnController',
      'inventory/MoveMrnController',
      'inventory/ViewMovedMrnController',
      'inventory/ViewItemDetailController',
      'organization/EventController',
      'organization/CreateEventController',
      'organization/ViewEventController',
      'organization/EditEventController',  
      'organization/CreateEventPriceController',
      'organization/ViewEventPricesController',
      'organization/ViewEventPriceController',
      'organization/EditEventPriceController',
      'client/CreateTicketController',
      'client/TicketController',
      'client/ViewTicketController',
      'client/EditTicketController',
      'client/CloseTicketController',
      'client/EditAddressController',
      'client/ViewStatementController',
      'client/OSDMessageController',
      'system/CreateHardwarePlanMappingController',
      'system/ViewHardwarePlanMappingController',
      'system/EditHardwarePlanMappingController',
      'system/CreateServiceMappingController',
      'system/ViewServiceMappingController',
      'system/EditServiceMappingController',
      'client/AssociationController',
      'client/ViewAssociationController',
      'client/EditAssociationController',
      'eventorder/EventOrderController',
      'client/HardwareSwapController',
      'system/CreateProvisioningMappingController',
      'system/EditProvisioningMappingController',
      'paymentgateway/PaymentGatewayController',
      'system/CreateEventActionMappingController',
      'system/ViewEventActionMappingController',
      'system/EditEventActionMappingController',
      'paymentgateway/EditPaymentGatewayController',
      'organization/CreatePromotionController',
      'organization/ViewPromotioncodeController',
      'organization/EditPromotioncodeController',
      'system/SmartSearchController',
      'organization/AddressManageController',
      'organization/AddressTreeviewController',
      'client/PayInvoiceController',
      'client/CreditDistributionController',
      'system/IpPoolingController',
      'system/CreateIpPoolingController',
      'inventory/ItemSaleController',

    ],
    filters: [
      'StatusLookup',
      'YesOrNo',
      'DateFormat',
      'ConfigLookup'
    ],
    directives: [
      'DataTablesDirective',
      'OverlayDirective',
      'DialogDirective',
      'PanelDirective',
      'BigPanelDirective',
      'OnBlurDirective',
      'LateValidateDirective',
      'TreeviewDirective',
      'CkEditorDirective',
      'FormSubmitValidateDirective',
      'FormValidationsDirective',
      'ScrollbarTopDirective',
      'ApiValidationDirective',
      'RightClickDirective',
      'ContextMenuDirective',
      'AutofocusDirective',
      'ChosenComboboxDirective'
    ]
  };

  require(_.reduce(_.keys(components), function(list, group) {
    return list.concat(_.map(components[group], function(name) { return group + "/" + name; }));
  }, [
    'routes',
    'initialTasks',
    'webstorage-configuration'
  ]));
});
