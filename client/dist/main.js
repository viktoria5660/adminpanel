(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./companies/companies.module": [
		"./src/app/companies/companies.module.ts",
		"companies-companies-module~dashboard-dashboard-module~pages-pages-module~questions-questions-module~~96517cb9",
		"companies-companies-module~dashboard-dashboard-module~questions-questions-module~users-users-module",
		"companies-companies-module"
	],
	"./dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"companies-companies-module~dashboard-dashboard-module~pages-pages-module~questions-questions-module~~96517cb9",
		"companies-companies-module~dashboard-dashboard-module~questions-questions-module~users-users-module",
		"dashboard-dashboard-module"
	],
	"./pages/pages.module": [
		"./src/app/pages/pages.module.ts",
		"companies-companies-module~dashboard-dashboard-module~pages-pages-module~questions-questions-module~~96517cb9",
		"pages-pages-module"
	],
	"./questions/questions.module": [
		"./src/app/questions/questions.module.ts",
		"companies-companies-module~dashboard-dashboard-module~pages-pages-module~questions-questions-module~~96517cb9",
		"companies-companies-module~dashboard-dashboard-module~questions-questions-module~users-users-module",
		"questions-questions-module"
	],
	"./session/session.module": [
		"./src/app/session/session.module.ts",
		"session-session-module"
	],
	"./users/users.module": [
		"./src/app/users/users.module.ts",
		"companies-companies-module~dashboard-dashboard-module~pages-pages-module~questions-questions-module~~96517cb9",
		"companies-companies-module~dashboard-dashboard-module~questions-questions-module~users-users-module",
		"users-users-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/_services/api.service.ts":
/*!******************************************!*\
  !*** ./src/app/_services/api.service.ts ***!
  \******************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.handleError = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    };
    ApiService.prototype.getAllCompanies = function () {
        return this.http.get(API_URL + '/settings/getAllCompanies')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["publishLast"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["refCount"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ApiService.prototype.updateCompany = function (settings) {
        return this.http.put(API_URL + '/settings/updateCompany', settings)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["publishLast"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["refCount"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ApiService.prototype.addCompany = function (company) {
        return this.http.post(API_URL + '/settings/createNewFullSettings', company)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["publishLast"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["refCount"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ApiService.prototype.deleteCompany = function (companyName) {
        return this.http.post(API_URL + '/settings/deleteFullSettings', { companyName: companyName })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["publishLast"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["refCount"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ApiService.prototype.getUsers = function () {
        return this.http.get(API_URL + '/users')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["publishLast"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["refCount"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ApiService.prototype.addUser = function (user) {
        return this.http.post(API_URL + '/users/createNewUser', user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["publishLast"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["refCount"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ApiService.prototype.updateUser = function (user) {
        return this.http.put(API_URL + '/users/updateUserFromAdmin', user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["publishLast"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["refCount"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ApiService.prototype.deleteUser = function (user) {
        return this.http.post(API_URL + '/users/deleteUser', user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["publishLast"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["refCount"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ApiService.prototype.getQuestionsByCompany = function (companyName) {
        return this.http.get(API_URL + '/question/getQuestionsByCompany/' + companyName)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["publishLast"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["refCount"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ApiService.prototype.getAllQuestions = function () {
        return this.http.get(API_URL + '/question/get/getAllQuestions/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["publishLast"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["refCount"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ApiService.prototype.deleteQuestion = function (question) {
        return this.http.post(API_URL + '/question/deleteQ', question)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["publishLast"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["refCount"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ApiService.prototype.addQuestion = function (question) {
        return this.http.post(API_URL + '/question/enterQ', question)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["publishLast"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["refCount"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ApiService.prototype.editQuestion = function (question) {
        console.log("INSIDEAPI QUESTION UPDATE");
        return this.http.put(API_URL + '/question/updateQ', question)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["publishLast"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["refCount"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(translate) {
        translate.addLangs(['en', 'fr']);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-loading-bar/router */ "./node_modules/@ngx-loading-bar/router/esm5/ngx-loading-bar-router.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core */ "./src/app/core/index.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelSpeed: 2,
    wheelPropagation: true,
    minScrollbarLength: 20
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"],
                _core__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                _core__WEBPACK_IMPORTED_MODULE_14__["SidebarComponent"],
                _core__WEBPACK_IMPORTED_MODULE_14__["NotificationComponent"],
                _core__WEBPACK_IMPORTED_MODULE_14__["OptionsComponent"],
                _core__WEBPACK_IMPORTED_MODULE_14__["MenuComponent"],
                _core__WEBPACK_IMPORTED_MODULE_14__["AdminLayoutComponent"],
                _core__WEBPACK_IMPORTED_MODULE_14__["AuthLayoutComponent"],
                _core__WEBPACK_IMPORTED_MODULE_14__["AccordionAnchorDirective"],
                _core__WEBPACK_IMPORTED_MODULE_14__["AccordionLinkDirective"],
                _core__WEBPACK_IMPORTED_MODULE_14__["AccordionDirective"],
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_15__["AppRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                        useFactory: (createTranslateLoader),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
                    }
                }),
                _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_8__["LoadingBarRouterModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"],
                _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["BidiModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_10__["AgmCoreModule"].forRoot({ apiKey: 'YOURAPIKEY' }),
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"],
            ],
            providers: [
                _services_api_service__WEBPACK_IMPORTED_MODULE_17__["ApiService"],
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/app/core/index.ts");

var AppRoutes = [
    {
        path: '',
        component: _core__WEBPACK_IMPORTED_MODULE_0__["AdminLayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'companies',
                loadChildren: './companies/companies.module#CompaniesModule'
            },
            {
                path: 'users',
                loadChildren: './users/users.module#UsersModule'
            },
            {
                path: 'questions',
                loadChildren: './questions/questions.module#QuestionsModule'
            },
            {
                path: 'pages',
                loadChildren: './pages/pages.module#PagesModule'
            }
        ]
    },
    {
        path: '',
        component: _core__WEBPACK_IMPORTED_MODULE_0__["AuthLayoutComponent"],
        children: [
            {
                path: 'session',
                loadChildren: './session/session.module#SessionModule'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'session/404'
    }
];


/***/ }),

/***/ "./src/app/companies/companies.service.ts":
/*!************************************************!*\
  !*** ./src/app/companies/companies.service.ts ***!
  \************************************************/
/*! exports provided: CompaniesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesService", function() { return CompaniesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompaniesService = /** @class */ (function () {
    function CompaniesService(apiService) {
        this.apiService = apiService;
        this.companiesSubject = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.companies$ = this.companiesSubject.asObservable();
        // from api once to load all companies.
        this.loadCompanies();
    }
    CompaniesService.prototype.updateCompanies = function (newCompanies) {
        this.companiesSubject.next(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](newCompanies));
    };
    CompaniesService.prototype.getCompaniesValue = function () {
        return lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](this.companiesSubject.getValue());
    };
    CompaniesService.prototype.loadCompanies = function () {
        var _this = this;
        this.apiService.getAllCompanies().subscribe(function (companies) {
            _this.updateCompanies(companies);
        }, function (error) {
        });
    };
    CompaniesService.prototype.addCompany = function (newCompany) {
        var companies = this.getCompaniesValue();
        companies.push(newCompany);
        this.updateCompanies(companies);
        var obs = this.apiService.addCompany(newCompany);
        obs.subscribe(function (res) {
            console.log('New Company Added!');
        }, function (error) {
            // handle error!!
        });
        return obs;
    };
    CompaniesService.prototype.updateCompany = function (updateCompany) {
        var companies = this.getCompaniesValue();
        var index = companies.findIndex(function (company) { return company.companyName === updateCompany.companyName; });
        if (index > -1) {
            companies[index] = updateCompany;
            this.updateCompanies(companies);
        }
        return this.apiService.updateCompany(updateCompany);
    };
    CompaniesService.prototype.deleteCompany = function (companyName) {
        var companies = this.getCompaniesValue();
        var index = companies.findIndex(function (company) { return company.companyName === companyName; });
        if (index > -1) {
            companies.splice(index, 1);
            this.updateCompanies(companies);
        }
        return this.apiService.deleteCompany(companyName);
    };
    CompaniesService.prototype.getAllCompanies = function () {
        return this.apiService.getAllCompanies();
    };
    CompaniesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], CompaniesService);
    return CompaniesService;
}());



/***/ }),

/***/ "./src/app/core/admin-layout/admin-layout.component.html":
/*!***************************************************************!*\
  !*** ./src/app/core/admin-layout/admin-layout.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app mat-typography\" [dir]=\"options.dir\" [ngClass]=\"{'app-dark': options.dark, 'boxed': options.boxed, 'collapsed-sidebar': options.collapsed, 'compact-sidebar': options.compact, 'side-panel-opened': sidePanelOpened, 'side-panel-closed': !sidePanelOpened }\">\r\n  <ngx-loading-bar color=\"#009688\"></ngx-loading-bar>\r\n  <app-header (toggleSidenav)=\"sidemenu.toggle()\" (toggleNotificationSidenav)=\"notifications.toggle()\"></app-header>\r\n\r\n  <mat-sidenav-container class=\"app-inner\">\r\n    <mat-sidenav #sidemenu class=\"sidebar-panel\" id=\"sidebar-panel\" [mode]=\"isOver() ? 'over' : 'side'\" [opened]=\"!isOver()\" (openedStart)=\"sidePanelOpened = true\"\r\n    (closedStart)=\"sidePanelOpened = false\" (mouseover)=\"menuMouseOver()\" (mouseout)=\"menuMouseOut()\" [perfectScrollbar]=\"config\" [disabled]=\"mediaMatcher.matches\">\r\n      <app-sidebar (click)=\"updatePS()\"></app-sidebar>\r\n    </mat-sidenav>\r\n    <mat-sidenav #notifications position=\"end\" class=\"chat-panel\" mode=\"over\" opened=\"false\">\r\n      <app-notification></app-notification>\r\n    </mat-sidenav>\r\n    <div [perfectScrollbar]=\"config\" [disabled]=\"mediaMatcher.matches\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </mat-sidenav-container>\r\n\r\n  <!-- Demo Purposes Only -->\r\n  <app-options (messageEvent)=\"receiveOptions($event)\"></app-options>\r\n  <!-- /Demo Purposes Only -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/core/admin-layout/admin-layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/admin-layout/admin-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SMALL_WIDTH_BREAKPOINT = 960;
var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(_element, router, zone) {
        var _this = this;
        this._element = _element;
        this.router = router;
        this.mediaMatcher = matchMedia("(max-width: " + SMALL_WIDTH_BREAKPOINT + "px)");
        this.options = {
            collapsed: false,
            compact: false,
            boxed: false,
            dark: false,
            dir: 'ltr'
        };
        this.config = {};
        this.mediaMatcher.addListener(function (mql) { return zone.run(function () {
            _this.mediaMatcher = mql;
        }); });
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.url = this.router.url;
        this._router = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; })).subscribe(function (event) {
            document.querySelector('.app-inner > .mat-drawer-content > div').scrollTop = 0;
            _this.url = event.url;
            _this.runOnRouteChange();
        });
    };
    AdminLayoutComponent.prototype.ngOnDestroy = function () {
        this._router.unsubscribe();
    };
    AdminLayoutComponent.prototype.runOnRouteChange = function () {
        if (this.isOver()) {
            this.sidemenu.close();
        }
        this.updatePS();
    };
    AdminLayoutComponent.prototype.receiveOptions = function ($event) {
        this.options = $event;
    };
    AdminLayoutComponent.prototype.isOver = function () {
        if (this.url === '/apps/messages' ||
            this.url === '/apps/calendar' ||
            this.url === '/apps/media' ||
            this.url === '/maps/leaflet' ||
            this.url === '/taskboard') {
            return true;
        }
        else {
            return this.mediaMatcher.matches;
        }
    };
    AdminLayoutComponent.prototype.menuMouseOver = function () {
        if (this.mediaMatcher.matches && this.options.collapsed) {
            this.sidemenu.mode = 'over';
        }
    };
    AdminLayoutComponent.prototype.menuMouseOut = function () {
        if (this.mediaMatcher.matches && this.options.collapsed) {
            this.sidemenu.mode = 'side';
        }
    };
    AdminLayoutComponent.prototype.updatePS = function () {
        var _this = this;
        if (!this.mediaMatcher.matches && !this.options.compact) {
            setTimeout(function () {
                _this.directiveScroll.update();
            }, 350);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidemenu'),
        __metadata("design:type", Object)
    ], AdminLayoutComponent.prototype, "sidemenu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarDirective"]),
        __metadata("design:type", ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarDirective"])
    ], AdminLayoutComponent.prototype, "directiveScroll", void 0);
    AdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./admin-layout.component.html */ "./src/app/core/admin-layout/admin-layout.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/core/auth-layout/auth-layout.component.html":
/*!*************************************************************!*\
  !*** ./src/app/core/auth-layout/auth-layout.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n  <router-outlet></router-outlet>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/core/auth-layout/auth-layout.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/auth-layout/auth-layout.component.ts ***!
  \***********************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            styles: [':host .mat-drawer-content {padding: 0;} .mat-drawer-container {z-index: 1000}'],
            template: __webpack_require__(/*! ./auth-layout.component.html */ "./src/app/core/auth-layout/auth-layout.component.html")
        })
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "./src/app/core/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"main-header\" color=\"primary\">\r\n  <button (click)=\"toggleSidenav.emit()\" mat-icon-button>\r\n    <mat-icon>menu</mat-icon>\r\n  </button>\r\n  <div class=\"branding\">\r\n    <div class=\"logo\"></div>\r\n  </div>\r\n  <div class=\"search-bar\" fxFlex>\r\n    <form class=\"search-form\" [ngStyle.xs]=\"{display: 'none'}\">\r\n      <mat-icon>search</mat-icon>\r\n      <input type=\"text\" placeholder=\"Search\" autofocus=\"true\" />\r\n    </form>\r\n  </div>\r\n  <button (click)=\"fullScreenToggle()\" mat-icon-button>\r\n    <mat-icon>fullscreen</mat-icon>\r\n  </button>\r\n  <button (click)=\"toggleNotificationSidenav.emit()\" mat-icon-button class=\"ml-xs overflow-visible\">\r\n    <mat-icon>notifications</mat-icon>\r\n    <span class=\"notification-label\">5</span>\r\n  </button>\r\n  <button [matMenuTriggerFor]=\"user\" mat-icon-button class=\"ml-xs\">\r\n    <mat-icon>person</mat-icon>\r\n  </button>\r\n  <mat-menu #user=\"matMenu\" x-position=\"before\">\r\n    <button mat-menu-item>\r\n      <mat-icon>settings</mat-icon>\r\n      Settings\r\n    </button>\r\n    <button mat-menu-item>\r\n      <mat-icon>account_box</mat-icon>\r\n      Profile\r\n    </button>\r\n    <button mat-menu-item>\r\n      <mat-icon>notifications_off</mat-icon>\r\n      Disable notifications\r\n    </button>\r\n    <button mat-menu-item>\r\n      <mat-icon>exit_to_app</mat-icon>\r\n      Sign Out\r\n    </button>\r\n  </mat-menu>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.toggleSidenav = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.toggleNotificationSidenav = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    HeaderComponent.prototype.fullScreenToggle = function () {
        if (screenfull__WEBPACK_IMPORTED_MODULE_1__["enabled"]) {
            screenfull__WEBPACK_IMPORTED_MODULE_1__["toggle"]();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "toggleSidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "toggleNotificationSidenav", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/core/header/header.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: AdminLayoutComponent, AuthLayoutComponent, HeaderComponent, SidebarComponent, NotificationComponent, MenuComponent, OptionsComponent, AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-layout/admin-layout.component */ "./src/app/core/admin-layout/admin-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return _admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__["AdminLayoutComponent"]; });

/* harmony import */ var _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-layout/auth-layout.component */ "./src/app/core/auth-layout/auth-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__["AuthLayoutComponent"]; });

/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]; });

/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/core/sidebar/sidebar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]; });

/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/core/notification/notification.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return _notification_notification_component__WEBPACK_IMPORTED_MODULE_4__["NotificationComponent"]; });

/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/core/menu/menu.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"]; });

/* harmony import */ var _menu_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-accordion */ "./src/app/core/menu-accordion/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function() { return _menu_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionAnchorDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function() { return _menu_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionLinkDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionDirective", function() { return _menu_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionDirective"]; });

/* harmony import */ var _options_options_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./options/options.component */ "./src/app/core/options/options.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OptionsComponent", function() { return _options_options_component__WEBPACK_IMPORTED_MODULE_7__["OptionsComponent"]; });











/***/ }),

/***/ "./src/app/core/menu-accordion/accordion.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/core/menu-accordion/accordion.directive.ts ***!
  \************************************************************/
/*! exports provided: AccordionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionDirective", function() { return AccordionDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccordionDirective = /** @class */ (function () {
    function AccordionDirective(router) {
        var _this = this;
        this.router = router;
        this.navlinks = [];
        setTimeout(function () { return _this.checkOpenLinks(); });
    }
    AccordionDirective.prototype.closeOtherLinks = function (openLink) {
        this.navlinks.forEach(function (link) {
            if (link !== openLink) {
                link.open = false;
            }
        });
    };
    AccordionDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    AccordionDirective.prototype.removeGroup = function (link) {
        var index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    };
    AccordionDirective.prototype.checkOpenLinks = function () {
        var _this = this;
        this.navlinks.forEach(function (link) {
            if (link.group) {
                var routeUrl = _this.router.url;
                var currentUrl = routeUrl.split('/');
                if (currentUrl.indexOf(link.group) > 0) {
                    link.open = true;
                    _this.closeOtherLinks(link);
                }
            }
        });
    };
    AccordionDirective.prototype.ngAfterContentChecked = function () {
        var _this = this;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; })).subscribe(function (e) { return _this.checkOpenLinks(); });
    };
    AccordionDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appAccordion]',
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AccordionDirective);
    return AccordionDirective;
}());



/***/ }),

/***/ "./src/app/core/menu-accordion/accordionanchor.directive.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/menu-accordion/accordionanchor.directive.ts ***!
  \******************************************************************/
/*! exports provided: AccordionAnchorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function() { return AccordionAnchorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordionlink.directive */ "./src/app/core/menu-accordion/accordionlink.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AccordionAnchorDirective = /** @class */ (function () {
    function AccordionAnchorDirective(navlink) {
        this.navlink = navlink;
    }
    AccordionAnchorDirective.prototype.onClick = function (e) {
        this.navlink.toggle();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AccordionAnchorDirective.prototype, "onClick", null);
    AccordionAnchorDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appAccordionToggle]'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"])),
        __metadata("design:paramtypes", [_accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"]])
    ], AccordionAnchorDirective);
    return AccordionAnchorDirective;
}());



/***/ }),

/***/ "./src/app/core/menu-accordion/accordionlink.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/menu-accordion/accordionlink.directive.ts ***!
  \****************************************************************/
/*! exports provided: AccordionLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function() { return AccordionLinkDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion.directive */ "./src/app/core/menu-accordion/accordion.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AccordionLinkDirective = /** @class */ (function () {
    function AccordionLinkDirective(nav) {
        this.nav = nav;
    }
    Object.defineProperty(AccordionLinkDirective.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            this._open = value;
            if (value) {
                this.nav.closeOtherLinks(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    AccordionLinkDirective.prototype.ngOnInit = function () {
        this.nav.addLink(this);
    };
    AccordionLinkDirective.prototype.ngOnDestroy = function () {
        this.nav.removeGroup(this);
    };
    AccordionLinkDirective.prototype.toggle = function () {
        this.open = !this.open;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AccordionLinkDirective.prototype, "group", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.open'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AccordionLinkDirective.prototype, "open", null);
    AccordionLinkDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appAccordionLink]'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_accordion_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionDirective"])),
        __metadata("design:paramtypes", [_accordion_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionDirective"]])
    ], AccordionLinkDirective);
    return AccordionLinkDirective;
}());



/***/ }),

/***/ "./src/app/core/menu-accordion/index.ts":
/*!**********************************************!*\
  !*** ./src/app/core/menu-accordion/index.ts ***!
  \**********************************************/
/*! exports provided: AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordionanchor.directive */ "./src/app/core/menu-accordion/accordionanchor.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function() { return _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__["AccordionAnchorDirective"]; });

/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordionlink.directive */ "./src/app/core/menu-accordion/accordionlink.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function() { return _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"]; });

/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion.directive */ "./src/app/core/menu-accordion/accordion.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionDirective", function() { return _accordion_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"]; });






/***/ }),

/***/ "./src/app/core/menu/menu.component.html":
/*!***********************************************!*\
  !*** ./src/app/core/menu/menu.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list appAccordion class=\"navigation\">\r\n    <mat-list-item appAccordionLink *ngFor=\"let menuitem of menuService.getAll()\" group=\"{{menuitem.state}}\">\r\n      <a appAccordionToggle class=\"relative\" [routerLink]=\"['/', menuitem.state]\" *ngIf=\"menuitem.type === 'link'\">\r\n        <mat-icon>{{ menuitem.icon }}</mat-icon>\r\n        <span>{{ menuitem.name | translate }}</span>\r\n        <span fxFlex></span>\r\n        <span class=\"menu-badge mat-{{ badge.type }}\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span>\r\n      </a>\r\n      <a appAccordionToggle class=\"relative\" href=\"{{menuitem.state}}\" *ngIf=\"menuitem.type === 'extLink'\">\r\n        <mat-icon>{{ menuitem.icon }}</mat-icon>\r\n        <span>{{ menuitem.name | translate }}</span>\r\n        <span fxFlex></span>\r\n        <span class=\"menu-badge mat-{{ badge.type }}\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span>\r\n      </a>\r\n      <a appAccordionToggle class=\"relative\" href=\"{{menuitem.state}}\" target=\"_blank\" *ngIf=\"menuitem.type === 'extTabLink'\">\r\n        <mat-icon>{{ menuitem.icon }}</mat-icon>\r\n        <span>{{ menuitem.name | translate }}</span>\r\n        <span fxFlex></span>\r\n        <span class=\"menu-badge mat-{{ badge.type }}\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span>\r\n      </a>\r\n      <a appAccordionToggle class=\"relative\" href=\"javascript:;\" *ngIf=\"menuitem.type === 'sub'\">\r\n        <mat-icon>{{ menuitem.icon }}</mat-icon>\r\n        <span>{{ menuitem.name | translate }}</span>\r\n        <span fxFlex></span>\r\n        <span class=\"menu-badge mat-{{ badge.type }}\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span>\r\n        <mat-icon class=\"menu-caret\">arrow_drop_down</mat-icon>\r\n      </a>\r\n      <mat-nav-list class=\"sub-menu\" *ngIf=\"menuitem.type === 'sub'\">\r\n        <mat-list-item *ngFor=\"let childitem of menuitem.children\" routerLinkActive=\"open\">\r\n          <a [routerLink]=\"['/', menuitem.state, childitem.state ]\" class=\"relative\">{{ childitem.name | translate }}</a>\r\n        </mat-list-item>\r\n      </mat-nav-list>\r\n    </mat-list-item>\r\n  </mat-nav-list>"

/***/ }),

/***/ "./src/app/core/menu/menu.component.ts":
/*!*********************************************!*\
  !*** ./src/app/core/menu/menu.component.ts ***!
  \*********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.service */ "./src/app/core/menu/menu.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = /** @class */ (function () {
    function MenuComponent(menuService, translate) {
        this.menuService = menuService;
        this.translate = translate;
        this.currentLang = 'en';
    }
    MenuComponent.prototype.addMenuItem = function () {
        this.menuService.add({
            state: 'menu',
            name: 'MENU',
            type: 'sub',
            icon: 'trending_flat',
            children: [
                { state: 'menu', name: 'MENU' },
                { state: 'timeline', name: 'MENU' }
            ]
        });
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/core/menu/menu.component.html"),
            providers: [_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"]]
        }),
        __metadata("design:paramtypes", [_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/core/menu/menu.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/menu/menu.service.ts ***!
  \*******************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MENUITEMS = [
    {
        state: '/',
        name: 'HOME',
        type: 'link',
        icon: 'home'
    },
    {
        state: 'users',
        name: 'User',
        type: 'link',
        icon: 'face'
    },
    {
        state: 'questions',
        name: 'Questions',
        type: 'link',
        icon: 'question_answer'
    },
    {
        state: 'companies',
        name: 'Companies',
        type: 'link',
        icon: 'location_city'
    },
    {
        state: 'http://primer.nyasha.me/docs',
        name: 'DOCS',
        type: 'extTabLink',
        icon: 'local_library'
    }
];
var MenuService = /** @class */ (function () {
    function MenuService() {
    }
    MenuService.prototype.getAll = function () {
        return MENUITEMS;
    };
    MenuService.prototype.add = function (menu) {
        MENUITEMS.push(menu);
    };
    MenuService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MenuService);
    return MenuService;
}());



/***/ }),

/***/ "./src/app/core/notification/notification.component.html":
/*!***************************************************************!*\
  !*** ./src/app/core/notification/notification.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group [selectedIndex]=\"1\" mat-stretch-tabs>\r\n  <mat-tab>\r\n    <ng-template matTabLabel>Today</ng-template>\r\n    <div class=\"scroll\">\r\n      <mat-list class=\"pt-1 pb-1\">\r\n        <mat-list-item>\r\n          <div fxLayout=\"column\">\r\n            <h1 class=\"ma-0\">{{ today | date:'EEEE' }}</h1>\r\n            <h3 class=\"mat-text-muted ma-0\"><span>{{ today | date:'dd' }}</span>&nbsp;<span>{{ today | date:'MMMM' }}</span></h3>\r\n          </div>\r\n        </mat-list-item>\r\n      </mat-list>\r\n      <mat-nav-list>\r\n        <mat-divider></mat-divider>\r\n        <h3 mat-subheader class=\"text-uppercase font-weight-bold\">Stocks</h3>\r\n        <mat-list-item>\r\n            <a matLine href=\"javascript:;\">NASDAQ</a>\r\n            <span class=\"mat-text-muted text-md mr-xs ml-xs\">4,492.87</span>\r\n            <span>-0.29%</span>\r\n        </mat-list-item>\r\n        <mat-list-item>\r\n            <a matLine href=\"javascript:;\">NYSE</a>\r\n            <span class=\"mat-text-muted text-md mr-xs ml-xs\">10,692.07</span>\r\n            <span>-0.53%</span>\r\n        </mat-list-item>\r\n        <mat-list-item>\r\n            <a matLine href=javascript:;>DOW J</a>\r\n            <span class=\"mat-text-muted text-md mr-xs ml-xs\">17,046.81</span>\r\n            <span>-0.14%</span>\r\n        </mat-list-item>\r\n        <mat-list-item>\r\n            <a matLine href=\"javascript:;\">APPL</a>\r\n            <span class=\"mat-text-muted text-md mr-xs ml-xs\">100,89</span>\r\n            <span>+0.75%</span>\r\n        </mat-list-item>\r\n        <mat-divider></mat-divider>\r\n        <h3 mat-subheader class=\"text-uppercase font-weight-bold\">Weather</h3>\r\n        <mat-list-item>\r\n            <a matLine href=\"javascript:;\">{{ today | date:'shortTime' }}</a>\r\n            <p matLine class=\"mat-text-muted\">London</p>\r\n            <span class=\"mat-h1 mr-1\">\r\n              <span class=\"pe-is-w-blizzard\"></span>\r\n            </span>\r\n            <span class=\"mat-h1\">26°</span>\r\n        </mat-list-item>\r\n        <mat-divider></mat-divider>\r\n        <h3 mat-subheader class=\"text-uppercase font-weight-bold\">Todo</h3>\r\n        <mat-list-item>\r\n          <a matLine href=\"javascript:;\">Learn Angular 2.0</a>\r\n          <p matLine class=\"mat-text-muted text-md\">2:45PM</p>\r\n        </mat-list-item>\r\n        <mat-list-item>\r\n            <a matLine href=\"javascript:;\">Learn Angular Material</a>\r\n            <p matLine class=\"mat-text-muted text-md\">3:20PM</p>\r\n        </mat-list-item>\r\n        <mat-list-item>\r\n            <a matLine href=\"javascript:;\">Write documentation</a>\r\n            <p matLine class=\"mat-text-muted text-md\">6:00PM</p>\r\n        </mat-list-item>\r\n        <mat-divider class=\"mt-xs mb-xs\"></mat-divider>\r\n        <h3 mat-subheader class=\"text-uppercase font-weight-bold\">Stats</h3>\r\n        <mat-list-item>\r\n          <p class=\"text-md\" matLine>Local Storage (4023 / 10690)</p>\r\n          <mat-progress-bar  matLine mode=\"determinate\" color=\"warn\" value=\"40\"></mat-progress-bar>\r\n        </mat-list-item>\r\n        <mat-list-item>\r\n          <p class=\"text-md\" matLine>Cloud Storage (700 / 1030)</p>\r\n          <mat-progress-bar  matLine mode=\"determinate\" color=\"accent\" value=\"70\"></mat-progress-bar>\r\n        </mat-list-item>\r\n        <mat-list-item>\r\n          <p class=\"text-md\" matLine>Local Storage (20 / 100)</p>\r\n          <mat-progress-bar  matLine mode=\"determinate\" value=\"20\"></mat-progress-bar>\r\n        </mat-list-item>\r\n      </mat-nav-list>\r\n    </div>\r\n  </mat-tab>\r\n  <mat-tab>\r\n    <ng-template matTabLabel>Notifications</ng-template>\r\n    <div class=\"scroll\">\r\n      <mat-nav-list>\r\n        <mat-list-item>\r\n          <mat-icon mat-list-avatar class=\"mat-text-primary\">people</mat-icon>\r\n          <h4 matLine>Social</h4>\r\n          <p matLine>Ligula Purus Adipiscing</p>\r\n        </mat-list-item>\r\n        <mat-list-item>\r\n          <mat-icon mat-list-avatar class=\"mat-text-warn\">local_offer</mat-icon>\r\n          <h4 matLine>Promotions</h4>\r\n          <p matLine>Etiam Ligula Dapibus</p>\r\n        </mat-list-item>\r\n        <mat-list-item>\r\n          <mat-icon mat-list-avatar class=\"mat-text-accent\">info</mat-icon>\r\n          <h4 matLine>Updates</h4>\r\n          <p matLine>Sollicitudin Euismod Fringilla</p>\r\n        </mat-list-item>\r\n\r\n        <mat-list-item>\r\n          <mat-icon mat-list-avatar class=\"mat-indigo\">delete_sweep</mat-icon>\r\n          <h4 matLine>Removed 6 items from task list</h4>\r\n          <span class=\"text-md mat-text-muted\" matLine>{{ 1427207139000 | date: 'fullDate' }}</span>\r\n        </mat-list-item>\r\n        <mat-list-item>\r\n          <mat-icon mat-list-avatar>check_circle</mat-icon>\r\n          <h4 matLine>Completed 2 projects</h4>\r\n          <span class=\"text-md mat-text-muted\" matLine>{{ 1427412725000 | date: 'fullDate' }}</span>\r\n        </mat-list-item>\r\n        <mat-list-item>\r\n          <mat-icon mat-list-avatar>notifications_paused</mat-icon>\r\n          <h4 matLine>Muted notifications</h4>\r\n          <span class=\"text-md mat-text-muted\" matLine>{{ 1427546580000 | date: 'fullDate' }}</span>\r\n        </mat-list-item>\r\n        <mat-list-item>\r\n          <mat-icon mat-list-avatar>person_add</mat-icon>\r\n          <h4 matLine>Added Joel to contact list</h4>\r\n          <span class=\"text-md mat-text-muted\" matLine>{{ 1428275520000 | date: 'fullDate' }}</span>\r\n        </mat-list-item>\r\n        <mat-list-item>\r\n          <mat-icon mat-list-avatar>phone_missed</mat-icon>\r\n          <h4 matLine>Missed live call from Ellie</h4>\r\n          <span class=\"text-md mat-text-muted\" matLine>{{ 1428830580000 | date: 'fullDate' }}</span>\r\n        </mat-list-item>\r\n        <mat-list-item>\r\n          <mat-icon mat-list-avatar>group_add</mat-icon>\r\n          <h4 matLine>You've been added to HR group</h4>\r\n          <span class=\"text-md mat-text-muted\" matLine>{{ 1429363920000 | date: 'fullDate' }}</span>\r\n        </mat-list-item>\r\n      </mat-nav-list>\r\n    </div>\r\n  </mat-tab>\r\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/core/notification/notification.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/notification/notification.component.ts ***!
  \*************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
        this.today = Date.now();
    }
    NotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/core/notification/notification.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/core/options/options.component.html":
/*!*****************************************************!*\
  !*** ./src/app/core/options/options.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Demo Purposes Only -->\r\n<button mat-fab color=\"warn\" class=\"mat-fab-bottom-right\" (click)=\"showSettings = true\" style=\"z-index: 9;\">\r\n  <mat-icon class=\"mat-24\">settings</mat-icon>\r\n</button>\r\n<mat-card class=\"settings-panel pa-0\" *ngIf=\"showSettings\">\r\n  <mat-toolbar color=\"warn\">\r\n    <span fxFlex>Options</span>\r\n    <button mat-icon-button (click)=\"showSettings = false\">\r\n      <mat-icon>close</mat-icon>\r\n    </button>\r\n  </mat-toolbar>\r\n  <mat-card-content class=\"demo-checkbox pa-1\">\r\n    <div class=\"pb-1\">\r\n      <mat-checkbox [(ngModel)]=\"options.collapsed\" (change)=\"sendOptions()\" [labelPosition]=\"end\">Collapsed Sidebar</mat-checkbox>\r\n    </div>\r\n    <div class=\"pb-1\">\r\n      <mat-checkbox [(ngModel)]=\"options.compact\" (change)=\"sendOptions()\" [labelPosition]=\"end\">Compact Sidebar</mat-checkbox>\r\n    </div>\r\n    <div class=\"pb-1\">\r\n      <mat-checkbox [(ngModel)]=\"options.boxed\" (change)=\"sendOptions()\" [labelPosition]=\"end\">Boxed Layout</mat-checkbox>\r\n    </div>\r\n    <div class=\"pb-1\">\r\n      <mat-checkbox [(ngModel)]=\"options.dark\" (change)=\"sendOptions()\" [labelPosition]=\"end\">Dark Mode</mat-checkbox>\r\n    </div>\r\n    <div class=\"pb-1\">\r\n      <mat-checkbox (change)=\"options.dir = (options.dir == 'rtl' ? 'ltr' : 'rtl'); sendOptions()\" [labelPosition]=\"end\">RTL</mat-checkbox>\r\n    </div>\r\n    <div class=\"pb-0\">\r\n      <mat-select placeholder=\"Language\" class=\"mt-1\" [(ngModel)]=\"currentLang\" #langSelect=\"ngModel\" (ngModelChange)=\"translate.use(currentLang)\">\r\n        <mat-option *ngFor=\"let lang of translate.getLangs()\" [value]=\"lang\">{{ lang }}</mat-option>\r\n      </mat-select>\r\n   </div>\r\n  </mat-card-content>\r\n</mat-card>\r\n<!-- /Demo Purposes Only -->"

/***/ }),

/***/ "./src/app/core/options/options.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/options/options.component.ts ***!
  \***************************************************/
/*! exports provided: OptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsComponent", function() { return OptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OptionsComponent = /** @class */ (function () {
    function OptionsComponent(translate) {
        this.translate = translate;
        this.currentLang = 'en';
        this.showSettings = false;
        this.options = {
            collapsed: false,
            compact: false,
            boxed: false,
            dark: false,
            dir: 'ltr'
        };
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    OptionsComponent.prototype.sendOptions = function () {
        if (this.options.collapsed === true) {
            this.options.compact = false;
        }
        if (this.options.compact === true) {
            this.options.collapsed = false;
        }
        this.messageEvent.emit(this.options);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], OptionsComponent.prototype, "messageEvent", void 0);
    OptionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-options',
            template: __webpack_require__(/*! ./options.component.html */ "./src/app/core/options/options.component.html")
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], OptionsComponent);
    return OptionsComponent;
}());



/***/ }),

/***/ "./src/app/core/sidebar/sidebar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/core/sidebar/sidebar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>"

/***/ }),

/***/ "./src/app/core/sidebar/sidebar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/sidebar/sidebar.component.ts ***!
  \***************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/core/sidebar/sidebar.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _companies_companies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../companies/companies.service */ "./src/app/companies/companies.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [_companies_companies_service__WEBPACK_IMPORTED_MODULE_4__["CompaniesService"]]
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                // material
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
            ],
            declarations: [],
            exports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
            ]
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:3000'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projects\adminpanel\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
