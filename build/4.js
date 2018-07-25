webpackJsonp([4],{

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageModule", function() { return ProductPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProductPageModule = (function () {
    function ProductPageModule() {
    }
    ProductPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__product__["a" /* ProductPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product__["a" /* ProductPage */]),
            ],
        })
    ], ProductPageModule);
    return ProductPageModule;
}());

//# sourceMappingURL=product.module.js.map

/***/ }),

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(99);
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





var ProductPage = (function () {
    function ProductPage(alertCtrl, angularFireAuth, cartService, companyService, loadingCtrl, navCtrl, navParams, plt, productService) {
        this.alertCtrl = alertCtrl;
        this.angularFireAuth = angularFireAuth;
        this.cartService = cartService;
        this.companyService = companyService;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.plt = plt;
        this.productService = productService;
        this.productKey = this.navParams.get('productKey');
    }
    ProductPage.prototype.ionViewWillEnter = function () {
        if (this.plt.is('core')) {
            this.isCorePlatform = true;
        }
    };
    ProductPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.angularFireAuth
            .authState
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["first"])())
            .subscribe(function (user) {
            if (!user) {
                return;
            }
            _this.uid = user.uid;
        }, function (error) { return console.error(error); });
    };
    ProductPage.prototype.ionViewDidEnter = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Aguarde...',
            dismissOnPageChange: true
        });
        this.loading.present();
        this.getProduct();
        this.checkIfProductIsInCart();
    };
    ProductPage.prototype.getProduct = function () {
        var _this = this;
        this.productService
            .getOne(this.productKey)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["first"])())
            .subscribe(function (product) {
            if (!product) {
                // TODO: exibir produto que foi removido da loja com uma tag de indisponível.
                _this.cartService
                    .removeOneSku(_this.productKey);
                _this.showPage = true;
                _this.loading.dismiss();
                return;
            }
            _this.product = product;
            _this.getCompany();
        }, function (error) {
            console.error(error);
        });
    };
    ProductPage.prototype.getCompany = function () {
        var _this = this;
        this.companyService
            .getOne(this.product.companyKey)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["first"])())
            .subscribe(function (company) {
            if (!company) {
                return;
            }
            _this.company = company;
            _this.showPage = true;
            _this.loading.dismiss();
        }, function (error) {
            _this.loading.dismiss();
            console.error(error);
        });
    };
    // Ações
    // ***********************************
    ProductPage.prototype.editProduct = function () {
        this.navCtrl.push('ProductEditPage', {
            productKey: this.productKey
        });
    };
    ProductPage.prototype.removeProduct = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            subTitle: 'Remover produto?',
            buttons: [
                {
                    text: 'Não'
                },
                {
                    text: 'Remover',
                    handler: function () {
                        _this.productService
                            .removeOne(_this.productKey)
                            .then(function () {
                            _this.navCtrl.getPrevious().data.companyKey = _this.company.key;
                            _this.navCtrl.pop();
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    // Cart
    // ***********************************
    ProductPage.prototype.addProductToCart = function () {
        var _this = this;
        this.cartService
            .addOneSku(this.productKey)
            .then(function () {
            _this.isProductInCart = true;
        }, function (error) { return console.error(error); });
    };
    ProductPage.prototype.checkIfProductIsInCart = function () {
        var _this = this;
        this.cartService
            .isSkuinCart(this.productKey)
            .then(function (isProductInCart) {
            _this.isProductInCart = isProductInCart;
        }, function (error) { return console.error(error); });
    };
    ProductPage.prototype.removeProductFromCart = function () {
        var _this = this;
        this.cartService
            .removeOneSku(this.productKey)
            .then(function () {
            _this.isProductInCart = false;
        }, function (error) { return console.error(error); });
    };
    // Navegação
    // **********************************
    ProductPage.prototype.goToHomePage = function () {
        this.navCtrl.setRoot('HomePage');
    };
    ProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product',template:/*ion-inline-start:"D:\Documents\Repos\Pessoais\askforfood\src\pages\product\product.html"*/'<ion-header>\n  <ion-navbar [hideBackButton]="isCorePlatform">\n    <ion-buttons showWhen="core" left>\n      <button (click)="goToHomePage()" ion-button icon-only>\n        <ion-icon name="home"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      {{product?.name}}\n    </ion-title>\n    <ion-buttons end>\n      <button\n        *ngIf="company?.createdBy === uid"\n        (click)="editProduct()"\n        ion-button\n        icon-only\n      >\n        <ion-icon name="md-create"></ion-icon>\n      </button>\n      <button\n        *ngIf="company?.createdBy === uid"\n        (click)="removeProduct()"\n        ion-button\n        icon-only\n      >\n        <ion-icon name="ios-trash"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons\n      cf-button-cart end\n    >\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content [hidden]="!showPage" padding>\n  <div *ngIf="product" class="cf-content-centralize">\n    <div class="cf-p-product"\n    >\n      <img class="cf-p-product_image"\n           height="110" width="110"\n           [src]="\'./assets/imgs/categorias/\'+product?.category+\'.jpg\'"\n      >\n      <h2 class="cf-p-product_content-title">\n        {{product?.name}}\n      </h2>\n      <p class="cf-p-product_content-description">\n        {{product?.description}}\n      </p>\n      <p class="cf-p-product_content-price">\n        R$ {{product?.price}} <span *ngIf="product?.sale" class="cf-p-sale-label">em oferta</span>\n      </p>\n    </div>\n    <div class="cf-u-center-children-horizontally" *ngIf="product">\n      <button\n        *ngIf="!product?.hide && isProductInCart"\n        (click)="removeProductFromCart()"\n        ion-button outline color="secondary"\n      >\n        Remover do carrinho\n      </button>\n      <button\n        *ngIf="!product?.hide && !isProductInCart"\n        (click)="addProductToCart()"\n        ion-button color="secondary"\n      >\n        Adicionar ao carrinho\n      </button>\n      <button\n        *ngIf="product?.hide"\n        disabled\n        ion-button color="secondary"\n      >\n        Produto esgotado\n      </button>\n    </div>\n  </div>\n  <div *ngIf="!product" class="cf-p-products-empty-message">\n    Produto removido da loja\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\Documents\Repos\Pessoais\askforfood\src\pages\product\product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3__services__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_3__services__["b" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__services__["c" /* ProductService */]])
    ], ProductPage);
    return ProductPage;
}());

//# sourceMappingURL=product.js.map

/***/ })

});
//# sourceMappingURL=4.js.map