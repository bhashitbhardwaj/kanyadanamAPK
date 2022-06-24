(self["webpackChunkkanyadanam"] = self["webpackChunkkanyadanam"] || []).push([["src_app_profile_physicalappearance_physicalappearance_module_ts"],{

/***/ 7348:
/*!*********************************************************************************!*\
  !*** ./src/app/profile/physicalappearance/physicalappearance-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhysicalappearancePageRoutingModule": () => (/* binding */ PhysicalappearancePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _physicalappearance_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./physicalappearance.page */ 5805);




const routes = [
    {
        path: '',
        component: _physicalappearance_page__WEBPACK_IMPORTED_MODULE_0__.PhysicalappearancePage
    }
];
let PhysicalappearancePageRoutingModule = class PhysicalappearancePageRoutingModule {
};
PhysicalappearancePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PhysicalappearancePageRoutingModule);



/***/ }),

/***/ 6752:
/*!*************************************************************************!*\
  !*** ./src/app/profile/physicalappearance/physicalappearance.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhysicalappearancePageModule": () => (/* binding */ PhysicalappearancePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _physicalappearance_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./physicalappearance-routing.module */ 7348);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ 7899);
/* harmony import */ var _physicalappearance_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./physicalappearance.page */ 5805);








let PhysicalappearancePageModule = class PhysicalappearancePageModule {
};
PhysicalappearancePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_7__.IonicSelectableModule,
            _physicalappearance_routing_module__WEBPACK_IMPORTED_MODULE_0__.PhysicalappearancePageRoutingModule
        ],
        declarations: [_physicalappearance_page__WEBPACK_IMPORTED_MODULE_1__.PhysicalappearancePage]
    })
], PhysicalappearancePageModule);



/***/ }),

/***/ 5805:
/*!***********************************************************************!*\
  !*** ./src/app/profile/physicalappearance/physicalappearance.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhysicalappearancePage": () => (/* binding */ PhysicalappearancePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_physicalappearance_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./physicalappearance.page.html */ 7649);
/* harmony import */ var _physicalappearance_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./physicalappearance.page.scss */ 4446);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);




class Port {
}
let PhysicalappearancePage = class PhysicalappearancePage {
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
PhysicalappearancePage.ctorParameters = () => [];
PhysicalappearancePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-physicalappearance',
        template: _raw_loader_physicalappearance_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_physicalappearance_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PhysicalappearancePage);



/***/ }),

/***/ 4446:
/*!*************************************************************************!*\
  !*** ./src/app/profile/physicalappearance/physicalappearance.page.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card-header {\n  background: #f7f7f9 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBoeXNpY2FsYXBwZWFyYW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtBQUNKIiwiZmlsZSI6InBoeXNpY2FsYXBwZWFyYW5jZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC1oZWFkZXJ7XG4gICAgYmFja2dyb3VuZDogI2Y3ZjdmOSAhaW1wb3J0YW50O1xufVxuIl19 */");

/***/ }),

/***/ 7649:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/physicalappearance/physicalappearance.page.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"primary\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center logo\">\n      <img src=\"/assets/images/knnewlogo.png\">\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Edit Physical Details</ion-card-title>\n    </ion-card-header>\n    <ion-list class=\"ion-padding\">\n      <ion-item>\n        <ion-label>Height</ion-label>\n        <ionic-selectable [(ngModel)]=\"port\" [items]=\"ports\" headerColor=\"primary\" placeholder=\"Height\"\n          itemValueField=\"id\" itemTextField=\"name\" [canSearch]=\"true\" (onChange)=\"portChange($event)\">\n        </ionic-selectable>\n      </ion-item>\n      <ion-list>\n        <ion-radio-group value=\"Slim\">\n          <ion-list-header>\n            <ion-label>Body Type?</ion-label>\n          </ion-list-header>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label>Slim</ion-label>\n                <ion-radio slot=\"start\" value=\"Slim\"></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Athletic</ion-label>\n                <ion-radio slot=\"start\" value=\"Athletic\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label>Average</ion-label>\n                <ion-radio slot=\"start\" value=\"Average\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Heavy</ion-label>\n                <ion-radio slot=\"start\" value=\"Heavy\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n      </ion-list>\n      <ion-list>\n        <ion-radio-group value=\"Very Fair\">\n          <ion-list-header>\n            <ion-label>Skin Tone?</ion-label>\n          </ion-list-header>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label>Very Fair</ion-label>\n                <ion-radio slot=\"start\" value=\"Very Fair\"></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Fair</ion-label>\n                <ion-radio slot=\"start\" value=\"Fair\"></ion-radio>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label>Wheatish</ion-label>\n                <ion-radio slot=\"start\" value=\"Wheatish\"></ion-radio>\n              </ion-item>\n              <ion-item>\n                <ion-label>Dark</ion-label>\n                <ion-radio slot=\"start\" value=\"Dark\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n      </ion-list>\n      <ion-list>\n        <ion-radio-group value=\"None\">\n          <ion-list-header>\n            <ion-label>Any Disability?</ion-label>\n          </ion-list-header>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label>None</ion-label>\n                <ion-radio slot=\"start\" value=\"None\"></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Physical Disability</ion-label>\n                <ion-radio slot=\"start\" value=\"Physical Disability\"></ion-radio>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-radio-group>\n      </ion-list>\n      <ion-button expand=\"block\" color=\"primary\">Update Profile</ion-button>\n    </ion-list>\n  </ion-card>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_profile_physicalappearance_physicalappearance_module_ts.js.map