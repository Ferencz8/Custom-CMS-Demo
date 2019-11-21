(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _backoffice_backoffice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./backoffice/backoffice.component */ "./src/app/backoffice/backoffice.component.ts");




var routes = [
    { path: '', component: _backoffice_backoffice_component__WEBPACK_IMPORTED_MODULE_3__["BackofficeComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: true } // <-- debugging purposes only
                )],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet ></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        // navigate to default route
        //this.router.navigate(['/navbars']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.module */ "./src/app/navbar/navbar.module.ts");
/* harmony import */ var _widget_widget_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./widget/widget.module */ "./src/app/widget/widget.module.ts");
/* harmony import */ var _publicsite_publicsite_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./publicsite/publicsite.module */ "./src/app/publicsite/publicsite.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _backoffice_backoffice_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./backoffice/backoffice.module */ "./src/app/backoffice/backoffice.module.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedMaterialModule"],
                _backoffice_backoffice_module__WEBPACK_IMPORTED_MODULE_12__["BackofficeModule"],
                _navbar_navbar_module__WEBPACK_IMPORTED_MODULE_8__["NavbarModule"],
                _widget_widget_module__WEBPACK_IMPORTED_MODULE_9__["WidgetModule"],
                _publicsite_publicsite_module__WEBPACK_IMPORTED_MODULE_10__["PublicsiteModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/backoffice/backoffice-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/backoffice/backoffice-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: BackofficeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackofficeRoutingModule", function() { return BackofficeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _backoffice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./backoffice.component */ "./src/app/backoffice/backoffice.component.ts");
/* harmony import */ var _navbar_components_navbar_list_navbar_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navbar/components/navbar-list/navbar-list.component */ "./src/app/navbar/components/navbar-list/navbar-list.component.ts");
/* harmony import */ var _widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../widget/widget-list/widget-list.component */ "./src/app/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _navbar_components_add_navbar_add_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../navbar/components/add-navbar/add-navbar.component */ "./src/app/navbar/components/add-navbar/add-navbar.component.ts");
/* harmony import */ var _widget_widget_html_widget_html_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../widget/widget-html/widget-html.component */ "./src/app/widget/widget-html/widget-html.component.ts");
/* harmony import */ var _widget_widget_product_widget_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../widget/widget-product/widget-product.component */ "./src/app/widget/widget-product/widget-product.component.ts");









var routes = [
    {
        path: 'backoffice', component: _backoffice_component__WEBPACK_IMPORTED_MODULE_3__["BackofficeComponent"], children: [
            { path: 'navbars', component: _navbar_components_navbar_list_navbar_list_component__WEBPACK_IMPORTED_MODULE_4__["NavbarListComponent"] },
            { path: 'addnavbar', component: _navbar_components_add_navbar_add_navbar_component__WEBPACK_IMPORTED_MODULE_6__["AddNavbarComponent"] },
            { path: 'editnavbar/:id', component: _navbar_components_add_navbar_add_navbar_component__WEBPACK_IMPORTED_MODULE_6__["AddNavbarComponent"] },
            { path: 'widgets', component: _widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_5__["WidgetListComponent"] },
            { path: 'addHtmlWidget', component: _widget_widget_html_widget_html_component__WEBPACK_IMPORTED_MODULE_7__["WidgetHtmlComponent"] },
            { path: 'editHtmlWidget/:id', component: _widget_widget_html_widget_html_component__WEBPACK_IMPORTED_MODULE_7__["WidgetHtmlComponent"] },
            { path: 'addProductWidget', component: _widget_widget_product_widget_product_component__WEBPACK_IMPORTED_MODULE_8__["WidgetProductComponent"] },
            { path: 'editProductWidget/:id', component: _widget_widget_product_widget_product_component__WEBPACK_IMPORTED_MODULE_8__["WidgetProductComponent"] },
        ]
    },
];
var BackofficeRoutingModule = /** @class */ (function () {
    function BackofficeRoutingModule() {
    }
    BackofficeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BackofficeRoutingModule);
    return BackofficeRoutingModule;
}());



/***/ }),

/***/ "./src/app/backoffice/backoffice.component.html":
/*!******************************************************!*\
  !*** ./src/app/backoffice/backoffice.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav mat-tab-nav-bar>\r\n  <a mat-tab-link\r\n     *ngFor=\"let link of navLinks\"\r\n     [routerLink]=\"link.path\"\r\n     routerLinkActive #rla=\"routerLinkActive\"\r\n     [active]=\"rla.isActive\">\r\n    {{link.label}}\r\n  </a>\r\n</nav>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/backoffice/backoffice.component.scss":
/*!******************************************************!*\
  !*** ./src/app/backoffice/backoffice.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2tvZmZpY2UvYmFja29mZmljZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/backoffice/backoffice.component.ts":
/*!****************************************************!*\
  !*** ./src/app/backoffice/backoffice.component.ts ***!
  \****************************************************/
/*! exports provided: BackofficeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackofficeComponent", function() { return BackofficeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BackofficeComponent = /** @class */ (function () {
    function BackofficeComponent() {
        this.title = 'Backoffice';
        this.navLinks = [
            { label: 'Navbar', path: '/backoffice/navbars', isActive: true },
            { label: 'Widget', path: '/backoffice/widgets' }
        ];
    }
    BackofficeComponent.prototype.ngOnInit = function () {
    };
    BackofficeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-backoffice',
            template: __webpack_require__(/*! ./backoffice.component.html */ "./src/app/backoffice/backoffice.component.html"),
            styles: [__webpack_require__(/*! ./backoffice.component.scss */ "./src/app/backoffice/backoffice.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BackofficeComponent);
    return BackofficeComponent;
}());



/***/ }),

/***/ "./src/app/backoffice/backoffice.module.ts":
/*!*************************************************!*\
  !*** ./src/app/backoffice/backoffice.module.ts ***!
  \*************************************************/
/*! exports provided: BackofficeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackofficeModule", function() { return BackofficeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _backoffice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./backoffice.component */ "./src/app/backoffice/backoffice.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _backoffice_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./backoffice-routing.module */ "./src/app/backoffice/backoffice-routing.module.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");









var BackofficeModule = /** @class */ (function () {
    function BackofficeModule() {
    }
    BackofficeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_backoffice_component__WEBPACK_IMPORTED_MODULE_3__["BackofficeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedMaterialModule"],
                _backoffice_routing_module__WEBPACK_IMPORTED_MODULE_7__["BackofficeRoutingModule"],
            ],
        })
    ], BackofficeModule);
    return BackofficeModule;
}());



/***/ }),

/***/ "./src/app/models/navbar.ts":
/*!**********************************!*\
  !*** ./src/app/models/navbar.ts ***!
  \**********************************/
/*! exports provided: Navbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return Navbar; });
var Navbar = /** @class */ (function () {
    function Navbar(params) {
        if (params === void 0) { params = {}; }
        this.id = params.id;
        this.name = params.name;
        this.url = params.url;
        this.isPublished = params.isPublished;
        this.displayOrder = params.displayOrder;
    }
    return Navbar;
}());



/***/ }),

/***/ "./src/app/models/widget.ts":
/*!**********************************!*\
  !*** ./src/app/models/widget.ts ***!
  \**********************************/
/*! exports provided: Widget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Widget", function() { return Widget; });
var Widget = /** @class */ (function () {
    function Widget() {
    }
    return Widget;
}());



/***/ }),

/***/ "./src/app/models/widget.type.ts":
/*!***************************************!*\
  !*** ./src/app/models/widget.type.ts ***!
  \***************************************/
/*! exports provided: WidgetType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetType", function() { return WidgetType; });
var WidgetType;
(function (WidgetType) {
    WidgetType[WidgetType["Html"] = 0] = "Html";
    WidgetType[WidgetType["Product"] = 1] = "Product";
})(WidgetType || (WidgetType = {}));


/***/ }),

/***/ "./src/app/navbar/components/add-navbar/add-navbar.component.html":
/*!************************************************************************!*\
  !*** ./src/app/navbar/components/add-navbar/add-navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf=\"navbar$ | async as navbar; else loading\" class=\"bo-halfSize bo-centered bo-marginTop5perc\">\r\n    <mat-card-header>\r\n      <mat-card-title *ngIf=\"!isEdit\">Add a navbar element</mat-card-title>\r\n      <mat-card-title *ngIf=\"isEdit\">Edit a navbar element</mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n      <div class=\"bo-container bo-container__center\">\r\n        <mat-form-field>\r\n          <mat-label>Name</mat-label>\r\n          <input matInput required [(ngModel)]=\"navbar.name\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <mat-label>Url</mat-label>\r\n          <input matInput [(ngModel)]=\"navbar.url\">\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n          <mat-select [(ngModel)]=\"navbar.displayOrder\">\r\n            <mat-option *ngFor=\"let orderVal of orderVals\" [value]=\"orderVal\">{{orderVal}}</mat-option>\r\n          </mat-select>\r\n          <mat-label>\r\n            Display Order\r\n          </mat-label>\r\n        </mat-form-field>\r\n        <div class=\"bo-container__actionBtns\">\r\n          <button mat-raised-button color=\"primary\" (click)=\"save(navbar)\">Save</button>\r\n          <button mat-raised-button (click)=\"cancel()\">Cancel</button>\r\n        </div>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n  <ng-template #loading>Loading User Data...</ng-template>\r\n"

/***/ }),

/***/ "./src/app/navbar/components/add-navbar/add-navbar.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/navbar/components/add-navbar/add-navbar.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9jb21wb25lbnRzL2FkZC1uYXZiYXIvYWRkLW5hdmJhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/components/add-navbar/add-navbar.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/navbar/components/add-navbar/add-navbar.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNavbarComponent", function() { return AddNavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/navbar */ "./src/app/models/navbar.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/navbar.service */ "./src/app/services/navbar.service.ts");







var AddNavbarComponent = /** @class */ (function () {
    function AddNavbarComponent(navbarService, route, router) {
        this.navbarService = navbarService;
        this.route = route;
        this.router = router;
        this.isEdit = false;
        this.elementas = [
            { id: 1, name: 'About', url: '/about', isPublished: false, displayOrder: 1 },
            { id: 2, name: 'Contacts', url: '/contacts', isPublished: true, displayOrder: 2 },
            { id: 3, name: 'Case Studies', url: '/case-studies', isPublished: false, displayOrder: 3 },
            { id: 4, name: 'Education', url: '/education', isPublished: true, displayOrder: 4 }
        ];
        this.orderVals = [0, 1, 2, 3, 4];
    }
    AddNavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navbar$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new src_app_models_navbar__WEBPACK_IMPORTED_MODULE_2__["Navbar"]());
        if (this.router.url.includes('edit')) {
            this.isEdit = true;
            this.route.params.subscribe(function (params) {
                var idParam = params.id;
                _this.navbarService.get(idParam).subscribe(function (res) {
                    _this.navbar$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(res);
                });
            });
            this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (params) {
                _this.navbarService.get(params.get('id')).subscribe(function (res) {
                    _this.navbar$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(res);
                });
            }));
            // //check switchMap
            // this.navbar$ = this.route.paramMap.pipe(
            //   map((params: ParamMap) => {
            //     return this.navbarService.get(params.get('id'));
            //     //return this.elementas.find(n => n.id.toString() === params.get('id'));
            //   })
            // );
        }
    };
    AddNavbarComponent.prototype.save = function (navbar) {
        var _this = this;
        console.log(navbar);
        if (this.isEdit) {
            this.navbarService.update(navbar).subscribe(function () {
                _this.router.navigate(['../backoffice/navbars']);
            });
        }
        else {
            this.navbarService.add(navbar).subscribe(function () {
                _this.router.navigate(['../backoffice/navbars']);
            });
        }
    };
    AddNavbarComponent.prototype.cancel = function () {
        this.router.navigate(['../backoffice/navbars']);
    };
    AddNavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-navbar',
            template: __webpack_require__(/*! ./add-navbar.component.html */ "./src/app/navbar/components/add-navbar/add-navbar.component.html"),
            styles: [__webpack_require__(/*! ./add-navbar.component.scss */ "./src/app/navbar/components/add-navbar/add-navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_6__["NavbarService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddNavbarComponent);
    return AddNavbarComponent;
}());



/***/ }),

/***/ "./src/app/navbar/components/navbar-list/navbar-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/navbar/components/navbar-list/navbar-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"bo-centered bo-marginTop5perc\">\r\n  <div class=\"bo-card-header-cols\">\r\n    <mat-card-header>\r\n      <mat-card-title> Navbar elements </mat-card-title>\r\n    </mat-card-header>\r\n    <button mat-mini-fab color=\"primary\" routerLink=\"/backoffice/addnavbar\">\r\n      <mat-icon>add_circle</mat-icon>\r\n    </button>\r\n  </div>\r\n  <mat-card-content>\r\n    <table mat-table [dataSource]=\"dataSource$ | async \" class=\"bo-fullSize\">\r\n\r\n      <!--- Note that these columns can be defined in any order.\r\n                  The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n      <!-- Position Column -->\r\n      <ng-container matColumnDef=\"id\">\r\n        <th mat-header-cell *matHeaderCellDef> Id </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"name\">\r\n        <th mat-header-cell *matHeaderCellDef> Name </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Url Column -->\r\n      <ng-container matColumnDef=\"url\">\r\n        <th mat-header-cell *matHeaderCellDef> Url </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.url}} </td>\r\n      </ng-container>\r\n\r\n      <!-- isPublished Column -->\r\n      <ng-container matColumnDef=\"isPublished\">\r\n        <th mat-header-cell *matHeaderCellDef> Is Published </th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          <mat-icon *ngIf=\"!!element.isPublished\">radio_button_checked</mat-icon>\r\n          <mat-icon *ngIf=\"!element.isPublished\">radio_button_unchecked</mat-icon>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <!-- Symbol Column -->\r\n      <ng-container matColumnDef=\"actions\">\r\n        <th mat-header-cell *matHeaderCellDef> Actions </th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          <button mat-raised-button color=\"primary\" (click)=\"edit(element.id)\">\r\n            <mat-icon>edit</mat-icon>\r\n          </button>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/navbar/components/navbar-list/navbar-list.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/navbar/components/navbar-list/navbar-list.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9jb21wb25lbnRzL25hdmJhci1saXN0L25hdmJhci1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/navbar/components/navbar-list/navbar-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/navbar/components/navbar-list/navbar-list.component.ts ***!
  \************************************************************************/
/*! exports provided: NavbarListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarListComponent", function() { return NavbarListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navbar.service */ "./src/app/services/navbar.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NavbarListComponent = /** @class */ (function () {
    function NavbarListComponent(navbarService, router) {
        this.navbarService = navbarService;
        this.router = router;
        this.displayedColumns = ['id', 'name', 'url', 'isPublished', 'actions'];
    }
    NavbarListComponent.prototype.ngOnInit = function () {
        this.dataSource$ = this.navbarService.getAll();
    };
    NavbarListComponent.prototype.edit = function (id) {
        this.router.navigate(["/backoffice/editnavbar/" + id]);
    };
    NavbarListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar-list',
            template: __webpack_require__(/*! ./navbar-list.component.html */ "./src/app/navbar/components/navbar-list/navbar-list.component.html"),
            styles: [__webpack_require__(/*! ./navbar-list.component.scss */ "./src/app/navbar/components/navbar-list/navbar-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavbarListComponent);
    return NavbarListComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.module.ts":
/*!*****************************************!*\
  !*** ./src/app/navbar/navbar.module.ts ***!
  \*****************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _components_add_navbar_add_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/add-navbar/add-navbar.component */ "./src/app/navbar/components/add-navbar/add-navbar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_navbar_list_navbar_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar-list/navbar-list.component */ "./src/app/navbar/components/navbar-list/navbar-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedMaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]
            ],
            declarations: [
                _components_navbar_list_navbar_list_component__WEBPACK_IMPORTED_MODULE_6__["NavbarListComponent"],
                _components_add_navbar_add_navbar_component__WEBPACK_IMPORTED_MODULE_4__["AddNavbarComponent"]
            ],
            exports: [
                _components_navbar_list_navbar_list_component__WEBPACK_IMPORTED_MODULE_6__["NavbarListComponent"]
            ]
        })
    ], NavbarModule);
    return NavbarModule;
}());



/***/ }),

/***/ "./src/app/publicsite/publicsite-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/publicsite/publicsite-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PublicsiteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicsiteRoutingModule", function() { return PublicsiteRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _publicsite_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./publicsite.component */ "./src/app/publicsite/publicsite.component.ts");




var routes = [
    { path: 'public', component: _publicsite_component__WEBPACK_IMPORTED_MODULE_3__["PublicsiteComponent"] },
];
var PublicsiteRoutingModule = /** @class */ (function () {
    function PublicsiteRoutingModule() {
    }
    PublicsiteRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], PublicsiteRoutingModule);
    return PublicsiteRoutingModule;
}());



/***/ }),

/***/ "./src/app/publicsite/publicsite.component.html":
/*!******************************************************!*\
  !*** ./src/app/publicsite/publicsite.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"navbar-main\">\r\n  <!-- Fixed navbar -->\r\n  <div class=\"navbar navbar-default navbar-fixed-top\">\r\n    <div class=\"container\">\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\r\n          <span class=\"icon icon-radio-checked\" style=\"font-size:30px; color:#1abc9c;\"></span>\r\n        </button>\r\n        <a class=\"navbar-brand hidden-xs hidden-sm smoothscroll\" href=\"#home\"><span class=\"icon icon-radio-checked\"\r\n            style=\"font-size:18px; color:#1abc9c;\"></span></a>\r\n      </div>\r\n      <div class=\"navbar-collapse collapse\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <li *ngFor=\"let navbar of navbars$ | async\">\r\n            <a [href]=\"'/public' + navbar.url\" class=\"smoothscroll\">{{navbar.name}}</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <!--/.nav-collapse -->\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- ==== HEADERWRAP ==== -->\r\n<div id=\"home\"></div>\r\n<div id=\"headerwrap\" name=\"home\">\r\n  <header class=\"clearfix\">\r\n    <h1>DEMO</h1>\r\n    <p>CMS Template.</p>\r\n  </header>\r\n</div>\r\n<!-- /headerwrap -->\r\n\r\n<!-- ==== GREYWRAP ==== -->\r\n<!-- <div *ngIf=\"widget$ | async as widget\" id=\"greywrap\" [innerHTML]=\"widget.content\">\r\n</div> -->\r\n<div *ngFor=\"let widget of widgets$ | async\">\r\n  <div [innerHTML]=\"widget.content | safeHtml\">\r\n  </div>\r\n</div>\r\n<!-- greywrap -->\r\n\r\n\r\n<!-- ==== PORTFOLIO ==== -->\r\n<div class=\"container\" id=\"portfolio\" name=\"portfolio\">\r\n  <br>\r\n  <div class=\"row\">\r\n    <br>\r\n    <h1 class=\"centered\">Portfolio</h1>\r\n    <hr>\r\n    <br>\r\n    <br>\r\n  </div>\r\n  <!-- /row -->\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <ng-container *ngFor=\"let productWidget of productWidgets$ | async\">\r\n        <!-- PORTFOLIO IMAGE 1 -->\r\n        <div class=\"col-md-4 \">\r\n          <div class=\"grid mask\">\r\n            <figure>\r\n              <img class=\"img-responsive\" [src]=\"productWidget.content?.imageUrl\" alt=\"\">\r\n              <figcaption>\r\n                <h5>{{productWidget.name}}</h5>\r\n                <a data-toggle=\"modal\" [href]=\"'/public#' + productWidget.id\" class=\"btn btn-primary btn-lg\">Take a\r\n                  Look</a>\r\n              </figcaption>\r\n              <!-- /figcaption -->\r\n            </figure>\r\n            <!-- /figure -->\r\n          </div>\r\n          <!-- /grid-mask -->\r\n        </div>\r\n        <!-- /col -->\r\n\r\n\r\n        <!-- MODAL SHOW THE PORTFOLIO IMAGE. In this demo, all links point to this modal. You should create\r\n                    a modal for each of your projects. -->\r\n\r\n        <div class=\"modal fade\" [id]=\"productWidget.id\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n          aria-hidden=\"true\">\r\n          <div class=\"modal-dialog\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n                <h4 class=\"modal-title\">{{productWidget.name}}</h4>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <p><img class=\"img-responsive\" [src]=\"productWidget.content?.imageUrl\" alt=\"\"></p>\r\n                <p>{{productWidget.content?.description}}</p>\r\n                <p><b><a [href]=\"productWidget.content?.link\">Visit Site</a></b></p>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n              </div>\r\n            </div>\r\n            <!-- /.modal-content -->\r\n          </div>\r\n          <!-- /.modal-dialog -->\r\n        </div>\r\n        <!-- /.modal -->\r\n      </ng-container>\r\n      <!-- /row -->\r\n      <br>\r\n      <br>\r\n    </div>\r\n    <!-- /row -->\r\n  </div>\r\n</div>\r\n<!-- /container -->\r\n<div id=\"copyrights\">\r\n  <div class=\"container\">\r\n    <p>\r\n      &copy; Copyrights Ferencz Veres\r\n    </p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/publicsite/publicsite.component.scss":
/*!******************************************************!*\
  !*** ./src/app/publicsite/publicsite.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpY3NpdGUvcHVibGljc2l0ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/publicsite/publicsite.component.ts":
/*!****************************************************!*\
  !*** ./src/app/publicsite/publicsite.component.ts ***!
  \****************************************************/
/*! exports provided: PublicsiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicsiteComponent", function() { return PublicsiteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_navbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/navbar.service */ "./src/app/services/navbar.service.ts");
/* harmony import */ var _services_widget_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/widget.service */ "./src/app/services/widget.service.ts");
/* harmony import */ var _models_widget_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/widget.type */ "./src/app/models/widget.type.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var PublicsiteComponent = /** @class */ (function () {
    function PublicsiteComponent(navbarService, widgetService) {
        // this.navbars$ = of([
        //   new Navbar({ id: 1, name: 'Home', url: '#home', isPublished: true, displayOrder: 0 }),
        //   new Navbar({ id: 2, name: 'About', url: '#about', isPublished: true, displayOrder: 0 }),
        //   new Navbar({ id: 3, name: 'Services', url: '#services', isPublished: true, displayOrder: 0 }),
        //   new Navbar({ id: 4, name: 'Team', url: '#team', isPublished: true, displayOrder: 0 }),
        //   new Navbar({ id: 5, name: 'Portfolio', url: '#portfolio', isPublished: true, displayOrder: 0 }),
        //   new Navbar({ id: 6, name: 'Blog', url: '#blog', isPublished: true, displayOrder: 0 }),
        //   new Navbar({ id: 7, name: 'Pricing Tables', url: '#pricing', isPublished: true, displayOrder: 0 }),
        //   new Navbar({ id: 8, name: 'Contact', url: '#contact', isPublished: true, displayOrder: 0 }),
        // ]);
        this.navbarService = navbarService;
        this.widgetService = widgetService;
    }
    PublicsiteComponent.prototype.ngOnInit = function () {
        this.navbars$ = this.navbarService.getAllPublished();
        // use a custom pipe
        this.widgets$ = this.widgetService.getAllPublishedOfType(_models_widget_type__WEBPACK_IMPORTED_MODULE_4__["WidgetType"].Html);
        this.productWidgets$ = this.widgetService.getAllPublishedOfType(_models_widget_type__WEBPACK_IMPORTED_MODULE_4__["WidgetType"].Product).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res.map(function (value) {
                value.content = JSON.parse(value.content);
                console.log(value);
                return value;
            });
        }));
    };
    PublicsiteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-publicsite',
            template: __webpack_require__(/*! ./publicsite.component.html */ "./src/app/publicsite/publicsite.component.html"),
            styles: [__webpack_require__(/*! ./publicsite.component.scss */ "./src/app/publicsite/publicsite.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"],
            _services_widget_service__WEBPACK_IMPORTED_MODULE_3__["WidgetService"]])
    ], PublicsiteComponent);
    return PublicsiteComponent;
}());



/***/ }),

/***/ "./src/app/publicsite/publicsite.module.ts":
/*!*************************************************!*\
  !*** ./src/app/publicsite/publicsite.module.ts ***!
  \*************************************************/
/*! exports provided: PublicsiteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicsiteModule", function() { return PublicsiteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _publicsite_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./publicsite.component */ "./src/app/publicsite/publicsite.component.ts");
/* harmony import */ var _publicsite_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./publicsite-routing.module */ "./src/app/publicsite/publicsite-routing.module.ts");
/* harmony import */ var _shared_safe_html_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/safe.html.pipe */ "./src/app/shared/safe.html.pipe.ts");






var PublicsiteModule = /** @class */ (function () {
    function PublicsiteModule() {
    }
    PublicsiteModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_publicsite_component__WEBPACK_IMPORTED_MODULE_3__["PublicsiteComponent"], _shared_safe_html_pipe__WEBPACK_IMPORTED_MODULE_5__["SafeHtmlPipe"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _publicsite_routing_module__WEBPACK_IMPORTED_MODULE_4__["PublicsiteRoutingModule"]
            ]
        })
    ], PublicsiteModule);
    return PublicsiteModule;
}());



/***/ }),

/***/ "./src/app/services/navbar.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/navbar.service.ts ***!
  \********************************************/
/*! exports provided: NavbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarService", function() { return NavbarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/app.settings */ "./src/app/shared/app.settings.ts");




var NavbarService = /** @class */ (function () {
    function NavbarService(httpClient) {
        this.httpClient = httpClient;
    }
    NavbarService.prototype.getAllPublished = function () {
        return this.httpClient.get(_shared_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/navbar/GetAllPublished");
    };
    NavbarService.prototype.getAll = function () {
        return this.httpClient.get(_shared_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/navbar");
    };
    NavbarService.prototype.get = function (id) {
        return this.httpClient.get(_shared_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/navbar/" + id);
    };
    NavbarService.prototype.add = function (navbar) {
        return this.httpClient.post(_shared_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/navbar", navbar);
    };
    NavbarService.prototype.update = function (navbar) {
        return this.httpClient.put(_shared_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/navbar/" + navbar.id, navbar);
    };
    NavbarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NavbarService);
    return NavbarService;
}());



/***/ }),

/***/ "./src/app/services/widget.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/widget.service.ts ***!
  \********************************************/
/*! exports provided: WidgetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetService", function() { return WidgetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/app.settings */ "./src/app/shared/app.settings.ts");




var WidgetService = /** @class */ (function () {
    function WidgetService(httpClient) {
        this.httpClient = httpClient;
    }
    WidgetService.prototype.getAllPublished = function () {
        return this.httpClient.get(_shared_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/widget/GetAllPublished");
    };
    WidgetService.prototype.getAllPublishedOfType = function (widgetType) {
        return this.httpClient.get(_shared_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/widget/GetAllPublishedOfType?widgetType=" + widgetType);
    };
    WidgetService.prototype.getAll = function () {
        return this.httpClient.get(_shared_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/widget");
    };
    WidgetService.prototype.get = function (id) {
        return this.httpClient.get(_shared_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/widget/" + id);
    };
    WidgetService.prototype.add = function (widget) {
        return this.httpClient.post(_shared_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/widget", widget);
    };
    WidgetService.prototype.update = function (widget) {
        return this.httpClient.put(_shared_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/widget/" + widget.id, widget);
    };
    WidgetService.prototype.upload = function (file) {
        var formData = new FormData();
        formData.append('file', file);
        return this.httpClient.post(_shared_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"].API_ENDPOINT + "/widget/UploadFile", formData);
    };
    WidgetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WidgetService);
    return WidgetService;
}());



/***/ }),

/***/ "./src/app/shared.module.ts":
/*!**********************************!*\
  !*** ./src/app/shared.module.ts ***!
  \**********************************/
/*! exports provided: SharedMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedMaterialModule", function() { return SharedMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var SharedMaterialModule = /** @class */ (function () {
    function SharedMaterialModule() {
    }
    SharedMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"]
            ],
            providers: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"]
            ]
        })
    ], SharedMaterialModule);
    return SharedMaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/app.settings.ts":
/*!****************************************!*\
  !*** ./src/app/shared/app.settings.ts ***!
  \****************************************/
/*! exports provided: AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
var AppSettings = /** @class */ (function () {
    function AppSettings() {
    }
    AppSettings.API_ENDPOINT = 'https://localhost:44377/api';
    return AppSettings;
}());



/***/ }),

/***/ "./src/app/shared/safe.html.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/shared/safe.html.pipe.ts ***!
  \******************************************/
/*! exports provided: SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safeHtml' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());



/***/ }),

/***/ "./src/app/widget/widget-html/widget-html.component.html":
/*!***************************************************************!*\
  !*** ./src/app/widget/widget-html/widget-html.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf=\"widget$ | async as widget\" class=\"bo-halfSize bo-centered bo-marginTop5perc\">\r\n  <mat-card-header>\r\n    <mat-card-title>Add an Html Widget</mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <div class=\"bo-container bo-container__center\">\r\n      <mat-form-field>\r\n        <mat-label>Name</mat-label>\r\n        <input matInput required [(ngModel)]=\"widget.name\">\r\n      </mat-form-field>\r\n\r\n      <mat-label>Html Content</mat-label>\r\n      <br />\r\n      <angular-editor [placeholder]=\"'Enter text here...'\" [(ngModel)]=\"widget.content\" [config]=\"editorConfig\"></angular-editor>\r\n      <br />\r\n      <div class=\"bo-container__actionBtns\">\r\n        <button mat-raised-button color=\"primary\" (click)=\"save(widget)\">Save</button>\r\n        <button mat-raised-button (click)=\"cancel()\">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/widget/widget-html/widget-html.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/widget/widget-html/widget-html.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldC93aWRnZXQtaHRtbC93aWRnZXQtaHRtbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/widget/widget-html/widget-html.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/widget/widget-html/widget-html.component.ts ***!
  \*************************************************************/
/*! exports provided: WidgetHtmlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHtmlComponent", function() { return WidgetHtmlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_models_widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/widget */ "./src/app/models/widget.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_widget_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/widget.service */ "./src/app/services/widget.service.ts");
/* harmony import */ var src_app_shared_app_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/app.settings */ "./src/app/shared/app.settings.ts");
/* harmony import */ var src_app_models_widget_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/widget.type */ "./src/app/models/widget.type.ts");








var WidgetHtmlComponent = /** @class */ (function () {
    function WidgetHtmlComponent(route, router, widgetService) {
        this.route = route;
        this.router = router;
        this.widgetService = widgetService;
        this.isEdit = false;
        this.editorConfig = {
            editable: true,
            spellcheck: true,
            height: 'auto',
            minHeight: '0',
            maxHeight: 'auto',
            width: 'auto',
            minWidth: '0',
            translate: 'yes',
            enableToolbar: true,
            showToolbar: true,
            placeholder: 'Enter text here...',
            defaultParagraphSeparator: '',
            defaultFontName: '',
            defaultFontSize: '',
            fonts: [
                { class: 'arial', name: 'Arial' },
                { class: 'times-new-roman', name: 'Times New Roman' },
                { class: 'calibri', name: 'Calibri' },
                { class: 'comic-sans-ms', name: 'Comic Sans MS' }
            ],
            customClasses: [
                {
                    name: 'quote',
                    class: 'quote',
                },
                {
                    name: 'redText',
                    class: 'redText'
                },
                {
                    name: 'titleText',
                    class: 'titleText',
                    tag: 'h1',
                },
            ],
            uploadUrl: src_app_shared_app_settings__WEBPACK_IMPORTED_MODULE_6__["AppSettings"].API_ENDPOINT + "/widget/UploadFile",
            sanitize: false,
            toolbarPosition: 'top',
        };
    }
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        var widget = new src_app_models_widget__WEBPACK_IMPORTED_MODULE_3__["Widget"]();
        widget.widgetType = src_app_models_widget_type__WEBPACK_IMPORTED_MODULE_7__["WidgetType"].Html;
        this.widget$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(widget);
        if (this.router.url.includes('edit')) {
            this.isEdit = true;
            this.route.params.subscribe(function (params) {
                var idParam = params.id;
                _this.widgetService.get(idParam).subscribe(function (res) {
                    _this.widget$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(res);
                });
            });
        }
    };
    WidgetHtmlComponent.prototype.save = function (widget) {
        var _this = this;
        console.log(widget);
        if (this.isEdit) {
            this.widgetService.update(widget).subscribe(function () {
                _this.router.navigate(['../backoffice/widgets']);
            });
        }
        else {
            this.widgetService.add(widget).subscribe(function () {
                _this.router.navigate(['../backoffice/widgets']);
            });
        }
    };
    WidgetHtmlComponent.prototype.cancel = function () {
        this.router.navigate(['../backoffice/widgets']);
    };
    WidgetHtmlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-html',
            template: __webpack_require__(/*! ./widget-html.component.html */ "./src/app/widget/widget-html/widget-html.component.html"),
            styles: [__webpack_require__(/*! ./widget-html.component.scss */ "./src/app/widget/widget-html/widget-html.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_services_widget_service__WEBPACK_IMPORTED_MODULE_5__["WidgetService"]])
    ], WidgetHtmlComponent);
    return WidgetHtmlComponent;
}());



/***/ }),

/***/ "./src/app/widget/widget-list/widget-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/widget/widget-list/widget-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"bo-centered bo-marginTop5perc\">\r\n  <div class=\"bo-card-header-cols\">\r\n    <mat-card-header>\r\n      <mat-card-title> Widgets </mat-card-title>\r\n    </mat-card-header>\r\n    <div>\r\n    <mat-form-field>\r\n      <mat-label>Select an option</mat-label>\r\n      <mat-select [(value)]=\"selected\">\r\n        <mat-option value=\"0\">Html</mat-option>\r\n        <mat-option value=\"1\">Product</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    <button mat-mini-fab color=\"primary\" (click)=\"addWidget()\">\r\n      <mat-icon>add_circle</mat-icon>\r\n    </button>\r\n  </div>\r\n  </div>\r\n  <mat-card-content>\r\n    <table mat-table [dataSource]=\"dataSource\" class=\"bo-fullSize\">\r\n\r\n      <!--- Note that these columns can be defined in any order.\r\n                    The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n      <!-- Position Column -->\r\n      <ng-container matColumnDef=\"id\">\r\n        <th mat-header-cell *matHeaderCellDef> No. </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"name\">\r\n        <th mat-header-cell *matHeaderCellDef> Name </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Url Column -->\r\n      <ng-container matColumnDef=\"type\">\r\n        <th mat-header-cell *matHeaderCellDef> Type </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{widgetTypes[element.widgetType]}} </td>\r\n      </ng-container>\r\n\r\n      <!-- isPublished Column -->\r\n      <ng-container matColumnDef=\"isPublished\">\r\n        <th mat-header-cell *matHeaderCellDef> Is Published </th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          <mat-icon *ngIf=\"!!element.isPublished\">radio_button_checked</mat-icon>\r\n          <mat-icon *ngIf=\"!element.isPublished\">radio_button_unchecked</mat-icon>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <!-- Symbol Column -->\r\n      <ng-container matColumnDef=\"actions\">\r\n        <th mat-header-cell *matHeaderCellDef> Actions </th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          <button mat-raised-button color=\"primary\" (click)=\"edit(element)\">\r\n            <mat-icon>edit</mat-icon>\r\n          </button>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/widget/widget-list/widget-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/widget/widget-list/widget-list.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldC93aWRnZXQtbGlzdC93aWRnZXQtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/widget/widget-list/widget-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/widget/widget-list/widget-list.component.ts ***!
  \*************************************************************/
/*! exports provided: WidgetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetListComponent", function() { return WidgetListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_widget_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/widget.type */ "./src/app/models/widget.type.ts");
/* harmony import */ var src_app_services_widget_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/widget.service */ "./src/app/services/widget.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(widgetService, router) {
        this.widgetService = widgetService;
        this.router = router;
        this.displayedColumns = ['id', 'name', 'type', 'isPublished', 'actions'];
        this.selected = 0;
        this.widgetTypes = src_app_models_widget_type__WEBPACK_IMPORTED_MODULE_2__["WidgetType"];
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.widgetService.getAll().subscribe(function (res) { return _this.dataSource = res; });
    };
    WidgetListComponent.prototype.edit = function (element) {
        switch (element.widgetType) {
            case src_app_models_widget_type__WEBPACK_IMPORTED_MODULE_2__["WidgetType"].Html:
                this.router.navigate(["/backoffice/editHtmlWidget/" + element.id]);
                break;
            case src_app_models_widget_type__WEBPACK_IMPORTED_MODULE_2__["WidgetType"].Product:
                this.router.navigate(["/backoffice/editProductWidget/" + element.id]);
                break;
            default:
                break;
        }
    };
    WidgetListComponent.prototype.addWidget = function () {
        if (this.selected == src_app_models_widget_type__WEBPACK_IMPORTED_MODULE_2__["WidgetType"].Html) {
            this.router.navigate(['/backoffice/addHtmlWidget']);
        }
        else if (this.selected == src_app_models_widget_type__WEBPACK_IMPORTED_MODULE_2__["WidgetType"].Product) {
            this.router.navigate(['/backoffice/addProductWidget']);
        }
        else {
            this.router.navigate(['/backoffice/addHtmlWidget']);
        }
    };
    WidgetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.scss */ "./src/app/widget/widget-list/widget-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_widget_service__WEBPACK_IMPORTED_MODULE_3__["WidgetService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], WidgetListComponent);
    return WidgetListComponent;
}());



/***/ }),

/***/ "./src/app/widget/widget-product/widget-product.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/widget/widget-product/widget-product.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"bo-halfSize bo-centered bo-marginTop5perc\">\r\n  <mat-card-header>\r\n    <mat-card-title>Add a Product Widget</mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <div class=\"bo-container bo-container__center\">\r\n      <mat-form-field>\r\n        <mat-label>Name</mat-label>\r\n        <input matInput required [(ngModel)]=\"productWidget.name\">\r\n      </mat-form-field>\r\n\r\n      <mat-label>Product Image</mat-label>\r\n      <br />\r\n      <ngx-file-drop dropZoneLabel=\"Drop files here\" (onFileDrop)=\"dropped($event)\" [accept]=\"acceptedFileExtensions\" [multiple]=\"false\">\r\n        <ng-template ngx-file-drop-content-tmp let-openFileSelector=\"openFileSelector\">\r\n          <span (click)=\"openFileSelector()\">Drag & Drop / Browse Files</span>\r\n        </ng-template>\r\n      </ngx-file-drop>\r\n      <img *ngIf=\"!!imgUrl\" [src]=\"imgUrl\">\r\n      <mat-form-field>\r\n        <mat-label>Link</mat-label>\r\n        <input matInput required [(ngModel)]=\"link\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <mat-label>Description</mat-label>\r\n        <textarea matInput required [(ngModel)]=\"description\"></textarea>\r\n      </mat-form-field>\r\n      <br />\r\n      <div class=\"bo-container__actionBtns\">\r\n        <button mat-raised-button color=\"primary\" (click)=\"save()\">Save</button>\r\n        <button mat-raised-button (click)=\"cancel()\">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/widget/widget-product/widget-product.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/widget/widget-product/widget-product.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldC93aWRnZXQtcHJvZHVjdC93aWRnZXQtcHJvZHVjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/widget/widget-product/widget-product.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/widget/widget-product/widget-product.component.ts ***!
  \*******************************************************************/
/*! exports provided: WidgetProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetProductComponent", function() { return WidgetProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_widget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/widget */ "./src/app/models/widget.ts");
/* harmony import */ var src_app_services_widget_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/widget.service */ "./src/app/services/widget.service.ts");
/* harmony import */ var src_app_models_widget_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/widget.type */ "./src/app/models/widget.type.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var WidgetProductComponent = /** @class */ (function () {
    function WidgetProductComponent(router, widgetService, route) {
        this.router = router;
        this.widgetService = widgetService;
        this.route = route;
        this.isEdit = false;
        this.acceptedFileExtensions = 'jpg,jpeg,png';
    }
    WidgetProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productWidget = new src_app_models_widget__WEBPACK_IMPORTED_MODULE_2__["Widget"]();
        if (this.router.url.includes('edit')) {
            this.isEdit = true;
            this.route.params.subscribe(function (params) {
                var idParam = params.id;
                _this.widgetService.get(idParam).subscribe(function (res) {
                    _this.productWidget = res;
                    //quick workaround
                    var productContent = JSON.parse(_this.productWidget.content);
                    _this.description = productContent.description;
                    _this.link = productContent.link;
                    _this.imgUrl = productContent.imageUrl;
                });
            });
        }
    };
    WidgetProductComponent.prototype.dropped = function (files) {
        var _this = this;
        var _loop_1 = function (droppedFile) {
            // Is it a file?
            if (droppedFile.fileEntry.isFile) {
                var fileEntry = droppedFile.fileEntry;
                fileEntry.file(function (file) {
                    _this.imgFile = file;
                    // Here you can access the real file
                    console.log(droppedFile.relativePath, file);
                    var reader = new FileReader();
                    reader.onload = function (event) {
                        _this.imgUrl = event.target.result;
                    };
                    reader.onerror = function (event) {
                        console.log("File could not be read: " + event.target.error.code);
                    };
                    reader.readAsDataURL(file);
                });
            }
            else {
                // It was a directory (empty directories are added, otherwise only files)
                var fileEntry = droppedFile.fileEntry;
                console.log(droppedFile.relativePath, fileEntry);
            }
        };
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var droppedFile = files_1[_i];
            _loop_1(droppedFile);
        }
    };
    WidgetProductComponent.prototype.save = function () {
        var _this = this;
        if (this.imgFile) {
            this.widgetService.upload(this.imgFile).subscribe(function (res) {
                var serverImgUrl = '';
                if (!!res && !!res.imageUrl) {
                    serverImgUrl = res.imageUrl;
                }
                _this.mapProductWidget(serverImgUrl);
                if (_this.isEdit) {
                    _this.widgetService.update(_this.productWidget).subscribe(function (res2) {
                        return _this.router.navigate(['../backoffice/widgets']);
                    });
                }
                else {
                    _this.widgetService.add(_this.productWidget).subscribe(function (res2) {
                        return _this.router.navigate(['../backoffice/widgets']);
                    });
                }
            });
        }
        else {
            if (this.isEdit) {
                this.mapProductWidget(this.imgUrl);
                this.widgetService.update(this.productWidget).subscribe(function (res2) {
                    return _this.router.navigate(['../backoffice/widgets']);
                });
            }
        }
    };
    WidgetProductComponent.prototype.mapProductWidget = function (imgUrl) {
        this.productWidget.content = JSON.stringify({
            imageUrl: imgUrl,
            description: this.description,
            link: this.link
        });
        this.productWidget.widgetType = src_app_models_widget_type__WEBPACK_IMPORTED_MODULE_4__["WidgetType"].Product;
    };
    WidgetProductComponent.prototype.cancel = function () {
        this.router.navigate(['../backoffice/widgets']);
    };
    WidgetProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-product',
            template: __webpack_require__(/*! ./widget-product.component.html */ "./src/app/widget/widget-product/widget-product.component.html"),
            styles: [__webpack_require__(/*! ./widget-product.component.scss */ "./src/app/widget/widget-product/widget-product.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_services_widget_service__WEBPACK_IMPORTED_MODULE_3__["WidgetService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], WidgetProductComponent);
    return WidgetProductComponent;
}());



/***/ }),

/***/ "./src/app/widget/widget.module.ts":
/*!*****************************************!*\
  !*** ./src/app/widget/widget.module.ts ***!
  \*****************************************/
/*! exports provided: WidgetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetModule", function() { return WidgetModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm5/kolkov-angular-editor.js");
/* harmony import */ var _widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./widget-list/widget-list.component */ "./src/app/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _widget_html_widget_html_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./widget-html/widget-html.component */ "./src/app/widget/widget-html/widget-html.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _widget_product_widget_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./widget-product/widget-product.component */ "./src/app/widget/widget-product/widget-product.component.ts");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/fesm5/ngx-file-drop.js");












var WidgetModule = /** @class */ (function () {
    function WidgetModule() {
    }
    WidgetModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_7__["WidgetListComponent"], _widget_html_widget_html_component__WEBPACK_IMPORTED_MODULE_8__["WidgetHtmlComponent"], _widget_product_widget_product_component__WEBPACK_IMPORTED_MODULE_10__["WidgetProductComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedMaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_6__["AngularEditorModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_11__["NgxFileDropModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"]
            ]
        })
    ], WidgetModule);
    return WidgetModule;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Programming\GitHub\FirstCMS\cms\PublicSite\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map