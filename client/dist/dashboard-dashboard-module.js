(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\">\r\n  <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n    <mat-card class=\"card-widget mat-teal\">\r\n      <div mat-card-widget>\r\n        <div mat-card-float-icon>\r\n          <mat-icon>location_city</mat-icon>\r\n        </div>\r\n        <div class=\"pl-0\">\r\n          <h2 mat-card-widget-title>103</h2>\r\n          <p>Companies</p>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n  <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n    <mat-card class=\"card-widget mat-purple\">\r\n      <div mat-card-widget>\r\n        <div mat-card-float-icon>\r\n          <mat-icon>face</mat-icon>\r\n        </div>\r\n        <div class=\"pl-0\">\r\n          <h2 mat-card-widget-title>230</h2>\r\n          <p>Users</p>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n  <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n    <mat-card class=\"card-widget mat-red\">\r\n      <div mat-card-widget>\r\n        <div mat-card-float-icon>\r\n          <mat-icon>question_answer</mat-icon>\r\n        </div>\r\n        <div class=\"pl-0\">\r\n          <h2 mat-card-widget-title>323</h2>\r\n          <p>Questions</p>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n  <div fxFlex.gt-sm=\"25\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n    <mat-card class=\"card-widget mat-indigo\">\r\n      <div mat-card-widget>\r\n        <div mat-card-float-icon>\r\n          <mat-icon>email</mat-icon>\r\n        </div>\r\n        <div class=\"pl-0\">\r\n          <h2 mat-card-widget-title>870</h2>\r\n          <p>Messages</p>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n\r\n<!-- <div fxLayout=\"row wrap\">\r\n\t<div fxFlex.gt-sm=\"33.33%\" fxFlex=\"100\">\r\n\t\t<mat-card>\r\n      <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        Revenue &nbsp; <span class=\"font-weight-bold mat-text-primary\">+458,90</span>\r\n        <span fxFlex></span>\r\n      Companyn mat-icon-button mat-button-sm [matMenuTriggerFor]=\"card1\" aria-label=\"Open card menu\">\r\n          <mat-icon>more_vert</mat-icon>\r\n        </button>\r\n      </mat-card-subtitle>\r\n      <mat-menu #card1=\"matMenu\" x-position=\"before\">\r\n        <button mat-menu-item>\r\n          <mat-icon>settings</mat-icon>\r\n          Settings\r\n        </button>\r\n        <button mat-menu-item>\r\n          <mat-icon>more</mat-icon>\r\n          View More\r\n        </button>\r\n        <button mat-menu-item>\r\n          <mat-icon>notifications_off</mat-icon>\r\n          Disable notifications\r\n        </button>\r\n        <button mat-menu-item>\r\n          <mat-icon>exit_to_app</mat-icon>\r\n          Remove Panel\r\n        </button>\r\n      </mat-menu>\r\n\t\t\t<mat-card-content>\r\n        <canvas height=\"200\" baseChart class=\"chart\"\r\n          [datasets]=\"barChartData\"\r\n          [labels]=\"barChartLabels\"\r\n          [options]=\"barChartOptions\"\r\n          [colors]=\"chartColors\"\r\n          [legend]=\"barChartLegend\"\r\n          [chartType]=\"barChartType\"></canvas>\r\n      </mat-card-content>\r\n\t\t</mat-card>\r\n\t</div>\r\n\t<div fxFlex.gt-sm=\"33.33%\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n\t\t<mat-card>\r\n      <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        Yearly Sales &nbsp; <span class=\"font-weight-bold mat-text-warn\">-46,68</span>\r\n        <span fxFlex></span>\r\n        <button mat-icon-button mat-button-sm [matMenuTriggerFor]=\"card2\" aria-label=\"Open card menu\">\r\n          <mat-icon>more_vert</mat-icon>\r\n        </button>\r\n      </mat-card-subtitle>\r\n      <mat-menu #card2=\"matMenu\" x-position=\"before\">\r\n        <button mat-menu-item>\r\n          <mat-icon>settings</mat-icon>\r\n          Settings\r\n        </button>\r\n        <button mat-menu-item>\r\n          <mat-icon>more</mat-icon>\r\n          View More\r\n        </button>\r\n        <button mat-menu-item>\r\n          <mat-icon>notifications_off</mat-icon>\r\n          Disable notifications\r\n        </button>\r\n        <button mat-menu-item>\r\n          <mat-icon>exit_to_app</mat-icon>\r\n          Remove Panel\r\n        </button>\r\n      </mat-menu>\r\n\t\t\t<mat-card-content>\r\n        <canvas height=\"200\" baseChart class=\"chart\"\r\n          [datasets]=\"ComboChartData\"\r\n          [labels]=\"comboChartLabels\"\r\n          [options]=\"ComboChartOptions\"\r\n          [colors]=\"chartColors\"\r\n          [legend]=\"comboChartLegend\"\r\n          [chartType]=\"barChartType\"></canvas>\r\n      </mat-card-content>\r\n\t\t</mat-card>\r\n\t</div>\r\n\t<div fxFlex.gt-sm=\"33.33%\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n\t\t<mat-card>\r\n      <mat-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        Sales Report &nbsp; <span class=\"font-weight-bold mat-text-accent\">+2,50%</span>\r\n        <span fxFlex></span>\r\n        <button mat-icon-button mat-button-sm [matMenuTriggerFor]=\"card3\" aria-label=\"Open card menu\">\r\n          <mat-icon>more_vert</mat-icon>\r\n        </button>\r\n      </mat-card-subtitle>\r\n      <mat-menu #card3=\"matMenu\" x-position=\"before\">\r\n        <button mat-menu-item>\r\n          <mat-icon>settings</mat-icon>\r\n          Settings\r\n        </button>\r\n        <button mat-menu-item>\r\n          <mat-icon>more</mat-icon>\r\n          View More\r\n        </button>\r\n        <button mat-menu-item>\r\n          <mat-icon>notifications_off</mat-icon>\r\n          Disable notifications\r\n        </button>\r\n        <button mat-menu-item>\r\n          <mat-icon>exit_to_app</mat-icon>\r\n          Remove Panel\r\n        </button>\r\n      </mat-menu>\r\n\t\t\t<mat-card-content>\r\n        <canvas height=\"200\" baseChart class=\"chart\"\r\n          [datasets]=\"bubbleChartData\"\r\n          [labels]=\"comboChartLabels\"\r\n          [options]=\"ComboChartOptions\"\r\n          [legend]=\"comboChartLegend\"\r\n          [chartType]=\"bubbleChartType\"></canvas>\r\n      </mat-card-content>\r\n\t\t</mat-card>\r\n\t</div>\r\n</div>\r\n\r\n<div fxLayout=\"row wrap\">\r\n  <div fxFlex.gt-sm=\"66.66%\" fxFlex=\"100\">\r\n    <ngx-datatable\r\n      class=\"material\"\r\n      [rows]=\"rows\"\r\n      [columnMode]=\"'force'\"\r\n      [headerHeight]=\"50\"\r\n      [footerHeight]=\"0\"\r\n      [rowHeight]=\"'auto'\">\r\n      <ngx-datatable-column name=\"Project\">\r\n        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n          {{row['project']}}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n      <ngx-datatable-column name=\"Due Date\">\r\n        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n          {{row['date'] | date: 'MMMM dd'}}\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n      <ngx-datatable-column name=\"Progress\">\r\n        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n          <mat-progress-bar mode=\"determinate\" value=\"{{row['progress']}}\" color=\"primary\"></mat-progress-bar>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n    </ngx-datatable>\r\n  </div>\r\n  <div fxFlex.gt-sm=\"33.33%\" fxFlex=\"100\">\r\n    <mat-card>\r\n      <mat-card-title>Newsfeed</mat-card-title>\r\n      <mat-card-subtitle>Stories posted today</mat-card-subtitle>\r\n      <hr>\r\n      <mat-list>\r\n        <ng-template let-item let-last=\"last\" ngFor [ngForOf]=\"messages\">\r\n          <mat-list-item>\r\n            <img mat-list-avatar src=\"{{item.photo}}\" alt=\"\">\r\n            <h3 matLine> {{item.from}} </h3>\r\n            <p matLine> {{item.subject}} - {{item.message}} </p>\r\n          </mat-list-item>\r\n        </ng-template>\r\n      </mat-list>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n\r\n<div fxLayout=\"row wrap\">\r\n  <div fxFlex.gt-md=\"50\" fxFlex=\"100\">\r\n    <mat-card>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mr-1\">\r\n        <mat-card-header class=\"mt-0\">\r\n          <img matCardAvatar src=\"assets/images/avatar.jpg\">\r\n          <mat-card-subtitle>Revenue &nbsp; <span class=\"font-weight-bold mat-text-primary\">+458,90</span></mat-card-subtitle>\r\n          <mat-card-title>Gerald Morris</mat-card-title>\r\n        </mat-card-header>\r\n        <span fxFlex></span>\r\n        <button mat-icon-button mat-button-sm [matMenuTriggerFor]=\"card1\" aria-label=\"Open card menu\">\r\n          <mat-icon>more_vert</mat-icon>\r\n        </button>\r\n      </div>\r\n      <img mat-card-image src=\"assets/images/unsplash/2.jpg\" alt=\"Photo\" height=\"240\">\r\n      <mat-card-content>\r\n        <button mat-fab mat-fab-card-float class=\"mr-1\" color=\"warn\"><mat-icon>share</mat-icon></button>\r\n        <p>Phileas Fogg and Aouda went on board, where they found Fix already installed. Below deck was a square cabin, of which the walls bulged out in the form of cots, above a circular divan; in the centre was a table provided with a swinging lamp.</p>\r\n      </mat-card-content>\r\n      <hr>\r\n      <mat-card-actions>\r\n        <div fxLayout=\"row\">\r\n          <button mat-icon-button>\r\n            <mat-icon>share</mat-icon>\r\n          </button>\r\n          <button mat-icon-button>\r\n            <mat-icon>favorite</mat-icon>\r\n          </button>\r\n          <span fxFlex></span>\r\n          <button mat-button>More info</button>\r\n          <button mat-button>Download</button>\r\n        </div>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n  </div>\r\n  <div fxFlex.gt-md=\"50\" fxFlex=\"100\">\r\n    <mat-card class=\"pb-0\">\r\n      <mat-card-content class=\"pb-0\">\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"mb-2\">\r\n          <div fxFlex>\r\n            <h1 class=\"mt-0 mb-0\">London, UK</h1>\r\n            <h2 class=\"mt-0 mb-0\">Saturday 2:00 AM</h2>\r\n            <p class=\"mat-text-muted mt-0 mb-0\">Mostly Sunny</p>\r\n          </div>\r\n          <span fxFlex></span>\r\n          <div fxFlex class=\"text-xs-right\">\r\n            <h1 class=\"text-xxl mt-0 mb-0\">\r\n              <span class=\"pe-is-w-moon-sea mat-text-accent\"></span>\r\n              <span>6<sup></sup></span>\r\n            </h1>\r\n          </div>\r\n        </div>\r\n        <div fxLayout=\"row\" layout-align=\"center\" class=\"mb-2 text-md\">\r\n          <div class=\"pr-1\" fxFlex>\r\n            <div fxLayout=\"row\">\r\n              <span>Pressure</span>\r\n              <span fxFlex></span>\r\n              <span>30.09</span>\r\n              <span>hPa</span>\r\n            </div>\r\n\r\n            <div fxLayout=\"row\">\r\n              <span>Visibility</span>\r\n              <span fxFlex></span>\r\n              <span>11.27</span>\r\n              <span>km</span>\r\n            </div>\r\n\r\n            <div fxLayout=\"row\">\r\n              <span>Light</span>\r\n              <span fxFlex></span>\r\n              <span>0.00</span>\r\n            </div>\r\n\r\n            <div fxLayout=\"row\">\r\n              <span>Light</span>\r\n              <span fxFlex></span>\r\n              <span>16</span>\r\n              <span>C</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"pl-1\" fxFlex>\r\n            <div fxLayout=\"row\">\r\n              <span>Humidity</span>\r\n              <span fxFlex></span>\r\n              <span>94</span>\r\n              <span>%</span>\r\n            </div>\r\n\r\n            <div fxLayout=\"row\">\r\n              <span>Precp.</span>\r\n              <span fxFlex></span>\r\n              <span></span>\r\n              <span>mm</span>\r\n            </div>\r\n\r\n            <div fxLayout=\"row\">\r\n              <span>Snow Depth</span>\r\n              <span fxFlex></span>\r\n              <span></span>\r\n            </div>\r\n\r\n            <div fxLayout=\"row\">\r\n              <span>Wind Gust</span>\r\n              <span fxFlex></span>\r\n              <span></span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </mat-card-content>\r\n      <mat-card-content class=\"mat-indigo content-full\">\r\n        <div fxLayout=\"row\" class=\"text-xs-center\">\r\n          <div fxFlex>\r\n            <div class=\"text-md\">6 km/h</div>\r\n            <div class=\"text-md pb-xs\"><mat-icon>call_received</mat-icon></div>\r\n            <div class=\"text-md\">MON</div>\r\n            <h1 class=\"block mt-0 mb-0 pb-xs\"><i class=\"pe-is-w-blizzard\"></i></h1>\r\n            <strong class=\"degree-value\">10</strong>\r\n          </div>\r\n          <div fxFlex>\r\n            <div class=\"text-md\">6 km/h</div>\r\n            <div class=\"text-md pb-xs\"><mat-icon>call_received</mat-icon></div>\r\n            <div class=\"text-md\">TUE</div>\r\n            <h1 class=\"block mt-0 mb-0 pb-xs\"><i class=\"pe-is-w-eclipse-1\"></i></h1>\r\n            <strong class=\"degree-value\">8</strong>\r\n          </div>\r\n          <div fxFlex>\r\n            <div class=\"text-md\">6 km/h</div>\r\n            <div class=\"text-md pb-xs\"><mat-icon>call_made</mat-icon></div>\r\n            <div class=\"text-md\">WED</div>\r\n            <h1 class=\"block mt-0 mb-0 pb-xs\"><i class=\"pe-is-w-fog-3\"></i></h1>\r\n            <strong class=\"degree-value\">6</strong>\r\n          </div>\r\n          <div fxFlex>\r\n            <div class=\"text-md\">6 km/h</div>\r\n            <div class=\"text-md pb-xs\"><mat-icon>arrow_upward</mat-icon></div>\r\n            <div class=\"text-md\">THU</div>\r\n            <h1 class=\"block mt-0 mb-0 pb-xs\"><i class=\"pe-is-w-hail-day-2\"></i></h1>\r\n            <strong class=\"degree-value\">6</strong>\r\n          </div>\r\n          <div fxFlex>\r\n            <div class=\"text-md\">6 km/h</div>\r\n            <div class=\"text-md pb-xs\"><mat-icon>call_received</mat-icon></div>\r\n            <div class=\"text-md\">FRI</div>\r\n            <h1 class=\"block mt-0 mb-0 pb-xs\"><i class=\"pe-is-w-mix-rainfall-1\"></i></h1>\r\n            <strong class=\"degree-value\">9</strong>\r\n          </div>\r\n          <div fxFlex>\r\n            <div class=\"text-md\">6 km/h</div>\r\n            <div class=\"text-md pb-xs\"><mat-icon>arrow_forward</mat-icon></div>\r\n            <div class=\"text-md\">SAT</div>\r\n            <h1 class=\"block mt-0 mb-0 pb-xs\"><i class=\"pe-is-w-moon-sea\"></i></h1>\r\n            <strong class=\"degree-value\">8</strong>\r\n          </div>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div> -->\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
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

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        var _this = this;
        this.rows = [];
        // Shared chart options
        this.globalChartOptions = {
            responsive: true,
            legend: {
                display: false,
                position: 'bottom'
            }
        };
        // Bar
        this.barChartLabels = ['1', '2', '3', '4', '5', '6', '7'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [{
                data: [6, 5, 8, 8, 5, 5, 4],
                label: 'Series A',
                borderWidth: 0
            }, {
                data: [5, 4, 4, 2, 6, 2, 5],
                label: 'Series B',
                borderWidth: 0
            }];
        this.barChartOptions = Object.assign({
            scaleShowVerticalLines: false,
            tooltips: {
                mode: 'index',
                intersect: false
            },
            responsive: true,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            defaultFontColor: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        stacked: true,
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            defaultFontColor: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        stacked: true
                    }]
            }
        }, this.globalChartOptions);
        // Bubble Chart
        this.bubbleChartData = [{
                data: [{
                        x: 6,
                        y: 5,
                        r: 15,
                    }, {
                        x: 5,
                        y: 4,
                        r: 10,
                    }, {
                        x: 8,
                        y: 4,
                        r: 6,
                    }, {
                        x: 8,
                        y: 4,
                        r: 6,
                    }, {
                        x: 5,
                        y: 14,
                        r: 14,
                    }, {
                        x: 5,
                        y: 6,
                        r: 8,
                    }, {
                        x: 4,
                        y: 2,
                        r: 10,
                    }],
                label: 'Series A',
                borderWidth: 1
            }];
        this.bubbleChartType = 'bubble';
        // combo chart
        this.comboChartLabels = ['1', '2', '3', '4', '5', '6', '7'];
        this.chartColors = [{
                backgroundColor: '#7986cb',
                borderColor: '#3f51b5',
                pointBackgroundColor: '#3f51b5',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }, {
                backgroundColor: '#eeeeee',
                borderColor: '#e0e0e0',
                pointBackgroundColor: '#e0e0e0',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            }, {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }];
        this.comboChartLegend = true;
        this.ComboChartData = [{
                data: [6, 5, 8, 8, 5, 5, 4],
                label: 'Series A',
                borderWidth: 1,
                type: 'line',
                fill: false
            }, {
                data: [5, 4, 4, 2, 6, 2, 5],
                label: 'Series B',
                borderWidth: 1,
                type: 'bar',
            }];
        this.ComboChartOptions = Object.assign({
            animation: false,
            scales: {
                xAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            color: 'rgba(0,0,0,0.02)',
                            zeroLineColor: 'rgba(0,0,0,0.02)'
                        },
                        ticks: {
                            beginAtZero: true,
                            suggestedMax: 9,
                        }
                    }]
            }
        }, this.globalChartOptions);
        // newsfeed
        this.messages = [{
                from: 'Ali Connors',
                message: 'I will be in your neighborhood',
                photo: 'assets/images/face3.jpg',
                subject: 'Brunch this weekend?',
            }, {
                from: 'Trevor Hansen',
                message: 'Wish I could but we have plans',
                photo: 'assets/images/face6.jpg',
                subject: 'Brunch this weekend?',
            }, {
                from: 'Sandra Adams',
                message: 'Do you have Paris recommendations instead?',
                photo: 'assets/images/face4.jpg',
                subject: 'Brunch this weekend?',
            },];
        this.fetch(function (data) { _this.rows = data; });
    }
    // project table
    DashboardComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/projects.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-charts/ng2-charts */ "./node_modules/ng2-charts/ng2-charts.js");
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard.routing */ "./src/app/dashboard/dashboard.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_dashboard_routing__WEBPACK_IMPORTED_MODULE_8__["DashboardRoutes"]),
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"]
            ],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.routing.ts":
/*!************************************************!*\
  !*** ./src/app/dashboard/dashboard.routing.ts ***!
  \************************************************/
/*! exports provided: DashboardRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutes", function() { return DashboardRoutes; });
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");

var DashboardRoutes = [{
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"]
    }];


/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map