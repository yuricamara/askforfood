webpackJsonp([17],{

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cart_service__ = __webpack_require__(405);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__cart_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__company_service__ = __webpack_require__(409);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__company_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_service__ = __webpack_require__(547);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__product_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__purchase_service__ = __webpack_require__(548);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__purchase_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__(549);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__user_service__["a"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 185;

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		603,
		16
	],
	"../pages/admin/admin.module": [
		604,
		15
	],
	"../pages/cart-step1/cart-step1.module": [
		605,
		14
	],
	"../pages/cart-step2/cart-step2.module": [
		606,
		13
	],
	"../pages/cart-step3/cart-step3.module": [
		607,
		12
	],
	"../pages/cart-step4/cart-step4.module": [
		608,
		11
	],
	"../pages/company-edit/company-edit.module": [
		609,
		10
	],
	"../pages/company-owner/company-owner.module": [
		610,
		9
	],
	"../pages/company-register/company-register.module": [
		611,
		8
	],
	"../pages/company/company.module": [
		612,
		3
	],
	"../pages/entrance/entrance.module": [
		613,
		0
	],
	"../pages/home/home.module": [
		614,
		7
	],
	"../pages/product-edit/product-edit.module": [
		615,
		6
	],
	"../pages/product-register/product-register.module": [
		616,
		5
	],
	"../pages/product/product.module": [
		617,
		4
	],
	"../pages/signin/signin.module": [
		618,
		2
	],
	"../pages/signup/signup.module": [
		619,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 230;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(550);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2____["a" /* CfButtonCartComponent */],
                __WEBPACK_IMPORTED_MODULE_2____["b" /* CfValidationMessagesComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2____["a" /* CfButtonCartComponent */],
                __WEBPACK_IMPORTED_MODULE_2____["b" /* CfValidationMessagesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2____["a" /* CfButtonCartComponent */],
                __WEBPACK_IMPORTED_MODULE_2____["b" /* CfValidationMessagesComponent */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error_handler_helper__ = __webpack_require__(577);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__error_handler_helper__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__limits_helper__ = __webpack_require__(578);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__limits_helper__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__regex_helper__ = __webpack_require__(579);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__regex_helper__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return limitsHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return regexHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var limitsHelper = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* InjectionToken */]('limitsHelperObject');
var regexHelper = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* InjectionToken */]('regexHelperObject');
//# sourceMappingURL=app.tokens.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(363);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_storage__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_components_module__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__helpers_helpers_module__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__config_environment__ = __webpack_require__(602);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















console.log('env', __WEBPACK_IMPORTED_MODULE_14__config_environment__["a" /* environment */].env);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_14__config_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_storage__["a" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_12__helpers_helpers_module__["a" /* HelpersModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                    backButtonText: ''
                }, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin/admin.module#AdminPageModule', name: 'AdminPage', segment: 'admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cart-step1/cart-step1.module#CartStep1PageModule', name: 'CartStep1Page', segment: 'cart/step1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cart-step2/cart-step2.module#CartStep2PageModule', name: 'CartStep2Page', segment: 'cart/step2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cart-step3/cart-step3.module#CartStep3PageModule', name: 'CartStep3Page', segment: 'cart/step3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cart-step4/cart-step4.module#CartStep4PageModule', name: 'CartStep4Page', segment: 'cart/step4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/company-edit/company-edit.module#CompanyEditPageModule', name: 'CompanyEditPage', segment: 'company/:companyKey/edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/company-owner/company-owner.module#CompanyOwnerPageModule', name: 'CompanyOwnerPage', segment: 'company-owner', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/company-register/company-register.module#CompanyRegisterPageModule', name: 'CompanyRegisterPage', segment: 'company/register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/company/company.module#CompanyPageModule', name: 'CompanyPage', segment: 'company/:companyKey', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/entrance/entrance.module#EntrancePageModule', name: 'EntrancePage', segment: 'entrance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-edit/product-edit.module#ProductEditPageModule', name: 'ProductEditPage', segment: 'product/:productKey/edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-register/product-register.module#ProductRegisterPageModule', name: 'ProductRegisterPage', segment: 'company/:companyKey/product/register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product/product.module#ProductPageModule', name: 'ProductPage', segment: 'product/:productKey', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signin/signin.module#SigninPageModule', name: 'SigninPage', segment: 'entrance/signin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'entrance/signup', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: 'askforfood',
                    storeName: 'askforfoodStorage'
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__services__["a" /* CartService */],
                __WEBPACK_IMPORTED_MODULE_13__services__["b" /* CompanyService */],
                __WEBPACK_IMPORTED_MODULE_13__services__["c" /* ProductService */],
                __WEBPACK_IMPORTED_MODULE_13__services__["d" /* PurchaseService */],
                __WEBPACK_IMPORTED_MODULE_13__services__["e" /* UserService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                // Cordova
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var CartService = (function () {
    function CartService(storage) {
        this.storage = storage;
        this.cartStorageKey = 'cart';
        this.cartContentSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    CartService.prototype.getCartContent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cartContent, isArray;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get(this.cartStorageKey)];
                    case 1:
                        cartContent = _a.sent();
                        isArray = Array.isArray(cartContent);
                        if (!isArray) {
                            return [2 /*return*/, []];
                        }
                        return [2 /*return*/, cartContent];
                }
            });
        });
    };
    CartService.prototype.setCartContent = function (cartContent) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.set(this.cartStorageKey, cartContent)];
                    case 1:
                        _a.sent();
                        this.cartContentSubject.next(cartContent);
                        return [2 /*return*/];
                }
            });
        });
    };
    CartService.prototype.removeCartContent = function () {
        return this.setCartContent([]);
    };
    // Sku
    // ******************************************
    CartService.prototype.addOneSku = function (sku) {
        return __awaiter(this, void 0, void 0, function () {
            var cartContent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCartContent()];
                    case 1:
                        cartContent = _a.sent();
                        cartContent.push(sku);
                        return [2 /*return*/, this.setCartContent(cartContent)];
                }
            });
        });
    };
    CartService.prototype.removeOneSku = function (sku) {
        return __awaiter(this, void 0, void 0, function () {
            var cartContent, index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCartContent()];
                    case 1:
                        cartContent = _a.sent();
                        index = cartContent.indexOf(sku);
                        if (index !== -1) {
                            cartContent.splice(index, 1);
                        }
                        return [2 /*return*/, this.setCartContent(cartContent)];
                }
            });
        });
    };
    CartService.prototype.isSkuinCart = function (sku) {
        return __awaiter(this, void 0, void 0, function () {
            var cartContent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCartContent()];
                    case 1:
                        cartContent = _a.sent();
                        return [2 /*return*/, !!(cartContent.indexOf(sku) + 1)];
                }
            });
        });
    };
    // Skus
    // *******************************************
    CartService.prototype.getAllSkus = function () {
        var cartContentSubject = this.cartContentSubject;
        this.getCartContent()
            .then(function (cartContent) {
            cartContentSubject.next(cartContent);
        });
        return cartContentSubject.asObservable();
    };
    CartService.prototype.removeSku = function (sku) {
        return __awaiter(this, void 0, void 0, function () {
            var cartContent, newCartContent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCartContent()];
                    case 1:
                        cartContent = _a.sent();
                        newCartContent = cartContent.filter(function (skuFromCart) {
                            return skuFromCart !== sku;
                        });
                        return [2 /*return*/, this.setCartContent(newCartContent)];
                }
            });
        });
    };
    CartService.prototype.emptyCart = function () {
        return this.removeCartContent();
    };
    CartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], CartService);
    return CartService;
}());

//# sourceMappingURL=cart.service.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyService = (function () {
    function CompanyService(db) {
        this.db = db;
    }
    CompanyService.prototype.create = function (companyToCreate) {
        var key = this.db.createPushId();
        var company = Object.assign(companyToCreate);
        company.key = key;
        return this.db.list('companies')
            .set(key, company)
            .then(function () { return key; });
    };
    CompanyService.prototype.getAll = function () {
        return this.db.list('companies')
            .valueChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (companies) {
            if (!companies) {
                return [];
            }
            return companies;
        }));
    };
    CompanyService.prototype.getAllApproved = function () {
        return this.db.list('companies', function (ref) { return ref.orderByChild('isApproved').equalTo(true); })
            .valueChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (companies) {
            if (!companies) {
                return [];
            }
            return companies;
        }));
    };
    CompanyService.prototype.getAllFromUser = function (uid) {
        return this.db.list('companies', function (ref) { return ref.orderByChild('createdBy').equalTo(uid); })
            .valueChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (companies) {
            if (!companies) {
                return [];
            }
            return companies;
        }));
    };
    CompanyService.prototype.getOne = function (key) {
        return this.db.object("companies/" + key)
            .valueChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (company) {
            if (!company) {
                return {};
            }
            return company;
        }));
    };
    CompanyService.prototype.updateOne = function (key, editCompany) {
        return this.db.object("companies/" + key)
            .update(editCompany);
    };
    CompanyService.prototype.removeOne = function (companyKey) {
        return this.db.object("companies/" + companyKey)
            .update({
            isRemoved: true
        });
    };
    CompanyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], CompanyService);
    return CompanyService;
}());

//# sourceMappingURL=company.service.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = (function () {
    function ProductService(db) {
        this.db = db;
    }
    ProductService.prototype.create = function (_a) {
        var companyKey = _a.companyKey, name = _a.name, description = _a.description, price = _a.price, category = _a.category, sale = _a.sale;
        var key = this.db.createPushId();
        return this.db.list("products")
            .set(key, { companyKey: companyKey, key: key, name: name, description: description, price: price, category: category, sale: sale })
            .then(function () { return key; });
    };
    ProductService.prototype.getAllOnSale = function () {
        return this.db.list('/products', function (ref) { return ref.orderByChild('sale').equalTo(true); }).valueChanges();
    };
    ProductService.prototype.getAllOfACompany = function (companyKey) {
        return this.db.list('/products', function (ref) { return ref.orderByChild('companyKey').equalTo(companyKey); })
            .valueChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (products) {
            if (!products) {
                return [];
            }
            return products;
        }));
    };
    ProductService.prototype.getOne = function (productKey) {
        return this.db.object("products/" + productKey)
            .valueChanges();
    };
    ProductService.prototype.removeOne = function (productKey) {
        return this.db.object("products/" + productKey)
            .update({
            hide: true
        });
    };
    ProductService.prototype.updateOne = function (_a) {
        var productKey = _a.productKey, name = _a.name, description = _a.description, price = _a.price, category = _a.category, sale = _a.sale;
        return this.db.object("products/" + productKey)
            .update({ name: name, description: description, price: price, category: category, sale: sale });
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ProductService);
    return ProductService;
}());

//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PurchaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
* Serviço PurchaseService
* - Adiciona e obtém produtos comprados pelo usuário no banco de dados
* */
var PurchaseService = (function () {
    function PurchaseService(db) {
        this.db = db;
    }
    PurchaseService.prototype.addProductsToPurchases = function (addProductsToPurchasesVariables) {
        var uid = addProductsToPurchasesVariables.uid, productsKey = addProductsToPurchasesVariables.productsKey;
        var key = this.db.createPushId();
        return this.db.list("users/" + uid + "/purchases/")
            .push({
            productsKey: productsKey,
            timestamp: Date.now()
        });
    };
    PurchaseService.prototype.getProductsFromPurchases = function (getPurchasesVariables) {
        var uid = getPurchasesVariables.uid, _a = getPurchasesVariables.limitLast, limitLast = _a === void 0 ? 5 : _a;
        return this.db.list("users/" + uid + "/purchases")
            .valueChanges()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__["map"])(function (purchases) {
            if (purchases === void 0) { purchases = []; }
            var products = [];
            purchases.forEach(function (purchase) {
                var purchaseProductsKey = purchase.productsKey.trim().split(' ');
                purchaseProductsKey.forEach(function (purchaseProductKey) {
                    products.push({
                        productKey: purchaseProductKey,
                        timestamp: purchase.timestamp
                    });
                });
            });
            return products.sort(function (product1, product2) {
                return product2.timestamp - product1.timestamp;
            }).slice(0, limitLast);
        }));
    };
    PurchaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], PurchaseService);
    return PurchaseService;
}());

//# sourceMappingURL=purchase.service.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(db) {
        this.db = db;
    }
    UserService.prototype.createUser = function (createUserVariable) {
        var uid = createUserVariable.uid, email = createUserVariable.email;
        return this.db.object("/users/" + uid)
            .set({ email: email });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cf_button_cart_cf_button_cart__ = __webpack_require__(551);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__cf_button_cart_cf_button_cart__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cf_validation_messages_cf_validation_messages__ = __webpack_require__(552);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__cf_validation_messages_cf_validation_messages__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CfButtonCartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CfButtonCartComponent = (function () {
    function CfButtonCartComponent(angularFireAuth, cartService, navCtrl) {
        this.angularFireAuth = angularFireAuth;
        this.cartService = cartService;
        this.navCtrl = navCtrl;
        this.productsQty = 0;
    }
    CfButtonCartComponent.prototype.ngOnInit = function () {
        this.getProductsQty();
    };
    CfButtonCartComponent.prototype.ngOnDestroy = function () {
        if (this.getAllSkusSub) {
            this.getAllSkusSub
                .unsubscribe();
        }
    };
    CfButtonCartComponent.prototype.getProductsQty = function () {
        var _this = this;
        this.getAllSkusSub = this.cartService
            .getAllSkus()
            .subscribe(function (products) {
            _this.productsQty = products.length;
        }, function (error) { return console.log(error); });
    };
    CfButtonCartComponent.prototype.goToCartPage = function () {
        this.navCtrl.push('CartStep1Page');
    };
    CfButtonCartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '[cf-button-cart]',template:/*ion-inline-start:"D:\Documents\Repos\Pessoais\askforfood\src\components\cf-button-cart\cf-button-cart.html"*/'<button\n\n  (click)="goToCartPage()"\n\n  [disabled]="!productsQty"\n\n  ion-button icon-only clear\n\n  color="white"\n\n>\n\n  <ion-icon name="md-cart"></ion-icon>\n\n  <ion-badge>\n\n    {{ productsQty}}\n\n  </ion-badge>\n\n</button>\n\n'/*ion-inline-end:"D:\Documents\Repos\Pessoais\askforfood\src\components\cf-button-cart\cf-button-cart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3__services__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], CfButtonCartComponent);
    return CfButtonCartComponent;
}());

//# sourceMappingURL=cf-button-cart.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CfValidationMessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cf_validation_messages_provider__ = __webpack_require__(553);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
* Componente CfValidationMessagesComponent
* - Mensagens de validação de campos de formulário
* */
var CfValidationMessagesComponent = (function () {
    function CfValidationMessagesComponent(validation) {
        this.validation = validation;
        // Show Errors
        this.showEqualityError = false;
        this.showMaxLengthError = false;
        this.showMinLengthError = false;
        this.showPatternError = false;
        this.showRequiredError = false;
        // Element ID
        this.idClass = "idClass-" + Math.round(Math.random() * 10E14);
    }
    CfValidationMessagesComponent.prototype.onFormSubmit = function ($event) {
        var hasValidationEl = $event.target.innerHTML.includes(this.idClass);
        if (hasValidationEl) {
            this.runRequiredValidation();
        }
    };
    CfValidationMessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formControl = this.formGr.controls[this.formCtrlName];
        this.formControl.valueChanges.subscribe(function () {
            _this.runAllValidations();
        });
    };
    CfValidationMessagesComponent.prototype.runRequiredValidation = function () {
        var formControlErrors = this.formControl.errors;
        if (this.validation.hasRequiredError(formControlErrors)) {
            var genericMessage = this.validation.requiredErrorMessages.generic;
            var customMessage = this.requiredError && this.validation.requiredErrorMessages[this.requiredError];
            this.requiredErrorMessage = customMessage || genericMessage;
            this.showRequiredError = true;
        }
        else {
            this.showRequiredError = false;
        }
    };
    CfValidationMessagesComponent.prototype.runAllValidations = function () {
        var formControlErrors = this.formControl.errors;
        this.hasValidationError = !!formControlErrors;
        // Equality Error
        // ************************
        if (this.validation.hasEqualityError(formControlErrors)) {
            var genericMessage = this.validation.equalityErrorMessages.generic;
            var customMessage = this.equalityError && this.validation.equalityErrorMessages[this.equalityError];
            this.equalityErrorMessage = customMessage || genericMessage;
            this.showEqualityError = true;
        }
        else {
            this.showEqualityError = false;
        }
        // MaxLength Error
        // ************************
        if (this.validation.hasMaxLengthError(formControlErrors)) {
            this.exceedingCharactersNumber = this.validation.getExceedingCharacters(formControlErrors);
            this.showMaxLengthError = true;
        }
        else {
            this.showMaxLengthError = false;
        }
        // MinLength Error
        // ************************
        if (this.validation.hasMinLengthError(formControlErrors)) {
            this.missingCharactersNumber = this.validation.getMissingCharacters(formControlErrors);
            this.showMinLengthError = true;
        }
        else {
            this.showMinLengthError = false;
        }
        // Pattern Error
        // ************************
        if (this.validation.hasPatternError(formControlErrors)) {
            var genericMessage = this.validation.patternErrorMessages.generic;
            var customMessage = this.patternError && this.validation.patternErrorMessages[this.patternError];
            this.patternErrorMessage = customMessage || genericMessage;
            this.showPatternError = true;
        }
        else {
            this.showPatternError = false;
        }
        // Required Error
        // ************************
        this.runRequiredValidation();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */])
    ], CfValidationMessagesComponent.prototype, "formGr", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], CfValidationMessagesComponent.prototype, "formCtrlName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], CfValidationMessagesComponent.prototype, "equalityError", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], CfValidationMessagesComponent.prototype, "patternError", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], CfValidationMessagesComponent.prototype, "requiredError", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('class.cf-c-has-validation-error'),
        __metadata("design:type", Boolean)
    ], CfValidationMessagesComponent.prototype, "hasValidationError", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('body:submit', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CfValidationMessagesComponent.prototype, "onFormSubmit", null);
    CfValidationMessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cf-validation-messages',template:/*ion-inline-start:"D:\Documents\Repos\Pessoais\askforfood\src\components\cf-validation-messages\cf-validation-messages.html"*/'<!-- Identificador do elemento -->\n\n<span [ngClass]="idClass"></span>\n\n\n\n<p [hidden]="!showRequiredError"  class="cf-validation-message">\n\n  <ion-icon name="ios-warning-outline"></ion-icon>\n\n  {{ requiredErrorMessage }}\n\n</p>\n\n\n\n<p [hidden]="!showMinLengthError" class="cf-validation-message">\n\n  <ion-icon name="ios-warning-outline"></ion-icon>\n\n  Falta<span\n\n  [hidden]="missingCharactersNumber === 1">m</span> pelo menos mais <span class="cf-validation-message-number">{{missingCharactersNumber}}</span>\n\n  caracter<span\n\n  [hidden]="missingCharactersNumber === 1">es</span>.\n\n</p>\n\n\n\n<p [hidden]="!showMaxLengthError" class="cf-validation-message">\n\n  <ion-icon name="ios-warning-outline"></ion-icon>\n\n  Contém <span class="cf-validation-message-number">{{exceedingCharactersNumber}}</span> caracter<span\n\n  [hidden]="exceedingCharactersNumber === 1">es</span> a mais.\n\n</p>\n\n\n\n<p [hidden]="!showPatternError" class="cf-validation-message">\n\n  <ion-icon name="ios-warning-outline"></ion-icon>\n\n  {{ patternErrorMessage }}\n\n</p>\n\n\n\n<p [hidden]="!showEqualityError" class="cf-validation-message">\n\n  <ion-icon name="ios-warning-outline"></ion-icon>\n\n  {{ equalityErrorMessage }}.\n\n</p>\n\n\n\n'/*ion-inline-end:"D:\Documents\Repos\Pessoais\askforfood\src\components\cf-validation-messages\cf-validation-messages.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__cf_validation_messages_provider__["a" /* validationMessageProvider */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__cf_validation_messages_provider__["a" /* validationMessageProvider */]])
    ], CfValidationMessagesComponent);
    return CfValidationMessagesComponent;
}());

//# sourceMappingURL=cf-validation-messages.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return validationMessageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var validationMessageProvider = (function () {
    function validationMessageProvider() {
        this.equalityErrorMessages = {
            generic: 'Nome já utilizado.',
            gymBranchName: 'Nome já utilizado.'
        };
        this.requiredErrorMessages = {
            generic: 'Preenchimento necessário.',
            gymRegisterAuthorization: 'Você não pode criar este perfil sem autorização.',
            radioElement: 'Escolha pelo menos uma das opções.'
        };
        this.patternErrorMessages = {
            generic: 'Valor informado mal formatado.',
            email: 'Email inválido.'
        };
    }
    validationMessageProvider.prototype.getExceedingCharacters = function (errors) {
        var maxLengthError = errors && errors.maxlength;
        var exceedingCharacters = 0;
        if (maxLengthError) {
            exceedingCharacters = maxLengthError.actualLength - maxLengthError.requiredLength;
        }
        return exceedingCharacters;
    };
    validationMessageProvider.prototype.getMissingCharacters = function (errors) {
        var minLengthError = errors && errors.minlength;
        var missingCharacters = 0;
        if (minLengthError) {
            missingCharacters = minLengthError.requiredLength - minLengthError.actualLength;
        }
        return missingCharacters;
    };
    validationMessageProvider.prototype.hasEqualityError = function (errors) {
        return errors && !!errors.equality;
    };
    validationMessageProvider.prototype.hasMaxLengthError = function (errors) {
        return errors && !!errors.maxlength;
    };
    validationMessageProvider.prototype.hasMinLengthError = function (errors) {
        return errors && !!errors.minlength;
    };
    validationMessageProvider.prototype.hasPatternError = function (errors) {
        return errors && !!errors.pattern;
    };
    validationMessageProvider.prototype.hasRequiredError = function (errors) {
        return errors && !!errors.required;
    };
    validationMessageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], validationMessageProvider);
    return validationMessageProvider;
}());

//# sourceMappingURL=cf-validation-messages.provider.js.map

/***/ }),

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorHandlerHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
* Helper ErrorHandlerHelper
* - Trata erros causados pela incorreta interação do usuário com o aplicativo
* */
var ErrorHandlerHelper = (function () {
    function ErrorHandlerHelper() {
    }
    /* Método getFirebaseMessage
    * - Transforma erros emitidos pelo Firebase em mensagens compreensíveis pelo usuário.
    * */
    ErrorHandlerHelper.prototype.getFirebaseMessage = function (error) {
        var errors = {
            'auth/account-exists-with-different-credential': {
                title: 'Conta de e-mail existente.',
                message: "J\u00E1 h\u00E1 uma conta para o e-mail " + error.email + " no nosso sistema.",
                email: error.email
            },
            'auth/network-request-failed': {
                title: 'Falha na conexão.',
                message: 'Houve uma falha de conexão da sua internet que impossibilitou o acesso aos nossos servidores.'
            },
            'auth/user-not-found': {
                title: 'Usuário não encontrado',
                message: '',
                email: error.email
            },
            'auth/popup-closed-by-user': {
                title: 'Janela fechada',
                message: 'A janela de login do Facebook foi fechada antes que o processo terminasse.'
            },
            'auth/wrong-password': {
                title: 'Senha inválida',
                message: ''
            }
        };
        var internalError = {
            title: 'Erro interno.',
            message: 'Desculpe-nos. Ocorreu uma falha interna em nosso sistema. Favor voltar mais tarde.'
        };
        return errors[error.code] || internalError;
    };
    ErrorHandlerHelper = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], ErrorHandlerHelper);
    return ErrorHandlerHelper;
}());

//# sourceMappingURL=error-handler.helper.js.map

/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return limitsHelperObject; });
var limitsHelperObject = {
    email: {
        maxLength: 256
    },
    password: {
        minLength: 6,
        maxLength: 64
    }
};
//# sourceMappingURL=limits.helper.js.map

/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return regexHelperObject; });
var regexHelperObject = {
    getEmailRegex: function () {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }
};
//# sourceMappingURL=regex.helper.js.map

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = (function () {
    function MyApp(angularFireAuth, platform, statusBar) {
        this.angularFireAuth = angularFireAuth;
        this.platform = platform;
        this.statusBar = statusBar;
        this.rootPage = 'HomePage';
    }
    MyApp.prototype.ngOnInit = function () {
        var _this = this;
        this.getUser();
        this.platform.ready().then(function () {
            if (_this.platform.is('cordova')) {
                _this.statusBar.styleDefault();
            }
        });
    };
    MyApp.prototype.getUser = function () {
        var _this = this;
        this.angularFireAuth
            .authState
            .subscribe(function (user) {
            if (!user) {
                return;
            }
            _this.user = user;
            _this.username = user.email && user.email.match(/^[^@]*/)[0];
        });
    };
    MyApp.prototype.openPage = function (component) {
        this.nav.push(component, { name: 'REMOVER' });
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        this.angularFireAuth.auth
            .signOut()
            .then(function () {
            _this.nav.setRoot('HomePage');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Documents\Repos\Pessoais\askforfood\src\app\app.html"*/'<ion-menu [content]="content" [enabled]="false">\n  <ion-header>\n    <ion-toolbar>\n      <ion-buttons *ngIf="username" left>\n        <button ion-button icon-only>\n          <ion-icon name="ios-contact"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>\n        {{ username }}\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list class="cf-p-menu-list">\n      <button *ngIf="!user" (click)="openPage(\'EntrancePage\')" menuClose ion-item>\n        Entrar ou cadastrar\n      </button>\n      <button *ngIf="user?.uid === \'T5QR3WKM90TxNt3lSzvllCpHJks1\' || user?.uid === \'hOlUWWUN4rXEpc1cJypv9GN4oP53\'"\n              (click)="openPage(\'AdminPage\')"\n              menuClose ion-item\n      >\n        Admin\n      </button>\n      <button *ngIf="user" (click)="openPage(\'CompanyOwnerPage\')" menuClose ion-item>\n        Meus estabelecimentos\n      </button>\n      <button (click)="openPage(\'AboutPage\')" menuClose ion-item>\n        Sobre\n      </button>\n    </ion-list>\n\n    <a class="cf-p-btn-google-play"\n       hideWhen="cordova"\n       href=\'https://play.google.com/store/apps/details?id=br.com.askforfood&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1\'\n    >\n      <img alt=\'Disponível no Google Play\' src=\'https://play.google.com/intl/en_us/badges/images/generic/pt-br_badge_web_generic.png\' width="170"/>\n    </a>\n\n    <ion-card>\n      <ion-card-content text-center>\n        <p class="cf-p-owner">\n          Desenvolvido por <a href="http://yuricamara.com.br" target="_blank">Yuri Câmara</a>\n        </p>\n      </ion-card-content>\n    </ion-card>\n  </ion-content>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"D:\Documents\Repos\Pessoais\askforfood\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_tokens__ = __webpack_require__(348);

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HelpersModule = (function () {
    function HelpersModule() {
    }
    HelpersModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            providers: [
                __WEBPACK_IMPORTED_MODULE_1____["a" /* ErrorHandlerHelper */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2__app_app_tokens__["a" /* limitsHelper */],
                    useValue: __WEBPACK_IMPORTED_MODULE_1____["b" /* limitsHelperObject */]
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2__app_app_tokens__["b" /* regexHelper */],
                    useValue: __WEBPACK_IMPORTED_MODULE_1____["c" /* regexHelperObject */]
                },
            ]
        })
    ], HelpersModule);
    return HelpersModule;
}());

//# sourceMappingURL=helpers.module.js.map

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    env: 'prod',
    firebase: {
        apiKey: 'AIzaSyBJ1kHcJQHYtHV_59NxZs0fK6QtMkf3PPY',
        authDomain: 'askforfood-prod.firebaseapp.com',
        databaseURL: 'https://askforfood-prod.firebaseio.com',
        projectId: 'askforfood-prod',
        storageBucket: '',
        messagingSenderId: '616844190797'
    }
};
//# sourceMappingURL=environment.js.map

/***/ })

},[355]);
//# sourceMappingURL=main.js.map