(self["webpackChunkkanyadanam"] = self["webpackChunkkanyadanam"] || []).push([["src_app_profile_contactdetails_contactdetails_module_ts"],{

/***/ 1351:
/*!*************************************************************************!*\
  !*** ./src/app/profile/contactdetails/contactdetails-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactdetailsPageRoutingModule": () => (/* binding */ ContactdetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _contactdetails_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactdetails.page */ 2885);




const routes = [
    {
        path: '',
        component: _contactdetails_page__WEBPACK_IMPORTED_MODULE_0__.ContactdetailsPage
    }
];
let ContactdetailsPageRoutingModule = class ContactdetailsPageRoutingModule {
};
ContactdetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ContactdetailsPageRoutingModule);



/***/ }),

/***/ 1094:
/*!*****************************************************************!*\
  !*** ./src/app/profile/contactdetails/contactdetails.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactdetailsPageModule": () => (/* binding */ ContactdetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _contactdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactdetails-routing.module */ 1351);
/* harmony import */ var _contactdetails_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactdetails.page */ 2885);







let ContactdetailsPageModule = class ContactdetailsPageModule {
};
ContactdetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _contactdetails_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactdetailsPageRoutingModule
        ],
        declarations: [_contactdetails_page__WEBPACK_IMPORTED_MODULE_1__.ContactdetailsPage]
    })
], ContactdetailsPageModule);



/***/ }),

/***/ 2885:
/*!***************************************************************!*\
  !*** ./src/app/profile/contactdetails/contactdetails.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactdetailsPage": () => (/* binding */ ContactdetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_contactdetails_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./contactdetails.page.html */ 2792);
/* harmony import */ var _contactdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactdetails.page.scss */ 3076);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);




let ContactdetailsPage = class ContactdetailsPage {
    constructor() {
        this.myTimeTo = new Date().toISOString();
        this.myTimeFrom = new Date().toISOString();
    }
    ;
    ;
    ngOnInit() {
    }
};
ContactdetailsPage.ctorParameters = () => [];
ContactdetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-contactdetails',
        template: _raw_loader_contactdetails_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_contactdetails_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ContactdetailsPage);



/***/ }),

/***/ 3076:
/*!*****************************************************************!*\
  !*** ./src/app/profile/contactdetails/contactdetails.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card-header {\n  background: #f7f7f9 !important;\n}\n\n.header {\n  background-color: #f7f7f9;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RkZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0FBQ0o7O0FBQ0E7RUFDSSx5QkFBQTtFQUNBLGFBQUE7QUFFSiIsImZpbGUiOiJjb250YWN0ZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC1oZWFkZXJ7XG4gICAgYmFja2dyb3VuZDogI2Y3ZjdmOSAhaW1wb3J0YW50O1xufVxuLmhlYWRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y5O1xuICAgIHBhZGRpbmc6IDE1cHg7XG59Il19 */");

/***/ }),

/***/ 2792:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/contactdetails/contactdetails.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"primary\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center logo\">\n      <img src=\"/assets/images/knnewlogo.png\">\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>My contact Details</ion-card-title>\n    </ion-card-header>\n    <ion-list class=\"ion-padding\">\n      <ion-text color=\"dark\">\n        <h4 class=\"header\">Contact Number</h4>\n      </ion-text>\n      <ion-item>\n        <ion-label position=\"floating\">Enter your mobile number</ion-label>\n        <ion-input value=\"8523882090\" readonly></ion-input>\n      </ion-item>\n      <ion-text color=\"dark\">\n        <h4 class=\"header\">Contact details and display status</h4>\n      </ion-text>\n      <ion-item>\n        <ion-label position=\"floating\">Name of contact person</ion-label>\n        <ion-input></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Relationship with the member</ion-label>\n        <ion-select interface=\"popover\" placeholder=\"Marital Status\">\n          <ion-select-option value=\"brown\">Brown</ion-select-option>\n          <ion-select-option value=\"blonde\">Blonde</ion-select-option>\n          <ion-select-option value=\"black\">Black</ion-select-option>\n          <ion-select-option value=\"red\">Red</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-text color=\"dark\">\n        <h5>Convenient time to call</h5>\n      </ion-text>\n      <ion-item>\n        <ion-label>To</ion-label>\n        <ion-datetime displayFormat=\"h a\" [(ngModel)]=\"myTimeTo\"></ion-datetime>\n      </ion-item>   \n      <ion-item>\n        <ion-label>From</ion-label>\n        <ion-datetime displayFormat=\"h a\" [(ngModel)]=\"myTimeFrom\"></ion-datetime>\n      </ion-item>   \n      <ion-list>\n        <ion-radio-group value=\"b\">\n          <ion-list-header>\n            <ion-label>Contact display setting</ion-label>\n          </ion-list-header>\n      \n          <ion-item>\n            <ion-label>Visible to all Premium Members</ion-label>\n            <ion-radio slot=\"start\" value=\"a\"></ion-radio>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label>Visible to Premium Members you wish to Connect with</ion-label>\n            <ion-radio slot=\"start\" value=\"b\"></ion-radio>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label>Not visible to anyone (Hide Phonenumber)</ion-label>\n            <ion-radio slot=\"start\" value=\"c\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n      </ion-list>\n      <ion-button expand=\"block\" color=\"primary\">Save & Continue</ion-button>\n    </ion-list>\n    </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_profile_contactdetails_contactdetails_module_ts.js.map