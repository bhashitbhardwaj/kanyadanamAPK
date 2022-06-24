(self["webpackChunkkanyadanam"] = self["webpackChunkkanyadanam"] || []).push([["src_app_profile_educationprofessiondetails_educationprofessiondetails_module_ts"],{

/***/ 4848:
/*!*************************************************************************************************!*\
  !*** ./src/app/profile/educationprofessiondetails/educationprofessiondetails-routing.module.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationprofessiondetailsPageRoutingModule": () => (/* binding */ EducationprofessiondetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _educationprofessiondetails_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./educationprofessiondetails.page */ 7005);




const routes = [
    {
        path: '',
        component: _educationprofessiondetails_page__WEBPACK_IMPORTED_MODULE_0__.EducationprofessiondetailsPage
    }
];
let EducationprofessiondetailsPageRoutingModule = class EducationprofessiondetailsPageRoutingModule {
};
EducationprofessiondetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EducationprofessiondetailsPageRoutingModule);



/***/ }),

/***/ 1032:
/*!*****************************************************************************************!*\
  !*** ./src/app/profile/educationprofessiondetails/educationprofessiondetails.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationprofessiondetailsPageModule": () => (/* binding */ EducationprofessiondetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _educationprofessiondetails_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./educationprofessiondetails-routing.module */ 4848);
/* harmony import */ var _educationprofessiondetails_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./educationprofessiondetails.page */ 7005);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ 7899);








let EducationprofessiondetailsPageModule = class EducationprofessiondetailsPageModule {
};
EducationprofessiondetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_7__.IonicSelectableModule,
            _educationprofessiondetails_routing_module__WEBPACK_IMPORTED_MODULE_0__.EducationprofessiondetailsPageRoutingModule
        ],
        declarations: [_educationprofessiondetails_page__WEBPACK_IMPORTED_MODULE_1__.EducationprofessiondetailsPage]
    })
], EducationprofessiondetailsPageModule);



/***/ }),

/***/ 7005:
/*!***************************************************************************************!*\
  !*** ./src/app/profile/educationprofessiondetails/educationprofessiondetails.page.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationprofessiondetailsPage": () => (/* binding */ EducationprofessiondetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_educationprofessiondetails_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./educationprofessiondetails.page.html */ 1170);
/* harmony import */ var _educationprofessiondetails_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./educationprofessiondetails.page.scss */ 9397);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);




class Port {
}
let EducationprofessiondetailsPage = class EducationprofessiondetailsPage {
    constructor() {
        this.ports = [
            { id: 1, name: 'Tokai' },
            { id: 2, name: 'Vladivostok' },
            { id: 3, name: 'Navlakhi' }
        ];
    }
    portChange(event) {
        console.log('port:', event.value);
    }
    ngOnInit() {
    }
};
EducationprofessiondetailsPage.ctorParameters = () => [];
EducationprofessiondetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-educationprofessiondetails',
        template: _raw_loader_educationprofessiondetails_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_educationprofessiondetails_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EducationprofessiondetailsPage);



/***/ }),

/***/ 9397:
/*!*****************************************************************************************!*\
  !*** ./src/app/profile/educationprofessiondetails/educationprofessiondetails.page.scss ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card-header {\n  background: #f7f7f9 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkdWNhdGlvbnByb2Zlc3Npb25kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0FBQ0oiLCJmaWxlIjoiZWR1Y2F0aW9ucHJvZmVzc2lvbmRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtaGVhZGVye1xuICAgIGJhY2tncm91bmQ6ICNmN2Y3ZjkgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ 1170:
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/educationprofessiondetails/educationprofessiondetails.page.html ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"primary\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center logo\">\n      <img src=\"/assets/images/knnewlogo.png\">\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Qualification & Profession Details</ion-card-title>\n    </ion-card-header>\n    <ion-list class=\"ion-padding\">\n      <ion-item>\n        <ion-label>Your education level</ion-label>\n        <ionic-selectable\n          [(ngModel)]=\"port\"\n          [items]=\"ports\"\n          [isMultiple]=\"true\"\n          placeholder=\"Your Education level\"\n          [isConfirmButtonEnabled]=\"true\"\n          headerColor=\"primary\"\n          itemValueField=\"id\"\n          itemTextField=\"name\"\n          [canSearch]=\"true\"\n          (onChange)=\"portChange($event)\">\n        </ionic-selectable>\n      </ion-item>\n      <ion-item>\n        <ion-label>Your education Field</ion-label>\n        <ionic-selectable\n          [(ngModel)]=\"port\"\n          [items]=\"ports\"\n          placeholder=\"Your Education Field\"\n          headerColor=\"primary\"\n          itemValueField=\"id\"\n          itemTextField=\"name\"\n          [canSearch]=\"true\"\n          (onChange)=\"portChange($event)\">\n        </ionic-selectable>\n      </ion-item>\n      <ion-item>\n        <ion-label>Your Occupation</ion-label>\n        <ionic-selectable\n          [(ngModel)]=\"port\"\n          [items]=\"ports\"\n          placeholder=\"Your Occupation\"\n          headerColor=\"primary\"\n          itemValueField=\"id\"\n          itemTextField=\"name\"\n          [canSearch]=\"true\"\n          (onChange)=\"portChange($event)\">\n        </ionic-selectable>\n      </ion-item>\n      <ion-item>\n        <ion-label>You work with</ion-label>\n        <ion-select interface=\"popover\" placeholder=\"You work with\">\n          <ion-select-option value=\"brown\">Brown</ion-select-option>\n          <ion-select-option value=\"blonde\">Blonde</ion-select-option>\n          <ion-select-option value=\"black\">Black</ion-select-option>\n          <ion-select-option value=\"red\">Red</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Annual Income</ion-label>\n        <ion-select interface=\"popover\" placeholder=\"Annual Income\">\n          <ion-select-option value=\"brown\">Brown</ion-select-option>\n          <ion-select-option value=\"blonde\">Blonde</ion-select-option>\n          <ion-select-option value=\"black\">Black</ion-select-option>\n          <ion-select-option value=\"red\">Red</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-button expand=\"block\" color=\"primary\">Update Profile</ion-button>\n    </ion-list>\n    </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_profile_educationprofessiondetails_educationprofessiondetails_module_ts.js.map