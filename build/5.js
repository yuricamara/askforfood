webpackJsonp([5],{

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRegisterPageModule", function() { return ProductRegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_register__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProductRegisterPageModule = (function () {
    function ProductRegisterPageModule() {
    }
    ProductRegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__product_register__["a" /* ProductRegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product_register__["a" /* ProductRegisterPage */]),
            ],
        })
    ], ProductRegisterPageModule);
    return ProductRegisterPageModule;
}());

//# sourceMappingURL=product-register.module.js.map

/***/ }),

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductRegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
* Página ProductRegisterPage
* - Registro de um novo produto pelo administrador da empresa
* */
var ProductRegisterPage = (function () {
    function ProductRegisterPage(fb, loadingCtrl, navCtrl, navParams, productService) {
        this.fb = fb;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productService = productService;
        this.companyKey = this.navParams.get('companyKey');
        this.createForm();
    }
    ProductRegisterPage.prototype.ionViewDidLoad = function () {
    };
    ProductRegisterPage.prototype.createForm = function () {
        this.form = this.fb.group({
            name: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
                ]],
            description: [''],
            price: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
                ]],
            category: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
                ]],
            sale: [false]
        });
    };
    ProductRegisterPage.prototype.submitForm = function () {
        var _this = this;
        if (this.form.invalid) {
            return;
        }
        var _a = this.form.value, name = _a.name, description = _a.description, price = _a.price, category = _a.category, sale = _a.sale;
        this.loading = this.loadingCtrl.create({
            content: 'Aguarde...'
        });
        this.loading.present();
        this.productService
            .create({
            companyKey: this.companyKey,
            name: name, description: description, price: price, category: category, sale: sale
        })
            .then(function (key) {
            _this.loading.dismiss();
            _this.navCtrl.getPrevious().data.companyKey = _this.companyKey;
            debugger;
            _this.navCtrl.pop();
        }, function (error) {
            console.error(error);
            _this.loading.dismiss();
        });
    };
    ProductRegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product-register',template:/*ion-inline-start:"D:\Documents\Repos\Pessoais\askforfood\src\pages\product-register\product-register.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Novo produto</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="cf-content-centralize">\n    <form\n      [formGroup]="form"\n      (ngSubmit)="submitForm()"\n      novalidate\n    >\n      <ion-list>\n\n        <ion-item>\n          <ion-label floating>Nome</ion-label>\n          <ion-input\n            formControlName="name"\n            required\n            [value]="name"\n            type="text">\n          </ion-input>\n        </ion-item>\n        <cf-validation-messages\n          [formGr]="form"\n          formCtrlName="name"\n        ></cf-validation-messages>\n\n        <ion-item>\n          <ion-label floating>Descrição (opcional)</ion-label>\n          <ion-input\n            formControlName="description"\n            [value]="description"\n            type="text">\n          </ion-input>\n        </ion-item>\n        <cf-validation-messages\n          [formGr]="form"\n          formCtrlName="description"\n        ></cf-validation-messages>\n\n        <ion-item>\n          <ion-label floating>Preço</ion-label>\n          <ion-input\n            formControlName="price"\n            required\n            [value]="price"\n            type="number">\n          </ion-input>\n        </ion-item>\n        <cf-validation-messages\n          [formGr]="form"\n          formCtrlName="price"\n        ></cf-validation-messages>\n\n        <ion-item>\n          <ion-label floating>Categoria</ion-label>\n          <ion-select formControlName="category">\n            <ion-option value="bebida">Bebida</ion-option>\n            <ion-option value="carne">Carne</ion-option>\n            <ion-option value="frango">Frango</ion-option>\n            <ion-option value="massa">Massa</ion-option>\n            <ion-option value="peixe">Peixe</ion-option>\n          </ion-select>\n        </ion-item>\n        <cf-validation-messages\n          [formGr]="form"\n          formCtrlName="category"\n        ></cf-validation-messages>\n\n        <ion-item>\n          <ion-label>Em oferta</ion-label>\n          <ion-toggle formControlName="sale"></ion-toggle>\n        </ion-item>\n\n      </ion-list>\n      <div class="cf-u-center-children-horizontally" padding>\n        <button\n          [disabled]="!form.valid"\n          ion-button color="secondary"\n        >\n          Salvar\n        </button>\n      </div>\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\Documents\Repos\Pessoais\askforfood\src\pages\product-register\product-register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services__["c" /* ProductService */]])
    ], ProductRegisterPage);
    return ProductRegisterPage;
}());

//# sourceMappingURL=product-register.js.map

/***/ })

});
//# sourceMappingURL=5.js.map