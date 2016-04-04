System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Contact, AppComponent, CONTACTS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Contact = (function () {
                function Contact() {
                }
                return Contact;
            }());
            exports_1("Contact", Contact);
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Contacts';
                    this.contacts = CONTACTS;
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.component.html',
                        styleUrls: ['app/app.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            CONTACTS = [
                { "id": 1, "identity": "Batman", "name": "Bruce Wayne" },
                { "id": 2, "identity": "Spider-Man", "name": "Peter Parker" },
                { "id": 3, "identity": "Wolverine", "name": "Logan" },
                { "id": 4, "identity": "Superman", "name": "Clark Kent" },
                { "id": 5, "identity": "Punisher", "name": "Frank Castle" },
                { "id": 6, "identity": "Red Robin", "name": "Tim Drake" },
                { "id": 7, "identity": "Hawkeye", "name": "Clint Barton" },
                { "id": 8, "identity": "Captain America", "name": "Steve Rogers" },
                { "id": 9, "identity": "Deadpool", "name": "Wade Wilson" },
                { "id": 10, "identity": "Thor", "name": "Thor Odinson" },
                { "id": 11, "identity": "Hulk", "name": "Bruce Banner" },
                { "id": 12, "identity": "NightWing", "name": "Dick Grayson" },
                { "id": 13, "identity": "Iron Fist", "name": "Danny Rand" },
                { "id": 14, "identity": "Iron Man", "name": "Tony Stark" },
                { "id": 15, "identity": "Nightcrawler", "name": "Kurt Wagner" },
                { "id": 16, "identity": "Daredevil", "name": "Matt Murdock" },
                { "id": 17, "identity": "Hellboy", "name": "Anung un Rama" },
                { "id": 18, "identity": "Green Lantern", "name": "Hal Jordan" },
                { "id": 19, "identity": "Flash", "name": "Barry Allen" },
                { "id": 20, "identity": "Swamp Thing", "name": "Dr Alec Holland" },
                { "id": 21, "identity": "Hellblazer", "name": "John Constantine" },
                { "id": 22, "identity": "Bucky", "name": "James Buchanan Barnes" },
                { "id": 23, "identity": "Gambit", "name": "Remy LeBeau" },
                { "id": 24, "identity": "Red Hood", "name": "Jason Todd" }
            ];
        }
    }
});
//# sourceMappingURL=app.component.js.map