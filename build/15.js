webpackJsonp([15],{

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageModule", function() { return AdminPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin__ = __webpack_require__(628);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdminPageModule = (function () {
    function AdminPageModule() {
    }
    AdminPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__admin__["a" /* AdminPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__admin__["a" /* AdminPage */]),
            ],
        })
    ], AdminPageModule);
    return AdminPageModule;
}());

//# sourceMappingURL=admin.module.js.map

/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
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





var AdminPage = (function () {
    function AdminPage(angularFireAuth, companyService, loadingCtrl, navCtrl, plt) {
        this.angularFireAuth = angularFireAuth;
        this.companyService = companyService;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.plt = plt;
    }
    AdminPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.angularFireAuth
            .authState
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["first"])())
            .subscribe(function (user) {
            if (!user) {
                return;
            }
            _this.uid = user.uid;
            _this.init();
        }, function (error) { return console.error(error); });
    };
    AdminPage.prototype.ionViewWillEnter = function () {
        if (this.plt.is('core')) {
            this.isCorePlatform = true;
        }
    };
    AdminPage.prototype.init = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Aguarde...',
            dismissOnPageChange: true
        });
        this.loading.present();
        this.gelAllCompanies();
    };
    AdminPage.prototype.gelAllCompanies = function () {
        var _this = this;
        this.companyService
            .getAll()
            .subscribe(function (companies) {
            _this.companies = companies;
            _this.showPage = true;
            _this.loading.dismiss();
        }, function (error) {
            _this.loading.dismiss();
            console.error(error);
        });
    };
    // Navegação
    // ********************************************
    AdminPage.prototype.openCompanyPage = function (key) {
        this.navCtrl.push('CompanyPage', { companyKey: key });
    };
    AdminPage.prototype.goToHomePage = function () {
        this.navCtrl.setRoot('HomePage');
    };
    AdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin',template:/*ion-inline-start:"D:\Documents\Repos\Pessoais\askforfood\src\pages\admin\admin.html"*/'<ion-header>\n  <ion-navbar [hideBackButton]="isCorePlatform">\n    <ion-buttons showWhen="core" left>\n      <button (click)="goToHomePage()" ion-button icon-only>\n        <ion-icon name="home"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Admin\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content [hidden]="!showPage" padding>\n  <div class="cf-content-centralize">\n    <ion-list class="l-list-divisible">\n      <ion-item (click)="openCompanyPage(company.key)"\n                *ngFor="let company of companies"\n      >\n        <ion-thumbnail item-start>\n          <img [src]="\'./assets/imgs/estabelecimentos-logos/\' + (company.logo || \'no-image.png\')">\n        </ion-thumbnail>\n        <h2>{{ company.name}}</h2>\n        <p>{{company.category}}</p>\n        <div item-end>\n          <p *ngIf="!company.isApproved">\n            Em aprovação\n          </p>\n          <p *ngIf="company.isRemoved">\n            Removida\n          </p>\n        </div>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\Documents\Repos\Pessoais\askforfood\src\pages\admin\admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3__services__["b" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], AdminPage);
    return AdminPage;
}());

//# sourceMappingURL=admin.js.map

/***/ })

});
//# sourceMappingURL=15.js.map