webpackJsonp([3],{

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePageModule", function() { return UserProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_profile__ = __webpack_require__(599);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserProfilePageModule = (function () {
    function UserProfilePageModule() {
    }
    UserProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_profile__["a" /* UserProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_profile__["a" /* UserProfilePage */]),
            ],
        })
    ], UserProfilePageModule);
    return UserProfilePageModule;
}());

//# sourceMappingURL=user-profile.module.js.map

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfilePage; });
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





var UserProfilePage = (function () {
    function UserProfilePage(angularFireAuth, loadingCtrl, navCtrl, productService, purchaseService) {
        this.angularFireAuth = angularFireAuth;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.productService = productService;
        this.purchaseService = purchaseService;
    }
    UserProfilePage.prototype.ionViewDidLoad = function () {
        this.init();
    };
    UserProfilePage.prototype.init = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Aguarde...',
            dismissOnPageChange: true
        });
        this.loading.present().then(function () {
            _this.angularFireAuth
                .authState
                .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["first"])())
                .subscribe(function (user) {
                if (!user) {
                    return;
                }
                _this.uid = user.uid;
                _this.name = user.displayName;
                _this.getPurchases();
            }, function (error) {
                _this.loading.dismiss();
                console.error(error);
            });
        });
    };
    UserProfilePage.prototype.getPurchases = function () {
        var _this = this;
        this.purchaseService
            .getProductsFromPurchases({
            uid: this.uid
        })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["first"])())
            .subscribe(function (purchasesData) {
            _this.purchasesData = purchasesData;
            if (!_this.purchasesData.length) {
                _this.productsList = [];
                _this.loading.dismiss();
                return;
            }
            _this.products = [];
            _this.purchaseCounter = 0;
            _this.purchasesData.forEach(function (purchaseData) {
                _this.getProduct(purchaseData);
            });
        }, function (error) {
            _this.loading.dismiss();
            console.error(error);
        });
    };
    UserProfilePage.prototype.getProduct = function (purchaseData) {
        var _this = this;
        this.productService
            .getOne(purchaseData.productKey)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["first"])())
            .subscribe(function (p) {
            _this.products.push(p);
            _this.purchaseCounter++;
            if (_this.purchaseCounter === _this.purchasesData.length) {
                _this.createProductsList(_this.products);
            }
        });
    };
    UserProfilePage.prototype.createProductsList = function (products) {
        var productsList = this.purchasesData.map(function (purchase) {
            var productKey = purchase.productKey, timestamp = purchase.timestamp;
            var product = products.find(function (p) { return p.key === productKey; });
            return {
                product: product,
                timestamp: timestamp
            };
        });
        this.productsList = productsList.sort(function (product1, product2) {
            return product2.timestamp - product1.timestamp;
        });
        this.loading.dismiss();
    };
    UserProfilePage.prototype.goToProductPage = function (productKey) {
        this.navCtrl.push('ProductPage', {
            productKey: productKey
        });
    };
    UserProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-profile',template:/*ion-inline-start:"D:\Documents\Repos\Pessoais\askforfood\src\pages\user-profile\user-profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Seus Dados</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="cf-content-centralize">\n    <ion-list *ngIf="productsList">\n      <ion-list-header>\n        Últimas compras\n      </ion-list-header>\n\n      <ion-item *ngIf="!productsList.length" text-center>\n        Você não efetuou nenhuma compra\n      </ion-item>\n\n      <a (click)="goToProductPage(productList.product.key)"\n         *ngFor="let productList of productsList"\n         ion-item\n      >\n        <ion-thumbnail item-start>\n          <img [src]="\'./assets/imgs/categorias/\'+ productList.product.category +\'.jpg\'">\n        </ion-thumbnail>\n        <h2>\n          {{ productList.product.name }}\n        </h2>\n        <p item-end>R$ {{ productList.product.price }}</p>\n      </a>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\Documents\Repos\Pessoais\askforfood\src\pages\user-profile\user-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__services__["c" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_3__services__["d" /* PurchaseService */]])
    ], UserProfilePage);
    return UserProfilePage;
}());

//# sourceMappingURL=user-profile.js.map

/***/ })

});
//# sourceMappingURL=3.js.map