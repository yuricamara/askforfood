webpackJsonp([13],{

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartStep3PageModule", function() { return CartStep3PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_step3__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(325);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CartStep3PageModule = (function () {
    function CartStep3PageModule() {
    }
    CartStep3PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cart_step3__["a" /* CartStep3Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cart_step3__["a" /* CartStep3Page */]),
            ],
        })
    ], CartStep3PageModule);
    return CartStep3PageModule;
}());

//# sourceMappingURL=cart-step3.module.js.map

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartStep3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartStep3Page = (function () {
    function CartStep3Page(fb, navCtrl) {
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.createForm();
    }
    CartStep3Page.prototype.createForm = function () {
        this.form = this.fb.group({
            state: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required
                ]],
            city: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required
                ]],
            addressLine1: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required
                ]],
            addressLine2: ['', []],
            zip: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required
                ]]
        });
    };
    CartStep3Page.prototype.onFormSubmit = function () {
        if (this.form.invalid) {
            return;
        }
        this.navCtrl.setRoot('CartStep4Page');
    };
    CartStep3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart-step3',template:/*ion-inline-start:"D:\Documents\Repos\Pessoais\askforfood\src\pages\cart-step3\cart-step3.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Endereço de Entrega\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="cf-content-centralize">\n    <form\n      [formGroup]="form"\n      (ngSubmit)="onFormSubmit()"\n      novalidate\n    >\n      <ion-list>\n        <!-- Endereço Linha 1 -->\n        <ion-item>\n          <ion-label floating>\n            Endereço\n          </ion-label>\n          <ion-input\n            formControlName="addressLine1"\n          >\n          </ion-input>\n        </ion-item>\n        <cf-validation-messages\n          [formGr]="form"\n          formCtrlName="addressLine1"\n        ></cf-validation-messages>\n\n        <!-- Endereço Linha 2 -->\n        <ion-item>\n          <ion-label floating>\n            Complemento (opcional)\n          </ion-label>\n          <ion-input\n            formControlName="addressLine2"\n          >\n          </ion-input>\n        </ion-item>\n        <!-- Estado -->\n        <ion-item>\n          <ion-label floating>\n            Estado\n          </ion-label>\n          <ion-input\n            formControlName="state"\n          >\n          </ion-input>\n        </ion-item>\n        <cf-validation-messages\n          [formGr]="form"\n          formCtrlName="state"\n        ></cf-validation-messages>\n\n        <!-- Cidade -->\n        <ion-item>\n          <ion-label floating>\n            Cidade\n          </ion-label>\n          <ion-input\n            formControlName="city"\n          >\n          </ion-input>\n        </ion-item>\n        <cf-validation-messages\n          [formGr]="form"\n          formCtrlName="city"\n        ></cf-validation-messages>\n\n        <!-- Zip -->\n        <ion-item>\n          <ion-label floating>\n            CEP\n          </ion-label>\n          <ion-input\n            formControlName="zip"\n          >\n          </ion-input>\n        </ion-item>\n        <cf-validation-messages\n          [formGr]="form"\n          formCtrlName="zip"\n        ></cf-validation-messages>\n      </ion-list>\n      <button\n        ion-button\n        class="cf-ut-btn-centralize"\n      >\n        Finalizar\n      </button>\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\Documents\Repos\Pessoais\askforfood\src\pages\cart-step3\cart-step3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */]])
    ], CartStep3Page);
    return CartStep3Page;
}());

//# sourceMappingURL=cart-step3.js.map

/***/ })

});
//# sourceMappingURL=13.js.map