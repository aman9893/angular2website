"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var login_1 = require("../form/login");
var formcomponent = (function () {
    function formcomponent() {
        //model =new login (1, "aman","amanjin" ,'http//ww');
        this.model = new login_1.login(1, "", "", 'http//');
    }
    Object.defineProperty(formcomponent.prototype, "currentBook", {
        get: function () {
            return JSON.stringify(this.model); ///yaha data json form m aaye ga niche form k
        },
        enumerable: true,
        configurable: true
    });
    return formcomponent;
}());
formcomponent = __decorate([
    core_1.Component({
        selector: 'book',
        templateUrl: "./login.html",
        styleUrls: ['./login.css']
    }),
    __metadata("design:paramtypes", [])
], formcomponent);
exports.formcomponent = formcomponent;
//# sourceMappingURL=login.component.js.map