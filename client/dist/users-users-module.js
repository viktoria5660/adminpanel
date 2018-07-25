(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"],{

/***/ "./src/app/users/add-edit-user-dialog/add-edit-user.dialog.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/users/add-edit-user-dialog/add-edit-user.dialog.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 matDialogTitle>\r\n    <ng-container *ngIf=\"editMode\" i18n>Edit User</ng-container>\r\n    <ng-container *ngIf=\"!editMode\" i18n>Add User</ng-container>\r\n</h3>\r\n\r\n<div mat-dialog-content style=\"padding-bottom: 20px;\">\r\n    <form *ngIf=\"form\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n        <div fxLayout=\"row wrap\">\r\n\r\n            <div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n                <!--Is Admin-->\r\n                <div class=\"form-group\">\r\n                    <mat-form-field>\r\n                        <!-- <input matInput formControlName=\"isAdmin\" placeholder=\"isAdmin ? true/false\"> -->\r\n                        <mat-select placeholder=\"isAdmin?\" formControlName=\"isAdmin\">\r\n                            <mat-option [value]=\"false\">False</mat-option>\r\n                            <mat-option [value]=\"true\">True</mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n\r\n            <div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n                <!--First Name-->\r\n                <div class=\"form-group\">\r\n                    <mat-form-field>\r\n                        <input matInput formControlName=\"name\" placeholder=\"First Name\">\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n\r\n            <div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n                <!--Last Name-->\r\n                <div class=\"form-group\">\r\n                    <mat-form-field>\r\n                        <input matInput formControlName=\"lastName\" placeholder=\"Last Name\">\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n\r\n            <div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n                <!--Email-->\r\n                <div class=\"form-group\">\r\n                    <mat-form-field>\r\n                        <input type=\"email\" matInput formControlName=\"email\" placeholder=\"Email\">\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n\r\n            <div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n                <!--Password-->\r\n                <div class=\"form-group\">\r\n                    <mat-form-field>\r\n                        <input type=\"password\" matInput formControlName=\"password\" placeholder=\"Password\">\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n\r\n            <div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n                <!--Difficulty-->\r\n                <div class=\"form-group\">\r\n                    <mat-form-field class=\"mr-2\">\r\n                        <mat-select placeholder=\"Difficulty\" formControlName=\"difficulty\">\r\n                            <mat-option [value]=\"1\">Low</mat-option>\r\n                            <mat-option [value]=\"2\">Medium</mat-option>\r\n                            <mat-option [value]=\"3\">High</mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n\r\n            <div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n                <div class=\"form-group\">\r\n                    <mat-form-field class=\"mr-2\">\r\n                        <mat-select #selectedCompany placeholder=\"Company\" formControlName=\"company\">\r\n                            <mat-option *ngFor=\"let company of companies$ | async\" [value]=\"company\">\r\n                                {{company.companyName}}\r\n                            </mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n\r\n            <div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n                <!--Group-->\r\n                <div class=\"form-group\">\r\n                    <mat-form-field>\r\n                        <mat-select placeholder=\"Group\" formControlName=\"groups\">\r\n                            <mat-option *ngIf=\"!selectedCompany.value\">No company selected</mat-option>\r\n                            <ng-container *ngIf=\"selectedCompany.value\">\r\n                                <mat-option *ngFor=\"let group of selectedCompany.value.groups\" [value]=\"group\">\r\n                                    {{group.name}}\r\n                                </mat-option>\r\n                            </ng-container>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n\r\n            <div fxFlex.gt-sm=\"50\" fxFlex.gt-xs=\"50\" fxFlex=\"100\">\r\n                <!--Coins-->\r\n                <div class=\"form-group\">\r\n                    <mat-form-field>\r\n                        <input matInput type=\"number\" formControlName=\"coins\" placeholder=\"Coins\">\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"divider divider-md\"></div>\r\n\r\n        <div class=\"form-actions\">\r\n            <button mat-raised-button type=\"submit\" class=\"btn-w-md\" color=\"primary\"\r\n                    [disabled]=\"form.invalid\">\r\n                Submit\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/users/add-edit-user-dialog/add-edit-user.dialog.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/users/add-edit-user-dialog/add-edit-user.dialog.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 100%; }\n\n.form-group {\n  padding: 0 10px 0 10px; }\n"

/***/ }),

/***/ "./src/app/users/add-edit-user-dialog/add-edit-user.dialog.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/users/add-edit-user-dialog/add-edit-user.dialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: AddEditUserDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditUserDialogComponent", function() { return AddEditUserDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _users_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users.model */ "./src/app/users/users.model.ts");
/* harmony import */ var _companies_companies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../companies/companies.service */ "./src/app/companies/companies.service.ts");
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





// import {settingsService} from '../../settings/settings.service';
var AddEditUserDialogComponent = /** @class */ (function () {
    function AddEditUserDialogComponent(dialogRef, data, companiesService, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.companiesService = companiesService;
        this.formBuilder = formBuilder;
    }
    AddEditUserDialogComponent.prototype.ngOnInit = function () {
        this.companies$ = this.companiesService.companies$;
        if (this.data && this.data.user) {
            this.editMode = true;
            this.user = this.data.user;
        }
        else {
            this.editMode = false;
            this.user = new _users_model__WEBPACK_IMPORTED_MODULE_3__["User"]();
        }
        // this.companies$ = this.settingsService.companies$;
        // this.settingsService.companies$.subscribe((companies) => {
        //     this.selectedCompany = companies[0];
        // });
        this.buildForm();
    };
    AddEditUserDialogComponent.prototype.buildForm = function () {
        this.form = this.formBuilder.group({
            name: [this.user.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: [this.user.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [this.user.email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: [this.user.password, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            groups: [this.user.group, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            company: [this.user.company, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            difficulty: [this.user.difficulty, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            coins: [this.user.coins, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            isAdmin: [this.user.isAdmin, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    AddEditUserDialogComponent.prototype.onSubmit = function () {
        this.dialogRef.close(this.form.value);
    };
    AddEditUserDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-edit-user',
            template: __webpack_require__(/*! ./add-edit-user.dialog.component.html */ "./src/app/users/add-edit-user-dialog/add-edit-user.dialog.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-user.dialog.component.scss */ "./src/app/users/add-edit-user-dialog/add-edit-user.dialog.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _companies_companies_service__WEBPACK_IMPORTED_MODULE_4__["CompaniesService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], AddEditUserDialogComponent);
    return AddEditUserDialogComponent;
}());



/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<h1>Users</h1>\r\n    <div class=\"row\">\r\n        <div class=\"col-12 pb-2\">\r\n            <p>{{error}}</p>\r\n            <button mat-raised-button color=\"accent\" (click)=\"addUser()\">Add user</button>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\r\n\r\n        <!-- name Column -->\r\n        <ng-container matColumnDef=\"name\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Name</th>\r\n            <td mat-cell *matCellDef=\"let user\"> {{user.name}}</td>\r\n        </ng-container>\r\n\r\n        <!-- lastName Column -->\r\n        <ng-container matColumnDef=\"lastName\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Last Name</th>\r\n            <td mat-cell *matCellDef=\"let user\"> {{user.lastName}}</td>\r\n        </ng-container>\r\n\r\n        <!-- email Column -->\r\n        <ng-container matColumnDef=\"email\" mat-sort-header>\r\n            <th mat-header-cell *matHeaderCellDef> Email</th>\r\n            <td mat-cell *matCellDef=\"let user\"> {{user.email}}</td>\r\n        </ng-container>\r\n\r\n         <!-- company Column -->\r\n         <ng-container matColumnDef=\"company\" mat-sort-header>\r\n            <th mat-header-cell *matHeaderCellDef> Company</th>\r\n            <td mat-cell *matCellDef=\"let user\"> {{user.company}}</td>\r\n        </ng-container>\r\n\r\n        <!-- group Column -->\r\n        <ng-container matColumnDef=\"group\" mat-sort-header>\r\n            <th mat-header-cell *matHeaderCellDef> Group</th>\r\n            <td mat-cell *matCellDef=\"let user\"> {{user.group}}</td>\r\n        </ng-container>\r\n\r\n        <!-- coins Column -->\r\n        <ng-container matColumnDef=\"coins\" mat-sort-header>\r\n            <th mat-header-cell *matHeaderCellDef> Coins</th>\r\n            <td mat-cell *matCellDef=\"let user\"> {{user.coins | number}}</td>\r\n        </ng-container>\r\n        \r\n        \r\n        <!-- created_at Column -->\r\n        <ng-container matColumnDef=\"created_at\" mat-sort-header>\r\n            <th mat-header-cell *matHeaderCellDef> Created</th>\r\n            <td mat-cell *matCellDef=\"let user\"> {{user.created_at | date:'dd/MM/yyyy, hh:mm'}}</td>\r\n        </ng-container>\r\n\r\n        <!-- updatedAt Column -->\r\n        <ng-container matColumnDef=\"updatedAt\" mat-sort-header>\r\n            <th mat-header-cell *matHeaderCellDef> Updated</th>\r\n            <td mat-cell *matCellDef=\"let user\"> {{user.updatedAt | date:'dd/MM/yyyy, hh:mm'}}</td>\r\n        </ng-container>\r\n\r\n         <!-- isAdmin Column -->\r\n         <ng-container matColumnDef=\"isAdmin\" mat-sort-header>\r\n            <th mat-header-cell *matHeaderCellDef> isAdmin</th>\r\n            <td mat-cell *matCellDef=\"let user\"> {{user.isAdmin}}</td>\r\n        </ng-container>\r\n\r\n        <!--actions-->\r\n        <ng-container matColumnDef=\"actions\" mat-sort-header>\r\n            <th mat-header-cell *matHeaderCellDef> Actions</th>\r\n            <td mat-cell *matCellDef=\"let user\">\r\n                <button (click)=\"editUser(user)\" mat-icon-button class=\"ml-xs overflow-visible\">\r\n                    <mat-icon>edit</mat-icon>\r\n                </button>\r\n\r\n                <button (click)=\"deleteUser(user)\" mat-icon-button class=\"ml-xs overflow-visible\">\r\n                    <mat-icon>delete</mat-icon>\r\n                </button>\r\n            </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/users/users.component.scss":
/*!********************************************!*\
  !*** ./src/app/users/users.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding: 30px; }\n\ntable {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.service */ "./src/app/users/users.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _add_edit_user_dialog_add_edit_user_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-edit-user-dialog/add-edit-user.dialog.component */ "./src/app/users/add-edit-user-dialog/add-edit-user.dialog.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsersComponent = /** @class */ (function () {
    function UsersComponent(usersService, dialog) {
        this.usersService = usersService;
        this.dialog = dialog;
        this.displayedColumns = ['name', 'lastName', 'email', 'company', 'group', 'coins',
            'created_at', 'updatedAt', 'isAdmin', 'actions'];
        this.dataSourceSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([]);
        this.usersService.getUsers().subscribe(function (users) {
            _this.dataSource.data = users;
            _this.dataSourceSubject.next(_this.dataSource.data);
            _this.dataSource.sort = _this.sort;
            _this.error = '';
        }, function (error) { return _this.error = error.message; });
    };
    UsersComponent.prototype.addUser = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_add_edit_user_dialog_add_edit_user_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AddEditUserDialogComponent"], {
            width: '450px'
        });
        dialogRef.afterClosed().subscribe(function (newUser) {
            // this.message = '';
            // console.log(newUser);
            if (newUser) {
                // todo: add user
                // console.log(newUser)
                _this.usersService.addUser(newUser).subscribe(function (response) {
                    // this.message = response.message;
                    // console.log("INSIDE SET USER COMPO")
                }, function (error) { return console.log(error); });
            }
        });
    };
    UsersComponent.prototype.editUser = function (user) {
        var _this = this;
        var dialogRef = this.dialog.open(_add_edit_user_dialog_add_edit_user_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AddEditUserDialogComponent"], {
            width: '450px',
            data: { user: user }
        });
        dialogRef.afterClosed().subscribe(function (editUser) {
            console.log(editUser);
            if (editUser) {
                // todo: edit user
                _this.usersService.updateUser(editUser).subscribe(function (response) {
                    // this.message = response.message;
                    console.log("INSIDE SET UPDATE USER COMPO");
                }, function (error) { return console.log(error); });
            }
        });
    };
    UsersComponent.prototype.deleteUser = function (user) {
        // todo: delete user
        this.usersService.deleteUser(user).subscribe(function (response) {
            // this.message = response.message;
            console.log("INSIDE SET UPDATE USER COMPO", user);
        }, function (error) { return console.log(error); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], UsersComponent.prototype, "sort", void 0);
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/users/users.component.scss")]
        }),
        __metadata("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/users/users.model.ts":
/*!**************************************!*\
  !*** ./src/app/users/users.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/users/users.module.ts":
/*!***************************************!*\
  !*** ./src/app/users/users.module.ts ***!
  \***************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts/ng2-charts */ "./node_modules/ng2-charts/ng2-charts.js");
/* harmony import */ var ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _users_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users.routing */ "./src/app/users/users.routing.ts");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users.service */ "./src/app/users/users.service.ts");
/* harmony import */ var _add_edit_user_dialog_add_edit_user_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-edit-user-dialog/add-edit-user.dialog.component */ "./src/app/users/add-edit-user-dialog/add-edit-user.dialog.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_users_routing__WEBPACK_IMPORTED_MODULE_7__["UsersRoutes"]),
                ng2_charts_ng2_charts__WEBPACK_IMPORTED_MODULE_4__["ChartsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"]
            ],
            declarations: [_users_component__WEBPACK_IMPORTED_MODULE_6__["UsersComponent"], _add_edit_user_dialog_add_edit_user_dialog_component__WEBPACK_IMPORTED_MODULE_9__["AddEditUserDialogComponent"]],
            providers: [_users_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"]],
            entryComponents: [_add_edit_user_dialog_add_edit_user_dialog_component__WEBPACK_IMPORTED_MODULE_9__["AddEditUserDialogComponent"]]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ }),

/***/ "./src/app/users/users.routing.ts":
/*!****************************************!*\
  !*** ./src/app/users/users.routing.ts ***!
  \****************************************/
/*! exports provided: UsersRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutes", function() { return UsersRoutes; });
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.component */ "./src/app/users/users.component.ts");

var UsersRoutes = [{
        path: '',
        component: _users_component__WEBPACK_IMPORTED_MODULE_0__["UsersComponent"]
    }];


/***/ }),

/***/ "./src/app/users/users.service.ts":
/*!****************************************!*\
  !*** ./src/app/users/users.service.ts ***!
  \****************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/api.service */ "./src/app/_services/api.service.ts");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersService = /** @class */ (function () {
    function UsersService(apiService) {
        this.apiService = apiService;
        this.usersSubject = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.users$ = this.usersSubject.asObservable();
        this.loadAllUsers();
    }
    UsersService.prototype.updateUsers = function (newUsers) {
        this.usersSubject.next(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](newUsers));
    };
    UsersService.prototype.getUsersValue = function () {
        return lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"](this.usersSubject.getValue());
    };
    UsersService.prototype.loadAllUsers = function () {
        var _this = this;
        this.getUsers().subscribe(function (users) {
            _this.updateUsers(users);
        });
    };
    UsersService.prototype.addUser = function (newUser) {
        // console.log(newUser);
        // console.log('INSIDE SET USER SERViCE');
        return this.apiService.addUser(newUser);
    };
    UsersService.prototype.updateUser = function (newUser) {
        console.log(newUser);
        // console.log('INSIDE SET USER SERViCE');
        return this.apiService.updateUser(newUser);
    };
    UsersService.prototype.deleteUser = function (newUser) {
        console.log(newUser);
        // console.log('INSIDE SET USER SERViCE');
        return this.apiService.deleteUser(newUser);
    };
    UsersService.prototype.getUsers = function () {
        return this.apiService.getUsers();
    };
    UsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], UsersService);
    return UsersService;
}());



/***/ })

}]);
//# sourceMappingURL=users-users-module.js.map
