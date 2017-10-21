require("source-map-support").install();
exports.id = 8;
exports.modules = {

/***/ "./src/routes/home/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Home__ = __webpack_require__("./src/routes/home/Home.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
var _jsxFileName = '/var/www/moviedb/src/routes/home/index.js';

let action = (() => {
  var _ref = _asyncToGenerator(function* () {
    const resp = yield __WEBPACK_IMPORTED_MODULE_2_axios___default()(`https://api.themoviedb.org/3/movie/157336?api_key=${TMDB_API}`);
    if (!resp.data) throw new Error('Failed to load the movies feed.');
    return {
      chunks: ['home'],
      title: 'Movie app',
      component: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Layout,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Home__["a" /* default */], { movie: resp.data, __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        })
      )
    };
  });

  return function action() {
    return _ref.apply(this, arguments);
  };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





const TMDB_API = 'cfe422613b250f702980a3bbf9e90716';

/* harmony default export */ __webpack_exports__["default"] = (action);

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy84LmFlODA5ZmZhMmE0ZmRiN2UwYmJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIi92YXIvd3d3L21vdmllZGIvc3JjL3JvdXRlcy9ob21lL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmVhY3QgU3RhcnRlciBLaXQgKGh0dHBzOi8vd3d3LnJlYWN0c3RhcnRlcmtpdC5jb20vKVxuICpcbiAqIENvcHlyaWdodCDCqSAyMDE0LXByZXNlbnQgS3JpYXNvZnQsIExMQy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UudHh0IGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBUTURCX0FQSSA9ICdjZmU0MjI2MTNiMjUwZjcwMjk4MGEzYmJmOWU5MDcxNidcblxuYXN5bmMgZnVuY3Rpb24gYWN0aW9uKCkge1xuICBjb25zdCByZXNwID0gYXdhaXQgYXhpb3MoYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvMTU3MzM2P2FwaV9rZXk9JHtUTURCX0FQSX1gKTtcbiAgaWYgKCFyZXNwLmRhdGEpIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgdGhlIG1vdmllcyBmZWVkLicpO1xuICByZXR1cm4ge1xuICAgIGNodW5rczogWydob21lJ10sXG4gICAgdGl0bGU6ICdNb3ZpZSBhcHAnLFxuICAgIGNvbXBvbmVudDogKFxuICAgIFx0PExheW91dD5cbiAgICAgICAgXHQ8SG9tZSBtb3ZpZT17cmVzcC5kYXRhfSAvPlxuICAgICAgICA8L0xheW91dD5cbiAgICApLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhY3Rpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3JvdXRlcy9ob21lL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOztBOzs7Ozs7Ozs7Ozs7Ozs7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUpBO0FBU0E7QUFDQTtBQWJBOzs7Ozs7O0FBZkE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWVBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=