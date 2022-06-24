(self["webpackChunkkanyadanam"] = self["webpackChunkkanyadanam"] || []).push([["src_app_profile_contactfilter_contactfilter_module_ts"],{

/***/ 9481:
/*!***********************************************************************!*\
  !*** ./src/app/profile/contactfilter/contactfilter-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactfilterPageRoutingModule": () => (/* binding */ ContactfilterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _contactfilter_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactfilter.page */ 2179);




const routes = [
    {
        path: '',
        component: _contactfilter_page__WEBPACK_IMPORTED_MODULE_0__.ContactfilterPage
    }
];
let ContactfilterPageRoutingModule = class ContactfilterPageRoutingModule {
};
ContactfilterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ContactfilterPageRoutingModule);



/***/ }),

/***/ 5687:
/*!***************************************************************!*\
  !*** ./src/app/profile/contactfilter/contactfilter.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactfilterPageModule": () => (/* binding */ ContactfilterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _contactfilter_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactfilter-routing.module */ 9481);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ 7899);
/* harmony import */ var _contactfilter_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactfilter.page */ 2179);








let ContactfilterPageModule = class ContactfilterPageModule {
};
ContactfilterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_7__.IonicSelectableModule,
            _contactfilter_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactfilterPageRoutingModule
        ],
        declarations: [_contactfilter_page__WEBPACK_IMPORTED_MODULE_1__.ContactfilterPage]
    })
], ContactfilterPageModule);



/***/ }),

/***/ 2179:
/*!*************************************************************!*\
  !*** ./src/app/profile/contactfilter/contactfilter.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactfilterPage": () => (/* binding */ ContactfilterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_contactfilter_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./contactfilter.page.html */ 7493);
/* harmony import */ var _contactfilter_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactfilter.page.scss */ 7388);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);




class Port {
}
let ContactfilterPage = class ContactfilterPage {
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
ContactfilterPage.ctorParameters = () => [];
ContactfilterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-contactfilter',
        template: _raw_loader_contactfilter_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_contactfilter_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ContactfilterPage);



/***/ }),

/***/ 7388:
/*!***************************************************************!*\
  !*** ./src/app/profile/contactfilter/contactfilter.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card-header {\n  background: #f7f7f9 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RmaWx0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7QUFDSiIsImZpbGUiOiJjb250YWN0ZmlsdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLWhlYWRlcntcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y5ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ 7493:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/contactfilter/contactfilter.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"primary\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center logo\">\n      <img src=\"/assets/images/knnewlogo.png\">\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Who can contact me?</ion-card-title>\n      <ion-card-subtitle>Requests from members who do not meet the following criteria will be filtered out</ion-card-subtitle>\n    </ion-card-header>\n    <ion-list class=\"ion-padding\">\n      <ion-item>\n        <ion-range min=\"18\" max=\"45\"  dual-knobs pin [value]=\"{ lower: 21, upper: 36 }\">\n          <ion-label slot=\"start\">Age 18</ion-label>\n           <ion-label slot=\"end\">Age 45</ion-label>\n        </ion-range>\n      </ion-item>\n      <ion-item>\n        <ion-label>Height From</ion-label>\n        <ionic-selectable\n          [(ngModel)]=\"port\"\n          [items]=\"ports\"\n          placeholder=\"Height From\"\n          itemValueField=\"id\"\n          headerColor=\"primary\"\n          itemTextField=\"name\"\n          [canSearch]=\"true\"\n          (onChange)=\"portChange($event)\">\n        </ionic-selectable>\n      </ion-item>\n      <ion-item>\n        <ion-label>Height To</ion-label>\n        <ionic-selectable\n          [(ngModel)]=\"port\"\n          [items]=\"ports\"\n          itemValueField=\"id\"\n          placeholder=\"Height To\"\n          itemTextField=\"name\"\n          headerColor=\"primary\"\n          [canSearch]=\"true\"\n          (onChange)=\"portChange($event)\">\n        </ionic-selectable>\n      </ion-item>\n      <ion-item>\n        <ion-label>Marital Status</ion-label>\n        <ion-select multiple=\"true\" interface=\"popover\" placeholder=\"Marital Status\">\n          <ion-select-option value=\"brown\">Brown</ion-select-option>\n          <ion-select-option value=\"blonde\">Blonde</ion-select-option>\n          <ion-select-option value=\"black\">Black</ion-select-option>\n          <ion-select-option value=\"red\">Red</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Religion</ion-label>\n        <ion-select multiple=\"true\" interface=\"popover\" placeholder=\"Religion\">\n          <ion-select-option value=\"brown\">Brown</ion-select-option>\n          <ion-select-option value=\"blonde\">Blonde</ion-select-option>\n          <ion-select-option value=\"black\">Black</ion-select-option>\n          <ion-select-option value=\"red\">Red</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Mother Tongue</ion-label>\n        <ionic-selectable\n          [(ngModel)]=\"port\"\n          [items]=\"ports\"\n          [isMultiple]=\"true\"\n          itemValueField=\"id\"\n          placeholder=\"Mother Tongue\"\n          [isConfirmButtonEnabled]=\"true\"\n          headerColor=\"primary\"\n          itemTextField=\"name\"\n          [canSearch]=\"true\"\n          (onChange)=\"portChange($event)\">\n        </ionic-selectable>\n      </ion-item>\n      <ion-item>\n        <ion-label>Community</ion-label>\n        <ionic-selectable\n          [(ngModel)]=\"port\"\n          [items]=\"ports\"\n          [isMultiple]=\"true\"\n          placeholder=\"Community\"\n          [isConfirmButtonEnabled]=\"true\"\n          headerColor=\"primary\"\n          itemValueField=\"id\"\n          itemTextField=\"name\"\n          [canSearch]=\"true\"\n          (onChange)=\"portChange($event)\">\n        </ionic-selectable>\n      </ion-item>\n      <ion-button expand=\"block\" color=\"primary\">Save & Continue</ion-button>\n    </ion-list>\n    </ion-card>\n    </ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_profile_contactfilter_contactfilter_module_ts.js.map