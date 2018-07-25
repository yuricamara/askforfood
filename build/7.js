webpackJsonp([7],{

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_components_module__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home__ = __webpack_require__(661);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomePageModule = (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__home__["a" /* HomePage */])
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(companyService, loadingCtrl, menuCtrl, navCtrl) {
        this.companyService = companyService;
        this.loadingCtrl = loadingCtrl;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.menuCtrl.enable(true);
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.showLoading();
        this.getCompanies();
    };
    HomePage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        this.loading.present();
    };
    HomePage.prototype.getCompanies = function () {
        var _this = this;
        this.companyService
            .getAllApproved()
            .subscribe(function (companies) {
            _this.companies = companies.filter(function (company) {
                return !company.isRemoved;
            });
            _this.showPage = true;
            _this.loading.dismiss();
        }, function (error) {
            _this.loading.dismiss();
            console.error(error);
        });
    };
    HomePage.prototype.openCityPage = function () {
        this.navCtrl.push('CityPage');
    };
    HomePage.prototype.openCompanyPage = function (key) {
        this.navCtrl.push('CompanyPage', { companyKey: key });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Documents\Repos\Pessoais\askforfood\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      AskForFood\n\n    </ion-title>\n\n    <ion-buttons\n\n      cf-button-cart end\n\n    >\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content [hidden]="!showPage" padding>\n\n  <div class="cf-content-centralize">\n\n\n\n    <ion-list class="cf-p-companies cf-l-list-divisible">\n\n      <ion-item (click)="openCompanyPage(company.key)"\n\n        *ngFor="let company of companies"\n\n      >\n\n        <ion-thumbnail item-start>\n\n          <img [src]="\'./assets/imgs/estabelecimentos-logos/\' + (company.logo || \'no-image.png\')">\n\n        </ion-thumbnail>\n\n        <h2 class="cf-p-company-name">\n\n          {{ company.name}}\n\n        </h2>\n\n        <p>{{company.category}}</p>\n\n        <div item-end>\n\n          <p *ngIf="!company.isApproved">\n\n            Em aprovação\n\n          </p>\n\n        </div>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <p *ngIf="!companies?.length">\n\n      Nenhum estabelecimento cadastrado\n\n    </p>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\Repos\Pessoais\askforfood\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services__["b" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=7.js.map