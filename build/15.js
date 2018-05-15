webpackJsonp([15],{

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartStep1PageModule", function() { return CartStep1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_step1__ = __webpack_require__(581);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CartStep1PageModule = (function () {
    function CartStep1PageModule() {
    }
    CartStep1PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cart_step1__["a" /* CartStep1Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cart_step1__["a" /* CartStep1Page */]),
            ],
        })
    ], CartStep1PageModule);
    return CartStep1PageModule;
}());

//# sourceMappingURL=cart-step1.module.js.map

/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartStep1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(160);
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





var CartStep1Page = (function () {
    function CartStep1Page(angularFireAuth, cartService, loadingCtrl, navCtrl, productService) {
        this.angularFireAuth = angularFireAuth;
        this.cartService = cartService;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.productService = productService;
        this.companies = [];
        this.products = [];
    }
    CartStep1Page.prototype.ionViewDidLoad = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Aguarde...',
            dismissOnPageChange: true
        });
        this.loading.present();
        this.getAllProductsFromCart();
    };
    CartStep1Page.prototype.getAllProductsFromCart = function () {
        var _this = this;
        this.cartService
            .getAllSkus()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["first"])())
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(function (skus) {
            var productsSubscription = [];
            skus.forEach(function (sku) {
                var _subscription = _this.productService.getOne(sku);
                productsSubscription.push(_subscription);
            });
            return productsSubscription;
        }))
            .subscribe(function (productsSubscription) {
            if (!productsSubscription) {
                return;
            }
            var products = [];
            var i = 0;
            var priceTotal = 0;
            productsSubscription.forEach(function (productSubscription) {
                productSubscription
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["first"])())
                    .subscribe(function (product) {
                    products.push(product);
                    priceTotal += +product.price;
                    i++;
                    if (i === products.length) {
                        _this.priceTotal = priceTotal;
                        _this.products = products;
                        _this.loading.dismiss();
                    }
                });
            });
        }, function (error) {
            console.error(error);
            _this.loading.dismiss();
        });
    };
    CartStep1Page.prototype.goToProductPage = function (productKey) {
        this.navCtrl.push('ProductPage', {
            productKey: productKey
        });
    };
    CartStep1Page.prototype.goToNextStepPage = function () {
        var _this = this;
        this.angularFireAuth
            .authState
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["first"])())
            .subscribe(function (user) {
            if (!user) {
                _this.navCtrl.push('EntrancePage', {
                    nextPage: 'CartStep2Page'
                });
                return;
            }
            _this.navCtrl.push('CartStep2Page');
        }, function (error) { return console.error(error); });
    };
    CartStep1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart-step1',template:/*ion-inline-start:"D:\Documents\Repos\Pessoais\askforfood\src\pages\cart-step1\cart-step1.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Meu Carrinho</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="cf-content-centralize">\n    <ion-list>\n      <a (click)="goToProductPage(product.key)"\n        *ngFor="let product of products"\n        ion-item\n      >\n        <ion-thumbnail item-start>\n          <img [src]="\'./assets/imgs/categorias/\'+ product.category +\'.jpg\'">\n        </ion-thumbnail>\n        <h2>\n          {{ product.name }}\n        </h2>\n        <p item-end>R$ {{ product.price }}</p>\n      </a>\n    </ion-list>\n\n    <p class="p-price-total">\n      <strong>Total</strong> R${{ priceTotal }}\n    </p>\n\n    <button\n      (click)="goToNextStepPage()"\n      ion-button block\n    >\n      Continuar\n    </button>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"D:\Documents\Repos\Pessoais\askforfood\src\pages\cart-step1\cart-step1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3__services__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__services__["c" /* ProductService */]])
    ], CartStep1Page);
    return CartStep1Page;
}());

//# sourceMappingURL=cart-step1.js.map

/***/ })

});
//# sourceMappingURL=15.js.map