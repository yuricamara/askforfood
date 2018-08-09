webpackJsonp([3],{

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyPageModule", function() { return CompanyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_components_module__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__company__ = __webpack_require__(636);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CompanyPageModule = (function () {
    function CompanyPageModule() {
    }
    CompanyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__company__["a" /* CompanyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__company__["a" /* CompanyPage */]),
            ],
        })
    ], CompanyPageModule);
    return CompanyPageModule;
}());

//# sourceMappingURL=company.module.js.map

/***/ }),

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_forkJoin__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_forkJoin__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CompanyPage = (function () {
    function CompanyPage(alertCtrl, angularFireAuth, companyService, productService, loadingCtrl, navCtrl, navParams, plt) {
        this.alertCtrl = alertCtrl;
        this.angularFireAuth = angularFireAuth;
        this.companyService = companyService;
        this.productService = productService;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.plt = plt;
        this.segment = 'menu';
        this.products = [];
        this.companyKey = this.navParams.get('companyKey');
    }
    CompanyPage.prototype.ionViewDidLoad = function () {
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
    CompanyPage.prototype.ionViewWillEnter = function () {
        this.init();
    };
    CompanyPage.prototype.init = function () {
        if (this.plt.is('core')) {
            this.isCorePlatform = true;
        }
        this.loading = this.loadingCtrl.create({
            content: 'Aguarde...',
            dismissOnPageChange: true
        });
        this.loading.present();
        this.getCompany();
        this.getProducts();
    };
    CompanyPage.prototype.onSegmentChange = function (_a) {
        var value = _a.value;
        this.segment = value;
    };
    // Empresa
    // ***********************************
    CompanyPage.prototype.getCompany = function () {
        var _this = this;
        this.companyService
            .getOne(this.companyKey)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["first"])())
            .subscribe(function (company) {
            if (!company) {
                return;
            }
            _this.company = company;
        }, function (error) {
            console.error(error);
        });
    };
    CompanyPage.prototype.editCompany = function () {
        this.navCtrl.push('CompanyEditPage', {
            companyKey: this.company.key
        });
    };
    CompanyPage.prototype.removeCompany = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            subTitle: 'Remover empresa?',
            buttons: [
                {
                    text: 'Não'
                },
                {
                    text: 'Remover',
                    handler: function () {
                        _this.companyService
                            .removeOne(_this.companyKey)
                            .then(function () {
                            _this.navCtrl.pop();
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    CompanyPage.prototype.toggleFavoriteCompany = function () {
        console.log('toggleFavoriteCompany()');
    };
    // Produtos
    // ***********************************
    CompanyPage.prototype.addProduct = function () {
        this.navCtrl.push('ProductRegisterPage', {
            companyKey: this.company.key
        });
    };
    CompanyPage.prototype.getProducts = function () {
        var _this = this;
        this.productService
            .getAllOfACompany(this.companyKey)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["first"])())
            .subscribe(function (products) {
            _this.products = products.filter(function (product) { return !product.hide; });
            _this.showPage = true;
            _this.loading.dismiss();
        }, function (error) {
            console.error(error);
            _this.loading.dismiss();
        });
    };
    // Navegação
    // **********************************
    CompanyPage.prototype.goToProductPage = function (productKey) {
        this.navCtrl.push('ProductPage', {
            company: this.company,
            productKey: productKey
        });
    };
    CompanyPage.prototype.goToHomePage = function () {
        this.navCtrl.setRoot('HomePage');
    };
    CompanyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-company',template:/*ion-inline-start:"D:\Documents\Repos\Pessoais\askforfood\src\pages\company\company.html"*/'<ion-header>\n  <ion-navbar [hideBackButton]="isCorePlatform">\n    <ion-buttons showWhen="core" left>\n      <button (click)="goToHomePage()" ion-button icon-only>\n        <ion-icon name="home"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      {{ company?.name }}\n    </ion-title>\n    <ion-buttons end>\n      <button\n        *ngIf="company?.createdBy === uid"\n        (click)="editCompany()"\n        ion-button\n        icon-only\n      >\n        <ion-icon name="md-create"></ion-icon>\n      </button>\n      <button\n        *ngIf="company?.createdBy === uid"\n        (click)="removeCompany()"\n        ion-button\n        icon-only\n      >\n        <ion-icon name="ios-trash"></ion-icon>\n      </button>\n      <!--<button-->\n        <!--(click)="toggleFavoriteCompany()"-->\n        <!--ion-button-->\n        <!--icon-only-->\n      <!--&gt;-->\n        <!--<ion-icon name="ios-bookmark-outline"></ion-icon>-->\n      <!--</button>-->\n    </ion-buttons>\n    <ion-buttons\n      cf-button-cart end\n    >\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content [hidden]="!showPage" padding>\n  <div class="cf-content-centralize">\n    <ion-list class="cf-p-company">\n      <ion-item>\n        <ion-thumbnail item-start>\n          <img [src]="\'./assets/imgs/estabelecimentos-logos/\' + (company?.logo || \'no-image.png\')">\n        </ion-thumbnail>\n        <h2 class="cf-p-company-name">\n          {{ company?.name}}\n        </h2>\n        <p>\n          {{company?.category}}\n        </p>\n      </ion-item>\n    </ion-list>\n\n    <!-- Segmentos -->\n    <div padding>\n      <ion-segment\n        (ionChange)="onSegmentChange($event)"\n      >\n        <ion-segment-button value="menu">\n          Cardápio\n        </ion-segment-button>\n        <ion-segment-button value="informations">\n          Informações\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n\n    <div [ngSwitch]="segment" class="cf-p-content--centralize">\n      <!-- Cardápio-->\n      <div *ngSwitchCase="\'menu\'">\n\n        <!-- Btn adicionar produto -->\n        <div class="cf-u-center-children-horizontally">\n          <button\n            *ngIf="company?.createdBy === uid"\n            (click)="addProduct()"\n            ion-button color="secondary"\n          >\n            Adicionar produto\n          </button>\n        </div>\n\n        <!-- Lista de produtos-->\n        <ion-list *ngIf="products.length" class="cf-p-products">\n          <ion-item *ngFor="let product of products"\n                    (click)="goToProductPage(product.key)"\n          >\n            <!--<ion-thumbnail item-start>-->\n              <!--<img [src]="\'./assets/imgs/categorias/\'+product.category+\'.jpg\'">-->\n            <!--</ion-thumbnail>-->\n            <h2 class="cf-p-product-name">\n              {{product.name}}\n            </h2>\n            <h3 class="cf-p-product-description cf-u-text-wrap">\n              {{product.description}}\n            </h3>\n            <div class="cf-p-product-price" item-end>\n              <p *ngIf="product.sale"\n                 class="cf-p-sale-label">\n                Em oferta\n              </p>\n              <p class="cf-p-product-price-value">R$ {{ product.price}}</p>\n            </div>\n          </ion-item>\n        </ion-list>\n        <p *ngIf="!products.length && company?.createdBy !== uid" class="cf-p-products-empty-message">\n          Não há produtos disponíveis\n        </p>\n      </div>\n\n      <!-- Informações-->\n      <div *ngSwitchCase="\'informations\'" class="cf-p-content--centralize">\n        <ion-card *ngIf="company.description">\n          <ion-card-content>\n            <p>{{ company.description}}</p>\n          </ion-card-content>\n        </ion-card>\n\n        <ion-card>\n          <ion-card-header>\n            <span class="cf-p-infos-title">\n              Endereço\n            </span>\n          </ion-card-header>\n          <ion-card-content>\n            <p>{{ company?.address}}</p>\n          </ion-card-content>\n        </ion-card>\n\n        <ion-card>\n          <ion-card-header>\n            <span class="cf-p-infos-title">\n              Horário de Entrega\n            </span>\n          </ion-card-header>\n          <ion-card-content>\n            <p>{{ company?.officeHours}}</p>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\Documents\Repos\Pessoais\askforfood\src\pages\company\company.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_2__services__["b" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_2__services__["c" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], CompanyPage);
    return CompanyPage;
}());

//# sourceMappingURL=company.js.map

/***/ }),

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(5);
var forkJoin_1 = __webpack_require__(349);
Observable_1.Observable.forkJoin = forkJoin_1.forkJoin;
//# sourceMappingURL=forkJoin.js.map

/***/ })

});
//# sourceMappingURL=3.js.map