webpackJsonp([0],{

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntrancePageModule", function() { return EntrancePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entrance__ = __webpack_require__(639);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EntrancePageModule = (function () {
    function EntrancePageModule() {
    }
    EntrancePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__entrance__["a" /* EntrancePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__entrance__["a" /* EntrancePage */]),
            ],
        })
    ], EntrancePageModule);
    return EntrancePageModule;
}());

//# sourceMappingURL=entrance.module.js.map

/***/ }),

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var CODES = {
    AVAILABLE_IN_WINDOW: 'only-available-in-window',
    AVAILABLE_IN_SW: 'only-available-in-sw',
    SHOULD_BE_INHERITED: 'should-be-overriden',
    BAD_SENDER_ID: 'bad-sender-id',
    INCORRECT_GCM_SENDER_ID: 'incorrect-gcm-sender-id',
    PERMISSION_DEFAULT: 'permission-default',
    PERMISSION_BLOCKED: 'permission-blocked',
    UNSUPPORTED_BROWSER: 'unsupported-browser',
    NOTIFICATIONS_BLOCKED: 'notifications-blocked',
    FAILED_DEFAULT_REGISTRATION: 'failed-serviceworker-registration',
    SW_REGISTRATION_EXPECTED: 'sw-registration-expected',
    GET_SUBSCRIPTION_FAILED: 'get-subscription-failed',
    INVALID_SAVED_TOKEN: 'invalid-saved-token',
    SW_REG_REDUNDANT: 'sw-reg-redundant',
    TOKEN_SUBSCRIBE_FAILED: 'token-subscribe-failed',
    TOKEN_SUBSCRIBE_NO_TOKEN: 'token-subscribe-no-token',
    TOKEN_SUBSCRIBE_NO_PUSH_SET: 'token-subscribe-no-push-set',
    TOKEN_UNSUBSCRIBE_FAILED: 'token-unsubscribe-failed',
    TOKEN_UPDATE_FAILED: 'token-update-failed',
    TOKEN_UPDATE_NO_TOKEN: 'token-update-no-token',
    USE_SW_BEFORE_GET_TOKEN: 'use-sw-before-get-token',
    INVALID_DELETE_TOKEN: 'invalid-delete-token',
    DELETE_TOKEN_NOT_FOUND: 'delete-token-not-found',
    DELETE_SCOPE_NOT_FOUND: 'delete-scope-not-found',
    BG_HANDLER_FUNCTION_EXPECTED: 'bg-handler-function-expected',
    NO_WINDOW_CLIENT_TO_MSG: 'no-window-client-to-msg',
    UNABLE_TO_RESUBSCRIBE: 'unable-to-resubscribe',
    NO_FCM_TOKEN_FOR_RESUBSCRIBE: 'no-fcm-token-for-resubscribe',
    FAILED_TO_DELETE_TOKEN: 'failed-to-delete-token',
    NO_SW_IN_REG: 'no-sw-in-reg',
    BAD_SCOPE: 'bad-scope',
    BAD_VAPID_KEY: 'bad-vapid-key',
    BAD_SUBSCRIPTION: 'bad-subscription',
    BAD_TOKEN: 'bad-token',
    BAD_PUSH_SET: 'bad-push-set',
    FAILED_DELETE_VAPID_KEY: 'failed-delete-vapid-key',
    INVALID_PUBLIC_VAPID_KEY: 'invalid-public-vapid-key',
    USE_PUBLIC_KEY_BEFORE_GET_TOKEN: 'use-public-key-before-get-token',
    PUBLIC_KEY_DECRYPTION_FAILED: 'public-vapid-key-decryption-failed'
};
var ERROR_MAP = (_a = {},
    _a[CODES.AVAILABLE_IN_WINDOW] = 'This method is available in a Window context.',
    _a[CODES.AVAILABLE_IN_SW] = 'This method is available in a service worker ' + 'context.',
    _a[CODES.SHOULD_BE_INHERITED] = 'This method should be overriden by ' + 'extended classes.',
    _a[CODES.BAD_SENDER_ID] = "Please ensure that 'messagingSenderId' is set " +
        'correctly in the options passed into firebase.initializeApp().',
    _a[CODES.PERMISSION_DEFAULT] = 'The required permissions were not granted and ' + 'dismissed instead.',
    _a[CODES.PERMISSION_BLOCKED] = 'The required permissions were not granted and ' + 'blocked instead.',
    _a[CODES.UNSUPPORTED_BROWSER] = "This browser doesn't support the API's " +
        'required to use the firebase SDK.',
    _a[CODES.NOTIFICATIONS_BLOCKED] = 'Notifications have been blocked.',
    _a[CODES.FAILED_DEFAULT_REGISTRATION] = 'We are unable to register the ' +
        'default service worker. {$browserErrorMessage}',
    _a[CODES.SW_REGISTRATION_EXPECTED] = 'A service worker registration was the ' + 'expected input.',
    _a[CODES.GET_SUBSCRIPTION_FAILED] = 'There was an error when trying to get ' +
        'any existing Push Subscriptions.',
    _a[CODES.INVALID_SAVED_TOKEN] = 'Unable to access details of the saved token.',
    _a[CODES.SW_REG_REDUNDANT] = 'The service worker being used for push was made ' + 'redundant.',
    _a[CODES.TOKEN_SUBSCRIBE_FAILED] = 'A problem occured while subscribing the ' + 'user to FCM: {$message}',
    _a[CODES.TOKEN_SUBSCRIBE_NO_TOKEN] = 'FCM returned no token when subscribing ' + 'the user to push.',
    _a[CODES.TOKEN_SUBSCRIBE_NO_PUSH_SET] = 'FCM returned an invalid response ' + 'when getting an FCM token.',
    _a[CODES.TOKEN_UNSUBSCRIBE_FAILED] = 'A problem occured while unsubscribing the ' + 'user from FCM: {$message}',
    _a[CODES.TOKEN_UPDATE_FAILED] = 'A problem occured while updating the ' + 'user from FCM: {$message}',
    _a[CODES.TOKEN_UPDATE_NO_TOKEN] = 'FCM returned no token when updating ' + 'the user to push.',
    _a[CODES.USE_SW_BEFORE_GET_TOKEN] = 'You must call useServiceWorker() before ' +
        'calling getToken() to ensure your service worker is used.',
    _a[CODES.INVALID_DELETE_TOKEN] = 'You must pass a valid token into ' +
        'deleteToken(), i.e. the token from getToken().',
    _a[CODES.DELETE_TOKEN_NOT_FOUND] = 'The deletion attempt for token could not ' +
        'be performed as the token was not found.',
    _a[CODES.DELETE_SCOPE_NOT_FOUND] = 'The deletion attempt for service worker ' +
        'scope could not be performed as the scope was not found.',
    _a[CODES.BG_HANDLER_FUNCTION_EXPECTED] = 'The input to ' + 'setBackgroundMessageHandler() must be a function.',
    _a[CODES.NO_WINDOW_CLIENT_TO_MSG] = 'An attempt was made to message a ' + 'non-existant window client.',
    _a[CODES.UNABLE_TO_RESUBSCRIBE] = 'There was an error while re-subscribing ' +
        'the FCM token for push messaging. Will have to resubscribe the ' +
        'user on next visit. {$message}',
    _a[CODES.NO_FCM_TOKEN_FOR_RESUBSCRIBE] = 'Could not find an FCM token ' +
        'and as a result, unable to resubscribe. Will have to resubscribe the ' +
        'user on next visit.',
    _a[CODES.FAILED_TO_DELETE_TOKEN] = 'Unable to delete the currently saved token.',
    _a[CODES.NO_SW_IN_REG] = 'Even though the service worker registration was ' +
        'successful, there was a problem accessing the service worker itself.',
    _a[CODES.INCORRECT_GCM_SENDER_ID] = "Please change your web app manifest's " +
        "'gcm_sender_id' value to '103953800507' to use Firebase messaging.",
    _a[CODES.BAD_SCOPE] = 'The service worker scope must be a string with at ' +
        'least one character.',
    _a[CODES.BAD_VAPID_KEY] = 'The public VAPID key is not a Uint8Array with 65 bytes.',
    _a[CODES.BAD_SUBSCRIPTION] = 'The subscription must be a valid ' + 'PushSubscription.',
    _a[CODES.BAD_TOKEN] = 'The FCM Token used for storage / lookup was not ' +
        'a valid token string.',
    _a[CODES.BAD_PUSH_SET] = 'The FCM push set used for storage / lookup was not ' +
        'not a valid push set string.',
    _a[CODES.FAILED_DELETE_VAPID_KEY] = 'The VAPID key could not be deleted.',
    _a[CODES.INVALID_PUBLIC_VAPID_KEY] = 'The public VAPID key must be a string.',
    _a[CODES.PUBLIC_KEY_DECRYPTION_FAILED] = 'The public VAPID key did not equal ' + '65 bytes when decrypted.',
    _a);
/* harmony default export */ __webpack_exports__["a"] = ({
    codes: CODES,
    map: ERROR_MAP
});
var _a;

//# sourceMappingURL=errors.js.map


/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function toBase64(arrayBuffer) {
    var uint8Version = new Uint8Array(arrayBuffer);
    return window.btoa(String.fromCharCode.apply(null, uint8Version));
}
/* harmony default export */ __webpack_exports__["a"] = (function (arrayBuffer) {
    var base64String = toBase64(arrayBuffer);
    return base64String
        .replace(/=/g, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
});;

//# sourceMappingURL=array-buffer-to-base64.js.map


/***/ }),

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var DEFAULT_PUBLIC_VAPID_KEY = new Uint8Array([
    0x04,
    0x33,
    0x94,
    0xf7,
    0xdf,
    0xa1,
    0xeb,
    0xb1,
    0xdc,
    0x03,
    0xa2,
    0x5e,
    0x15,
    0x71,
    0xdb,
    0x48,
    0xd3,
    0x2e,
    0xed,
    0xed,
    0xb2,
    0x34,
    0xdb,
    0xb7,
    0x47,
    0x3a,
    0x0c,
    0x8f,
    0xc4,
    0xcc,
    0xe1,
    0x6f,
    0x3c,
    0x8c,
    0x84,
    0xdf,
    0xab,
    0xb6,
    0x66,
    0x3e,
    0xf2,
    0x0c,
    0xd4,
    0x8b,
    0xfe,
    0xe3,
    0xf9,
    0x76,
    0x2f,
    0x14,
    0x1c,
    0x63,
    0x08,
    0x6a,
    0x6f,
    0x2d,
    0xb1,
    0x1a,
    0x95,
    0xb0,
    0xce,
    0x37,
    0xc0,
    0x9c,
    0x6e
]);
var SUBSCRIPTION_DETAILS = {
    userVisibleOnly: true,
    applicationServerKey: DEFAULT_PUBLIC_VAPID_KEY
};
/* harmony default export */ __webpack_exports__["a"] = ({
    DEFAULT_PUBLIC_VAPID_KEY: DEFAULT_PUBLIC_VAPID_KEY,
    SUBSCRIPTION_DETAILS: SUBSCRIPTION_DETAILS,
    ENDPOINT: 'https://fcm.googleapis.com'
    // ENDPOINT: 'https://jmt17.google.com'
});

//# sourceMappingURL=fcm-details.js.map


/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TOKEN_EXPIRATION_MILLIS */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__firebase_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_errors__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_token_details_model__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_vapid_details_model__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_notification_permission__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_iid_model__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_array_buffer_to_base64__ = __webpack_require__(621);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */








var SENDER_ID_OPTION_NAME = 'messagingSenderId';
// Database cache should be invalidated once a week.
var TOKEN_EXPIRATION_MILLIS = 7 * 24 * 60 * 60 * 1000; // 7 days
var ControllerInterface = /** @class */ (function () {
    /**
     * An interface of the Messaging Service API
     * @param {!firebase.app.App} app
     */
    function ControllerInterface(app) {
        var _this = this;
        this.errorFactory_ = new __WEBPACK_IMPORTED_MODULE_0__firebase_util__["ErrorFactory"]('messaging', 'Messaging', __WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].map);
        if (!app.options[SENDER_ID_OPTION_NAME] ||
            typeof app.options[SENDER_ID_OPTION_NAME] !== 'string') {
            throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.BAD_SENDER_ID);
        }
        this.messagingSenderId_ = app.options[SENDER_ID_OPTION_NAME];
        this.tokenDetailsModel_ = new __WEBPACK_IMPORTED_MODULE_2__models_token_details_model__["a" /* default */]();
        this.vapidDetailsModel_ = new __WEBPACK_IMPORTED_MODULE_3__models_vapid_details_model__["a" /* default */]();
        this.iidModel_ = new __WEBPACK_IMPORTED_MODULE_5__models_iid_model__["a" /* default */]();
        this.app = app;
        this.INTERNAL = {};
        this.INTERNAL.delete = function () { return _this.delete(); };
    }
    /**
     * @export
     */
    ControllerInterface.prototype.getToken = function () {
        var _this = this;
        // Check with permissions
        var currentPermission = this.getNotificationPermission_();
        if (currentPermission !== __WEBPACK_IMPORTED_MODULE_4__models_notification_permission__["a" /* default */].granted) {
            if (currentPermission === __WEBPACK_IMPORTED_MODULE_4__models_notification_permission__["a" /* default */].denied) {
                return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.NOTIFICATIONS_BLOCKED));
            }
            // We must wait for permission to be granted
            return Promise.resolve(null);
        }
        var swReg;
        return this.getSWRegistration_()
            .then(function (reg) {
            swReg = reg;
            return _this.tokenDetailsModel_.getTokenDetailsFromSWScope(swReg.scope);
        })
            .then(function (tokenDetails) {
            if (tokenDetails) {
                return _this.manageExistingToken(tokenDetails, swReg);
            }
            return _this.getNewToken(swReg);
        });
    };
    /**
     * manageExistingToken is triggered if there's an existing FCM token in the
     * database and it can take 3 different actions:
     * 1) Retrieve the existing FCM token from the database.
     * 2) If VAPID details have changed: Delete the existing token and create a
     * new one with the new VAPID key.
     * 3) If the database cache is invalidated: Send a request to FCM to update
     * the token, and to check if the token is still valid on FCM-side.
     */
    ControllerInterface.prototype.manageExistingToken = function (tokenDetails, swReg) {
        var _this = this;
        return this.isTokenStillValid(tokenDetails).then(function (isValid) {
            if (isValid) {
                var now = Date.now();
                if (now < tokenDetails['createTime'] + TOKEN_EXPIRATION_MILLIS) {
                    return tokenDetails['fcmToken'];
                }
                else {
                    return _this.updateToken(tokenDetails, swReg);
                }
            }
            else {
                // If the VAPID details are updated, delete the existing token,
                // and create a new one.
                return _this.deleteToken(tokenDetails['fcmToken']).then(function () {
                    return _this.getNewToken(swReg);
                });
            }
        });
    };
    /*
     * Checks if the tokenDetails match the details provided in the clients.
     */
    ControllerInterface.prototype.isTokenStillValid = function (tokenDetails) {
        // TODO Validate rest of the details.
        return this.getPublicVapidKey_().then(function (publicKey) {
            if (Object(__WEBPACK_IMPORTED_MODULE_6__helpers_array_buffer_to_base64__["a" /* default */])(publicKey) !== tokenDetails['vapidKey']) {
                return false;
            }
            return true;
        });
    };
    ControllerInterface.prototype.updateToken = function (tokenDetails, swReg) {
        var _this = this;
        var publicVapidKey;
        var updatedToken;
        var subscription;
        return this.getPublicVapidKey_()
            .then(function (publicKey) {
            publicVapidKey = publicKey;
            return _this.getPushSubscription_(swReg, publicVapidKey);
        })
            .then(function (pushSubscription) {
            subscription = pushSubscription;
            return _this.iidModel_.updateToken(_this.messagingSenderId_, tokenDetails['fcmToken'], tokenDetails['fcmPushSet'], subscription, publicVapidKey);
        })
            .catch(function (err) {
            return _this.deleteToken(tokenDetails['fcmToken']).then(function () {
                throw err;
            });
        })
            .then(function (token) {
            updatedToken = token;
            var allDetails = {
                swScope: swReg.scope,
                vapidKey: publicVapidKey,
                subscription: subscription,
                fcmSenderId: _this.messagingSenderId_,
                fcmToken: updatedToken,
                fcmPushSet: tokenDetails['fcmPushSet']
            };
            return _this.tokenDetailsModel_.saveTokenDetails(allDetails);
        })
            .then(function () {
            return _this.vapidDetailsModel_.saveVapidDetails(swReg.scope, publicVapidKey);
        })
            .then(function () {
            return updatedToken;
        });
    };
    ControllerInterface.prototype.getNewToken = function (swReg) {
        var _this = this;
        var publicVapidKey;
        var subscription;
        var tokenDetails;
        return this.getPublicVapidKey_()
            .then(function (publicKey) {
            publicVapidKey = publicKey;
            return _this.getPushSubscription_(swReg, publicVapidKey);
        })
            .then(function (pushSubscription) {
            subscription = pushSubscription;
            return _this.iidModel_.getToken(_this.messagingSenderId_, subscription, publicVapidKey);
        })
            .then(function (iidTokenDetails) {
            tokenDetails = iidTokenDetails;
            var allDetails = {
                swScope: swReg.scope,
                vapidKey: publicVapidKey,
                subscription: subscription,
                fcmSenderId: _this.messagingSenderId_,
                fcmToken: tokenDetails['token'],
                fcmPushSet: tokenDetails['pushSet']
            };
            return _this.tokenDetailsModel_.saveTokenDetails(allDetails);
        })
            .then(function () {
            return _this.vapidDetailsModel_.saveVapidDetails(swReg.scope, publicVapidKey);
        })
            .then(function () {
            return tokenDetails['token'];
        });
    };
    /**
     * This method deletes tokens that the token manager looks after,
     * unsubscribes the token from FCM  and then unregisters the push
     * subscription if it exists. It returns a promise that indicates
     * whether or not the unsubscribe request was processed successfully.
     * @export
     */
    ControllerInterface.prototype.deleteToken = function (token) {
        var _this = this;
        return this.tokenDetailsModel_
            .deleteToken(token)
            .then(function (details) {
            return _this.iidModel_.deleteToken(details['fcmSenderId'], details['fcmToken'], details['fcmPushSet']);
        })
            .then(function () {
            return _this.getSWRegistration_()
                .then(function (registration) {
                if (registration) {
                    return registration.pushManager.getSubscription();
                }
            })
                .then(function (subscription) {
                if (subscription) {
                    return subscription.unsubscribe();
                }
            });
        });
    };
    ControllerInterface.prototype.getSWRegistration_ = function () {
        throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.SHOULD_BE_INHERITED);
    };
    ControllerInterface.prototype.getPublicVapidKey_ = function () {
        throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.SHOULD_BE_INHERITED);
    };
    //
    // The following methods should only be available in the window.
    //
    ControllerInterface.prototype.requestPermission = function () {
        throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.AVAILABLE_IN_WINDOW);
    };
    ControllerInterface.prototype.getPushSubscription_ = function (registration, publicVapidKey) {
        throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.AVAILABLE_IN_WINDOW);
    };
    /**
     * @export
     * @param {!ServiceWorkerRegistration} registration
     */
    ControllerInterface.prototype.useServiceWorker = function (registration) {
        throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.AVAILABLE_IN_WINDOW);
    };
    /**
     * @export
     * @param {!string} b64PublicKey
     */
    ControllerInterface.prototype.usePublicVapidKey = function (b64PublicKey) {
        throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.AVAILABLE_IN_WINDOW);
    };
    /**
     * @export
     * @param {!firebase.Observer|function(*)} nextOrObserver
     * @param {function(!Error)=} optError
     * @param {function()=} optCompleted
     * @return {!function()}
     */
    ControllerInterface.prototype.onMessage = function (nextOrObserver, optError, optCompleted) {
        throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.AVAILABLE_IN_WINDOW);
    };
    /**
     * @export
     * @param {!firebase.Observer|function()} nextOrObserver An observer object
     * or a function triggered on token refresh.
     * @param {function(!Error)=} optError Optional A function
     * triggered on token refresh error.
     * @param {function()=} optCompleted Optional function triggered when the
     * observer is removed.
     * @return {!function()} The unsubscribe function for the observer.
     */
    ControllerInterface.prototype.onTokenRefresh = function (nextOrObserver, optError, optCompleted) {
        throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.AVAILABLE_IN_WINDOW);
    };
    //
    // The following methods are used by the service worker only.
    //
    /**
     * @export
     * @param {function(Object)} callback
     */
    ControllerInterface.prototype.setBackgroundMessageHandler = function (callback) {
        throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.AVAILABLE_IN_SW);
    };
    //
    // The following methods are used by the service themselves and not exposed
    // publicly or not expected to be used by developers.
    //
    /**
     * This method is required to adhere to the Firebase interface.
     * It closes any currently open indexdb database connections.
     */
    ControllerInterface.prototype.delete = function () {
        return Promise.all([
            this.tokenDetailsModel_.closeDatabase(),
            this.vapidDetailsModel_.closeDatabase()
        ]);
    };
    /**
     * Returns the current Notification Permission state.
     * @private
     * @return {string} The currenct permission state.
     */
    ControllerInterface.prototype.getNotificationPermission_ = function () {
        return Notification.permission;
    };
    ControllerInterface.prototype.getTokenDetailsModel = function () {
        return this.tokenDetailsModel_;
    };
    ControllerInterface.prototype.getVapidDetailsModel = function () {
        return this.vapidDetailsModel_;
    };
    /**
     * @protected
     * @returns {IIDModel}
     */
    ControllerInterface.prototype.getIIDModel = function () {
        return this.iidModel_;
    };
    return ControllerInterface;
}());
/* harmony default export */ __webpack_exports__["a"] = (ControllerInterface);

//# sourceMappingURL=controller-interface.js.map


/***/ }),

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__firebase_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__errors__ = __webpack_require__(620);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



var DBInterface = /** @class */ (function () {
    /**
     * @param {string} dbName
     * @param {number} dbVersion
     */
    function DBInterface(dbName, dbVersion) {
        this.errorFactory_ = new __WEBPACK_IMPORTED_MODULE_0__firebase_util__["ErrorFactory"]('messaging', 'Messaging', __WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].map);
        this.DB_NAME_ = dbName;
        this.dbVersion_ = dbVersion;
        this.openDbPromise_ = null;
        this.TRANSACTION_READ_WRITE = 'readwrite';
    }
    /**
     * Get the indexedDB as a promsie.
     * @protected
     * @return {!Promise<!IDBDatabase>} The IndexedDB database
     */
    DBInterface.prototype.openDatabase = function () {
        var _this = this;
        if (this.openDbPromise_) {
            return this.openDbPromise_;
        }
        this.openDbPromise_ = new Promise(function (resolve, reject) {
            var request = indexedDB.open(_this.DB_NAME_, _this.dbVersion_);
            request.onerror = function (event) {
                reject(event.target.error);
            };
            request.onsuccess = function (event) {
                resolve(event.target.result);
            };
            request.onupgradeneeded = function (event) {
                try {
                    var db = event.target.result;
                    _this.onDBUpgrade(db);
                }
                catch (err) {
                    // close the database as it can't be used.
                    db.close();
                    reject(err);
                }
            };
        });
        return this.openDbPromise_;
    };
    /**
     * Close the currently open database.
     * @return {!Promise} Returns the result of the promise chain.
     */
    DBInterface.prototype.closeDatabase = function () {
        var _this = this;
        return Promise.resolve().then(function () {
            if (_this.openDbPromise_) {
                return _this.openDbPromise_.then(function (db) {
                    db.close();
                    _this.openDbPromise_ = null;
                });
            }
        });
    };
    /**
     * @protected
     * @param {!IDBDatabase} db
     */
    DBInterface.prototype.onDBUpgrade = function (db) {
        throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.SHOULD_BE_INHERITED);
    };
    return DBInterface;
}());
/* harmony default export */ __webpack_exports__["a"] = (DBInterface);

//# sourceMappingURL=db-interface.js.map


/***/ }),

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* harmony default export */ __webpack_exports__["a"] = ({
    granted: 'granted',
    default: 'default',
    denied: 'denied'
});

//# sourceMappingURL=notification-permission.js.map


/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// These fields are strings to prevent closure from thinking goog.getMsg
// should be used to initialise the values
var PARAMS = {
    TYPE_OF_MSG: 'firebase-messaging-msg-type',
    DATA: 'firebase-messaging-msg-data'
};
// This value isn't using the TYPE_OF_MSG short hand as closure
// expects the variable to be defined via goog.getMsg
var msgType = {
    PUSH_MSG_RECEIVED: 'push-msg-received',
    NOTIFICATION_CLICKED: 'notification-clicked'
};
var createNewMsg = function (msgType, msgData) {
    var message = (_a = {},
        _a[PARAMS.TYPE_OF_MSG] = msgType,
        _a[PARAMS.DATA] = msgData,
        _a);
    return message;
    var _a;
};
/* harmony default export */ __webpack_exports__["a"] = ({
    PARAMS: PARAMS,
    TYPES_OF_MSG: msgType,
    createNewMsg: createNewMsg
});

//# sourceMappingURL=worker-page-message.js.map


/***/ }),

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntrancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entrance_service__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EntrancePage = (function () {
    function EntrancePage(alertCtrl, entranceService, errorHandlerHelper, loadingCtrl, navCtrl, navParams, userService) {
        this.alertCtrl = alertCtrl;
        this.entranceService = entranceService;
        this.errorHandlerHelper = errorHandlerHelper;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.nextPage = this.navParams.get('nextPage');
    }
    EntrancePage.prototype.authWithFacebook = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Aguarde...'
        });
        this.loading.present();
        this.entranceService
            .authFacebook()
            .then(function (_a) {
            var user = _a.user;
            _this.loading.dismiss();
            _this.navCtrl.setRoot(_this.nextPage || 'HomePage');
            return _this.userService.createUser(user);
        }, function (error) {
            console.log(error);
            _this.loading.dismiss();
            var _a = _this.errorHandlerHelper
                .getFirebaseMessage(error), title = _a.title, message = _a.message;
            var alert = _this.alertCtrl.create({
                title: title,
                message: message,
                buttons: ['Ok']
            });
            alert.present();
        });
    };
    EntrancePage.prototype.goToSignupPage = function () {
        this.navCtrl.push('SignupPage', {
            nextPage: this.nextPage
        });
    };
    EntrancePage.prototype.goToSigninPage = function () {
        this.navCtrl.push('SigninPage', {
            nextPage: this.nextPage
        });
    };
    EntrancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-entrance',template:/*ion-inline-start:"D:\Documents\Repos\Pessoais\askforfood\src\pages\entrance\entrance.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      AskForFood\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="cf-p-content">\n    <button\n      (click)="authWithFacebook()"\n      class="cf-p-btn-facebook"\n      ion-button block color="facebook"\n    >\n      Facebook\n    </button>\n    <button\n      (click)="goToSigninPage()"\n      ion-button block color="secondary"\n      class="cf-p-btn-signin"\n    >\n      Entrar com E-mail\n    </button>\n    <button\n      (click)="goToSignupPage()"\n      class="cf-p-btn-signup"\n      ion-button block color="link"\n    >\n      Cadastrar com E-mail\n    </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\Documents\Repos\Pessoais\askforfood\src\pages\entrance\entrance.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__entrance_service__["a" /* EntranceService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__entrance_service__["a" /* EntranceService */],
            __WEBPACK_IMPORTED_MODULE_4__helpers__["a" /* ErrorHandlerHelper */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services__["e" /* UserService */]])
    ], EntrancePage);
    return EntrancePage;
}());

//# sourceMappingURL=entrance.js.map

/***/ }),

/***/ 640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntranceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EntranceService = (function () {
    function EntranceService(plt, facebook, afAuth) {
        this.plt = plt;
        this.facebook = facebook;
        this.afAuth = afAuth;
    }
    EntranceService.prototype.authFacebook = function () {
        var _this = this;
        if (this.plt.is('cordova')) {
            return this.facebook
                .login(['email', 'public_profile'])
                .then(function (res) {
                var facebookCredential = __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]
                    .FacebookAuthProvider
                    .credential(res.authResponse.accessToken);
                return _this.afAuth.auth
                    .signInWithCredential(facebookCredential);
            });
        }
        return this.afAuth.auth
            .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"].FacebookAuthProvider());
    };
    EntranceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], EntranceService);
    return EntranceService;
}());

//# sourceMappingURL=entrance.service.js.map

/***/ }),

/***/ 641:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var firebase = __webpack_require__(642);
__webpack_require__(650);
__webpack_require__(651);
__webpack_require__(652);
__webpack_require__(661);

module.exports = firebase;


/***/ }),

/***/ 642:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

__webpack_require__(643);
module.exports = __webpack_require__(43).default;


/***/ }),

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_polyfills_promise__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_polyfills_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_polyfills_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_shims_find__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_shims_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_shims_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_shims_findIndex__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_shims_findIndex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_shims_findIndex__);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




//# sourceMappingURL=index.js.map


/***/ }),

/***/ 644:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __global = (function () {
    if (typeof global !== 'undefined') {
        return global;
    }
    if (typeof window !== 'undefined') {
        return window;
    }
    if (typeof self !== 'undefined') {
        return self;
    }
    throw new Error('unable to locate global object');
})();
// Polyfill Promise
if (typeof Promise === 'undefined') {
    // HACK: TS throws an error if I attempt to use 'dot-notation'
    __global['Promise'] = Promise = __webpack_require__(645);
}

//# sourceMappingURL=promise.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(73)))

/***/ }),

/***/ 645:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate) {(function (root) {

  // Store setTimeout reference so promise-polyfill will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var setTimeoutFunc = setTimeout;

  function noop() {}
  
  // Polyfill for Function.prototype.bind
  function bind(fn, thisArg) {
    return function () {
      fn.apply(thisArg, arguments);
    };
  }

  function Promise(fn) {
    if (!(this instanceof Promise)) throw new TypeError('Promises must be constructed via new');
    if (typeof fn !== 'function') throw new TypeError('not a function');
    this._state = 0;
    this._handled = false;
    this._value = undefined;
    this._deferreds = [];

    doResolve(fn, this);
  }

  function handle(self, deferred) {
    while (self._state === 3) {
      self = self._value;
    }
    if (self._state === 0) {
      self._deferreds.push(deferred);
      return;
    }
    self._handled = true;
    Promise._immediateFn(function () {
      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
      if (cb === null) {
        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
        return;
      }
      var ret;
      try {
        ret = cb(self._value);
      } catch (e) {
        reject(deferred.promise, e);
        return;
      }
      resolve(deferred.promise, ret);
    });
  }

  function resolve(self, newValue) {
    try {
      // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
      if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
      if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
        var then = newValue.then;
        if (newValue instanceof Promise) {
          self._state = 3;
          self._value = newValue;
          finale(self);
          return;
        } else if (typeof then === 'function') {
          doResolve(bind(then, newValue), self);
          return;
        }
      }
      self._state = 1;
      self._value = newValue;
      finale(self);
    } catch (e) {
      reject(self, e);
    }
  }

  function reject(self, newValue) {
    self._state = 2;
    self._value = newValue;
    finale(self);
  }

  function finale(self) {
    if (self._state === 2 && self._deferreds.length === 0) {
      Promise._immediateFn(function() {
        if (!self._handled) {
          Promise._unhandledRejectionFn(self._value);
        }
      });
    }

    for (var i = 0, len = self._deferreds.length; i < len; i++) {
      handle(self, self._deferreds[i]);
    }
    self._deferreds = null;
  }

  function Handler(onFulfilled, onRejected, promise) {
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.promise = promise;
  }

  /**
   * Take a potentially misbehaving resolver function and make sure
   * onFulfilled and onRejected are only called once.
   *
   * Makes no guarantees about asynchrony.
   */
  function doResolve(fn, self) {
    var done = false;
    try {
      fn(function (value) {
        if (done) return;
        done = true;
        resolve(self, value);
      }, function (reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      });
    } catch (ex) {
      if (done) return;
      done = true;
      reject(self, ex);
    }
  }

  Promise.prototype['catch'] = function (onRejected) {
    return this.then(null, onRejected);
  };

  Promise.prototype.then = function (onFulfilled, onRejected) {
    var prom = new (this.constructor)(noop);

    handle(this, new Handler(onFulfilled, onRejected, prom));
    return prom;
  };

  Promise.all = function (arr) {
    return new Promise(function (resolve, reject) {
      if (!arr || typeof arr.length === 'undefined') throw new TypeError('Promise.all accepts an array');
      var args = Array.prototype.slice.call(arr);
      if (args.length === 0) return resolve([]);
      var remaining = args.length;

      function res(i, val) {
        try {
          if (val && (typeof val === 'object' || typeof val === 'function')) {
            var then = val.then;
            if (typeof then === 'function') {
              then.call(val, function (val) {
                res(i, val);
              }, reject);
              return;
            }
          }
          args[i] = val;
          if (--remaining === 0) {
            resolve(args);
          }
        } catch (ex) {
          reject(ex);
        }
      }

      for (var i = 0; i < args.length; i++) {
        res(i, args[i]);
      }
    });
  };

  Promise.resolve = function (value) {
    if (value && typeof value === 'object' && value.constructor === Promise) {
      return value;
    }

    return new Promise(function (resolve) {
      resolve(value);
    });
  };

  Promise.reject = function (value) {
    return new Promise(function (resolve, reject) {
      reject(value);
    });
  };

  Promise.race = function (values) {
    return new Promise(function (resolve, reject) {
      for (var i = 0, len = values.length; i < len; i++) {
        values[i].then(resolve, reject);
      }
    });
  };

  // Use polyfill for setImmediate for performance gains
  Promise._immediateFn = (typeof setImmediate === 'function' && function (fn) { setImmediate(fn); }) ||
    function (fn) {
      setTimeoutFunc(fn, 0);
    };

  Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
    if (typeof console !== 'undefined' && console) {
      console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
    }
  };

  /**
   * Set the immediate function to execute callbacks
   * @param fn {function} Function to execute
   * @deprecated
   */
  Promise._setImmediateFn = function _setImmediateFn(fn) {
    Promise._immediateFn = fn;
  };

  /**
   * Change the function to execute on unhandled rejection
   * @param {function} fn Function to execute on unhandled rejection
   * @deprecated
   */
  Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
    Promise._unhandledRejectionFn = fn;
  };
  
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Promise;
  } else if (!root.Promise) {
    root.Promise = Promise;
  }

})(this);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(646).setImmediate))

/***/ }),

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(647);
// On some exotic environments, it's not clear which object `setimmeidate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(73)))

/***/ }),

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(73), __webpack_require__(352)))

/***/ }),

/***/ 648:
/***/ (function(module, exports) {

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * This is the Array.prototype.find polyfill from MDN
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 * https://tc39.github.io/ecma262/#sec-array.prototype.find
 */
if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
        value: function (predicate) {
            // 1. Let O be ? ToObject(this value).
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }
            var o = Object(this);
            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;
            // 3. If IsCallable(predicate) is false, throw a TypeError exception.
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }
            // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
            var thisArg = arguments[1];
            // 5. Let k be 0.
            var k = 0;
            // 6. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ! ToString(k).
                // b. Let kValue be ? Get(O, Pk).
                // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
                // d. If testResult is true, return kValue.
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) {
                    return kValue;
                }
                // e. Increase k by 1.
                k++;
            }
            // 7. Return undefined.
            return undefined;
        }
    });
}

//# sourceMappingURL=find.js.map


/***/ }),

/***/ 649:
/***/ (function(module, exports) {

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * This is the Array.prototype.findIndex polyfill from MDN
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
 * https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
 */
if (!Array.prototype.findIndex) {
    Object.defineProperty(Array.prototype, 'findIndex', {
        value: function (predicate) {
            // 1. Let O be ? ToObject(this value).
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }
            var o = Object(this);
            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;
            // 3. If IsCallable(predicate) is false, throw a TypeError exception.
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }
            // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
            var thisArg = arguments[1];
            // 5. Let k be 0.
            var k = 0;
            // 6. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ! ToString(k).
                // b. Let kValue be ? Get(O, Pk).
                // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
                // d. If testResult is true, return k.
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) {
                    return k;
                }
                // e. Increase k by 1.
                k++;
            }
            // 7. Return -1.
            return -1;
        }
    });
}

//# sourceMappingURL=findIndex.js.map


/***/ }),

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

__webpack_require__(350);


/***/ }),

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = __webpack_require__(351);


/***/ }),

/***/ 652:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

__webpack_require__(653);


/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["registerMessaging"] = registerMessaging;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_controllers_window_controller__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_controllers_sw_controller__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firebase_app__ = __webpack_require__(43);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




function registerMessaging(instance) {
    var messagingName = 'messaging';
    var factoryMethod = function (app) {
        if (self && 'ServiceWorkerGlobalScope' in self) {
            return new __WEBPACK_IMPORTED_MODULE_1__src_controllers_sw_controller__["a" /* default */](app);
        }
        // Assume we are in the window context.
        return new __WEBPACK_IMPORTED_MODULE_0__src_controllers_window_controller__["a" /* default */](app);
    };
    var namespaceExports = {
        // no-inline
        Messaging: __WEBPACK_IMPORTED_MODULE_0__src_controllers_window_controller__["a" /* default */]
    };
    instance.INTERNAL.registerService(messagingName, factoryMethod, namespaceExports);
}
registerMessaging(__WEBPACK_IMPORTED_MODULE_2__firebase_app__["firebase"]);

//# sourceMappingURL=index.js.map


/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controller_interface__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_errors__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_worker_page_message__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_default_sw__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_notification_permission__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_fcm_details__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_base64_to_array_buffer__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__firebase_util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__firebase_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__firebase_util__);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








var WindowController = /** @class */ (function (_super) {
    __extends(WindowController, _super);
    /**
     * A service that provides a MessagingService instance.
     * @param {!firebase.app.App} app
     */
    function WindowController(app) {
        var _this = _super.call(this, app) || this;
        _this.messageObserver_ = null;
        _this.onMessage_ = Object(__WEBPACK_IMPORTED_MODULE_7__firebase_util__["createSubscribe"])(function (observer) {
            _this.messageObserver_ = observer;
        });
        _this.tokenRefreshObserver_ = null;
        _this.onTokenRefresh_ = Object(__WEBPACK_IMPORTED_MODULE_7__firebase_util__["createSubscribe"])(function (observer) {
            _this.tokenRefreshObserver_ = observer;
        });
        /**
         * @private
         * @type {ServiceWorkerRegistration}
         */
        _this.registrationToUse_;
        /**
         * @private
         * @type {Promise}
         */
        _this.manifestCheckPromise_;
        /**
         * @private
         * @type {firebase.Observer}
         */
        _this.messageObserver_ = null;
        /**
         * @private {!firebase.Subscribe} The subscribe function to the onMessage
         * observer.
         */
        _this.onMessage_ = Object(__WEBPACK_IMPORTED_MODULE_7__firebase_util__["createSubscribe"])(function (observer) {
            _this.messageObserver_ = observer;
        });
        /**
         * @private
         * @type {firebase.Observer}
         */
        _this.tokenRefreshObserver_ = null;
        _this.onTokenRefresh_ = Object(__WEBPACK_IMPORTED_MODULE_7__firebase_util__["createSubscribe"])(function (observer) {
            _this.tokenRefreshObserver_ = observer;
        });
        _this.setupSWMessageListener_();
        return _this;
    }
    /**
     * This method returns an FCM token if it can be generated.
     * The return promise will reject if the browser doesn't support
     * FCM, if permission is denied for notifications or it's not
     * possible to generate a token.
     * @export
     * @return {Promise<string> | Promise<null>} Returns a promise the
     * resolves to an FCM token or null if permission isn't granted.
     */
    WindowController.prototype.getToken = function () {
        var _this = this;
        // Check that the required API's are available
        if (!this.isSupported_()) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.UNSUPPORTED_BROWSER));
        }
        return this.manifestCheck_().then(function () {
            return _super.prototype.getToken.call(_this);
        });
    };
    /**
     * The method checks that a manifest is defined and has the correct GCM
     * sender ID.
     * @private
     * @return {Promise} Returns a promise that resolves if the manifest matches
     * our required sender ID
     */
    WindowController.prototype.manifestCheck_ = function () {
        var _this = this;
        if (this.manifestCheckPromise_) {
            return this.manifestCheckPromise_;
        }
        var manifestTag = document.querySelector('link[rel="manifest"]');
        if (!manifestTag) {
            this.manifestCheckPromise_ = Promise.resolve();
        }
        else {
            this.manifestCheckPromise_ = fetch(manifestTag.href)
                .then(function (response) {
                return response.json();
            })
                .catch(function () {
                // If the download or parsing fails allow check.
                // We only want to error if we KNOW that the gcm_sender_id is incorrect.
                return Promise.resolve();
            })
                .then(function (manifestContent) {
                if (!manifestContent) {
                    return;
                }
                if (!manifestContent['gcm_sender_id']) {
                    return;
                }
                if (manifestContent['gcm_sender_id'] !== '103953800507') {
                    throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.INCORRECT_GCM_SENDER_ID);
                }
            });
        }
        return this.manifestCheckPromise_;
    };
    /**
     * Request permission if it is not currently granted
     * @export
     * @returns {Promise} Resolves if the permission was granted, otherwise
     * rejects
     */
    WindowController.prototype.requestPermission = function () {
        var _this = this;
        if (Notification.permission === __WEBPACK_IMPORTED_MODULE_4__models_notification_permission__["a" /* default */].granted) {
            return Promise.resolve();
        }
        return new Promise(function (resolve, reject) {
            var managePermissionResult = function (result) {
                if (result === __WEBPACK_IMPORTED_MODULE_4__models_notification_permission__["a" /* default */].granted) {
                    return resolve();
                }
                else if (result === __WEBPACK_IMPORTED_MODULE_4__models_notification_permission__["a" /* default */].denied) {
                    return reject(_this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.PERMISSION_BLOCKED));
                }
                else {
                    return reject(_this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.PERMISSION_DEFAULT));
                }
            };
            // The Notification.requestPermission API was changed to
            // return a promise so now have to handle both in case
            // browsers stop support callbacks for promised version
            var permissionPromise = Notification.requestPermission(managePermissionResult);
            if (permissionPromise) {
                // Prefer the promise version as it's the future API.
                permissionPromise.then(managePermissionResult);
            }
        });
    };
    /**
     * This method allows a developer to override the default service worker and
     * instead use a custom service worker.
     * @export
     * @param {!ServiceWorkerRegistration} registration The service worker
     * registration that should be used to receive the push messages.
     */
    WindowController.prototype.useServiceWorker = function (registration) {
        if (!(registration instanceof ServiceWorkerRegistration)) {
            throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.SW_REGISTRATION_EXPECTED);
        }
        if (typeof this.registrationToUse_ !== 'undefined') {
            throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.USE_SW_BEFORE_GET_TOKEN);
        }
        this.registrationToUse_ = registration;
    };
    /**
     * This method allows a developer to override the default vapid key
     * and instead use a custom VAPID public key.
     * @export
     * @param {!string} publicKey A URL safe base64 encoded string.
     */
    WindowController.prototype.usePublicVapidKey = function (publicKey) {
        if (typeof publicKey !== 'string') {
            throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.INVALID_PUBLIC_VAPID_KEY);
        }
        if (typeof this.publicVapidKeyToUse_ !== 'undefined') {
            throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.USE_PUBLIC_KEY_BEFORE_GET_TOKEN);
        }
        var parsedKey = Object(__WEBPACK_IMPORTED_MODULE_6__helpers_base64_to_array_buffer__["a" /* default */])(publicKey);
        if (parsedKey.length !== 65) {
            throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.PUBLIC_KEY_DECRYPTION_FAILED);
        }
        this.publicVapidKeyToUse_ = parsedKey;
    };
    /**
     * @export
     * @param {!firebase.Observer|function(*)} nextOrObserver An observer object
     * or a function triggered on message.
     * @param {function(!Error)=} optError Optional A function triggered on
     * message error.
     * @param {function()=} optCompleted Optional function triggered when the
     * observer is removed.
     * @return {!function()} The unsubscribe function for the observer.
     */
    WindowController.prototype.onMessage = function (nextOrObserver, optError, optCompleted) {
        return this.onMessage_(nextOrObserver, optError, optCompleted);
    };
    /**
     * @export
     * @param {!firebase.Observer|function()} nextOrObserver An observer object
     * or a function triggered on token refresh.
     * @param {function(!Error)=} optError Optional A function
     * triggered on token refresh error.
     * @param {function()=} optCompleted Optional function triggered when the
     * observer is removed.
     * @return {!function()} The unsubscribe function for the observer.
     */
    WindowController.prototype.onTokenRefresh = function (nextOrObserver, optError, optCompleted) {
        return this.onTokenRefresh_(nextOrObserver, optError, optCompleted);
    };
    /**
     * Given a registration, wait for the service worker it relates to
     * become activer
     * @private
     * @param  {ServiceWorkerRegistration} registration Registration to wait
     * for service worker to become active
     * @return {Promise<!ServiceWorkerRegistration>} Wait for service worker
     * registration to become active
     */
    WindowController.prototype.waitForRegistrationToActivate_ = function (registration) {
        var _this = this;
        var serviceWorker = registration.installing || registration.waiting || registration.active;
        return new Promise(function (resolve, reject) {
            if (!serviceWorker) {
                // This is a rare scenario but has occured in firefox
                reject(_this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.NO_SW_IN_REG));
                return;
            }
            // Because the Promise function is called on next tick there is a
            // small chance that the worker became active or redundant already.
            if (serviceWorker.state === 'activated') {
                resolve(registration);
                return;
            }
            if (serviceWorker.state === 'redundant') {
                reject(_this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.SW_REG_REDUNDANT));
                return;
            }
            var stateChangeListener = function () {
                if (serviceWorker.state === 'activated') {
                    resolve(registration);
                }
                else if (serviceWorker.state === 'redundant') {
                    reject(_this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.SW_REG_REDUNDANT));
                }
                else {
                    // Return early and wait to next state change
                    return;
                }
                serviceWorker.removeEventListener('statechange', stateChangeListener);
            };
            serviceWorker.addEventListener('statechange', stateChangeListener);
        });
    };
    /**
     * This will regiater the default service worker and return the registration
     * @private
     * @return {Promise<!ServiceWorkerRegistration>} The service worker
     * registration to be used for the push service.
     */
    WindowController.prototype.getSWRegistration_ = function () {
        var _this = this;
        if (this.registrationToUse_) {
            return this.waitForRegistrationToActivate_(this.registrationToUse_);
        }
        // Make the registration null so we know useServiceWorker will not
        // use a new service worker as registrationToUse_ is no longer undefined
        this.registrationToUse_ = null;
        return navigator.serviceWorker
            .register(__WEBPACK_IMPORTED_MODULE_3__models_default_sw__["a" /* default */].path, {
            scope: __WEBPACK_IMPORTED_MODULE_3__models_default_sw__["a" /* default */].scope
        })
            .catch(function (err) {
            throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.FAILED_DEFAULT_REGISTRATION, {
                browserErrorMessage: err.message
            });
        })
            .then(function (registration) {
            return _this.waitForRegistrationToActivate_(registration).then(function () {
                _this.registrationToUse_ = registration;
                // We update after activation due to an issue with Firefox v49 where
                // a race condition occassionally causes the service work to not
                // install
                registration.update();
                return registration;
            });
        });
    };
    /**
     * This will return the default VAPID key or the uint8array version of the public VAPID key
     * provided by the developer.
     * @private
     */
    WindowController.prototype.getPublicVapidKey_ = function () {
        if (this.publicVapidKeyToUse_) {
            return Promise.resolve(this.publicVapidKeyToUse_);
        }
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_5__models_fcm_details__["a" /* default */].DEFAULT_PUBLIC_VAPID_KEY);
    };
    /**
     * Gets a PushSubscription for the current user.
     * @private
     * @param {ServiceWorkerRegistration} registration
     * @return {Promise<PushSubscription>}
     */
    WindowController.prototype.getPushSubscription_ = function (swRegistration, publicVapidKey) {
        // Check for existing subscription first
        var subscription;
        var fcmTokenDetails;
        return swRegistration.pushManager.getSubscription().then(function (subscription) {
            if (subscription) {
                return subscription;
            }
            return swRegistration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: publicVapidKey
            });
        });
    };
    /**
     * This method will set up a message listener to handle
     * events from the service worker that should trigger
     * events in the page.
     *
     * @private
     */
    WindowController.prototype.setupSWMessageListener_ = function () {
        var _this = this;
        if (!('serviceWorker' in navigator)) {
            return;
        }
        navigator.serviceWorker.addEventListener('message', function (event) {
            if (!event.data || !event.data[__WEBPACK_IMPORTED_MODULE_2__models_worker_page_message__["a" /* default */].PARAMS.TYPE_OF_MSG]) {
                // Not a message from FCM
                return;
            }
            var workerPageMessage = event.data;
            switch (workerPageMessage[__WEBPACK_IMPORTED_MODULE_2__models_worker_page_message__["a" /* default */].PARAMS.TYPE_OF_MSG]) {
                case __WEBPACK_IMPORTED_MODULE_2__models_worker_page_message__["a" /* default */].TYPES_OF_MSG.PUSH_MSG_RECEIVED:
                case __WEBPACK_IMPORTED_MODULE_2__models_worker_page_message__["a" /* default */].TYPES_OF_MSG.NOTIFICATION_CLICKED:
                    var pushMessage = workerPageMessage[__WEBPACK_IMPORTED_MODULE_2__models_worker_page_message__["a" /* default */].PARAMS.DATA];
                    if (_this.messageObserver_) {
                        _this.messageObserver_.next(pushMessage);
                    }
                    break;
                default:
                    // Noop.
                    break;
            }
        }, false);
    };
    /**
     * Checks to see if the required API's are valid or not.
     * @private
     * @return {boolean} Returns true if the desired APIs are available.
     */
    WindowController.prototype.isSupported_ = function () {
        return ('serviceWorker' in navigator &&
            'PushManager' in window &&
            'Notification' in window &&
            'fetch' in window &&
            ServiceWorkerRegistration.prototype.hasOwnProperty('showNotification') &&
            PushSubscription.prototype.hasOwnProperty('getKey'));
    };
    return WindowController;
}(__WEBPACK_IMPORTED_MODULE_0__controller_interface__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (WindowController);

//# sourceMappingURL=window-controller.js.map


/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__db_interface__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__errors__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_array_buffer_to_base64__ = __webpack_require__(621);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var FCM_TOKEN_OBJ_STORE = 'fcm_token_object_Store';
var DB_VERSION = 1;
/** @record */
function ValidateInput() { }
/** @type {string|undefined} */
ValidateInput.prototype.fcmToken;
/** @type {string|undefined} */
ValidateInput.prototype.swScope;
/** @type {string|undefined} */
ValidateInput.prototype.vapidKey;
/** @type {PushSubscription|undefined} */
ValidateInput.prototype.subscription;
/** @type {string|undefined} */
ValidateInput.prototype.fcmSenderId;
/** @type {string|undefined} */
ValidateInput.prototype.fcmPushSet;
var TokenDetailsModel = /** @class */ (function (_super) {
    __extends(TokenDetailsModel, _super);
    function TokenDetailsModel() {
        return _super.call(this, TokenDetailsModel.DB_NAME, DB_VERSION) || this;
    }
    Object.defineProperty(TokenDetailsModel, "DB_NAME", {
        get: function () {
            return 'fcm_token_details_db';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @override
     */
    TokenDetailsModel.prototype.onDBUpgrade = function (db) {
        var objectStore = db.createObjectStore(FCM_TOKEN_OBJ_STORE, {
            keyPath: 'swScope'
        });
        // Make sure the sender ID can be searched
        objectStore.createIndex('fcmSenderId', 'fcmSenderId', {
            unique: false
        });
        objectStore.createIndex('fcmToken', 'fcmToken', {
            unique: true
        });
    };
    /**
     * This method takes an object and will check for known arguments and
     * validate the input.
     * @private
     * @param {!ValidateInput} input
     * @return {!Promise} Returns promise that resolves if input is valid,
     * rejects otherwise.
     */
    TokenDetailsModel.prototype.validateInputs_ = function (input) {
        if (input.fcmToken) {
            if (typeof input.fcmToken !== 'string' || input.fcmToken.length === 0) {
                return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.BAD_TOKEN));
            }
        }
        if (input.swScope) {
            if (typeof input.swScope !== 'string' || input.swScope.length === 0) {
                return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.BAD_SCOPE));
            }
        }
        if (input.vapidKey) {
            if (!(input.vapidKey instanceof Uint8Array) ||
                input.vapidKey.length !== 65) {
                return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.BAD_VAPID_KEY));
            }
        }
        if (input.subscription) {
            if (!(input.subscription instanceof PushSubscription)) {
                return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.BAD_SUBSCRIPTION));
            }
        }
        if (input.fcmSenderId) {
            if (typeof input.fcmSenderId !== 'string' ||
                input.fcmSenderId.length === 0) {
                return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.BAD_SENDER_ID));
            }
        }
        if (input.fcmPushSet) {
            if (typeof input.fcmPushSet !== 'string' ||
                input.fcmPushSet.length === 0) {
                return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.BAD_PUSH_SET));
            }
        }
        return Promise.resolve();
    };
    /**
     * Given a token, this method will look up the details in indexedDB.
     * @param {string} fcmToken
     * @return {Promise<Object>} The details associated with that token.
     */
    TokenDetailsModel.prototype.getTokenDetailsFromToken = function (fcmToken) {
        var _this = this;
        if (!fcmToken) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.BAD_TOKEN));
        }
        return this.validateInputs_({ fcmToken: fcmToken })
            .then(function () {
            return _this.openDatabase();
        })
            .then(function (db) {
            return new Promise(function (resolve, reject) {
                var transaction = db.transaction([FCM_TOKEN_OBJ_STORE]);
                var objectStore = transaction.objectStore(FCM_TOKEN_OBJ_STORE);
                var index = objectStore.index('fcmToken');
                var request = index.get(fcmToken);
                request.onerror = function (event) {
                    reject(event.target.error);
                };
                request.onsuccess = function (event) {
                    var result = event.target.result
                        ? event.target.result
                        : null;
                    resolve(result);
                };
            });
        });
    };
    /**
     * Given a service worker scope, this method will look up the details in
     * indexedDB.
     * @public
     * @param {string} swScope
     * @return {Promise<Object>} The details associated with that token.
     */
    TokenDetailsModel.prototype.getTokenDetailsFromSWScope = function (swScope) {
        var _this = this;
        if (!swScope) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.BAD_SCOPE));
        }
        return this.validateInputs_({ swScope: swScope })
            .then(function () {
            return _this.openDatabase();
        })
            .then(function (db) {
            return new Promise(function (resolve, reject) {
                var transaction = db.transaction([FCM_TOKEN_OBJ_STORE]);
                var objectStore = transaction.objectStore(FCM_TOKEN_OBJ_STORE);
                var scopeRequest = objectStore.get(swScope);
                scopeRequest.onerror = function (event) {
                    reject(event.target.error);
                };
                scopeRequest.onsuccess = function (event) {
                    var result = event.target.result
                        ? event.target.result
                        : null;
                    resolve(result);
                };
            });
        });
    };
    /**
     * Save the details for the fcm token for re-use at a later date.
     * @param {{swScope: !string, vapidKey: !string,
     * subscription: !PushSubscription, fcmSenderId: !string, fcmToken: !string,
     * fcmPushSet: !string}} input A plain js object containing args to save.
     * @return {Promise<void>}
     */
    TokenDetailsModel.prototype.saveTokenDetails = function (_a) {
        var _this = this;
        var swScope = _a.swScope, vapidKey = _a.vapidKey, subscription = _a.subscription, fcmSenderId = _a.fcmSenderId, fcmToken = _a.fcmToken, fcmPushSet = _a.fcmPushSet;
        if (!swScope) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.BAD_SCOPE));
        }
        if (!vapidKey) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.BAD_VAPID_KEY));
        }
        if (!subscription) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.BAD_SUBSCRIPTION));
        }
        if (!fcmSenderId) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.BAD_SENDER_ID));
        }
        if (!fcmToken) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.BAD_TOKEN));
        }
        if (!fcmPushSet) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.BAD_PUSH_SET));
        }
        return this.validateInputs_({
            swScope: swScope,
            vapidKey: vapidKey,
            subscription: subscription,
            fcmSenderId: fcmSenderId,
            fcmToken: fcmToken,
            fcmPushSet: fcmPushSet
        })
            .then(function () {
            return _this.openDatabase();
        })
            .then(function (db) {
            /**
             * @dict
             */
            var details = {
                swScope: swScope,
                vapidKey: Object(__WEBPACK_IMPORTED_MODULE_2__helpers_array_buffer_to_base64__["a" /* default */])(vapidKey),
                endpoint: subscription.endpoint,
                auth: Object(__WEBPACK_IMPORTED_MODULE_2__helpers_array_buffer_to_base64__["a" /* default */])(subscription['getKey']('auth')),
                p256dh: Object(__WEBPACK_IMPORTED_MODULE_2__helpers_array_buffer_to_base64__["a" /* default */])(subscription['getKey']('p256dh')),
                fcmSenderId: fcmSenderId,
                fcmToken: fcmToken,
                fcmPushSet: fcmPushSet,
                createTime: Date.now()
            };
            return new Promise(function (resolve, reject) {
                var transaction = db.transaction([FCM_TOKEN_OBJ_STORE], _this.TRANSACTION_READ_WRITE);
                var objectStore = transaction.objectStore(FCM_TOKEN_OBJ_STORE);
                var request = objectStore.put(details);
                request.onerror = function (event) {
                    reject(event.target.error);
                };
                request.onsuccess = function (event) {
                    resolve();
                };
            });
        });
    };
    /**
     * This method deletes details of the current FCM token.
     * It's returning a promise in case we need to move to an async
     * method for deleting at a later date.
     * @return {Promise<Object>} Resolves once the FCM token details have been
     * deleted and returns the deleted details.
     */
    TokenDetailsModel.prototype.deleteToken = function (token) {
        var _this = this;
        if (typeof token !== 'string' || token.length === 0) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.INVALID_DELETE_TOKEN));
        }
        return this.getTokenDetailsFromToken(token).then(function (details) {
            if (!details) {
                throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.DELETE_TOKEN_NOT_FOUND);
            }
            return _this.openDatabase().then(function (db) {
                return new Promise(function (resolve, reject) {
                    var transaction = db.transaction([FCM_TOKEN_OBJ_STORE], _this.TRANSACTION_READ_WRITE);
                    var objectStore = transaction.objectStore(FCM_TOKEN_OBJ_STORE);
                    var request = objectStore.delete(details['swScope']);
                    request.onerror = function (event) {
                        reject(event.target.error);
                    };
                    request.onsuccess = function (event) {
                        if (event.target.result === 0) {
                            reject(_this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.FAILED_TO_DELETE_TOKEN));
                            return;
                        }
                        resolve(details);
                    };
                });
            });
        });
    };
    return TokenDetailsModel;
}(__WEBPACK_IMPORTED_MODULE_0__db_interface__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (TokenDetailsModel);

//# sourceMappingURL=token-details-model.js.map


/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__db_interface__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__errors__ = __webpack_require__(620);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var FCM_VAPID_OBJ_STORE = 'fcm_vapid_object_Store';
var DB_VERSION = 1;
var UNCOMPRESSED_PUBLIC_KEY_SIZE = 65;
var VapidDetailsModel = /** @class */ (function (_super) {
    __extends(VapidDetailsModel, _super);
    function VapidDetailsModel() {
        return _super.call(this, VapidDetailsModel.DB_NAME, DB_VERSION) || this;
    }
    Object.defineProperty(VapidDetailsModel, "DB_NAME", {
        get: function () {
            return 'fcm_vapid_details_db';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @override
     * @param {IDBDatabase} db
     */
    VapidDetailsModel.prototype.onDBUpgrade = function (db) {
        db.createObjectStore(FCM_VAPID_OBJ_STORE, {
            keyPath: 'swScope'
        });
    };
    /**
     * Given a service worker scope, this method will look up the vapid key
     * in indexedDB.
     */
    VapidDetailsModel.prototype.getVapidFromSWScope = function (swScope) {
        if (typeof swScope !== 'string' || swScope.length === 0) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.BAD_SCOPE));
        }
        return this.openDatabase().then(function (db) {
            return new Promise(function (resolve, reject) {
                var transaction = db.transaction([FCM_VAPID_OBJ_STORE]);
                var objectStore = transaction.objectStore(FCM_VAPID_OBJ_STORE);
                var scopeRequest = objectStore.get(swScope);
                scopeRequest.onerror = function () {
                    reject(scopeRequest.error);
                };
                scopeRequest.onsuccess = function () {
                    var result = scopeRequest.result;
                    var vapidKey = null;
                    if (result) {
                        vapidKey = result.vapidKey;
                    }
                    resolve(vapidKey);
                };
            });
        });
    };
    /**
     * Save a vapid key against a swScope for later date.
     */
    VapidDetailsModel.prototype.saveVapidDetails = function (swScope, vapidKey) {
        var _this = this;
        if (typeof swScope !== 'string' || swScope.length === 0) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.BAD_SCOPE));
        }
        if (vapidKey === null || vapidKey.length !== UNCOMPRESSED_PUBLIC_KEY_SIZE) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.BAD_VAPID_KEY));
        }
        var details = {
            swScope: swScope,
            vapidKey: vapidKey
        };
        return this.openDatabase().then(function (db) {
            return new Promise(function (resolve, reject) {
                var transaction = db.transaction([FCM_VAPID_OBJ_STORE], _this.TRANSACTION_READ_WRITE);
                var objectStore = transaction.objectStore(FCM_VAPID_OBJ_STORE);
                var request = objectStore.put(details);
                request.onerror = function () {
                    reject(request.error);
                };
                request.onsuccess = function () {
                    resolve();
                };
            });
        });
    };
    /**
     * This method deletes details of the current FCM VAPID key for a SW scope.
     * Resolves once the scope/vapid details have been deleted and returns the
     * deleted vapid key.
     */
    VapidDetailsModel.prototype.deleteVapidDetails = function (swScope) {
        var _this = this;
        return this.getVapidFromSWScope(swScope).then(function (vapidKey) {
            if (!vapidKey) {
                throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.DELETE_SCOPE_NOT_FOUND);
            }
            return _this.openDatabase().then(function (db) {
                return new Promise(function (resolve, reject) {
                    var transaction = db.transaction([FCM_VAPID_OBJ_STORE], _this.TRANSACTION_READ_WRITE);
                    var objectStore = transaction.objectStore(FCM_VAPID_OBJ_STORE);
                    var request = objectStore.delete(swScope);
                    request.onerror = function () {
                        reject(request.error);
                    };
                    request.onsuccess = function () {
                        if (request.result === 0) {
                            reject(_this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.FAILED_DELETE_VAPID_KEY));
                            return;
                        }
                        resolve(vapidKey);
                    };
                });
            });
        });
    };
    return VapidDetailsModel;
}(__WEBPACK_IMPORTED_MODULE_0__db_interface__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (VapidDetailsModel);

//# sourceMappingURL=vapid-details-model.js.map


/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_util__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__firebase_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__errors__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_array_buffer_to_base64__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fcm_details__ = __webpack_require__(622);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





var IIDModel = /** @class */ (function () {
    function IIDModel() {
        this.errorFactory_ = new __WEBPACK_IMPORTED_MODULE_0__firebase_util__["ErrorFactory"]('messaging', 'Messaging', __WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].map);
    }
    /**
     * Given a PushSubscription and messagingSenderId, get an FCM token.
     * @public
     * @param  {string} senderId The 'messagingSenderId' to tie the token to.
     * @param  {PushSubscription} subscription The PushSusbcription to "federate".
     * @param  {Uint8Array} publicVapidKey The public VAPID key.
     * @return {Promise<!Object>} Returns the FCM token to be used in place
     * of the PushSubscription.
     */
    IIDModel.prototype.getToken = function (senderId, subscription, publicVapidKey) {
        var _this = this;
        var p256dh = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_array_buffer_to_base64__["a" /* default */])(subscription['getKey']('p256dh'));
        var auth = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_array_buffer_to_base64__["a" /* default */])(subscription['getKey']('auth'));
        var fcmSubscribeBody = "authorized_entity=" + senderId + "&" +
            ("endpoint=" + subscription.endpoint + "&") +
            ("encryption_key=" + p256dh + "&") +
            ("encryption_auth=" + auth);
        if (publicVapidKey !== __WEBPACK_IMPORTED_MODULE_3__fcm_details__["a" /* default */].DEFAULT_PUBLIC_VAPID_KEY) {
            var applicationPubKey = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_array_buffer_to_base64__["a" /* default */])(publicVapidKey);
            fcmSubscribeBody += "&application_pub_key=" + applicationPubKey;
        }
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var subscribeOptions = {
            method: 'POST',
            headers: headers,
            body: fcmSubscribeBody
        };
        return fetch(__WEBPACK_IMPORTED_MODULE_3__fcm_details__["a" /* default */].ENDPOINT + '/fcm/connect/subscribe', subscribeOptions)
            .then(function (response) { return response.json(); })
            .catch(function () {
            throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.TOKEN_SUBSCRIBE_FAILED);
        })
            .then(function (response) {
            var fcmTokenResponse = response;
            if (fcmTokenResponse['error']) {
                var message = fcmTokenResponse['error']['message'];
                throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.TOKEN_SUBSCRIBE_FAILED, {
                    message: message
                });
            }
            if (!fcmTokenResponse['token']) {
                throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.TOKEN_SUBSCRIBE_NO_TOKEN);
            }
            if (!fcmTokenResponse['pushSet']) {
                throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.TOKEN_SUBSCRIBE_NO_PUSH_SET);
            }
            return {
                token: fcmTokenResponse['token'],
                pushSet: fcmTokenResponse['pushSet']
            };
        });
    };
    /**
     * Update the underlying token details for fcmToken.
     */
    IIDModel.prototype.updateToken = function (senderId, fcmToken, fcmPushSet, subscription, publicVapidKey) {
        var _this = this;
        var p256dh = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_array_buffer_to_base64__["a" /* default */])(subscription['getKey']('p256dh'));
        var auth = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_array_buffer_to_base64__["a" /* default */])(subscription['getKey']('auth'));
        var fcmUpdateBody = "push_set=" + fcmPushSet + "&" +
            ("token=" + fcmToken + "&") +
            ("authorized_entity=" + senderId + "&") +
            ("endpoint=" + subscription.endpoint + "&") +
            ("encryption_key=" + p256dh + "&") +
            ("encryption_auth=" + auth);
        if (publicVapidKey !== __WEBPACK_IMPORTED_MODULE_3__fcm_details__["a" /* default */].DEFAULT_PUBLIC_VAPID_KEY) {
            var applicationPubKey = Object(__WEBPACK_IMPORTED_MODULE_2__helpers_array_buffer_to_base64__["a" /* default */])(publicVapidKey);
            fcmUpdateBody += "&application_pub_key=" + applicationPubKey;
        }
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var updateOptions = {
            method: 'POST',
            headers: headers,
            body: fcmUpdateBody
        };
        var updateFetchRes;
        return fetch(__WEBPACK_IMPORTED_MODULE_3__fcm_details__["a" /* default */].ENDPOINT + '/fcm/connect/subscribe', updateOptions)
            .then(function (fetchResponse) {
            updateFetchRes = fetchResponse;
            return fetchResponse.json();
        })
            .catch(function () {
            throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.TOKEN_UPDATE_FAILED);
        })
            .then(function (fcmTokenResponse) {
            if (!updateFetchRes.ok) {
                var message = fcmTokenResponse['error']['message'];
                throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.TOKEN_UPDATE_FAILED, {
                    message: message
                });
            }
            if (!fcmTokenResponse['token']) {
                throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.TOKEN_UPDATE_NO_TOKEN);
            }
            return fcmTokenResponse['token'];
        });
    };
    /**
     * Given a fcmToken, pushSet and messagingSenderId, delete an FCM token.
     */
    IIDModel.prototype.deleteToken = function (senderId, fcmToken, fcmPushSet) {
        var _this = this;
        var fcmUnsubscribeBody = "authorized_entity=" + senderId + "&" +
            ("token=" + fcmToken + "&") +
            ("pushSet=" + fcmPushSet);
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var unsubscribeOptions = {
            method: 'POST',
            headers: headers,
            body: fcmUnsubscribeBody
        };
        return fetch(__WEBPACK_IMPORTED_MODULE_3__fcm_details__["a" /* default */].ENDPOINT + '/fcm/connect/unsubscribe', unsubscribeOptions).then(function (fetchResponse) {
            if (!fetchResponse.ok) {
                return fetchResponse.json().then(function (fcmTokenResponse) {
                    if (fcmTokenResponse['error']) {
                        var message = fcmTokenResponse['error']['message'];
                        throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.TOKEN_UNSUBSCRIBE_FAILED, {
                            message: message
                        });
                    }
                }, function (err) {
                    throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__errors__["a" /* default */].codes.TOKEN_UNSUBSCRIBE_FAILED);
                });
            }
        });
    };
    return IIDModel;
}());
/* harmony default export */ __webpack_exports__["a"] = (IIDModel);

//# sourceMappingURL=iid-model.js.map


/***/ }),

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* harmony default export */ __webpack_exports__["a"] = ({
    path: '/firebase-messaging-sw.js',
    scope: '/firebase-cloud-messaging-push-scope'
});

//# sourceMappingURL=default-sw.js.map


/***/ }),

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* harmony default export */ __webpack_exports__["a"] = (function (base64String) {
    var padding = '='.repeat((4 - base64String.length % 4) % 4);
    var base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');
    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);
    for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
});;

//# sourceMappingURL=base64-to-array-buffer.js.map


/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controller_interface__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_errors__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_fcm_details__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_worker_page_message__ = __webpack_require__(626);
/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var FCM_MSG = 'FCM_MSG';
var SWController = /** @class */ (function (_super) {
    __extends(SWController, _super);
    function SWController(app) {
        var _this = _super.call(this, app) || this;
        self.addEventListener('push', function (e) { return _this.onPush_(e); }, false);
        self.addEventListener('pushsubscriptionchange', function (e) { return _this.onSubChange_(e); }, false);
        self.addEventListener('notificationclick', function (e) { return _this.onNotificationClick_(e); }, false);
        /**
         * @private
         * @type {function(Object)|null}
         */
        _this.bgMessageHandler_ = null;
        return _this;
    }
    /**
     * A handler for push events that shows notifications based on the content of
     * the payload.
     *
     * The payload must be a JSON-encoded Object with a `notification` key. The
     * value of the `notification` property will be used as the NotificationOptions
     * object passed to showNotification. Additionally, the `title` property of the
     * notification object will be used as the title.
     *
     * If there is no notification data in the payload then no notification will be
     * shown.
     * @private
     */
    SWController.prototype.onPush_ = function (event) {
        var _this = this;
        var msgPayload;
        try {
            msgPayload = event.data.json();
        }
        catch (err) {
            // Not JSON so not an FCM message
            return;
        }
        var handleMsgPromise = this.hasVisibleClients_().then(function (hasVisibleClients) {
            if (hasVisibleClients) {
                // Do not need to show a notification.
                if (msgPayload.notification || _this.bgMessageHandler_) {
                    // Send to page
                    return _this.sendMessageToWindowClients_(msgPayload);
                }
                return;
            }
            var notificationDetails = _this.getNotificationData_(msgPayload);
            if (notificationDetails) {
                var notificationTitle_1 = notificationDetails.title || '';
                return _this.getSWRegistration_().then(function (reg) {
                    return reg.showNotification(notificationTitle_1, notificationDetails);
                });
            }
            else if (_this.bgMessageHandler_) {
                return _this.bgMessageHandler_(msgPayload);
            }
        });
        event.waitUntil(handleMsgPromise);
    };
    /**
     * @private
     */
    SWController.prototype.onSubChange_ = function (event) {
        var _this = this;
        var promiseChain = this.getSWRegistration_()
            .then(function (registration) {
            return registration.pushManager
                .getSubscription()
                .then(function (subscription) {
                // TODO: Check if it's still valid
                // TODO: If not, then update token
            })
                .catch(function (err) {
                // The best thing we can do is log this to the terminal so
                // developers might notice the error.
                var tokenDetailsModel = _this.getTokenDetailsModel();
                return tokenDetailsModel
                    .getTokenDetailsFromSWScope(registration.scope)
                    .then(function (tokenDetails) {
                    if (!tokenDetails) {
                        // This should rarely occure, but could if indexedDB
                        // is corrupted or wiped
                        throw err;
                    }
                    // Attempt to delete the token if we know it's bad
                    return _this.deleteToken(tokenDetails['fcmToken']).then(function () {
                        throw err;
                    });
                });
            });
        })
            .catch(function (err) {
            throw _this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.UNABLE_TO_RESUBSCRIBE, {
                message: err
            });
        });
        event.waitUntil(promiseChain);
    };
    /**
     * @private
     */
    SWController.prototype.onNotificationClick_ = function (event) {
        var _this = this;
        if (!(event.notification &&
            event.notification.data &&
            event.notification.data[FCM_MSG])) {
            // Not an FCM notification, do nothing.
            return;
        }
        // Prevent other listeners from receiving the event
        event.stopImmediatePropagation();
        event.notification.close();
        var msgPayload = event.notification.data[FCM_MSG];
        if (!msgPayload['notification']) {
            // Nothing to do.
            return;
        }
        var clickAction = msgPayload['notification']['click_action'];
        if (!clickAction) {
            // Nothing to do.
            return;
        }
        var promiseChain = this.getWindowClient_(clickAction)
            .then(function (windowClient) {
            if (!windowClient) {
                // Unable to find window client so need to open one.
                return self.clients.openWindow(clickAction);
            }
            return windowClient.focus();
        })
            .then(function (windowClient) {
            if (!windowClient) {
                // Window Client will not be returned if it's for a third party origin.
                return;
            }
            // Delete notification data from payload before sending to the page.
            var notificationData = msgPayload['notification'];
            delete msgPayload['notification'];
            var internalMsg = __WEBPACK_IMPORTED_MODULE_3__models_worker_page_message__["a" /* default */].createNewMsg(__WEBPACK_IMPORTED_MODULE_3__models_worker_page_message__["a" /* default */].TYPES_OF_MSG.NOTIFICATION_CLICKED, msgPayload);
            // Attempt to send a message to the client to handle the data
            // Is affected by: https://github.com/slightlyoff/ServiceWorker/issues/728
            return _this.attemptToMessageClient_(windowClient, internalMsg);
        });
        event.waitUntil(promiseChain);
    };
    /**
     * @private
     * @param {Object} msgPayload
     * @return {NotificationOptions|undefined}
     */
    SWController.prototype.getNotificationData_ = function (msgPayload) {
        if (!msgPayload) {
            return;
        }
        if (typeof msgPayload.notification !== 'object') {
            return;
        }
        var notificationInformation = Object.assign({}, msgPayload.notification);
        // Put the message payload under FCM_MSG name so we can identify the
        // notification as being an FCM notification vs a notification from
        // somewhere else (i.e. normal web push or developer generated
        // notification).
        notificationInformation['data'] = (_a = {},
            _a[FCM_MSG] = msgPayload,
            _a);
        return notificationInformation;
        var _a;
    };
    /**
     * Calling setBackgroundMessageHandler will opt in to some specific
     * behaviours.
     * 1.) If a notification doesn't need to be shown due to a window already
     * being visible, then push messages will be sent to the page.
     * 2.) If a notification needs to be shown, and the message contains no
     * notification data this method will be called
     * and the promise it returns will be passed to event.waitUntil.
     * If you do not set this callback then all push messages will let and the
     * developer can handle them in a their own 'push' event callback
     * @export
     * @param {function(Object)} callback The callback to be called when a push
     * message is received and a notification must be shown. The callback will
     * be given the data from the push message.
     */
    SWController.prototype.setBackgroundMessageHandler = function (callback) {
        if (!callback || typeof callback !== 'function') {
            throw this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.BG_HANDLER_FUNCTION_EXPECTED);
        }
        this.bgMessageHandler_ = callback;
    };
    /**
     * @private
     * @param {string} url The URL to look for when focusing a client.
     * @return {Object} Returns an existing window client or a newly opened
     * WindowClient.
     */
    SWController.prototype.getWindowClient_ = function (url) {
        // Use URL to normalize the URL when comparing to windowClients.
        // This at least handles whether to include trailing slashes or not
        var parsedURL = new URL(url, self.location).href;
        return self.clients
            .matchAll({
            type: 'window',
            includeUncontrolled: true
        })
            .then(function (clientList) {
            var suitableClient = null;
            for (var i = 0; i < clientList.length; i++) {
                var parsedClientUrl = new URL(clientList[i].url, self.location).href;
                if (parsedClientUrl === parsedURL) {
                    suitableClient = clientList[i];
                    break;
                }
            }
            if (suitableClient) {
                return suitableClient;
            }
            return null;
        });
    };
    /**
     * This message will attempt to send the message to a window client.
     * @private
     * @param {Object} client The WindowClient to send the message to.
     * @param {Object} message The message to send to the client.
     * @returns {Promise} Returns a promise that resolves after sending the
     * message. This does not guarantee that the message was successfully
     * received.
     */
    SWController.prototype.attemptToMessageClient_ = function (client, message) {
        // NOTE: This returns a promise in case this API is abstracted later on to
        // do additional work
        if (!client) {
            return Promise.reject(this.errorFactory_.create(__WEBPACK_IMPORTED_MODULE_1__models_errors__["a" /* default */].codes.NO_WINDOW_CLIENT_TO_MSG));
        }
        client.postMessage(message);
        return Promise.resolve();
    };
    /**
     * @private
     * @returns {Promise<boolean>} If there is currently a visible WindowClient,
     * this method will resolve to true, otherwise false.
     */
    SWController.prototype.hasVisibleClients_ = function () {
        return self.clients
            .matchAll({
            type: 'window',
            includeUncontrolled: true
        })
            .then(function (clientList) {
            return clientList.some(function (client) { return client.visibilityState === 'visible'; });
        });
    };
    /**
     * @private
     * @param {Object} msgPayload The data from the push event that should be sent
     * to all available pages.
     * @returns {Promise} Returns a promise that resolves once the message
     * has been sent to all WindowClients.
     */
    SWController.prototype.sendMessageToWindowClients_ = function (msgPayload) {
        var _this = this;
        return self.clients
            .matchAll({
            type: 'window',
            includeUncontrolled: true
        })
            .then(function (clientList) {
            var internalMsg = __WEBPACK_IMPORTED_MODULE_3__models_worker_page_message__["a" /* default */].createNewMsg(__WEBPACK_IMPORTED_MODULE_3__models_worker_page_message__["a" /* default */].TYPES_OF_MSG.PUSH_MSG_RECEIVED, msgPayload);
            return Promise.all(clientList.map(function (client) {
                return _this.attemptToMessageClient_(client, internalMsg);
            }));
        });
    };
    /**
     * This will register the default service worker and return the registration.
     * @private
     * @return {Promise<!ServiceWorkerRegistration>} The service worker
     * registration to be used for the push service.
     */
    SWController.prototype.getSWRegistration_ = function () {
        return Promise.resolve(self.registration);
    };
    /**
     * This will return the default VAPID key or the uint8array version of the
     * public VAPID key provided by the developer.
     */
    SWController.prototype.getPublicVapidKey_ = function () {
        var _this = this;
        return this.getSWRegistration_()
            .then(function (swReg) {
            return _this.getVapidDetailsModel().getVapidFromSWScope(swReg.scope);
        })
            .then(function (vapidKeyFromDatabase) {
            if (vapidKeyFromDatabase === null) {
                return __WEBPACK_IMPORTED_MODULE_2__models_fcm_details__["a" /* default */].DEFAULT_PUBLIC_VAPID_KEY;
            }
            return vapidKeyFromDatabase;
        });
    };
    return SWController;
}(__WEBPACK_IMPORTED_MODULE_0__controller_interface__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (SWController);

//# sourceMappingURL=sw-controller.js.map


/***/ }),

/***/ 661:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

__webpack_require__(354);


/***/ })

});
//# sourceMappingURL=0.js.map