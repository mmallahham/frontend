webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n  background: #fff;\r\n}\r\n\r\n.content {\r\n  margin: auto;\r\n  padding: 10px;\r\n  text-align: center;\r\n}\r\n\r\ntd {\r\n  text-align: center;\r\n  padding: 0px;\r\n  margin: 0px;\r\n  text-align: center;\r\n}\r\n\r\ntr {\r\n  text-align: center;\r\n  padding: 0px;\r\n  margin: 0px;\r\n  height: 20px;\r\n  vertical-align: top;\r\n}\r\n\r\n.btn {\r\n  display: block;\r\n  width: 50px;\r\n  margin: auto;\r\n  background-color: aqua;\r\n  border: 1px solid #000;\r\n  border-radius: 15px;\r\n  color: #000;\r\n  padding: 8px 16px;\r\n  text-decoration: none;\r\n  z-index: 0;\r\n}\r\n\r\n.btn:hover {\r\n  border: 1px solid red; /* IE 9 */\r\n  -webkit-transform: scale(1.1, 1.1); /* Safari */\r\n  transform: scale(1.1, 1.1);\r\n  z-index: 10;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"#\"  style=\"padding:8px\"><img src=\"./assets/brand.jpg\" alt=\"\"></a>\r\n      <a class=\"navbar-brand\" href=\"#\">Full Stack</a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n      <ul class=\"nav navbar-nav navbar-right\" style=\"padding-right: 20px\">\r\n        <li><a routerLink=\"/home\" routerLinkActive=\"active\">Home</a></li>\r\n        <li><a routerLink=\"/quizIntro\" routerLinkActive=\"active\">Start</a></li>\r\n        <li><a routerLink=\"/tree\" routerLinkActive=\"active\">Tree</a></li>\r\n        <li><a routerLink=\"/statics\" routerLinkActive=\"active\">Statics</a></li>\r\n      </ul>\r\n\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n\r\n\r\n<div class=\"container bg-3 text-center\">\r\n  <router-outlet></router-outlet>\r\n\r\n</div>\r\n<footer class=\"container-fluid text-center navbar-fixed-bottom navbar-inverse\">\r\n  <p style=\"color:white\">designed and developed by Mohammad Allahham 2018</p>\r\n</footer>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    ;
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__question_question_component__ = __webpack_require__("../../../../../src/app/question/question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http___ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tree_tree_component__ = __webpack_require__("../../../../../src/app/tree/tree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__quiz_intro_quiz_intro_component__ = __webpack_require__("../../../../../src/app/quiz-intro/quiz-intro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__statics_statics_component__ = __webpack_require__("../../../../../src/app/statics/statics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__win_win_component__ = __webpack_require__("../../../../../src/app/win/win.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__new_question_new_question_component__ = __webpack_require__("../../../../../src/app/new-question/new-question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__tree_item_tree_item_component__ = __webpack_require__("../../../../../src/app/tree-item/tree-item.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__question_question_component__["a" /* QuestionComponent */],
                __WEBPACK_IMPORTED_MODULE_9__tree_tree_component__["a" /* TreeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__quiz_intro_quiz_intro_component__["a" /* QuizIntroComponent */],
                __WEBPACK_IMPORTED_MODULE_11__statics_statics_component__["a" /* StaticsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__win_win_component__["a" /* WinComponent */],
                __WEBPACK_IMPORTED_MODULE_13__new_question_new_question_component__["a" /* NewQuestionComponent */],
                __WEBPACK_IMPORTED_MODULE_15__tree_item_tree_item_component__["a" /* TreeItemComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http___["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot([
                    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */] },
                    { path: 'quizIntro', component: __WEBPACK_IMPORTED_MODULE_10__quiz_intro_quiz_intro_component__["a" /* QuizIntroComponent */] },
                    { path: 'quiz', component: __WEBPACK_IMPORTED_MODULE_6__question_question_component__["a" /* QuestionComponent */] },
                    { path: 'tree', component: __WEBPACK_IMPORTED_MODULE_9__tree_tree_component__["a" /* TreeComponent */] },
                    { path: 'statics', component: __WEBPACK_IMPORTED_MODULE_11__statics_statics_component__["a" /* StaticsComponent */] },
                    { path: 'win', component: __WEBPACK_IMPORTED_MODULE_12__win_win_component__["a" /* WinComponent */] },
                    { path: 'new/:id/:aid', component: __WEBPACK_IMPORTED_MODULE_13__new_question_new_question_component__["a" /* NewQuestionComponent */] },
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */] },
                    { path: '**', component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */] }
                ])
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_common__["a" /* APP_BASE_HREF */], useValue: '/' },
                __WEBPACK_IMPORTED_MODULE_7__data_service__["a" /* DataService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = (function () {
    function DataService(_http) {
        this._http = _http;
        //  private _backEndUrl = 'https://tranquil-tor-64128.herokuapp.com/';
        this._backEndUrl = 'http://localhost:5000/';
    }
    DataService.prototype.getQuestion = function (id) {
        return this._http.get(this._backEndUrl + 'questions/' + id);
    };
    DataService.prototype.postQuestion = function (question) {
        return this._http.post(this._backEndUrl + 'questions/' + question.id, question);
    };
    DataService.prototype.getAllQuestions = function () {
        return this._http.get(this._backEndUrl + 'questions');
    };
    DataService.prototype.insertQuestion = function (id, doc) {
        console.log(doc);
        return this._http.post(this._backEndUrl + 'questions', doc).subscribe();
    };
    DataService.prototype.updateQuestion = function (id, updateObj) {
        console.log(updateObj);
        return this._http.post(this._backEndUrl + 'questions/' + id, updateObj).subscribe();
    };
    DataService.prototype.getAllAnswers = function () {
        return this._http.get(this._backEndUrl + 'answers');
    };
    DataService.prototype.insertAnswer = function (id, doc) {
        console.log(doc);
        return this._http.post(this._backEndUrl + 'answers/' + id, doc).subscribe();
    };
    DataService.prototype.updateAnswer = function (id, updateObj) {
        return this._http.put(this._backEndUrl + 'answers/' + id, updateObj).subscribe();
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\r\n  max-height:300px;\r\n  padding-bottom:30px\r\n}\r\n\r\n.panel-heading {\r\n  padding:0;\r\n}\r\nh3 {\r\n  padding: 10px ;\r\n  margin: 0px;\r\n}\r\n\r\n.panel-primary{\r\n  padding: 0px;\r\n}\r\n\r\nbutton{\r\n  width:150px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\r\n  <div class=\"panel-heading\">\r\n      <h3>{{pageTitle}}</h3>\r\n  </div>\r\n  <div class=\"panel-body\"  >\r\n      <div class=\"row\" >\r\n          <img src=\"./assets/images/logo.jpg\" class=\"img-responsive center-block\"/>\r\n      </div>\r\n      <div class=\"row\"  >\r\n        <h2 class=\"text-center\">Welcome to the <b>\"Guess the animal\"</b> game!</h2>\r\n        <p class=\"text-center\">This game was developed as part of the full stack course<br>\r\n                               To start press \"<b>Start</b>\" </p><br>\r\n      </div>\r\n      <div class=\"row\">\r\n        <button class=\"btn btn-primary btn-lg\" (click)='onGoToQuiz()'>Start</button>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router___ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(_router) {
        this._router = _router;
        this.pageTitle = 'Welcome';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onGoToQuiz = function () {
        this._router.navigate(['/quizIntro']);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router___["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/new-question/new-question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nimg {\r\n  height: 250px\r\n}\r\n\r\n.panel-heading {\r\n  padding:0;\r\n}\r\n.row {\r\n  padding-top: 10px;\r\n}\r\n\r\nh3 {\r\n  padding: 10px ;\r\n  margin: 0px;\r\n}\r\n\r\n.panel-primary{\r\n  padding: 0px;\r\n}\r\n.form-control{\r\n  padding: 10px;\r\n  font-size: 18px;\r\n}\r\n.form-group{\r\n  padding-top: 40\r\n}\r\n.control-label{\r\n  font-size: 18px\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-question/new-question.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\r\n  <div class=\"panel-heading\">\r\n      <h3>{{pageTitle}}</h3>\r\n  </div>\r\n  <div class=\"panel-body\"  >\r\n    <div class=\"row\">\r\n      <img src=\"../../assets/images/brain.png\" alt=\"\" >\r\n    </div>\r\n      <div class=\"row\"  >\r\n        <h2 class=\"text-center well\">Please help me improve my knowledge<br>fill the information below</h2>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <label class=\"col-sm-2 control-label text-right\">Name:</label>\r\n          <div class=\"col-sm-9\">\r\n            <input class=\"form-control\" id=\"name\" type=\"text\" [(ngModel)]=\"name\"\r\n              placeholder=\"Name of the animal you where thinking of \">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <label class=\"col-sm-2 control-label text-right\">Question:</label>\r\n          <div class=\"col-sm-9\">\r\n            <input class=\"form-control\" id=\"question\" type=\"text\" [(ngModel)]=\"newQuestion\"\r\n              placeholder=\"Yes/No Question to distinguish between the two animals\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"form-group\">\r\n          <label class=\"col-sm-2 control-label text-right\">Answer:</label>\r\n          <div class=\"col-sm-9\">\r\n            <input class=\"form-control\" id=\"yesOrNo\" type=\"list\" [(ngModel)]=\"yesOrNo\"\r\n              placeholder=\"Answer (y/n) for the animal you where thinkin of\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <button class=\"btn btn-primary btn-lg\" (click)='onSave()'>Save</button>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/new-question/new-question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewQuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewQuestionComponent = (function () {
    function NewQuestionComponent(_router, _route, _data) {
        this._router = _router;
        this._route = _route;
        this._data = _data;
        this.pageTitle = 'learning phase...';
        this.validYesOrNow = ['y', 'Y', 'yes', 'Yes', 'YES', 'n', 'N', 'no', 'No', 'NO'];
    }
    NewQuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this._route.snapshot.paramMap.get('id');
        this.aid = this._route.snapshot.paramMap.get('aid');
        this._data.getAllQuestions().subscribe(function (q) {
            _this.questions = q;
            _this.question = __WEBPACK_IMPORTED_MODULE_3_underscore__["filter"](_this.questions, function (q) { return q.id == id; })[0];
        });
        this._data.getAllAnswers().subscribe(function (a) {
            _this.answers = a;
        });
    };
    NewQuestionComponent.prototype.onSave = function () {
        var index = this.validYesOrNow.indexOf(this.yesOrNo);
        if (!this.name) {
            alert('please set the name correctly');
            return;
        }
        if (!this.question) {
            alert('please set the name correctly');
            return;
        }
        if (index == -1) {
            alert('please set the answer value correctly');
            return;
        }
        var aId = this.answers.length + 1;
        var param = {
            id: aId,
            name: this.name
        };
        this._data.insertAnswer(aId, param);
        var qId = this.questions.length + 1;
        var qParam;
        if (index < 5) {
            qParam = {
                id: qId,
                question: this.newQuestion,
                nextYID: aId,
                nextNID: this.aid,
                nextYType: 1,
                nextNType: 1
            };
        }
        else {
            qParam = {
                id: qId,
                question: this.newQuestion,
                nextYID: this.aid,
                nextNID: aId,
                nextYType: 1,
                nextNType: 1
            };
        }
        this._data.insertQuestion(qId, qParam);
        var updateQParam;
        if (this.aid == this.question.nextNID.toString()) {
            updateQParam = { nextNID: qId, nextNType: 0 };
        }
        else {
            updateQParam = { nextYID: qId, nextYType: 0 };
        }
        this._data.updateQuestion(this.question.id, updateQParam);
    };
    NewQuestionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new-question',
            template: __webpack_require__("../../../../../src/app/new-question/new-question.component.html"),
            styles: [__webpack_require__("../../../../../src/app/new-question/new-question.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], NewQuestionComponent);
    return NewQuestionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/question/question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\r\n  height: 250px\r\n}\r\n\r\n.panel-heading {\r\n\r\n  padding:0;\r\n}\r\n.row {\r\n  padding-top: 10px;\r\n}\r\n\r\nh3 {\r\n  padding: 10px ;\r\n  margin: 0px;\r\n}\r\n\r\n.panel-primary{\r\n  padding: 0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/question/question.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\r\n  <div class=\"panel-heading\">\r\n      <h3>{{pageTitle}}</h3>\r\n  </div>\r\n  <div class=\"panel-body\"  >\r\n      <div class=\"row\">\r\n        <img src=\"../../assets/images/header2.jpg\" alt=\"\" >\r\n      </div>\r\n      <div class=\"row\"  >\r\n        <h2 class=\"text-center well\">{{question.question}}</h2>\r\n      </div>\r\n      <div class=\"row\"  >\r\n        <a class=\"btn btn-primary btn-lg col-xs-2 col-xs-offset-3\" (click)=\"onYes()\">Yes</a>\r\n        <a class=\"btn btn-primary btn-lg col-xs-2 col-xs-offset-2\" (click)=\"onNo()\">No</a>\r\n      </div>\r\n      <div class=\"row\"  >\r\n        <p *ngIf='estimatedMin < 1000' >questions Left: {{estimatedMin}} up to {{estimatedMax}} question(s).\r\n        </p>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/question/question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestionComponent = (function () {
    function QuestionComponent(_data, _router) {
        this._data = _data;
        this._router = _router;
        this.pageTitle = 'Please, Answer the question.';
        this.question = { id: 0, question: 'loading...' };
        this.lvl = -1;
    }
    QuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkAnswer = false;
        this.pageTitle = 'Please, Answer the question.';
        this.question = { id: 0, question: 'loading...' };
        this.estimatedMin = 1000;
        this.estimatedMax = 0;
        this._data.getAllQuestions().subscribe(function (q) {
            _this.questions = q;
            _this.question = __WEBPACK_IMPORTED_MODULE_1_underscore__["filter"](_this.questions, function (q) { return q.id == 1; })[0];
            _this.calcEstimated(_this.question);
        });
        this._data.getAllAnswers().subscribe(function (a) {
            _this.answers = a;
        });
    };
    QuestionComponent.prototype.onYes = function () {
        this.NextQuestion(true);
    };
    QuestionComponent.prototype.onNo = function () {
        this.NextQuestion(false);
    };
    QuestionComponent.prototype.NextQuestion = function (isYes) {
        if (this.checkAnswer) {
            if (isYes) {
                this._router.navigate(['/win']);
            }
            else {
                console.log(this.question);
                this._router.navigate(['/new', this.question.id, this.question.nextNID]);
            }
        }
        else {
            this.lvl = -1;
            this.estimatedMin = 1000;
            this.estimatedMax = 0;
            var nextId_1 = isYes ? this.question.nextYID : this.question.nextNID;
            var nextType = isYes ? this.question.nextYType : this.question.nextNType;
            this.checkAnswer = false;
            if (nextType == 0) {
                this.question = __WEBPACK_IMPORTED_MODULE_1_underscore__["filter"](this.questions, function (q) { return q.id == nextId_1; })[0];
                this.calcEstimated(this.question);
            }
            else {
                this.answer = __WEBPACK_IMPORTED_MODULE_1_underscore__["filter"](this.answers, function (a) { return a.id == nextId_1; })[0];
                this.question = { id: this.question.id, question: "I think it is " + this.answer.name, nextNID: nextId_1 };
                this.checkAnswer = true;
            }
        }
    };
    QuestionComponent.prototype.calcEstimated = function (question) {
        var nextQ;
        ++this.lvl;
        if (question.nextNType || question.nextYType) {
            if (this.lvl < this.estimatedMin) {
                this.estimatedMin = this.lvl;
            }
        }
        if (!question.nextNType) {
            nextQ = this.findQuestionByID(question.nextNID);
            this.calcEstimated(nextQ);
        }
        if (!question.nextYType) {
            nextQ = this.findQuestionByID(question.nextYID);
            this.calcEstimated(nextQ);
        }
        if (this.lvl > this.estimatedMax) {
            this.estimatedMax = this.lvl;
        }
        this.lvl--;
        // callback();
    };
    QuestionComponent.prototype.findQuestionByID = function (id) {
        return __WEBPACK_IMPORTED_MODULE_1_underscore__["filter"](this.questions, function (q) { return q.id == id; })[0];
    };
    QuestionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-question',
            template: __webpack_require__("../../../../../src/app/question/question.component.html"),
            styles: [__webpack_require__("../../../../../src/app/question/question.component.css")]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], QuestionComponent);
    return QuestionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/quiz-intro/quiz-intro.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\r\n  height: 250px\r\n}\r\n\r\n.panel-heading {\r\n  padding:0;\r\n}\r\n.row {\r\n  padding-top: 10px;\r\n}\r\n\r\nh3 {\r\n  padding: 10px ;\r\n  margin: 0px;\r\n}\r\n\r\n.panel-primary{\r\n  padding: 0px;\r\n}\r\n\r\nbutton{\r\n  width:150px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quiz-intro/quiz-intro.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\r\n  <div class=\"panel-heading\">\r\n      <h3>{{pageTitle}}</h3>\r\n  </div>\r\n  <div class=\"panel-body\"  >\r\n      <div class=\"row\">\r\n        <img src=\"../../assets/images/header2.jpg\" alt=\"\" class=\"img img-fluid\">\r\n      </div>\r\n      <div class=\"row\"  >\r\n        <h2 class=\"text-center well\">Think of an animal and answer the questions<br>I will do the hard part and guess the animal</h2>\r\n      </div>\r\n      <div class=\"row\">\r\n        <button class=\"btn btn-primary btn-lg\" (click)='onStart()'>Start game</button>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/quiz-intro/quiz-intro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizIntroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuizIntroComponent = (function () {
    function QuizIntroComponent(_router) {
        this._router = _router;
        this.pageTitle = 'Game intro';
    }
    QuizIntroComponent.prototype.ngOnInit = function () {
    };
    QuizIntroComponent.prototype.onStart = function () {
        this._router.navigate(['/quiz']);
    };
    QuizIntroComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-quiz-intro',
            template: __webpack_require__("../../../../../src/app/quiz-intro/quiz-intro.component.html"),
            styles: [__webpack_require__("../../../../../src/app/quiz-intro/quiz-intro.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], QuizIntroComponent);
    return QuizIntroComponent;
}());



/***/ }),

/***/ "../../../../../src/app/statics/statics.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "td {\r\n  text-align: left;\r\n}\r\n\r\nthead{\r\n  background-color:dodgerblue;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/statics/statics.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<table class=\"table table-striped\">\r\n  <thead class=\"thead\">\r\n    <tr>\r\n      <th>id</th>\r\n      <th>Question</th>\r\n      <th>NYID</th>\r\n      <th>NNID</th>\r\n      <th>PID</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor='let question of questions'>\r\n      <td>{{question.id}}</td>\r\n      <td>{{question.question}}</td>\r\n      <td>{{question.nextYID}}</td>\r\n      <td>{{question.nextNID}}</td>\r\n      <td>{{question.parentID}}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "../../../../../src/app/statics/statics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaticsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StaticsComponent = (function () {
    function StaticsComponent(_data) {
        this._data = _data;
    }
    StaticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._data.getAllQuestions().subscribe(function (data) { return _this.questions = data; });
        console.log(this.questions);
    };
    StaticsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-statics',
            template: __webpack_require__("../../../../../src/app/statics/statics.component.html"),
            styles: [__webpack_require__("../../../../../src/app/statics/statics.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], StaticsComponent);
    return StaticsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tree-item/tree-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.qu {\r\n  border-width: 1;\r\n  border-color:  #000;\r\n  display: block;\r\n  background-color: aqua;\r\n  min-width: 20px;\r\n}\r\ntd {\r\n  border-width: 1;\r\n  border-color:  #000;\r\n  border-style: solid;\r\n  vertical-align: top;\r\n\r\n}\r\ntable{\r\n  border:1px solid #000;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tree-item/tree-item.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"qu\" >Qfdgdfgdfgdf</a>\r\n"

/***/ }),

/***/ "../../../../../src/app/tree-item/tree-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TreeItemComponent = (function () {
    function TreeItemComponent() {
    }
    TreeItemComponent.prototype.ngOnInit = function () {
    };
    TreeItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tree-item',
            template: __webpack_require__("../../../../../src/app/tree-item/tree-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tree-item/tree-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TreeItemComponent);
    return TreeItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tree/tree.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n\r\n.qu {\r\n  border-width: 1;\r\n  border-color:  #000;\r\n  display: block;\r\n  background-color: aqua;\r\n}\r\ntd {\r\n  border-width: 1;\r\n  border-color:  #000;\r\n  border-style: solid;\r\n  vertical-align: top;\r\n\r\n}\r\ntable{\r\n  border:1px solid #000;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tree/tree.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\r\n  <div class=\"panel-heading\">\r\n      <h3>{{pageTitle}}</h3>\r\n  </div>\r\n  <div class=\"panel-body\"  >\r\n\r\n<div class=\"row\" >\r\n  <table>\r\n    <tr #treeDiagram>\r\n        <p><span>\"{{evilTitle}}\" is the <i>interpolated</i> evil title.</span></p>\r\n        <p>\"<span [innerHTML]=\"evilTitle\"></span>\" is the <i>property bound</i> evil title.</p>\r\n    </tr>\r\n  </table>\r\n</div>\r\n<div class=\"row\">\r\n  <button class=\"btn btn-primary btn-lg\" (click)='onStart()'>Start</button>\r\n</div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/tree/tree.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TreeComponent = (function () {
    function TreeComponent(_data) {
        this._data = _data;
        this.pageTitle = 'tree of questions and answers';
    }
    TreeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._data.getAllQuestions().subscribe(function (q) {
            _this.questions = q;
            console.log(_this.getQuestionDigram(1));
            _this.treeDgrm.nativeElement.innerHTML = _this.getQuestionDigram(1);
        });
    };
    TreeComponent.prototype.getQuestionDigram = function (id) {
        var question = this.questions.find(function (q) { return q.id == id; });
        var res = '';
        res += '|<br><app-tree-item>sdsf</app-tree-item><table><tr>';
        if (!question.nextYType) {
            res += '<td>';
            res += this.getQuestionDigram(question.nextYID);
            res += '</td>';
        }
        if (!question.nextNType) {
            res += '<td>';
            res += this.getQuestionDigram(question.nextNID);
            res += '</td>';
        }
        res += '</tr></table>';
        return res;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('treeDiagram'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], TreeComponent.prototype, "treeDgrm", void 0);
    TreeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tree',
            template: __webpack_require__("../../../../../src/app/tree/tree.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tree/tree.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], TreeComponent);
    return TreeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/win/win.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\r\n    height: 200px\r\n  }\r\n\r\n  .panel-heading {\r\n    padding:0;\r\n  }\r\n  .row {\r\n    padding-top: 10px;\r\n  }\r\n\r\n  h3 {\r\n    padding: 10px ;\r\n    margin: 0px;\r\n  }\r\n\r\n  .panel-primary{\r\n    padding: 0px;\r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/win/win.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\r\n  <div class=\"panel-heading\">\r\n      <h3>{{pageTitle}}</h3>\r\n  </div>\r\n  <div class=\"panel-body\"  >\r\n      <div class=\"row\">\r\n        <img src=\"../../assets/images/veryfuny.gif\" alt=\"\" class=\"img img-fluid\">\r\n      </div>\r\n      <div class=\"row\"  >\r\n        <h2 class=\"text-center well\">I knew I can do it<br>Do you trust me now</h2>\r\n      </div>\r\n      <div class=\"row\">\r\n        <button class=\"btn btn-primary btn-lg\" (click)='onHome()'>Home</button>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/win/win.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WinComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WinComponent = (function () {
    function WinComponent(_router) {
        this._router = _router;
        this.pageTitle = 'Great...';
    }
    WinComponent.prototype.ngOnInit = function () {
    };
    WinComponent.prototype.onHome = function () {
        this._router.navigate(['/home']);
    };
    WinComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-win',
            template: __webpack_require__("../../../../../src/app/win/win.component.html"),
            styles: [__webpack_require__("../../../../../src/app/win/win.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], WinComponent);
    return WinComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map