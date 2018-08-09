webpackJsonp([10],{

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyEditPageModule", function() { return CompanyEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_edit__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(346);
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

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(28);
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
        var _a = this.company, name = _a.name, category = _a.category, description = _a.description, address = _a.address, officeHours = _a.officeHours;
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
        var _a = this.form.value, name = _a.name, category = _a.category, description = _a.description, address = _a.address, officeHours = _a.officeHours;
        var editCompany = {
            name: name,
            category: category,
            description: description,
            address: address,
            officeHours: officeHours
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
            selector: 'page-company-edit',template:/*ion-inline-start:"D:\Documents\Repos\Pessoais\askforfood\src\pages\company-edit\company-edit.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Editar empresa</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="cf-content-centralize">\n\n    <form\n\n      *ngIf="showForm"\n\n      [formGroup]="form"\n\n      (ngSubmit)="submitForm()"\n\n      novalidate\n\n    >\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label floating>\n\n            Nome\n\n          </ion-label>\n\n          <ion-input\n\n            formControlName="name"\n\n            required\n\n            [value]="name"\n\n            type="text">\n\n          </ion-input>\n\n        </ion-item>\n\n        <cf-validation-messages\n\n          [formGr]="form"\n\n          formCtrlName="name"\n\n        ></cf-validation-messages>\n\n\n\n        <ion-item>\n\n          <ion-label floating>\n\n            Categoria\n\n          </ion-label>\n\n          <ion-input\n\n            formControlName="category"\n\n            required\n\n            [value]="category"\n\n            type="text">\n\n          </ion-input>\n\n        </ion-item>\n\n        <cf-validation-messages\n\n          [formGr]="form"\n\n          formCtrlName="category"\n\n        ></cf-validation-messages>\n\n\n\n        <ion-item>\n\n          <ion-label floating>\n\n            Descrição (opcional)\n\n          </ion-label>\n\n          <ion-input\n\n            formControlName="description"\n\n            [value]="description"\n\n            type="text">\n\n          </ion-input>\n\n        </ion-item>\n\n        <cf-validation-messages\n\n          [formGr]="form"\n\n          formCtrlName="description"\n\n        ></cf-validation-messages>\n\n\n\n        <ion-item>\n\n          <ion-label floating>\n\n            Endereço\n\n          </ion-label>\n\n          <ion-input\n\n            formControlName="address"\n\n            required\n\n            [value]="address"\n\n            type="text">\n\n          </ion-input>\n\n        </ion-item>\n\n        <cf-validation-messages\n\n          [formGr]="form"\n\n          formCtrlName="address"\n\n        ></cf-validation-messages>\n\n\n\n        <ion-item>\n\n          <ion-label floating>\n\n            Horário de Atendimento\n\n          </ion-label>\n\n          <ion-input\n\n            formControlName="officeHours"\n\n            required\n\n            [value]="officeHours"\n\n            type="text">\n\n          </ion-input>\n\n        </ion-item>\n\n        <cf-validation-messages\n\n          [formGr]="form"\n\n          formCtrlName="officeHours"\n\n        ></cf-validation-messages>\n\n      </ion-list>\n\n      <div class="cf-u-center-children-horizontally" padding>\n\n        <button\n\n          [disabled]="!form.valid"\n\n          ion-button color="secondary"\n\n        >\n\n          Salvar\n\n        </button>\n\n      </div>\n\n    </form>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Documents\Repos\Pessoais\askforfood\src\pages\company-edit\company-edit.html"*/,
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