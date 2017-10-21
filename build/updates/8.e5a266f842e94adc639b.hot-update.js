require("source-map-support").install();
exports.id = 8;
exports.modules = {

/***/ "./src/routes/home/Home.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_normalize_css__ = __webpack_require__("./node_modules/normalize.css/normalize.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_normalize_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_normalize_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_bootstrap_dist_css_bootstrap_min_css__ = __webpack_require__("./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_bootstrap_dist_css_bootstrap_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__node_modules_bootstrap_dist_css_bootstrap_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Home_css__ = __webpack_require__("./src/routes/home/Home.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Home_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Home_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__("moment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_numeral__ = __webpack_require__("numeral");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_numeral___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_numeral__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__history__ = __webpack_require__("./src/history.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Card__ = __webpack_require__("./src/components/Card/Card.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_SearchBar__ = __webpack_require__("./src/components/SearchBar/SearchBar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_transition_group_CSSTransitionGroup__ = __webpack_require__("react-transition-group/CSSTransitionGroup");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_transition_group_CSSTransitionGroup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_transition_group_CSSTransitionGroup__);
var _jsxFileName = "/var/www/moviedb/src/routes/home/Home.js";
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */




// external-global styles must be imported in your JS.











const isServer = typeof window === 'undefined';

class Home extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
  constructor({ movie }) {
    super();

    _initialiseProps.call(this);

    this.backdrop_path = movie.backdrop_path;
    this.state = { movie: movie };
  }

  componentDidMount() {
    let backdropIMG = `https://image.tmdb.org/t/p/original${this.backdrop_path}`;

    if (typeof window !== undefined) {
      document.body.style.backgroundImage = 'url(' + backdropIMG + ')';
    }
  }

  componentDidUpdate() {
    let backdropIMG = `https://image.tmdb.org/t/p/original${this.state.movie.backdrop_path}`;

    if (typeof window !== undefined) {
      document.body.style.backgroundImage = 'url(' + backdropIMG + ')';
    }
  }

  render() {
    let card = null;
    isServer ? null : card = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_Card__["a" /* default */], { movie: this.state.movie, __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    });

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { style: { position: 'relative' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "img-wrapper", __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "container-fluid", __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_SearchBar__["a" /* default */], { call: this.changeMovie, __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_11_react_transition_group_CSSTransitionGroup___default.a,
          {
            transitionName: "startup",
            transitionEnterTimeout: 1000,
            transitionLeaveTimeout: 300,
            transitionAppearTimeout: 1000,
            transitionAppear: true,
            transitionEnter: true,
            transitionLeave: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            },
            __self: this
          },
          card
        )
      )
    );
  }
}

var _initialiseProps = function () {
  this.changeMovie = movie => {
    this.setState({ movie: movie });
  };
};

Home.propTypes = {
  movie: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    backdrop_path: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired
  }).isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_2_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__node_modules_bootstrap_dist_css_bootstrap_min_css___default.a, __WEBPACK_IMPORTED_MODULE_3_normalize_css___default.a, __WEBPACK_IMPORTED_MODULE_5__Home_css___default.a)(Home));

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy84LmU1YTI2NmY4NDJlOTRhZGM2MzliLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi92YXIvd3d3L21vdmllZGIvc3JjL3JvdXRlcy9ob21lL0hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tIFwiaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXNcIjtcbi8vIGV4dGVybmFsLWdsb2JhbCBzdHlsZXMgbXVzdCBiZSBpbXBvcnRlZCBpbiB5b3VyIEpTLlxuaW1wb3J0IG5vcm1hbGl6ZUNzcyBmcm9tIFwibm9ybWFsaXplLmNzc1wiO1xuaW1wb3J0IGJvb3RzdHJhcCBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xuaW1wb3J0IHMgZnJvbSBcIi4vSG9tZS5jc3NcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IG51bWVyYWwgZnJvbSBcIm51bWVyYWxcIjtcbmltcG9ydCBoaXN0b3J5IGZyb20gXCIuLi8uLi9oaXN0b3J5XCI7XG5cbmltcG9ydCBDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ2FyZCc7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2VhcmNoQmFyJztcbmltcG9ydCBDU1NUcmFuc2l0aW9uR3JvdXAgZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cC9DU1NUcmFuc2l0aW9uR3JvdXAnO1xuXG5jb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnXG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcih7bW92aWV9KXtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5iYWNrZHJvcF9wYXRoID0gbW92aWUuYmFja2Ryb3BfcGF0aFxuICAgIHRoaXMuc3RhdGUgPSB7IG1vdmllIDogbW92aWUgfVxuICB9XG5cbiAgY2hhbmdlTW92aWUgPSAobW92aWUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbW92aWU6IG1vdmllIH0pXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIGxldCBiYWNrZHJvcElNRyA9IGBodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9vcmlnaW5hbCR7dGhpcy5iYWNrZHJvcF9wYXRofWBcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSB1bmRlZmluZWQpe1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcgKyBiYWNrZHJvcElNRyArICcpJztcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKXtcbiAgICBsZXQgYmFja2Ryb3BJTUcgPSBgaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3Avb3JpZ2luYWwke3RoaXMuc3RhdGUubW92aWUuYmFja2Ryb3BfcGF0aH1gXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gdW5kZWZpbmVkKXtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgYmFja2Ryb3BJTUcgKyAnKSc7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgbGV0IGNhcmQgPSBudWxsXG4gICAgaXNTZXJ2ZXIgPyBudWxsIDogY2FyZCA9IDxDYXJkIG1vdmllPXt0aGlzLnN0YXRlLm1vdmllfSAvPjtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOidyZWxhdGl2ZScgfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy13cmFwcGVyXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICA8U2VhcmNoQmFyIGNhbGw9e3RoaXMuY2hhbmdlTW92aWV9IC8+XG4gICAgICAgIDxDU1NUcmFuc2l0aW9uR3JvdXBcbiAgICAgICAgICB0cmFuc2l0aW9uTmFtZT1cInN0YXJ0dXBcIlxuICAgICAgICAgIHRyYW5zaXRpb25FbnRlclRpbWVvdXQ9ezEwMDB9XG4gICAgICAgICAgdHJhbnNpdGlvbkxlYXZlVGltZW91dD17MzAwfVxuICAgICAgICAgIHRyYW5zaXRpb25BcHBlYXJUaW1lb3V0PXsxMDAwfVxuICAgICAgICAgIHRyYW5zaXRpb25BcHBlYXI9e3RydWV9XG4gICAgICAgICAgdHJhbnNpdGlvbkVudGVyPXt0cnVlfVxuICAgICAgICAgIHRyYW5zaXRpb25MZWF2ZT17dHJ1ZX0+XG4gICAgICAgICAge2NhcmR9XG4gICAgICAgIDwvQ1NTVHJhbnNpdGlvbkdyb3VwPlxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkhvbWUucHJvcFR5cGVzID0ge1xuICBtb3ZpZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBiYWNrZHJvcF9wYXRoOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhib290c3RyYXAsIG5vcm1hbGl6ZUNzcywgcykoSG9tZSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yb3V0ZXMvaG9tZS9Ib21lLmpzIl0sIm1hcHBpbmdzIjoiOztBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQVJBO0FBRkE7QUFGQTtBQWlCQTtBQWpEQTtBQUNBOztBQU1BO0FBQ0E7QUFDQTs7O0FBMkNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFDQTtBQUtBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=