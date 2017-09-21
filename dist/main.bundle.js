webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__recipes_recipe_start_recipe_start_component__ = __webpack_require__("../../../../../src/app/recipes/recipe-start/recipe-start.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_signin_signin_component__ = __webpack_require__("../../../../../src/app/auth/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_signup_signup_component__ = __webpack_require__("../../../../../src/app/auth/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recipes_recipe_edit_recipe_edit_component__ = __webpack_require__("../../../../../src/app/recipes/recipe-edit/recipe-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recipes_recipe_detail_recipe_detail_component__ = __webpack_require__("../../../../../src/app/recipes/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shopping_list_shopping_list_component__ = __webpack_require__("../../../../../src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recipes_recipes_component__ = __webpack_require__("../../../../../src/app/recipes/recipes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_auth_guard_service__ = __webpack_require__("../../../../../src/app/auth/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: '', redirectTo: 'signin', pathMatch: 'full' },
    { path: 'recipes', component: __WEBPACK_IMPORTED_MODULE_6__recipes_recipes_component__["a" /* RecipesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__auth_auth_guard_service__["a" /* AuthGuard */]], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_0__recipes_recipe_start_recipe_start_component__["a" /* RecipeStartComponent */] },
            { path: 'new', component: __WEBPACK_IMPORTED_MODULE_3__recipes_recipe_edit_recipe_edit_component__["a" /* RecipeEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__auth_auth_guard_service__["a" /* AuthGuard */]] },
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_4__recipes_recipe_detail_recipe_detail_component__["a" /* RecipeDetailComponent */] },
            { path: ':id/edit', component: __WEBPACK_IMPORTED_MODULE_3__recipes_recipe_edit_recipe_edit_component__["a" /* RecipeEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__auth_auth_guard_service__["a" /* AuthGuard */]] }
        ] },
    { path: 'shoppinglist', component: __WEBPACK_IMPORTED_MODULE_5__shopping_list_shopping_list_component__["a" /* ShoppingListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_2__auth_signup_signup_component__["a" /* SignupComponent */] },
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_1__auth_signin_signin_component__["a" /* SigninComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_8__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_8__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class='container'>\r\n  <div class='row'>\r\n    <div class='col-md-12'>\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_firebase__ = __webpack_require__("../../../../../src/app/auth/firebase.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.loadedFeature = 'recipe';
    }
    AppComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_3_firebase__["initializeApp"]({
            apiKey: __WEBPACK_IMPORTED_MODULE_4__auth_firebase__["a" /* firebaseConfig */].apiKey,
            authDomain: __WEBPACK_IMPORTED_MODULE_4__auth_firebase__["a" /* firebaseConfig */].authDomain
        });
        if (this.authService.isAuthenticated()) {
            this.router.navigate(['/recipes']);
        }
        else {
            this.router.navigate(['/']);
        }
    };
    AppComponent.prototype.onNavigate = function (feature) {
        this.loadedFeature = feature;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_storage_service__ = __webpack_require__("../../../../../src/app/shared/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recipes_recipe_service__ = __webpack_require__("../../../../../src/app/recipes/recipe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__recipes_recipes_component__ = __webpack_require__("../../../../../src/app/recipes/recipes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__recipes_recipe_list_recipe_list_component__ = __webpack_require__("../../../../../src/app/recipes/recipe-list/recipe-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__recipes_recipe_detail_recipe_detail_component__ = __webpack_require__("../../../../../src/app/recipes/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__recipes_recipe_list_recipe_item_recipe_item_component__ = __webpack_require__("../../../../../src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shopping_list_shopping_list_component__ = __webpack_require__("../../../../../src/app/shopping-list/shopping-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shopping_list_shopping_edit_shopping_edit_component__ = __webpack_require__("../../../../../src/app/shopping-list/shopping-edit/shopping-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_dropdown_directive__ = __webpack_require__("../../../../../src/app/shared/dropdown.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shopping_list_shopping_list_service__ = __webpack_require__("../../../../../src/app/shopping-list/shopping-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__recipes_recipe_start_recipe_start_component__ = __webpack_require__("../../../../../src/app/recipes/recipe-start/recipe-start.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__recipes_recipe_edit_recipe_edit_component__ = __webpack_require__("../../../../../src/app/recipes/recipe-edit/recipe-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__auth_signup_signup_component__ = __webpack_require__("../../../../../src/app/auth/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__auth_signin_signin_component__ = __webpack_require__("../../../../../src/app/auth/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__auth_auth_guard_service__ = __webpack_require__("../../../../../src/app/auth/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_9__recipes_recipes_component__["a" /* RecipesComponent */],
            __WEBPACK_IMPORTED_MODULE_10__recipes_recipe_list_recipe_list_component__["a" /* RecipeListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__recipes_recipe_detail_recipe_detail_component__["a" /* RecipeDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_12__recipes_recipe_list_recipe_item_recipe_item_component__["a" /* RecipeItemComponent */],
            __WEBPACK_IMPORTED_MODULE_13__shopping_list_shopping_list_component__["a" /* ShoppingListComponent */],
            __WEBPACK_IMPORTED_MODULE_14__shopping_list_shopping_edit_shopping_edit_component__["a" /* ShoppingEditComponent */],
            __WEBPACK_IMPORTED_MODULE_15__shared_dropdown_directive__["a" /* DropdownDirective */],
            __WEBPACK_IMPORTED_MODULE_18__recipes_recipe_start_recipe_start_component__["a" /* RecipeStartComponent */],
            __WEBPACK_IMPORTED_MODULE_19__recipes_recipe_edit_recipe_edit_component__["a" /* RecipeEditComponent */],
            __WEBPACK_IMPORTED_MODULE_20__auth_signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_21__auth_signin_signin_component__["a" /* SigninComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_17__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_16__shopping_list_shopping_list_service__["a" /* ShoppingListService */], __WEBPACK_IMPORTED_MODULE_2__recipes_recipe_service__["a" /* RecipeService */], __WEBPACK_IMPORTED_MODULE_1__shared_data_storage_service__["a" /* DataStorageService */], __WEBPACK_IMPORTED_MODULE_0__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_22__auth_auth_guard_service__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.authService.isAuthenticated();
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase__ = __webpack_require__("../../../../../src/app/auth/firebase.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
    }
    AuthService.prototype.signupUser = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().createUserWithEmailAndPassword(email, password)
                .then(function (response) {
                resolve(_this.router.navigate(['/recipes']));
                return response;
            })
                .catch(function (error) { return reject(error); });
        });
    };
    AuthService.prototype.signinUser = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().signInWithEmailAndPassword(email, password)
                .then(function (response) {
                resolve(response);
                __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser.getIdToken()
                    .then(function (token) {
                    _this.token = token;
                    _this.router.navigate(['/recipes']);
                });
            })
                .catch(function (error) { return reject(error); });
        });
    };
    AuthService.prototype.logout = function () {
        this.router.navigate(['/']);
        __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().signOut();
        this.token = null;
    };
    AuthService.prototype.getUser = function () {
        return __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser;
    };
    AuthService.prototype.getToken = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_firebase__["auth"]().currentUser.getIdToken()
            .then(function (token) { return _this.token = token; });
        return this.token;
    };
    AuthService.prototype.isAuthenticated = function () {
        return localStorage.getItem("firebase:authUser:" + __WEBPACK_IMPORTED_MODULE_0__firebase__["a" /* firebaseConfig */].apiKey + ":[DEFAULT]") != null;
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth/firebase.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyBFrUP06Qjn-MzTeY1LJnSWCtE5DJLNHww",
    authDomain: "recipe-book-f11e8.firebaseapp.com"
};
//# sourceMappingURL=firebase.js.map

/***/ }),

/***/ "../../../../../src/app/auth/signin/signin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2\">\r\n      <form (ngSubmit)=\"onSignin(f)\" #f=\"ngForm\">\r\n        <div class=\"form-group\">\r\n          <label for=\"email\">Email</label>\r\n          <input\r\n            type=\"email\"\r\n            id=\"email\"\r\n            name=\"email\" \r\n            ngModel \r\n            required\r\n            email\r\n            class=\"form-control\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"password\">Password</label>\r\n          <input\r\n            type=\"password\"\r\n            id=\"password\"\r\n            name=\"password\"\r\n            ngModel\r\n            required\r\n            class=\"form-control\">\r\n        </div>\r\n        <div class=\"alert alert-danger\" *ngIf=\"this.errors\">\r\n          <strong>{{ this.errors }}</strong>\r\n        </div>\r\n        <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid\">Sign In</button>\r\n      </form>\r\n      <br>\r\n      <br>\r\n      <p class='text-center'>No account? <a routerLink='/signup'>Signup</a></p>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/auth/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SigninComponent = (function () {
    function SigninComponent(authService) {
        this.authService = authService;
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.onSignin = function (form) {
        var _this = this;
        var email = form.value.email;
        var password = form.value.password;
        var signin = this.authService.signinUser(email, password);
        signin.catch(function (error) {
            _this.errors = 'Email or password does not match';
            return error;
        });
    };
    return SigninComponent;
}());
SigninComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-signin',
        template: __webpack_require__("../../../../../src/app/auth/signin/signin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/signin/signin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], SigninComponent);

var _a;
//# sourceMappingURL=signin.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2\">\r\n    <form [formGroup]=\"signupForm\" (ngSubmit)=\"onSignup()\">\r\n      <div class=\"form-group\">\r\n        <label for=\"email\">Email</label>\r\n        <input\r\n          type=\"email\"\r\n          id=\"email\"\r\n          formControlName=\"email\"\r\n          class=\"form-control\">\r\n      </div>\r\n      <div\r\n        class=\"alert alert-danger\"\r\n        *ngIf=\"!signupForm.controls.email.valid && signupForm.controls.email.touched\">\r\n        <strong>Please enter a valid email address</strong>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"password\">Password</label>\r\n        <input\r\n          type=\"password\"\r\n          id=\"password\"\r\n          formControlName=\"password\"\r\n          class=\"form-control\">\r\n      </div>\r\n      <div \r\n      class=\"alert alert-danger\" \r\n      *ngIf=\"!signupForm.controls.password.valid && signupForm.controls.password.touched\">\r\n        <strong>Please enter a password</strong>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"confirmPassword\">Confirm Password</label>\r\n        <input\r\n        type=\"password\" \r\n        id=\"confirmPassword\"\r\n        formControlName=\"passwordConfirm\"\r\n        class=\"form-control\">\r\n      </div>\r\n      <div \r\n        class=\"alert alert-danger\" \r\n        *ngIf=\"!signupForm.controls.passwordConfirm.valid && signupForm.controls.passwordConfirm.touched\">\r\n        <strong>Please confirm password</strong>\r\n      </div>\r\n      <div\r\n        class=\"alert alert-danger\"\r\n        *ngIf=\"errors.passwordError\">\r\n          <strong>{{ this.errors.passwordError }}</strong>\r\n      </div>\r\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!signupForm.valid\">Sign Up</button>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = (function () {
    function SignupComponent(authService) {
        this.authService = authService;
        this.errors = {
            passwordError: ''
        };
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signupForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email]),
            'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required),
            'passwordConfirm': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required)
        });
    };
    SignupComponent.prototype.onSignup = function () {
        var _this = this;
        if (this.signupForm.value.password !== this.signupForm.value.passwordConfirm) {
            return this.errors.passwordError = "Password Do Not Match";
        }
        if (this.signupForm.value.passwordConfirm.length < 6) {
            return this.errors.passwordError = "Password must be at least 6 character long";
        }
        var _a = this.signupForm.value, email = _a.email, password = _a.password;
        var signup = this.authService.signupUser(email, password);
        signup.catch(function (error) {
            _this.errors.passwordError = "Email is already in use";
            return error;
        });
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/auth/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/signup/signup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], SignupComponent);

var _a;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class='navbar navbar-default'>\r\n  <div class='container-fluid'>\r\n    <div class='navbar-header'>\r\n      <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='#navbar'>\r\n        <span class='icon-bar'></span>\r\n        <span class='icon-bar'></span>\r\n        <span class='icon-bar'></span>\r\n      </button>\r\n      <a routerLink=\"/recipes\" class='navbar-brand'>Recipe Book</a>\r\n    </div>\r\n\r\n    <div class='collapse navbar-collapse' id='navbar'>\r\n      <ul class='nav navbar-nav'>\r\n        <li routerLinkActive=\"active\"><a routerLink=\"/recipes\">Recipes</a></li>\r\n        <li routerLinkActive=\"active\"><a routerLink=\"/shoppinglist\">Shopping List</a></li>\r\n      </ul>\r\n      <ul class='nav navbar-nav navbar-right'>\r\n        <ng-template [ngIf]=\"!authService.isAuthenticated()\">\r\n          <li routerLinkActive=\"active\"><a routerLink=\"signup\">Sign Up</a></li>\r\n          <li routerLinkActive=\"active\"><a routerLink=\"signin\">Sign In</a></li>\r\n        </ng-template>\r\n        <li><a style=\"cursor: pointer;\" (click)=\"onLogout()\" *ngIf=\"authService.isAuthenticated()\">Sign Out</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_storage_service__ = __webpack_require__("../../../../../src/app/shared/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(dataStorageService, authService) {
        this.dataStorageService = dataStorageService;
        this.authService = authService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onSaveRecipes = function () {
        this.dataStorageService.storeRecipes()
            .subscribe(function (response) {
            console.log(response);
        });
    };
    HeaderComponent.prototype.onGetRecipes = function () {
        this.dataStorageService.getRecipes();
    };
    HeaderComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_data_storage_service__["a" /* DataStorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/recipes/recipe-detail/recipe-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/recipes/recipe-detail/recipe-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='row'>\r\n  <div class='col-xs-12'>\r\n    <img\r\n      [src]=\"recipe.imagePath\"\r\n      alt='{{ recipe.name }} image'\r\n      class='img-repsosive'\r\n      style='max-height: 300px;'>\r\n  </div>\r\n</div>\r\n\r\n<div class='row'>\r\n  <div class='col-xs-12'>\r\n    <h1>{{ recipe.name }}</h1>\r\n  </div>\r\n</div>\r\n\r\n<div class='row'>\r\n  <div class='col-xs-12'>\r\n    <div\r\n      class='btn-group'\r\n      appDropdown>\r\n      <button\r\n        type='button'\r\n        class='btn btn-primary dropdown-toggle'>\r\n        Manage Recipe <span class='caret'></span>\r\n      </button>\r\n      <ul class='dropdown-menu'>\r\n        <li><a (click)='onAddToShoppingList()' style=\"cursor: pointer;\">Add to Shopping List</a></li>\r\n        <li><a style=\"cursor: pointer;\" (click)=\"onEditRecipe()\">Edit Recipe</a></li>\r\n        <li><a style=\"cursor: pointer;\" (click)=\"onDeleteRecipe()\">Delete Recipe</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class='row'>\r\n  <div class='col-xs-12'>\r\n    {{ recipe.description }}\r\n  </div>\r\n</div>\r\n\r\n<div class='row'>\r\n  <div class='col-xs-12'>\r\n    <ul class='list-group'>\r\n      <li\r\n        class='list-group-item'\r\n        *ngFor='let ingredient of recipe.ingredients'>\r\n        {{ ingredient.name }} - {{ ingredient.amount }}\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/recipes/recipe-detail/recipe-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_data_storage_service__ = __webpack_require__("../../../../../src/app/shared/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recipe_service__ = __webpack_require__("../../../../../src/app/recipes/recipe.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecipeDetailComponent = (function () {
    function RecipeDetailComponent(recipeService, route, router, dataStorageService) {
        this.recipeService = recipeService;
        this.route = route;
        this.router = router;
        this.dataStorageService = dataStorageService;
    }
    RecipeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = +params['id'];
            _this.recipe = _this.recipeService.getRecipe(_this.id);
        });
    };
    RecipeDetailComponent.prototype.onAddToShoppingList = function () {
        this.recipeService.addToShoppingList(this.recipe.ingredients);
        this.dataStorageService.storeShoppingList().subscribe(function (response) { return response; });
    };
    RecipeDetailComponent.prototype.onEditRecipe = function () {
        this.router.navigate(['edit'], { relativeTo: this.route });
    };
    RecipeDetailComponent.prototype.onDeleteRecipe = function () {
        this.recipeService.deleteRecipe(this.id);
        this.router.navigate(['/recipes']);
        this.dataStorageService.deleteRecipe(this.id);
    };
    return RecipeDetailComponent;
}());
RecipeDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-recipe-detail',
        template: __webpack_require__("../../../../../src/app/recipes/recipe-detail/recipe-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/recipes/recipe-detail/recipe-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__recipe_service__["a" /* RecipeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__recipe_service__["a" /* RecipeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__shared_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_data_storage_service__["a" /* DataStorageService */]) === "function" && _d || Object])
], RecipeDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=recipe-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/recipes/recipe-edit/recipe-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.ng-invalid.ng-touched{\r\n  border: 1px solid red;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/recipes/recipe-edit/recipe-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    <form [formGroup]=\"recipeForm\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"row\">\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-12\">\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">Name (Required)</label>\r\n              <input\r\n                type=\"text\"\r\n                id=\"text\"\r\n                formControlName=\"name\"\r\n                class='form-control'>\r\n            </div>\r\n            <div\r\n              class=\"alert alert-danger text-center\"\r\n              *ngIf=\"!recipeForm.controls.name.valid && recipeForm.controls.name.touched\">\r\n              <strong>Recipe Must Have a Name</strong>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-12\">\r\n            <div class=\"form-group\">\r\n              <label for=\"imagePath\">Image URL</label>\r\n              <input\r\n                type=\"text\"\r\n                id=\"imagePath\"\r\n                formControlName=\"imagePath\"\r\n                class=\"form-control\"\r\n                #imagePath>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-12\">\r\n            <img\r\n              class=\"img-responsive\" \r\n              [src]=\"imagePath.value\">\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-12\">\r\n            <div class=\"form-group\">\r\n              <label for=\"description\">Description</label>\r\n              <textarea\r\n                type=\"text\"\r\n                name=\"description\"\r\n                id=\"description\"\r\n                formControlName=\"description\"\r\n                class=\"form-control\"\r\n                rows=\"6\"></textarea>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-12\">\r\n            <div class=\"form-group\">\r\n              <label for=\"directions\">Directions</label>\r\n              <textarea\r\n                type=\"text\"\r\n                name=\"directions\"\r\n                id=\"directions\"\r\n                formControlName=\"directions\"\r\n                class=\"form-control\"\r\n                rows=\"6\"></textarea>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-12\" formArrayName=\"ingredients\">\r\n            <table\r\n              *ngIf=\"recipeForm.get('ingredients').controls.length > 0\" \r\n              class=\"table\">\r\n              <thead>\r\n                <tr>\r\n                  <th class=\"col-xs-8 text-center\">Ingredients</th>\r\n                  <th class=\"col-xs-2 text-center\">Amount</th>\r\n                  <th class=\"col-xs-2 text-center\">Delete</th>\r\n                </tr>\r\n              </thead>\r\n            </table>\r\n            <div \r\n              class=\"row form-group\"\r\n              *ngFor=\"let ingredientCtrl of recipeForm.get('ingredients').controls; let i = index\" \r\n              [formGroupName]=\"i\">\r\n              <div class=\"col-xs-8\">\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"name\">\r\n              </div>\r\n              <div class=\"col-xs-2\">\r\n                <input\r\n                  type=\"number\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"amount\">\r\n              </div>\r\n              <div class=\"col-xs-2\">\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn btn-danger\"\r\n                  (click)=\"onDeleteIngredient(i)\">X</button>\r\n              </div>\r\n            </div>\r\n            <hr>\r\n            <div\r\n              *ngIf=\"!recipeForm.controls.ingredients.valid && recipeForm.controls.ingredients.touched\"\r\n              class='alert alert-danger text-center'>\r\n              <strong>Ingredients must have a name and an amount that is 1 or more</strong>\r\n              <p>Please enter valid inputs or delete the field</p>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12\">\r\n                <button\r\n                  type='submit'\r\n                  class='btn btn-success'\r\n                  [disabled]=\"!recipeForm.valid\">Save</button>\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn btn-primary\"\r\n                  (click)=\"onAddIngredient()\">Add Ingredient</button>\r\n                <button\r\n                  type='button'\r\n                  class='btn btn-danger pull-right'\r\n                  (click)=\"onCancel()\"\r\n                >Cancel</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <br>\r\n    <br>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/recipes/recipe-edit/recipe-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_data_storage_service__ = __webpack_require__("../../../../../src/app/shared/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recipe_service__ = __webpack_require__("../../../../../src/app/recipes/recipe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecipeEditComponent = (function () {
    function RecipeEditComponent(route, recipeService, router, dataStorageService) {
        this.route = route;
        this.recipeService = recipeService;
        this.router = router;
        this.dataStorageService = dataStorageService;
        this.editMode = false;
    }
    RecipeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = +params['id'];
            _this.editMode = params['id'] != null;
            _this.initForm();
        });
    };
    RecipeEditComponent.prototype.onSubmit = function () {
        // const newRecipe = new Recipe(
        //   this.recipeForm.value['name'],
        //   this.recipeForm.value['description'],
        //   this.recipeForm.value['imagePath'],
        //   this.recipeForm.value['ingredients']);
        if (this.editMode) {
            this.recipeService.updateRecipe(this.id, this.recipeForm.value);
        }
        else {
            this.recipeService.addRecipe(this.recipeForm.value);
        }
        this.dataStorageService.storeRecipes()
            .subscribe(function (response) {
            return response;
        });
        this.onCancel();
    };
    RecipeEditComponent.prototype.onAddIngredient = function () {
        this.recipeForm.get('ingredients').push(new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
            'name': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required),
            'amount': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](null, [
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].pattern(/^[1-9]+[0-9]*$/)
            ])
        }));
    };
    RecipeEditComponent.prototype.onCancel = function () {
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    RecipeEditComponent.prototype.onDeleteIngredient = function (index) {
        this.recipeForm.get('ingredients').removeAt(index);
    };
    RecipeEditComponent.prototype.initForm = function () {
        var recipeName = '';
        var recipeImagePath = '';
        var recipeDescription = '';
        var recipeDirections = '';
        var recipeIngredients = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormArray */]([]);
        if (this.editMode) {
            var recipe = this.recipeService.getRecipe(this.id);
            recipeName = recipe.name;
            recipeImagePath = recipe.imagePath;
            recipeDescription = recipe.description;
            recipeDirections = recipe.directions;
            if (recipe['ingredients']) {
                for (var _i = 0, _a = recipe.ingredients; _i < _a.length; _i++) {
                    var ingredient = _a[_i];
                    recipeIngredients.push(new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
                        'name': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](ingredient.name, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required),
                        'amount': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](ingredient.amount, [
                            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required,
                            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].pattern(/^[1-9]+[0-9]*$/)
                        ])
                    }));
                }
            }
        }
        this.recipeForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
            'name': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](recipeName, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required),
            'imagePath': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](recipeImagePath),
            'description': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](recipeDescription),
            'directions': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */](recipeDirections),
            'ingredients': recipeIngredients
        });
    };
    return RecipeEditComponent;
}());
RecipeEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["o" /* Component */])({
        selector: 'app-recipe-edit',
        template: __webpack_require__("../../../../../src/app/recipes/recipe-edit/recipe-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/recipes/recipe-edit/recipe-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__recipe_service__["a" /* RecipeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__recipe_service__["a" /* RecipeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__shared_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_data_storage_service__["a" /* DataStorageService */]) === "function" && _d || Object])
], RecipeEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=recipe-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/recipes/recipe-list/recipe-item/recipe-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/recipes/recipe-list/recipe-item/recipe-item.component.html":
/***/ (function(module, exports) {

module.exports = "<a\r\n  style=\"cursor: pointer;\"\r\n  [routerLink]=\"[index]\"\r\n  routerLinkActive=\"active\"\r\n  class='list-group-item clearfix'>\r\n  <div class='pull-left'>\r\n    <h4 class='list-group-item-heading'>{{ recipe.name }}</h4>\r\n    <p class='list-group-item-text'>{{ recipe.description}}</p>\r\n  </div>\r\n  <span class='pull-right'>\r\n    <img\r\n      [src]='recipe.imagePath'\r\n      alt='{{recipe.name}}'\r\n      class='img-responsive'\r\n      style='max-height:50px'>\r\n  </span>\r\n</a>"

/***/ }),

/***/ "../../../../../src/app/recipes/recipe-list/recipe-item/recipe-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recipe_model__ = __webpack_require__("../../../../../src/app/recipes/recipe.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecipeItemComponent = (function () {
    function RecipeItemComponent() {
    }
    RecipeItemComponent.prototype.ngOnInit = function () {
    };
    return RecipeItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__recipe_model__["a" /* Recipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__recipe_model__["a" /* Recipe */]) === "function" && _a || Object)
], RecipeItemComponent.prototype, "recipe", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], RecipeItemComponent.prototype, "index", void 0);
RecipeItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-recipe-item',
        template: __webpack_require__("../../../../../src/app/recipes/recipe-list/recipe-item/recipe-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/recipes/recipe-list/recipe-item/recipe-item.component.css")]
    })
], RecipeItemComponent);

var _a;
//# sourceMappingURL=recipe-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/recipes/recipe-list/recipe-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/recipes/recipe-list/recipe-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='row'>\r\n  <div class='col-xs-12'>\r\n    <button class='btn btn-success' (click)=\"onNewRecipe()\">New Recipe</button>\r\n  </div>\r\n</div>\r\n<hr>\r\n<div class='row'>\r\n  <div class='col-xs-12'>   \r\n    <app-recipe-item \r\n      *ngFor=\"let recipeElement of recipes; let i = index\"\r\n      [recipe]=\"recipeElement\"\r\n      [index]=\"i\"></app-recipe-item>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/recipes/recipe-list/recipe-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_data_storage_service__ = __webpack_require__("../../../../../src/app/shared/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recipe_service__ = __webpack_require__("../../../../../src/app/recipes/recipe.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecipeListComponent = (function () {
    function RecipeListComponent(recipeService, router, route, dataStorageService) {
        this.recipeService = recipeService;
        this.router = router;
        this.route = route;
        this.dataStorageService = dataStorageService;
    }
    RecipeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.recipeService.recipesChanged
            .subscribe(function (recipes) {
            _this.recipes = recipes;
        });
        this.recipes = this.dataStorageService.getRecipes();
        this.dataStorageService.fetchShoppingList();
    };
    RecipeListComponent.prototype.onNewRecipe = function () {
        this.router.navigate(['new'], { relativeTo: this.route });
    };
    RecipeListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return RecipeListComponent;
}());
RecipeListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-recipe-list',
        template: __webpack_require__("../../../../../src/app/recipes/recipe-list/recipe-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/recipes/recipe-list/recipe-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__recipe_service__["a" /* RecipeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__recipe_service__["a" /* RecipeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__shared_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_data_storage_service__["a" /* DataStorageService */]) === "function" && _d || Object])
], RecipeListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=recipe-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/recipes/recipe-start/recipe-start.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/recipes/recipe-start/recipe-start.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Please Select a Recipe!</h3>\r\n"

/***/ }),

/***/ "../../../../../src/app/recipes/recipe-start/recipe-start.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeStartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecipeStartComponent = (function () {
    function RecipeStartComponent() {
    }
    RecipeStartComponent.prototype.ngOnInit = function () {
    };
    return RecipeStartComponent;
}());
RecipeStartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-recipe-start',
        template: __webpack_require__("../../../../../src/app/recipes/recipe-start/recipe-start.component.html"),
        styles: [__webpack_require__("../../../../../src/app/recipes/recipe-start/recipe-start.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RecipeStartComponent);

//# sourceMappingURL=recipe-start.component.js.map

/***/ }),

/***/ "../../../../../src/app/recipes/recipe.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Recipe; });
var Recipe = (function () {
    function Recipe(name, desc, directions, imagePath, ingredients) {
        this.name = name;
        this.description = desc;
        this.directions = directions;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
    return Recipe;
}());

//# sourceMappingURL=recipe.model.js.map

/***/ }),

/***/ "../../../../../src/app/recipes/recipe.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shopping_list_shopping_list_service__ = __webpack_require__("../../../../../src/app/shopping-list/shopping-list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecipeService = (function () {
    function RecipeService(shoppingListService) {
        this.shoppingListService = shoppingListService;
        this.recipesChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.ROOT_URL = 'https://recipe-book-f11e8.firebaseio.com/users';
    }
    RecipeService.prototype.setRecipes = function (recipes) {
        if (recipes) {
            this.recipes = recipes;
            this.recipesChanged.next(this.recipes.slice());
        }
    };
    RecipeService.prototype.getRecipes = function () {
        return this.recipes.slice();
    };
    RecipeService.prototype.getRecipe = function (index) {
        return this.recipes[index];
    };
    RecipeService.prototype.addToShoppingList = function (ingredients) {
        this.shoppingListService.addIngredients(ingredients);
    };
    RecipeService.prototype.addRecipe = function (recipe) {
        if (recipe.ingredients) {
            recipe.ingredients.forEach(function (ingredient) {
                ingredient.name = ingredient.name.toLowerCase();
            });
        }
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    };
    RecipeService.prototype.updateRecipe = function (index, newRecipe) {
        newRecipe.ingredients.forEach(function (ingredient) {
            ingredient.name = ingredient.name.toLowerCase();
        });
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    };
    RecipeService.prototype.deleteRecipe = function (index) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    };
    return RecipeService;
}());
RecipeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shopping_list_shopping_list_service__["a" /* ShoppingListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shopping_list_shopping_list_service__["a" /* ShoppingListService */]) === "function" && _a || Object])
], RecipeService);

var _a;
//# sourceMappingURL=recipe.service.js.map

/***/ }),

/***/ "../../../../../src/app/recipes/recipes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/recipes/recipes.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='row'>\r\n  <div class='col-md-5'>\r\n    <app-recipe-list></app-recipe-list>\r\n  </div>\r\n  <div class='col-md-7'>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/recipes/recipes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecipesComponent = (function () {
    function RecipesComponent() {
    }
    RecipesComponent.prototype.ngOnInit = function () {
    };
    return RecipesComponent;
}());
RecipesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-recipes',
        template: __webpack_require__("../../../../../src/app/recipes/recipes.component.html"),
        styles: [__webpack_require__("../../../../../src/app/recipes/recipes.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RecipesComponent);

//# sourceMappingURL=recipes.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/data-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shopping_list_shopping_list_service__ = __webpack_require__("../../../../../src/app/shopping-list/shopping-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recipes_recipe_service__ = __webpack_require__("../../../../../src/app/recipes/recipe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DataStorageService = (function () {
    function DataStorageService(http, recipeService, authService, shoppingListService) {
        this.http = http;
        this.recipeService = recipeService;
        this.authService = authService;
        this.shoppingListService = shoppingListService;
        this.ROOT_URL = 'https://recipe-book-f11e8.firebaseio.com/users';
    }
    DataStorageService.prototype.storeRecipes = function () {
        var user = this.authService.getUser();
        return this.http.put(this.ROOT_URL + "/" + user.uid + "/recipes.json?auth=" + user['De'], this.recipeService.getRecipes());
    };
    DataStorageService.prototype.deleteRecipe = function (id) {
        var user = this.authService.getUser();
        var recipes = this.recipeService.getRecipes();
        this.http.delete(this.ROOT_URL + "/" + user.uid + "/recipes/" + id + ".json?auth=" + user['De'], {
            method: __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* RequestMethod */].Delete
        });
        this.http.put(this.ROOT_URL + "/" + user.uid + "/recipes.json?auth=" + user['De'], recipes).subscribe(function (response) { return response; });
    };
    DataStorageService.prototype.getRecipes = function () {
        var _this = this;
        //const user = this.authService.getUser();
        var fetchedRecipes;
        __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().onAuthStateChanged(function (user) {
            _this.http.get(_this.ROOT_URL + "/" + user.uid + "/recipes.json?auth=" + user['De'])
                .map(function (response) {
                var recipes = response.json();
                if (!recipes) {
                    return;
                }
                for (var _i = 0, recipes_1 = recipes; _i < recipes_1.length; _i++) {
                    var recipe = recipes_1[_i];
                    if (!recipe['ingredients']) {
                        recipe['ingredients'] = [];
                    }
                }
                fetchedRecipes = recipes;
                return recipes;
            })
                .subscribe(function (recipes) {
                _this.recipeService.setRecipes(recipes);
            });
        });
        return fetchedRecipes;
    };
    DataStorageService.prototype.storeShoppingList = function () {
        var user = this.authService.getUser();
        return this.http.put(this.ROOT_URL + "/" + user.uid + "/shoppinglist.json?auth=" + user['De'], this.shoppingListService.getIngredients());
    };
    DataStorageService.prototype.fetchShoppingList = function () {
        var _this = this;
        var fetchedList;
        __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().onAuthStateChanged(function (user) {
            _this.http.get(_this.ROOT_URL + "/" + user.uid + "/shoppinglist.json?auth=" + user['De'])
                .map(function (response) {
                var list = response.json();
                fetchedList = list;
                return list;
            }).subscribe(function (list) {
                _this.shoppingListService.setIngredients(list);
            });
        });
        return fetchedList;
    };
    return DataStorageService;
}());
DataStorageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__recipes_recipe_service__["a" /* RecipeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__recipes_recipe_service__["a" /* RecipeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__shopping_list_shopping_list_service__["a" /* ShoppingListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shopping_list_shopping_list_service__["a" /* ShoppingListService */]) === "function" && _d || Object])
], DataStorageService);

var _a, _b, _c, _d;
//# sourceMappingURL=data-storage.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/dropdown.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownDirective = (function () {
    function DropdownDirective() {
        this.isOpen = false;
    }
    DropdownDirective.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    return DropdownDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('class.open'),
    __metadata("design:type", Object)
], DropdownDirective.prototype, "isOpen", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DropdownDirective.prototype, "toggleOpen", null);
DropdownDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appDropdown]'
    }),
    __metadata("design:paramtypes", [])
], DropdownDirective);

//# sourceMappingURL=dropdown.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/ingredient.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ingredient; });
var Ingredient = (function () {
    function Ingredient(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    return Ingredient;
}());

//# sourceMappingURL=ingredient.model.js.map

/***/ }),

/***/ "../../../../../src/app/shopping-list/shopping-edit/shopping-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shopping-list/shopping-edit/shopping-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='row'>\r\n  <div class='col-xs-12'>\r\n    <form (ngSubmit)=\"onAddItem(f)\" #f=\"ngForm\">\r\n      <div class='row'>\r\n        <div class='col-sm-5 form-group'>\r\n          <label for='name'>Name</label>\r\n          <input\r\n            type='text'\r\n            id='name'\r\n            class='form-control'\r\n            name=\"name\"\r\n            ngModel\r\n            required>\r\n        </div>\r\n        <div class='col-sm-2 form-group'>\r\n          <label for='amount'>Amount</label>\r\n          <input\r\n            type='number'\r\n            id='amount'\r\n            class='form-control'\r\n            name=\"amount\"\r\n            ngModel\r\n            required\r\n            pattern=\"^[1-9]+[0-9]*$\">\r\n        </div>\r\n      </div>\r\n      <div class='row'>\r\n        <div class='col-xs-12'>\r\n          <button\r\n            class='btn btn-success'\r\n            type='submit'\r\n            [disabled]=\"!f.valid\">{{ editMode ? 'Update' : 'Add' }}</button>\r\n          <button\r\n            class='btn btn-danger'\r\n            type='button'\r\n            (click)=\"onDelete()\"\r\n            *ngIf=\"editMode\">Delete</button>\r\n          <button\r\n            class='btn btn-primary'\r\n            type='button'\r\n            (click)=\"onClear()\">Clear</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shopping-list/shopping-edit/shopping-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_data_storage_service__ = __webpack_require__("../../../../../src/app/shared/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_ingredient_model__ = __webpack_require__("../../../../../src/app/shared/ingredient.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shopping_list_service__ = __webpack_require__("../../../../../src/app/shopping-list/shopping-list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShoppingEditComponent = (function () {
    function ShoppingEditComponent(shoppingListService, dataStorageSevice) {
        this.shoppingListService = shoppingListService;
        this.dataStorageSevice = dataStorageSevice;
        this.editMode = false;
    }
    ShoppingEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.shoppingListService.startedEditing
            .subscribe(function (index) {
            _this.editItemIndex = index;
            _this.editMode = true;
            _this.editedItem = _this.shoppingListService.getIngredient(index);
            _this.slForm.setValue({
                name: _this.editedItem.name,
                amount: _this.editedItem.amount
            });
        });
    };
    ShoppingEditComponent.prototype.onAddItem = function (form) {
        var value = form.value;
        var newIngredient = new __WEBPACK_IMPORTED_MODULE_3__shared_ingredient_model__["a" /* Ingredient */](value.name.toLowerCase(), value.amount);
        if (this.editMode) {
            this.shoppingListService.updateIngredient(this.editItemIndex, newIngredient);
            this.editMode = false;
        }
        else {
            this.shoppingListService.addIngredient(newIngredient);
        }
        form.reset();
        this.dataStorageSevice.storeShoppingList().subscribe(function (response) { return response; });
    };
    ShoppingEditComponent.prototype.onClear = function () {
        this.slForm.reset();
        this.editMode = false;
    };
    ShoppingEditComponent.prototype.onDelete = function () {
        this.shoppingListService.deleteIngredient(this.editItemIndex);
        this.onClear();
        this.dataStorageSevice.storeShoppingList().subscribe(function (response) { return response; });
    };
    ShoppingEditComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return ShoppingEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* NgForm */]) === "function" && _a || Object)
], ShoppingEditComponent.prototype, "slForm", void 0);
ShoppingEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-shopping-edit',
        template: __webpack_require__("../../../../../src/app/shopping-list/shopping-edit/shopping-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shopping-list/shopping-edit/shopping-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shopping_list_service__["a" /* ShoppingListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shopping_list_service__["a" /* ShoppingListService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__shared_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_data_storage_service__["a" /* DataStorageService */]) === "function" && _c || Object])
], ShoppingEditComponent);

var _a, _b, _c;
//# sourceMappingURL=shopping-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/shopping-list/shopping-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shopping-list/shopping-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='row'>\r\n  <div class='col-xs-10'>\r\n    <app-shopping-edit></app-shopping-edit>\r\n    <hr>\r\n    <ul class='list-group'>\r\n      <a\r\n        class='list-group-item'\r\n        style='cursor: pointer;'\r\n        *ngFor='let ingredient of ingredients; let i = index'\r\n        (click)=\"onEditItem(i)\"\r\n      >\r\n        {{ ingredient.name }} ({{ ingredient.amount }})\r\n      </a>\r\n    </ul>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shopping-list/shopping-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_data_storage_service__ = __webpack_require__("../../../../../src/app/shared/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopping_list_service__ = __webpack_require__("../../../../../src/app/shopping-list/shopping-list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShoppingListComponent = (function () {
    function ShoppingListComponent(shoppingListService, dataStorageService) {
        this.shoppingListService = shoppingListService;
        this.dataStorageService = dataStorageService;
    }
    ShoppingListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.shoppingListService.ingredientsChanged
            .subscribe(function (ingredients) {
            _this.ingredients = ingredients;
        });
        this.dataStorageService.fetchShoppingList();
    };
    ShoppingListComponent.prototype.onEditItem = function (index) {
        this.shoppingListService.startedEditing.next(index);
    };
    ShoppingListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return ShoppingListComponent;
}());
ShoppingListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-shopping-list',
        template: __webpack_require__("../../../../../src/app/shopping-list/shopping-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shopping-list/shopping-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shopping_list_service__["a" /* ShoppingListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shopping_list_service__["a" /* ShoppingListService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__shared_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_data_storage_service__["a" /* DataStorageService */]) === "function" && _b || Object])
], ShoppingListComponent);

var _a, _b;
//# sourceMappingURL=shopping-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/shopping-list/shopping-list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);

var ShoppingListService = (function () {
    function ShoppingListService() {
        this.ingredientsChanged = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this.startedEditing = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this.ingredients = [];
    }
    ShoppingListService.prototype.getIngredients = function () {
        return this.ingredients.slice();
    };
    ShoppingListService.prototype.setIngredients = function (ingredients) {
        if (ingredients) {
            this.ingredients = ingredients;
            this.ingredientsChanged.next(this.ingredients.slice());
        }
    };
    ShoppingListService.prototype.getIngredient = function (index) {
        return this.ingredients[index];
    };
    ShoppingListService.prototype.addIngredient = function (newIngredient) {
        var _this = this;
        if (this.ingredients.length <= 0) {
            this.ingredients.push(newIngredient);
        }
        else {
            this.ingredients.forEach(function (ingredient) {
                if (ingredient.name === newIngredient.name) {
                    ingredient.amount += newIngredient.amount;
                }
                else {
                    _this.ingredients.push(newIngredient);
                }
            });
        }
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    ShoppingListService.prototype.addIngredients = function (ingredients) {
        if (!this.ingredients) {
            return (_a = this.ingredients).push.apply(_a, ingredients);
        }
        else {
            for (var i = 0; i < this.ingredients.length; i++) {
                for (var j = 0; j < ingredients.length; j++) {
                    if (this.ingredients[i].name.indexOf(ingredients[j].name) > -1) {
                        this.ingredients[i].amount += ingredients[j].amount;
                        ingredients.splice(j, 1);
                    }
                }
            }
            (_b = this.ingredients).push.apply(_b, ingredients);
        }
        this.ingredientsChanged.next(this.ingredients.slice());
        var _a, _b;
    };
    ShoppingListService.prototype.updateIngredient = function (index, newIngredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    ShoppingListService.prototype.deleteIngredient = function (index) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    };
    return ShoppingListService;
}());

//# sourceMappingURL=shopping-list.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map