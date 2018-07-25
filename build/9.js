webpackJsonp([9],{

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyOwnerPageModule", function() { return CompanyOwnerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_owner__ = __webpack_require__(634);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CompanyOwnerPageModule = (function () {
    function CompanyOwnerPageModule() {
    }
    CompanyOwnerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__company_owner__["a" /* CompanyOwnerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__company_owner__["a" /* CompanyOwnerPage */]),
            ],
        })
    ], CompanyOwnerPageModule);
    return CompanyOwnerPageModule;
}());

//# sourceMappingURL=company-owner.module.js.map

/***/ }),

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyOwnerPage; });
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





var CompanyOwnerPage = (function () {
    function CompanyOwnerPage(angularFireAuth, companyService, loadingCtrl, navCtrl, plt) {
        this.angularFireAuth = angularFireAuth;
        this.companyService = companyService;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.plt = plt;
    }
    CompanyOwnerPage.prototype.ionViewDidLoad = function () {
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
    CompanyOwnerPage.prototype.ionViewWillEnter = function () {
        if (this.plt.is('core')) {
            this.isCorePlatform = true;
        }
    };
    CompanyOwnerPage.prototype.init = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Aguarde...',
            dismissOnPageChange: true
        });
        this.loading.present();
        this.getUserCompanies();
    };
    CompanyOwnerPage.prototype.getUserCompanies = function () {
        var _this = this;
        this.companyService
            .getAllFromUser(this.uid)
            .subscribe(function (companies) {
            _this.companies = companies.filter(function (company) { return company.isRemoved !== true; });
            _this.showPage = true;
            _this.loading.dismiss();
        }, function (error) {
            _this.loading.dismiss();
            console.error(error);
        });
    };
    // Navegação
    // ********************************************
    CompanyOwnerPage.prototype.addCompany = function () {
        this.navCtrl.push('CompanyRegisterPage');
    };
    CompanyOwnerPage.prototype.openCompanyPage = function (key) {
        this.navCtrl.push('CompanyPage', { companyKey: key });
    };
    CompanyOwnerPage.prototype.goToHomePage = function () {
        this.navCtrl.setRoot('HomePage');
    };
    CompanyOwnerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-company-owner',template:/*ion-inline-start:"D:\Documents\Repos\Pessoais\askforfood\src\pages\company-owner\company-owner.html"*/'<ion-header>\n  <ion-navbar [hideBackButton]="isCorePlatform">\n    <ion-buttons showWhen="core" left>\n      <button (click)="goToHomePage()" ion-button icon-only>\n        <ion-icon name="home"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Meus Estabelecimentos\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content [hidden]="!showPage" padding>\n  <div class="cf-content-centralize">\n    <p class="cf-p-message">\n      Fique à vontade para criar um estabelecimento como teste com qualquer informação que vier em mente!\n    </p>\n    <div class="cf-u-center-children-horizontally">\n      <button\n        (click)="addCompany()"\n        ion-button color="secondary"\n      >\n        Adicionar estabelecimento\n      </button>\n    </div>\n\n    <ion-list class="cf-p-list l-list-divisible">\n      <ion-item (click)="openCompanyPage(company.key)"\n                *ngFor="let company of companies"\n      >\n        <ion-thumbnail item-start>\n          <img [src]="\'./assets/imgs/estabelecimentos-logos/\' + (company.logo || \'no-image.png\')">\n        </ion-thumbnail>\n        <h2>{{ company.name}}</h2>\n        <p>{{company.category}}</p>\n        <div item-end>\n          <p *ngIf="!company.isApproved">\n            Em aprovação\n          </p>\n        </div>\n      </ion-item>\n    </ion-list>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\Documents\Repos\Pessoais\askforfood\src\pages\company-owner\company-owner.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3__services__["b" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
    ], CompanyOwnerPage);
    return CompanyOwnerPage;
}());

//# sourceMappingURL=company-owner.js.map

/***/ })

});
//# sourceMappingURL=9.js.map