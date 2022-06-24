(self["webpackChunkkanyadanam"] = self["webpackChunkkanyadanam"] || []).push([["src_app_profile_editpartnerprofile_editpartnerprofile_module_ts"],{

/***/ 3644:
/*!*********************************************************************************!*\
  !*** ./src/app/profile/editpartnerprofile/editpartnerprofile-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditpartnerprofilePageRoutingModule": () => (/* binding */ EditpartnerprofilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _editpartnerprofile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editpartnerprofile.page */ 8583);




const routes = [
    {
        path: '',
        component: _editpartnerprofile_page__WEBPACK_IMPORTED_MODULE_0__.EditpartnerprofilePage
    }
];
let EditpartnerprofilePageRoutingModule = class EditpartnerprofilePageRoutingModule {
};
EditpartnerprofilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditpartnerprofilePageRoutingModule);



/***/ }),

/***/ 3102:
/*!*************************************************************************!*\
  !*** ./src/app/profile/editpartnerprofile/editpartnerprofile.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditpartnerprofilePageModule": () => (/* binding */ EditpartnerprofilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _editpartnerprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editpartnerprofile-routing.module */ 3644);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ 7899);
/* harmony import */ var _editpartnerprofile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editpartnerprofile.page */ 8583);








let EditpartnerprofilePageModule = class EditpartnerprofilePageModule {
};
EditpartnerprofilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_7__.IonicSelectableModule,
            _editpartnerprofile_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditpartnerprofilePageRoutingModule
        ],
        declarations: [_editpartnerprofile_page__WEBPACK_IMPORTED_MODULE_1__.EditpartnerprofilePage]
    })
], EditpartnerprofilePageModule);



/***/ }),

/***/ 8583:
/*!***********************************************************************!*\
  !*** ./src/app/profile/editpartnerprofile/editpartnerprofile.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditpartnerprofilePage": () => (/* binding */ EditpartnerprofilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_editpartnerprofile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./editpartnerprofile.page.html */ 7872);
/* harmony import */ var _editpartnerprofile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editpartnerprofile.page.scss */ 1304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);




class Port {
}
let EditpartnerprofilePage = class EditpartnerprofilePage {
    constructor() {
        this.form = [
            { val: 'Doesnt matter', isChecked: true },
            { val: 'Self', isChecked: false },
            { val: 'Parent / Guardian', isChecked: false },
            { val: 'Sibling / Friend /Others', isChecked: false }
        ];
        this.diet = [
            { val: 'Doesnt matter', isChecked: true },
            { val: 'Vegetarian', isChecked: false },
            { val: 'Non-Vegetarian', isChecked: false },
            { val: 'Vegan', isChecked: false }
        ];
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
EditpartnerprofilePage.ctorParameters = () => [];
EditpartnerprofilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-editpartnerprofile',
        template: _raw_loader_editpartnerprofile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_editpartnerprofile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditpartnerprofilePage);



/***/ }),

/***/ 1304:
/*!*************************************************************************!*\
  !*** ./src/app/profile/editpartnerprofile/editpartnerprofile.page.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card-header {\n  background: #f7f7f9 !important;\n}\n\n.header {\n  background-color: #f7f7f9;\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRwYXJ0bmVycHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtBQUNKOztBQUNBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0FBRUoiLCJmaWxlIjoiZWRpdHBhcnRuZXJwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLWhlYWRlcntcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y5ICFpbXBvcnRhbnQ7XG59XG4uaGVhZGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjk7XG4gICAgcGFkZGluZzogMTVweDtcbn0iXX0= */");

/***/ }),

/***/ 7872:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/editpartnerprofile/editpartnerprofile.page.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"primary\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-text-center logo\">\n      <img src=\"/assets/images/knnewlogo.png\">\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Partner Preferences</ion-card-title>\n      <ion-card-subtitle>Tell us what you are looking for in a life partner</ion-card-subtitle>\n    </ion-card-header>\n    <ion-list class=\"ion-padding\">\n      <ion-item>\n        <ion-range min=\"18\" max=\"45\"  dual-knobs pin [value]=\"{ lower: 21, upper: 36 }\">\n          <ion-label slot=\"start\">Age 18</ion-label>\n           <ion-label slot=\"end\">Age 45</ion-label>\n        </ion-range>\n      </ion-item>\n      <ion-item>\n        <ion-label>Height From</ion-label>\n        <ionic-selectable\n          [(ngModel)]=\"port\"\n          [items]=\"ports\"\n          placeholder=\"Height From\"\n          itemValueField=\"id\"\n          headerColor=\"primary\"\n          itemTextField=\"name\"\n          [canSearch]=\"true\"\n          (onChange)=\"portChange($event)\">\n        </ionic-selectable>\n      </ion-item>\n      <ion-item>\n        <ion-label>Height To</ion-label>\n        <ionic-selectable\n          [(ngModel)]=\"port\"\n          [items]=\"ports\"\n          itemValueField=\"id\"\n          placeholder=\"Height To\"\n          itemTextField=\"name\"\n          headerColor=\"primary\"\n          [canSearch]=\"true\"\n          (onChange)=\"portChange($event)\">\n        </ionic-selectable>\n      </ion-item>\n      <ion-item>\n        <ion-label>Marital Status</ion-label>\n        <ion-select multiple=\"true\" interface=\"popover\" placeholder=\"Marital Status\">\n          <ion-select-option value=\"brown\">Brown</ion-select-option>\n          <ion-select-option value=\"blonde\">Blonde</ion-select-option>\n          <ion-select-option value=\"black\">Black</ion-select-option>\n          <ion-select-option value=\"red\">Red</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Religion</ion-label>\n        <ion-select multiple=\"true\" interface=\"popover\" placeholder=\"Religion\">\n          <ion-select-option value=\"brown\">Brown</ion-select-option>\n          <ion-select-option value=\"blonde\">Blonde</ion-select-option>\n          <ion-select-option value=\"black\">Black</ion-select-option>\n          <ion-select-option value=\"red\">Red</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Mother Tongue</ion-label>\n        <ionic-selectable\n          [(ngModel)]=\"port\"\n          [items]=\"ports\"\n          [isMultiple]=\"true\"\n          itemValueField=\"id\"\n          placeholder=\"Mother Tongue\"\n          [isConfirmButtonEnabled]=\"true\"\n          headerColor=\"primary\"\n          itemTextField=\"name\"\n          [canSearch]=\"true\"\n          (onChange)=\"portChange($event)\">\n        </ionic-selectable>\n      </ion-item>\n      <ion-item>\n        <ion-label>Community</ion-label>\n        <ionic-selectable\n          [(ngModel)]=\"port\"\n          [items]=\"ports\"\n          [isMultiple]=\"true\"\n          placeholder=\"Community\"\n          [isConfirmButtonEnabled]=\"true\"\n          headerColor=\"primary\"\n          itemValueField=\"id\"\n          itemTextField=\"name\"\n          [canSearch]=\"true\"\n          (onChange)=\"portChange($event)\">\n        </ionic-selectable>\n      </ion-item>\n      <ion-text color=\"dark\">\n        <h4 class=\"header\"> Location Details</h4>\n      </ion-text>\n      <ion-item>\n        <ion-label>Country in Living</ion-label>\n        <ionic-selectable\n          [(ngModel)]=\"port\"\n          [items]=\"ports\"\n          [isMultiple]=\"true\"\n          placeholder=\"Country in Living\"\n          [isConfirmButtonEnabled]=\"true\"\n          headerColor=\"primary\"\n          itemValueField=\"id\"\n          itemTextField=\"name\"\n          [canSearch]=\"true\"\n          (onChange)=\"portChange($event)\">\n        </ionic-selectable>\n      </ion-item>\n      <ion-item>\n        <ion-label>State in Living</ion-label>\n        <ionic-selectable\n          [(ngModel)]=\"port\"\n          [items]=\"ports\"\n          [isMultiple]=\"true\"\n          placeholder=\"State in Living\"\n          [isConfirmButtonEnabled]=\"true\"\n          headerColor=\"primary\"\n          itemValueField=\"id\"\n          itemTextField=\"name\"\n          [canSearch]=\"true\"\n          (onChange)=\"portChange($event)\">\n        </ionic-selectable>\n      </ion-item>\n      <ion-text color=\"dark\">\n        <h4 class=\"header\">Education & Profession Details</h4>\n      </ion-text>\n      <ion-item>\n        <ion-label>Education</ion-label>\n        <ionic-selectable\n          [(ngModel)]=\"port\"\n          [items]=\"ports\"\n          [isMultiple]=\"true\"\n          placeholder=\"Education\"\n          [isConfirmButtonEnabled]=\"true\"\n          headerColor=\"primary\"\n          itemValueField=\"id\"\n          itemTextField=\"name\"\n          [canSearch]=\"true\"\n          (onChange)=\"portChange($event)\">\n        </ionic-selectable>\n      </ion-item>\n      <ion-item>\n        <ion-label>Workign With</ion-label>\n        <ion-select multiple=\"true\" interface=\"popover\" placeholder=\"Marital Status\">\n          <ion-select-option value=\"brown\">Brown</ion-select-option>\n          <ion-select-option value=\"blonde\">Blonde</ion-select-option>\n          <ion-select-option value=\"black\">Black</ion-select-option>\n          <ion-select-option value=\"red\">Red</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Profession Area</ion-label>\n        <ionic-selectable\n          [(ngModel)]=\"port\"\n          [items]=\"ports\"\n          [isMultiple]=\"true\"\n          placeholder=\"Profession Area\"\n          [isConfirmButtonEnabled]=\"true\"\n          headerColor=\"primary\"\n          itemValueField=\"id\"\n          itemTextField=\"name\"\n          [canSearch]=\"true\"\n          (onChange)=\"portChange($event)\">\n        </ionic-selectable>\n      </ion-item>\n      <ion-item>\n        <ion-label>Annual Income</ion-label>\n        <ion-select interface=\"popover\" placeholder=\"Marital Status\">\n          <ion-select-option value=\"brown\">Brown</ion-select-option>\n          <ion-select-option value=\"blonde\">Blonde</ion-select-option>\n          <ion-select-option value=\"black\">Black</ion-select-option>\n          <ion-select-option value=\"red\">Red</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-text color=\"dark\">\n        <h4 class=\"header\">Other Details</h4>\n      </ion-text>\n      <ion-text color=\"dark\">\n        <h5>Profile created by</h5>\n      </ion-text>\n      <ion-item *ngFor=\"let entry of form\">\n        <ion-label>{{entry.val}}</ion-label>\n        <ion-checkbox slot=\"start\" [(ngModel)]=\"entry.isChecked\"></ion-checkbox>\n      </ion-item>\n      <ion-text color=\"dark\">\n        <h5>Diet</h5>\n      </ion-text>\n      <ion-item *ngFor=\"let entry of diet\">\n        <ion-label>{{entry.val}}</ion-label>\n        <ion-checkbox slot=\"start\" [(ngModel)]=\"entry.isChecked\"></ion-checkbox>\n      </ion-item>\n      <ion-button expand=\"block\" color=\"primary\">Save & Continue</ion-button>\n    </ion-list>\n  </ion-card>\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_profile_editpartnerprofile_editpartnerprofile_module_ts.js.map