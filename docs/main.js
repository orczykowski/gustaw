"use strict";
(self["webpackChunkgustaw_app"] = self["webpackChunkgustaw_app"] || []).push([["main"],{

/***/ 4114
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 6264);
/* harmony import */ var _features_blog_blog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/blog/blog.component */ 5940);
/* harmony import */ var _features_calculator_food_calculator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/calculator/food-calculator.component */ 6763);
/* harmony import */ var _features_calculator_age_calculator_age_calculator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/calculator/age-calculator/age-calculator.component */ 4729);
/* harmony import */ var _features_organizations_organizations_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/organizations/organizations.component */ 6778);
/* harmony import */ var _features_welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/welcome-page/welcome-page.component */ 540);
/* harmony import */ var _features_blog_articles_safe_balcony_safe_balcony_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./features/blog/articles/safe-balcony/safe-balcony.component */ 4649);
/* harmony import */ var _features_blog_articles_diet_diet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/blog/articles/diet/diet.component */ 8273);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/service-worker */ 6140);
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment.prod */ 7669);
/* harmony import */ var _features_blog_articles_cat_at_home_positives_cat_at_home_positives_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./features/blog/articles/cat-at-home-positives/cat-at-home-positives.component */ 9867);
/* harmony import */ var _features_blog_articles_cat_sounds_cat_sounds_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./features/blog/articles/cat-sounds/cat-sounds.component */ 8275);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 4363);















const routes = [{
  path: '',
  component: _features_welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_5__.WelcomePageComponent
}, {
  path: 'kalkulator',
  component: _features_calculator_food_calculator_component__WEBPACK_IMPORTED_MODULE_2__.FoodCalculatorComponent
}, {
  path: 'kalkulator/wiek',
  component: _features_calculator_age_calculator_age_calculator_component__WEBPACK_IMPORTED_MODULE_3__.AgeCalculatorComponent
}, {
  path: 'warto-wspierac',
  component: _features_organizations_organizations_component__WEBPACK_IMPORTED_MODULE_4__.OrganizationsComponent
}, {
  path: 'blog/kocie-terytorium',
  component: _features_blog_articles_safe_balcony_safe_balcony_component__WEBPACK_IMPORTED_MODULE_6__.SafeBalconyComponent
}, {
  path: 'blog/dieta',
  component: _features_blog_articles_diet_diet_component__WEBPACK_IMPORTED_MODULE_7__.DietComponent
}, {
  path: 'blog/kot-idealny-wspolokator',
  component: _features_blog_articles_cat_at_home_positives_cat_at_home_positives_component__WEBPACK_IMPORTED_MODULE_10__.CatAtHomePositivesComponent
}, {
  path: 'blog/dlaczego-koty-mrucza',
  component: _features_blog_articles_cat_sounds_cat_sounds_component__WEBPACK_IMPORTED_MODULE_11__.CatSoundsComponent
}, {
  path: 'blog',
  component: _features_blog_blog_component__WEBPACK_IMPORTED_MODULE_1__.BlogComponent
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forRoot(routes), _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__.ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: _environments_environment_prod__WEBPACK_IMPORTED_MODULE_9__.environment.production
      }), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__.ServiceWorkerModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule]
  });
})();

/***/ },

/***/ 92
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _features_blog_article_repository_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/blog/article-repository.service */ 1705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3305);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 6264);



const _c0 = () => ({
  exact: true
});
class AppComponent {
  constructor(articleRepository, router) {
    this.articleRepository = articleRepository;
    this.router = router;
    this.calcMenuOpen = false;
    this.closeTimer = null;
    this.articleCount = this.articleRepository.fetchAllLinks().length;
  }
  isCalcActive() {
    return this.router.url.startsWith('/kalkulator');
  }
  openCalcMenu() {
    if (this.closeTimer !== null) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
    this.calcMenuOpen = true;
  }
  closeCalcMenu() {
    this.closeTimer = setTimeout(() => {
      this.calcMenuOpen = false;
      this.closeTimer = null;
    }, 180);
  }
  static {
    this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_features_blog_article_repository_service__WEBPACK_IMPORTED_MODULE_1__.ArticleRepositoryService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      standalone: false,
      decls: 46,
      vars: 9,
      consts: [[1, "header-container"], ["routerLink", "/", "id", "logo"], ["src", "assets/logo.png", "alt", "logo"], [1, "logo-text"], [1, "nav-dropdown", 3, "mouseenter", "mouseleave"], [1, "nav-link", "nav-dropdown-trigger", 3, "click"], [1, "nav-text"], [1, "dropdown-caret"], [1, "nav-dropdown-menu", 3, "mouseenter", "mouseleave"], ["routerLink", "/kalkulator", "routerLinkActive", "active", 1, "nav-dropdown-item", 3, "click", "routerLinkActiveOptions"], ["routerLink", "/kalkulator/wiek", "routerLinkActive", "active", 1, "nav-dropdown-item", 3, "click"], ["routerLink", "/blog", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/warto-wspierac", "routerLinkActive", "active", 1, "nav-link"], [1, "nav-icon"], ["id", "main-content-container"], [1, "footer-links"], ["routerLink", "/kalkulator", 1, "footer-link"], [1, "footer-dot"], ["routerLink", "/kalkulator/wiek", 1, "footer-link"], ["routerLink", "/blog", 1, "footer-link"], ["routerLink", "/warto-wspierac", 1, "footer-link"], [1, "copyright"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header")(1, "div", 0)(2, "a", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Gustaw");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "kocie rzeczy");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nav")(10, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function AppComponent_Template_div_mouseenter_10_listener() {
            return ctx.openCalcMenu();
          })("mouseleave", function AppComponent_Template_div_mouseleave_10_listener() {
            return ctx.closeCalcMenu();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_11_listener() {
            return ctx.calcMenuOpen = !ctx.calcMenuOpen;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Kalkulator");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u25BE");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function AppComponent_Template_div_mouseenter_16_listener() {
            return ctx.openCalcMenu();
          })("mouseleave", function AppComponent_Template_div_mouseleave_16_listener() {
            return ctx.closeCalcMenu();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_17_listener() {
            return ctx.calcMenuOpen = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Zapotrzebowanie na karm\u0119");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_19_listener() {
            return ctx.calcMenuOpen = false;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Wiek");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 11)(22, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Do poczytania");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 12)(25, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u2764\uFE0F");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Warto wspiera\u0107");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "footer")(32, "div", 15)(33, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Kalkulator kalorii");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Kalkulator wieku");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Warto wspiera\u0107");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u00A9 Gustaw \u00B7 kocie rzeczy");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.isCalcActive());
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.calcMenuOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visible", ctx.calcMenuOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.articleCount, " artyku\u0142\u00F3w");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive],
      styles: ["header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  width: 100%;\n  background: rgba(12, 12, 12, 0.96);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  box-shadow: 0 1px 0 rgba(255, 157, 47, 0.08);\n}\n\n.header-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0.75rem 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n#logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  text-decoration: none;\n  transition: opacity 0.2s ease;\n}\n\n#logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n}\n\n#logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 48px;\n}\n\n.logo-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.logo-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"TheBreden\", serif;\n  font-size: 1.6rem;\n  margin: 0;\n  color: #ff9d2f;\n  line-height: 1.2;\n  text-align: left;\n}\n\n.logo-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  margin: 0;\n  color: rgba(212, 170, 72, 0.7);\n  line-height: 1.2;\n  text-align: left;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n}\n\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n  align-items: center;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.6rem 1.25rem;\n  color: rgba(255, 255, 255, 0.65);\n  text-decoration: none;\n  text-transform: uppercase;\n  font-size: 0.8rem;\n  font-weight: 500;\n  letter-spacing: 0.8px;\n  border-radius: 3px;\n  background: transparent;\n  border: 1px solid transparent;\n  transition: all 0.2s ease;\n}\n\n.nav-link[_ngcontent-%COMP%]:hover {\n  color: var(--white);\n  background: rgba(255, 255, 255, 0.05);\n}\n\n.nav-link.active[_ngcontent-%COMP%] {\n  color: #ffb700;\n  background: rgba(255, 157, 47, 0.1);\n  border-color: rgba(255, 157, 47, 0.3);\n  box-shadow: 0 0 10px rgba(255, 157, 47, 0.08);\n}\n\n.nav-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n\n.nav-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.nav-dropdown-trigger[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background: transparent;\n  font-family: \"Inter\", sans-serif;\n  letter-spacing: 0.8px;\n}\n\n.dropdown-caret[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  opacity: 0.5;\n  transition: transform 0.2s ease;\n  display: inline-block;\n  margin-left: 0.2rem;\n}\n\n.dropdown-caret.open[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n  opacity: 0.8;\n}\n\n.nav-dropdown-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 4px);\n  left: 0;\n  min-width: 140px;\n  background: rgba(18, 18, 18, 0.98);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 4px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);\n  opacity: 0;\n  pointer-events: none;\n  transform: translateY(-6px);\n  transition: opacity 0.18s ease, transform 0.18s ease;\n  z-index: 100;\n  overflow: hidden;\n}\n\n.nav-dropdown-menu.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n  transform: translateY(0);\n}\n\n.nav-dropdown-item[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0.6rem 1.1rem;\n  color: rgba(255, 255, 255, 0.6);\n  text-decoration: none;\n  font-size: 0.8rem;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  transition: background 0.15s ease, color 0.15s ease;\n}\n\n.nav-dropdown-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.05);\n  color: var(--white);\n}\n\n.nav-dropdown-item.active[_ngcontent-%COMP%] {\n  color: #ffb700;\n  background: rgba(255, 157, 47, 0.08);\n}\n\n#main-content-container[_ngcontent-%COMP%] {\n  display: block;\n  width: min(75%, 1200px);\n  margin: 2em auto;\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 6px;\n  background: linear-gradient(180deg, rgba(28, 27, 26, 0.95) 0%, rgba(14, 14, 14, 0.98) 100%);\n  color: var(--orange);\n  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);\n}\n\nfooter[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  width: 60%;\n  border-top: 1px solid rgba(255, 255, 255, 0.04);\n  margin: 3em auto 2em;\n  padding-top: 1.5em;\n  color: rgba(255, 255, 255, 0.3);\n  font-size: 0.75rem;\n  letter-spacing: 0.3px;\n}\n\n.footer-links[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n.footer-link[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.3);\n  text-decoration: none;\n  transition: color 0.2s ease;\n}\n\n.footer-link[_ngcontent-%COMP%]:hover {\n  color: rgba(255, 255, 255, 0.6);\n}\n\n.copyright[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.18);\n  font-size: 0.7rem;\n  letter-spacing: 0.5px;\n}\n\n.footer-dot[_ngcontent-%COMP%] {\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.15);\n  flex-shrink: 0;\n}\n\n.buy-coffee[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 1.25rem;\n  color: #ffb700;\n  text-decoration: none;\n  font-size: 0.75rem;\n  letter-spacing: 0.3px;\n  border: 1px solid rgba(255, 157, 47, 0.3);\n  border-radius: 3px;\n  background: rgba(255, 157, 47, 0.08);\n  transition: all 0.2s ease;\n}\n\n.buy-coffee[_ngcontent-%COMP%]:hover {\n  color: #ffc940;\n  border-color: rgba(255, 157, 47, 0.5);\n  background: rgba(255, 157, 47, 0.14);\n  box-shadow: 0 0 12px rgba(255, 157, 47, 0.12);\n}\n\n.coffee-icon[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n\narticle[_ngcontent-%COMP%] {\n  line-height: 1.2em;\n}\n\n@media (max-width: 900px) {\n  footer[_ngcontent-%COMP%] {\n    gap: 0.75rem;\n    font-size: 0.7rem;\n    width: 90%;\n  }\n\n  .footer-links[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 0.5rem;\n  }\n\n  .footer-dot[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  #main-content-container[_ngcontent-%COMP%] {\n    width: 100%;\n    border-radius: 0;\n    border-left: none;\n    border-right: none;\n  }\n\n  .header-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem;\n    padding: 0.6rem 1rem;\n  }\n\n  header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    width: 100%;\n    gap: 0.25rem;\n  }\n\n  .nav-link[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 5rem;\n    justify-content: center;\n    padding: 0.55rem 0.75rem;\n    font-size: 0.72rem;\n  }\n\n  .logo-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n\n  .logo-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n}\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0NBQWtDO0VBQ2xDLDJCQUEyQjtFQUMzQixtQ0FBbUM7RUFDbkMsa0RBQWtEO0VBQ2xELDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGdDQUFnQztFQUNoQyxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxjQUFj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QUN4QixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTAwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTIsIDEyLCAxMiwgMC45Nik7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYpO1xuICBib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LCAxNTcsIDQ3LCAwLjA4KTtcbn1cblxuLmhlYWRlci1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAuNzVyZW0gMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jbG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC44NXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZTtcbn1cblxuI2xvZ286aG92ZXIge1xuICBvcGFjaXR5OiAwLjg1O1xufVxuXG4jbG9nbyBpbWcge1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi5sb2dvLXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubG9nby10ZXh0IGgxIHtcbiAgZm9udC1mYW1pbHk6IFwiVGhlQnJlZGVuXCIsIHNlcmlmO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogI2ZmOWQyZjtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmxvZ28tdGV4dCBoMiB7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogcmdiYSgyMTIsIDE3MCwgNzIsIDAuNyk7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuaGVhZGVyIG5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC4yNXJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5hdi1saW5rIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjRyZW07XG4gIHBhZGRpbmc6IDAuNnJlbSAxLjI1cmVtO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY1KTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbn1cblxuLm5hdi1saW5rOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcbn1cblxuLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZiNzAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTU3LCA0NywgMC4xKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMTU3LCA0NywgMC4zKTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgyNTUsIDE1NywgNDcsIDAuMDgpO1xufVxuXG4ubmF2LWljb24ge1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBEcm9wZG93biDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5uYXYtZHJvcGRvd24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5uYXYtZHJvcGRvd24tdHJpZ2dlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XG4gIGxldHRlci1zcGFjaW5nOiAwLjhweDtcbn1cblxuLmRyb3Bkb3duLWNhcmV0IHtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIG9wYWNpdHk6IDAuNTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMC4ycmVtO1xufVxuXG4uZHJvcGRvd24tY2FyZXQub3BlbiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLm5hdi1kcm9wZG93bi1tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoMTAwJSArIDRweCk7XG4gIGxlZnQ6IDA7XG4gIG1pbi13aWR0aDogMTQwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTgsIDE4LCAxOCwgMC45OCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgb3BhY2l0eTogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE4cyBlYXNlLCB0cmFuc2Zvcm0gMC4xOHMgZWFzZTtcbiAgei1pbmRleDogMTAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubmF2LWRyb3Bkb3duLW1lbnUudmlzaWJsZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG59XG5cbi5uYXYtZHJvcGRvd24taXRlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwLjZyZW0gMS4xcmVtO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNXMgZWFzZSwgY29sb3IgMC4xNXMgZWFzZTtcbn1cblxuLm5hdi1kcm9wZG93bi1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cblxuLm5hdi1kcm9wZG93bi1pdGVtLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZiNzAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTU3LCA0NywgMC4wOCk7XG59XG5cbiNtYWluLWNvbnRlbnQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiBtaW4oNzUlLCAxMjAwcHgpO1xuICBtYXJnaW46IDJlbSBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjgsIDI3LCAyNiwgMC45NSkgMCUsIHJnYmEoMTQsIDE0LCAxNCwgMC45OCkgMTAwJSk7XG4gIGNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xuICBib3gtc2hhZG93OiAwIDRweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuICB3aWR0aDogNjAlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA0KTtcbiAgbWFyZ2luOiAzZW0gYXV0byAyZW07XG4gIHBhZGRpbmctdG9wOiAxLjVlbTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG59XG5cbi5mb290ZXItbGlua3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uZm9vdGVyLWxpbmsge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZTtcbn1cblxuLmZvb3Rlci1saW5rOmhvdmVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbn1cblxuLmNvcHlyaWdodCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTgpO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuXG4uZm9vdGVyLWRvdCB7XG4gIHdpZHRoOiAzcHg7XG4gIGhlaWdodDogM3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uYnV5LWNvZmZlZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgcGFkZGluZzogMC41cmVtIDEuMjVyZW07XG4gIGNvbG9yOiAjZmZiNzAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMTU3LCA0NywgMC4zKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTU3LCA0NywgMC4wOCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cbi5idXktY29mZmVlOmhvdmVyIHtcbiAgY29sb3I6ICNmZmM5NDA7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDE1NywgNDcsIDAuNSk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxNTcsIDQ3LCAwLjE0KTtcbiAgYm94LXNoYWRvdzogMCAwIDEycHggcmdiYSgyNTUsIDE1NywgNDcsIDAuMTIpO1xufVxuXG4uY29mZmVlLWljb24ge1xuICBmb250LXNpemU6IDAuODVyZW07XG59XG5cbmFydGljbGUge1xuICBsaW5lLWhlaWdodDogMS4yZW07XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICBmb290ZXIge1xuICAgIGdhcDogMC43NXJlbTtcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICB3aWR0aDogOTAlO1xuICB9XG5cbiAgLmZvb3Rlci1saW5rcyB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogMC41cmVtO1xuICB9XG5cbiAgLmZvb3Rlci1kb3Qge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAjbWFpbi1jb250ZW50LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIH1cblxuICAuaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDAuNXJlbTtcbiAgICBwYWRkaW5nOiAwLjZyZW0gMXJlbTtcbiAgfVxuXG4gIGhlYWRlciBuYXYge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGdhcDogMC4yNXJlbTtcbiAgfVxuXG4gIC5uYXYtbGluayB7XG4gICAgZmxleDogMTtcbiAgICBtaW4td2lkdGg6IDVyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMC41NXJlbSAwLjc1cmVtO1xuICAgIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgfVxuXG4gIC5sb2dvLXRleHQgaDEge1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICB9XG5cbiAgLmxvZ28tdGV4dCBoMiB7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ },

/***/ 635
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4967);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _features_calculator_food_calculator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/calculator/food-calculator.component */ 6763);
/* harmony import */ var _features_calculator_age_calculator_age_calculator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/calculator/age-calculator/age-calculator.component */ 4729);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _features_organizations_organizations_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/organizations/organizations.component */ 6778);
/* harmony import */ var _features_blog_blog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./features/blog/blog.component */ 5940);
/* harmony import */ var _features_calculator_print_result_print_result_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features/calculator/print-result/print-result.component */ 3063);
/* harmony import */ var _features_calculator_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./features/calculator/validation-error/validation-error.component */ 85);
/* harmony import */ var _features_welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./features/welcome-page/welcome-page.component */ 540);
/* harmony import */ var _features_organizations_organization_info_organization_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./features/organizations/organization-info/organization-info.component */ 4961);
/* harmony import */ var _features_blog_article_link_article_link_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./features/blog/article-link/article-link.component */ 723);
/* harmony import */ var _features_blog_articles_safe_balcony_safe_balcony_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./features/blog/articles/safe-balcony/safe-balcony.component */ 4649);
/* harmony import */ var _features_blog_articles_diet_diet_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./features/blog/articles/diet/diet.component */ 8273);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/service-worker */ 6140);
/* harmony import */ var _features_blog_articles_cat_at_home_positives_cat_at_home_positives_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./features/blog/articles/cat-at-home-positives/cat-at-home-positives.component */ 9867);
/* harmony import */ var _features_blog_articles_cat_sounds_cat_sounds_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./features/blog/articles/cat-sounds/cat-sounds.component */ 8275);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 4363);





















class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__.ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: !(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isDevMode)(),
        // Register the ServiceWorker as soon as the application is stable
        // or after 30 seconds (whichever comes first).
        registrationStrategy: 'registerWhenStable:30000'
      })]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent, _features_calculator_food_calculator_component__WEBPACK_IMPORTED_MODULE_4__.FoodCalculatorComponent, _features_calculator_age_calculator_age_calculator_component__WEBPACK_IMPORTED_MODULE_5__.AgeCalculatorComponent, _features_blog_blog_component__WEBPACK_IMPORTED_MODULE_8__.BlogComponent, _features_organizations_organizations_component__WEBPACK_IMPORTED_MODULE_7__.OrganizationsComponent, _features_calculator_print_result_print_result_component__WEBPACK_IMPORTED_MODULE_9__.PrintResultComponent, _features_calculator_validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_10__.ValidationErrorComponent, _features_welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_11__.WelcomePageComponent, _features_organizations_organization_info_organization_info_component__WEBPACK_IMPORTED_MODULE_12__.OrganizationInfoComponent, _features_blog_articles_safe_balcony_safe_balcony_component__WEBPACK_IMPORTED_MODULE_14__.SafeBalconyComponent, _features_blog_article_link_article_link_component__WEBPACK_IMPORTED_MODULE_13__.ArticleLinkComponent, _features_blog_articles_diet_diet_component__WEBPACK_IMPORTED_MODULE_15__.DietComponent, _features_blog_articles_cat_at_home_positives_cat_at_home_positives_component__WEBPACK_IMPORTED_MODULE_17__.CatAtHomePositivesComponent, _features_blog_articles_cat_sounds_cat_sounds_component__WEBPACK_IMPORTED_MODULE_18__.CatSoundsComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__.ServiceWorkerModule]
  });
})();

/***/ },

/***/ 2296
/*!*************************************!*\
  !*** ./src/app/core/seo.service.ts ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SeoService: () => (/* binding */ SeoService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3305);




class SeoService {
  constructor(title, meta, router, document) {
    this.title = title;
    this.meta = meta;
    this.router = router;
    this.document = document;
    this.baseUrl = 'https://gorczykowski.github.io/gustaw';
  }
  update(config) {
    const fullTitle = `${config.title} | Gustaw`;
    const url = `${this.baseUrl}${this.router.url}`;
    this.title.setTitle(fullTitle);
    this.meta.updateTag({
      name: 'description',
      content: config.description
    });
    this.meta.updateTag({
      property: 'og:title',
      content: fullTitle
    });
    this.meta.updateTag({
      property: 'og:description',
      content: config.description
    });
    this.meta.updateTag({
      property: 'og:url',
      content: url
    });
    this.meta.updateTag({
      property: 'og:type',
      content: config.type ?? 'website'
    });
    this.setCanonical(url);
  }
  setJsonLd(schema) {
    const existing = this.document.getElementById('json-ld');
    if (existing) existing.remove();
    const script = this.document.createElement('script');
    script.id = 'json-ld';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    this.document.head.appendChild(script);
  }
  setCanonical(url) {
    let link = this.document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
  static {
    this.ɵfac = function SeoService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SeoService)(_angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.Title), _angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.Meta), _angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__.DOCUMENT));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_common__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SeoService,
      factory: SeoService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 723
/*!**********************************************************************!*\
  !*** ./src/app/features/blog/article-link/article-link.component.ts ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArticleLinkComponent: () => (/* binding */ ArticleLinkComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 6264);


function ArticleLinkComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div")(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Czytaj \u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinterpolate"](ctx_r0.data == null ? null : ctx_r0.data.url));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinterpolate1"]("assets/", ctx_r0.data == null ? null : ctx_r0.data.icon), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data == null ? null : ctx_r0.data.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data == null ? null : ctx_r0.data.description);
  }
}
function ArticleLinkComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div")(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinterpolate1"]("assets/", ctx_r0.data == null ? null : ctx_r0.data.icon), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data == null ? null : ctx_r0.data.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data == null ? null : ctx_r0.data.description);
  }
}
class ArticleLinkComponent {
  constructor() {
    this.data = null;
  }
  static {
    this.ɵfac = function ArticleLinkComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ArticleLinkComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ArticleLinkComponent,
      selectors: [["app-article-link"]],
      inputs: {
        data: "data"
      },
      standalone: false,
      decls: 2,
      vars: 1,
      consts: [[1, "gustaw-article-link", 3, "routerLink"], [1, "gustaw-article-link", "placeholder"], ["alt", "NO IMAGE", 3, "src"], [1, "read-more"]],
      template: function ArticleLinkComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditionalCreate"](0, ArticleLinkComponent_Conditional_0_Template, 9, 6, "a", 0)(1, ArticleLinkComponent_Conditional_1_Template, 7, 4, "div", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"]((ctx.data == null ? null : ctx.data.url) ? 0 : 1);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
      styles: [".gustaw-article-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  margin: 0 auto 1rem;\n  padding: 1.25rem 1.5rem;\n  border-radius: 4px;\n  background: rgba(255, 255, 255, 0.02);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-left: 3px solid transparent;\n  color: var(--yellow);\n  transition: all 0.25s ease;\n  position: relative;\n  overflow: hidden;\n}\n\n.gustaw-article-link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  object-fit: cover;\n  border-radius: 3px;\n  margin-right: 1.5rem;\n  filter: grayscale(1);\n  transition: all 0.3s ease;\n  flex-shrink: 0;\n}\n\n.gustaw-article-link[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n\n.gustaw-article-link[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  font-size: 1.4rem;\n  font-weight: 600;\n  color: var(--white);\n  transition: color 0.3s ease;\n}\n\n.gustaw-article-link[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 1rem;\n  line-height: 1.5;\n  transition: color 0.3s ease;\n}\n\n.gustaw-article-link[_ngcontent-%COMP%]   .read-more[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 0.5rem;\n  font-size: 0.78rem;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  color: var(--orange);\n  text-transform: uppercase;\n  opacity: 0;\n  transform: translateX(-6px);\n  transition: all 0.3s ease;\n}\n\n.gustaw-article-link[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.04);\n  border-color: rgba(255, 255, 255, 0.1);\n  border-left-color: var(--orange);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25), -2px 0 0 var(--orange);\n}\n\n.gustaw-article-link[_ngcontent-%COMP%]:hover   .read-more[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(0);\n}\n\n.gustaw-article-link[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  filter: grayscale(0);\n  transform: scale(1.05);\n}\n\n.gustaw-article-link[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--orange);\n}\n\n.gustaw-article-link[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n}\n\n.gustaw-article-link.placeholder[_ngcontent-%COMP%] {\n  cursor: default;\n  opacity: 0.5;\n}\n\n.gustaw-article-link.placeholder[_ngcontent-%COMP%]:hover {\n  transform: none;\n  box-shadow: none;\n  background: rgba(255, 255, 255, 0.02);\n  border-color: rgba(255, 255, 255, 0.06);\n}\n\n.gustaw-article-link.placeholder[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  filter: grayscale(1);\n  transform: none;\n}\n\n.gustaw-article-link.placeholder[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--white);\n}\n\n.gustaw-article-link.placeholder[_ngcontent-%COMP%]:hover   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n@media only screen and (max-width: 1024px) {\n  .gustaw-article-link[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n\n  .gustaw-article-link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 80px;\n    margin-right: 1rem;\n  }\n\n  .gustaw-article-link[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n\n  .gustaw-article-link[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .gustaw-article-link[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    padding: 1.25rem;\n    margin-bottom: 1.5rem;\n  }\n\n  .gustaw-article-link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 100px;\n    margin-right: 0;\n    margin-bottom: 1rem;\n  }\n\n  .gustaw-article-link[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n    margin-bottom: 0.75rem;\n  }\n\n  .gustaw-article-link[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n}\n\n@media only screen and (max-width: 480px) {\n  .gustaw-article-link[_ngcontent-%COMP%] {\n    padding: 1rem;\n    margin-bottom: 1rem;\n  }\n\n  .gustaw-article-link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 80px;\n  }\n\n  .gustaw-article-link[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.15rem;\n  }\n\n  .gustaw-article-link[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYmxvZy9hcnRpY2xlLWxpbmsvYXJ0aWNsZS1saW5rLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixxQ0FBcUM7RUFDckMsMkNBQTJDO0VBQzNDLGtDQUFrQztFQUNsQyxvQkFBb0I7RUFDcEIsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsY0FBYztFQUNkLCtCQUErQjtFQUMvQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxzQ0FBc0M7RUFDdEMsZ0NBQWdDO0VBQ2hDLDJCQUEyQjtFQUMzQixrRUFBa0U7QUFDcEU7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFDQUFxQztFQUNyQyx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmd1c3Rhdy1hcnRpY2xlLWxpbmsge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbjogMCBhdXRvIDFyZW07XG4gIHBhZGRpbmc6IDEuMjVyZW0gMS41cmVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNik7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS15ZWxsb3cpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZ3VzdGF3LWFydGljbGUtbGluayBpbWcge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5ndXN0YXctYXJ0aWNsZS1saW5rIGRpdiB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLmd1c3Rhdy1hcnRpY2xlLWxpbmsgZGl2IGgyIHtcbiAgbWFyZ2luOiAwIDAgMC41cmVtIDA7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XG59XG5cbi5ndXN0YXctYXJ0aWNsZS1saW5rIGRpdiBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xufVxuXG4uZ3VzdGF3LWFydGljbGUtbGluayAucmVhZC1tb3JlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBjb2xvcjogdmFyKC0tb3JhbmdlKTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC02cHgpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG4uZ3VzdGF3LWFydGljbGUtbGluazpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBib3JkZXItbGVmdC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIC0ycHggMCAwIHZhcigtLW9yYW5nZSk7XG59XG5cbi5ndXN0YXctYXJ0aWNsZS1saW5rOmhvdmVyIC5yZWFkLW1vcmUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG5cbi5ndXN0YXctYXJ0aWNsZS1saW5rOmhvdmVyIGltZyB7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDApO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG4uZ3VzdGF3LWFydGljbGUtbGluazpob3ZlciBkaXYgaDIge1xuICBjb2xvcjogdmFyKC0tb3JhbmdlKTtcbn1cblxuLmd1c3Rhdy1hcnRpY2xlLWxpbms6aG92ZXIgZGl2IHNwYW4ge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xufVxuXG4uZ3VzdGF3LWFydGljbGUtbGluay5wbGFjZWhvbGRlciB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uZ3VzdGF3LWFydGljbGUtbGluay5wbGFjZWhvbGRlcjpob3ZlciB7XG4gIHRyYW5zZm9ybTogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYpO1xufVxuXG4uZ3VzdGF3LWFydGljbGUtbGluay5wbGFjZWhvbGRlcjpob3ZlciBpbWcge1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiBub25lO1xufVxuXG4uZ3VzdGF3LWFydGljbGUtbGluay5wbGFjZWhvbGRlcjpob3ZlciBkaXYgaDIge1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuXG4uZ3VzdGF3LWFydGljbGUtbGluay5wbGFjZWhvbGRlcjpob3ZlciBkaXYgc3BhbiB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5ndXN0YXctYXJ0aWNsZS1saW5rIHtcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xuICB9XG5cbiAgLmd1c3Rhdy1hcnRpY2xlLWxpbmsgaW1nIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICB9XG5cbiAgLmd1c3Rhdy1hcnRpY2xlLWxpbmsgZGl2IGgyIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gIH1cblxuICAuZ3VzdGF3LWFydGljbGUtbGluayBkaXYgc3BhbiB7XG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmd1c3Rhdy1hcnRpY2xlLWxpbmsge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEuMjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICB9XG5cbiAgLmd1c3Rhdy1hcnRpY2xlLWxpbmsgaW1nIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuXG4gIC5ndXN0YXctYXJ0aWNsZS1saW5rIGRpdiBoMiB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gIH1cblxuICAuZ3VzdGF3LWFydGljbGUtbGluayBkaXYgc3BhbiB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuZ3VzdGF3LWFydGljbGUtbGluayB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG5cbiAgLmd1c3Rhdy1hcnRpY2xlLWxpbmsgaW1nIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gIH1cblxuICAuZ3VzdGF3LWFydGljbGUtbGluayBkaXYgaDIge1xuICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcbiAgfVxuXG4gIC5ndXN0YXctYXJ0aWNsZS1saW5rIGRpdiBzcGFuIHtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ },

/***/ 1705
/*!*************************************************************!*\
  !*** ./src/app/features/blog/article-repository.service.ts ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArticleRepositoryService: () => (/* binding */ ArticleRepositoryService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4363);

class ArticleRepositoryService {
  static {
    this.DEFAULT_ICON = 'default-article-icon.jpeg';
  }
  fetchAllLinks() {
    return [{
      icon: ArticleRepositoryService.DEFAULT_ICON,
      title: 'Kocie terytorium',
      description: 'Jak bezpiecznie zwiekszyć powierzchnie kociego terytorium ?',
      url: 'kocie-terytorium',
      content: `Koty Zwierzęta które rządzą swoim królestwem bezpieczne kocie królestwo
Koty są jednymi z najpopularniejszych zwierząt domowych na całym świecie. Ich wyjątkowy wygląd wyjątkowa osobowość oraz niezwykłe umiejętności polowania czynią z nich niezwykłymi towarzyszami człowieka. Jedną z najbardziej niezauważanych a zarazem charakterystycznych cech kotów jest ich silne terytorialne zachowanie.
Na czym polega natura terytorialna kotów
Kiedy kot wprowadza się do naszego domu całe mieszkanie staje się jego terytorium. To pierwotne instynkty sprawiają że koty wytyczają granice i starają się utrzymać kontrolę nad całym mieszkaniem.
Oznaczanie terenu Koty posiadają gruczoły zapachowe w swoich łapach i twarzy. Przez drapanie pocieranie się o przedmioty oraz oznaczanie moczem koty pozostawiają swoje zapachowe znaki które są jednoznaczną informacją dla innych kotów że dany obszar jest już zajęty.
Zachowanie Obrona swojego terytorium jest naturalna dla kotów. Zdarza się że kiedy inny kot próbuje wkroczyć na nie swój teren miedzy nim a prawowitym kocim właścicielem może dojść do walki.
Patrole graniczne Koty często obchodzą swoje terytorium. Przemieszczając się wokół granic swojego terytorium sprawdzając czy nie pojawiły się jakieś zmiany.
Jak możemy pomóc kotom w terytorialnym zachowaniu
Oznaczone miejsce swojego terytorium Zaprojektuj specjalne miejsce dla swojego kota takie jak drapak lub legowisko które będzie jego wyłączną przestrzenią.
Dostęp do wysokości Koty lubią obserwować świat z wysokości. Zapewnienie im dostępu do regałów półek lub drapaków.
Stymulujące środowisko Zapewnienie kotu różnorodnych zabawek ukrytych miejsc tuneli i możliwości polowania.
Wykorzystaj balkon taras duży parapet. To idealne dodatkowe miejsce do obserwacji czy wylegiwania się w ciepłe letnie dni.
Aranżacja balkonu parapetu tarasu
Jednak by nasz kociak mógł spędzić czas na nowym terytorium obserwując świat podglądając życie ptaków czy wygrzewając się na słońcu musimy zapewnić mu bezpieczeństwo. Niestety to mit że kot ma 9 żyć i że zawsze spada na cztery łapy.
Siatka zabezpieczająca. Siatka powinna być specjalnie przeznaczona do tego celu. Powinna być zamontowana w sposób stabilny solidny.
Montaż siatki przyklejając do elewacji specjalne haczyki wkręcając specjalne haczyki w elewację budynku ramę okna konstrukcja stelaż przykręcana do balustrady balkonu.`
    }, {
      icon: ArticleRepositoryService.DEFAULT_ICON,
      title: 'Kocia dieta',
      description: 'Sucha karma, mokra karma, BARF czy dieta weterynaryjna – jak wybrać najlepsze żywienie dla swojego kota?',
      url: 'dieta',
      content: `Wpływ i różnorodność diet na zdrowie i rozwój kota
Dieta ma bezpośredni wpływ na zdrowie każdego żywego organizmu w tym oczywiście naszych kotów. Odpowiednio dobrane składniki odżywcze są niezbędne do utrzymania prawidłowej masy ciała zdrowych zębów sierści mocnych kości oraz dobrego funkcjonowania układu trawiennego.
Źle zbilansowana dieta może prowadzić do otyłości choroby serca cukrzyca problemy z układem trawiennym problemy z układem moczowym.
Rodzaje najpopularniejszych kocich diet
Dieta oparta o karmy suche to najpopularniejszy rodzaj diety dla kotów. Łatwość przechowywania długoterminowa trwałość wspieranie zdrowia jamy ustnej. Wady niskie nawodnienie ryzyko otyłości problemy trawienne brak różnorodności smaków i tekstur.
Dieta oparta o karmy mokre składające się głównie z wilgotnych kawałków mięsa lub ryb w sosie lub galaretce. Zalety nawodnienie smak i apetyt urozmaicenie diety lepsze trawienie. Wady krótszy okres przydatności wyższy koszt wpływ na zęby.
Dieta mieszana z karmy mokrej i suchej optymalne żywienie kota często obejmuje różnorodność w diecie.
BARF Biologically Appropriate Raw Food dieta oparta na podawaniu surowego mięsa niektórych owoców warzyw oraz dodatków takich jak specjalistyczne suplementy czy oleje rybne. Składniki surowe mięso kości skóra chrząstki dodatki suplementy. Pozytywy naturalność zróżnicowanie składników odżywczych poprawa stanu sierści i zdrowia jamy ustnej. Negatywy bakterie i zakażenia salmonella e.coli niedobory żywieniowe trudności w przygotowaniu i przechowywaniu.
Dieta weterynaryjna diety weterynaryjne są dostępne dla kotów z różnymi schorzeniami takimi jak choroby nerek alergie pokarmowe problemy z wagą.
O czym warto pamiętać przy wyborze diety wiek kocięta wymagają wyższej kaloryczności alergie przebyte choroby wartości odżywcze składniki i jakość diety.`
    }, {
      icon: ArticleRepositoryService.DEFAULT_ICON,
      title: 'Kot idealny współokator',
      description: 'Pozytywny wpływ posiadania kota w domu',
      url: 'kot-idealny-wspolokator',
      content: `Korzyści dla zdrowia i samopoczucia wynikające z posiadania w domu kota
Posiadanie kota w domu to nie tylko przyjemność ale również ma liczne korzyści dla naszego zdrowia i samopoczucia. Koty są wspaniałymi towarzyszami którzy mogą przynieść wiele radości i ukojenia.
Źródło towarzystwa koty są niezwykle przyjacielskie i oddane. Ich obecność w domu pozwala nam poczuć się kochanym i zapewnia towarzystwo.
Redukcja stresu terapia emocjonalna. Badania wykazały że interakcja z kotem może pomóc w redukcji stresu. Pieszczoty i przytulanie kota wyzwalają w nas hormony szczęścia takie jak endorfiny i oksytocyna które mają działanie relaksujące. Mruczenie ciepło i przytulanie może działać uspokajająco.
Nauka odpowiedzialności i uporządkowanie dnia. Codzienne zadania takie jak karmienie czesanie czy dbanie o kuwetę mogą pomóc nam utrzymać rutynę.
Wspomaganie zdrowia obniżenie ryzyka chorób serca i nadciśnienia tętniczego poprawa układu odpornościowego zmniejszenie ryzyka alergii i astmy u dzieci.
Koty są mało wymagające. Samodzielność czystość niezależność niski poziom aktywności fizycznej.
Kot to też obowiązki. Regularnie karmić kota dostarczając odpowiednią i zrównoważoną dietę. Utrzymanie świeżej wody pitnej. Codzienne czyszczenie kuwety. Regularne szczotkowanie futra. Regularne wizyty u weterynarza szczepienia kontrole zdrowotne profilaktyczne leczenie przeciw pasożytom. Zapewnienie aktywności i zabawy zabawki laserowe wskaźniki drapaki. Bezpieczne i komfortowe środowisko życia.`
    }, {
      icon: ArticleRepositoryService.DEFAULT_ICON,
      title: 'Dlaczego koty mruczą?',
      description: 'Poznaj mechanizm mruczenia kota – skąd pochodzi ten dźwięk i co oznacza dla właściciela.',
      url: 'dlaczego-koty-mrucza',
      content: `Dlaczego koty mruczą? To dźwięk który kojarzy się z przyjemnością i spokojem. Mruczenie to znacznie bardziej złożone zjawisko które może wpływać na zdrowie zarówno kotów jak i ich opiekunów.
Mruczenie czyli dokładnie co? Mruczenie kotów powstaje przez rytmiczne napinanie i rozluźnianie mięśni krtani co powoduje drgania strun głosowych podczas przepływu powietrza. To wibracje mięśni a nie same struny głosowe są odpowiedzialne za charakterystyczny dźwięk. Mruczenie może pojawiać się zarówno na wdechu jak i wydechu. Mechanizm ten jest kontrolowany przez sygnały nerwowe wysyłane z mózgu kota szczególnie z regionu zwanego ośrodkiem rezonansu krtaniowego. Koty potrafią mruczeć niezależnie od swojego stanu emocjonalnego mogą to robić zarówno z zadowolenia jak i w sytuacjach stresowych.
Dlaczego koty mruczą? Zadowolenie i relaks koty często mruczą gdy czują się szczęśliwe i bezpieczne na przykład podczas głaskania lub leżenia w słońcu. Samoleczenie ukojenie bólu mruczenie kota nie zawsze oznacza zadowolenie może być także sygnałem stresu bólu lub choroby. Częstotliwość dźwięku mruczenia około 25-150 Hz może wspomagać regenerację kości i tkanek. Komunikacja mruczenie jest formą komunikacji zarówno z innymi kotami jak i z ludźmi mogą sygnalizować swoje potrzeby głód prośbę o uwagę sympatię. Zabezpieczenie i bezpieczeństwo kocięta zaczynają mruczeć już w wieku kilku dni co pomaga im w komunikacji z matką. Potrzeba uwagi koty mogą mruczeć celowo aby zwrócić na siebie uwagę swojego opiekuna prosząc o jedzenie lub zabawę.`
    }, {
      icon: ArticleRepositoryService.DEFAULT_ICON,
      title: 'Jak pies z kotem. Czyli jak?',
      description: 'Już niebawem',
      url: '',
      content: ''
    }];
  }
  static {
    this.ɵfac = function ArticleRepositoryService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ArticleRepositoryService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ArticleRepositoryService,
      factory: ArticleRepositoryService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 829
/*!*********************************************************!*\
  !*** ./src/app/features/blog/article-search.service.ts ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArticleSearchService: () => (/* binding */ ArticleSearchService)
/* harmony export */ });
/* harmony import */ var flexsearch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flexsearch */ 4148);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4363);


class ArticleSearchService {
  constructor() {
    this.articles = [];
  }
  buildIndex(articles) {
    this.articles = articles;
    this.index = new flexsearch__WEBPACK_IMPORTED_MODULE_0__.Document({
      tokenize: 'forward',
      document: {
        id: 'url',
        index: ['title', 'description', 'content']
      }
    });
    for (const article of articles) {
      this.index.add(article);
    }
  }
  search(query) {
    if (!query.trim()) {
      return this.articles;
    }
    const results = this.index.search(query, {
      limit: this.articles.length
    });
    const matchedUrls = new Set();
    for (const entry of results) {
      for (const id of entry.result) {
        matchedUrls.add(String(id));
      }
    }
    return this.articles.filter(a => matchedUrls.has(a.url));
  }
  static {
    this.ɵfac = function ArticleSearchService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ArticleSearchService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ArticleSearchService,
      factory: ArticleSearchService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 9867
/*!*************************************************************************************************!*\
  !*** ./src/app/features/blog/articles/cat-at-home-positives/cat-at-home-positives.component.ts ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CatAtHomePositivesComponent: () => (/* binding */ CatAtHomePositivesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _core_seo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/seo.service */ 2296);


class CatAtHomePositivesComponent {
  constructor(seo) {
    this.seo = seo;
  }
  ngOnInit() {
    this.seo.update({
      title: 'Kot jako Współlokator – Korzyści dla Zdrowia',
      description: 'Dlaczego kot to idealny współlokator? Poznaj korzyści zdrowotne i emocjonalne płynące z posiadania kota w domu.',
      type: 'article'
    });
    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': 'Kot jako Współlokator – Korzyści dla Zdrowia',
      'description': 'Dlaczego kot to idealny współlokator? Poznaj korzyści zdrowotne i emocjonalne.',
      'inLanguage': 'pl',
      'publisher': {
        '@type': 'Organization',
        'name': 'Gustaw'
      }
    });
  }
  static {
    this.ɵfac = function CatAtHomePositivesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CatAtHomePositivesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_seo_service__WEBPACK_IMPORTED_MODULE_1__.SeoService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CatAtHomePositivesComponent,
      selectors: [["app-cat-at-home-positives"]],
      standalone: false,
      decls: 52,
      vars: 0,
      consts: [["src", "assets/articles/kot-w-domu-header.jpeg", "alt", "Kot w domu", "loading", "lazy", 1, "article-title"]],
      template: function CatAtHomePositivesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Korzy\u015Bci dla zdrowia i samopoczucia wynikaj\u0105ce z posiadania w domu kota");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Posiadanie kota w domu to nie tylko przyjemno\u015B\u0107, ale r\u00F3wnie\u017C ma liczne korzy\u015Bci dla naszego zdrowia i samopoczucia. Koty s\u0105 wspania\u0142ymi towarzyszami, kt\u00F3rzy mog\u0105 przynie\u015B\u0107 wiele rado\u015Bci i ukojenia. W tym kr\u00F3tkim wpisie postaram si\u0119 przedstawi\u0107 (momentami lekko subiektywn\u0105) list\u0119 argument\u00F3w, dlaczego warto posiada\u0107 kota oraz jakie pozytywne skutki mo\u017Ce on mie\u0107 na nasze \u017Cycie. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul")(7, "li")(8, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0179r\u00F3d\u0142o towarzystwa");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Wbrew panuj\u0105caej w internecie (naszym zdaniem k\u0142amliwej) opini koty s\u0105 niezwykle przyjacielskie i oddane. Ich obecno\u015B\u0107 w domu pozwala nam poczu\u0107 si\u0119 kochanym i zapewnia towarzystwo. Ich ciekawsko\u015B\u0107 i ch\u0119\u0107 sp\u0119dzania czasu z w\u0142a\u015Bcicielem (albo poddanym ;) ) nie pozwala nam czu\u0107 si\u0119 samotnym. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li")(12, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Redukcja stresu (Terapia emocjonalna)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Badania wykaza\u0142y, \u017Ce interakcja z kotem mo\u017Ce pom\u00F3c w redukcji stresu. Pieszczoty i przytulanie kota wyzwalaj\u0105 w nas hormony szcz\u0119\u015Bcia, takie jak endorfiny i oksytocyna, kt\u00F3re maj\u0105 dzia\u0142anie relaksuj\u0105ce. Koty w stanie wyczu\u0107 nasze emocje i nastr\u00F3j. W sytuacji kryzysowej, gorszego dnia w pracy cz\u0119sto pr\u00F3buj\u0105 nas pociesza\u0107. Gdy kot wyczuje smutek, stres czy przygn\u0119bienie stara si\u0119 pom\u00F3c na sw\u00F3j koci spos\u00F3b. Ich mruczenie, ciep\u0142o i przytulanie mo\u017Ce dzia\u0142a\u0107 uspokajaj\u0105co i pomaga\u0107 w odpr\u0119\u017Ceniu. Ich obecno\u015B\u0107 mo\u017Ce dzia\u0142a\u0107 jako forma terapii emocjonalnej, daj\u0105c nam poczucie pocieszenia i wsparcia w trudnych chwilach. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li")(16, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Nauka odpowiedzialno\u015Bci i uprz\u0105dkowanie dnia");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Opieka nad kotem mo\u017Ce przynie\u015B\u0107 nam poczucie odpowiedzialno\u015Bci i uprz\u0105dkowa\u0107 nasz dzie\u0144. Codzienne zadania, takie jak karmienie, czesanie czy dbanie o kuwet\u0119, mog\u0105 pom\u00F3c nam utrzyma\u0107 rutyn\u0119 i zwi\u0119kszy\u0107 poczucie celu. To z kolei mo\u017Ce pozytywnie wp\u0142ywa\u0107 na nasz\u0105 organizacje, rozwin\u0105\u0107 w nas poczucie odpowiedzialno\u015Bci za inn\u0105 \u017Cyw\u0105 istot\u0119. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li")(20, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Wspomaganie zdrowia");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Istnieje wiele bada\u0144 naukowych, kt\u00F3re sugeruj\u0105, \u017Ce posiadanie kota mo\u017Ce przynie\u015B\u0107 korzy\u015Bci zdrowotne. Niekt\u00F3re z nich to obni\u017Cenie ryzyka chor\u00F3b serca i nadci\u015Bnienia t\u0119tniczego, poprawa uk\u0142adu odporno\u015Bciowego oraz zmniejszenie ryzyka alergii i astmy u dzieci. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Posiadanie kota w domu mo\u017Ce przynie\u015B\u0107 wiele pozytywnych korzy\u015Bci dla naszego samopoczucia, zdrowia i jako\u015Bci \u017Cycia. Ich towarzystwo, \u0142agodne mruczenie i umiej\u0119tno\u015B\u0107 dawania wsparcia emocjonalnego s\u0105 nieocenione. Je\u015Bli szukasz przyjaciela, kt\u00F3ry dostarczy Ci rado\u015Bci i pozytywnej energii, kot mo\u017Ce by\u0107 doskona\u0142ym wyborem.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Kto s\u0105 ma\u0142o wymagaj\u0105ce!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Koty s\u0105 znane z tego, \u017Ce s\u0105 stosunkowo ma\u0142o wymagaj\u0105cymi pupilami domowymi. Je\u015Bli rozwa\u017Casz przygarni\u0119cie kota, oto kilka powod\u00F3w, dlaczego mog\u0105 by\u0107 doskona\u0142ymi towarzyszami dla os\u00F3b, kt\u00F3re ceni\u0105 sobie nieco mniejsze wymagania.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul")(30, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Samodzielno\u015B\u0107: Koty s\u0105 zwierz\u0119tami samodzielno\u015Bci. Maj\u0105 naturalne instynkty my\u015Bliwskie i umiej\u0119tno\u015B\u0107 dbania o siebie. Potrafi\u0105 zaj\u0105\u0107 si\u0119 swoj\u0105 higien\u0105, znajduj\u0105c odpowiednie miejsce do czyszczenia futra. Potrafi\u0105 te\u017C poradzi\u0107 sobie z nud\u0105 i znale\u017A\u0107 sobie rozrywk\u0119. Nie potrzebuj\u0105 sta\u0142ej uwagi i zabawy, aby by\u0107 szcz\u0119\u015Bliwymi. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Czysto\u015B\u0107: Koty s\u0105 bardzo czystymi zwierz\u0119tami. Sp\u0119dzaj\u0105 du\u017Co czasu na piel\u0119gnacji swojego futra i dbaniu o czysto\u015B\u0107. S\u0105 znane z tego, \u017Ce s\u0105 \u0142atwe do utrzymania w czysto\u015Bci, poniewa\u017C zazwyczaj u\u017Cywaj\u0105 kuwety, kt\u00F3re mo\u017Cna \u0142atwo wyczy\u015Bci\u0107. W przeciwie\u0144stwie do niekt\u00F3rych innych zwierz\u0105t domowych, nie trzeba ich regularnie k\u0105pa\u0107. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Niezale\u017Cno\u015B\u0107: Koty nie wymagaj\u0105 sta\u0142ej uwagi i obecno\u015Bci w\u0142a\u015Bciciela. Potrafi\u0105 sp\u0119dza\u0107 czas samodzielnie, zabawiaj\u0105c si\u0119 swoimi zabawkami lub obserwuj\u0105c otoczenie. Cz\u0119sto s\u0105 aktywne g\u0142\u00F3wnie wieczorem i w nocy, dzi\u0119ki czemu mog\u0105 samodzielnie dostosowa\u0107 swoje harmonogramy do potrzeb domownik\u00F3w. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Niski poziom aktywno\u015Bci fizycznej: Koty nie potrzebuj\u0105 tak du\u017Cej ilo\u015Bci ruchu i aktywno\u015Bci fizycznej, jak niekt\u00F3re inne zwierz\u0119ta domowe. Chocia\u017C regularna zabawa jest wa\u017Cna dla utrzymania ich zdrowia i dobrej kondycji, nie wymagaj\u0105 d\u0142ugich spacer\u00F3w na \u015Bwie\u017Cym powietrzu ani intensywnych trening\u00F3w. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Kot to te\u017C obowi\u0105zki!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Opieka nad kotem wi\u0105\u017Ce si\u0119 z konkretnymi obowi\u0105zkami, kt\u00F3re musimy wype\u0142ni\u0107, aby zapewni\u0107 mu zdrowie i dobrostan. Przede wszystkim, nale\u017Cy regularnie karmi\u0107 kota, dostarczaj\u0105c mu odpowiedni\u0105 i zr\u00F3wnowa\u017Con\u0105 diet\u0119. Wa\u017Cne jest r\u00F3wnie\u017C utrzymanie \u015Bwie\u017Cej wody pitnej dost\u0119pnej dla kota przez ca\u0142y czas. Opr\u00F3cz tego, codzienne czyszczenie kuwety jest niezb\u0119dne, aby utrzyma\u0107 higien\u0119 kota i zapobiec rozprzestrzenianiu si\u0119 nieprzyjemnych zapach\u00F3w. Regularne szczotkowanie futra pomaga utrzyma\u0107 je w dobrej kondycji i zapobiega\u0107 nadmiernemu wypadaniu sier\u015Bci oraz powstawaniu ko\u0142tun\u00F3w. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Opieka zdrowotna to kolejny wa\u017Cny aspekt. Nale\u017Cy regularnie odwiedza\u0107 weterynarza, aby zapewni\u0107 kota regularne szczepienia, kontrole zdrowotne i profilaktyczne leczenie przeciw paso\u017Cytom. Je\u015Bli zauwa\u017Cymy jakiekolwiek zmiany w zachowaniu, apetycie czy samopoczuciu kota, powinni\u015Bmy jak najszybciej skonsultowa\u0107 si\u0119 z weterynarzem. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Wa\u017Cnym elementem opieki nad kotem jest r\u00F3wnie\u017C zapewnienie mu odpowiedniej aktywno\u015Bci i zabawy. Koty potrzebuj\u0105 bod\u017Ac\u00F3w, jakie daje interakcja i zabawa z w\u0142a\u015Bcicielem. Dlatego warto po\u015Bwi\u0119ca\u0107 czas na wsp\u00F3lne zabawy, korzystaj\u0105c z r\u00F3\u017Cnych zabawek, laserowych wska\u017Anik\u00F3w czy drapak\u00F3w. To pomo\u017Ce kociemu przyjacielowi utrzyma\u0107 odpowiedni\u0105 form\u0119, wzmocni\u0107 wi\u0119zi z w\u0142a\u015Bcicielem i zapobiegnie nudzie. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Wreszcie, nale\u017Cy zapewni\u0107 kotu bezpieczne i komfortowe \u015Brodowisko \u017Cycia. Oznacza to zabezpieczenie domu przed niebezpiecznymi substancjami czy przedmiotami, kt\u00F3re mog\u0142yby zaszkodzi\u0107 kotu. Wa\u017Cne jest r\u00F3wnie\u017C zapewnienie dost\u0119pu do cichego miejsca, gdzie kot mo\u017Ce odpocz\u0105\u0107 i zrelaksowa\u0107 si\u0119, gdy tego potrzebuje. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Podsumowanie");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Koty s\u0105 ma\u0142o wymagaj\u0105cymi, a zarazem wspania\u0142ymi pupilami domowymi. Ich samodzielno\u015B\u0107, czysto\u015B\u0107, niezale\u017Cno\u015B\u0107 i niewielkie wymagania sprawiaj\u0105, \u017Ce s\u0105 doskona\u0142ym wyborem dla os\u00F3b, kt\u00F3re nie maj\u0105 du\u017Co czasu lub energii na intensywn\u0105 opiek\u0119 nad zwierz\u0119ciem, d\u0142ugie spacery itd. Przygarni\u0119cie kota mo\u017Ce przynie\u015B\u0107 wiele rado\u015Bci i ciep\u0142a do a tak\u017Ce pozytywnie wp\u0142yn\u0105\u0107 na nasze droziwe zar\u00F3wno psychiczne jak i fizyczne. Niemnije kot to dalej \u017Cywa istota i mimo, \u017Ce mniej wymagj\u0105ca to wci\u0105\u017C potrzebuje Twojego czasu i opieki. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
      },
      styles: ["h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYmxvZy9hcnRpY2xlcy9jYXQtYXQtaG9tZS1wb3NpdGl2ZXMvY2F0LWF0LWhvbWUtcG9zaXRpdmVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ },

/***/ 8275
/*!***************************************************************************!*\
  !*** ./src/app/features/blog/articles/cat-sounds/cat-sounds.component.ts ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CatSoundsComponent: () => (/* binding */ CatSoundsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _core_seo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/seo.service */ 2296);


class CatSoundsComponent {
  constructor(seo) {
    this.seo = seo;
  }
  ngOnInit() {
    this.seo.update({
      title: 'Dlaczego Koty Mruczą?',
      description: 'Dlaczego koty mruczą? Odkryj mechanizm mruczenia i co tak naprawdę oznacza, gdy Twój kot mruczy.',
      type: 'article'
    });
    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': 'Dlaczego koty mruczą?',
      'description': 'Odkryj mechanizm mruczenia i co tak naprawdę oznacza, gdy Twój kot mruczy.',
      'inLanguage': 'pl',
      'publisher': {
        '@type': 'Organization',
        'name': 'Gustaw'
      }
    });
  }
  static {
    this.ɵfac = function CatSoundsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CatSoundsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_seo_service__WEBPACK_IMPORTED_MODULE_1__.SeoService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CatSoundsComponent,
      selectors: [["app-cat-sounds"]],
      standalone: false,
      decls: 28,
      vars: 0,
      consts: [["src", "assets/articles/cat-sounds-header.jpeg", "alt", "Dlaczego koty mrucz\u0105", "loading", "lazy", 1, "article-title"]],
      template: function CatSoundsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Dlaczego koty mrucz\u0105?");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Czy kiedykolwiek zastanawia\u0142e\u015B si\u0119, dlaczego Tw\u00F3j kot mruczy? To d\u017Awi\u0119k, kt\u00F3ry kojarzy si\u0119 z przyjemno\u015Bci\u0105 i spokojem, ale czy to jedyne powody, dla kt\u00F3rych koty mrucz\u0105? Okazuje si\u0119, \u017Ce mruczenie to znacznie bardziej z\u0142o\u017Cone zjawisko, kt\u00F3re mo\u017Ce wp\u0142ywa\u0107 na zdrowie zar\u00F3wno kot\u00F3w, jak i ich opiekun\u00F3w. W tym artykule odkryjemy tajemnice kociego mruczenia, zbadamy, jakie niesie ono korzy\u015Bci dla zdrowia zwierz\u0105t i ludzi oraz rozwiejemy mity zwi\u0105zane z tym niezwyk\u0142ym d\u017Awi\u0119kiem. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Mruczenie - czyli dok\u0142adnie co?");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Mruczenie kot\u00F3w jest bardziej skomplikowane, ni\u017C si\u0119 na pierwszy rzut oka wydaje, i wci\u0105\u017C nie jest w pe\u0142ni zrozumiane przez naukowc\u00F3w. Jednak og\u00F3lnie przyjmuje si\u0119, \u017Ce mruczenie powstaje przez rytmiczne napinanie i rozlu\u017Anianie mi\u0119\u015Bni krtani, co powoduje drgania strun g\u0142osowych podczas przep\u0142ywu powietrza. To wibracje mi\u0119\u015Bni, a nie same struny g\u0142osowe, s\u0105 odpowiedzialne za charakterystyczny d\u017Awi\u0119k. Mruczenie mo\u017Ce pojawia\u0107 si\u0119 zar\u00F3wno na wdechu, jak i wydechu, co daje wra\u017Cenie ci\u0105g\u0142o\u015Bci d\u017Awi\u0119ku. Mechanizm ten jest kontrolowany przez sygna\u0142y nerwowe wysy\u0142ane z m\u00F3zgu kota, szczeg\u00F3lnie z regionu zwanego o\u015Brodkiem rezonansu krtaniowego. Co ciekawe, koty potrafi\u0105 mrucze\u0107 niezale\u017Cnie od swojego stanu emocjonalnego; mog\u0105 to robi\u0107 zar\u00F3wno z zadowolenia, jak i w sytuacjach stresowych. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Dlaczego ?");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Mruczenie to fascynuj\u0105cy spos\u00F3b komunikacji i samoregulacji u kot\u00F3w, kt\u00F3ry pe\u0142ni wiele r\u00F3\u017Cnych funkcji zale\u017Cnych od kontekstu. Oto lista przyczyn dlaczego koty mog\u0105 mrucze\u0107:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul")(16, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Zadowolenie i relaks: Koty cz\u0119sto mrucz\u0105, gdy czuj\u0105 si\u0119 szcz\u0119\u015Bliwe i bezpieczne, na przyk\u0142ad podczas g\u0142askania lub le\u017Cenia w s\u0142o\u0144cu. To spos\u00F3b na wyra\u017Cenie zadowolenia i komfortu.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Samoleczenie / Ukojenie b\u00F3lu: Mruczenie kota nie zawsze oznacza zadowolenie; mo\u017Ce by\u0107 tak\u017Ce sygna\u0142em stresu, b\u00F3lu lub choroby. Aby w\u0142a\u015Bciwie zinterpretowa\u0107 zachowanie kota, warto zwraca\u0107 uwag\u0119 na inne oznaki, takie jak zmiany w apetycie, ruchach czy nastroju. Szczeg\u00F3lnie niepokoj\u0105cym objawem jest sytuacja, gdy kot ukrywa si\u0119 i mruczy \u2014 mo\u017Ce to \u015Bwiadczy\u0107 o b\u00F3lu lub dyskomforcie. W takich przypadkach nale\u017Cy niezw\u0142ocznie skonsultowa\u0107 si\u0119 z weterynarzem, aby wykluczy\u0107 potencjalne problemy zdrowotne. Naukowcy uwa\u017Caj\u0105, \u017Ce cz\u0119stotliwo\u015B\u0107 d\u017Awi\u0119ku mruczenia (oko\u0142o 25-150 Hz) mo\u017Ce wspomaga\u0107 regeneracj\u0119 ko\u015Bci i tkanek. To naturalny mechanizm, kt\u00F3ry pomaga w procesie gojenia. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Komunikacja: Mruczenie jest form\u0105 komunikacji zar\u00F3wno z innymi kotami, jak i z lud\u017Ami. Mog\u0105 w ten spos\u00F3b sygnalizowa\u0107 swoje potrzeby lub uczucia, np. g\u0142\u00F3d czy pro\u015Bb\u0119 o uwag\u0119, czy sympati\u0119.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Zabezpieczenie i bezpiecze\u0144stwo: Koci\u0119ta zaczynaj\u0105 mrucze\u0107 ju\u017C w wieku kilku dni, co pomaga im w komunikacji z matk\u0105, informuj\u0105c j\u0105, \u017Ce s\u0105 bezpieczne i zdrowe.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Potrzeba uwagi: Koty mog\u0105 mrucze\u0107 celowo, aby zwr\u00F3ci\u0107 na siebie uwag\u0119 swojego opiekuna, np. prosz\u0105c o jedzenie lub zabaw\u0119. Mruczenie to spos\u00F3b na subtelne wyra\u017Cenie swoich potrzeb. Je\u017Celi to nie zadzia\u0142a potrafi\u0105 niezykl\u0119 szybko eskalowac form\u0119 komunikacji na bardziej efektywn\u0105. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Mruczenie kota to jak kocia wersja podcastu relaksacyjnego, kt\u00F3ry dzia\u0142a zar\u00F3wno na kota, jak i na jego w\u0142a\u015Bciciela. Ale zanim pomy\u015Blisz, \u017Ce Tw\u00F3j mrucz\u0105cy kot to tylko szcz\u0119\u015Bliwy futrzany towarzysz, pami\u0119taj, \u017Ce mruczenie mo\u017Ce te\u017C oznacza\u0107 \u201Epotrzebuj\u0119 pomocy!\u201D Czasem to sygna\u0142, \u017Ce co\u015B jest nie tak, szczeg\u00F3lnie je\u015Bli towarzyszy temu ukrywanie si\u0119 czy apatia. Zawsze warto mie\u0107 oko na dodatkowe sygna\u0142y. W ko\u0144cu, kto zrozumie kota lepiej ni\u017C jego czujny opiekun? A gdy co\u015B jest nie tak, weterynarz to najlepszy adres. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ },

/***/ 8273
/*!***************************************************************!*\
  !*** ./src/app/features/blog/articles/diet/diet.component.ts ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DietComponent: () => (/* binding */ DietComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _core_seo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/seo.service */ 2296);


class DietComponent {
  constructor(seo) {
    this.seo = seo;
  }
  ngOnInit() {
    this.seo.update({
      title: 'Kocia Dieta – Sucha, Mokra, BARF i Weterynaryjna',
      description: 'Przewodnik po kocich dietach: sucha karma, mokra karma, BARF i dieta weterynaryjna. Jak wybrać najlepsze żywienie dla kota?',
      type: 'article'
    });
    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': 'Kocia Dieta – Sucha, Mokra, BARF i Weterynaryjna',
      'description': 'Przewodnik po kocich dietach: sucha karma, mokra karma, BARF i dieta weterynaryjna.',
      'inLanguage': 'pl',
      'publisher': {
        '@type': 'Organization',
        'name': 'Gustaw'
      }
    });
  }
  static {
    this.ɵfac = function DietComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DietComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_seo_service__WEBPACK_IMPORTED_MODULE_1__.SeoService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DietComponent,
      selectors: [["app-diet"]],
      standalone: false,
      decls: 110,
      vars: 0,
      consts: [["src", "assets/articles/kocia-dieta-header.jpeg", "alt", "Kocia dieta", "loading", "lazy", 1, "article-title"]],
      template: function DietComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Wp\u0142yw i r\u00F3\u017Cnorodno\u015B\u0107 diet na zdrowie i rozw\u00F3j kota");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Nie od dzi\u015B jest wiadome, \u017Ce dieta ma bezpo\u015Bredni wp\u0142yw na zdrowie ka\u017Cdego \u017Cywego organizmu, w tym oczywiscie naszych kot\u00F3w. Odpowiednio dobrane sk\u0142adniki od\u017Cywcze s\u0105 niezb\u0119dne do utrzymania prawid\u0142owej masy cia\u0142a, zdrowych z\u0119b\u00F3w, sier\u015Bci, mocnych ko\u015Bci oraz dobrego funkcjonowania uk\u0142adu trawiennego. Nie tylko nadmierna kalorczyno\u015B\u0107 ale i \u017Ale zbilansowana dieta mog\u017Ce prowadzi\u0107 do oty\u0142o\u015Bci, a tak\u017Ce do powa\u017Cnych problem\u00F3w zdrowotnych. Choroby serca, cukrzyca, problemy z uk\u0142adem trawiennym czy problemy z uk\u0142adem moczowym to tylko niekt\u00F3re choroby kt\u00F3re mog\u0105 by\u0107 spowodowane \u017Ale dobran\u0105 diet\u0105. Dlatego niezwykle wa\u017Cne jest, aby zapewni\u0107 naszym kotom odpowiedni\u0105 zbilansowan\u0105 diet\u0119, kt\u00F3ra dostarcza im wszystkich niezb\u0119dnych sk\u0142adnik\u00F3w od\u017Cywczych i jest dostosowana do ich potrzeb, wieku i stanu zdrowia. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Rodzaje najpopularniejszych kocich diet:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div")(9, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Dieta oprta o karmy suche");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "To najpopularniejszy rodzaj diety dla kot\u00F3w, dost\u0119pny w wielu r\u00F3\u017Cnych smakach i sk\u0142adach.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Zalety:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul")(16, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0141atwo\u015B\u0107 przechowywania: Karma sucha jest wygodna w przechowywaniu, poniewa\u017C nie wymaga specjalnych warunk\u00F3w ani ch\u0142odzenia. Mo\u017Cna j\u0105 \u0142atwo przechowywa\u0107 w szczelnie zamkni\u0119tym opakowaniu w temperaturze pokojowej, co u\u0142atwia kontrol\u0119 nad ilo\u015Bci\u0105 i jako\u015Bci\u0105 jedzenia dla kota. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "D\u0142ugoterminowa trwa\u0142o\u015B\u0107: Karma sucha ma d\u0142u\u017Cszy okres przydatno\u015Bci do spo\u017Cycia ni\u017C karmy mokre. Ze wzgl\u0119du na swoj\u0105 nisk\u0105 zawarto\u015B\u0107 wilgoci, jest mniej podatna na psucie si\u0119 i utrat\u0119 warto\u015Bci od\u017Cywczych. To sprawia, \u017Ce jest idealna dla w\u0142a\u015Bcicieli, kt\u00F3rzy preferuj\u0105 wi\u0119ksze opakowania i d\u0142u\u017Csze okresy mi\u0119dzy zakupami. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Wspieranie zdrowia jamy ustnej: Jedzenie suchej karmy wymaga od kot\u00F3w bardziej intensywnego \u017Cucia. Ten proces \u017Cucia mo\u017Ce korzystnie wp\u0142ywa\u0107 na zdrowie jamy ustnej, poprawiaj\u0105c zdrowie z\u0119b\u00F3w i dzi\u0105se\u0142. Suche kawa\u0142ki karmy mog\u0105 pom\u00F3c w usuwaniu p\u0142ytki naz\u0119bnej i zapobieganiu powstawaniu kamienia naz\u0119bnego, cho\u0107 oczywi\u015Bcie regularna higiena jamy ustnej i kontrola stomatologiczna s\u0105 r\u00F3wnie\u017C wa\u017Cne. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Wady:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul")(25, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Niskie nawodnienie: Karmy suche charakteryzuj\u0105 si\u0119 nisk\u0105 zawarto\u015Bci\u0105 wody w por\u00F3wnaniu do karm mokrych. To mo\u017Ce prowadzi\u0107 do przewlek\u0142ego lekkiego odwodnienia u kot\u00F3w, kt\u00F3re s\u0105 pierwotnie przystosowane do pobierania wi\u0119kszo\u015Bci p\u0142yn\u00F3w z po\u017Cywienia. Brak odpowiedniego nawodnienia mo\u017Ce zwi\u0119ksza\u0107 ryzyko problem\u00F3w z uk\u0142adem moczowym, takich jak kamienie nerkowe czy infekcje p\u0119cherza. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Ryzyko oty\u0142o\u015Bci: Karmy suche cz\u0119sto maj\u0105 wysok\u0105 zawarto\u015B\u0107 w\u0119glowodan\u00F3w i kalorii w por\u00F3wnaniu do karm mokrych. Koty \u017Cywione wy\u0142\u0105cznie such\u0105 karm\u0105 mog\u0105 by\u0107 bardziej nara\u017Cone na oty\u0142o\u015B\u0107. Nadmierne przyjmowanie kalorii mo\u017Ce prowadzi\u0107 do powa\u017Cnych problem\u00F3w zdrowotnych, takich jak cukrzyca, choroby serca, problemy stawowe i skr\u00F3cenie d\u0142ugo\u015Bci \u017Cycia. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Problemy trawienne: Niekt\u00F3re koty mog\u0105 mie\u0107 trudno\u015Bci z trawieniem suchej karmy. Zawiera ona przetworzone sk\u0142adniki i cz\u0119sto brakuje naturalnego b\u0142onnika i enzym\u00F3w trawiennych. D\u0142ugotrwa\u0142e \u017Cywienie wy\u0142\u0105cznie such\u0105 karm\u0105 mo\u017Ce prowadzi\u0107 do problem\u00F3w trawiennych, takich jak wymioty, zaparcia czy biegunka. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Mimo du\u017Cego wyboru producent\u00F3w brak r\u00F3\u017Cnorodno\u015Bci smak\u00F3w i tekstur: Karmy suche zazwyczaj oferuj\u0105 ograniczon\u0105 r\u00F3\u017Cnorodno\u015B\u0107 smak\u00F3w i tekstur w por\u00F3wnaniu do karm mokrych. Koty s\u0105 stworzeniami wybrednymi, a monotonna dieta suchej karmy mo\u017Ce prowadzi\u0107 do braku zainteresowania jedzeniem, utraty apetytu i niedobor\u00F3w \u017Cywieniowych. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div")(34, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Dieta oprta o karmy mokre");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Karmy mokre: Karmy mokre dla kot\u00F3w s\u0105 popularnym alternatywnym rodzajem diety, sk\u0142adaj\u0105cym si\u0119 g\u0142\u00F3wnie z wilgotnych kawa\u0142k\u00F3w mi\u0119sa lub ryb w sosie lub galaretce. Diety mokre maj\u0105 swoje w\u0142asne zalety i wady, kt\u00F3re warto wzi\u0105\u0107 pod uwag\u0119. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Zalety");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ul")(41, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Nawodnienie: Karmy mokre maj\u0105 wysok\u0105 zawarto\u015B\u0107 wody, co pomaga w utrzymaniu odpowiedniego nawodnienia kot\u00F3w. Nawodnienie jest wa\u017Cne dla zdrowia uk\u0142adu moczowego i og\u00F3lnego funkcjonowania organizmu. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Smak i apetyt: Karmy mokre cz\u0119sto maj\u0105 intensywniejszy smak i aromat, co przyci\u0105ga koty i stymuluje ich apetyt. To mo\u017Ce by\u0107 szczeg\u00F3lnie korzystne dla kot\u00F3w wybrednych lub maj\u0105cych trudno\u015Bci z jedzeniem. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Urozmaicenie diety: Karmy mokre oferuj\u0105 szerok\u0105 gam\u0119 smak\u00F3w, tekstur i sk\u0142adnik\u00F3w, co pozwala na urozmaicenie diety kot\u00F3w. Dzi\u0119ki temu mo\u017Cna zapewni\u0107 r\u00F3\u017Cnorodno\u015B\u0107 sk\u0142adnik\u00F3w od\u017Cywczych i zaspokoi\u0107 potrzeby \u017Cywieniowe kot\u00F3w. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Lepsze trawienie: Karmy mokre s\u0105 \u0142atwiejsze do strawienia przez koty w por\u00F3wnaniu do suchych karm. Maj\u0105 odpowiedni\u0105 wilgotno\u015B\u0107 i konsystencj\u0119, co u\u0142atwia proces trawienia i zmniejsza ryzyko problem\u00F3w \u017Co\u0142\u0105dkowych. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Wady");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ul")(52, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Kr\u00F3tszy okres przydatno\u015Bci: Karmy mokre maj\u0105 kr\u00F3tszy okres przydatno\u015Bci do spo\u017Cycia po otwarciu w por\u00F3wnaniu do suchych karm. Wymaga to sk\u0142adowania niewykorzystanej cz\u0119\u015Bci w lod\u00F3wce i stosowania w odpowiednim czasie. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Wy\u017Cszy koszt: Karmy mokre s\u0105 zazwyczaj dro\u017Csze ni\u017C suche karmy. Ze wzgl\u0119du na swoj\u0105 wilgotn\u0105 natur\u0119, s\u0105 one bardziej kosztowne w produkcji, co wp\u0142ywa na ich cen\u0119 detaliczn\u0105. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Wp\u0142yw na z\u0119by: Karmy mokre mog\u0105 mie\u0107 ograniczony wp\u0142yw na zdrowie z\u0119b\u00F3w kot\u00F3w w por\u00F3wnaniu do suchych karm. W przeciwie\u0144stwie do \u017Cucia suchej karmy, kawa\u0142ki mokrej karmy nie s\u0105 tak skuteczne w usuwaniu p\u0142ytki naz\u0119bnej i utrzymaniu zdrowych z\u0119b\u00F3w. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Mniej energii na porcjowanie: Karmy mokre maj\u0105 wi\u0119ksz\u0105 obj\u0119to\u015B\u0107 w por\u00F3wnaniu do suchych karm o tej samej kaloryczno\u015Bci. To oznacza, \u017Ce koty mog\u0105 otrzymywa\u0107 mniejsze porcje jedzenia, co niekt\u00F3rym w\u0142a\u015Bcicielom mo\u017Ce sprawia\u0107 trudno\u015B\u0107 w odpowiednim dawk ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div")(61, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Dieta mieszana z karmy mokrej i suchej");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Optymalne \u017Cywienie kota cz\u0119sto obejmuje r\u00F3\u017Cnorodno\u015B\u0107 w diecie, co oznacza, \u017Ce mo\u017Cna \u0142\u0105czy\u0107 zar\u00F3wno karmy suche, jak i mokre. Wykorzystanie obu rodzaj\u00F3w karm pozwala na korzystanie z zalet obu opcji. Karmy suche mog\u0105 zapewni\u0107 kotom dodatkow\u0105 porcj\u0119 kalorii, sk\u0142adnik\u00F3w od\u017Cywczych i pom\u00F3c w utrzymaniu zdrowych z\u0119b\u00F3w. Z kolei karmy mokre dostarczaj\u0105 kotom nawodnienie, smakowite urozmaicenie i mog\u0105 by\u0107 szczeg\u00F3lnie pomocne dla kot\u00F3w o niskim apetycie. Kluczem jest zapewnienie zr\u00F3wnowa\u017Conej i dostosowanej do indywidualnych potrzeb diety, zawsze w konsultacji z weterynarzem, aby upewni\u0107 si\u0119, \u017Ce kot otrzymuje odpowiednie sk\u0142adniki od\u017Cywcze, niezale\u017Cnie od wyboru mi\u0119dzy karmami suchymi i mokrymi.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div")(66, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "BARF");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Dieta BARF (Biologically Appropriate Raw Food) oparta jest na podawaniu surowego mi\u0119sa, niekt\u00F3rych owoc\u00F3w, warzyw oraz dodatk\u00F3w, takich jak specjalistyczne suplementy czy oleje rybne. Inspiracj\u0105 dla stowrzenia tej diety jest naturalnym sposobem \u017Cywienia kot\u00F3w, jak poluj\u0105 na zdobycz w naturze.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Sk\u0142adniki diety BARF:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "ul")(73, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Surowe mi\u0119so: Mi\u0119so jest g\u0142\u00F3wnym sk\u0142adnikiem diety. Jes to to mieszanka kilku rodzaj\u00F3w mi\u0119s we w\u0142asciwej proporcji. Sama proporcja i rodzaje powinny zosta\u0107 indywidualnie dobrane dla naszego kota. W diecie mi\u0119so jest \u017Ar\u00F3d\u0142em niezb\u0119dnych bia\u0142ek, aminokwas\u00F3w, witamin z grupy B i minera\u0142\u00F3w. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Ko\u015Bci, sk\u00F3ra, chrz\u0105stki: dostarczaj\u0105 kotom nie tylko niezb\u0119dnych minera\u0142\u00F3w, takich jak wap\u0144 i fosfor, ale r\u00F3wnie\u017C pomagaj\u0105 w utrzymaniu zdrowych z\u0119b\u00F3w i dzi\u0105se\u0142. Wa\u017Cne jest, aby podawa\u0107 je odpowiednio przygotowane, aby unikn\u0105\u0107 ryzyka zad\u0142awienia lub uszkodzenia uk\u0142adu pokarmowego. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Dodatki / supelmenty: s\u0105 to dodatkowe sk\u0105\u0142dniki takie jak wcze\u015Bniej wspomniany olej rybny czy witaminy. Powinny zosta\u0107 w\u0142a\u015Bciwie dobrane po konsltacji ze specjalist\u0105 tak aby jak najlepiej wspomaga\u0142y w zdrowiu i rozwoju naszego kota. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Pozytywy:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "ul")(82, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Naturalno\u015B\u0107: Dieta BARF na\u015Bladuje naturalny spos\u00F3b \u017Cywienia kot\u00F3w, co jest zgodne z ich pierwotnymi potrzebami \u017Cywieniowymi. Mo\u017Ce to przyczyni\u0107 si\u0119 do poprawy zdrowia i dobrostanu kot\u00F3w. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Zr\u00F3\u017Cnicowanie sk\u0142adnik\u00F3w od\u017Cywczych: Dieta BARF, sk\u0142adaj\u0105ca si\u0119 z r\u00F3\u017Cnych sk\u0142adnik\u00F3w, takich jak mi\u0119so, ko\u015Bci, owoce i warzywa, dostarcza kotom szerok\u0105 gam\u0119 sk\u0142adnik\u00F3w od\u017Cywczych, takich jak bia\u0142ka, witaminy, minera\u0142y i b\u0142onnik. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Poprawa stanu sier\u015Bci i zdrowia jamy ustnej: Podawanie kotom surowego mi\u0119sa i ko\u015Bci mo\u017Ce przyczyni\u0107 si\u0119 do poprawy stanu sier\u015Bci, dzi\u0119ki dostarczeniu odpowiednich sk\u0142adnik\u00F3w od\u017Cywczych. Ponadto, gryzienie ko\u015Bci mo\u017Ce by\u0107 korzystne dla zdrowia jamy ustnej kot\u00F3w, pomagaj\u0105c w usuwaniu p\u0142ytki naz\u0119bnej i zapobiegaj\u0105c chorobom z\u0119b\u00F3w. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Negatywy:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "ul")(91, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Bakterie i zaka\u017Cenia: Surowe mi\u0119so niesie ze sob\u0105 ryzyko zaka\u017Ce\u0144 bakteryjnych, takich jak salmonella czy e.coli. Istnieje mo\u017Cliwo\u015B\u0107 przeniesienia tych bakterii na ludzi podczas przygotowywania posi\u0142k\u00F3w dla kot\u00F3w. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Niedobory \u017Cywieniowe: W przypadku diety BARF istnieje ryzyko niedobor\u00F3w sk\u0142adnik\u00F3w od\u017Cywczych, je\u015Bli nie jest odpowiednio zbilansowana. W\u0142a\u015Bciwe proporcje i r\u00F3\u017Cnorodno\u015B\u0107 sk\u0142adnik\u00F3w s\u0105 kluczowe, aby zapewni\u0107 kotom pe\u0142nowarto\u015Bciow\u0105 diet\u0119. W tym przypadku zaleca si\u0119 konsultacj\u0119 z weterynarzem lub specjalist\u0105 ds. \u017Cywienia zwierz\u0105t. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Trudno\u015Bci w przygotowaniu i przechowywaniu: Dieta BARF wymaga starannego przygotowania, w\u0142\u0105cznie z obr\u00F3bk\u0105 i higien\u0105 surowego mi\u0119sa oraz dost\u0119pno\u015Bci\u0105 \u015Bwie\u017Cych sk\u0142adnik\u00F3w. Ponadto, przechowywanie surowej \u017Cywno\u015Bci mo\u017Ce stanowi\u0107 wyzwanie w przypadku niew\u0142a\u015Bciwego przechowywania lub d\u0142ugotrwa\u0142ego sk\u0142adowania. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Wa\u017Cne jest, aby przed wprowadzeniem diety BARF dla kota skonsultowa\u0107 si\u0119 z weterynarzem, kt\u00F3ry pomo\u017Ce dostosowa\u0107 diet\u0119 do indywidualnych potrzeb kota i zapewni\u0107, \u017Ce s\u0105 spe\u0142niane wszystkie wymagania \u017Cywieniowe. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div")(100, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Dieta weterynaryjna");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Diety weterynaryjne s\u0105 dost\u0119pne dla kot\u00F3w z r\u00F3\u017Cnymi schorzeniami, takimi jak choroby nerek, alergie pokarmowe czy problemy z wag\u0105. Te specjalistyczne diety s\u0105 opracowane z my\u015Bl\u0105 o konkretnych potrzebach zdrowotnych kot\u00F3w i powinny by\u0107 stosowane zgodnie z zaleceniami weterynarza. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "O czym warto pami\u0119ta\u0107 przy wyborze diety");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " Nale\u017Cy pamieta\u0107, \u017Ce przy wyborze diety dla kota bardzo znacz\u0105cym czynnikiem jest jest jego wiek. Koci\u0119ta wymagaj\u0105 zdecydowanie wy\u017Ceszej kalorczyno\u015Bci posi\u0142k\u00F3w a ni\u017Celi nasz kilku leni przyjaciel, kt\u00F3ry bardziej ni\u017C zabaw\u0119 preferuje le\u017Cenie na kanapie. Innym niemnije wa\u017Cnym aspektem w doborze diety s\u0105 alegrgie czy przebyte choroby. Dobrze dobrana dieta jest istotnym wspraciem dla leczenia, nie mo\u017Ce by\u0107 jednak dobrana losowo tylko po konsultacji z weternyarzem. Ostatnim jednak r\u00F3wnie waznym aspektem s\u0105 warto\u015Bci od\u017Cywcze, sk\u0142adniki i jako\u015B\u0107 diety powinny by\u0107 starannie przemy\u015Blane, aby zapewni\u0107 kotom pe\u0142nowarto\u015Bciowe i zbilansowane \u017Cywienie. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Wyb\u00F3r odpowiedniej diety dla naszego pupila ma ogromne znaczenie dla ich zdrowia i rozwoju. Dieta powinna by\u0107 zr\u00F3\u017Cnicowana, uwzgl\u0119dnia\u0107 odpowiedni\u0105 ilo\u015B\u0107 sk\u0142adnik\u00F3w od\u017Cywczych i dostosowana do indywidualnych potrzeb kota. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
      },
      styles: ["h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYmxvZy9hcnRpY2xlcy9kaWV0L2RpZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ },

/***/ 4649
/*!*******************************************************************************!*\
  !*** ./src/app/features/blog/articles/safe-balcony/safe-balcony.component.ts ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SafeBalconyComponent: () => (/* binding */ SafeBalconyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _core_seo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/seo.service */ 2296);


class SafeBalconyComponent {
  constructor(seo) {
    this.seo = seo;
  }
  ngOnInit() {
    this.seo.update({
      title: 'Bezpieczne Kocie Terytorium – Balkon i Okna',
      description: 'Jak bezpiecznie powiększyć kocie terytorium w mieszkaniu? Porady dotyczące balkonów, okien i aranżacji przestrzeni dla kota.',
      type: 'article'
    });
    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': 'Bezpieczne Kocie Terytorium – Balkon i Okna',
      'description': 'Jak bezpiecznie powiększyć kocie terytorium w mieszkaniu?',
      'inLanguage': 'pl',
      'publisher': {
        '@type': 'Organization',
        'name': 'Gustaw'
      }
    });
  }
  static {
    this.ɵfac = function SafeBalconyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SafeBalconyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_seo_service__WEBPACK_IMPORTED_MODULE_1__.SeoService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SafeBalconyComponent,
      selectors: [["app-safe-balcony"]],
      standalone: false,
      decls: 62,
      vars: 0,
      consts: [["src", "assets/articles/kocie-terytoritum-header.jpeg", "alt", "Kocie terytorium", "loading", "lazy", 1, "article-title"], [1, "first-letter"]],
      template: function SafeBalconyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Koty - Zwierz\u0119ta, kt\u00F3re rz\u0105dz\u0105 swoim kr\u00F3lestwem - bezpieczne kocie kr\u00F3lestwo");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div")(5, "p", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Koty s\u0105 jednymi z najpopularniejszych zwierz\u0105t domowych na ca\u0142ym \u015Bwiecie. Ich wyj\u0105tkowy wygl\u0105d, wyj\u0105tkowa osobowo\u015B\u0107 oraz niezwyk\u0142e umiej\u0119tno\u015Bci polowania czyni\u0105 z nich niezwyk\u0142ymi towarzyszami cz\u0142owieka. Jedn\u0105 z najbardziej niezauwa\u017Canych a zarazem charakterystycznych cech kot\u00F3w jest ich silne terytorialne zachowanie. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Na czym polega natura terytorialna kot\u00F3w:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Kiedy kot \"wprowadza si\u0119\" do naszego domu, ca\u0142e mieszkanie staje si\u0119 jego terytorium. To pierwotne isnstynkty sprawiaj\u0105, \u017Ce koty wytyczaj\u0105 granice i staraj\u0105 si\u0119 utrzyma\u0107 kontrol\u0119 nad ca\u0142ym mieszkaniem. Jest kilka sposob\u00F3w, w jaki koty manifestuj\u0105 swoje terytorialne instynkty: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul")(13, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Oznaczanie terenu: Koty posiadaj\u0105 gruczo\u0142y zapachowe w swoich \u0142apach i twarzy. Przez drapanie, pocieranie si\u0119 o przedmioty oraz oznaczanie moczem, koty pozostawiaj\u0105 swoje zapachowe znaki, kt\u00F3re s\u0105 jednoznaczn\u0105 informacj\u0105 dla innych kot\u00F3w, \u017Ce dany obszar jest ju\u017C zaj\u0119ty. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Zachowanie: Obrona swojego terytorium jest naturalna dla kot\u00F3w. Zdarza si\u0119, \u017Ce kiedy inny kot pr\u00F3buje wkroczy\u0107 na nie sw\u00F3j teren, miedzy nim a \"prawowitym kocim w\u0142a\u015Bcicielem\" mo\u017Ce doj\u015B\u0107 do walki. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Patrole graniczne: Koty cz\u0119sto obchodz\u0105 swoje terytorium. Przemieszczaj\u0105c si\u0119 wok\u00F3\u0142 granic swojego terytorium, sprawdzaj\u0105c czy nie pojawi\u0142y si\u0119 jakie\u015B zmiany. Jest to ich spos\u00F3b te\u017C na utrzymanie kontroli i upewnienie si\u0119, \u017Ce \u017Cadne niepo\u017C\u0105dane obiekty lub zwierz\u0119ta nie pojawi\u0142y si\u0119 w ich przestrzeni. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Jak mo\u017Cemy pom\u00F3c kotom w terytorialnym zachowaniu?");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Zrozumienie, \u017Ce koty s\u0105 zwierz\u0119tami terytorialnymi, mo\u017Ce pom\u00F3c nam stworzy\u0107 dla nich odpowiednie warunki \u017Cyciowe. Oto kilka wskaz\u00F3wek, jak mo\u017Cemy zapewni\u0107 naszym kotom satysfakcjonuj\u0105ce \u015Brodowisko:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul")(24, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Oznaczone miejsce swojego terytorium: Zaprojektuj specjalne miejsce dla swojego kota, takie jak drapak lub legowisko, kt\u00F3re b\u0119dzie jego wy\u0142\u0105czn\u0105 przestrzeni\u0105. To pomo\u017Ce kotu czu\u0107 si\u0119 bezpiecznie i pewnie. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Dost\u0119p do wysoko\u015Bci: Koty lubi\u0105 obserwowa\u0107 \u015Bwiat z wysoko\u015Bci. Zapewnienie im dost\u0119pu do rega\u0142\u00F3w, p\u00F3\u0142ek lub drapak\u00F3w, kt\u00F3re pozwalaj\u0105 im wspi\u0105\u0107 si\u0119 na wy\u017Csze poziomy, jest wa\u017Cne dla ich samopoczucia. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Stymuluj\u0105ce \u015Brodowisko: Zapewnienie kotu r\u00F3\u017Cnorodnych zabawek, ukrytych miejsc, tuneli i mo\u017Cliwo\u015Bci polowania na interaktywne \u0142upki, pomo\u017Ce zaspokoi\u0107 ich wrodzone potrzeby. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Wykorzystaj balkon / taras / du\u017Cy parapet. To idealne dodatkowe miejsce do obserwacji czy wylegiwania si\u0119 w ciep\u0142e letnie dni. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Aran\u017Cacja balkonu / parapetu / tarasu");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Jednak by nasz kociak m\u00F3g\u0142 sp\u0119dzi\u0107 czas na nowym terytorium obserwuj\u0105c \u015Bwiat, \"podgl\u0105daj\u0105c\" \u017Cycie ptak\u00F3w czy wygrzewajac si\u0119 na s\u0142o\u0144cu musimy zapewni\u0107 mu ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "bezpiecze\u0144stwo");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "! Niestety to mit, \u017Ce kot ma 9 \u017Cy\u0107, i \u017Ce zawsze spada na cztery \u0142apy. Musimy pami\u0119ta\u0107 o tym, \u017Ce kot instynktownie mo\u017Ce chcie\u0107 wskoczy\u0107 na siatk\u0119 pr\u00F3buj\u0105c co\u015B upolowa\u0107 czy szuka\u0107 szczeliny by wybra\u0107 si\u0119 na emocjonuj\u0105c\u0105 wycieczk\u0119 po okolicy. Konsekwencje takich przyg\u00F3d mog\u0105 zako\u0144czy\u0107 si\u0119 niestety tragicznie. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Tutaj z pomoc\u0105 przychodzi ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "b");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "siatka zabezpieczaj\u0105c\u0105");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, ". Jednak musimy pami\u0119ta\u0107 o kilku elementach by spe\u0142nia\u0142a swoj\u0105 funkcje i chroni\u0142a naszego przyjaciela przed upadkiem z du\u017Cej wysoko\u015Bci czy przed \"niekontrolowan\u0105 wycieczk\u0105\" po okolicy. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul")(45, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Siatka powinna by\u0107 specjalnie przeznaczona do tego celu. Z przeci\u0119ciem / przegryzieniem zwyk\u0142ej kot poradzi sobie w u\u0142amku sekundy. Dlatego warto kupi\u0107 odpowiedni\u0105 / dedykowan\u0105 siatk\u0119 w sklepie zoologicznym. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Powinna by\u0107 zamontowana w spos\u00F3b stabilny, solidny. Kot mo\u017Ce wspina\u0107 si\u0119 po niej wi\u0119c wybrany spos\u00F3b mocowania powinin by\u0107 adekwatny do wielko\u015Bci naszego pupila. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Monta\u017C siatki:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " W zalezno\u015Bci od technicznych mo\u017Cliwo\u015Bci siatk\u0119 mo\u017Cna zamontowa\u0107: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ul")(54, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Przyklejaj\u0105c do elewacji specjalne haczyki. Jest to niew\u0105tpliwie najprosza nie wymagj\u0105ca posiadania ani nieprzeci\u0119tnych umiej\u0119tno\u015Bci ani specjalistycznych narz\u0119dzi.Wad\u0105 bez w\u0105tpienia jest wytrzyma\u0142o\u015B\u0107 rozwi\u0105zania, klej bywa \"r\u00F3\u017Cnej\" jako\u015Bci i samo mocownie siatki do \u015Bciany mo\u017Ce nie przetrwa\u0107 pr\u00F3by si\u0142 z naszym pupilem. Drug\u0105 wada jest konieczno\u015B\u0107 ingerencji w elewacje budynku. Przy demonta\u017Cu haczyki mog\u0105 odchodzi\u0107 z farb\u0105 a co w przypadku np wynajmowanego mieszkania mo\u017Ce narazi\u0107 nas na koszty. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Wkr\u0119cj\u0105c specjalne haczyki w elewacj\u0119 budynku/ ram\u0119 okna. Zdecydowanie bardziej trwa\u0142e rozwi\u0105zanie. Kot najprawdopodobniej nie poradzi sobie z poprawnie zamontowanym tego typu zabezpieczeniem. Wadami tego rozwi\u0105zania jest konieczno\u015B\u0107 wywiercenia dziur w elewacji (co w przypadku np. przeprowadzki mo\u017Ce stworzy\u0107 spory \"problem\" / koszt, nie zawsze jest te\u017C to zgodne z regulaminami wsp\u00F3lnot mieszkaniowych). Tu te\u017C do monta\u017Cu bedziemy poterzbowali bardzo podstawowych narz\u0119dzi takich jak np. wkr\u0119tarka / wiertarka. Sam monta\u017C nie jest nadmiernie skomplikowany i ka\u017Cdy powinien sobie z nim poradzi\u0107. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Konstrukcja (stela\u017C) przykr\u0119cana do balustrady balkonu. Najmniej inwazyjn\u0105 dla budynku, trwa\u0142\u0105 i powoduj\u0105ca najmniej zniszcze\u0144 metod\u0105 jest wykonanie dedykowanego stela\u017Cu (ramki), w kt\u00F3r\u0105 b\u0119dziemy mogli wkr\u0119ci\u0107 haczyki. Sama rama mo\u017Ce zosta\u0107 wykonana z cienkich k\u0105townik\u00F3w / p\u0142askownik\u00F3w. Musi by\u0107 jednak wykonana bardzo dok\u0142adnie (na wymiar!) tak aby kot nie m\u00F3g\u0142 przecisn\u0105\u0107 si\u0119 pomiedzy \u015Bcian\u0105 a naszym zabezpieczeniem. Jest to zdecydowanie najtrudniejsza w realizacji metoda zabezpieczenia dodatkowej przestrzeni. Wymaga sporej ilo\u015Bci narz\u0119dzi, umiej\u0119tno\u015Bci i jest zdycowanie najdro\u017Csze w wykoniu. Jest jednak alternatyw\u0105 je\u017Celi z jaki\u015B powod\u00F3w nie mo\u017Cemy ingerowa\u0107 w fasad\u0119 budynku. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Podsumowuj\u0105c pamietaj, \u017Ce Twoje mieszkanie to teraz kocie kr\u00F3lestwo a ka\u017Cdy jego dodatkowy centymetr jest niezywkle cenny dla Towjego pupila. Dlatego postaraj si\u0119 wykorzysta\u0107 ka\u017Cd\u0105 dodatkow\u0105 przestrze\u0144 ale nie zapominaj o w\u0142\u0105\u015Bciwym zadabaniu o bezpiecze\u0144stwo. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
      },
      styles: ["h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYmxvZy9hcnRpY2xlcy9zYWZlLWJhbGNvbnkvc2FmZS1iYWxjb255LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ },

/***/ 5940
/*!*************************************************!*\
  !*** ./src/app/features/blog/blog.component.ts ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogComponent: () => (/* binding */ BlogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _article_repository_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article-repository.service */ 1705);
/* harmony import */ var _article_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article-search.service */ 829);
/* harmony import */ var _core_seo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/seo.service */ 2296);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _article_link_article_link_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./article-link/article-link.component */ 723);






function BlogComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-article-link", 6);
  }
  if (rf & 2) {
    const link_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", link_r1);
  }
}
function BlogComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Nie znaleziono artyku\u0142\u00F3w pasuj\u0105cych do \"", ctx_r1.searchQuery, "\"");
  }
}
class BlogComponent {
  constructor(articleRepository, articleSearch, seo) {
    this.articleRepository = articleRepository;
    this.articleSearch = articleSearch;
    this.seo = seo;
    this.links = new Array();
    this.filteredLinks = [];
    this.searchQuery = '';
  }
  ngOnInit() {
    this.links = this.articleRepository.fetchAllLinks().filter(a => !!a.url);
    this.articleSearch.buildIndex(this.links);
    this.filteredLinks = this.links;
    this.seo.update({
      title: 'Artykuły o Kotach',
      description: 'Artykuły o kotach: dieta, terytorium, zdrowie i codzienna pielęgnacja. Porady pisane z myślą o właścicielach kotów.'
    });
    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [{
        '@type': 'ListItem',
        'position': 1,
        'name': 'Strona główna',
        'item': 'https://gorczykowski.github.io/gustaw/'
      }, {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Blog',
        'item': 'https://gorczykowski.github.io/gustaw/blog'
      }]
    });
  }
  onSearch() {
    this.filteredLinks = this.articleSearch.search(this.searchQuery);
  }
  static {
    this.ɵfac = function BlogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_article_repository_service__WEBPACK_IMPORTED_MODULE_1__.ArticleRepositoryService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_article_search_service__WEBPACK_IMPORTED_MODULE_2__.ArticleSearchService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_seo_service__WEBPACK_IMPORTED_MODULE_3__.SeoService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogComponent,
      selectors: [["app-blog"]],
      standalone: false,
      decls: 13,
      vars: 2,
      consts: [[1, "article-wrapper"], [1, "blog-hero"], [1, "blog-hero-icon"], [1, "blog-hero-sub"], [1, "search-wrapper"], ["type", "text", "placeholder", "Szukaj artyku\u0142\u00F3w...", 1, "search-input", 3, "ngModelChange", "ngModel"], [3, "data"], [1, "no-results"]],
      template: function BlogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\uD83D\uDC3E");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Artyku\u0142y");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Przydatna wiedza o kocim \u015Bwiecie");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4)(9, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function BlogComponent_Template_input_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.searchQuery, $event) || (ctx.searchQuery = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BlogComponent_Template_input_ngModelChange_9_listener() {
            return ctx.onSearch();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](10, BlogComponent_For_11_Template, 1, 1, "app-article-link", 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditionalCreate"](12, BlogComponent_Conditional_12_Template, 2, 1, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.searchQuery);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.filteredLinks);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.filteredLinks.length === 0 ? 12 : -1);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _article_link_article_link_component__WEBPACK_IMPORTED_MODULE_5__.ArticleLinkComponent],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  padding: 0;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.article-wrapper[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 1.5rem 2rem;\n  box-sizing: border-box;\n}\n\n.blog-hero[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem 2rem 1.5rem;\n  margin: 0 -1.5rem 1.5rem;\n  position: relative;\n  overflow: hidden;\n  border-bottom: 1px solid rgba(255, 157, 47, 0.1);\n  background: radial-gradient(ellipse at 50% 0%, rgba(255, 157, 47, 0.08) 0%, transparent 70%);\n  animation: _ngcontent-%COMP%_heroFadeIn 0.6s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_heroFadeIn {\n  from { opacity: 0; transform: translateY(-10px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\n.blog-hero-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 0.75rem;\n  display: inline-block;\n  animation: _ngcontent-%COMP%_iconFloatGlow 2.8s ease-in-out infinite;\n}\n\n@keyframes _ngcontent-%COMP%_iconFloatGlow {\n  0%, 100% {\n    transform: translateY(0) scale(1);\n    filter: drop-shadow(0 0 0px rgba(255, 157, 47, 0));\n  }\n  50% {\n    transform: translateY(-8px) scale(1.08);\n    filter: drop-shadow(0 0 14px rgba(255, 157, 47, 0.7));\n  }\n}\n\n.article-wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display\", serif;\n  font-size: 2.5rem;\n  margin: 0 0 0.75rem;\n  font-weight: 600;\n  background: linear-gradient(135deg, #ff9d2f 0%, #ffb700 50%, #d4aa48 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  background-size: 200% auto;\n  animation: _ngcontent-%COMP%_shimmer 3s ease-in-out infinite;\n}\n\n@keyframes _ngcontent-%COMP%_shimmer {\n  0%, 100% { background-position: 0% center; }\n  50% { background-position: 100% center; }\n}\n\n.blog-hero-sub[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 0.95rem;\n  margin: 0;\n  letter-spacing: 0.3px;\n}\n\n.search-wrapper[_ngcontent-%COMP%] {\n  max-width: 500px;\n  margin: 1.25rem auto 0;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.85rem 1.25rem;\n  font-size: 1rem;\n  font-family: \"Inter\", sans-serif;\n  color: #e5e5e5;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1.5px solid rgba(255, 157, 47, 0.25);\n  border-radius: 4px;\n  outline: none;\n  box-sizing: border-box;\n  transition: border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n}\n\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(229, 229, 229, 0.45);\n}\n\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #ff9d2f;\n  background: rgba(255, 255, 255, 0.09);\n  box-shadow: 0 0 15px rgba(255, 157, 47, 0.15);\n}\n\n.no-results[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #c6c4c4;\n  font-size: 1.1rem;\n  padding: 3rem 1rem;\n}\n\n@media only screen and (max-width: 1024px) {\n  .article-wrapper[_ngcontent-%COMP%] {\n    padding: 0 1rem 2rem;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .article-wrapper[_ngcontent-%COMP%] {\n    padding: 0 1rem 2rem;\n  }\n\n  .article-wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n\n  .blog-hero[_ngcontent-%COMP%] {\n    padding: 1.5rem 1rem 1.25rem;\n    margin: 0 -1rem 1rem;\n  }\n\n  .blog-hero-icon[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n\n  .blog-hero-sub[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n}\n\n@media only screen and (max-width: 480px) {\n  .article-wrapper[_ngcontent-%COMP%] {\n    padding: 0 0.75rem 1.5rem;\n  }\n\n  .article-wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n\n  .blog-hero[_ngcontent-%COMP%] {\n    padding: 1.5rem 0.75rem 1.25rem;\n    margin: 0 -0.75rem 1rem;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdEQUFnRDtFQUNoRCw0RkFBNEY7RUFDNUYsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsT0FBTyxVQUFVLEVBQUUsNEJBQTRCLEVBQUU7RUFDakQsS0FBSyxVQUFVLEVBQUUsd0JBQXdCLEVBQUU7QUFDN0M7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRTtJQUNFLGlDQUFpQztJQUNqQyxrREFBa0Q7RUFDcEQ7RUFDQTtJQUNFLHVDQUF1QztJQUN2QyxxREFBcUQ7RUFDdkQ7QUFDRjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiwwRUFBMEU7RUFDMUUsNkJBQTZCO0VBQzdCLG9DQUFvQztFQUNwQyxxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLFdBQVcsOEJBQThCLEVBQUU7RUFDM0MsTUFBTSxnQ0FBZ0MsRUFBRTtBQUMxQzs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMsY0FBYztFQUNkLHFDQUFxQztFQUNyQyw0Q0FBNEM7RUFDNUMsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEVBQThFO0VBQzlFLGtDQUEwQjtVQUExQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIscUNBQXFDO0VBQ3JDLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSw0QkFBNEI7SUFDNUIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSwrQkFBK0I7SUFDL0IsdUJBQXVCO0VBQ3pCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmFydGljbGUtd3JhcHBlciB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAxLjVyZW0gMnJlbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmJsb2ctaGVybyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMnJlbSAycmVtIDEuNXJlbTtcbiAgbWFyZ2luOiAwIC0xLjVyZW0gMS41cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMTU3LCA0NywgMC4xKTtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgNTAlIDAlLCByZ2JhKDI1NSwgMTU3LCA0NywgMC4wOCkgMCUsIHRyYW5zcGFyZW50IDcwJSk7XG4gIGFuaW1hdGlvbjogaGVyb0ZhZGVJbiAwLjZzIGVhc2Utb3V0O1xufVxuXG5Aa2V5ZnJhbWVzIGhlcm9GYWRlSW4ge1xuICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTsgfVxuICB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxufVxuXG4uYmxvZy1oZXJvLWljb24ge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBhbmltYXRpb246IGljb25GbG9hdEdsb3cgMi44cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBpY29uRmxvYXRHbG93IHtcbiAgMCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAwcHggcmdiYSgyNTUsIDE1NywgNDcsIDApKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KSBzY2FsZSgxLjA4KTtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAxNHB4IHJnYmEoMjU1LCAxNTcsIDQ3LCAwLjcpKTtcbiAgfVxufVxuXG4uYXJ0aWNsZS13cmFwcGVyIGgxIHtcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiLCBzZXJpZjtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIG1hcmdpbjogMCAwIDAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZjlkMmYgMCUsICNmZmI3MDAgNTAlLCAjZDRhYTQ4IDEwMCUpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSBhdXRvO1xuICBhbmltYXRpb246IHNoaW1tZXIgM3MgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc2hpbW1lciB7XG4gIDAlLCAxMDAlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgY2VudGVyOyB9XG4gIDUwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgY2VudGVyOyB9XG59XG5cbi5ibG9nLWhlcm8tc3ViIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBtYXJnaW46IDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbn1cblxuLnNlYXJjaC13cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiAxLjI1cmVtIGF1dG8gMDtcbn1cblxuLnNlYXJjaC1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjg1cmVtIDEuMjVyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICNlNWU1ZTU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNik7XG4gIGJvcmRlcjogMS41cHggc29saWQgcmdiYSgyNTUsIDE1NywgNDcsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzIGVhc2UsIGJveC1zaGFkb3cgMC4zcyBlYXNlLCBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XG59XG5cbi5zZWFyY2gtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEoMjI5LCAyMjksIDIyOSwgMC40NSk7XG59XG5cbi5zZWFyY2gtaW5wdXQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICNmZjlkMmY7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOSk7XG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMjU1LCAxNTcsIDQ3LCAwLjE1KTtcbn1cblxuLm5vLXJlc3VsdHMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjYzZjNGM0O1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgcGFkZGluZzogM3JlbSAxcmVtO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAuYXJ0aWNsZS13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAwIDFyZW0gMnJlbTtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5hcnRpY2xlLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDAgMXJlbSAycmVtO1xuICB9XG5cbiAgLmFydGljbGUtd3JhcHBlciBoMSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG5cbiAgLmJsb2ctaGVybyB7XG4gICAgcGFkZGluZzogMS41cmVtIDFyZW0gMS4yNXJlbTtcbiAgICBtYXJnaW46IDAgLTFyZW0gMXJlbTtcbiAgfVxuXG4gIC5ibG9nLWhlcm8taWNvbiB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG5cbiAgLmJsb2ctaGVyby1zdWIge1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5hcnRpY2xlLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDAgMC43NXJlbSAxLjVyZW07XG4gIH1cblxuICAuYXJ0aWNsZS13cmFwcGVyIGgxIHtcbiAgICBmb250LXNpemU6IDEuNzVyZW07XG4gIH1cblxuICAuYmxvZy1oZXJvIHtcbiAgICBwYWRkaW5nOiAxLjVyZW0gMC43NXJlbSAxLjI1cmVtO1xuICAgIG1hcmdpbjogMCAtMC43NXJlbSAxcmVtO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ },

/***/ 8550
/*!***************************************************************!*\
  !*** ./src/app/features/calculator/age-calculator.service.ts ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AGE_UNIT: () => (/* binding */ AGE_UNIT),
/* harmony export */   AgeCalculatorService: () => (/* binding */ AgeCalculatorService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4363);

class AgeCalculatorService {
  calculate(age, unit = AGE_UNIT.YEAR) {
    return {
      humanAge: age,
      catAge: this.calculateCateAge(age, unit)
    };
  }
  calculateCateAge(age, unit) {
    const humanAgeInMonths = unit === AGE_UNIT.YEAR ? age * 12 : age;
    const roundedHumanAgeInMonths = Math.round(humanAgeInMonths);
    switch (true) {
      case roundedHumanAgeInMonths >= 24:
        return this.calculateCatAge(roundedHumanAgeInMonths, x => 288 + (x - 24) * 4);
      case roundedHumanAgeInMonths >= 18:
        return this.calculateCatAge(roundedHumanAgeInMonths, x => 8 * x + 96);
      case roundedHumanAgeInMonths >= 12:
        return this.calculateCatAge(roundedHumanAgeInMonths, x => 10 * x + 60);
      case roundedHumanAgeInMonths >= 7:
        return this.calculateCatAge(roundedHumanAgeInMonths, x => 7.2 * x + 93.6);
      case roundedHumanAgeInMonths >= 6:
        return this.calculateCatAge(roundedHumanAgeInMonths, x => 24 * x - 24);
      case roundedHumanAgeInMonths > 4:
        return this.calculateCatAge(roundedHumanAgeInMonths, x => 27 * x - 21);
      case roundedHumanAgeInMonths === 4:
        return this.calculateCatAge(roundedHumanAgeInMonths, x => 72);
      case roundedHumanAgeInMonths >= 2:
        return this.calculateCatAge(roundedHumanAgeInMonths, x => 36 * x - 48);
      case roundedHumanAgeInMonths > 1:
        return this.calculateCatAge(roundedHumanAgeInMonths, x => 22 * x - 16);
      default:
        return this.calculateCatAge(roundedHumanAgeInMonths, x => 6.024096385542168 * x);
    }
  }
  calculateCatAge(ageInMonths, calculate) {
    return Number((calculate(ageInMonths) / 12).toPrecision(2));
  }
  static {
    this.ɵfac = function AgeCalculatorService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AgeCalculatorService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AgeCalculatorService,
      factory: AgeCalculatorService.ɵfac,
      providedIn: 'root'
    });
  }
}
var AGE_UNIT;
(function (AGE_UNIT) {
  AGE_UNIT[AGE_UNIT["YEAR"] = 0] = "YEAR";
  AGE_UNIT[AGE_UNIT["MONTH"] = 1] = "MONTH";
})(AGE_UNIT || (AGE_UNIT = {}));

/***/ },

/***/ 4729
/*!********************************************************************************!*\
  !*** ./src/app/features/calculator/age-calculator/age-calculator.component.ts ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AgeCalculatorComponent: () => (/* binding */ AgeCalculatorComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _age_calculator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../age-calculator.service */ 8550);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _core_seo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/seo.service */ 2296);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 9748);







function AgeCalculatorComponent_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Podaj dat\u0119 urodzin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AgeCalculatorComponent_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Data urodzin nie mo\u017Ce by\u0107 w przysz\u0142o\u015Bci ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AgeCalculatorComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "div", 16)(3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Wiek kota");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 19)(8, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "W ludzkich latach");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 20)(11, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "lat");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.catAgeResult.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.humanAge);
  }
}
function notInFuture(control) {
  if (!control.value) return null;
  return new Date(control.value) > new Date() ? {
    future: true
  } : null;
}
class AgeCalculatorComponent {
  constructor(ageCalculator, seo) {
    this.ageCalculator = ageCalculator;
    this.seo = seo;
    this.catAgeResult = null;
    this.humanAge = null;
    this.todayStr = new Date().toISOString().split('T')[0];
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.UntypedFormGroup({
      birthDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.UntypedFormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, notInFuture])
    });
  }
  ngOnInit() {
    this.seo.update({
      title: 'Kalkulator wieku kota',
      description: 'Przelicz wiek swojego kota na ludzkie lata. Podaj datę urodzin kota i sprawdź, ile lat miałby, gdyby był człowiekiem.'
    });
  }
  onSubmit() {
    if (this.form.invalid) return;
    const birth = new Date(this.form.value.birthDate);
    const today = new Date();
    this.catAgeResult = this.computeAge(birth, today);
    const result = this.ageCalculator.calculate(this.catAgeResult.totalMonths, _age_calculator_service__WEBPACK_IMPORTED_MODULE_1__.AGE_UNIT.MONTH);
    this.humanAge = result.catAge;
  }
  computeAge(birth, today) {
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();
    if (days < 0) {
      months--;
      const daysInPrevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      days += daysInPrevMonth;
    }
    if (months < 0) {
      years--;
      months += 12;
    }
    const totalMonths = years * 12 + months + days / 30;
    return {
      years,
      months,
      days,
      totalMonths,
      label: this.formatAge(years, months, days)
    };
  }
  formatAge(years, months, days) {
    const parts = [];
    if (years > 0) parts.push(`${years} ${this.pluralize(years, 'rok', 'lata', 'lat')}`);
    if (months > 0) parts.push(`${months} ${this.pluralize(months, 'miesiąc', 'miesiące', 'miesięcy')}`);
    if (years === 0 && months === 0) parts.push(`${days} ${this.pluralize(days, 'dzień', 'dni', 'dni')}`);
    return parts.join(' i ') || '0 dni';
  }
  pluralize(n, one, few, many) {
    if (n === 1) return one;
    if (n >= 2 && n <= 4) return few;
    return many;
  }
  static {
    this.ɵfac = function AgeCalculatorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AgeCalculatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_age_calculator_service__WEBPACK_IMPORTED_MODULE_1__.AgeCalculatorService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_seo_service__WEBPACK_IMPORTED_MODULE_3__.SeoService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AgeCalculatorComponent,
      selectors: [["app-age-calculator"]],
      standalone: false,
      decls: 20,
      vars: 6,
      consts: [[1, "calculator"], [1, "calc-hero"], [1, "calc-hero-icon"], [1, "calc-hero-sub"], [1, "age-content"], [1, "age-form", 3, "ngSubmit", "formGroup"], [1, "age-input-row"], [1, "form-field"], ["for", "birthDate"], ["id", "birthDate", "formControlName", "birthDate", "type", "date", "autocomplete", "off"], ["class", "field-error", 4, "ngIf"], ["type", "submit", 1, "btn-primary", 3, "disabled"], ["class", "age-result", 4, "ngIf"], [1, "field-error"], [1, "age-result"], [1, "result-cards"], [1, "age-result-card"], [1, "age-result-label"], [1, "age-result-value", "age-result-value--text"], [1, "age-result-card", "age-result-card--human"], [1, "age-result-number-row"], [1, "age-result-value"], [1, "age-result-unit"]],
      template: function AgeCalculatorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\uD83D\uDC31");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Kalkulator wieku kota");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Ile lat mia\u0142by tw\u00F3j kot, gdyby by\u0142 cz\u0142owiekiem?");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4)(9, "form", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AgeCalculatorComponent_Template_form_ngSubmit_9_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Data urodzin kota");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, AgeCalculatorComponent_span_15_Template, 2, 0, "span", 10)(16, AgeCalculatorComponent_span_16_Template, 2, 0, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Oblicz");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, AgeCalculatorComponent_div_19_Template, 15, 2, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          let tmp_2_0;
          let tmp_3_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("max", ctx.todayStr);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.form.get("birthDate")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx.form.get("birthDate")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.form.get("birthDate")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx.form.get("birthDate")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["future"]));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.form.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.catAgeResult !== null);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName],
      styles: [".calculator[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n\n.calc-hero[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 2rem 2.5rem;\n  border-bottom: 1px solid rgba(255, 157, 47, 0.1);\n  background: radial-gradient(ellipse at 50% 0%, rgba(255, 157, 47, 0.08) 0%, transparent 70%);\n  animation: _ngcontent-%COMP%_heroFadeIn 0.6s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_heroFadeIn {\n  from { opacity: 0; transform: translateY(-10px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\n.calc-hero-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 0.75rem;\n  display: inline-block;\n  animation: _ngcontent-%COMP%_iconFloat 2.8s ease-in-out infinite;\n}\n\n@keyframes _ngcontent-%COMP%_iconFloat {\n  0%, 100% { transform: translateY(0) scale(1); }\n  50% { transform: translateY(-8px) scale(1.08); }\n}\n\n.calculator[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display\", serif;\n  font-size: 2rem;\n  font-weight: 600;\n  margin: 0 auto 0.6rem;\n  max-width: 580px;\n  line-height: 1.3;\n  background: linear-gradient(135deg, #ff9d2f 0%, #ffb700 50%, #d4aa48 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n\n.calc-hero-sub[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.45);\n  font-size: 0.9rem;\n  margin: 0;\n  max-width: 500px;\n  margin-inline: auto;\n}\n\n\n.age-content[_ngcontent-%COMP%] {\n  padding: 2rem 2.5rem 3rem;\n  max-width: 680px;\n  margin: 0 auto;\n}\n\n\n.age-form[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.02);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 4px;\n  padding: 1.5rem 1.75rem;\n  margin-bottom: 1.5rem;\n}\n\n.age-input-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n\n.form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n  flex: 1;\n  min-width: 130px;\n}\n\n.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.45);\n  letter-spacing: 0.2px;\n}\n\n.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.6rem 0.8rem;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 3px;\n  color: var(--white);\n  font-size: 0.9rem;\n  font-family: \"Inter\", sans-serif;\n  transition: border-color 0.2s ease, background 0.2s ease;\n  -webkit-appearance: none;\n}\n\n.form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  appearance: none;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath fill='rgba(255,255,255,0.3)' d='M0 0l5 6 5-6z'/%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: right 0.75rem center;\n  padding-right: 2rem;\n  cursor: pointer;\n}\n\n.form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: #1c1b1a;\n  color: var(--white);\n}\n\n.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: var(--orange);\n  background: rgba(255, 255, 255, 0.06);\n  box-shadow: 0 0 0 3px rgba(255, 157, 47, 0.09);\n  outline: none;\n}\n\n.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(255, 255, 255, 0.18);\n}\n\n\n.field-error[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #ff6b4a;\n  margin-top: 0.2rem;\n}\n\n\n.age-result[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  animation: _ngcontent-%COMP%_slideUp 0.3s ease;\n}\n\n@keyframes _ngcontent-%COMP%_slideUp {\n  from { opacity: 0; transform: translateY(10px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\n.result-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n\n.age-result-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 1.5rem;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 4px;\n}\n\n.age-result-card--human[_ngcontent-%COMP%] {\n  background: rgba(255, 157, 47, 0.07);\n  border-color: rgba(255, 157, 47, 0.2);\n}\n\n.age-result-label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 1.2px;\n  color: rgba(255, 255, 255, 0.35);\n  margin-bottom: 0.6rem;\n}\n\n.age-result-card--human[_ngcontent-%COMP%]   .age-result-label[_ngcontent-%COMP%] {\n  color: rgba(255, 157, 47, 0.65);\n}\n\n.age-result-value[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.85);\n  line-height: 1.2;\n}\n\n.age-result-value--text[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  letter-spacing: 0;\n}\n\n.age-result-card--human[_ngcontent-%COMP%]   .age-result-value[_ngcontent-%COMP%] {\n  color: #ffb044;\n  font-size: 3.5rem;\n  line-height: 1;\n  letter-spacing: -2px;\n}\n\n.age-result-number-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 0.4rem;\n}\n\n.age-result-unit[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: rgba(255, 255, 255, 0.35);\n}\n\n\n@media (max-width: 650px) {\n  .age-content[_ngcontent-%COMP%] {\n    padding: 1.25rem 1rem 2rem;\n  }\n\n  .age-form[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n\n  .age-input-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .form-field[_ngcontent-%COMP%] {\n    min-width: unset;\n  }\n\n  .calculator[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.45rem;\n  }\n\n  .calc-hero[_ngcontent-%COMP%] {\n    padding: 2rem 1rem 1.75rem;\n  }\n\n  .result-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .age-result-card--human[_ngcontent-%COMP%]   .age-result-value[_ngcontent-%COMP%] {\n    font-size: 2.8rem;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY2FsY3VsYXRvci9hZ2UtY2FsY3VsYXRvci9hZ2UtY2FsY3VsYXRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBLHdEQUF3RDtBQUN4RDtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0RBQWdEO0VBQ2hELDRGQUE0RjtFQUM1RixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxPQUFPLFVBQVUsRUFBRSw0QkFBNEIsRUFBRTtFQUNqRCxLQUFLLFVBQVUsRUFBRSx3QkFBd0IsRUFBRTtBQUM3Qzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLFdBQVcsaUNBQWlDLEVBQUU7RUFDOUMsTUFBTSx1Q0FBdUMsRUFBRTtBQUNqRDs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLDBFQUEwRTtFQUMxRSw2QkFBNkI7RUFDN0Isb0NBQW9DO0VBQ3BDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsU0FBUztFQUNULGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUEsd0RBQXdEO0FBQ3hEO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBLHdEQUF3RDtBQUN4RDtFQUNFLHFDQUFxQztFQUNyQywyQ0FBMkM7RUFDM0Msa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osT0FBTztFQUNQLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLHFDQUFxQztFQUNyQywwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLHdEQUF3RDtFQUN4RCx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIscU1BQXFNO0VBQ3JNLDRCQUE0QjtFQUM1Qix5Q0FBeUM7RUFDekMsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLDJCQUEyQjtFQUMzQixxQ0FBcUM7RUFDckMsOENBQThDO0VBQzlDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQSx3REFBd0Q7QUFDeEQ7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQSx3REFBd0Q7QUFDeEQ7RUFDRSxtQkFBbUI7RUFDbkIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsT0FBTyxVQUFVLEVBQUUsMkJBQTJCLEVBQUU7RUFDaEQsS0FBSyxVQUFVLEVBQUUsd0JBQXdCLEVBQUU7QUFDN0M7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLHFDQUFxQztFQUNyQywyQ0FBMkM7RUFDM0Msa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixnQ0FBZ0M7RUFDaEMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsY0FBYztFQUNkLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdDQUFnQztBQUNsQzs7QUFFQSx3REFBd0Q7QUFDeEQ7RUFDRTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbGN1bGF0b3Ige1xuICB3aWR0aDogMTAwJTtcbn1cblxuLyogw6LClMKAw6LClMKAIEhlcm8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4uY2FsYy1oZXJvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAzcmVtIDJyZW0gMi41cmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDE1NywgNDcsIDAuMSk7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IDUwJSAwJSwgcmdiYSgyNTUsIDE1NywgNDcsIDAuMDgpIDAlLCB0cmFuc3BhcmVudCA3MCUpO1xuICBhbmltYXRpb246IGhlcm9GYWRlSW4gMC42cyBlYXNlLW91dDtcbn1cblxuQGtleWZyYW1lcyBoZXJvRmFkZUluIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7IH1cbiAgdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbn1cblxuLmNhbGMtaGVyby1pY29uIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYW5pbWF0aW9uOiBpY29uRmxvYXQgMi44cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBpY29uRmxvYXQge1xuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTsgfVxuICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLThweCkgc2NhbGUoMS4wOCk7IH1cbn1cblxuLmNhbGN1bGF0b3IgaDEge1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMCBhdXRvIDAuNnJlbTtcbiAgbWF4LXdpZHRoOiA1ODBweDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmOWQyZiAwJSwgI2ZmYjcwMCA1MCUsICNkNGFhNDggMTAwJSk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbn1cblxuLmNhbGMtaGVyby1zdWIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIG1hcmdpbjogMDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgbWFyZ2luLWlubGluZTogYXV0bztcbn1cblxuLyogw6LClMKAw6LClMKAIENvbnRlbnQgc2hlbGwgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4uYWdlLWNvbnRlbnQge1xuICBwYWRkaW5nOiAycmVtIDIuNXJlbSAzcmVtO1xuICBtYXgtd2lkdGg6IDY4MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLyogw6LClMKAw6LClMKAIEZvcm0gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4uYWdlLWZvcm0ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDIpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDcpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDEuNXJlbSAxLjc1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi5hZ2UtaW5wdXQtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBnYXA6IDFyZW07XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmZvcm0tZmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuMzVyZW07XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMTMwcHg7XG59XG5cbi5mb3JtLWZpZWxkIGxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xufVxuXG4uZm9ybS1maWVsZCBpbnB1dCxcbi5mb3JtLWZpZWxkIHNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjZyZW0gMC44cmVtO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzIGVhc2UsIGJhY2tncm91bmQgMC4ycyBlYXNlO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi5mb3JtLWZpZWxkIHNlbGVjdCB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTAnIGhlaWdodD0nNicgdmlld0JveD0nMCAwIDEwIDYnJTNFJTNDcGF0aCBmaWxsPSdyZ2JhKDI1NSwyNTUsMjU1LDAuMyknIGQ9J00wIDBsNSA2IDUtNnonLyUzRSUzQy9zdmclM0VcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDAuNzVyZW0gY2VudGVyO1xuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mb3JtLWZpZWxkIHNlbGVjdCBvcHRpb24ge1xuICBiYWNrZ3JvdW5kOiAjMWMxYjFhO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xufVxuXG4uZm9ybS1maWVsZCBpbnB1dDpmb2N1cyxcbi5mb3JtLWZpZWxkIHNlbGVjdDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tb3JhbmdlKTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2KTtcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMjU1LCAxNTcsIDQ3LCAwLjA5KTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmZvcm0tZmllbGQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xOCk7XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBWYWxpZGF0aW9uIGVycm9yIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLmZpZWxkLWVycm9yIHtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBjb2xvcjogI2ZmNmI0YTtcbiAgbWFyZ2luLXRvcDogMC4ycmVtO1xufVxuXG4vKiDDosKUwoDDosKUwoAgUmVzdWx0IMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLmFnZS1yZXN1bHQge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBhbmltYXRpb246IHNsaWRlVXAgMC4zcyBlYXNlO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlVXAge1xuICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpOyB9XG4gIHRvIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG59XG5cbi5yZXN1bHQtY2FyZHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogMXJlbTtcbn1cblxuLmFnZS1yZXN1bHQtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uYWdlLXJlc3VsdC1jYXJkLS1odW1hbiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxNTcsIDQ3LCAwLjA3KTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMTU3LCA0NywgMC4yKTtcbn1cblxuLmFnZS1yZXN1bHQtbGFiZWwge1xuICBmb250LXNpemU6IDAuNjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAxLjJweDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XG4gIG1hcmdpbi1ib3R0b206IDAuNnJlbTtcbn1cblxuLmFnZS1yZXN1bHQtY2FyZC0taHVtYW4gLmFnZS1yZXN1bHQtbGFiZWwge1xuICBjb2xvcjogcmdiYSgyNTUsIDE1NywgNDcsIDAuNjUpO1xufVxuXG4uYWdlLXJlc3VsdC12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cblxuLmFnZS1yZXN1bHQtdmFsdWUtLXRleHQge1xuICBmb250LXNpemU6IDEuMTVyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuXG4uYWdlLXJlc3VsdC1jYXJkLS1odW1hbiAuYWdlLXJlc3VsdC12YWx1ZSB7XG4gIGNvbG9yOiAjZmZiMDQ0O1xuICBmb250LXNpemU6IDMuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGxldHRlci1zcGFjaW5nOiAtMnB4O1xufVxuXG4uYWdlLXJlc3VsdC1udW1iZXItcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBnYXA6IDAuNHJlbTtcbn1cblxuLmFnZS1yZXN1bHQtdW5pdCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBSZXNwb25zaXZlIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XG4gIC5hZ2UtY29udGVudCB7XG4gICAgcGFkZGluZzogMS4yNXJlbSAxcmVtIDJyZW07XG4gIH1cblxuICAuYWdlLWZvcm0ge1xuICAgIHBhZGRpbmc6IDEuMjVyZW07XG4gIH1cblxuICAuYWdlLWlucHV0LXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5mb3JtLWZpZWxkIHtcbiAgICBtaW4td2lkdGg6IHVuc2V0O1xuICB9XG5cbiAgLmNhbGN1bGF0b3IgaDEge1xuICAgIGZvbnQtc2l6ZTogMS40NXJlbTtcbiAgfVxuXG4gIC5jYWxjLWhlcm8ge1xuICAgIHBhZGRpbmc6IDJyZW0gMXJlbSAxLjc1cmVtO1xuICB9XG5cbiAgLnJlc3VsdC1jYXJkcyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAuYWdlLXJlc3VsdC1jYXJkLS1odW1hbiAuYWdlLXJlc3VsdC12YWx1ZSB7XG4gICAgZm9udC1zaXplOiAyLjhyZW07XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ },

/***/ 7541
/*!************************************************************************************!*\
  !*** ./src/app/features/calculator/current-food-requirement-calculator.service.ts ***!
  \************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentFoodRequirementCalculationResult: () => (/* binding */ CurrentFoodRequirementCalculationResult),
/* harmony export */   CurrentFoodRequirementCalculatorService: () => (/* binding */ CurrentFoodRequirementCalculatorService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4363);

class CurrentFoodRequirementCalculationResult {
  constructor(wetCalority, amountOfWetFood, dryCalority, amountOfDryFood) {
    this._unit = 'g';
    this._wetCalority = wetCalority;
    this._amountOfWetFood = amountOfWetFood;
    this._dryCalority = dryCalority;
    this._amountOfDryFood = amountOfDryFood;
  }
  get wetCalority() {
    return this._wetCalority;
  }
  get amountOfWetFood() {
    return this._amountOfWetFood;
  }
  get dryCalority() {
    return this._dryCalority;
  }
  get amountOfDryFood() {
    return this._amountOfDryFood;
  }
  get unit() {
    return this._unit;
  }
}
class CurrentFoodRequirementCalculatorService {
  calculate(params, caloricRequirement) {
    const dryFoodAmount = this.calculateFor(params.dryKcl, caloricRequirement);
    const wetFoodAmount = this.calculateFor(params.wetKcl, caloricRequirement);
    return new CurrentFoodRequirementCalculationResult(params.wetKcl, wetFoodAmount, params.dryKcl, dryFoodAmount);
  }
  calculateFor(foodCaloric, caloricRequirement) {
    return caloricRequirement * 100 / foodCaloric;
  }
  static {
    this.ɵfac = function CurrentFoodRequirementCalculatorService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CurrentFoodRequirementCalculatorService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CurrentFoodRequirementCalculatorService,
      factory: CurrentFoodRequirementCalculatorService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 7377
/*!**********************************************************!*\
  !*** ./src/app/features/calculator/custom.validators.ts ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomValidators: () => (/* binding */ CustomValidators)
/* harmony export */ });
class CustomValidators {
  static reproductiveCycleFazeValidator() {
    return form => {
      if (CustomValidators.isReproductiveCyclePossible(form)) {
        const faze = form.get('reproductiveFaze')?.value;
        if (faze === null || faze === undefined) {
          return {
            reproductiveFaze: true
          };
        }
      }
      return null;
    };
  }
  static postPregnantStrategyValidator() {
    return form => {
      const isInReproductiveCycle = form.get('reproductiveFaze')?.value !== null && form.get('reproductiveFaze')?.value !== undefined && form.get('reproductiveFaze')?.value !== 0 /* ReproductiveCycleFaze.NO */;
      if (CustomValidators.isReproductiveCyclePossible(form) && isInReproductiveCycle) {
        const strategy = form.get('postPregnantStrategy')?.value;
        if (strategy === null || strategy === undefined) {
          return {
            postPregnantStrategy: true
          };
        }
      }
      return null;
    };
  }
  static isReproductiveCyclePossible(form) {
    const isFemale = form.get('sex')?.value === 1 /* Sex.FEMALE */;
    const isNotSterilized = form.get('isSterilized')?.value === 'false';
    return isFemale && isNotSterilized;
  }
}

/***/ },

/***/ 6763
/*!******************************************************************!*\
  !*** ./src/app/features/calculator/food-calculator.component.ts ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FoodCalculatorComponent: () => (/* binding */ FoodCalculatorComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _food_requirement_calculator_cat_calculation_parameters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food-requirement-calculator/cat-calculation-parameters */ 9640);
/* harmony import */ var _food_requirement_report__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./food-requirement-report */ 1398);
/* harmony import */ var _custom_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom.validators */ 7377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _food_requirement_calculator_calority_calculator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./food-requirement-calculator/calority-calculator.service */ 2232);
/* harmony import */ var _age_calculator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./age-calculator.service */ 8550);
/* harmony import */ var _current_food_requirement_calculator_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./current-food-requirement-calculator.service */ 7541);
/* harmony import */ var _water_requirement_calculator_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./water-requirement-calculator.service */ 7020);
/* harmony import */ var _pdf_writer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pdf-writer.service */ 2354);
/* harmony import */ var _core_seo_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/seo.service */ 2296);
/* harmony import */ var _validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./validation-error/validation-error.component */ 85);













function FoodCalculatorComponent_Conditional_79_Conditional_14_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9)(1, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Liczba koci\u0105t");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function FoodCalculatorComponent_Conditional_79_Conditional_14_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9)(1, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Tydzie\u0144 karmienia");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function FoodCalculatorComponent_Conditional_79_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9)(1, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Spos\u00F3b oblicze\u0144");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "select", 48)(4, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Tydzie\u0144 karmienia");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Liczba koci\u0105t");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](8, FoodCalculatorComponent_Conditional_79_Conditional_14_Conditional_8_Template, 4, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](9, FoodCalculatorComponent_Conditional_79_Conditional_14_Conditional_9_Template, 4, 0, "div", 9);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx_r0.isCalculateByNumberOfKittens() ? 8 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx_r0.isCalculateByFeedingWeek() ? 9 : -1);
  }
}
function FoodCalculatorComponent_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31)(1, "div", 9)(2, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Faza cyklu rozrodczego");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "select", 46)(5, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Brak / Nie dotyczy");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Ci\u0105\u017Ca");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Ruja");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Karmienie m\u0142odych");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "app-validation-error", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontrolCreate"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](14, FoodCalculatorComponent_Conditional_79_Conditional_14_Template, 10, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formField", ctx_r0.calculationForm.controls["reproductiveFaze"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontrol"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx_r0.shouldShowFeedingPart() ? 14 : -1);
  }
}
function FoodCalculatorComponent_Conditional_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 36)(1, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Post\u0119p w rekonwalescencji");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "input", 54)(4, "app-validation-error", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontrolCreate"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formField", ctx_r0.calculationForm.controls["convalescenceProgress"])("validatorName", "convalescenceProgress");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontrol"]();
  }
}
function FoodCalculatorComponent_Conditional_116_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 44)(1, "div", 56)(2, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FoodCalculatorComponent_Conditional_116_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.reset());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 58)(5, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Wyniki dla: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Zapotrzebowanie kaloryczne");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Dzienne normy \u017Cywieniowe obliczone na podstawie podanych danych");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 61)(14, "div", 62)(15, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "RER \u2014 spoczynek");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " kcal");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Podstawowe zapotrzebowanie energetyczne w spoczynku");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 67)(24, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "DER \u2014 ca\u0142kowite");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " kcal");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Dzienne zapotrzebowanie z uwzgl\u0119dnieniem aktywno\u015Bci");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 62)(33, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Mokra karma");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Aby pokry\u0107 ca\u0142kowite zapotrzebowanie DER");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 62)(42, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Sucha karma");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "Aby pokry\u0107 ca\u0142kowite zapotrzebowanie DER");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 68)(51, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Woda");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "\u0141\u0105czne dzienne nawodnienie \u2014 woda + p\u0142yny z karmy");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 69)(60, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FoodCalculatorComponent_Conditional_116_Template_button_click_60_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.generatePdf());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, "Zapisz PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FoodCalculatorComponent_Conditional_116_Template_button_click_62_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r0.reset());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "Przelicz ponownie");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.report == null ? null : ctx_r0.report.catName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0 == null ? null : ctx_r0.report == null ? null : ctx_r0.report.rer);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0 == null ? null : ctx_r0.report == null ? null : ctx_r0.report.der);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0 == null ? null : ctx_r0.report == null ? null : ctx_r0.report.weightOfCurrentWetFood);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0 == null ? null : ctx_r0.report == null ? null : ctx_r0.report.foodUnit);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0 == null ? null : ctx_r0.report == null ? null : ctx_r0.report.weightOfCurrentDryFood);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0 == null ? null : ctx_r0.report == null ? null : ctx_r0.report.foodUnit);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0 == null ? null : ctx_r0.report == null ? null : ctx_r0.report.waterRequirement == null ? null : ctx_r0.report.waterRequirement.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.report == null ? null : ctx_r0.report.waterRequirement == null ? null : ctx_r0.report.waterRequirement.unit);
  }
}
class FoodCalculatorComponent {
  constructor(calorityCalculator, catAgeCalculator, currentFoodRequirementCalculator, waterRequirementCalculator, pdfWriter, seo) {
    this.calorityCalculator = calorityCalculator;
    this.catAgeCalculator = catAgeCalculator;
    this.currentFoodRequirementCalculator = currentFoodRequirementCalculator;
    this.waterRequirementCalculator = waterRequirementCalculator;
    this.pdfWriter = pdfWriter;
    this.seo = seo;
    this.report = null;
    this.calculationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.UntypedFormGroup({
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.UntypedFormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.maxLength(25)]),
      age: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.UntypedFormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.min(0.1), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.max(40)]),
      weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.UntypedFormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.min(0.1), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.max(40)]),
      sex: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.UntypedFormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]),
      bodyStructure: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.UntypedFormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]),
      isSterilized: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.UntypedFormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]),
      numberOfKittens: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.UntypedFormControl(null, []),
      feedingWeek: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.UntypedFormControl(null, []),
      reproductiveFaze: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.UntypedFormControl(null, [_custom_validators__WEBPACK_IMPORTED_MODULE_3__.CustomValidators.reproductiveCycleFazeValidator()]),
      postPregnantStrategy: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.UntypedFormControl(null, [_custom_validators__WEBPACK_IMPORTED_MODULE_3__.CustomValidators.postPregnantStrategyValidator()]),
      isInConvalescenceProcess: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.UntypedFormControl(false, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required]),
      convalescenceProgress: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.UntypedFormControl(null, []),
      dryKcl: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.UntypedFormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.max(9999)]),
      wetKcl: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.UntypedFormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.max(9999)])
    });
    this.reset = () => {
      this.report = null;
      this.calculationForm.reset();
    };
    this.handleKeyboardEvent = event => {
      switch (true) {
        case event.key === 'Escape':
          {
            this.reset();
            break;
          }
        case this.report == null && event.key === 'Enter':
          {
            this.onSubmit();
            break;
          }
        case this.report != null && event.key === 'Enter':
          {
            this.generatePdf();
            break;
          }
      }
    };
    this.generatePdf = () => {
      if (this.report !== null) {
        this.pdfWriter.write(this.report);
      }
    };
    this.calculate = () => {
      const params = this.createCalculationParams();
      const caloricRequirement = this.calorityCalculator.calculate(params);
      const currentFoodRequirement = this.currentFoodRequirementCalculator.calculate(params, caloricRequirement.der);
      const waterRequirement = this.waterRequirementCalculator.calculate(params.cat);
      this.report = new _food_requirement_report__WEBPACK_IMPORTED_MODULE_2__.FoodRequirementReport(caloricRequirement, params, currentFoodRequirement, waterRequirement);
    };
  }
  ngOnInit() {
    this.reset();
    this.seo.update({
      title: 'Kalkulator Karmienia Kota – Kalorie i Porcje',
      description: 'Oblicz dzienne zapotrzebowanie kaloryczne i porcje jedzenia dla swojego kota. Szybki kalkulator uwzględniający wagę, wiek i tryb życia.'
    });
  }
  onSubmit() {
    if (this.calculationForm.status === 'INVALID') {
      this.calculationForm.markAllAsTouched();
      return;
    }
    this.calculate();
  }
  isCalculateByNumberOfKittens() {
    return this.calculationForm.controls['postPregnantStrategy']?.value === 1 /* PostPregnantFeedingStrategy.NUMBER_OF_KITTENS */;
  }
  isCalculateByFeedingWeek() {
    return this.calculationForm.controls['postPregnantStrategy']?.value === 0 /* PostPregnantFeedingStrategy.FEEDING_WEEK */;
  }
  shouldShowReproductiveCyclePart() {
    const isFemale = this.calculationForm.controls['sex']?.value === 1 /* Sex.FEMALE */;
    const isNotSterilized = this.calculationForm.controls['isSterilized']?.value === 'false';
    return isNotSterilized && isFemale;
  }
  shouldShowConvalescencePart() {
    return this.calculationForm.controls['isInConvalescenceProcess']?.value === 'true';
  }
  shouldShowFeedingPart() {
    return this.calculationForm.controls['reproductiveFaze']?.value !== null && this.calculationForm.controls['reproductiveFaze']?.value !== undefined && this.calculationForm.controls['reproductiveFaze']?.value !== 0 /* ReproductiveCycleFaze.NO */;
  }
  reportIsPresent() {
    return this.report !== null;
  }
  createCalculationParams() {
    const catAge = this.catAgeCalculator.calculate(Number(this.calculationForm.controls['age']?.value));
    return new _food_requirement_calculator_cat_calculation_parameters__WEBPACK_IMPORTED_MODULE_1__.CatCalculationParameters(new _food_requirement_calculator_cat_calculation_parameters__WEBPACK_IMPORTED_MODULE_1__.Cat(this.calculationForm.controls['name']?.value, this.convalescenceInfo(), catAge, this.calculationForm.controls['mature']?.value, this.calculationForm.controls['sex']?.value, this.calculationForm.controls['weight']?.value, this.calculationForm.controls['bodyStructure']?.value, this.calculationForm.controls['isSterilized']?.value, this.reproductionCycleInfo()), this.calculationForm.controls['dryKcl']?.value, this.calculationForm.controls['wetKcl']?.value, this.calculationForm.controls['postPregnantStrategy']?.value);
  }
  convalescenceInfo() {
    const progress = this.calculationForm.controls['convalescenceProgress']?.value;
    if (progress === null || progress === undefined) {
      return null;
    }
    return new _food_requirement_calculator_cat_calculation_parameters__WEBPACK_IMPORTED_MODULE_1__.ConvalescenceInfo(progress);
  }
  reproductionCycleInfo() {
    const reproductiveFaze = this.calculationForm.controls['reproductiveFaze']?.value;
    if (reproductiveFaze === null || reproductiveFaze === undefined) {
      return null;
    }
    return new _food_requirement_calculator_cat_calculation_parameters__WEBPACK_IMPORTED_MODULE_1__.ReproductionCycleInfo(reproductiveFaze, this.calculationForm.controls['numberOfKittens']?.value, this.calculationForm.controls['feedingWeek']?.value);
  }
  static {
    this.ɵfac = function FoodCalculatorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FoodCalculatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_food_requirement_calculator_calority_calculator_service__WEBPACK_IMPORTED_MODULE_6__.CalorityCalculatorService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_age_calculator_service__WEBPACK_IMPORTED_MODULE_7__.AgeCalculatorService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_current_food_requirement_calculator_service__WEBPACK_IMPORTED_MODULE_8__.CurrentFoodRequirementCalculatorService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_water_requirement_calculator_service__WEBPACK_IMPORTED_MODULE_9__.WaterRequirementCalculatorService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_pdf_writer_service__WEBPACK_IMPORTED_MODULE_10__.PdfWriterService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_seo_service__WEBPACK_IMPORTED_MODULE_11__.SeoService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: FoodCalculatorComponent,
      selectors: [["app-food-caloric-calculator"]],
      hostBindings: function FoodCalculatorComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown", function FoodCalculatorComponent_keydown_HostBindingHandler($event) {
            return ctx.handleKeyboardEvent($event);
          }, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveDocument"]);
        }
      },
      standalone: false,
      decls: 117,
      vars: 34,
      consts: [[1, "calculator"], [1, "calc-hero"], [1, "calc-hero-icon"], [1, "calc-hero-sub"], [3, "ngSubmit", "formGroup"], [1, "form-section"], [1, "form-section-header"], [1, "section-num"], [1, "form-grid"], [1, "form-field"], ["for", "name"], ["autocomplete", "off", "formControlName", "name", "type", "text", "id", "name", "minlength", "2", "maxlength", "25", "placeholder", "np. Gustaw"], [3, "formField"], [3, "formField", "validatorName", "msg"], ["for", "age"], [1, "field-unit"], ["autocomplete", "off", "formControlName", "age", "type", "number", "id", "age", "placeholder", "np. 3"], ["for", "weight"], ["autocomplete", "off", "formControlName", "weight", "type", "number", "id", "weight", "placeholder", "np. 4.5"], ["for", "sex"], ["formControlName", "sex", "id", "sex"], [3, "ngValue"], ["for", "bodyStructure"], ["id", "bodyStructure", "formControlName", "bodyStructure"], [1, "form-toggle-row"], [1, "toggle-question"], [1, "toggle-group"], ["id", "isSterilized-on", "formControlName", "isSterilized", "value", "true", "type", "radio", "checked", "", 1, "toggle", "toggle-left"], ["for", "isSterilized-on", 1, "toggle-btn"], ["id", "isSterilized-off", "formControlName", "isSterilized", "value", "false", "type", "radio", 1, "toggle", "toggle-right"], ["for", "isSterilized-off", 1, "toggle-btn"], [1, "form-grid", "conditional-fields"], ["id", "isInConvalescenceProcess-on", "formControlName", "isInConvalescenceProcess", "value", "true", "type", "radio", "checked", "", 1, "toggle", "toggle-left"], ["for", "isInConvalescenceProcess-on", 1, "toggle-btn"], ["id", "isInConvalescenceProcess-off", "formControlName", "isInConvalescenceProcess", "value", "false", "type", "radio", 1, "toggle", "toggle-right"], ["for", "isInConvalescenceProcess-off", 1, "toggle-btn"], [1, "form-field", "range-field"], ["for", "dryKcl"], ["autocomplete", "off", "type", "number", "id", "dryKcl", "min", "0", "max", "9999", "formControlName", "dryKcl", "placeholder", "np. 350"], ["for", "wetKcl"], ["autocomplete", "off", "type", "number", "id", "wetKcl", "min", "0", "max", "9999", "formControlName", "wetKcl", "placeholder", "np. 80"], [1, "buttons-container"], ["type", "submit", 1, "green-button"], ["type", "reset", 1, "red-button"], [1, "overlay"], ["for", "reproductiveFaze"], ["id", "reproductiveFaze", "formControlName", "reproductiveFaze"], ["for", "postPregnantStrategy"], ["id", "postPregnantStrategy", "formControlName", "postPregnantStrategy"], ["for", "numberOfKittens"], ["autocomplete", "off", "type", "number", "id", "numberOfKittens", "formControlName", "numberOfKittens"], ["for", "feedingWeek"], ["autocomplete", "off", "type", "number", "id", "feedingWeek", "formControlName", "feedingWeek"], ["for", "convalescenceProgress"], ["autocomplete", "off", "type", "range", "id", "convalescenceProgress", "formControlName", "convalescenceProgress", "min", "1", "max", "99", 1, "range_progress"], [3, "formField", "validatorName"], [1, "result-view"], ["type", "button", "aria-label", "Zamknij", 1, "close", 3, "click"], [1, "result-header"], [1, "result-cat-name"], [1, "result-subtitle"], [1, "result-grid"], [1, "result-card"], [1, "result-card-label"], [1, "result-card-value"], [1, "result-card-unit"], [1, "result-card-desc"], [1, "result-card", "highlighted"], [1, "result-card", "water-card"], [1, "result-actions"], [1, "white-button", 3, "click"]],
      template: function FoodCalculatorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\uD83D\uDC3E");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Kalkulator kalorii dla kota");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Podaj dane swojego pupila \u2014 obliczymy ile kalorii, karmy i wody potrzebuje ka\u017Cdego dnia");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "form", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function FoodCalculatorComponent_Template_form_ngSubmit_8_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "01");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Informacje o kocie");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 8)(16, "div", 9)(17, "label", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Imi\u0119");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "input", 11)(20, "app-validation-error", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontrolCreate"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "app-validation-error", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontrolCreate"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "app-validation-error", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontrolCreate"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 9)(24, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Wiek ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "lata");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "input", 16)(29, "app-validation-error", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontrolCreate"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "app-validation-error", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontrolCreate"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "app-validation-error", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontrolCreate"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 9)(33, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Waga ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "kg");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "input", 18)(38, "app-validation-error", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontrolCreate"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "app-validation-error", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontrolCreate"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "app-validation-error", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontrolCreate"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 9)(42, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "P\u0142e\u0107");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "select", 20)(45, "option", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Kot");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "option", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Kotka");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "app-validation-error", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontrolCreate"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 9)(51, "label", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Budowa cia\u0142a");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "select", 23)(54, "option", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "Chudy");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "option", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Normalny");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "option", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Oty\u0142y");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "option", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, "Powa\u017Cnie oty\u0142y");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](62, "app-validation-error", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontrolCreate"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "div", 5)(64, "div", 6)(65, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "02");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "Stan zdrowia");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 24)(70, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, "Sterylizacja / kastracja");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](73, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "label", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "Tak");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](76, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "label", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, "Nie");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](79, FoodCalculatorComponent_Conditional_79_Template, 15, 6, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "div", 24)(81, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82, "Rekonwalescencja");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](84, "input", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "label", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, "Tak");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](87, "input", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "label", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89, "Nie");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](90, "app-validation-error", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontrolCreate"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](91, FoodCalculatorComponent_Conditional_91_Template, 5, 2, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "div", 5)(93, "div", 6)(94, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95, "03");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97, "Parametry karmy");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "div", 8)(99, "div", 9)(100, "label", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101, "Sucha karma ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](103, "kcal / 100g");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](104, "input", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "div", 9)(106, "label", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107, "Mokra karma ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](109, "kcal / 100g");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](110, "input", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "div", 41)(112, "button", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](113, "Oblicz zapotrzebowanie");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "button", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](115, "Wyczy\u015B\u0107 formularz");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditionalCreate"](116, FoodCalculatorComponent_Conditional_116_Template, 64, 9, "div", 44);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.calculationForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formField", ctx.calculationForm.controls["name"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontrol"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formField", ctx.calculationForm.controls["name"])("validatorName", "minlength")("msg", "Minimalna d\u0142ugo\u015B\u0107 imienia to 2 znaki");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontrol"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formField", ctx.calculationForm.controls["name"])("validatorName", "maxlength")("msg", "Maksymalna d\u0142ugo\u015B\u0107 imienia to 25 znak\u00F3w");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontrol"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formField", ctx.calculationForm.controls["age"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontrol"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formField", ctx.calculationForm.controls["age"])("validatorName", "min")("msg", "Minimalny wiek to 0.1 roku");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontrol"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formField", ctx.calculationForm.controls["age"])("validatorName", "max")("msg", "Maksymalny wiek to 40 lat");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontrol"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formField", ctx.calculationForm.controls["weight"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontrol"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formField", ctx.calculationForm.controls["weight"])("validatorName", "min")("msg", "Minimalna waga to 0.1 kg");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontrol"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formField", ctx.calculationForm.controls["weight"])("validatorName", "max")("msg", "Maksymalna waga to 40 kg");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontrol"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formField", ctx.calculationForm.controls["sex"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontrol"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formField", ctx.calculationForm.controls["bodyStructure"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontrol"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.shouldShowReproductiveCyclePart() ? 79 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formField", ctx.calculationForm.controls["isInConvalescenceProcess"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontrol"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.shouldShowConvalescencePart() ? 91 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.reportIsPresent() ? 116 : -1);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.RangeValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, _validation_error_validation_error_component__WEBPACK_IMPORTED_MODULE_12__.ValidationErrorComponent],
      styles: [".calculator[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.calculator[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:focus {\n  outline: 2px solid var(--orange);\n  outline-offset: 2px;\n  border-radius: 2px;\n}\n\n\n.calc-hero[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 2rem 2.5rem;\n  position: relative;\n  overflow: hidden;\n  border-bottom: 1px solid rgba(255, 157, 47, 0.1);\n  background: radial-gradient(ellipse at 50% 0%, rgba(255, 157, 47, 0.08) 0%, transparent 70%);\n  animation: _ngcontent-%COMP%_heroFadeIn 0.6s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_heroFadeIn {\n  from { opacity: 0; transform: translateY(-10px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\n.calc-hero-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 0.75rem;\n  display: inline-block;\n  animation: _ngcontent-%COMP%_iconFloatGlow 2.8s ease-in-out infinite;\n}\n\n@keyframes _ngcontent-%COMP%_iconFloatGlow {\n  0%, 100% {\n    transform: translateY(0) scale(1);\n    filter: drop-shadow(0 0 0px rgba(255, 157, 47, 0));\n  }\n  50% {\n    transform: translateY(-8px) scale(1.08);\n    filter: drop-shadow(0 0 14px rgba(255, 157, 47, 0.7));\n  }\n}\n\n.calculator[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display\", serif;\n  font-size: 2rem;\n  font-weight: 600;\n  margin: 0 auto 0.6rem;\n  max-width: 580px;\n  line-height: 1.3;\n  background: linear-gradient(135deg, #ff9d2f 0%, #ffb700 50%, #d4aa48 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  background-size: 200% auto;\n  animation: _ngcontent-%COMP%_shimmer 3s ease-in-out infinite;\n}\n\n@keyframes _ngcontent-%COMP%_shimmer {\n  0%, 100% { background-position: 0% center; }\n  50% { background-position: 100% center; }\n}\n\n.calc-hero-sub[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.45);\n  font-size: 0.9rem;\n  margin: 0;\n  letter-spacing: 0.2px;\n  max-width: 500px;\n  margin-inline: auto;\n}\n\n\n.calculator[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  padding: 2rem 2.5rem 3rem;\n  max-width: 860px;\n  margin: 0 auto;\n}\n\n\n.form-section[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.02);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 4px;\n  padding: 1.5rem 1.75rem;\n  margin-bottom: 1rem;\n}\n\n.form-section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1.5rem;\n  padding-bottom: 0.875rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n}\n\n.form-section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display\", serif;\n  font-size: 1rem;\n  font-weight: 600;\n  color: rgba(255, 255, 255, 0.8);\n  margin: 0;\n  border: none;\n  padding: 0;\n  letter-spacing: 0.3px;\n}\n\n.section-num[_ngcontent-%COMP%] {\n  font-family: \"Inter\", sans-serif;\n  font-size: 0.65rem;\n  font-weight: 700;\n  color: var(--orange);\n  letter-spacing: 1.5px;\n  opacity: 0.65;\n  padding-top: 1px;\n}\n\n\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));\n  gap: 1.1rem;\n}\n\n\n.form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n\n.form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 500;\n  color: rgba(255, 255, 255, 0.45);\n  letter-spacing: 0.2px;\n  text-transform: none;\n}\n\n.field-unit[_ngcontent-%COMP%] {\n  color: rgba(255, 157, 47, 0.55);\n  font-size: 0.7rem;\n  font-weight: 400;\n}\n\n.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.6rem 0.8rem;\n  background: rgba(255, 255, 255, 0.04);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 3px;\n  color: var(--white);\n  font-size: 0.9rem;\n  font-family: \"Inter\", sans-serif;\n  transition: border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;\n  -webkit-appearance: none;\n}\n\n.form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  appearance: none;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath fill='rgba(255,255,255,0.3)' d='M0 0l5 6 5-6z'/%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: right 0.75rem center;\n  padding-right: 2rem;\n  cursor: pointer;\n}\n\n.form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: #1c1b1a;\n  color: var(--white);\n}\n\n.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover, \n.form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover {\n  border-color: rgba(255, 255, 255, 0.18);\n  background: rgba(255, 255, 255, 0.055);\n}\n\n.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: var(--orange);\n  background: rgba(255, 255, 255, 0.06);\n  box-shadow: 0 0 0 3px rgba(255, 157, 47, 0.09);\n  outline: none;\n}\n\n.form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(255, 255, 255, 0.18);\n}\n\n\n.form-toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.9rem 0;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.04);\n}\n\n.form-toggle-row[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n\n.toggle-question[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: rgba(255, 255, 255, 0.65);\n  font-weight: 400;\n}\n\n.toggle-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-shrink: 0;\n}\n\n.toggle-group[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.toggle-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.42rem 1.1rem;\n  font-size: 0.78rem;\n  font-weight: 500;\n  letter-spacing: 0.4px;\n  text-transform: uppercase;\n  cursor: pointer;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  background: rgba(255, 255, 255, 0.02);\n  color: rgba(255, 255, 255, 0.4);\n  transition: all 0.2s ease;\n  min-width: 56px;\n  text-align: center;\n}\n\n.toggle-btn[_ngcontent-%COMP%]:first-of-type {\n  border-right: none;\n  border-radius: 3px 0 0 3px;\n}\n\n.toggle-btn[_ngcontent-%COMP%]:last-of-type {\n  border-radius: 0 3px 3px 0;\n}\n\n.toggle-group[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + .toggle-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 157, 47, 0.12);\n  border-color: rgba(255, 157, 47, 0.5);\n  color: #ffb044;\n}\n\n\n.conditional-fields[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding-top: 1.1rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.04);\n}\n\n\n.range-field[_ngcontent-%COMP%] {\n  padding: 0.9rem 0 0.4rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.04);\n  margin-top: 0.5rem;\n}\n\n.range_progress[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #cb3701 0%, #ff9d2f 50%, #ffb700 100%);\n  border: none;\n  border-radius: 50vmin;\n  height: 5px;\n  width: 100%;\n  max-width: 320px;\n  outline: none;\n  transition: all 0.3s ease;\n  -webkit-appearance: none;\n  cursor: pointer;\n  margin-top: 0.5rem;\n}\n\n.range_progress[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 8px rgba(255, 157, 47, 0.35);\n}\n\n.range_progress[_ngcontent-%COMP%]::-webkit-slider-runnable-track {\n  width: 100%;\n  height: 5px;\n  cursor: pointer;\n  border-radius: 50vmin;\n  background: linear-gradient(to right, #cb3701 0%, #ff9d2f 50%, #ffb700 100%);\n}\n\n.range_progress[_ngcontent-%COMP%]::-webkit-slider-thumb {\n  border: 2px solid var(--orange);\n  height: 18px;\n  width: 18px;\n  border-radius: 50%;\n  background: #1c1b1a;\n  cursor: pointer;\n  -webkit-appearance: none;\n  margin-top: -7px;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);\n}\n\n.range_progress[_ngcontent-%COMP%]::-webkit-slider-thumb:hover {\n  transform: scale(1.2);\n  box-shadow: 0 3px 10px rgba(255, 157, 47, 0.5);\n}\n\n.range_progress[_ngcontent-%COMP%]::-moz-range-thumb {\n  border: 2px solid var(--orange);\n  height: 18px;\n  width: 18px;\n  border-radius: 50%;\n  background: #1c1b1a;\n  cursor: pointer;\n  -moz-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);\n}\n\n\n.calculator[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%] {\n  margin-top: 1.75rem;\n}\n\n\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.82);\n  -webkit-backdrop-filter: blur(6px);\n          backdrop-filter: blur(6px);\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: _ngcontent-%COMP%_fadeIn 0.25s ease;\n  padding: 1rem;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n\n.result-view[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 720px;\n  padding: 2.25rem 2.5rem;\n  background: linear-gradient(180deg, #1e1d1b 0%, #121212 100%);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 4px;\n  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.7);\n  position: relative;\n  animation: _ngcontent-%COMP%_slideUp 0.3s ease;\n  max-height: 90vh;\n  overflow-y: auto;\n}\n\n@keyframes _ngcontent-%COMP%_slideUp {\n  from { transform: translateY(24px); opacity: 0; }\n  to { transform: translateY(0); opacity: 1; }\n}\n\n.close[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1rem;\n  top: 1rem;\n  width: 32px;\n  height: 32px;\n  padding: 0;\n  min-width: auto;\n  min-height: auto;\n  background: transparent;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 3px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgba(255, 255, 255, 0.4);\n  font-size: 0.85rem;\n  transition: all 0.2s ease;\n}\n\n.close[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.07);\n  border-color: rgba(255, 255, 255, 0.2);\n  color: rgba(255, 255, 255, 0.8);\n  transform: none;\n  box-shadow: none;\n}\n\n\n.result-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.75rem;\n  padding-bottom: 1.25rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n\n.result-cat-name[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: rgba(255, 255, 255, 0.35);\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  margin: 0 0 0.5rem;\n}\n\n.result-cat-name[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--orange);\n  font-weight: 600;\n}\n\n.result-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display\", serif;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: var(--white);\n  margin: 0 0 0.35rem;\n  -webkit-text-fill-color: var(--white);\n}\n\n.result-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: rgba(255, 255, 255, 0.35);\n  margin: 0;\n}\n\n\n.result-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n  margin-bottom: 1.5rem;\n}\n\n.result-card[_ngcontent-%COMP%] {\n  padding: 1.1rem 1.25rem;\n  background: rgba(255, 255, 255, 0.025);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 3px;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n\n.result-card.highlighted[_ngcontent-%COMP%] {\n  background: rgba(255, 157, 47, 0.07);\n  border-color: rgba(255, 157, 47, 0.2);\n}\n\n.result-card.water-card[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n  flex-direction: row;\n  align-items: center;\n  gap: 1.5rem;\n}\n\n.result-card-label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.9px;\n  color: rgba(255, 255, 255, 0.35);\n}\n\n.result-card.highlighted[_ngcontent-%COMP%]   .result-card-label[_ngcontent-%COMP%] {\n  color: rgba(255, 157, 47, 0.65);\n}\n\n.result-card-value[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  color: var(--white);\n  line-height: 1.1;\n  letter-spacing: -0.5px;\n}\n\n.result-card.highlighted[_ngcontent-%COMP%]   .result-card-value[_ngcontent-%COMP%] {\n  color: #ffb044;\n}\n\n.result-card-unit[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 400;\n  color: rgba(255, 255, 255, 0.35);\n  letter-spacing: 0;\n}\n\n.result-card-desc[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n  color: rgba(255, 255, 255, 0.3);\n  margin-top: 0.15rem;\n  line-height: 1.4;\n}\n\n.water-card[_ngcontent-%COMP%]   .result-card-desc[_ngcontent-%COMP%] {\n  margin-top: 0;\n  flex: 1;\n}\n\n\n.result-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.875rem;\n  justify-content: center;\n  padding-top: 1.25rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.05);\n}\n\n.result-view[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n\n.result-view[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.result-view[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(255, 157, 47, 0.3);\n  border-radius: 3px;\n}\n\n\n@media (max-width: 650px) {\n  .calculator[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    padding: 1.25rem 1rem 2rem;\n  }\n\n  .form-section[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .form-toggle-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.6rem;\n  }\n\n  .result-view[_ngcontent-%COMP%] {\n    padding: 1.75rem 1.25rem;\n  }\n\n  .result-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .result-card.water-card[_ngcontent-%COMP%] {\n    grid-column: auto;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.25rem;\n  }\n\n  .calculator[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.45rem;\n  }\n\n  .calc-hero[_ngcontent-%COMP%] {\n    padding: 2rem 1rem 1.75rem;\n  }\n}\n\n@media (max-width: 480px) {\n  .result-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .result-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY2FsY3VsYXRvci9mb29kLWNhbGN1bGF0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBLHdEQUF3RDtBQUN4RDtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnREFBZ0Q7RUFDaEQsNEZBQTRGO0VBQzVGLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLE9BQU8sVUFBVSxFQUFFLDRCQUE0QixFQUFFO0VBQ2pELEtBQUssVUFBVSxFQUFFLHdCQUF3QixFQUFFO0FBQzdDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsa0RBQWtEO0FBQ3BEOztBQUVBO0VBQ0U7SUFDRSxpQ0FBaUM7SUFDakMsa0RBQWtEO0VBQ3BEO0VBQ0E7SUFDRSx1Q0FBdUM7SUFDdkMscURBQXFEO0VBQ3ZEO0FBQ0Y7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQiwwRUFBMEU7RUFDMUUsNkJBQTZCO0VBQzdCLG9DQUFvQztFQUNwQyxxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLFdBQVcsOEJBQThCLEVBQUU7RUFDM0MsTUFBTSxnQ0FBZ0MsRUFBRTtBQUMxQzs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsU0FBUztFQUNULHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBLHdEQUF3RDtBQUN4RDtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFF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ckIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsT0FBTztBQUNUOztBQUVBLHdEQUF3RDtBQUN4RDtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQiwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsa0JBQWtCO0FBQ3BCOztBQUVBLHdEQUF3RDtBQUN4RDtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixXQUFXO0VBQ2I7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsV0FBVztFQUNiO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FsY3VsYXRvciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2FsY3VsYXRvciAqOmZvY3VzIHtcbiAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLW9yYW5nZSk7XG4gIG91dGxpbmUtb2Zmc2V0OiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLyogw6LClMKAw6LClMKAIEhlcm8gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4uY2FsYy1oZXJvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAzcmVtIDJyZW0gMi41cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMTU3LCA0NywgMC4xKTtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgNTAlIDAlLCByZ2JhKDI1NSwgMTU3LCA0NywgMC4wOCkgMCUsIHRyYW5zcGFyZW50IDcwJSk7XG4gIGFuaW1hdGlvbjogaGVyb0ZhZGVJbiAwLjZzIGVhc2Utb3V0O1xufVxuXG5Aa2V5ZnJhbWVzIGhlcm9GYWRlSW4ge1xuICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTsgfVxuICB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxufVxuXG4uY2FsYy1oZXJvLWljb24ge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBhbmltYXRpb246IGljb25GbG9hdEdsb3cgMi44cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBpY29uRmxvYXRHbG93IHtcbiAgMCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAwcHggcmdiYSgyNTUsIDE1NywgNDcsIDApKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KSBzY2FsZSgxLjA4KTtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAxNHB4IHJnYmEoMjU1LCAxNTcsIDQ3LCAwLjcpKTtcbiAgfVxufVxuXG4uY2FsY3VsYXRvciBoMSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIiwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luOiAwIGF1dG8gMC42cmVtO1xuICBtYXgtd2lkdGg6IDU4MHB4O1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmY5ZDJmIDAlLCAjZmZiNzAwIDUwJSwgI2Q0YWE0OCAxMDAlKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgYXV0bztcbiAgYW5pbWF0aW9uOiBzaGltbWVyIDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNoaW1tZXIge1xuICAwJSwgMTAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IDAlIGNlbnRlcjsgfVxuICA1MCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIGNlbnRlcjsgfVxufVxuXG4uY2FsYy1oZXJvLXN1YiB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbWFyZ2luOiAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBGb3JtIHNoZWxsIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLmNhbGN1bGF0b3IgZm9ybSB7XG4gIHBhZGRpbmc6IDJyZW0gMi41cmVtIDNyZW07XG4gIG1heC13aWR0aDogODYwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4vKiDDosKUwoDDosKUwoAgU2VjdGlvbiBjYXJkIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLmZvcm0tc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNyk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMS41cmVtIDEuNzVyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5mb3JtLXNlY3Rpb24taGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjc1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjg3NXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG59XG5cbi5mb3JtLXNlY3Rpb24taGVhZGVyIGgyIHtcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiLCBzZXJpZjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xufVxuXG4uc2VjdGlvbi1udW0ge1xuICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDAuNjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS1vcmFuZ2UpO1xuICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gIG9wYWNpdHk6IDAuNjU7XG4gIHBhZGRpbmctdG9wOiAxcHg7XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBGaWVsZCBncmlkIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLmZvcm0tZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE5MHB4LCAxZnIpKTtcbiAgZ2FwOiAxLjFyZW07XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBJbmRpdmlkdWFsIGZpZWxkIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLmZvcm0tZmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuMzVyZW07XG59XG5cbi5mb3JtLWZpZWxkIGxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLmZpZWxkLXVuaXQge1xuICBjb2xvcjogcmdiYSgyNTUsIDE1NywgNDcsIDAuNTUpO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmZvcm0tZmllbGQgaW5wdXQsXG4uZm9ybS1maWVsZCBzZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMC42cmVtIDAuOHJlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA0KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmlmO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycyBlYXNlLCBiYWNrZ3JvdW5kIDAuMnMgZWFzZSwgYm94LXNoYWRvdyAwLjJzIGVhc2U7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLmZvcm0tZmllbGQgc2VsZWN0IHtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMCcgaGVpZ2h0PSc2JyB2aWV3Qm94PScwIDAgMTAgNiclM0UlM0NwYXRoIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsMC4zKScgZD0nTTAgMGw1IDYgNS02eicvJTNFJTNDL3N2ZyUzRVwiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMC43NXJlbSBjZW50ZXI7XG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZvcm0tZmllbGQgc2VsZWN0IG9wdGlvbiB7XG4gIGJhY2tncm91bmQ6ICMxYzFiMWE7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG5cbi5mb3JtLWZpZWxkIGlucHV0OmhvdmVyLFxuLmZvcm0tZmllbGQgc2VsZWN0OmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTgpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDU1KTtcbn1cblxuLmZvcm0tZmllbGQgaW5wdXQ6Zm9jdXMsXG4uZm9ybS1maWVsZCBzZWxlY3Q6Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHZhcigtLW9yYW5nZSk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNik7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDI1NSwgMTU3LCA0NywgMC4wOSk7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5mb3JtLWZpZWxkIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTgpO1xufVxuXG4vKiDDosKUwoDDosKUwoAgVG9nZ2xlIHJvdyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5mb3JtLXRvZ2dsZS1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMXJlbTtcbiAgcGFkZGluZzogMC45cmVtIDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQpO1xufVxuXG4uZm9ybS10b2dnbGUtcm93Omxhc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4udG9nZ2xlLXF1ZXN0aW9uIHtcbiAgZm9udC1zaXplOiAwLjg4cmVtO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY1KTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnRvZ2dsZS1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4udG9nZ2xlLWdyb3VwIGlucHV0W3R5cGU9cmFkaW9dIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4udG9nZ2xlLWJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMC40MnJlbSAxLjFyZW07XG4gIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgbWluLXdpZHRoOiA1NnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50b2dnbGUtYnRuOmZpcnN0LW9mLXR5cGUge1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xufVxuXG4udG9nZ2xlLWJ0bjpsYXN0LW9mLXR5cGUge1xuICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcbn1cblxuLnRvZ2dsZS1ncm91cCBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkICsgLnRvZ2dsZS1idG4ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTU3LCA0NywgMC4xMik7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDE1NywgNDcsIDAuNSk7XG4gIGNvbG9yOiAjZmZiMDQ0O1xufVxuXG4vKiDDosKUwoDDosKUwoAgQ29uZGl0aW9uYWwgZmllbGRzIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLmNvbmRpdGlvbmFsLWZpZWxkcyB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIHBhZGRpbmctdG9wOiAxLjFyZW07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQpO1xufVxuXG4vKiDDosKUwoDDosKUwoAgUmFuZ2Ugc2xpZGVyIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLnJhbmdlLWZpZWxkIHtcbiAgcGFkZGluZzogMC45cmVtIDAgMC40cmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA0KTtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuXG4ucmFuZ2VfcHJvZ3Jlc3Mge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNjYjM3MDEgMCUsICNmZjlkMmYgNTAlLCAjZmZiNzAwIDEwMCUpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwdm1pbjtcbiAgaGVpZ2h0OiA1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDMyMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuXG4ucmFuZ2VfcHJvZ3Jlc3M6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgyNTUsIDE1NywgNDcsIDAuMzUpO1xufVxuXG4ucmFuZ2VfcHJvZ3Jlc3M6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwdm1pbjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjY2IzNzAxIDAlLCAjZmY5ZDJmIDUwJSwgI2ZmYjcwMCAxMDAlKTtcbn1cblxuLnJhbmdlX3Byb2dyZXNzOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW9yYW5nZSk7XG4gIGhlaWdodDogMThweDtcbiAgd2lkdGg6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzFjMWIxYTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbi10b3A6IC03cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5yYW5nZV9wcm9ncmVzczo6LXdlYmtpdC1zbGlkZXItdGh1bWI6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggcmdiYSgyNTUsIDE1NywgNDcsIDAuNSk7XG59XG5cbi5yYW5nZV9wcm9ncmVzczo6LW1vei1yYW5nZS10aHVtYiB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW9yYW5nZSk7XG4gIGhlaWdodDogMThweDtcbiAgd2lkdGg6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzFjMWIxYTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBib3gtc2hhZG93OiAwIDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4vKiDDosKUwoDDosKUwoAgU3VibWl0IGJ1dHRvbnMgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4uY2FsY3VsYXRvciAuYnV0dG9ucy1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxLjc1cmVtO1xufVxuXG4vKiDDosKUwoDDosKUwoAgT3ZlcmxheSAmIG1vZGFsIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLm92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuODIpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNnB4KTtcbiAgei1pbmRleDogOTk5OTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuMjVzIGVhc2U7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgdG8geyBvcGFjaXR5OiAxOyB9XG59XG5cbi5yZXN1bHQtdmlldyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDcyMHB4O1xuICBwYWRkaW5nOiAyLjI1cmVtIDIuNXJlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzFlMWQxYiAwJSwgIzEyMTIxMiAxMDAlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDMycHggODBweCByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYW5pbWF0aW9uOiBzbGlkZVVwIDAuM3MgZWFzZTtcbiAgbWF4LWhlaWdodDogOTB2aDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuQGtleWZyYW1lcyBzbGlkZVVwIHtcbiAgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNHB4KTsgb3BhY2l0eTogMDsgfVxuICB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgb3BhY2l0eTogMTsgfVxufVxuXG4uY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxcmVtO1xuICB0b3A6IDFyZW07XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1pbi13aWR0aDogYXV0bztcbiAgbWluLWhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cbi5jbG9zZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNyk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICB0cmFuc2Zvcm06IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBSZXN1bHQgaGVhZGVyIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLnJlc3VsdC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAxLjc1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMS4yNXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNik7XG59XG5cbi5yZXN1bHQtY2F0LW5hbWUge1xuICBmb250LXNpemU6IDAuNzhyZW07XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC44cHg7XG4gIG1hcmdpbjogMCAwIDAuNXJlbTtcbn1cblxuLnJlc3VsdC1jYXQtbmFtZSBzdHJvbmcge1xuICBjb2xvcjogdmFyKC0tb3JhbmdlKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnJlc3VsdC1oZWFkZXIgaDIge1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgbWFyZ2luOiAwIDAgMC4zNXJlbTtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cblxuLnJlc3VsdC1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XG4gIG1hcmdpbjogMDtcbn1cblxuLyogw6LClMKAw6LClMKAIFJlc3VsdCBncmlkIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLnJlc3VsdC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDAuNzVyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuLnJlc3VsdC1jYXJkIHtcbiAgcGFkZGluZzogMS4xcmVtIDEuMjVyZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMjUpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC4yNXJlbTtcbn1cblxuLnJlc3VsdC1jYXJkLmhpZ2hsaWdodGVkIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE1NywgNDcsIDAuMDcpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAxNTcsIDQ3LCAwLjIpO1xufVxuXG4ucmVzdWx0LWNhcmQud2F0ZXItY2FyZCB7XG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMS41cmVtO1xufVxuXG4ucmVzdWx0LWNhcmQtbGFiZWwge1xuICBmb250LXNpemU6IDAuNjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjlweDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XG59XG5cbi5yZXN1bHQtY2FyZC5oaWdobGlnaHRlZCAucmVzdWx0LWNhcmQtbGFiZWwge1xuICBjb2xvcjogcmdiYSgyNTUsIDE1NywgNDcsIDAuNjUpO1xufVxuXG4ucmVzdWx0LWNhcmQtdmFsdWUge1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG4gIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XG59XG5cbi5yZXN1bHQtY2FyZC5oaWdobGlnaHRlZCAucmVzdWx0LWNhcmQtdmFsdWUge1xuICBjb2xvcjogI2ZmYjA0NDtcbn1cblxuLnJlc3VsdC1jYXJkLXVuaXQge1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cblxuLnJlc3VsdC1jYXJkLWRlc2Mge1xuICBmb250LXNpemU6IDAuNzZyZW07XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIG1hcmdpbi10b3A6IDAuMTVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG59XG5cbi53YXRlci1jYXJkIC5yZXN1bHQtY2FyZC1kZXNjIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgZmxleDogMTtcbn1cblxuLyogw6LClMKAw6LClMKAIFJlc3VsdCBhY3Rpb25zIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLnJlc3VsdC1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjg3NXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxLjI1cmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcbn1cblxuLnJlc3VsdC12aWV3Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA0cHg7XG59XG5cbi5yZXN1bHQtdmlldzo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLnJlc3VsdC12aWV3Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxNTcsIDQ3LCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBSZXNwb25zaXZlIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDY1MHB4KSB7XG4gIC5jYWxjdWxhdG9yIGZvcm0ge1xuICAgIHBhZGRpbmc6IDEuMjVyZW0gMXJlbSAycmVtO1xuICB9XG5cbiAgLmZvcm0tc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMS4yNXJlbTtcbiAgfVxuXG4gIC5mb3JtLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLmZvcm0tdG9nZ2xlLXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBnYXA6IDAuNnJlbTtcbiAgfVxuXG4gIC5yZXN1bHQtdmlldyB7XG4gICAgcGFkZGluZzogMS43NXJlbSAxLjI1cmVtO1xuICB9XG5cbiAgLnJlc3VsdC1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5yZXN1bHQtY2FyZC53YXRlci1jYXJkIHtcbiAgICBncmlkLWNvbHVtbjogYXV0bztcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogMC4yNXJlbTtcbiAgfVxuXG4gIC5jYWxjdWxhdG9yIGgxIHtcbiAgICBmb250LXNpemU6IDEuNDVyZW07XG4gIH1cblxuICAuY2FsYy1oZXJvIHtcbiAgICBwYWRkaW5nOiAycmVtIDFyZW0gMS43NXJlbTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnJlc3VsdC1hY3Rpb25zIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLnJlc3VsdC1hY3Rpb25zIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ },

/***/ 7660
/*!************************************************************************************************!*\
  !*** ./src/app/features/calculator/food-requirement-calculator/calority-calculation-result.ts ***!
  \************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalorityCalculationResult: () => (/* binding */ CalorityCalculationResult)
/* harmony export */ });
class CalorityCalculationResult {
  constructor(der, rer, calculationMethod) {
    this._unit = 'kcl';
    this._der = der;
    this._rer = rer;
    this.calculationMethod = calculationMethod;
  }
  get rer() {
    return this._rer;
  }
  get der() {
    return this._der;
  }
  get unit() {
    return this._unit;
  }
}

/***/ },

/***/ 2232
/*!************************************************************************************************!*\
  !*** ./src/app/features/calculator/food-requirement-calculator/calority-calculator.service.ts ***!
  \************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CalorityCalculatorService: () => (/* binding */ CalorityCalculatorService)
/* harmony export */ });
/* harmony import */ var _calority_calculation_result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calority-calculation-result */ 7660);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _k_factor_calculator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./k-factor-calculator.service */ 4536);



class CalorityCalculatorService {
  constructor(kFactorStrategy) {
    this.kFactorStrategy = kFactorStrategy;
  }
  calculate(params) {
    const cat = params.cat;
    if (params.isCalculationByLactationCycle()) {
      return this.calculationByLactationWeek(cat);
    }
    return this.calculateUsingKFactor(cat);
  }
  calculateUsingKFactor(cat) {
    const kFactor = this.kFactorStrategy.determineFor(cat);
    const der = kFactor.value * cat.rer();
    return new _calority_calculation_result__WEBPACK_IMPORTED_MODULE_0__.CalorityCalculationResult(der, cat.rer(), 'kFactor');
  }
  calculationByLactationWeek(cat) {
    const rer = cat.rer();
    const rarPercentageCalculateForCatNumbers = this.getRerPercentage(cat.feedingWeek) * rer;
    const der = rer + cat.numberOfKittens * rarPercentageCalculateForCatNumbers;
    return new _calority_calculation_result__WEBPACK_IMPORTED_MODULE_0__.CalorityCalculationResult(der, cat.rer(), 'lactationWeek');
  }
  getRerPercentage(feedingWeek) {
    switch (feedingWeek) {
      case 1:
      case 2:
        return 0.3;
      case 3:
        return 0.45;
      case 4:
        return 0.55;
      case 5:
        return 0.65;
      default:
        return 0.9;
    }
  }
  static {
    this.ɵfac = function CalorityCalculatorService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CalorityCalculatorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_k_factor_calculator_service__WEBPACK_IMPORTED_MODULE_2__.KFactorCalculatorService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CalorityCalculatorService,
      factory: CalorityCalculatorService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 9640
/*!***********************************************************************************************!*\
  !*** ./src/app/features/calculator/food-requirement-calculator/cat-calculation-parameters.ts ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cat: () => (/* binding */ Cat),
/* harmony export */   CatCalculationParameters: () => (/* binding */ CatCalculationParameters),
/* harmony export */   ConvalescenceInfo: () => (/* binding */ ConvalescenceInfo),
/* harmony export */   KFactor: () => (/* binding */ KFactor),
/* harmony export */   ReproductionCycleInfo: () => (/* binding */ ReproductionCycleInfo)
/* harmony export */ });
class KFactor {
  constructor(kValue, kName) {
    this.kValue = kValue;
    this.kName = kName;
  }
  get value() {
    return this.kValue;
  }
  get name() {
    return this.kName;
  }
}
class CatCalculationParameters {
  constructor(_cat, _dryKcl, _wetKcl, _reproductiveCycleCalculationType) {
    this._cat = _cat;
    this._dryKcl = _dryKcl;
    this._wetKcl = _wetKcl;
    this._reproductiveCycleCalculationType = _reproductiveCycleCalculationType;
  }
  isCalculationByLactationCycle() {
    return this._cat.isInReproductiveCycle() && this._reproductiveCycleCalculationType === 0 /* PostPregnantFeedingStrategy.FEEDING_WEEK */;
  }
  get cat() {
    return this._cat;
  }
  get dryKcl() {
    if (this._dryKcl == null) {
      return 0;
    }
    return this._dryKcl;
  }
  get wetKcl() {
    if (this._wetKcl == null) {
      return 0;
    }
    return this._wetKcl;
  }
}
class ConvalescenceInfo {
  constructor(_progress) {
    this._progress = _progress;
  }
  get isInProcess() {
    return this._progress > 0;
  }
  get progress() {
    return this._progress;
  }
}
class ReproductionCycleInfo {
  constructor(_cycleFaze, _numberOfKittens, _feedingWeek) {
    this._cycleFaze = _cycleFaze;
    this._numberOfKittens = _numberOfKittens;
    this._feedingWeek = _feedingWeek;
  }
  get cycleFaze() {
    return this._cycleFaze;
  }
  get numberOfKittens() {
    return this._numberOfKittens;
  }
  get feedingWeek() {
    return this._feedingWeek;
  }
  isReproductive() {
    return this.cycleFaze != null && this.cycleFaze !== 0 /* ReproductiveCycleFaze.NO */;
  }
}
class Cat {
  constructor(name, convalescenceInfo, age, mature, sex, weight, bodyStructure, sterilized, reproductiveCycleInfo) {
    this._convalescenceInfo = convalescenceInfo;
    this._age = age;
    this._mature = mature;
    this._sex = sex;
    this._weight = weight;
    this._bodyStructure = bodyStructure;
    this._sterilized = sterilized;
    this._reproductiveCycleInfo = reproductiveCycleInfo;
    this._name = name;
  }
  get age() {
    return this._age;
  }
  get feedingWeek() {
    if (!this.isPresent(this._reproductiveCycleInfo)) {
      throw new Error('Illegal operation');
    }
    return this._reproductiveCycleInfo.feedingWeek;
  }
  get numberOfKittens() {
    if (!this.isPresent(this._reproductiveCycleInfo)) {
      throw new Error('Illegal operation');
    }
    return this._reproductiveCycleInfo.numberOfKittens;
  }
  get weight() {
    if (this._weight == null) {
      return 0;
    }
    return this._weight;
  }
  get bodyStructure() {
    return this._bodyStructure;
  }
  isSterilized() {
    return this._sterilized;
  }
  isNotSterilized() {
    return this._sterilized;
  }
  isInPregnant() {
    return this.isInReproductiveCycle() && this._reproductiveCycleInfo.cycleFaze === 1 /* ReproductiveCycleFaze.PREGNANCY */;
  }
  isInHeat() {
    return this.isInReproductiveCycle() && this._reproductiveCycleInfo.cycleFaze === 2 /* ReproductiveCycleFaze.HEAT */;
  }
  isFeeding() {
    return this.isInReproductiveCycle() && this._reproductiveCycleInfo.cycleFaze === 3 /* ReproductiveCycleFaze.FEEDING */;
  }
  isInReproductiveCycle() {
    return this.isPresent(this._reproductiveCycleInfo) && this.isReproductiveCyclePossible() && this._reproductiveCycleInfo.isReproductive();
  }
  rer() {
    return 70 * Math.pow(this._weight, 0.67);
  }
  isInConvalescence() {
    return this.isPresent(this._convalescenceInfo) && this._convalescenceInfo.isInProcess;
  }
  getConvalescenceProgress() {
    if (!this.isPresent(this._convalescenceInfo)) {
      throw new Error('Illegal operation');
    }
    return this._convalescenceInfo.progress / 100;
  }
  isAdult() {
    return this._mature === 0 /* Mature.ADULT */ || this._age.humanAge >= 4;
  }
  isKitten() {
    return !this.isAdult();
  }
  isOld() {
    return this._age.humanAge >= 10;
  }
  name() {
    return this._name;
  }
  get sex() {
    return this._sex;
  }
  get reproductiveFaze() {
    if (this._reproductiveCycleInfo === null) {
      return null;
    }
    return this._reproductiveCycleInfo.cycleFaze;
  }
  isReproductiveCyclePossible() {
    return this._sex === 1 /* Sex.FEMALE */ && !this._sterilized && this.isAdult();
  }
  isPresent(obj) {
    return obj !== null && obj !== undefined;
  }
}

/***/ },

/***/ 4536
/*!************************************************************************************************!*\
  !*** ./src/app/features/calculator/food-requirement-calculator/k-factor-calculator.service.ts ***!
  \************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KFactorCalculatorService: () => (/* binding */ KFactorCalculatorService)
/* harmony export */ });
/* harmony import */ var _cat_calculation_parameters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cat-calculation-parameters */ 9640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4363);


class KFactorCalculatorService {
  constructor() {
    this.baseKFactorDefinition = {
      ADULT: 1.4,
      ADULT_STERILIZED: 1.2,
      KITTEN: 2.5,
      HEAT: 1.6,
      PREGNANT: 2.0,
      BEGIN_CONVALESCENCE: 1.403,
      END_CONVALESCENCE: 1.201
    };
  }
  determineFor(cat) {
    switch (true) {
      case cat.isInReproductiveCycle():
        return this.calculateForReproductiveCycle(cat);
      case cat.isInConvalescence():
        return this.calculateKFactorForteConvalescence(cat.getConvalescenceProgress());
      default:
        return this.calculateKFactorRegularCat(cat);
    }
  }
  calculateForReproductiveCycle(cat) {
    switch (true) {
      case cat.isFeeding():
        return this.calculateKFactorForFeeding(cat);
      case cat.isInPregnant():
        return new _cat_calculation_parameters__WEBPACK_IMPORTED_MODULE_0__.KFactor(this.baseKFactorDefinition.PREGNANT, 'reproductive, pregnant');
      case cat.isInHeat():
        return new _cat_calculation_parameters__WEBPACK_IMPORTED_MODULE_0__.KFactor(this.baseKFactorDefinition.HEAT, 'reproductive, heat');
      default:
        throw new Error('it never ever should be here');
    }
  }
  calculateKFactorForFeeding(cat) {
    switch (cat.numberOfKittens) {
      case 1:
        return new _cat_calculation_parameters__WEBPACK_IMPORTED_MODULE_0__.KFactor(2.0, 'Cykl rozrodczy dla 1 kotka');
      case 2:
        return new _cat_calculation_parameters__WEBPACK_IMPORTED_MODULE_0__.KFactor(2.75, 'Cykl rozrodczy dla 2 mlodych');
      case 3:
        return new _cat_calculation_parameters__WEBPACK_IMPORTED_MODULE_0__.KFactor(3.0, 'Cykl rozrodczy dla 3 mlodych');
      case 4:
        return new _cat_calculation_parameters__WEBPACK_IMPORTED_MODULE_0__.KFactor(4.0, 'Cykl rozrodczy dla 4 mlodych');
      default:
        return new _cat_calculation_parameters__WEBPACK_IMPORTED_MODULE_0__.KFactor(5.0, 'Cykl rozrodczy dla 5 i więcej mlodych');
    }
  }
  calculateKFactorForteConvalescence(progress) {
    const delta = this.baseKFactorDefinition.BEGIN_CONVALESCENCE - this.baseKFactorDefinition.END_CONVALESCENCE;
    const percentOfDelta = delta * progress;
    const kFactorValue = this.baseKFactorDefinition.BEGIN_CONVALESCENCE - percentOfDelta;
    return new _cat_calculation_parameters__WEBPACK_IMPORTED_MODULE_0__.KFactor(kFactorValue, 'Proces rekonwalescencji');
  }
  calculateKFactorRegularCat(cat) {
    switch (true) {
      case cat.isKitten():
        return new _cat_calculation_parameters__WEBPACK_IMPORTED_MODULE_0__.KFactor(2.5, 'Kot w fazie rozwoju');
      case cat.isOld():
        return this.calculateForOldCat(cat);
      default:
        return this.calculateForAdultCat(cat);
    }
  }
  calculateForAdultCat(cat) {
    switch (true) {
      case this.shouldCalculateByBodyStructure(cat.bodyStructure):
        return this.calculateByBodyStructure(cat.bodyStructure);
      case cat.isSterilized():
        {
          return new _cat_calculation_parameters__WEBPACK_IMPORTED_MODULE_0__.KFactor(this.baseKFactorDefinition.ADULT_STERILIZED, 'Dorosly wsyterylizowny');
        }
      case cat.isNotSterilized():
        {
          return new _cat_calculation_parameters__WEBPACK_IMPORTED_MODULE_0__.KFactor(this.baseKFactorDefinition.ADULT, 'Dorosly niewysterlizowany');
        }
      default:
        throw new Error('cant calculate K-Factor for adult cat');
    }
  }
  shouldCalculateByBodyStructure(bodyStructure) {
    return 1 /* BodyStructure.NORMAL */ !== bodyStructure;
  }
  calculateByBodyStructure(bodyStructure) {
    switch (bodyStructure) {
      case 3 /* BodyStructure.VERY_FAT */:
        return new _cat_calculation_parameters__WEBPACK_IMPORTED_MODULE_0__.KFactor(0.8, 'Budowa ciała, za grubuy kot');
      case 2 /* BodyStructure.FAT */:
        return new _cat_calculation_parameters__WEBPACK_IMPORTED_MODULE_0__.KFactor(1.0, 'Budowa ciała, gruby Kot');
      case 0 /* BodyStructure.SLIM */:
        return new _cat_calculation_parameters__WEBPACK_IMPORTED_MODULE_0__.KFactor(1.2, 'Budowa ciała, chudy kot');
      default:
        return new _cat_calculation_parameters__WEBPACK_IMPORTED_MODULE_0__.KFactor(1.1, 'Budowa ciała, normalny kot');
    }
  }
  calculateForOldCat(cat) {
    const age = cat.age;
    if (age.humanAge >= 10 && age.humanAge <= 11.5) {
      return new _cat_calculation_parameters__WEBPACK_IMPORTED_MODULE_0__.KFactor(1.4, 'Kot starszy');
    }
    if (age.humanAge > 11.5 && age.humanAge <= 13) {
      return new _cat_calculation_parameters__WEBPACK_IMPORTED_MODULE_0__.KFactor(1.5, 'Kot starszy');
    }
    return new _cat_calculation_parameters__WEBPACK_IMPORTED_MODULE_0__.KFactor(1.6, 'Kot starszy');
  }
  static {
    this.ɵfac = function KFactorCalculatorService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || KFactorCalculatorService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: KFactorCalculatorService,
      factory: KFactorCalculatorService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 1398
/*!****************************************************************!*\
  !*** ./src/app/features/calculator/food-requirement-report.ts ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FoodRequirementReport: () => (/* binding */ FoodRequirementReport)
/* harmony export */ });
class FoodRequirementReport {
  constructor(footRequirementCalculationResult, calculationParams, currentFoodRequirement, waterRequirement) {
    this._calorityCalculationResult = footRequirementCalculationResult;
    this._calculationParams = calculationParams;
    this._currentFoodRequirement = currentFoodRequirement;
    this._waterRequirement = waterRequirement;
  }
  get footRequirementCalculationResult() {
    return this._calorityCalculationResult;
  }
  get der() {
    return this.nonNullAsInt(this._calorityCalculationResult.der);
  }
  get rer() {
    return this.nonNullAsInt(this._calculationParams.cat.rer());
  }
  get catName() {
    return this._calculationParams.cat.name();
  }
  get weightOfCurrentDryFood() {
    return this.asInt(this._currentFoodRequirement.amountOfDryFood);
  }
  get weightOfCurrentWetFood() {
    return this.asInt(this._currentFoodRequirement.amountOfWetFood);
  }
  get foodUnit() {
    return this._currentFoodRequirement.unit;
  }
  get cat() {
    return this._calculationParams.cat;
  }
  get waterRequirement() {
    return this._waterRequirement;
  }
  nonNullAsInt(num) {
    return parseInt(num.toString(), 10);
  }
  asInt(num) {
    if (num === null) {
      return null;
    }
    return parseInt(num.toString(), 10);
  }
}

/***/ },

/***/ 2354
/*!***********************************************************!*\
  !*** ./src/app/features/calculator/pdf-writer.service.ts ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PdfWriterService: () => (/* binding */ PdfWriterService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _food_requirement_calculator_cat_calculation_parameters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food-requirement-calculator/cat-calculation-parameters */ 9640);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pdfmake/build/pdfmake */ 7888);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ 5360);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4363);





class PdfWriterService {
  constructor() {
    this.DATE_PIPE = new _angular_common__WEBPACK_IMPORTED_MODULE_0__.DatePipe('en-US');
    this.NO_DATA_LABEL = 'brak danych';
    this.write = report => {
      const date = this.DATE_PIPE.transform(new Date(), 'dd-MM-YYYY');
      const pdf = {
        layout: 'lightHorizontalLines',
        content: [{
          style: 'logo',
          fit: [90, 90],
          image: 'data:image/png;base64,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'
        }, {
          style: 'gustawUrl',
          text: 'github:orczykowski',
          linkToDestination: 'https://github.com/orczykowski/gustaw/'
        }, {
          text: 'Zapotrzebowanie kaloryczne',
          style: 'header'
        }, {
          text: [{
            text: 'raport wygenrowany: ',
            style: 'italic'
          }, {
            text: date,
            style: 'bold'
          }],
          margin: [0, 10, 0, 10]
        }, {
          text: 'Informacje o kocie',
          style: 'midHeader'
        }, this.addCatInfo(report.cat), {
          text: 'Raport',
          style: 'midHeader'
        }, this.foodRequirementInfo(report), this.referenceFoodInfo(report)],
        styles: this.createStyleForReport()
      };
      pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_2__.createPdf(pdf).download(this.fileName(report.cat, date));
    };
    this.enrichByConvalescenceInfoIfPresent = (cat, rows) => {
      if (cat.isInConvalescence()) {
        rows.push(['czy kot przechodzi rekonwalescencję', this.mapBoolean(cat.isInConvalescence())], ['postęp rekonwalescencji', this.asInt(cat.getConvalescenceProgress()) + '%']);
      }
    };
    this.enrichByReproductiveInfoIfPresent = (cat, rows) => {
      if (cat.isInReproductiveCycle()) {
        const faze = this.mapReproductiveFaze(cat.reproductiveFaze);
        rows.push(['faza cyklu rozrodczego', faze], ['wybrany sposób kalkulacji', 'XXXX']);
      }
    };
    this.mapSex = sex => {
      if (sex === null) {
        return this.NO_DATA_LABEL;
      }
      return sex === 0 /* Sex.MALE */ ? 'Kot' : 'Kotka';
    };
    this.createStyleForReport = () => {
      return {
        gustawUrl: {
          fontSize: 12,
          color: '#888888',
          alignment: 'center',
          italics: true
        },
        header: {
          fontSize: 18,
          color: '#222222',
          alignment: 'center',
          bold: true,
          margin: [0, 15, 0, 15]
        },
        logo: {
          alignment: 'center'
        },
        italic: {
          italics: true,
          color: '#666666'
        },
        bold: {
          bold: true
        },
        midHeader: {
          color: '#666666',
          bold: true,
          fontSize: 14,
          margin: [0, 10, 0, 10]
        },
        tableStyle: {
          margin: [0, 10, 0, 25],
          width: 100
        }
      };
    };
    this.fileName = (cat, date) => {
      return `zapotrzebowanie_kaloryczne_dla_${cat.name()}_na_dzień_${date}.pdf`;
    };
    pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_2__.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_3__.pdfMake.vfs;
  }
  foodRequirementInfo(report) {
    return this.asTable([['Spoczynkowe zapotrzebowanie na energię (RER)', this.asInt(report.rer) + 'kcl'], ['Dzienne zapotrzebowanie na energię metaboliczną', this.asInt(report.der) + 'kcl']]);
  }
  referenceFoodInfo(report) {
    const waterRequirement = report.waterRequirement;
    return this.asTable([['Łączna ilość płynów, którą powinin wypić kot w ciągu doby', this.asInt(waterRequirement.amount) + waterRequirement.unit], ['Ilość suchej karmy aby spełnić zapotrzebowanie całkowite der', this.asInt(report.weightOfCurrentDryFood) + report.foodUnit], ['Ilość mokrej kary aby spełnić zapotrzebowanie całkowiete der', this.asInt(report.weightOfCurrentWetFood) + report.foodUnit]]);
  }
  addCatInfo(cat) {
    const rows = [['imię', this.orNoData(cat.name())], ['wiek', `${this.asInt(cat.age.humanAge)}`], ['wiek w latach kocich', `${this.asInt(cat.age.catAge)}`], ['waga', `${this.asInt(cat.weight)}`], ['płeć', this.mapSex(cat.sex)], ['budowa ciała', this.mapBodyStructure(cat.bodyStructure)], ['czy kot jest wysterylizowany?', this.mapBoolean(cat.isNotSterilized())]];
    this.enrichByReproductiveInfoIfPresent(cat, rows);
    this.enrichByConvalescenceInfoIfPresent(cat, rows);
    return this.asTable(rows);
  }
  // tslint:disable-next-line:variable-name
  orNoData(any) {
    return any !== null ? any : this.NO_DATA_LABEL;
  }
  mapBodyStructure(bodyStructure) {
    if (bodyStructure == null) {
      return this.NO_DATA_LABEL;
    }
    switch (bodyStructure) {
      case 3 /* BodyStructure.VERY_FAT */:
        return 'bardzo otyły';
      case 2 /* BodyStructure.FAT */:
        return 'otyły';
      case 1 /* BodyStructure.NORMAL */:
        return 'normalny';
      case 0 /* BodyStructure.SLIM */:
        return 'chudy';
    }
  }
  mapBoolean(b) {
    if (b === null) {
      return this.NO_DATA_LABEL;
    }
    return b ? 'tak' : 'nie';
  }
  mapReproductiveFaze(faze) {
    if (faze === null) {
      return this.NO_DATA_LABEL;
    }
    switch (faze) {
      case 3 /* ReproductiveCycleFaze.FEEDING */:
        return 'Karmienie';
      case 2 /* ReproductiveCycleFaze.HEAT */:
        return 'Ruja';
      case 1 /* ReproductiveCycleFaze.PREGNANCY */:
        return 'Ciąża';
      case 0 /* ReproductiveCycleFaze.NO */:
        return 'Nie dotyczy';
    }
  }
  asTable(param) {
    return {
      style: 'tableStyle',
      table: {
        body: param,
        widths: ['*', 'auto']
      },
      layout: {
        vLineWidth: () => {
          return 0;
        },
        hLineWidth: () => {
          return 1;
        },
        hLineColor: () => {
          return '#cccccc';
        },
        paddingLeft: () => {
          return 7;
        },
        paddingRight: () => {
          return 5;
        },
        paddingTop: () => {
          return 5;
        },
        paddingBottom: () => {
          return 7;
        },
        fillColor: () => {
          return '#f6f6f6';
        }
      }
    };
  }
  asInt(num) {
    if (num === null) {
      return this.NO_DATA_LABEL;
    }
    return num.toString();
  }
  static {
    this.ɵfac = function PdfWriterService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PdfWriterService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: PdfWriterService,
      factory: PdfWriterService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 3063
/*!****************************************************************************!*\
  !*** ./src/app/features/calculator/print-result/print-result.component.ts ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrintResultComponent: () => (/* binding */ PrintResultComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6124);

class PrintResultComponent {
  constructor() {
    this.result = 'brak danych';
    this.description = '';
    this.amount = null;
    this.unit = '';
  }
  ngOnInit() {
    if (this.amount == null) {
      this.result = 'brak danych';
    } else {
      this.result = this.amount + ' ' + this.unit;
    }
  }
  static {
    this.ɵfac = function PrintResultComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || PrintResultComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PrintResultComponent,
      selectors: [["app-print-result"]],
      inputs: {
        description: "description",
        amount: "amount",
        unit: "unit"
      },
      standalone: false,
      decls: 4,
      vars: 2,
      consts: [[1, "result-row"]],
      template: function PrintResultComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.description, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.result);
        }
      },
      styles: [".result-row[_ngcontent-%COMP%] {\n  margin: 0.75em 1em;\n  font-style: normal;\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 0.95em;\n  display: flex;\n  align-items: baseline;\n  gap: 0.5em;\n  flex-wrap: wrap;\n}\n\n.result-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1.15em;\n  font-style: normal;\n  color: var(--lightOrange);\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY2FsY3VsYXRvci9wcmludC1yZXN1bHQvcHJpbnQtcmVzdWx0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQiIsInNvdXJjZXNDb250ZW50IjpbIi5yZXN1bHQtcm93IHtcbiAgbWFyZ2luOiAwLjc1ZW0gMWVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gIGZvbnQtc2l6ZTogMC45NWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gIGdhcDogMC41ZW07XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnJlc3VsdC1yb3cgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMS4xNWVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGNvbG9yOiB2YXIoLS1saWdodE9yYW5nZSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ },

/***/ 85
/*!************************************************************************************!*\
  !*** ./src/app/features/calculator/validation-error/validation-error.component.ts ***!
  \************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValidationErrorComponent: () => (/* binding */ ValidationErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6124);

function ValidationErrorComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.msg);
  }
}
class ValidationErrorComponent {
  constructor() {
    this.formField = null;
    this.validatorName = 'required';
    this.msg = 'Pole jest wymagane';
    this.shouldShow = () => {
      return this.formField !== null && this.formField?.errors?.[this.validatorName] && (this.formField?.dirty || this.formField?.touched);
    };
  }
  static {
    this.ɵfac = function ValidationErrorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ValidationErrorComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ValidationErrorComponent,
      selectors: [["app-validation-error"]],
      inputs: {
        formField: "formField",
        validatorName: "validatorName",
        msg: "msg"
      },
      standalone: false,
      decls: 1,
      vars: 1,
      consts: [[1, "validation-error"]],
      template: function ValidationErrorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditionalCreate"](0, ValidationErrorComponent_Conditional_0_Template, 2, 1, "span", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.shouldShow() ? 0 : -1);
        }
      },
      styles: [".validation-error[_ngcontent-%COMP%] {\n  font-style: italic;\n  text-transform: lowercase;\n  color: #f63030;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY2FsY3VsYXRvci92YWxpZGF0aW9uLWVycm9yL3ZhbGlkYXRpb24tZXJyb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsY0FBYztBQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIi52YWxpZGF0aW9uLWVycm9yIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICBjb2xvcjogI2Y2MzAzMDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ },

/***/ 7020
/*!*****************************************************************************!*\
  !*** ./src/app/features/calculator/water-requirement-calculator.service.ts ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WaterRequirementCalculatorService: () => (/* binding */ WaterRequirementCalculatorService),
/* harmony export */   WaterRequirementResult: () => (/* binding */ WaterRequirementResult)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4363);

class WaterRequirementResult {
  constructor(amount) {
    this._unit = 'ml';
    this._amount = amount;
  }
  get amount() {
    return this._amount;
  }
  get unit() {
    return this._unit;
  }
}
class WaterRequirementCalculatorService {
  calculate(cat) {
    if (cat.weight === 0) {
      return new WaterRequirementResult(0);
    }
    return new WaterRequirementResult(30 * cat.weight + 70);
  }
  static {
    this.ɵfac = function WaterRequirementCalculatorService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || WaterRequirementCalculatorService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: WaterRequirementCalculatorService,
      factory: WaterRequirementCalculatorService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 4961
/*!*****************************************************************************************!*\
  !*** ./src/app/features/organizations/organization-info/organization-info.component.ts ***!
  \*****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrganizationInfoComponent: () => (/* binding */ OrganizationInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4363);

function OrganizationInfoComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.organization == null ? null : ctx_r0.organization.tagline);
  }
}
function OrganizationInfoComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 10)(3, "circle", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.organization == null ? null : ctx_r0.organization.location, " ");
  }
}
function OrganizationInfoComponent_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r2);
  }
}
function OrganizationInfoComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](1, OrganizationInfoComponent_Conditional_11_For_2_Template, 2, 1, "span", 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx_r0.organization == null ? null : ctx_r0.organization.focus);
  }
}
class OrganizationInfoComponent {
  constructor() {
    this.organization = null;
  }
  static {
    this.ɵfac = function OrganizationInfoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OrganizationInfoComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrganizationInfoComponent,
      selectors: [["app-organization-info"]],
      inputs: {
        organization: "organization"
      },
      standalone: false,
      decls: 12,
      vars: 11,
      consts: [["target", "_blank", 1, "organization", 3, "href"], [1, "organization-logo-wrapper"], ["loading", "lazy", 3, "src", "alt"], [1, "organization-content"], [1, "tagline"], [1, "description"], [1, "organization-meta"], [1, "location"], [1, "focus-tags"], ["width", "12", "height", "12", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["d", "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"], ["cx", "12", "cy", "10", "r", "3"], [1, "tag"]],
      template: function OrganizationInfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditionalCreate"](6, OrganizationInfoComponent_Conditional_6_Template, 2, 1, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditionalCreate"](10, OrganizationInfoComponent_Conditional_10_Template, 5, 1, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditionalCreate"](11, OrganizationInfoComponent_Conditional_11_Template, 3, 0, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinterpolate"](ctx.organization == null ? null : ctx.organization.webPage), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinterpolate1"]("assets/organizations/logos/", ctx.organization == null ? null : ctx.organization.logo), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinterpolate"](ctx.organization == null ? null : ctx.organization.name));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.organization == null ? null : ctx.organization.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"]((ctx.organization == null ? null : ctx.organization.tagline) ? 6 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.organization == null ? null : ctx.organization.description);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"]((ctx.organization == null ? null : ctx.organization.location) ? 10 : -1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"]((ctx.organization == null ? null : ctx.organization.focus) && (ctx.organization == null ? null : ctx.organization.focus == null ? null : ctx.organization.focus.length) ? 11 : -1);
        }
      },
      styles: [".organization[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-decoration: none;\n  padding: 2rem;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid rgba(255, 255, 255, 0.06);\n  border-radius: 6px;\n  color: var(--white);\n  transition: all 0.28s ease;\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n  box-sizing: border-box;\n  animation: _ngcontent-%COMP%_cardEntrance 0.5s ease-out backwards;\n}\n\n@keyframes _ngcontent-%COMP%_cardEntrance {\n  from { opacity: 0; transform: translateY(16px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\n.organization[_ngcontent-%COMP%]:visited, \n.organization[_ngcontent-%COMP%]:active {\n  color: var(--white);\n}\n\n.organization-logo-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1.5rem;\n  padding: 1rem;\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 4px;\n  transition: all 0.3s ease;\n}\n\n.organization[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  object-fit: contain;\n  transition: transform 0.3s ease;\n}\n\n.organization-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.organization[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: var(--white);\n  transition: color 0.3s ease;\n  text-align: center;\n}\n\n.tagline[_ngcontent-%COMP%] {\n  margin: 0 0 1rem 0;\n  font-size: 0.9rem;\n  color: var(--yellow);\n  text-align: center;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.description[_ngcontent-%COMP%] {\n  margin: 0 0 1.5rem 0;\n  font-size: 1rem;\n  line-height: 1.6;\n  color: rgba(255, 255, 255, 0.8);\n  text-align: center;\n  flex: 1;\n}\n\n.organization-meta[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n}\n\n.location[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.9rem;\n  color: rgba(255, 255, 255, 0.6);\n  transition: color 0.3s ease;\n}\n\n.location[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n\n.focus-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  justify-content: center;\n  margin-top: auto;\n}\n\n.tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.4rem 0.8rem;\n  background: rgba(253, 245, 208, 0.1);\n  border: 1px solid rgba(253, 245, 208, 0.2);\n  border-radius: 3px;\n  font-size: 0.85rem;\n  color: var(--yellow);\n  transition: all 0.3s ease;\n}\n\n.organization[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.05);\n  border-color: rgba(255, 157, 47, 0.35);\n  transform: translateY(-4px);\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(255, 157, 47, 0.1);\n}\n\n.organization[_ngcontent-%COMP%]:hover   .organization-logo-wrapper[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.07);\n}\n\n.organization[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n\n.organization[_ngcontent-%COMP%]:hover   h2[_ngcontent-%COMP%] {\n  color: var(--orange);\n}\n\n.organization[_ngcontent-%COMP%]:hover   .location[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n}\n\n.organization[_ngcontent-%COMP%]:hover   .tag[_ngcontent-%COMP%] {\n  background: rgba(253, 245, 208, 0.15);\n  border-color: var(--yellow);\n}\n\n@media only screen and (max-width: 1024px) {\n  .organization[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n\n  .organization[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 90px;\n    height: 90px;\n  }\n\n  .organization[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.35rem;\n  }\n\n  .description[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .organization[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n    margin-bottom: 0;\n    min-height: auto;\n  }\n\n  .organization-logo-wrapper[_ngcontent-%COMP%] {\n    margin-bottom: 1.25rem;\n  }\n\n  .organization[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 80px;\n  }\n\n  .organization[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n    margin-bottom: 0.75rem;\n  }\n\n  .tagline[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n    margin-bottom: 0.85rem;\n  }\n\n  .description[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n    margin-bottom: 1.25rem;\n    line-height: 1.5;\n  }\n\n  .organization-meta[_ngcontent-%COMP%] {\n    margin-bottom: 0.85rem;\n  }\n\n  .tag[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    padding: 0.35rem 0.7rem;\n  }\n}\n\n@media only screen and (max-width: 480px) {\n  .organization[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n    min-height: auto;\n  }\n\n  .organization-logo-wrapper[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n    padding: 0.75rem;\n  }\n\n  .organization[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 70px;\n    height: 70px;\n  }\n\n  .organization[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.15rem;\n    margin-bottom: 0.6rem;\n  }\n\n  .tagline[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    margin-bottom: 0.75rem;\n  }\n\n  .description[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n    line-height: 1.5;\n    margin-bottom: 1rem;\n  }\n\n  .organization-meta[_ngcontent-%COMP%] {\n    margin-bottom: 0.75rem;\n  }\n\n  .focus-tags[_ngcontent-%COMP%] {\n    gap: 0.4rem;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvb3JnYW5pemF0aW9ucy9vcmdhbml6YXRpb24taW5mby9vcmdhbml6YXRpb24taW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLHFDQUFxQztFQUNyQywyQ0FBMkM7RUFDM0Msa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLE9BQU8sVUFBVSxFQUFFLDJCQUEyQixFQUFFO0VBQ2hELEtBQUssVUFBVSxFQUFFLHdCQUF3QixFQUFFO0FBQzdDOztBQUVBOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsK0JBQStCO0VBQy9CLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixvQ0FBb0M7RUFDcEMsMENBQTBDO0VBQzFDLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxzQ0FBc0M7RUFDdEMsMkJBQTJCO0VBQzNCLDhFQUE4RTtBQUNoRjs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQywyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsdUJBQXVCO0VBQ3pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5vcmdhbml6YXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNik7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjhzIGVhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBhbmltYXRpb246IGNhcmRFbnRyYW5jZSAwLjVzIGVhc2Utb3V0IGJhY2t3YXJkcztcbn1cblxuQGtleWZyYW1lcyBjYXJkRW50cmFuY2Uge1xuICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE2cHgpOyB9XG4gIHRvIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG59XG5cbi5vcmdhbml6YXRpb246dmlzaXRlZCxcbi5vcmdhbml6YXRpb246YWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cblxuLm9yZ2FuaXphdGlvbi1sb2dvLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbi5vcmdhbml6YXRpb24gaW1nIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xufVxuXG4ub3JnYW5pemF0aW9uLWNvbnRlbnQge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ub3JnYW5pemF0aW9uIGgyIHtcbiAgbWFyZ2luOiAwIDAgMC41cmVtIDA7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRhZ2xpbmUge1xuICBtYXJnaW46IDAgMCAxcmVtIDA7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogdmFyKC0teWVsbG93KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogMCAwIDEuNXJlbSAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmxleDogMTtcbn1cblxuLm9yZ2FuaXphdGlvbi1tZXRhIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbn1cblxuLmxvY2F0aW9uIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC40cmVtO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xufVxuXG4ubG9jYXRpb24gc3ZnIHtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5mb2N1cy10YWdzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDAuNXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IGF1dG87XG59XG5cbi50YWcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAuNHJlbSAwLjhyZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMjUzLCAyNDUsIDIwOCwgMC4xKTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTMsIDI0NSwgMjA4LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgY29sb3I6IHZhcigtLXllbGxvdyk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbi5vcmdhbml6YXRpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAxNTcsIDQ3LCAwLjM1KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xuICBib3gtc2hhZG93OiAwIDEycHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMzUpLCAwIDAgMCAxcHggcmdiYSgyNTUsIDE1NywgNDcsIDAuMSk7XG59XG5cbi5vcmdhbml6YXRpb246aG92ZXIgLm9yZ2FuaXphdGlvbi1sb2dvLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDcpO1xufVxuXG4ub3JnYW5pemF0aW9uOmhvdmVyIGltZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbi5vcmdhbml6YXRpb246aG92ZXIgaDIge1xuICBjb2xvcjogdmFyKC0tb3JhbmdlKTtcbn1cblxuLm9yZ2FuaXphdGlvbjpob3ZlciAubG9jYXRpb24ge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xufVxuXG4ub3JnYW5pemF0aW9uOmhvdmVyIC50YWcge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1MywgMjQ1LCAyMDgsIDAuMTUpO1xuICBib3JkZXItY29sb3I6IHZhcigtLXllbGxvdyk7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5vcmdhbml6YXRpb24ge1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgfVxuXG4gIC5vcmdhbml6YXRpb24gaW1nIHtcbiAgICB3aWR0aDogOTBweDtcbiAgICBoZWlnaHQ6IDkwcHg7XG4gIH1cblxuICAub3JnYW5pemF0aW9uIGgyIHtcbiAgICBmb250LXNpemU6IDEuMzVyZW07XG4gIH1cblxuICAuZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5vcmdhbml6YXRpb24ge1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gIH1cblxuICAub3JnYW5pemF0aW9uLWxvZ28td3JhcHBlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgfVxuXG4gIC5vcmdhbml6YXRpb24gaW1nIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gIH1cblxuICAub3JnYW5pemF0aW9uIGgzIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgfVxuXG4gIC50YWdsaW5lIHtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC44NXJlbTtcbiAgfVxuXG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICB9XG5cbiAgLm9yZ2FuaXphdGlvbi1tZXRhIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjg1cmVtO1xuICB9XG5cbiAgLnRhZyB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgcGFkZGluZzogMC4zNXJlbSAwLjdyZW07XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAub3JnYW5pemF0aW9uIHtcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xuICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gIH1cblxuICAub3JnYW5pemF0aW9uLWxvZ28td3JhcHBlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICB9XG5cbiAgLm9yZ2FuaXphdGlvbiBpbWcge1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgfVxuXG4gIC5vcmdhbml6YXRpb24gaDMge1xuICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjZyZW07XG4gIH1cblxuICAudGFnbGluZSB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgfVxuXG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuXG4gIC5vcmdhbml6YXRpb24tbWV0YSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgfVxuXG4gIC5mb2N1cy10YWdzIHtcbiAgICBnYXA6IDAuNHJlbTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ },

/***/ 5028
/*!***************************************************************************!*\
  !*** ./src/app/features/organizations/organization-repository.service.ts ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrganizationRepositoryService: () => (/* binding */ OrganizationRepositoryService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4363);

class OrganizationRepositoryService {
  fetchOrganizations() {
    return [{
      name: 'JoKot',
      tagline: 'Fundacja na rzecz kotów',
      description: 'Zajmujemy się zapewnieniem bezdomnym kotom bezpiecznego miejsca, opieki weterynaryjnej i znalezieniem nowych domów',
      webPage: 'http://jokot.pl/',
      logo: 'jokot.png',
      location: 'Polska',
      focus: ['koty', 'adopcje', 'leczenie']
    }, {
      name: 'Rasowy kundel',
      tagline: 'Pomagamy psom znaleźć dom',
      description: 'Fundacja ratująca bezdomne i porzucone psy, zapewniająca im opiekę i szukająca odpowiedzialnych opiekunów',
      webPage: 'https://rasowykundel.pl/',
      logo: 'rasowykundel.jpeg',
      location: 'Warszawa',
      focus: ['psy', 'adopcje', 'edukacja']
    }, {
      name: 'Buy Me a Coffee',
      tagline: 'Wsparcie',
      description: 'Podoba Ci się ta strona? Postaw mi kawę — to najlepsza motywacja do dalszego tworzenia!',
      webPage: 'https://buymeacoffee.com/tasior',
      logo: 'buymeacoffee.svg',
      location: 'Internet',
      focus: ['wsparcie', 'kawa']
    }, {
      name: 'Schronisko w Celestynowie',
      tagline: 'TOZ Schronisko',
      description: 'Schronisko dla bezdomnych zwierząt prowadzone przez Towarzystwo Opieki nad Zwierzętami',
      webPage: 'https://celestyniaki.pl/',
      logo: 'default.png',
      location: 'Celestynów',
      focus: ['psy', 'koty', 'schronisko']
    }, {
      name: 'Schronisko na Paluchu',
      tagline: 'Jedno z największych schronisk w Polsce',
      description: 'Część miejskiego systemu opieki nad zwierzętami. Regularne adopcje, programy wolontariackie i zmodernizowana infrastruktura poprawiająca warunki życia zwierząt.',
      webPage: 'https://napaluchu.waw.pl/',
      logo: 'paluchu.png',
      location: 'Warszawa',
      focus: ['psy', 'koty', 'schronisko', 'adopcje', 'wolontariat']
    }, {
      name: 'Schronisko w Korabiewicach',
      tagline: 'Fundacja Viva!',
      description: 'Bardzo dobre opinie wśród wolontariuszy. Duża liczba zwierząt uratowanych z trudnych warunków — jedno z bardziej znanych prywatnych schronisk w regionie.',
      webPage: 'https://schronisko.info.pl/',
      logo: 'korabiewice.png',
      location: 'Korabiewice, Mazowsze',
      focus: ['psy', 'koty', 'schronisko', 'ratownictwo']
    }, {
      name: 'Krakowskie Towarzystwo Opieki nad Zwierzętami',
      tagline: 'Schronisko dla Bezdomnych Zwierząt',
      description: 'Prowadzone przez organizację z długą tradycją. Aktywne programy adopcyjne, wysoka liczba pozytywnych opinii i duża aktywność wolontariatu.',
      webPage: 'https://www.schronisko.krakow.pl/',
      logo: 'ktoz.gif',
      location: 'Kraków',
      focus: ['psy', 'koty', 'schronisko', 'adopcje', 'wolontariat']
    }, {
      name: 'Schronisko „Promyk"',
      tagline: 'Schronisko dla Bezdomnych Zwierząt',
      description: 'Dobrze zorganizowane adopcje i silne wsparcie lokalnej społeczności. Duża liczba uratowanych zwierząt rocznie.',
      webPage: 'https://schroniskopromyk.pl/',
      logo: 'promyk.jpg',
      location: 'Gdańsk',
      focus: ['psy', 'koty', 'schronisko', 'adopcje']
    }, {
      name: 'Schronisko dla Zwierząt w Poznaniu',
      tagline: 'Miejskie schronisko',
      description: 'Stabilna działalność miejska z dużą liczbą adopcji. Rozbudowana opieka weterynaryjna i aktywny wolontariat.',
      webPage: 'https://schronisko.com/',
      logo: 'poznan.svg',
      location: 'Poznań',
      focus: ['psy', 'koty', 'schronisko', 'adopcje', 'weterynaria']
    }];
  }
  static {
    this.ɵfac = function OrganizationRepositoryService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OrganizationRepositoryService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: OrganizationRepositoryService,
      factory: OrganizationRepositoryService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ },

/***/ 6778
/*!*******************************************************************!*\
  !*** ./src/app/features/organizations/organizations.component.ts ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrganizationsComponent: () => (/* binding */ OrganizationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _organization_repository_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./organization-repository.service */ 5028);
/* harmony import */ var _core_seo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/seo.service */ 2296);
/* harmony import */ var _organization_info_organization_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./organization-info/organization-info.component */ 4961);




function OrganizationsComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-organization-info", 4);
  }
  if (rf & 2) {
    const organization_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("organization", organization_r1);
  }
}
class OrganizationsComponent {
  constructor(organizationRepository, seo) {
    this.organizationRepository = organizationRepository;
    this.seo = seo;
    this.organizations = new Array();
  }
  ngOnInit() {
    this.organizations = this.organizationRepository.fetchOrganizations();
    this.seo.update({
      title: 'Organizacje dla Zwierząt w Polsce',
      description: 'Lista polskich organizacji i schronisk, które warto wspierać. Pomóż zwierzętom – adoptuj, wolontariuj lub przekaż darowiznę.'
    });
  }
  static {
    this.ɵfac = function OrganizationsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || OrganizationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_organization_repository_service__WEBPACK_IMPORTED_MODULE_1__.OrganizationRepositoryService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_seo_service__WEBPACK_IMPORTED_MODULE_2__.SeoService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrganizationsComponent,
      selectors: [["app-organizations"]],
      standalone: false,
      decls: 10,
      vars: 0,
      consts: [[1, "org-hero"], [1, "org-hero-icon"], [1, "org-hero-sub"], [1, "organizations-container"], [3, "organization"]],
      template: function OrganizationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\uD83D\uDC3E");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Organizacje i miejsca, kt\u00F3re warto wspiera\u0107");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Razem mo\u017Cemy wi\u0119cej \u2014 wspieraj tych, kt\u00F3rzy pomagaj\u0105 zwierz\u0119tom");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](8, OrganizationsComponent_For_9_Template, 1, 1, "app-organization-info", 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.organizations);
        }
      },
      dependencies: [_organization_info_organization_info_component__WEBPACK_IMPORTED_MODULE_3__.OrganizationInfoComponent],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  padding: 0 0 4rem;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.org-hero[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem 2rem 1.5rem;\n  margin: 0 0 1.5rem;\n  position: relative;\n  overflow: hidden;\n  border-bottom: 1px solid rgba(255, 157, 47, 0.1);\n  background: radial-gradient(ellipse at 50% 0%, rgba(255, 157, 47, 0.08) 0%, transparent 70%);\n  animation: _ngcontent-%COMP%_heroFadeIn 0.6s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_heroFadeIn {\n  from { opacity: 0; transform: translateY(-10px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\n.org-hero-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 0.75rem;\n  display: inline-block;\n  animation: _ngcontent-%COMP%_iconFloatGlow 2.8s ease-in-out infinite;\n}\n\n@keyframes _ngcontent-%COMP%_iconFloatGlow {\n  0%, 100% {\n    transform: translateY(0) scale(1);\n    filter: drop-shadow(0 0 0px rgba(255, 157, 47, 0));\n  }\n  50% {\n    transform: translateY(-8px) scale(1.08);\n    filter: drop-shadow(0 0 14px rgba(255, 157, 47, 0.7));\n  }\n}\n\nh1[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display\", serif;\n  font-size: 2.5rem;\n  font-weight: 600;\n  margin: 0 auto 0.75rem;\n  max-width: 700px;\n  line-height: 1.3;\n  background: linear-gradient(135deg, #ff9d2f 0%, #ffb700 50%, #d4aa48 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  background-size: 200% auto;\n  animation: _ngcontent-%COMP%_shimmer 3s ease-in-out infinite;\n}\n\n@keyframes _ngcontent-%COMP%_shimmer {\n  0%, 100% { background-position: 0% center; }\n  50% { background-position: 100% center; }\n}\n\n.org-hero-sub[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 0.95rem;\n  margin: 0;\n  letter-spacing: 0.3px;\n}\n\n.organizations-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 1.5rem 3rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(min(320px, 100%), 1fr));\n  gap: 2rem;\n  box-sizing: border-box;\n}\n\n@media only screen and (max-width: 1024px) {\n  .organizations-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(min(280px, 100%), 1fr));\n    gap: 1.5rem;\n    padding: 0 1rem 2rem;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .organizations-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n    padding: 0 1rem 2.5rem;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n\n  .org-hero[_ngcontent-%COMP%] {\n    padding: 1.5rem 1rem 1.25rem;\n  }\n\n  .org-hero-icon[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n\n  .org-hero-sub[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n}\n\n@media only screen and (max-width: 480px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n\n  .organizations-container[_ngcontent-%COMP%] {\n    padding: 0 0.75rem 2rem;\n  }\n\n  .org-hero[_ngcontent-%COMP%] {\n    padding: 1.25rem 0.75rem 1rem;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvb3JnYW5pemF0aW9ucy9vcmdhbml6YXRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdEQUFnRDtFQUNoRCw0RkFBNEY7RUFDNUYsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsT0FBTyxVQUFVLEVBQUUsNEJBQTRCLEVBQUU7RUFDakQsS0FBSyxVQUFVLEVBQUUsd0JBQXdCLEVBQUU7QUFDN0M7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRTtJQUNFLGlDQUFpQztJQUNqQyxrREFBa0Q7RUFDcEQ7RUFDQTtJQUNFLHVDQUF1QztJQUN2QyxxREFBcUQ7RUFDdkQ7QUFDRjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLDBFQUEwRTtFQUMxRSw2QkFBNkI7RUFDN0Isb0NBQW9DO0VBQ3BDLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsV0FBVyw4QkFBOEIsRUFBRTtFQUMzQyxNQUFNLGdDQUFnQyxFQUFFO0FBQzFDOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHVFQUF1RTtFQUN2RSxTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0U7SUFDRSx1RUFBdUU7SUFDdkUsV0FBVztJQUNYLG9CQUFvQjtFQUN0QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLDZCQUE2QjtFQUMvQjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMCAwIDRyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ub3JnLWhlcm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJyZW0gMnJlbSAxLjVyZW07XG4gIG1hcmdpbjogMCAwIDEuNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDE1NywgNDcsIDAuMSk7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IDUwJSAwJSwgcmdiYSgyNTUsIDE1NywgNDcsIDAuMDgpIDAlLCB0cmFuc3BhcmVudCA3MCUpO1xuICBhbmltYXRpb246IGhlcm9GYWRlSW4gMC42cyBlYXNlLW91dDtcbn1cblxuQGtleWZyYW1lcyBoZXJvRmFkZUluIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7IH1cbiAgdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbn1cblxuLm9yZy1oZXJvLWljb24ge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBhbmltYXRpb246IGljb25GbG9hdEdsb3cgMi44cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBpY29uRmxvYXRHbG93IHtcbiAgMCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAwcHggcmdiYSgyNTUsIDE1NywgNDcsIDApKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KSBzY2FsZSgxLjA4KTtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAxNHB4IHJnYmEoMjU1LCAxNTcsIDQ3LCAwLjcpKTtcbiAgfVxufVxuXG5oMSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIiwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDAgYXV0byAwLjc1cmVtO1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmY5ZDJmIDAlLCAjZmZiNzAwIDUwJSwgI2Q0YWE0OCAxMDAlKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgYXV0bztcbiAgYW5pbWF0aW9uOiBzaGltbWVyIDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNoaW1tZXIge1xuICAwJSwgMTAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IDAlIGNlbnRlcjsgfVxuICA1MCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIGNlbnRlcjsgfVxufVxuXG4ub3JnLWhlcm8tc3ViIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBtYXJnaW46IDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbn1cblxuLm9yZ2FuaXphdGlvbnMtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDEuNXJlbSAzcmVtO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heChtaW4oMzIwcHgsIDEwMCUpLCAxZnIpKTtcbiAgZ2FwOiAycmVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAub3JnYW5pemF0aW9ucy1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KG1pbigyODBweCwgMTAwJSksIDFmcikpO1xuICAgIGdhcDogMS41cmVtO1xuICAgIHBhZGRpbmc6IDAgMXJlbSAycmVtO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm9yZ2FuaXphdGlvbnMtY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6IDEuNXJlbTtcbiAgICBwYWRkaW5nOiAwIDFyZW0gMi41cmVtO1xuICB9XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuXG4gIC5vcmctaGVybyB7XG4gICAgcGFkZGluZzogMS41cmVtIDFyZW0gMS4yNXJlbTtcbiAgfVxuXG4gIC5vcmctaGVyby1pY29uIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cblxuICAub3JnLWhlcm8tc3ViIHtcbiAgICBmb250LXNpemU6IDAuODVyZW07XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICBoMSB7XG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICB9XG5cbiAgLm9yZ2FuaXphdGlvbnMtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwIDAuNzVyZW0gMnJlbTtcbiAgfVxuXG4gIC5vcmctaGVybyB7XG4gICAgcGFkZGluZzogMS4yNXJlbSAwLjc1cmVtIDFyZW07XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ },

/***/ 540
/*!*****************************************************************!*\
  !*** ./src/app/features/welcome-page/welcome-page.component.ts ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WelcomePageComponent: () => (/* binding */ WelcomePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _core_seo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/seo.service */ 2296);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 6264);



class WelcomePageComponent {
  constructor(seo) {
    this.seo = seo;
  }
  ngOnInit() {
    this.seo.update({
      title: 'Gustaw – Portal o Kotach',
      description: 'Gustaw – wszystko o kotach. Kalkulator karmienia, artykuły o zdrowiu i diecie oraz polskie organizacje pomocowe dla zwierząt.'
    });
    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Gustaw',
      'url': 'https://gorczykowski.github.io/gustaw/',
      'description': 'Portal o kotach – kalkulator karmienia, artykuły i katalog organizacji pomocowych.',
      'inLanguage': 'pl'
    });
  }
  static {
    this.ɵfac = function WelcomePageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || WelcomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_seo_service__WEBPACK_IMPORTED_MODULE_1__.SeoService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WelcomePageComponent,
      selectors: [["app-welcome-page"]],
      standalone: false,
      decls: 53,
      vars: 0,
      consts: [[1, "welcome-hero"], ["aria-hidden", "true", 1, "hero-decoration"], [1, "deco-paw", "deco-1"], [1, "deco-paw", "deco-2"], [1, "deco-paw", "deco-3"], [1, "hero-content"], [1, "hero-title"], [1, "title-main"], [1, "title-sub"], [1, "hero-description"], [1, "main-page-menu"], ["routerLink", "/kalkulator", 1, "menu-card"], [1, "card-image-wrapper"], ["src", "assets/2.jpeg", "alt", "Kalkulator", "loading", "lazy"], [1, "card-content"], [1, "card-badge"], [1, "card-arrow"], ["routerLink", "/blog", 1, "menu-card"], ["src", "assets/3.jpeg", "alt", "Do czytania", "loading", "lazy"], ["routerLink", "/warto-wspierac", 1, "menu-card"], ["src", "assets/4.jpeg", "alt", "Warto wspiera\u0107", "loading", "lazy"]],
      template: function WelcomePageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\uD83D\uDC3E");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\uD83D\uDC3E");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\uD83D\uDC3E");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5)(9, "h1", 6)(10, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Gustaw \u2014 kocie rzeczy");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Wiedza i narz\u0119dzia dla ka\u017Cdego w\u0142a\u015Bciciela kota");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Tw\u00F3j przewodnik po kocim \u015Bwiecie \u2014 oblicz zapotrzebowanie kaloryczne pupila, czytaj sprawdzone artyku\u0142y i wspieraj organizacje, kt\u00F3re pomagaj\u0105 zwierz\u0119tom w potrzebie. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10)(17, "a", 11)(18, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14)(21, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u2696\uFE0F Narz\u0119dzia");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Kalkulator kalorii");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Oblicz dzienne zapotrzebowanie kaloryczne, porcje karmy i nawodnienie \u2014 dopasowane do Twojego kota.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Oblicz teraz \u2192");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 17)(30, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14)(33, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\uD83D\uDCD6 Artyku\u0142y");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Do Poczytania");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Sprawdzone artyku\u0142y o \u017Cywieniu, zdrowiu i zachowaniu kot\u00F3w \u2014 pisane z pasj\u0105 i trosk\u0105.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Czytaj artyku\u0142y \u2192");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 19)(42, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14)(45, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u2764\uFE0F Wsparcie");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Warto Wspiera\u0107");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Organizacje, schroniska i fundacje w Polsce, kt\u00F3re pomagaj\u0105 zwierz\u0119tom \u2014 i potrzebuj\u0105 Ciebie.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Zobacz organizacje \u2192");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: [".welcome-hero[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 2rem;\n  margin-bottom: 3rem;\n  animation: _ngcontent-%COMP%_fadeInUp 0.8s ease-out;\n  position: relative;\n  overflow: hidden;\n}\n\n.welcome-hero[_ngcontent-%COMP%]::before, \n.welcome-hero[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  z-index: 0;\n}\n\n.welcome-hero[_ngcontent-%COMP%]::before {\n  width: 500px;\n  height: 500px;\n  background: radial-gradient(circle, rgba(255, 157, 47, 0.08) 0%, transparent 70%);\n  top: -180px;\n  left: -100px;\n  animation: _ngcontent-%COMP%_orbPulse1 11s ease-in-out infinite;\n}\n\n.welcome-hero[_ngcontent-%COMP%]::after {\n  width: 380px;\n  height: 380px;\n  background: radial-gradient(circle, rgba(255, 183, 0, 0.06) 0%, transparent 70%);\n  bottom: -100px;\n  right: -80px;\n  animation: _ngcontent-%COMP%_orbPulse2 9s ease-in-out infinite;\n}\n\n@keyframes _ngcontent-%COMP%_orbPulse1 {\n  0%, 100% { transform: scale(1) translate(0, 0); }\n  50% { transform: scale(1.25) translate(50px, 25px); }\n}\n\n@keyframes _ngcontent-%COMP%_orbPulse2 {\n  0%, 100% { transform: scale(1) translate(0, 0); }\n  50% { transform: scale(1.2) translate(-35px, -20px); }\n}\n\n.hero-decoration[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  z-index: 0;\n}\n\n.deco-paw[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0.07;\n  animation: _ngcontent-%COMP%_pawDrift 7s ease-in-out infinite;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.deco-1[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  top: 12%;\n  left: 7%;\n  animation-delay: 0s;\n}\n\n.deco-2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  top: 55%;\n  right: 6%;\n  animation-delay: 2.5s;\n  animation-duration: 8s;\n}\n\n.deco-3[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  bottom: 8%;\n  left: 28%;\n  animation-delay: 5s;\n  animation-duration: 6.5s;\n}\n\n@keyframes _ngcontent-%COMP%_pawDrift {\n  0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.07; }\n  50% { transform: translateY(-14px) rotate(12deg); opacity: 0.13; }\n}\n\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.hero-content[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  position: relative;\n  z-index: 1;\n}\n\n.hero-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin-bottom: 1.5rem;\n}\n\n.title-main[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display\", serif;\n  font-size: 2.8rem;\n  font-weight: 700;\n  background: linear-gradient(135deg, #ff9d2f 0%, #ffcc44 50%, #e8b84b 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  animation: _ngcontent-%COMP%_shimmer 3s ease-in-out infinite;\n  background-size: 200% auto;\n  line-height: 1.15;\n}\n\n@keyframes _ngcontent-%COMP%_shimmer {\n  0%, 100% {\n    background-position: 0% center;\n  }\n  50% {\n    background-position: 100% center;\n  }\n}\n\n.title-sub[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: rgba(255, 255, 255, 0.55);\n  font-weight: 300;\n  letter-spacing: 0.5px;\n}\n\n.hero-description[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  color: rgba(255, 255, 255, 0.72);\n  line-height: 1.75;\n  margin-bottom: 0;\n  max-width: 640px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.main-page-menu[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 1.75rem;\n  padding: 0 2rem 3rem;\n  max-width: 1200px;\n  margin: 0 auto 3rem;\n  align-items: stretch;\n}\n\n.menu-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-decoration: none;\n  background: rgba(255, 255, 255, 0.03);\n  border-radius: 6px;\n  overflow: hidden;\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  transition: all 0.3s ease;\n  position: relative;\n  animation: _ngcontent-%COMP%_cardFadeIn 0.6s ease-out backwards;\n  height: 100%;\n}\n\n.menu-card[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0.1s;\n}\n\n.menu-card[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.2s;\n}\n\n.menu-card[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.3s;\n}\n\n@keyframes _ngcontent-%COMP%_cardFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.menu-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  border-color: rgba(255, 157, 47, 0.35);\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 157, 47, 0.1);\n  background: rgba(255, 255, 255, 0.06);\n}\n\n.card-image-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 250px;\n  overflow: hidden;\n}\n\n.card-image-wrapper[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 50%;\n  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);\n  pointer-events: none;\n  z-index: 1;\n}\n\n.card-image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  filter: brightness(0.75) sepia(20%);\n  transition: all 0.5s ease;\n}\n\n.menu-card[_ngcontent-%COMP%]:hover   .card-image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  filter: brightness(1) sepia(0%);\n  transform: scale(1.1);\n}\n\n.card-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(135deg, rgba(255, 157, 47, 0.3), rgba(0, 0, 0, 0.5));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.4s ease;\n}\n\n.menu-card[_ngcontent-%COMP%]:hover   .card-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.card-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  animation: _ngcontent-%COMP%_iconBounce 0.6s ease;\n}\n\n@keyframes _ngcontent-%COMP%_iconBounce {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n}\n\n.card-content[_ngcontent-%COMP%] {\n  padding: 1.5rem 1.75rem;\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n.card-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.72rem;\n  font-weight: 600;\n  letter-spacing: 0.8px;\n  text-transform: uppercase;\n  color: rgba(255, 183, 0, 0.75);\n  margin-bottom: 0.6rem;\n}\n\n.card-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Playfair Display\", serif;\n  color: #f0e6c8;\n  font-size: 1.35rem;\n  font-weight: 600;\n  margin: 0 0 0.6rem;\n  letter-spacing: 0.2px;\n  line-height: 1.3;\n  transition: color 0.3s ease;\n}\n\n.menu-card[_ngcontent-%COMP%]:hover   .card-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #ffb700;\n}\n\n.card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 0.95rem;\n  margin: 0 0 1rem;\n  line-height: 1.65;\n  flex: 1;\n}\n\n.card-arrow[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.78rem;\n  font-weight: 600;\n  letter-spacing: 0.4px;\n  color: var(--orange);\n  opacity: 0;\n  transform: translateX(-8px);\n  transition: all 0.3s ease;\n  text-transform: uppercase;\n  margin-top: auto;\n}\n\n.menu-card[_ngcontent-%COMP%]:hover   .card-arrow[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(0);\n}\n\n@media only screen and (max-width: 700px) {\n  .title-main[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n\n  .title-sub[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n\n  .hero-description[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n\n  .main-page-menu[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n    padding: 1rem;\n  }\n\n  .card-image-wrapper[_ngcontent-%COMP%] {\n    height: 200px;\n  }\n\n  .welcome-hero[_ngcontent-%COMP%] {\n    padding: 2rem 1rem;\n  }\n}\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvd2VsY29tZS1wYWdlL3dlbGNvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUZBQWlGO0VBQ2pGLFdBQVc7RUFDWCxZQUFZO0VBQ1osNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixnRkFBZ0Y7RUFDaEYsY0FBYztFQUNkLFlBQVk7RUFDWiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxXQUFXLG1DQUFtQyxFQUFFO0VBQ2hELE1BQU0sNENBQTRDLEVBQUU7QUFDdEQ7O0FBRUE7RUFDRSxXQUFXLG1DQUFtQyxFQUFFO0VBQ2hELE1BQU0sNkNBQTZDLEVBQUU7QUFDdkQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLG9CQUFvQjtFQUNwQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDJDQUEyQztFQUMzQyx5QkFBaUI7VUFBakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFFBQVE7RUFDUixRQUFRO0VBQ1IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsU0FBUztFQUNULG1CQUFtQjtFQUNuQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxXQUFXLHFDQUFxQyxFQUFFLGFB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QUFnQjtFQUNoQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLE9BQU87QUFDVDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWhlcm8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDRyZW0gMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgYW5pbWF0aW9uOiBmYWRlSW5VcCAwLjhzIGVhc2Utb3V0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi53ZWxjb21lLWhlcm86OmJlZm9yZSxcbi53ZWxjb21lLWhlcm86OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgei1pbmRleDogMDtcbn1cblxuLndlbGNvbWUtaGVybzo6YmVmb3JlIHtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDI1NSwgMTU3LCA0NywgMC4wOCkgMCUsIHRyYW5zcGFyZW50IDcwJSk7XG4gIHRvcDogLTE4MHB4O1xuICBsZWZ0OiAtMTAwcHg7XG4gIGFuaW1hdGlvbjogb3JiUHVsc2UxIDExcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuLndlbGNvbWUtaGVybzo6YWZ0ZXIge1xuICB3aWR0aDogMzgwcHg7XG4gIGhlaWdodDogMzgwcHg7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMjU1LCAxODMsIDAsIDAuMDYpIDAlLCB0cmFuc3BhcmVudCA3MCUpO1xuICBib3R0b206IC0xMDBweDtcbiAgcmlnaHQ6IC04MHB4O1xuICBhbmltYXRpb246IG9yYlB1bHNlMiA5cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBvcmJQdWxzZTEge1xuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlKDAsIDApOyB9XG4gIDUwJSB7IHRyYW5zZm9ybTogc2NhbGUoMS4yNSkgdHJhbnNsYXRlKDUwcHgsIDI1cHgpOyB9XG59XG5cbkBrZXlmcmFtZXMgb3JiUHVsc2UyIHtcbiAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZSgwLCAwKTsgfVxuICA1MCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMikgdHJhbnNsYXRlKC0zNXB4LCAtMjBweCk7IH1cbn1cblxuLmhlcm8tZGVjb3JhdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB6LWluZGV4OiAwO1xufVxuXG4uZGVjby1wYXcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDAuMDc7XG4gIGFuaW1hdGlvbjogcGF3RHJpZnQgN3MgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uZGVjby0xIHtcbiAgZm9udC1zaXplOiAzLjVyZW07XG4gIHRvcDogMTIlO1xuICBsZWZ0OiA3JTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcbn1cblxuLmRlY28tMiB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgdG9wOiA1NSU7XG4gIHJpZ2h0OiA2JTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAyLjVzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDhzO1xufVxuXG4uZGVjby0zIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGJvdHRvbTogOCU7XG4gIGxlZnQ6IDI4JTtcbiAgYW5pbWF0aW9uLWRlbGF5OiA1cztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA2LjVzO1xufVxuXG5Aa2V5ZnJhbWVzIHBhd0RyaWZ0IHtcbiAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDBkZWcpOyBvcGFjaXR5OiAwLjA3OyB9XG4gIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTRweCkgcm90YXRlKDEyZGVnKTsgb3BhY2l0eTogMC4xMzsgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJblVwIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbi5oZXJvLWNvbnRlbnQge1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuXG4uaGVyby10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi50aXRsZS1tYWluIHtcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiLCBzZXJpZjtcbiAgZm9udC1zaXplOiAyLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZjlkMmYgMCUsICNmZmNjNDQgNTAlLCAjZThiODRiIDEwMCUpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIGFuaW1hdGlvbjogc2hpbW1lciAzcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xufVxuXG5Aa2V5ZnJhbWVzIHNoaW1tZXIge1xuICAwJSwgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgY2VudGVyO1xuICB9XG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSBjZW50ZXI7XG4gIH1cbn1cblxuLnRpdGxlLXN1YiB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuXG4uaGVyby1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMS4wNXJlbTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43Mik7XG4gIGxpbmUtaGVpZ2h0OiAxLjc1O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXgtd2lkdGg6IDY0MHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4ubWFpbi1wYWdlLW1lbnUge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI4MHB4LCAxZnIpKTtcbiAgZ2FwOiAxLjc1cmVtO1xuICBwYWRkaW5nOiAwIDJyZW0gM3JlbTtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvIDNyZW07XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuXG4ubWVudS1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNyk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYW5pbWF0aW9uOiBjYXJkRmFkZUluIDAuNnMgZWFzZS1vdXQgYmFja3dhcmRzO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tZW51LWNhcmQ6bnRoLWNoaWxkKDEpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xufVxuXG4ubWVudS1jYXJkOm50aC1jaGlsZCgyKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC4ycztcbn1cblxuLm1lbnUtY2FyZDpudGgtY2hpbGQoMykge1xuICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XG59XG5cbkBrZXlmcmFtZXMgY2FyZEZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuXG4ubWVudS1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAxNTcsIDQ3LCAwLjM1KTtcbiAgYm94LXNoYWRvdzogMCAxNnB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjQ1KSwgMCAwIDAgMXB4IHJnYmEoMjU1LCAxNTcsIDQ3LCAwLjEpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYpO1xufVxuXG4uY2FyZC1pbWFnZS13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNhcmQtaW1hZ2Utd3JhcHBlcjo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDUwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgwLCAwLCAwLCAwLjcpLCB0cmFuc3BhcmVudCk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB6LWluZGV4OiAxO1xufVxuXG4uY2FyZC1pbWFnZS13cmFwcGVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC43NSkgc2VwaWEoMjAlKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbn1cblxuLm1lbnUtY2FyZDpob3ZlciAuY2FyZC1pbWFnZS13cmFwcGVyIGltZyB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxKSBzZXBpYSgwJSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLmNhcmQtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDI1NSwgMTU3LCA0NywgMC4zKSwgcmdiYSgwLCAwLCAwLCAwLjUpKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlO1xufVxuXG4ubWVudS1jYXJkOmhvdmVyIC5jYXJkLW92ZXJsYXkge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uY2FyZC1pY29uIHtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBhbmltYXRpb246IGljb25Cb3VuY2UgMC42cyBlYXNlO1xufVxuXG5Aa2V5ZnJhbWVzIGljb25Cb3VuY2Uge1xuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgfVxufVxuXG4uY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMS41cmVtIDEuNzVyZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDE7XG59XG5cbi5jYXJkLWJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDAuNzJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjhweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHJnYmEoMjU1LCAxODMsIDAsIDAuNzUpO1xuICBtYXJnaW4tYm90dG9tOiAwLjZyZW07XG59XG5cbi5jYXJkLWNvbnRlbnQgaDIge1xuICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xuICBjb2xvcjogI2YwZTZjODtcbiAgZm9udC1zaXplOiAxLjM1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDAgMCAwLjZyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlO1xufVxuXG4ubWVudS1jYXJkOmhvdmVyIC5jYXJkLWNvbnRlbnQgaDIge1xuICBjb2xvcjogI2ZmYjcwMDtcbn1cblxuLmNhcmQtY29udGVudCBwIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBtYXJnaW46IDAgMCAxcmVtO1xuICBsaW5lLWhlaWdodDogMS42NTtcbiAgZmxleDogMTtcbn1cblxuLmNhcmQtYXJyb3cge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICBjb2xvcjogdmFyKC0tb3JhbmdlKTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04cHgpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tdG9wOiBhdXRvO1xufVxuXG4ubWVudS1jYXJkOmhvdmVyIC5jYXJkLWFycm93IHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC50aXRsZS1tYWluIHtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgfVxuXG4gIC50aXRsZS1zdWIge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuXG4gIC5oZXJvLWRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cblxuICAubWFpbi1wYWdlLW1lbnUge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogMS41cmVtO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gIH1cblxuICAuY2FyZC1pbWFnZS13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICB9XG5cbiAgLndlbGNvbWUtaGVybyB7XG4gICAgcGFkZGluZzogMnJlbSAxcmVtO1xuICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ },

/***/ 7669
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: true
};

/***/ },

/***/ 5312
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

/***/ },

/***/ 4429
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 4967);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ 5312);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__.AppModule, {
  applicationProviders: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.provideZoneChangeDetection)()]
}).catch(err => console.error(err));

/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map