webpackJsonp([5],{

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRegisterPageModule", function() { return ProductRegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_register__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(325);
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

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductRegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(159);
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
            _this.navCtrl.pop();
        }, function (error) {
            console.error(error);
            _this.loading.dismiss();
        });
    };
    ProductRegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product-register',template:/*ion-inline-start:"D:\Documents\Repos\Pessoais\askforfood\src\pages\product-register\product-register.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Novo produto</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <form\n\n    [formGroup]="form"\n\n    (ngSubmit)="submitForm()"\n\n    novalidate\n\n  >\n\n    <ion-list>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Nome</ion-label>\n\n        <ion-input\n\n          formControlName="name"\n\n          required\n\n          [value]="name"\n\n          type="text">\n\n        </ion-input>\n\n      </ion-item>\n\n      <cf-validation-messages\n\n        [formGr]="form"\n\n        formCtrlName="name"\n\n      ></cf-validation-messages>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Descrição (opcional)</ion-label>\n\n        <ion-input\n\n          formControlName="description"\n\n          [value]="description"\n\n          type="text">\n\n        </ion-input>\n\n      </ion-item>\n\n      <cf-validation-messages\n\n        [formGr]="form"\n\n        formCtrlName="description"\n\n      ></cf-validation-messages>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Preço</ion-label>\n\n        <ion-input\n\n          formControlName="price"\n\n          required\n\n          [value]="price"\n\n          type="number">\n\n        </ion-input>\n\n      </ion-item>\n\n      <cf-validation-messages\n\n        [formGr]="form"\n\n        formCtrlName="price"\n\n      ></cf-validation-messages>\n\n\n\n      <ion-item>\n\n        <ion-label floating>Categoria</ion-label>\n\n        <ion-select formControlName="category">\n\n          <ion-option value="bebida">Bebida</ion-option>\n\n          <ion-option value="carne">Carne</ion-option>\n\n          <ion-option value="frango">Frango</ion-option>\n\n          <ion-option value="massa">Massa</ion-option>\n\n          <ion-option value="peixe">Peixe</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <cf-validation-messages\n\n        [formGr]="form"\n\n        formCtrlName="category"\n\n      ></cf-validation-messages>\n\n\n\n      <ion-item>\n\n        <ion-label>Em oferta</ion-label>\n\n        <ion-toggle formControlName="sale"></ion-toggle>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n    <div padding>\n\n      <button\n\n        [disabled]="!form.valid"\n\n        ion-button block\n\n      >\n\n        Salvar\n\n      </button>\n\n    </div>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\Repos\Pessoais\askforfood\src\pages\product-register\product-register.html"*/
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