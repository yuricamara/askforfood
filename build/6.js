webpackJsonp([6],{

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditPageModule", function() { return ProductEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_components_module__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_edit__ = __webpack_require__(662);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProductEditPageModule = (function () {
    function ProductEditPageModule() {
    }
    ProductEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__product_edit__["a" /* ProductEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__product_edit__["a" /* ProductEditPage */]),
            ],
        })
    ], ProductEditPageModule);
    return ProductEditPageModule;
}());

//# sourceMappingURL=product-edit.module.js.map

/***/ }),

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductEditPage = (function () {
    function ProductEditPage(fb, loadingCtrl, navCtrl, navParams, productService) {
        this.fb = fb;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productService = productService;
        this.productKey = this.navParams.get('productKey');
    }
    ProductEditPage.prototype.ionViewDidLoad = function () {
        this.getProduct();
    };
    ProductEditPage.prototype.getProduct = function () {
        var _this = this;
        this.productService
            .getOne(this.productKey)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["first"])())
            .subscribe(function (product) {
            _this.product = product;
            _this.createForm();
            _this.showForm = true;
        }, function (error) {
            console.error(error);
        });
    };
    ProductEditPage.prototype.createForm = function () {
        var _a = this.product, name = _a.name, description = _a.description, price = _a.price, category = _a.category, sale = _a.sale;
        this.form = this.fb.group({
            name: [name, [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
                ]],
            description: [description],
            price: [price, [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
                ]],
            category: [category, [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
                ]],
            sale: [sale]
        });
    };
    ProductEditPage.prototype.submitForm = function () {
        var _this = this;
        if (this.form.invalid) {
            return;
        }
        var _a = this.form.value, name = _a.name, description = _a.description, price = _a.price, category = _a.category, sale = _a.sale;
        this.loading = this.loadingCtrl.create({
            content: 'Aguarde...',
            dismissOnPageChange: true
        });
        this.loading.present();
        this.productService
            .updateOne({
            productKey: this.product.key,
            name: name, description: description, price: price, category: category, sale: sale
        })
            .then(function () {
            _this.navCtrl.getPrevious().data.productKey = _this.product.key;
            _this.navCtrl.pop();
        }, function (error) {
            console.error(error);
            _this.loading.dismiss();
        });
    };
    ProductEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product-edit',template:/*ion-inline-start:"D:\Documents\Repos\Pessoais\askforfood\src\pages\product-edit\product-edit.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Editar produto</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="cf-content-centralize">\n    <form\n      *ngIf="showForm"\n      [formGroup]="form"\n      (ngSubmit)="submitForm()"\n      novalidate\n    >\n      <ion-list>\n\n        <ion-item>\n          <ion-label floating>Nome</ion-label>\n          <ion-input\n            formControlName="name"\n            required\n            [value]="name"\n            type="text">\n          </ion-input>\n        </ion-item>\n        <cf-validation-messages\n          [formGr]="form"\n          formCtrlName="name"\n        ></cf-validation-messages>\n\n        <ion-item>\n          <ion-label floating>Descrição (opcional)</ion-label>\n          <ion-input\n            formControlName="description"\n            [value]="description"\n            type="text">\n          </ion-input>\n        </ion-item>\n        <cf-validation-messages\n          [formGr]="form"\n          formCtrlName="description"\n        ></cf-validation-messages>\n\n        <ion-item>\n          <ion-label floating>Preço</ion-label>\n          <ion-input\n            formControlName="price"\n            required\n            [value]="price"\n            type="number">\n          </ion-input>\n        </ion-item>\n        <cf-validation-messages\n          [formGr]="form"\n          formCtrlName="price"\n        ></cf-validation-messages>\n\n        <ion-item>\n          <ion-label floating>Categoria</ion-label>\n          <ion-select formControlName="category">\n            <ion-option value="entrada">Entrada</ion-option>\n            <ion-option value="refeicao">Refeição</ion-option>\n            <ion-option value="salada">Salada</ion-option>\n            <ion-option value="bebida">Bebida</ion-option>\n            <ion-option value="Sobremesa">Sobremesa</ion-option>\n          </ion-select>\n        </ion-item>\n        <cf-validation-messages\n          [formGr]="form"\n          formCtrlName="category"\n        ></cf-validation-messages>\n\n        <ion-item>\n          <ion-label>Em oferta</ion-label>\n          <ion-toggle formControlName="sale"></ion-toggle>\n        </ion-item>\n      </ion-list>\n\n      <div class="cf-u-center-children-horizontally" padding>\n        <button\n          [disabled]="!form.valid"\n          ion-button color="secondary"\n        >\n          Salvar\n        </button>\n      </div>\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\Documents\Repos\Pessoais\askforfood\src\pages\product-edit\product-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services__["c" /* ProductService */]])
    ], ProductEditPage);
    return ProductEditPage;
}());

//# sourceMappingURL=product-edit.js.map

/***/ })

});
//# sourceMappingURL=6.js.map