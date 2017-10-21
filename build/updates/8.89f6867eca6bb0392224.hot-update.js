require("source-map-support").install();
exports.id = 8;
exports.modules = {

/***/ "./node_modules/react-spinkit/dist/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _objectAssign = __webpack_require__("object-assign");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _spinners = __webpack_require__("./node_modules/react-spinkit/dist/spinners.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line import/no-extraneous-dependencies


if (!process.env.REACT_SPINKIT_NO_STYLES) {
  /* eslint-disable global-require */
  __webpack_require__("./node_modules/loaders.css/loaders.css");
  __webpack_require__("./node_modules/react-spinkit/css/base.css");
  __webpack_require__("./node_modules/react-spinkit/css/loaders-css.css");
  __webpack_require__("./node_modules/react-spinkit/css/fade-in.css");
  __webpack_require__("./node_modules/react-spinkit/css/chasing-dots.css");
  __webpack_require__("./node_modules/react-spinkit/css/circle.css");
  __webpack_require__("./node_modules/react-spinkit/css/cube-grid.css");
  __webpack_require__("./node_modules/react-spinkit/css/double-bounce.css");
  __webpack_require__("./node_modules/react-spinkit/css/folding-cube.css");
  __webpack_require__("./node_modules/react-spinkit/css/pulse.css");
  __webpack_require__("./node_modules/react-spinkit/css/rotating-plane.css");
  __webpack_require__("./node_modules/react-spinkit/css/three-bounce.css");
  __webpack_require__("./node_modules/react-spinkit/css/wandering-cubes.css");
  __webpack_require__("./node_modules/react-spinkit/css/wave.css");
  __webpack_require__("./node_modules/react-spinkit/css/wordpress.css");
  /* eslint-enable global-require */
}

var noFadeInWarning = "Deprecation Warning (react-spinkit): noFadeIn prop should be replaced with fadeIn='none'";

var Spinner = function (_React$Component) {
  _inherits(Spinner, _React$Component);

  function Spinner(props) {
    _classCallCheck(this, Spinner);

    if (props.noFadeIn) {
      console.warn(noFadeInWarning); // eslint-disable-line no-console
    }

    var _this = _possibleConstructorReturn(this, (Spinner.__proto__ || Object.getPrototypeOf(Spinner)).call(this, props));

    _this.displayName = 'SpinKit';
    return _this;
  }

  _createClass(Spinner, [{
    key: 'render',
    value: function render() {
      var _cx;

      var spinnerInfo = _spinners.allSpinners[this.props.name] || _spinners.allSpinners['three-bounce'];
      var classes = (0, _classnames2.default)((_cx = {
        'sk-fade-in': this.props.fadeIn === 'full' && !this.props.noFadeIn,
        'sk-fade-in-half-second': this.props.fadeIn === 'half' && !this.props.noFadeIn,
        'sk-fade-in-quarter-second': this.props.fadeIn === 'quarter' && !this.props.noFadeIn,
        'sk-spinner': !this.props.overrideSpinnerClassName
      }, _defineProperty(_cx, this.props.overrideSpinnerClassName, !!this.props.overrideSpinnerClassName), _defineProperty(_cx, this.props.className, !!this.props.className), _defineProperty(_cx, spinnerInfo.className || this.props.name, true), _cx));

      var props = (0, _objectAssign2.default)({}, this.props);
      delete props.name;
      delete props.fadeIn;
      delete props.noFadeIn;
      delete props.overrideSpinnerClassName;
      delete props.className;

      if (this.props.color) {
        props.style = props.style ? _extends({}, props.style, { color: this.props.color }) : { color: this.props.color };
      }

      return _react2.default.createElement(
        'div',
        _extends({}, props, { className: classes }),
        [].concat(_toConsumableArray(Array(spinnerInfo.divCount))).map(function (_, idx) {
          return _react2.default.createElement('div', { key: idx });
        })
      );
    }
  }]);

  return Spinner;
}(_react2.default.Component);

Spinner.propTypes = {
  name: _propTypes2.default.string.isRequired,
  noFadeIn: _propTypes2.default.bool,
  fadeIn: _propTypes2.default.oneOf(['full', 'half', 'quarter', 'none']),
  overrideSpinnerClassName: _propTypes2.default.string,
  className: _propTypes2.default.string,
  color: _propTypes2.default.string
};

Spinner.defaultProps = {
  name: 'three-bounce',
  noFadeIn: false,
  fadeIn: 'full',
  overrideSpinnerClassName: ''
};

module.exports = Spinner;

/***/ }),

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_spinkit__ = __webpack_require__("./node_modules/react-spinkit/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_spinkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_spinkit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Card__ = __webpack_require__("./src/components/Card/Card.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_SearchBar__ = __webpack_require__("./src/components/SearchBar/SearchBar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_transition_group_CSSTransitionGroup__ = __webpack_require__("react-transition-group/CSSTransitionGroup");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_transition_group_CSSTransitionGroup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react_transition_group_CSSTransitionGroup__);
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
    isServer ? null : card = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Card__["a" /* default */], { movie: this.state.movie, __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    });

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { style: { position: 'relative' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", { className: "img-wrapper", __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "container-fluid", __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_SearchBar__["a" /* default */], { call: this.changeMovie, __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_12_react_transition_group_CSSTransitionGroup___default.a,
          {
            transitionName: "startup",
            transitionEnterTimeout: 1000,
            transitionLeaveTimeout: 300,
            transitionAppearTimeout: 1000,
            transitionAppear: true,
            transitionEnter: true,
            transitionLeave: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 64
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy84Ljg5ZjY4NjdlY2E2YmIwMzkyMjI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi92YXIvd3d3L21vdmllZGIvbm9kZV9tb2R1bGVzL3JlYWN0LXNwaW5raXQvZGlzdC9pbmRleC5qcyIsIi92YXIvd3d3L21vdmllZGIvc3JjL3JvdXRlcy9ob21lL0hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9vYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBfb2JqZWN0QXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdEFzc2lnbik7XG5cbnZhciBfc3Bpbm5lcnMgPSByZXF1aXJlKCcuL3NwaW5uZXJzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5cblxuaWYgKCFwcm9jZXNzLmVudi5SRUFDVF9TUElOS0lUX05PX1NUWUxFUykge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBnbG9iYWwtcmVxdWlyZSAqL1xuICByZXF1aXJlKCdsb2FkZXJzLmNzcycpO1xuICByZXF1aXJlKCcuLi9jc3MvYmFzZS5jc3MnKTtcbiAgcmVxdWlyZSgnLi4vY3NzL2xvYWRlcnMtY3NzLmNzcycpO1xuICByZXF1aXJlKCcuLi9jc3MvZmFkZS1pbi5jc3MnKTtcbiAgcmVxdWlyZSgnLi4vY3NzL2NoYXNpbmctZG90cy5jc3MnKTtcbiAgcmVxdWlyZSgnLi4vY3NzL2NpcmNsZS5jc3MnKTtcbiAgcmVxdWlyZSgnLi4vY3NzL2N1YmUtZ3JpZC5jc3MnKTtcbiAgcmVxdWlyZSgnLi4vY3NzL2RvdWJsZS1ib3VuY2UuY3NzJyk7XG4gIHJlcXVpcmUoJy4uL2Nzcy9mb2xkaW5nLWN1YmUuY3NzJyk7XG4gIHJlcXVpcmUoJy4uL2Nzcy9wdWxzZS5jc3MnKTtcbiAgcmVxdWlyZSgnLi4vY3NzL3JvdGF0aW5nLXBsYW5lLmNzcycpO1xuICByZXF1aXJlKCcuLi9jc3MvdGhyZWUtYm91bmNlLmNzcycpO1xuICByZXF1aXJlKCcuLi9jc3Mvd2FuZGVyaW5nLWN1YmVzLmNzcycpO1xuICByZXF1aXJlKCcuLi9jc3Mvd2F2ZS5jc3MnKTtcbiAgcmVxdWlyZSgnLi4vY3NzL3dvcmRwcmVzcy5jc3MnKTtcbiAgLyogZXNsaW50LWVuYWJsZSBnbG9iYWwtcmVxdWlyZSAqL1xufVxuXG52YXIgbm9GYWRlSW5XYXJuaW5nID0gXCJEZXByZWNhdGlvbiBXYXJuaW5nIChyZWFjdC1zcGlua2l0KTogbm9GYWRlSW4gcHJvcCBzaG91bGQgYmUgcmVwbGFjZWQgd2l0aCBmYWRlSW49J25vbmUnXCI7XG5cbnZhciBTcGlubmVyID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFNwaW5uZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFNwaW5uZXIocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3Bpbm5lcik7XG5cbiAgICBpZiAocHJvcHMubm9GYWRlSW4pIHtcbiAgICAgIGNvbnNvbGUud2Fybihub0ZhZGVJbldhcm5pbmcpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICB9XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoU3Bpbm5lci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFNwaW5uZXIpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5kaXNwbGF5TmFtZSA9ICdTcGluS2l0JztcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoU3Bpbm5lciwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX2N4O1xuXG4gICAgICB2YXIgc3Bpbm5lckluZm8gPSBfc3Bpbm5lcnMuYWxsU3Bpbm5lcnNbdGhpcy5wcm9wcy5uYW1lXSB8fCBfc3Bpbm5lcnMuYWxsU3Bpbm5lcnNbJ3RocmVlLWJvdW5jZSddO1xuICAgICAgdmFyIGNsYXNzZXMgPSAoMCwgX2NsYXNzbmFtZXMyLmRlZmF1bHQpKChfY3ggPSB7XG4gICAgICAgICdzay1mYWRlLWluJzogdGhpcy5wcm9wcy5mYWRlSW4gPT09ICdmdWxsJyAmJiAhdGhpcy5wcm9wcy5ub0ZhZGVJbixcbiAgICAgICAgJ3NrLWZhZGUtaW4taGFsZi1zZWNvbmQnOiB0aGlzLnByb3BzLmZhZGVJbiA9PT0gJ2hhbGYnICYmICF0aGlzLnByb3BzLm5vRmFkZUluLFxuICAgICAgICAnc2stZmFkZS1pbi1xdWFydGVyLXNlY29uZCc6IHRoaXMucHJvcHMuZmFkZUluID09PSAncXVhcnRlcicgJiYgIXRoaXMucHJvcHMubm9GYWRlSW4sXG4gICAgICAgICdzay1zcGlubmVyJzogIXRoaXMucHJvcHMub3ZlcnJpZGVTcGlubmVyQ2xhc3NOYW1lXG4gICAgICB9LCBfZGVmaW5lUHJvcGVydHkoX2N4LCB0aGlzLnByb3BzLm92ZXJyaWRlU3Bpbm5lckNsYXNzTmFtZSwgISF0aGlzLnByb3BzLm92ZXJyaWRlU3Bpbm5lckNsYXNzTmFtZSksIF9kZWZpbmVQcm9wZXJ0eShfY3gsIHRoaXMucHJvcHMuY2xhc3NOYW1lLCAhIXRoaXMucHJvcHMuY2xhc3NOYW1lKSwgX2RlZmluZVByb3BlcnR5KF9jeCwgc3Bpbm5lckluZm8uY2xhc3NOYW1lIHx8IHRoaXMucHJvcHMubmFtZSwgdHJ1ZSksIF9jeCkpO1xuXG4gICAgICB2YXIgcHJvcHMgPSAoMCwgX29iamVjdEFzc2lnbjIuZGVmYXVsdCkoe30sIHRoaXMucHJvcHMpO1xuICAgICAgZGVsZXRlIHByb3BzLm5hbWU7XG4gICAgICBkZWxldGUgcHJvcHMuZmFkZUluO1xuICAgICAgZGVsZXRlIHByb3BzLm5vRmFkZUluO1xuICAgICAgZGVsZXRlIHByb3BzLm92ZXJyaWRlU3Bpbm5lckNsYXNzTmFtZTtcbiAgICAgIGRlbGV0ZSBwcm9wcy5jbGFzc05hbWU7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmNvbG9yKSB7XG4gICAgICAgIHByb3BzLnN0eWxlID0gcHJvcHMuc3R5bGUgPyBfZXh0ZW5kcyh7fSwgcHJvcHMuc3R5bGUsIHsgY29sb3I6IHRoaXMucHJvcHMuY29sb3IgfSkgOiB7IGNvbG9yOiB0aGlzLnByb3BzLmNvbG9yIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIF9leHRlbmRzKHt9LCBwcm9wcywgeyBjbGFzc05hbWU6IGNsYXNzZXMgfSksXG4gICAgICAgIFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoQXJyYXkoc3Bpbm5lckluZm8uZGl2Q291bnQpKSkubWFwKGZ1bmN0aW9uIChfLCBpZHgpIHtcbiAgICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsga2V5OiBpZHggfSk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTcGlubmVyO1xufShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuU3Bpbm5lci5wcm9wVHlwZXMgPSB7XG4gIG5hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG5vRmFkZUluOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGZhZGVJbjogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZihbJ2Z1bGwnLCAnaGFsZicsICdxdWFydGVyJywgJ25vbmUnXSksXG4gIG92ZXJyaWRlU3Bpbm5lckNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGNsYXNzTmFtZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIGNvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZ1xufTtcblxuU3Bpbm5lci5kZWZhdWx0UHJvcHMgPSB7XG4gIG5hbWU6ICd0aHJlZS1ib3VuY2UnLFxuICBub0ZhZGVJbjogZmFsc2UsXG4gIGZhZGVJbjogJ2Z1bGwnLFxuICBvdmVycmlkZVNwaW5uZXJDbGFzc05hbWU6ICcnXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNwaW5uZXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3BpbmtpdC9kaXN0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9yZWFjdC1zcGlua2l0L2Rpc3QvaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tIFwiaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXNcIjtcbi8vIGV4dGVybmFsLWdsb2JhbCBzdHlsZXMgbXVzdCBiZSBpbXBvcnRlZCBpbiB5b3VyIEpTLlxuaW1wb3J0IG5vcm1hbGl6ZUNzcyBmcm9tIFwibm9ybWFsaXplLmNzc1wiO1xuaW1wb3J0IGJvb3RzdHJhcCBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xuaW1wb3J0IHMgZnJvbSBcIi4vSG9tZS5jc3NcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IG51bWVyYWwgZnJvbSBcIm51bWVyYWxcIjtcbmltcG9ydCBoaXN0b3J5IGZyb20gXCIuLi8uLi9oaXN0b3J5XCI7XG5cbmltcG9ydCBTcGlubmVyIGZyb20gJ3JlYWN0LXNwaW5raXQnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9DYXJkJztcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TZWFyY2hCYXInO1xuaW1wb3J0IENTU1RyYW5zaXRpb25Hcm91cCBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwL0NTU1RyYW5zaXRpb25Hcm91cCc7XG5cbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcblxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHttb3ZpZX0pe1xuICAgIHN1cGVyKClcbiAgICB0aGlzLmJhY2tkcm9wX3BhdGggPSBtb3ZpZS5iYWNrZHJvcF9wYXRoXG4gICAgdGhpcy5zdGF0ZSA9IHsgbW92aWUgOiBtb3ZpZSB9XG4gIH1cblxuICBjaGFuZ2VNb3ZpZSA9IChtb3ZpZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBtb3ZpZTogbW92aWUgfSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgbGV0IGJhY2tkcm9wSU1HID0gYGh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL29yaWdpbmFsJHt0aGlzLmJhY2tkcm9wX3BhdGh9YFxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IHVuZGVmaW5lZCl7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoJyArIGJhY2tkcm9wSU1HICsgJyknO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpe1xuICAgIGxldCBiYWNrZHJvcElNRyA9IGBodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9vcmlnaW5hbCR7dGhpcy5zdGF0ZS5tb3ZpZS5iYWNrZHJvcF9wYXRofWBcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSB1bmRlZmluZWQpe1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcgKyBiYWNrZHJvcElNRyArICcpJztcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICBsZXQgY2FyZCA9IG51bGxcbiAgICBpc1NlcnZlciA/IG51bGwgOiBjYXJkID0gPENhcmQgbW92aWU9e3RoaXMuc3RhdGUubW92aWV9IC8+O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246J3JlbGF0aXZlJyB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nLXdyYXBwZXJcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgIDxTZWFyY2hCYXIgY2FsbD17dGhpcy5jaGFuZ2VNb3ZpZX0gLz5cbiAgICAgICAgPENTU1RyYW5zaXRpb25Hcm91cFxuICAgICAgICAgIHRyYW5zaXRpb25OYW1lPVwic3RhcnR1cFwiXG4gICAgICAgICAgdHJhbnNpdGlvbkVudGVyVGltZW91dD17MTAwMH1cbiAgICAgICAgICB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0PXszMDB9XG4gICAgICAgICAgdHJhbnNpdGlvbkFwcGVhclRpbWVvdXQ9ezEwMDB9XG4gICAgICAgICAgdHJhbnNpdGlvbkFwcGVhcj17dHJ1ZX1cbiAgICAgICAgICB0cmFuc2l0aW9uRW50ZXI9e3RydWV9XG4gICAgICAgICAgdHJhbnNpdGlvbkxlYXZlPXt0cnVlfT5cbiAgICAgICAgICB7Y2FyZH1cbiAgICAgICAgPC9DU1NUcmFuc2l0aW9uR3JvdXA+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuSG9tZS5wcm9wVHlwZXMgPSB7XG4gIG1vdmllOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGJhY2tkcm9wX3BhdGg6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKGJvb3RzdHJhcCwgbm9ybWFsaXplQ3NzLCBzKShIb21lKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy9ob21lL0hvbWUuanMiXSwibWFwcGluZ3MiOiI7O0E7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoSUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBUkE7QUFGQTtBQUZBO0FBaUJBO0FBakRBO0FBQ0E7O0FBTUE7QUFDQTtBQUNBOzs7QUEyQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUNBO0FBS0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==