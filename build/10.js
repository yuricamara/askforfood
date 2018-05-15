webpackJsonp([10],{

/***/ 569:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyEditPageModule", function() { return CompanyEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_edit__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(325);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CompanyEditPageModule = (function () {
    function CompanyEditPageModule() {
    }
    CompanyEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__company_edit__["a" /* CompanyEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__company_edit__["a" /* CompanyEditPage */]),
            ],
        })
    ], CompanyEditPageModule);
    return CompanyEditPageModule;
}());

//# sourceMappingURL=company-edit.module.js.map

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
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





var CompanyEditPage = (function () {
    function CompanyEditPage(fb, companyService, loadingCtrl, navCtrl, navParams) {
        this.fb = fb;
        this.companyService = companyService;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.companyKey = this.navParams.get('companyKey');
    }
    CompanyEditPage.prototype.ionViewDidLoad = function () {
        this.getCompany();
    };
    CompanyEditPage.prototype.getCompany = function () {
        var _this = this;
        this.companyService
            .getOne(this.companyKey)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["first"])())
            .subscribe(function (company) {
            _this.company = company;
            _this.createForm();
            _this.showForm = true;
        }, function (error) {
            console.error(error);
        });
    };
    CompanyEditPage.prototype.createForm = function () {
        var _a = this.company, name = _a.name, category = _a.category, description = _a.description, address = _a.address, officeHours = _a.officeHours, paymentMethod = _a.paymentMethod;
        this.form = this.fb.group({
            name: [name, [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
                ]],
            category: [category, [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
                ]],
            description: [description],
            address: [address, [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
                ]],
            officeHours: [officeHours, [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
                ]],
            paymentMethod: [paymentMethod, [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required
                ]]
        });
    };
    CompanyEditPage.prototype.submitForm = function () {
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
        var editCompany = {
            name: name,
            category: category,
            description: description,
            address: address,
            officeHours: officeHours,
            paymentMethod: paymentMethod
        };
        this.companyService
            .updateOne(this.company.key, editCompany)
            .then(function () {
            _this.loading.dismiss();
            _this.navCtrl.getPrevious().data.companyKey = _this.company.key;
            _this.navCtrl.pop();
        }, function (error) {
            console.error(error);
            _this.loading.dismiss();
        });
    };
    CompanyEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-company-edit',template:/*ion-inline-start:"D:\Documents\Repos\Pessoais\askforfood\src\pages\company-edit\company-edit.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Editar empresa</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="cf-content-centralize">\n    <form\n      *ngIf="showForm"\n      [formGroup]="form"\n      (ngSubmit)="submitForm()"\n      novalidate\n    >\n      <ion-list>\n        <ion-item>\n          <ion-label floating>\n            Nome\n          </ion-label>\n          <ion-input\n            formControlName="name"\n            required\n            [value]="name"\n            type="text">\n          </ion-input>\n        </ion-item>\n        <cf-validation-messages\n          [formGr]="form"\n          formCtrlName="name"\n        ></cf-validation-messages>\n\n        <ion-item>\n          <ion-label floating>\n            Categoria\n          </ion-label>\n          <ion-input\n            formControlName="category"\n            required\n            [value]="category"\n            type="text">\n          </ion-input>\n        </ion-item>\n        <cf-validation-messages\n          [formGr]="form"\n          formCtrlName="category"\n        ></cf-validation-messages>\n\n        <ion-item>\n          <ion-label floating>\n            Descrição (opcional)\n          </ion-label>\n          <ion-input\n            formControlName="description"\n            [value]="description"\n            type="text">\n          </ion-input>\n        </ion-item>\n        <cf-validation-messages\n          [formGr]="form"\n          formCtrlName="description"\n        ></cf-validation-messages>\n\n        <ion-item>\n          <ion-label floating>\n            Endereço\n          </ion-label>\n          <ion-input\n            formControlName="address"\n            required\n            [value]="address"\n            type="text">\n          </ion-input>\n        </ion-item>\n        <cf-validation-messages\n          [formGr]="form"\n          formCtrlName="address"\n        ></cf-validation-messages>\n\n        <ion-item>\n          <ion-label floating>\n            Horário de Atendimento\n          </ion-label>\n          <ion-input\n            formControlName="officeHours"\n            required\n            [value]="officeHours"\n            type="text">\n          </ion-input>\n        </ion-item>\n        <cf-validation-messages\n          [formGr]="form"\n          formCtrlName="officeHours"\n        ></cf-validation-messages>\n\n        <ion-item>\n          <ion-label floating>\n            Método de Pagamento\n          </ion-label>\n          <ion-input\n            formControlName="paymentMethod"\n            required\n            [value]="paymentMethod"\n            type="text">\n          </ion-input>\n        </ion-item>\n        <cf-validation-messages\n          [formGr]="form"\n          formCtrlName="paymentMethod"\n        ></cf-validation-messages>\n\n      </ion-list>\n      <div padding>\n        <button\n          [disabled]="!form.valid"\n          ion-button block\n        >\n          Salvar\n        </button>\n      </div>\n    </form>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\Documents\Repos\Pessoais\askforfood\src\pages\company-edit\company-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services__["b" /* CompanyService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], CompanyEditPage);
    return CompanyEditPage;
}());

//# sourceMappingURL=company-edit.js.map

/***/ })

});
//# sourceMappingURL=10.js.map