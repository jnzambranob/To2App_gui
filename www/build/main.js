webpackJsonp([0],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
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
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskListPage = /** @class */ (function () {
    function TaskListPage(navCtrl) {
        this.navCtrl = navCtrl;
        //Defines the tasks array as an array of Task objects
        this.tasks = [];
        //Set our tasks array to some dummy tasks for testing purposes 
        this.tasks = [
            { title: 'Esta', status: 'open' },
            { title: 'Es', status: 'open' },
            { title: 'Una', status: 'open' },
            { title: 'App', status: 'open' },
            { title: 'De', status: 'open' },
            { title: 'Prueba', status: 'open' },
            { title: 'En Ionic 6', status: 'open' },
            { title: 'Para', status: 'open' },
            { title: 'La', status: 'open' },
            { title: 'Asignatura', status: 'open' },
            { title: 'Electiva', status: 'open' },
            { title: 'De', status: 'open' },
            { title: 'Aplicaciones', status: 'open' },
            { title: 'Moviles', status: 'open' },
            { title: 'Con', status: 'open' },
            { title: 'El', status: 'open' },
            { title: 'Profesor', status: 'open' },
            { title: 'Javier', status: 'open' },
            { title: 'Hurtado', status: 'open' }
        ];
    }
    //Adds a task to the list in the array
    TaskListPage.prototype.addItem = function () {
        /*For now, we will use the standard prompt method to display a
        dialog to allow the user to enter a new task title*/
        var theNewTask = prompt("New Task");
        //If the dialog text is not empty ...
        if (theNewTask !== '') {
            //This will be included in a generic object that is pushed onto our tasks array
            this.tasks.push({ title: theNewTask, status: 'open' });
        }
    };
    //Marks a task as done
    TaskListPage.prototype.markAsDone = function (slidingItem, task) {
        //Update status property of the task
        task.status = "done";
        //Close the sliding item component
        setTimeout(function () { slidingItem.close(); }, 1);
    };
    //Removes a task from the array
    TaskListPage.prototype.removeTask = function (slidingItem, task) {
        //Update status property of the task
        task.status = "removed";
        var index = this.tasks.indexOf(task);
        if (index > -1) {
            //Removes the task from the array at a specific position
            this.tasks.splice(index, 1);
        }
        //Close the sliding item component
        setTimeout(function () { slidingItem.close(); }, 1);
    };
    TaskListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            //Selector (tag) to use on main page to load the component
            selector: 'page-home',template:/*ion-inline-start:"C:\Aplimoviles\Ionic2Do\src\pages\tasklist\tasklist.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <!-- Title for the page -->\n\n    <ion-title>\n\n      To2App\n\n    </ion-title>\n\n    <!-- Adds an Add Item button to the navigation bar at the end, far from header;\n\n      icon-left directive adds a small amount of padding to the left of the icon;\n\n      if you have an icon only button, then add icon-only directive -->\n\n    <ion-buttons end>\n\n      <button ion-button icon-left (click)="addItem()">\n\n        <ion-icon name="add"></ion-icon>\n\n        Agregar Tarea\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<!-- The <ion-content> tag serves as our container for content. It will automatically \n\n  scroll if the content exceeds the viewport -->\n\n<ion-content padding>\n\n  <!-- Next, we have the <ion-list>, which is used to display rows of information. \n\n    In our case, this will be rows of tasks-->\n\n  <ion-list>\n\n    <!-- We are going to loop through an array named tasks and set each item into a locally \n\n      scoped variable named task. Using the data-binding syntax, {{task.title}}, we will render \n\n      out each task’s title string -->\n\n    <!-- <ion-item-sliding> reveals a set of buttons by swiping from right to left on a row-->\n\n    <!-- #slidingItem is a local variable that represents the sliding component -->\n\n    <ion-item-sliding #slidingItem *ngFor="let task of tasks">\n\n      <!-- Uses the ngClass Angular directive to apply conditionally the taskDone class style\n\n      if task status is set to done -->\n\n      <ion-item [ngClass]="{taskDone: task.status == \'done\'}">\n\n        {{task.title}}\n\n      </ion-item>\n\n      <!-- <ion-item-options> component contains our buttons that will be shown when we swipe the row. \n\n        This component supports having these option buttons be on the right, left or even both sides. \n\n        Simply add side=\'right’ to the ion-item-options that you want revealed with the user swipes \n\n        from the right to left. For items that you want to show when the user swipes from left to right, \n\n        define it as side=\'left’. If you do not include a side, it will default to the right side -->\n\n      <!--Adds an event listener for the ionSwipe event. This event will be trig‐gered when the user has performed \n\n        the full-swipe gesture calling the removeTask function-->\n\n      <ion-item-options side="right" (ionSwipe)="removeTask(slidingItem, task)">\n\n        <!-- For this app, we will have a button to mark a task as done, and another button to remove it \n\n          from the list completely. The markup is just the standard <button> tag. Each button will have \n\n            a click function that passes it the reference to that row’s task and use an icon from the IonIcon library-->\n\n        <!--slidingItem variable is passed as parameter to update the sliding item behavior in the controller -->\n\n        <button ion-button icon-only (click)="markAsDone(slidingItem, task)" color="secondary">\n\n          <ion-icon name="checkmark"></ion-icon>\n\n        </button>\n\n        <!--We need to add an additional property on the button that we want to visually expand as \n\n          the ionSwipe gesture is performed-->\n\n        <button ion-button icon-only expandable (click)="removeTask(slidingItem, task)" color="danger">\n\n          <ion-icon name="trash"></ion-icon>\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Aplimoviles\Ionic2Do\src\pages\tasklist\tasklist.html"*/
            //HTML template for the TaskList component
        })
        //TaskList component class declaration
        ,
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object])
    ], TaskListPage);
    return TaskListPage;
    var _a;
}());

//# sourceMappingURL=tasklist.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tasklist_tasklist__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//Imports the TaskListPage component

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                //TaskListPage component registration
                __WEBPACK_IMPORTED_MODULE_6__pages_tasklist_tasklist__["a" /* TaskListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                //TaskListPage component registration for App loading
                __WEBPACK_IMPORTED_MODULE_6__pages_tasklist_tasklist__["a" /* TaskListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tasklist_tasklist__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//Imports the TaskListPage component

var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        //Defines the TaskListPage template as the root page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tasklist_tasklist__["a" /* TaskListPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Aplimoviles\Ionic2Do\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Aplimoviles\Ionic2Do\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[194]);
//# sourceMappingURL=main.js.map