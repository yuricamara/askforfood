webpackJsonp([9],{

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyRegisterPageModule", function() { return CompanyRegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_register__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(325);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CompanyRegisterPageModule = (function () {
    function CompanyRegisterPageModule() {
    }
    CompanyRegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__company_register__["a" /* CompanyRegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__company_register__["a" /* CompanyRegisterPage */]),
            ],
        })
    ], CompanyRegisterPageModule);
    return CompanyRegisterPageModule;
}());

//# sourceMappingURL=company-register.module.js.map

/***/ }),

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyRegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CompanyRegisterPage = (function () {
    function CompanyRegisterPage(angularFireAuth, companyService, events, fb, loadingCtrl, menuCtrl, navCtrl, navParams) {
        this.angularFireAuth = angularFireAuth;
        this.companyService = companyService;
        this.events = events;
        this.fb = fb;
        this.loadingCtrl = loadingCtrl;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.createForm();
    }
    CompanyRegisterPage.prototype.ionViewDidLoad = function () {
        this.getUid();
    };
    CompanyRegisterPage.prototype.getUid = function () {
        var _this = this;
        this.angularFireAuth
            .authState
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["first"])())
            .subscribe(function (user) {
            if (!user) {
                return;
            }
            _this.uid = user.uid;
        }, function (error) { return console.error(error); });
    };
    CompanyRegisterPage.prototype.createForm = function () {
        this.form = this.fb.group({
            name: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required
                ]],
            category: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required
                ]],
            description: [''],
            address: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required
                ]],
            officeHours: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required
                ]],
            paymentMethod: ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required
                ]]
        });
    };
    CompanyRegisterPage.prototype.submitForm = function () {
        var _this = this;
        if (this.form.invalid) {
            return;
        }
        this.loading = this.loadingCtrl.create({
            content: 'Aguarde...',
            dismissOnPageChange: true
        });
        this.loading.present();
        var _a = this.form.value, name = _a.name, category = _a.category, description = _a.description, address = _a.address, officeHours = _a.officeHours, paymentMethod = _a.paymentMethod;
        var newCompany = {
            name: name,
            category: category,
            description: description,
            address: address,
            officeHours: officeHours,
            paymentMethod: paymentMethod,
            createdBy: this.uid
        };
        this.companyService
            .create(newCompany)
            .then(function (key) {
            _this.navCtrl.push('CompanyPage', {
                companyKey: key
            });
        }, function (error) {
            console.error(error);
            _this.loading.dismiss();
        });
    };
    CompanyRegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-company-register',template:/*ion-inline-start:"D:\Documents\Repos\Pessoais\askforfood\src\pages\company-register\company-register.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Nova empresa</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form\n    [formGroup]="form"\n    (ngSubmit)="submitForm()"\n    novalidate\n  >\n    <ion-list>\n      <ion-item>\n        <ion-label floating>\n          Nome\n        </ion-label>\n        <ion-input\n          formControlName="name"\n          required\n          [value]="name"\n          type="text">\n        </ion-input>\n      </ion-item>\n      <cf-validation-messages\n        [formGr]="form"\n        formCtrlName="name"\n      ></cf-validation-messages>\n\n      <ion-item>\n        <ion-label floating>\n          Categoria\n        </ion-label>\n        <ion-input\n          formControlName="category"\n          required\n          [value]="category"\n          type="text">\n        </ion-input>\n      </ion-item>\n      <cf-validation-messages\n        [formGr]="form"\n        formCtrlName="category"\n      ></cf-validation-messages>\n\n      <ion-item>\n        <ion-label floating>\n          Descrição (opcional)\n        </ion-label>\n        <ion-input\n          formControlName="description"\n          [value]="description"\n          type="text">\n        </ion-input>\n      </ion-item>\n      <cf-validation-messages\n        [formGr]="form"\n        formCtrlName="description"\n      ></cf-validation-messages>\n\n      <ion-item>\n        <ion-label floating>\n          Endereço\n        </ion-label>\n        <ion-input\n          formControlName="address"\n          required\n          [value]="address"\n          type="text">\n        </ion-input>\n      </ion-item>\n      <cf-validation-messages\n        [formGr]="form"\n        formCtrlName="address"\n      ></cf-validation-messages>\n\n      <ion-item>\n        <ion-label floating>\n          Horário de Atendimento\n        </ion-label>\n        <ion-input\n          formControlName="officeHours"\n          required\n          [value]="officeHours"\n          type="text">\n        </ion-input>\n      </ion-item>\n      <cf-validation-messages\n        [formGr]="form"\n        formCtrlName="officeHours"\n      ></cf-validation-messages>\n\n      <ion-item>\n        <ion-label floating>\n          Método de Pagamento\n        </ion-label>\n        <ion-input\n          formControlName="paymentMethod"\n          required\n          [value]="paymentMethod"\n          type="text">\n        </ion-input>\n      </ion-item>\n      <cf-validation-messages\n        [formGr]="form"\n        formCtrlName="paymentMethod"\n      ></cf-validation-messages>\n\n    </ion-list>\n    <div padding>\n      <button\n        [disabled]="!form.valid"\n        ion-button block\n      >\n        Cadastrar\n      </button>\n    </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"D:\Documents\Repos\Pessoais\askforfood\src\pages\company-register\company-register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4__services__["b" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */]])
    ], CompanyRegisterPage);
    return CompanyRegisterPage;
}());

//# sourceMappingURL=company-register.js.map

/***/ })

});
//# sourceMappingURL=9.js.map