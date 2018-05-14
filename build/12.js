webpackJsonp([12],{

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartStep4PageModule", function() { return CartStep4PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_step4__ = __webpack_require__(584);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CartStep4PageModule = (function () {
    function CartStep4PageModule() {
    }
    CartStep4PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cart_step4__["a" /* CartStep4Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cart_step4__["a" /* CartStep4Page */]),
            ],
        })
    ], CartStep4PageModule);
    return CartStep4PageModule;
}());

//# sourceMappingURL=cart-step4.module.js.map

/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartStep4Page; });
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





var CartStep4Page = (function () {
    function CartStep4Page(angularFireAuth, cartService, navCtrl, purchaseService) {
        this.angularFireAuth = angularFireAuth;
        this.cartService = cartService;
        this.navCtrl = navCtrl;
        this.purchaseService = purchaseService;
    }
    CartStep4Page.prototype.ionViewDidLoad = function () {
        this.getUid();
    };
    CartStep4Page.prototype.getUid = function () {
        var _this = this;
        this.angularFireAuth
            .authState
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["first"])())
            .subscribe(function (user) {
            if (!user) {
                return;
            }
            _this.uid = user.uid;
            _this.getAllSkus();
        }, function (error) { return console.error(error); });
    };
    CartStep4Page.prototype.getAllSkus = function () {
        var _this = this;
        this.cartService
            .getAllSkus()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["first"])())
            .subscribe(function (products) {
            if (!products.length) {
                return;
            }
            var productsKey = '';
            products.forEach(function (product) {
                productsKey += product + " "; // Manter espaço
            });
            _this.addProductsToPurchases(productsKey);
            _this.emptyCartFromUserCart();
        });
    };
    CartStep4Page.prototype.emptyCartFromUserCart = function () {
        this.cartService
            .emptyCart()
            .then(function () { return console.log('Produtos removidos do carrinho'); }, function (error) { return console.error(error); });
    };
    CartStep4Page.prototype.addProductsToPurchases = function (productsKey) {
        this.purchaseService
            .addProductsToPurchases({
            uid: this.uid,
            productsKey: productsKey
        })
            .then(function () { return console.log('Produtos adicionados ao histórico de compras'); }, function (error) { return console.error(error); });
    };
    CartStep4Page.prototype.goToHomePage = function () {
        this.navCtrl.setRoot('HomePage');
    };
    CartStep4Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart-step4',template:/*ion-inline-start:"D:\Documents\Repos\Pessoais\askforfood\src\pages\cart-step4\cart-step4.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons left>\n\n      <button (click)="goToHomePage()" ion-button icon-only>\n\n        <ion-icon name="home"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>\n\n      Compra Concluída\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-card-content>\n\n      Compra concluída com sucesso!\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\Repos\Pessoais\askforfood\src\pages\cart-step4\cart-step4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3__services__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__services__["d" /* PurchaseService */]])
    ], CartStep4Page);
    return CartStep4Page;
}());

//# sourceMappingURL=cart-step4.js.map

/***/ })

});
//# sourceMappingURL=12.js.map