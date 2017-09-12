webpackJsonp([2,5],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResumeService = (function () {
    function ResumeService() {
        this.ME = {
            name: "Kai Liu",
            headline: '<i class="fitted globe small icon" aria-hidden="true"></i> Web Developer | <i class="fitted car small icon" aria-hidden="true"></i> Self-Driving Car Engineer',
            summary: "Ph.D. candidate at Purdue University and OMSCS student at GaTech. Self-driving Car Engineer Nanodegree cohort at Udacity. Nanodegree alumni of Full stack web development, Front-end web development and Deep learning. MongoDB certified developer. Google certified associate Android developer. Active learner, eager to learn new technologies.",
            info: [{
                    icon: "marker",
                    display: "Indianapolis, IN",
                    link: ""
                }, {
                    icon: "mail outline",
                    display: "kai.liu@cc.gatech.edu",
                    link: "mailto:kai.liu@cc.gatech.edu"
                }, {
                    icon: "globe",
                    display: "liuk.ai",
                    link: "http://liuk.ai"
                }, {
                    icon: "linkedin",
                    display: "kliu99",
                    link: "https://www.linkedin.com/in/kliu99"
                }, {
                    icon: "github",
                    display: "kliu99",
                    link: "https://github.com/kliu99"
                }]
        };
        this.EXPERIENCE = [{
                position: "Software Engineering Intern",
                company: "Cadence Design Systems",
                period: "May 2017 - Present",
                location: "Chelmsform, MA",
                url: "//www.cadence.com",
                imgUrl: "assets/images/logo/Cadence.png",
                description: [
                    'Working on something cool.'
                ]
            }, {
                position: "CAE Intern",
                company: "Tesla",
                period: "Jan 2016 - Jun 2016",
                location: "Palo Alto, CA",
                url: "//www.tesla.com",
                imgUrl: "assets/images/logo/Tesla.png",
                description: [
                    "Automated model build processes using Python and ANSA APIs to replace and speed up redundant works. This automated tool is able to save up to 30s for each member in every model build.",
                    "Developed a tool in Python to overlay multiple simulation results to identify potentially degradable parts on BIW to reduce the overall structural mass without compromising on performance."
                ]
            }, {
                position: "Stduent Associate",
                company: "Honda R&D Americas",
                period: "Jul 2016 - Aug 2016",
                location: "Richmond, OH",
                url: "//www.hondaresearch.com/",
                imgUrl: "assets/images/logo/Honda.jpg",
                description: [
                    "Design optimization of vehicle subsystems and automation through Python and MATLAB.",
                ]
            }];
        this.EDUCATION = [{
                school: "Georgia Institute of Technology",
                degree: "Master of Science, Computer Science",
                year: "Expected May 2018",
                location: "Atlanta, GA",
                url: "//gatech.edu",
                imgUrl: "assets/images/logo/GATech.png",
                description: [
                    "Specialized in interactive intelligence"
                ]
            }, {
                school: "Purdue University",
                degree: "Doctoral of Philosophy, Mechanical Engineering",
                year: "Expected Dec 2017",
                location: "West Lafayette, IN",
                url: "//purdue.edu",
                imgUrl: "assets/images/logo/Purdue.png",
                description: [
                    "Dissertation: Design Optimization for Crashworthiness"
                ]
            }, {
                school: "Purdue University",
                degree: "Master of Science, Mechanical Engineering",
                year: "Aug 2013",
                location: "West Lafayette, IN",
                url: "//purdue.edu",
                imgUrl: "assets/images/logo/Purdue.png",
                description: [
                    "Magna Cum Laude",
                    "Thesis: Concurrent Topology Optimization of Structures and Materials"
                ]
            }, {
                school: "Central South University of Forestry and Technology",
                degree: "Bachelor of Engineering, Mechanical Engineering",
                year: "May 2011",
                location: "Hunan, CHINA",
                url: "http://www.csuft.edu.cn/",
                imgUrl: "assets/images/logo/CSUFT.png",
                description: [
                    "Magna Cum Laude",
                    "Senior Design: Robotic Car Design"
                ]
            }];
        this.NANODEGREE = [{
                school: "Udacity",
                degree: '<a href="https://www.udacity.com/course/self-driving-car-engineer-nanodegree--nd013" target="_blank">Self-Driving Car Engineer Nanodegree</a>',
                year: "May 2017 - Present",
                location: "",
                url: "//udacity.com",
                imgUrl: "assets/images/logo/Udacity.svg",
                description: [
                    "The program covers topics including deep learning, computer vision, sensor fusion, localization, controllers, vehicle kinematics, automotive hardware, and more."
                ]
            }, {
                school: "Udacity",
                degree: '<a href="https://www.udacity.com/course/deep-learning-nanodegree-foundation--nd101" target="_blank">Deep Learning Nanodegree Foundation</a>',
                year: "Jul 2017",
                location: "",
                url: "//udacity.com",
                imgUrl: "assets/images/logo/Udacity.svg",
                description: [
                    "An excellent introduction to the world of Deep Learning—a transformational technology that is going to reshape our future, and drive amazing new innovations in AI."
                ]
            }, {
                school: "Udacity",
                degree: '<a href="https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004" target="_blank">Full Stack Web Developer Nanodegree</a>',
                year: "Feb 2017",
                location: "",
                url: "//udacity.com",
                imgUrl: "assets/images/logo/Udacity.svg",
                description: [
                    "Built complex server-side web applications that use powerful relational databases to persistently store data.",
                    "Built applications that can support any front-end, and scale to support hundreds of thousands of users."
                ]
            }, {
                school: "Udacity",
                degree: '<a href="https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001" target="_blank">Front-End Web Developer Nanodegree</a>',
                year: "Feb 2017",
                location: "",
                url: "//udacity.com",
                imgUrl: "assets/images/logo/Udacity.svg",
                description: [
                    "Learned the fundamentals of how the web works and gain a working knowledge of the three foundational languages that power each and every website: HTML, CSS and JavaScript."
                ]
            }, {
                school: "MongoDB",
                degree: '<a href="https://university.mongodb.com/certification/developer/about/" target="_blank">MongoDB Certified Developer</a>',
                year: "since May 2017",
                location: "",
                url: "https://university.mongodb.com/certification/display_certificate?license1=100&license2=086&license3=625",
                imgUrl: "assets/images/logo/mongodb-badge.png",
                description: [
                    "The MongoDB Certified Developer, Associate Level exam is intended for individuals with knowledge of the fundamentals of designing and building applications using MongoDB."
                ]
            }, {
                school: "Google",
                degree: '<a href="https://developers.google.com/training/certification/" target="_blank">Associate Android Developer</a>',
                year: "since Jan 2017",
                location: "",
                url: "http://bcert.me/pcmwfvyq",
                imgUrl: "assets/images/logo/aad.png",
                description: [
                    "The Associate Android Developer exam demonstrates the type of skill that a newer Android Developer should have as they begin their career."
                ]
            }];
        this.IconMAP = {
            'Python': 'python',
            'Java': 'java',
            'MATLAB': 'matlab',
            'R': 'r-lang',
            'C': 'c-line',
            'HTML': 'html5',
            'CSS': 'css3',
            'JavaScript': 'javascript_badge',
            'Jquery': 'jquery',
            'Angular': 'angular',
            'Ember': 'ember',
            'KnockoutJS': 'knockout',
            'Bootstrap': 'bootstrap',
            'Semantic UI': 'semantic-ui',
            'Jasmine': 'jasmine',
            'TypeScript': 'typescript',
            'npm': 'npm',
            'Gulp': 'gulp',
            'NodeJS': 'nodejs',
            'ExpressJS': 'express',
            'Flask': 'flask',
            'MongooseJS': 'mongoose',
            'Psycopg': 'psycopg',
            'SQLAlchemy': 'sqlalchemy',
            'mongoDB': 'mongodb',
            'PostgreSQL': 'postgresql',
            'SQLite': 'sqlite',
            'Android': 'android',
            'Google Cloud Platform': 'google-cloud-platform',
            'Heroku': 'heroku',
            'DigitalOcean': 'digitalocean',
            'Git': 'git',
            'Github': 'github_badge',
            'Bitbucket': 'bitbucket',
            'JIRA': 'jira'
        };
        this.SKILLS = [{
                category: 'Programming Language',
                skills: [
                    {
                        name: 'Python',
                        level: 4
                    }, {
                        name: 'Java',
                        level: 4
                    }, {
                        name: 'MATLAB',
                        level: 5
                    }, {
                        name: 'C',
                        level: 2
                    }, {
                        name: 'R',
                        level: 2
                    }
                ]
            }, {
                category: 'Front-End',
                skills: [{
                        name: 'HTML',
                        level: 4
                    }, {
                        name: 'CSS',
                        level: 4
                    }, {
                        name: 'JavaScript',
                        level: 4
                    }, {
                        name: 'Jquery',
                        level: 3
                    }, {
                        name: 'Angular',
                        level: 3
                    }, {
                        name: 'Ember',
                        level: 3
                    }, {
                        name: 'KnockoutJS',
                        level: 3
                    }, {
                        name: 'Bootstrap',
                        level: 4
                    }, {
                        name: 'Semantic UI',
                        level: 4
                    }, {
                        name: 'Jasmine',
                        level: 2
                    }, {
                        name: 'TypeScript',
                        level: 2
                    }, {
                        name: 'npm',
                        level: 3
                    }, {
                        name: 'Gulp',
                        level: 1
                    }]
            }, {
                category: 'Back-End',
                skills: [{
                        name: 'NodeJS',
                        level: 3
                    }, {
                        name: 'ExpressJS',
                        level: 3
                    }, {
                        name: 'Flask',
                        level: 3
                    }, {
                        name: 'MongooseJS',
                        level: 4
                    }, {
                        name: 'Psycopg',
                        level: 3
                    }, {
                        name: 'SQLAlchemy',
                        level: 2
                    }]
            }, {
                category: 'Database',
                skills: [
                    {
                        name: 'mongoDB',
                        level: 4
                    }, {
                        name: 'PostgreSQL',
                        level: 3
                    }, {
                        name: 'SQLite',
                        level: 3
                    },
                ]
            }, {
                category: 'Mobile',
                skills: [
                    {
                        name: 'Android',
                        level: 3
                    }
                ]
            }, {
                category: 'PaaS/SaaS',
                skills: [
                    {
                        name: 'Google Cloud Platform',
                        level: 3
                    }, {
                        name: 'Heroku',
                        level: 3
                    }, {
                        name: 'DigitalOcean',
                        level: 2
                    }
                ]
            }, {
                category: 'Version Control',
                skills: [
                    {
                        name: 'Git',
                        level: 4
                    }, {
                        name: 'Github',
                        level: 4
                    }, {
                        name: 'Bitbucket',
                        level: 3
                    },
                    {
                        name: 'JIRA',
                        level: 2
                    }
                ]
            }];
        this.PROJECTS = [{
                shortname: 'Top3d',
                name: 'An Efficient 3D Topology Optimization Open Source MATLAB Program: Top3d',
                highlight: 'An efficient 3D topology optimization open source MATLAB program.',
                description: [
                    'Optimized MATLAB program by utilizing vectorization, sparse-vector multiplication with 2x speed up.',
                    'Accelerated Top3d using CUDA GPU with 40x speed up and limited memory usage (1.1GB vs 4.1KB).',
                    'The source code has been downloaded 6872 times and used on three graduate courses as of January 2017.'
                ],
                thumbnail: 'assets/images/project/top3d.gif',
                github: 'https://github.com/kliu99/Top3d',
                link: 'http://top3dapp.com',
                tags: ['MATLAB', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'DigitalOcean']
            }, {
                shortname: 'Redbox online',
                name: 'Redbox online',
                highlight: 'Online movie rental website powered by JavaScript full stack.',
                description: [
                    'Created a single-page application featuring online movie rental using MongoDB, Express, Angular and NodeJS. The user can log in using their Google account and checkout through Stripe.'
                ],
                thumbnail: 'assets/images/project/redbox_online.png',
                github: '',
                link: 'http://liuk-ai-mean-shopping.herokuapp.com/',
                tags: ['HTML', 'CSS', 'JavaScript', 'Jquery', 'mongoDB', 'ExpressJS', 'Angular', 'NodeJS', 'MongooseJS', 'TypeScript', 'Semantic UI', 'Heroku']
            }, {
                shortname: 'Flashcards',
                name: 'Flashcards',
                highlight: 'A flashcard Android app to help users bear vocabulary.',
                description: [
                    'Built a flashcard Android app to help users bear vocabulary, historical date or any subject matter that can be learned via a question-and-answer format.',
                    'Flashcards are locally stored in the SQLite database on the device, and populated using content provider and recycler view. The use of services allows users to schedule daily reminder notification and add a widget to home screen. Flash mode helps user review cards in a flash. FAB and swipe gestures enrich user experiences.'
                ],
                thumbnail: 'assets/images/project/flashcards.gif',
                github: 'https://github.com/kliu99/flashcards',
                link: 'https://youtu.be/i8RwAvzTfrE',
                tags: ['Java', 'Android', 'SQLite']
            }, {
                shortname: 'Robotic Car',
                name: 'Robotic Car',
                highlight: 'A robotic car that follows tracks and avoid obstacles.',
                description: [
                    'Designed a robotic car to follow tracks on the floor and avoid obstacles on its track using microcontroller, DC motors and infrared sensors. Programmed the microcontroller with 1000+ lines C code.'
                ],
                thumbnail: 'assets/images/project/seniordesign.gif',
                github: '',
                link: 'https://youtu.be/UZ3-fSOYelo',
                tags: ['C']
            }];
    }
    ResumeService.prototype.getResume = function () {
        return {
            me: this.ME,
            experience: this.EXPERIENCE,
            education: this.EDUCATION,
            nanodegree: this.NANODEGREE,
            skills: this.SKILLS,
            projects: this.PROJECTS,
            iconMap: this.IconMAP
        };
    };
    ResumeService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], ResumeService);
    return ResumeService;
}());
//# sourceMappingURL=resume.service.js.map

/***/ }),

/***/ 294:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 294;


/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(411);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resume_service__ = __webpack_require__(274);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent(resumeService) {
        this.resumeService = resumeService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.resume = this.resumeService.getResume();
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        $('.ui.rating').rating('disable');
        $('.project.modal')
            .modal({
            observeChanges: true,
            onHidden: function () {
                this.activatingProject = undefined;
            }
        });
        $('.project.image').on('click', function (e) {
            var $this = _this;
            var $modal = $('.project.modal');
            var $elem = $(e.currentTarget);
            var index = parseInt($elem.data('index'));
            $this.activatingProject = $this.resume.projects[index];
            $('.project.modal').modal('show');
        });
        $.ajax({
            url: "http://liuk-ai-mean-shopping.herokuapp.com/",
            dataType: "jsonp",
            beforeSend: function () {
                console.log("Waking up dyno...");
            },
            complete: function (data) {
                console.log("Dyno is awake now.");
            }
        });
    };
    AppComponent.prototype.createRange = function (start, end) {
        this.dummy = [];
        for (var i = start; i <= end; i++) {
            this.dummy.push(i);
        }
        return this.dummy;
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(473),
            styles: [__webpack_require__(467)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__resume_service__["a" /* ResumeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__resume_service__["a" /* ResumeService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ui_card_directive__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ui_dropdown_directive__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__resume_service__ = __webpack_require__(274);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__ui_card_directive__["a" /* UiCardDirective */],
                __WEBPACK_IMPORTED_MODULE_6__ui_dropdown_directive__["a" /* UiDropdownDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__resume_service__["a" /* ResumeService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiCardDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UiCardDirective = (function () {
    function UiCardDirective(el) {
        this.el = el;
    }
    UiCardDirective.prototype.ngAfterViewInit = function () {
        $(this.el.nativeElement).dimmer({
            on: 'hover'
        });
    };
    UiCardDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Directive */])({
            selector: '[appUiCard]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === 'function' && _a) || Object])
    ], UiCardDirective);
    return UiCardDirective;
    var _a;
}());
//# sourceMappingURL=ui-card.directive.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiDropdownDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UiDropdownDirective = (function () {
    function UiDropdownDirective(el) {
        this.el = el;
    }
    UiDropdownDirective.prototype.ngAfterViewInit = function () {
        $(this.el.nativeElement)
            .dropdown();
    };
    UiDropdownDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Directive */])({
            selector: '[appUiDropdown]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === 'function' && _a) || Object])
    ], UiDropdownDirective);
    return UiDropdownDirective;
    var _a;
}());
//# sourceMappingURL=ui-dropdown.directive.js.map

/***/ }),

/***/ 411:
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
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(78)();
// imports


// module
exports.push([module.i, ".relaxed.row {\n    padding-top: 1.5em;\n}\n\n.justified.row {\n    text-align: justify;\n}\n\n.ui.info.list {\n    display: block;\n    text-align: center;\n    padding-top: 1em;\n}\n\n.ui.info.list > a> div.content {\n    padding-left: 0;\n}\n\n.ui.horizontal.divider:before {\n    display: none;\n}\n\n.ui.horizontal.divider:after {\n    width: 100%;\n}\n\n.ui.horizontal.divider {\n    text-transform: uppercase;\n}\n\nh3.ui.header .sub.header {\n    font-size: 1.07142857rem;\n}\n\n.sub.header ul.ui.horizontal.bulleted.list li::before, .ui.horizontal.bulleted.list > .item::before {\n    font-size: 0.8rem;\n    color: inherit;\n}\n\n.ui.header > .image:not(.icon), .ui.header > img, .ui.header > a > img {\n    /*width: 100%;\n    height: auto;*/\n    max-width: 150px;\n    max-height: 80px;\n    margin-bottom: 0;\n}\n\n.ui.list {\n    font-size: 0.9em;\n}\n.ui.list.narrowed {\n    margin-top: -4px;\n}\n\n.ui.skills {\n    color: rgba(0, 0, 0, 0.4);\n    font-size: 0.9em;\n    display: inline-block;\n}\n\n.ui.skills a.active {\n    color: rgba(0, 0, 0, 1);\n}\n\n.ui.skills a {\n    color: rgba(0, 0, 0, 0.4);\n    cursor: pointer;\n    margin-left: 0.5em;\n}\n\n.ui.skills a:not(.active):hover {\n    color: rgba(0, 0, 0, 0.6);\n}\n\n.row.skills {\n    padding-bottom: 0;\n    margin-bottom: -0.5em;\n}\n\n/*\n * don't add [_ngcontent] on css \n * add >>> or /deep/\n */\n\n>>> .ui.multiple.dropdown > .label {\n    background-color: transparent;\n    box-shadow: none;\n}\n\n>>> .ui.multiple.dropdown > .label.active {\n    background-color: transparent;\n}\n\n>>> .ui.multiple.dropdown > .label.active:hover {\n    background-color: transparent;\n}\n\n.project.tag {\n    display: inline-block;\n}\n.project.tag > i {\n    font-size: 1em;\n}\n\n.project.card .description {\n    font-size: 0.9em;\n}\n\n.project.image {\n    height: 225px;\n    width: 300px;\n    overflow: hidden;\n    margin: auto;\n}\n\n.project.image img {\n  position: relative;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);  \n}\n\n.project.image:hover {\n    height: auto;\n    overflow: auto;\n}\n\n.project.image img:hover {\n    top: auto;\n    -webkit-transform: none;\n            transform: none;\n}\n\n/* Skill */\n.devicons.icon {\n    font-family: devicons;\n    font-size: 5em;\n    max-width: 80px;\n    max-height: 80px;\n    margin: 0;\n    text-align: center;\n}\n\n.skill.card {\n    background: transparent;\n    border: none;\n}\n.skill.card > .extra {\n    padding: 0;\n    text-align: center;\n    border-top: none !important;\n    font-size: 0.9em;\n}\n\n.skill.card > .extra > .ui.rating {\n    display: block;\n}\n    \n\n/* Rating */\n>>> .ui.rating .icon {\n    font-family: 'Icons';\n}\n\n>>> .ui.star.rating .active.icon {\n    text-shadow: none !important;\n    color: #000 !important;\n    font-size: 1.1em;\n}\n\n>>> .ui.star.rating .active.icon:before {\n    content: '\\F121';\n}\n\n>>> .ui.star.rating .icon:before {\n    content: '\\F121';\n}\n\n\n/* Responsive */\n@media only screen and (min-device-width: 768px) {\n    .hidden-xs {\n        display: inherit;\n    }\n\n    h4.ui.header > a {\n        display: inherit;\n    }\n\n    h4.ui.header > .sub.header {\n        text-align: inherit;\n    }\n\n    .xs-only {\n        display: none;\n    }\n}\n\n@media only screen and (max-device-width: 767px) {\n    .xs-only {\n        display: inline-block !important;\n    }\n\n    .hidden-xs {\n        display: none !important;\n    }\n\n    h4.ui.header > a {\n        display: none !important;\n    }\n\n    h4.ui.header > .sub.header {\n        text-align: left !important;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 473:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui text container\">\n  <div class=\"relaxed row\">\n    <div class=\"ui center aligned huge header\">\n      <div class=\"content\">\n        {{resume.me.name}}\n        <div class=\"sub header\" innerHTML=\"{{resume.me.headline}}\">/div>\n      </div>\n    </div>\n  </div>\n  <div class=\"one column centered row\">\n    <div class=\"column\">\n      <div class=\"ui horizontal divided centered list info\">\n        <a class=\"item\" *ngFor=\"let info of resume.me.info\" href=\"{{info.link}}\">\n          <i class=\"{{info.icon}} icon\"></i>\n          <div class=\"middle aligned content hidden-xs\">\n            {{info.display}}\n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"relaxed justified row\">\n    <i class=\"quote left icon\"></i> \n    {{resume.me.summary}}\n    <!--<i class=\"quote right icon\"></i>-->\n  </div>\n\n  <!-- EXPERIENCE -->\n  <h3 class=\"ui horizontal divider header\">\n    Experience\n  </h3>\n  <div class=\"ui grid\" *ngIf=\"resume.experience\">\n    <!--<div class=\"ui two column grid\">-->\n    <div class=\"row\" *ngFor=\"let exp of resume.experience\">\n      <!--<div class=\"one wide column\"></div>-->\n      <!--<div class=\"fifteen wide justified column\">-->\n      <div class=\"justified column\">\n        <h4 class=\"ui header\">\n          <a href=\"{{exp.url}}\" target=\"_blank\"><img class=\"ui right floated image\" src=\"{{exp.imgUrl}}\"></a>\n          {{exp.position}}\n          <div class=\"sub header\">\n            {{exp.company}}\n          </div>\n          <div class=\"sub header\">\n            <div class=\"ui horizontal bulleted list\">\n              <div class=\"item\">\n                {{exp.period}}\n              </div>\n              <div class=\"item\">\n                {{exp.location}}\n              </div>\n            </div>\n          </div>\n        </h4>\n        <!-- Description -->\n        <div class=\"ui narrowed list hidden-xs\">\n          <div class=\"item\" *ngFor=\"let desc of exp.description\">\n            <i class=\"right triangle icon grey\"></i> {{desc}}\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- EDUCATION -->\n  <h3 class=\"ui horizontal divider header\">\n    Education\n  </h3>\n  <div class=\"ui grid\">\n    <!-- Repeated row -->\n    <div class=\"row\" *ngFor=\"let edu of resume.education\">\n      <div class=\"justified column\">\n        <h4 class=\"ui header\">\n          <a href=\"{{edu.url}}\" target=\"_blank\"><img class=\"ui right floated image\" src=\"{{edu.imgUrl}}\"></a>\n          {{edu.school}}\n          <div class=\"sub header\">\n            <div class=\"ui horizontal bulleted list\">\n              <div class=\"item\">\n                {{edu.degree}}\n              </div>\n              <div class=\"item\">\n                {{edu.year}}\n              </div>\n            </div>\n          </div>\n        </h4>\n\n        <div class=\"ui narrowed list  hidden-xs\">\n          <div class=\"item\" *ngFor=\"let desc of edu.description\">\n            <i class=\"right triangle icon grey\"></i> {{desc}}\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- NanoDegree & Certifaction -->\n  <h3 class=\"ui horizontal divider header\">\n    Nanodegree & Certification\n  </h3>\n  <div class=\"ui grid\">\n    <!-- Repeated row -->\n    <div class=\"row\" *ngFor=\"let edu of resume.nanodegree\">\n      <div class=\"justified column\">\n        <h4 class=\"ui header\">\n          <a href=\"{{edu.url}}\" target=\"_blank\"><img class=\"ui right floated image\" src=\"{{edu.imgUrl}}\"></a>\n          <div [innerHTML]=\"edu.degree\"></div>\n          <div class=\"sub header\">\n            <div class=\"ui horizontal bulleted list\">\n              <div class=\"item\">\n                {{edu.school}}\n              </div>\n              <div class=\"item\">\n                {{edu.year}}\n              </div>\n            </div>\n          </div>\n        </h4>\n\n        <div class=\"ui narrowed list  hidden-xs\">\n          <!-- Repeated item -->\n          <div class=\"item\" *ngFor=\"let desc of edu.description\">\n            <i class=\"right triangle icon grey\"></i> {{desc}}\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- PROJECTS -->\n  <h3 class=\"ui horizontal divider header\">\n    Projects\n  </h3>\n  <div class=\"right aligned row\">\n    <!--<div class=\"column\">\n      <div class=\"ui floating labeled icon multiple dropdown\" appUiDropdown>\n        <input type=\"hidden\" name=\"filters\" value=\"featured\">\n        <i class=\"filter icon\"></i>\n        <span class=\"text\">Filter</span>\n        <div class=\"menu\">\n          <div class=\"ui left icon input\">\n            <i class=\"search icon\"></i>\n            <input type=\"text\" name=\"search\" placeholder=\"Search...\">\n          </div>\n          <div class=\"divider\"></div>\n          <div class=\"header\">\n            <i class=\"tags icon\"></i> Tag Label\n          </div>\n          <div class=\"scrolling menu\">\n            <div class=\"item\" data-value=\"featured\">\n              <div class=\"ui red empty circular label\"></div>\n              Featured\n            </div>\n            <div class=\"item\" data-value=\"important\">\n              <div class=\"ui red empty circular label\"></div>\n              Important\n            </div>\n            <div class=\"item\" data-value=\"announcement\">\n              <div class=\"ui blue empty circular label\"></div>\n              Announcement\n            </div>\n            <div class=\"item\" data-value=\"cannotfix\">\n              <div class=\"ui black empty circular label\"></div>\n              Cannot Fix\n            </div>\n            <div class=\"item\" data-value=\"news\">\n              <div class=\"ui purple empty circular label\"></div>\n              News\n            </div>\n            <div class=\"item\" data-value=\"enhancement\">\n              <div class=\"ui orange empty circular label\"></div>\n              Enhancement\n            </div>\n            <div class=\"item\" data-value=\"off-topic\">\n              <div class=\"ui yellow empty circular label\"></div>\n              Off Topic\n            </div>\n            <div class=\"item\" data-value=\"interesting\">\n              <div class=\"ui pink empty circular label\"></div>\n              Interesting\n            </div>\n            <div class=\"item\" data-value=\"discussion\">\n              <div class=\"ui green empty circular label\"></div>\n              Discussion\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <p>Search is not working in filter</p>-->\n\n    <!--<div class=\"ui items\">\n      <div class=\"item\" *ngFor=\"let project of resume.projects\">\n        <div class=\"image\">\n          <img src=\"{{project.thumbnail}}\">\n        </div>\n        <div class=\"content\">\n          <h4 class=\"ui header\">{{project.name}}</h4>\n          <div class=\"meta\">\n            <span class=\"cinema\">{{project.tags}}</span>\n          </div>\n          <div class=\"description\">\n            <div class=\"ui narrowed list hidden-xs\">\n              <div class=\"item\" *ngFor=\"let desc of project.description\">\n                <i class=\"right triangle icon grey\"></i> {{desc}}\n              </div>\n            </div>\n          </div>\n          <div class=\"extra\">\n            <div class=\"ui label\">IMAX</div>\n            <div class=\"ui label\"><i class=\"globe icon\"></i> Additional Languages</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>-->\n\n    <div class=\"ui two stackable cards\">\n      <div class=\"ui project card\" *ngFor=\"let project of resume.projects; let index=index\">\n        <a class=\"image project\" [attr.data-index]=index>\n          <img src=\"{{project.thumbnail}}\">\n        </a>\n        <div class=\"content\">\n          <h3 class=\"ui header\">{{project.shortname}}</h3>\n          <div class=\"meta\">\n            <div class=\"project tag\" *ngFor=\"let tag of project.tags\" [attr.data-tooltip]=tag>\n              <i class=\"devicons devicons-{{resume.iconMap[tag]}} icon\"></i>\n            </div>\n          </div>\n          <div class=\"description\">\n            {{project.highlight}}\n          </div>\n        </div>\n        <div class=\"extra content\">\n          <a *ngIf=\"project.github\" class=\"left floated like\" [attr.href]=project.github target=\"_blank\" data-tooltip=\"Go to Github\">\n            <i class=\"github icon\"></i>\n          </a>\n\n          <a *ngIf=\"project.link\" class=\"right floated star\" [attr.href]=project.link target=\"_blank\" data-tooltip=\"View Demo\">\n            <i class=\"globe icon\"></i>\n          </a>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"ui project basic modal\" *ngIf=\"activatingProject\">\n      <div class=\"header\">\n        {{activatingProject.name}}\n      </div>\n      <div class=\"content\">\n        <div class=\"ui narrowed list\">\n          <div class=\"item\" *ngFor=\"let desc of activatingProject.description\">\n            <i class=\"right triangle icon grey\"></i> {{desc}}\n          </div>\n        </div>\n      </div>\n      <!--<div class=\"actions\">\n      <div class=\"ui black deny button\">\n        Nope\n      </div>\n      <div class=\"ui positive right labeled icon button\">\n        Yep, that's me\n        <i class=\"checkmark icon\"></i>\n      </div>\n    </div>-->\n    </div>\n\n    <!-- SKILLS -->\n    <h3 class=\"ui horizontal divider header\">\n      Skills\n    </h3>\n\n    <!-- Legend -->\n    <div class=\"ui one column grid\">\n      <div class=\"column\">\n        <div class=\"ui right floated horizontal divided list hidden-xs\">\n          <div class=\"item\">\n            <div class=\"ui mini star rating\" data-rating=\"5\" data-max-rating=\"5\"></div>\n            Experienced\n          </div>\n          <div class=\"item\">\n            <div class=\"ui mini star rating\" data-rating=\"3\" data-max-rating=\"5\"></div>\n            Prior experience\n          </div>\n          <div class=\"item\">\n            <div class=\"ui mini star rating\" data-rating=\"1\" data-max-rating=\"5\"></div>\n            Basic knowledge\n          </div>\n        </div>\n        <div class=\"ui right floated list xs-only\">\n          <div class=\"item\">\n            <div class=\"ui mini star rating\" data-rating=\"5\" data-max-rating=\"5\"></div>\n            Experienced\n          </div>\n          <div class=\"item\">\n            <div class=\"ui mini star rating\" data-rating=\"3\" data-max-rating=\"5\"></div>\n            Prior experience\n          </div>\n          <div class=\"item\">\n            <div class=\"ui mini star rating\" data-rating=\"1\" data-max-rating=\"5\"></div>\n            Basic knowledge\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\" *ngFor=\"let skill of resume.skills; let first = first; let index = index\">\n      <!--<h4 class=\"ui horizontal divider header\">\n        <i class=\"tag icon\"></i>\n        {{skill.category}}\n      </h4>-->\n      <div class=\"ui divider\" *ngIf=\"!first\"></div>\n\n      <div class=\"ui six doubling cards\">\n        <div class=\"card skill\" *ngFor=\"let s of skill.skills\">\n          <div align=\"center\">\n            <i class=\"devicons devicons-{{resume.iconMap[s.name]}} icon\"></i>\n          </div>\n          <div class=\"extra\">\n            {{s.name}}\n            <div class=\"ui mini star rating\" [attr.data-rating]=s.level data-max-rating=\"5\"></div>\n          </div>\n        </div>\n      </div>\n    </div>"

/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(295);


/***/ })

},[492]);
//# sourceMappingURL=main.bundle.js.map