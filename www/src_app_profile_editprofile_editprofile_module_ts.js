(self["webpackChunkkanyadanam"] = self["webpackChunkkanyadanam"] || []).push([["src_app_profile_editprofile_editprofile_module_ts"],{

/***/ 8176:
/*!*******************************************************************!*\
  !*** ./src/app/profile/editprofile/editprofile-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditprofilePageRoutingModule": () => (/* binding */ EditprofilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _editprofile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editprofile.page */ 1299);




const routes = [
    {
        path: '',
        component: _editprofile_page__WEBPACK_IMPORTED_MODULE_0__.EditprofilePage
    }
];
let EditprofilePageRoutingModule = class EditprofilePageRoutingModule {
};
EditprofilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditprofilePageRoutingModule);



/***/ }),

/***/ 8325:
/*!***********************************************************!*\
  !*** ./src/app/profile/editprofile/editprofile.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditprofilePageModule": () => (/* binding */ EditprofilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _editprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editprofile-routing.module */ 8176);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ 7899);
/* harmony import */ var _editprofile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editprofile.page */ 1299);








let EditprofilePageModule = class EditprofilePageModule {
};
EditprofilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_7__.IonicSelectableModule,
            _editprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditprofilePageRoutingModule
        ],
        declarations: [_editprofile_page__WEBPACK_IMPORTED_MODULE_1__.EditprofilePage]
    })
], EditprofilePageModule);



/***/ }),

/***/ 1299:
/*!*********************************************************!*\
  !*** ./src/app/profile/editprofile/editprofile.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditprofilePage": () => (/* binding */ EditprofilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_editprofile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./editprofile.page.html */ 1602);
/* harmony import */ var _editprofile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editprofile.page.scss */ 9462);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);




class Port {
}
let EditprofilePage = class EditprofilePage {
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
EditprofilePage.ctorParameters = () => [];
EditprofilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-editprofile',
        template: _raw_loader_editprofile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_editprofile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditprofilePage);



/***/ }),

/***/ 9462:
/*!***********************************************************!*\
  !*** ./src/app/profile/editprofile/editprofile.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card-header {\n  background: #f7f7f9 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRwcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0FBQ0oiLCJmaWxlIjoiZWRpdHByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtaGVhZGVye1xuICAgIGJhY2tncm91bmQ6ICNmN2Y3ZjkgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ 1602:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/editprofile/editprofile.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"primary\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center logo\">\n      <img src=\"/assets/images/knnewlogo.png\">\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Edit Profile</ion-card-title>\n    </ion-card-header>\n    <ion-list class=\"ion-padding\">\n      <ion-item>\n        <ion-label position=\"floating\">Please enter your full name</ion-label>\n        <ion-input></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Enter your mobile number</ion-label>\n        <ion-input></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Email Address</ion-label>\n        <ion-input></ion-input>\n      </ion-item>\n      <ion-list>\n        <ion-radio-group value=\"Male\">\n          <ion-list-header>\n            <ion-label>Gender</ion-label>\n          </ion-list-header>\n          <ion-item>\n            <ion-label>Male</ion-label>\n            <ion-radio slot=\"start\" value=\"Male\"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>Female</ion-label>\n            <ion-radio slot=\"start\" value=\"Female\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n      </ion-list>\n      <ion-item>\n        <ion-label>Create profile for</ion-label>\n        <ion-select interface=\"popover\" placeholder=\"Create profile for\">\n          <ion-select-option value=\"brown\">Brown</ion-select-option>\n          <ion-select-option value=\"blonde\">Blonde</ion-select-option>\n          <ion-select-option value=\"black\">Black</ion-select-option>\n          <ion-select-option value=\"red\">Red</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Date of Birth (MM/DD/YYYY)</ion-label>\n        <ion-datetime displayFormat=\"MM/DD/YYYY\" min=\"1950-01-01\"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label>Religion</ion-label>\n        <ion-select interface=\"popover\" placeholder=\"Religion\">\n          <ion-select-option value=\"brown\">Brown</ion-select-option>\n          <ion-select-option value=\"blonde\">Blonde</ion-select-option>\n          <ion-select-option value=\"black\">Black</ion-select-option>\n          <ion-select-option value=\"red\">Red</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Aadhar Card Number</ion-label>\n        <ion-input></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Community</ion-label>\n        <ionic-selectable\n          [(ngModel)]=\"port\"\n          [items]=\"ports\"\n          headerColor=\"primary\"\n          placeholder=\"Community\"\n          itemValueField=\"id\"\n          itemTextField=\"name\"\n          [canSearch]=\"true\"\n          (onChange)=\"portChange($event)\">\n        </ionic-selectable>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Sub Community</ion-label>\n        <ion-input></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Mother Tongue</ion-label>\n        <ionic-selectable\n          [(ngModel)]=\"port\"\n          [items]=\"ports\"\n          headerColor=\"primary\"\n          placeholder=\"Mother Tongue\"\n          itemValueField=\"id\"\n          itemTextField=\"name\"\n          [canSearch]=\"true\"\n          (onChange)=\"portChange($event)\">\n        </ionic-selectable>\n      </ion-item>\n      <ion-item>\n        <ion-label>Your Marital Status</ion-label>\n        <ion-select interface=\"popover\" placeholder=\"Your Marital Status\">\n          <ion-select-option value=\"brown\">Brown</ion-select-option>\n          <ion-select-option value=\"blonde\">Blonde</ion-select-option>\n          <ion-select-option value=\"black\">Black</ion-select-option>\n          <ion-select-option value=\"red\">Red</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Country</ion-label>\n        <ionic-selectable\n          [(ngModel)]=\"port\"\n          [items]=\"ports\"\n          headerColor=\"primary\"\n          placeholder=\"Country\"\n          itemValueField=\"id\"\n          itemTextField=\"name\"\n          [canSearch]=\"true\"\n          (onChange)=\"portChange($event)\">\n        </ionic-selectable>\n      </ion-item>\n      <ion-item>\n        <ion-label>State</ion-label>\n        <ionic-selectable\n          [(ngModel)]=\"port\"\n          [items]=\"ports\"\n          headerColor=\"primary\"\n          placeholder=\"State\"\n          itemValueField=\"id\"\n          itemTextField=\"name\"\n          [canSearch]=\"true\"\n          (onChange)=\"portChange($event)\">\n        </ionic-selectable>\n      </ion-item>\n      <ion-item>\n        <ion-label>City</ion-label>\n        <ionic-selectable\n          [(ngModel)]=\"port\"\n          [items]=\"ports\"\n          headerColor=\"primary\"\n          placeholder=\"City\"\n          itemValueField=\"id\"\n          itemTextField=\"name\"\n          [canSearch]=\"true\"\n          (onChange)=\"portChange($event)\">\n        </ionic-selectable>\n      </ion-item>\n      <ion-item>\n        <ion-label>What's Your diet?</ion-label>\n        <ion-select interface=\"popover\" placeholder=\"What's Your diet?\">\n          <ion-select-option value=\"brown\">Brown</ion-select-option>\n          <ion-select-option value=\"blonde\">Blonde</ion-select-option>\n          <ion-select-option value=\"black\">Black</ion-select-option>\n          <ion-select-option value=\"red\">Red</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-list>\n        <ion-radio-group value=\"biff\">\n          <ion-list-header>\n            <ion-label>Smoking?</ion-label>\n          </ion-list-header>\n      \n          <ion-item>\n            <ion-label>No</ion-label>\n            <ion-radio slot=\"start\" value=\"biff\"></ion-radio>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label>Occasionally</ion-label>\n            <ion-radio slot=\"start\" value=\"griff\"></ion-radio>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label>Yes</ion-label>\n            <ion-radio slot=\"start\" value=\"buford\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n      </ion-list>\n      <ion-list>\n        <ion-radio-group value=\"biff\">\n          <ion-list-header>\n            <ion-label>Drinking?</ion-label>\n          </ion-list-header>\n      \n          <ion-item>\n            <ion-label>No</ion-label>\n            <ion-radio slot=\"start\" value=\"biff\"></ion-radio>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label>Occasionally</ion-label>\n            <ion-radio slot=\"start\" value=\"griff\"></ion-radio>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label>Yes</ion-label>\n            <ion-radio slot=\"start\" value=\"buford\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n      </ion-list>\n      <ion-item>\n        <ion-label position=\"stacked\">About/Description (min 50 character)</ion-label>\n        <ion-textarea minlength=50 rows=\"5\" cols=\"20\"  placeholder=\"I am glad you are interested in my profile. I have completed my Bachelors. I am a grounded person, who values family happiness and hard work.I am looking for a girl to marry who would understand me.\"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Family Description (min 50\n          charactor)</ion-label>\n        <ion-textarea minlength=50 ></ion-textarea>\n      </ion-item>\n      <ion-button expand=\"block\" color=\"primary\">Update Profile</ion-button>\n    </ion-list>\n  </ion-card>\n \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_profile_editprofile_editprofile_module_ts.js.map