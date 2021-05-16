module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "4JT2":
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "JVe5":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = __webpack_require__("0G5g"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await resolvePromiseWithTimeout(this.whenEntrypoint(route), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)));
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "Sc5l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Container_Container; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// CONCATENATED MODULE: ./components/Container/Container.styles.tsx


const widgetProps = Object(external_styled_system_["compose"])(external_styled_system_["space"]);

// Helper function to convert pixels to rems (remy)
const remy = px => `${px / 16}rem`; // Function for calculating value for width


const getWidth = value => {
  if (!value) return;
  let width = value / 12 * 100;
  return `width: ${width}%;`;
}; // Function for calculating value for flex


const getFlex = value => {
  if (!value) return;
  let flex = value / 12 * 100;
  return `flex: 0 0 ${flex}%;`;
};

const ContainerStyles = external_styled_components_default.a.div.withConfig({
  displayName: "Containerstyles__ContainerStyles",
  componentId: "zllas3-0"
})(["", ";width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;@media (min-width:576px){max-width:", ";}@media (min-width:768px){max-width:", ";}@media (min-width:992px){max-width:", ";}@media (min-width:1200px){max-width:", ";}@media (min-width:1440){max-width:", ";}"], widgetProps, remy(540), remy(720), remy(9600), remy(1140), remy(1420));
// CONCATENATED MODULE: ./components/Container/Container.tsx




const Container = ({
  children
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(ContainerStyles, {
    children: children
  });
};

/* harmony default export */ var Container_Container = (Container);
// CONCATENATED MODULE: ./components/Container/index.tsx


/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "VAPu":
/***/ (function(module, exports) {



/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ App; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./utilis/colors.styles.tsx
/* harmony default export */ var colors_styles = ({
  brand: "#172e57",
  white: "#fff",
  lightGrey: "#f8fafd",
  red: "#e53935",
  blue: "#116eee",
  gray: "#445357",
  black: "#292929",
  purple: "#845ef7",
  lightGray: "#f4f6f8",
  lightBlue: "#f2f6f9",
  dark: '#212332',
  darkPurple: '#27253a',
  lightGreen: "#5dd8de",
  pink: "#ed4b6f",
  darkBlue: "#1c3988"
});
// CONCATENATED MODULE: ./utilis/spacing.styles.tsx
/* harmony default export */ var spacing_styles = ({
  none: "0",
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "2rem",
  xl: "4rem",
  xxl: "8rem"
});
// CONCATENATED MODULE: ./utilis/fontSize.styles.tsx
/* harmony default export */ var fontSize_styles = ({
  h1: "2rem",
  h2: "1.8rem",
  h3: "1.6rem",
  h4: "1.4rem",
  h5: "1.2rem",
  p: "1rem",
  xs: "0.5rem",
  sm: "0.9rem",
  md: "1rem",
  lg: "1.2rem",
  xl: "1.4rem",
  xxl: "2.4rem"
});
// CONCATENATED MODULE: ./themes/Dark/darkTheme.tsx



const darkTheme = {
  background: '#fff',
  backgroundMain: "#fff",
  boxShadow: '0px 10px 30px 0px rgb(205 205 205 / 33%)',
  boxShadowColor: '4px 4px 20px 0 rgba(103, 58, 183, 0.43)',
  body: '#f5f8fb',
  text: '#212332',
  borderRadius: '.42rem',
  buttonSize: {
    default: '.75rem 1.2rem',
    secondary: '.75rem 1.2rem',
    hero: '1rem 1.75rem',
    cookie: '.4rem 1.75rem'
  },
  buttonColor: {
    colors: colors_styles
  },
  buttonBackground: {
    colors: colors_styles
  },
  colors: colors_styles,
  spacing: spacing_styles,
  fontSize: fontSize_styles
};
// CONCATENATED MODULE: ./themes/Dark/index.tsx

// CONCATENATED MODULE: ./themes/Light/lightTheme.tsx



const lightTheme = {
  background: '#fff',
  backgroundMain: '#f5f8fb',
  boxShadow: '0px 10px 30px 0px rgb(205 205 205 / 33%)',
  boxShadowColor: '4px 4px 20px 0 rgba(103, 58, 183, 0.43)',
  body: '#f5f8fb',
  text: '#212332',
  borderRadius: '.42rem',
  buttonSize: {
    default: '.75rem 1.2rem',
    secondary: '.75rem 1.2rem',
    hero: '1rem 1.75rem',
    cookie: '.4rem 1rem'
  },
  buttonColor: {
    colors: colors_styles
  },
  buttonBackground: {
    colors: colors_styles
  },
  colors: colors_styles,
  spacing: spacing_styles,
  fontSize: fontSize_styles
};
// CONCATENATED MODULE: ./themes/Light/index.tsx

// CONCATENATED MODULE: ./themes/index.tsx


// CONCATENATED MODULE: ./shared/styles.tsx

const GlobalStyles = external_styled_components_["createGlobalStyle"]`
    *, *:before, *:after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-size: 1rem;
    }
    ul {
      list-style: none;
      padding: 0;
    }
  `;
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__("zPlV");

// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-svg-core/styles.css
var styles = __webpack_require__("VAPu");

// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__("sLJp");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./utilis/api.js
// Get site data from Strapi (metadata, navbar, footer...)

async function getGlobalData() {
  const global = await fetchAPI('/global');
  return global;
}
function api_isHomePage() {
  const router = Object(router_["useRouter"])();
  const isHomePage = router.pathname == '/';
  return isHomePage;
}
// CONCATENATED MODULE: ./layout/Main/Main.styles.tsx

const MainWrapper = external_styled_components_default.a.main.withConfig({
  displayName: "Mainstyles__MainWrapper",
  componentId: "di9cps-0"
})(["display:grid;grid-area:main;background:", ";"], ({
  theme
}) => theme.backgroundMain);
const MainContainer = external_styled_components_default.a.div.withConfig({
  displayName: "Mainstyles__MainContainer",
  componentId: "di9cps-1"
})(["margin:", ";"], ({
  homePage
}) => !homePage && "4rem 0");
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/Container/index.tsx + 2 modules
var Container = __webpack_require__("Sc5l");

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: external "polished"
var external_polished_ = __webpack_require__("hKtz");

// CONCATENATED MODULE: ./layout/Hero/Hero.styles.tsx


const bounce = Object(external_styled_components_["keyframes"])(["0%,100%{transform:translateY(0);}50%{transform:translateY(-50px);}"]);
const fadeIn = Object(external_styled_components_["keyframes"])(["from{transform:translateX(-50px);opacity:0;}to{transform:translateX(0);opacity:1;}"]);
const fadeOut = Object(external_styled_components_["keyframes"])(["from{transform:scale(1);opacity:1;}to{transform:scale(.25);opacity:0;}"]);
const HeroWrapper = external_styled_components_default.a.picture.withConfig({
  displayName: "Herostyles__HeroWrapper",
  componentId: "sc-1capss3-0"
})(["width:100%;height:100%;display:flex;justify-content:start;background-position:50% 50%;background-repeat:no-repeat;background-size:cover;height:30rem;color:", ";background-color:", ";object-fit:cover;background-position:center;background-repeat:no-repeat;background-image:url(\"img/lex2.png\");@media (min-width:800px){min-height:44rem;}"], ({
  theme
}) => theme.colors.white, ({
  theme
}) => theme.colors.brand);
const HeroContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Herostyles__HeroContentWrapper",
  componentId: "sc-1capss3-1"
})(["line-height:1.2;padding:2rem 0;display:flex;height:100%;position:relative;align-items:center;"]);
const HeroContentLeft = external_styled_components_default.a.div.withConfig({
  displayName: "Herostyles__HeroContentLeft",
  componentId: "sc-1capss3-2"
})(["flex:1 0 0%;animation:", " 1s ease-in-out;white-space:pre-wrap;justify-content:flex-start;@media (min-width:800px){flex:0 0 46%;}"], fadeIn);
const HeroTitle = external_styled_components_default.a.h2.withConfig({
  displayName: "Herostyles__HeroTitle",
  componentId: "sc-1capss3-3"
})(["font-weight:700;margin-bottom:1rem;@media (min-width:800px){font-size:3.2rem;;}"]);
const HeroImg = external_styled_components_default.a.img.withConfig({
  displayName: "Herostyles__HeroImg",
  componentId: "sc-1capss3-4"
})(["object-fit:cover;max-width:100%;object-position:bottom right;"]);
const HeroDescription = external_styled_components_default.a.p.withConfig({
  displayName: "Herostyles__HeroDescription",
  componentId: "sc-1capss3-5"
})(["line-height:1.8;@media (min-width:800px){font-size:1.2rem;}"]);
const HeroContentRight = external_styled_components_default.a.div.withConfig({
  displayName: "Herostyles__HeroContentRight",
  componentId: "sc-1capss3-6"
})(["max-width:100%;flex:0 0 50%;position:relative;display:flex;padding:0 -15px;align-self:flex-end;@media (max-width:800px){display:none;}"]);
const HeroIcon = external_styled_components_default.a.div.withConfig({
  displayName: "Herostyles__HeroIcon",
  componentId: "sc-1capss3-7"
})(["z-index:1;padding:1rem;height:1rem;position:absolute;border-radius:1.26rem;color:", ";animation:", " 3s ease-in-out 0s infinite alternate;&:hover{cursor:pointer;&:before{top:-20px;left:16px;border-radius:.62rem;padding:.62rem;content:'';font-size:.72rem;position:absolute;background:", ";color:", ";}}"], ({
  theme
}) => theme.colors.white, bounce, ({
  theme
}) => theme.colors.black, ({
  theme
}) => theme.colors.white);
const HeroIconFirst = external_styled_components_default()(HeroIcon).withConfig({
  displayName: "Herostyles__HeroIconFirst",
  componentId: "sc-1capss3-8"
})(["top:20%;right:0%;&:hover{&:before{content:'Telewizja';}}"]);
const HeroIconSecond = external_styled_components_default()(HeroIcon).withConfig({
  displayName: "Herostyles__HeroIconSecond",
  componentId: "sc-1capss3-9"
})(["top:38%;right:8%;&:hover{&:before{content:'Internet';}}"]);
const HeroIconThird = external_styled_components_default()(HeroIcon).withConfig({
  displayName: "Herostyles__HeroIconThird",
  componentId: "sc-1capss3-10"
})(["top:32%;right:-12%;&:hover{&:before{content:'Serwis';}}"]);
const HeroButton = external_styled_components_default.a.div.withConfig({
  displayName: "Herostyles__HeroButton",
  componentId: "sc-1capss3-11"
})(["margin-top:1.6rem;"]);
const StyledLink = external_styled_components_default.a.a.withConfig({
  displayName: "Herostyles__StyledLink",
  componentId: "sc-1capss3-12"
})(["font-size:2rem;padding:.8rem 1rem;border-radius:50px;display:inline-flex;align-items:center;justify-content:space-between;cursor:pointer;background:", ";&:hover{background:", ";}"], ({
  theme
}) => Object(external_polished_["lighten"])(0.1, theme.colors.brand), ({
  theme
}) => Object(external_polished_["lighten"])(0.2, theme.colors.brand));
const StyledIcon = external_styled_components_default.a.div.withConfig({
  displayName: "Herostyles__StyledIcon",
  componentId: "sc-1capss3-13"
})(["background:#fff;padding:.6rem;border-radius:50px;margin-right:1rem;"]);
const PhoneNumber = external_styled_components_default.a.div.withConfig({
  displayName: "Herostyles__PhoneNumber",
  componentId: "sc-1capss3-14"
})(["font-size:1.2rem;font-weight:600;"]);
// CONCATENATED MODULE: ./layout/Hero/Hero.tsx









const Hero = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(HeroWrapper, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Container["a" /* default */], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(HeroContentWrapper, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(HeroContentLeft, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(HeroTitle, {
            children: "Jeste\u015Bmy tu dla Ciebie"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(HeroDescription, {
            children: "Nowoczesna technologia. Pomoc. Bezpiecze\u0144stwo. Budownictwo. Energia."
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(HeroButton, {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "contact",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(StyledLink, {
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(StyledIcon, {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                    color: "black",
                    icon: free_solid_svg_icons_["faPhone"]
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(PhoneNumber, {
                  children: "+48 516-178-131"
                })]
              })
            })
          })]
        })
      })
    })
  });
};

/* harmony default export */ var Hero_Hero = (Hero);
// CONCATENATED MODULE: ./layout/Hero/index.tsx

// CONCATENATED MODULE: ./layout/Main/Main.tsx







const Main = ({
  children
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(MainWrapper, {
    homePage: api_isHomePage(),
    children: [api_isHomePage() && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Hero_Hero, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(MainContainer, {
      homePage: api_isHomePage(),
      children: children
    })]
  });
};

/* harmony default export */ var Main_Main = (Main);
// CONCATENATED MODULE: ./layout/Main/index.tsx

// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__("JVe5");

// CONCATENATED MODULE: ./layout/Header/Header.styles.tsx


const BrandLogo = external_styled_components_default.a.div.withConfig({
  displayName: "Headerstyles__BrandLogo",
  componentId: "rm8ez7-0"
})(["font-size:2rem;&:hover{cursor:pointer;}"]);
const SocialIcon = external_styled_components_default.a.div.withConfig({
  displayName: "Headerstyles__SocialIcon",
  componentId: "rm8ez7-1"
})(["margin-right:.72rem;&:hover{cursor:pointer;color:", ";}"], ({
  theme
}) => Object(external_polished_["lighten"])(0.1, theme.colors.brand));
const HeaderWrapper = external_styled_components_default.a.header.withConfig({
  displayName: "Headerstyles__HeaderWrapper",
  componentId: "rm8ez7-2"
})(["top:0;width:100%;height:auto;z-index:99;grid-area:header;position:", ";;transition:all 0.5s;position:", ";background:", ";color:", ";box-shadow:", ";"], ({
  homePage
}) => homePage ? "fixed" : "", ({
  theme,
  position
}) => position ? "fixed" : "", ({
  theme,
  position
}) => position ? theme.colors.white : 'transparent', ({
  theme,
  position
}) => position ? theme.colors.black : theme.colors.white, ({
  homePage,
  position
}) => position && "0 8px 20px 0 rgba(0, 0, 0, 0.1)");
const HeaderTopInfoWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Headerstyles__HeaderTopInfoWrapper",
  componentId: "rm8ez7-3"
})(["padding:.42rem 0;color:", ";display:", ";background:", ";& svg{margin-right:.42rem;}@media (max-width:800px){display:none;}"], ({
  theme
}) => theme.colors.white, ({
  position
}) => position ? 'none' : "", ({
  theme
}) => theme.colors.brand);
const HeaderTopInfoContent = external_styled_components_default.a.div.withConfig({
  displayName: "Headerstyles__HeaderTopInfoContent",
  componentId: "rm8ez7-4"
})(["padding:.42rem 0;justify-content:space-between;display:", ";"], ({
  position
}) => position ? 'none' : "flex");
const HeaderTopInfoItems = external_styled_components_default.a.div.withConfig({
  displayName: "Headerstyles__HeaderTopInfoItems",
  componentId: "rm8ez7-5"
})(["display:flex;"]);
const HeaderTopInfoItem = external_styled_components_default.a.div.withConfig({
  displayName: "Headerstyles__HeaderTopInfoItem",
  componentId: "rm8ez7-6"
})(["padding:0 1rem;&:last-child{padding-right:0;}"]);
const HeaderContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Headerstyles__HeaderContentWrapper",
  componentId: "rm8ez7-7"
})(["color:", ";background:", ";"], ({
  theme,
  homePage
}) => !homePage && theme.colors.brand, ({
  theme,
  homePage
}) => !homePage && theme.colors.white);
const HeaderContent = external_styled_components_default.a.div.withConfig({
  displayName: "Headerstyles__HeaderContent",
  componentId: "rm8ez7-8"
})(["width:100%;display:flex;align-items:center;justify-content:space-between;"]);
// CONCATENATED MODULE: ./layout/Header/sub/Menu/Menu.styles.tsx

const MenuWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Menustyles__MenuWrapper",
  componentId: "sc-1t88s31-0"
})(["display:flex;align-items:center;"]);
const MenuItem = external_styled_components_default.a.div.withConfig({
  displayName: "Menustyles__MenuItem",
  componentId: "sc-1t88s31-1"
})(["cursor:pointer;height:100%;display:flex;align-items:center;position:relative;transition:opacity 0.4s ease-in-out;&:not(last-child){margin-left:2.4rem;}& svg{margin-left:.4rem;}& a{color:inherit;text-decoration:none;}&:hover{&:before{background:white;width:100%;}&:after{background:transparent;width:100%;}};&:before,&:after{content:'';position:absolute;width:0%;height:2px;bottom:-8px;background:rgb(13,26,38);left:0;transition:0.5s;};&:before{left:0;transition:0.5s  ease-in-out;}&:after{background:rgb(13,26,38);right:0;transition:width 0.5s ease-in-out;}"]);
const Icon = external_styled_components_default()(MenuItem).withConfig({
  displayName: "Menustyles__Icon",
  componentId: "sc-1t88s31-2"
})(["position:relative;&:before{content:\"1\";color:#fff;top:-4px;left:-6px;line-height:16px;width:16px;height:16px;font-size:10px;font-weight:bold;background:#ff324d;;position:absolute;border-radius:50%;text-align:center;}"]);
MenuItem.Icon = Icon;
// CONCATENATED MODULE: ./layout/Header/sub/Submenu/Submenu.styles.tsx


const Submenu_styles_MenuWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Submenustyles__MenuWrapper",
  componentId: "sc-4uz97s-0"
})(["top:160%;position:absolute;transform:translateX(-40%);border-radius:", ";color:", ";background-color:", ";box-shadow:", ";"], ({
  theme
}) => theme.borderRadius, ({
  theme
}) => theme.colors.black, ({
  theme
}) => theme.colors.white, ({
  theme
}) => theme.boxShadow);
const MenuColumns = external_styled_components_default.a.ul.withConfig({
  displayName: "Submenustyles__MenuColumns",
  componentId: "sc-4uz97s-1"
})(["padding:1rem;margin:0;column-count:2;column-gap:40px;column-rule:1px double #eee;"]);
const MenuContent = external_styled_components_default.a.div.withConfig({
  displayName: "Submenustyles__MenuContent",
  componentId: "sc-4uz97s-2"
})(["padding:1rem;"]);
const Submenu_styles_MenuItem = external_styled_components_default.a.li.withConfig({
  displayName: "Submenustyles__MenuItem",
  componentId: "sc-4uz97s-3"
})(["cursor:pointer;white-space:nowrap;position:relative;width:fit-content;& a{overflow:hidden;display:inline-block;margin-bottom:8px;white-space:nowrap;&:hover{color:", ";transition:all 1s ease;&:before{background:rgb(13,26,38);width:100%;transition:width 0.5s cubic-bezier((0.22,0.61,0.36,1));}&:after{background:transparent;}};&:before,&:after{content:'';position:absolute;width:0%;height:1px;bottom:20%;background:rgb(13,26,38);left:0;transition:0.5s;};&:before{left:0;transition:0.5s;}&:after{background:rgb(13,26,38);right:0;}}"], ({
  theme
}) => Object(external_polished_["lighten"])(0.2, theme.colors.black));
const MenuLink = external_styled_components_default.a.div.withConfig({
  displayName: "Submenustyles__MenuLink",
  componentId: "sc-4uz97s-4"
})(["color:", ";& svg{font-size:1.4rem;color:", ";}"], ({
  theme
}) => theme.colors.black, ({
  theme
}) => theme.colors.brand);
const Submenu_styles_Icon = external_styled_components_default()(Submenu_styles_MenuItem).withConfig({
  displayName: "Submenustyles__Icon",
  componentId: "sc-4uz97s-5"
})(["position:relative;&:before{content:\"1\";color:#fff;top:-4px;left:-6px;line-height:16px;width:16px;height:16px;font-size:10px;font-weight:bold;background:#ff324d;;position:absolute;border-radius:50%;text-align:center;}"]);
Submenu_styles_MenuItem.Icon = Submenu_styles_Icon;
// CONCATENATED MODULE: ./layout/Header/sub/Submenu/Submenu.tsx





const Submenu = ({
  links,
  setMenuOpen
}) => {
  function chunkArrayInGroups(arr, size) {
    let result = [];
    let pos = 0;

    while (pos < arr.length) {
      result.push(arr.slice(pos, pos + size));
      pos += size;
    }

    return result;
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Submenu_styles_MenuWrapper, {
    onMouseLeave: () => {
      setMenuOpen(false);
    },
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(MenuContent, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(MenuColumns, {
        children: links.map((link, id) => {
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Submenu_styles_MenuItem, {
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: link.url,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(MenuLink, {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                    children: link.name
                  })
                })
              })
            })
          }, id);
        })
      })
    })
  });
};

/* harmony default export */ var Submenu_Submenu = (Submenu);
// CONCATENATED MODULE: ./layout/Header/sub/Submenu/index.tsx

// CONCATENATED MODULE: ./layout/Header/sub/Menu/Menu.tsx










const Menu = ({
  links
}) => {
  const {
    0: isMenuOpen,
    1: setMenuOpen
  } = Object(external_react_["useState"])(false);
  const {
    0: subemnuId,
    1: setSubemnuId
  } = Object(external_react_["useState"])(null);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(MenuWrapper, {
    children: links.map(link => {
      return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(MenuItem, {
        onMouseEnter: () => {
          setSubemnuId(link.id);
          setMenuOpen(true);
        } // onMouseLeave={() => {
        //     setSubemnuId(link.id)
        //     setMenuOpen(false)
        // }}
        ,
        children: [link.name === "Światłowód" ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: link.url,
          target: "_blank",
          children: "\u015Awiat\u0142ow\xF3d"
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: link.url,
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
            children: [link.name, link.hasSubmenu && /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
              children: isMenuOpen && link.id == subemnuId ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                icon: free_solid_svg_icons_["faChevronUp"]
              }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                icon: free_solid_svg_icons_["faChevronDown"]
              })
            })]
          })
        }), link.hasSubmenu && isMenuOpen && link.id == subemnuId && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Submenu_Submenu, {
          links: link.subLinks,
          setMenuOpen: setMenuOpen
        })]
      }, link.id);
    })
  });
};

/* harmony default export */ var Menu_Menu = (Menu);
// CONCATENATED MODULE: ./layout/Header/sub/Menu/index.tsx

// CONCATENATED MODULE: ./layout/Header/sub/MobileMenu/MobileMenu.styles.tsx

const MobileMenu_styles_MenuWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "MobileMenustyles__MenuWrapper",
  componentId: "sc-7ntd18-0"
})(["top:0;right:0;bottom:0;width:20rem;z-index:9999;position:fixed;overflow-y:auto;color:", ";background:", ";"], ({
  theme
}) => theme.colors.brand, ({
  theme
}) => theme.colors.white);
const ManuContent = external_styled_components_default.a.div.withConfig({
  displayName: "MobileMenustyles__ManuContent",
  componentId: "sc-7ntd18-1"
})(["width:100%;padding:1.25rem;"]);
const MenuHeader = external_styled_components_default.a.div.withConfig({
  displayName: "MobileMenustyles__MenuHeader",
  componentId: "sc-7ntd18-2"
})(["width:100%;padding:1.25rem;text-align:right;"]);
const MobileMenu_styles_MenuItem = external_styled_components_default.a.li.withConfig({
  displayName: "MobileMenustyles__MenuItem",
  componentId: "sc-7ntd18-3"
})(["padding:.8rem 0;display:block;width:100%;font-size:1.4rem;&:hover{cursor:pointer;text-decoration:underline;}"]);
const LinkStyled = external_styled_components_default.a.a.withConfig({
  displayName: "MobileMenustyles__LinkStyled",
  componentId: "sc-7ntd18-4"
})(["font-size:1.4rem;"]);
const CloseBtn = external_styled_components_default.a.span.withConfig({
  displayName: "MobileMenustyles__CloseBtn",
  componentId: "sc-7ntd18-5"
})(["cursor:pointer;font-size:1.4rem;"]);
const Overlay = external_styled_components_default.a.div.withConfig({
  displayName: "MobileMenustyles__Overlay",
  componentId: "sc-7ntd18-6"
})(["width:100%;height:100%;z-index:9997;top:0;left:0;position:fixed;background:rgba(0,0,0,0.4);overflow:hidden;"]);
// CONCATENATED MODULE: ./layout/Header/sub/MobileMenu/MobileMenu.tsx








const MobileMenu = ({
  links,
  isOpen,
  setMenuOpen
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(CloseBtn, {
      onClick: () => setMenuOpen(!isOpen),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
        icon: free_solid_svg_icons_["faBars"]
      })
    }), isOpen && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Overlay, {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(MobileMenu_styles_MenuWrapper, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(MenuHeader, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CloseBtn, {
            onClick: () => setMenuOpen(!isOpen),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
              icon: free_solid_svg_icons_["faTimes"]
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ManuContent, {
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
            children: [links.map(link => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
              children: [link.subLinks && link.subLinks.map(sub => /*#__PURE__*/Object(jsx_runtime_["jsx"])(MobileMenu_styles_MenuItem, {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(LinkStyled, {
                  href: sub.url,
                  children: sub.name
                }, sub.id)
              })), /*#__PURE__*/Object(jsx_runtime_["jsx"])(MobileMenu_styles_MenuItem, {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(LinkStyled, {
                  href: link.url,
                  children: link.name
                }, link.id)
              })]
            })), /*#__PURE__*/Object(jsx_runtime_["jsx"])(MobileMenu_styles_MenuItem, {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(LinkStyled, {
                href: "tel:+48516178131",
                children: "+48 516-178-131"
              })
            })]
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ var MobileMenu_MobileMenu = (MobileMenu);
// CONCATENATED MODULE: ./layout/Header/sub/MobileMenu/index.tsx

// CONCATENATED MODULE: ./layout/Header/Header.tsx













const SCROLL_DISTANCE = 10;

const Header = ({
  links
}) => {
  const {
    0: scroll,
    1: setScroll
  } = Object(external_react_["useState"])(false);
  const {
    0: isMenuOpen,
    1: setMenuOpen
  } = Object(external_react_["useState"])(false);
  const {
    0: isMobile,
    1: setMobile
  } = Object(external_react_["useState"])(false);
  const router = Object(router_["useRouter"])();
  Object(external_react_["useEffect"])(() => {
    if (isMenuOpen) {
      setMenuOpen(!isMenuOpen);
    }

    if (false) {}

    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > SCROLL_DISTANCE);
    });
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(HeaderWrapper, {
    position: api_isHomePage() && scroll,
    homePage: api_isHomePage(),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(HeaderTopInfoWrapper, {
      position: api_isHomePage() && scroll,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Container["a" /* default */], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(HeaderTopInfoContent, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(HeaderTopInfoItems, {
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(HeaderTopInfoItems, {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(SocialIcon, {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                  icon: free_brands_svg_icons_["faFacebookF"]
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(SocialIcon, {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                  icon: free_brands_svg_icons_["faInstagram"]
                })
              })]
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(HeaderTopInfoItems, {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(HeaderTopInfoItem, {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                icon: free_solid_svg_icons_["faClock"]
              }), " Pon - Pt: 8:00 - 17:00"]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(HeaderTopInfoItem, {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                icon: free_solid_svg_icons_["faPhone"]
              }), " 516-178-131"]
            })]
          })]
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(HeaderContentWrapper, {
      position: scroll,
      homePage: api_isHomePage(),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Container["a" /* default */], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(HeaderContent, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(BrandLogo, {
            children: scroll || !api_isHomePage() ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: "/img/logo.png"
              })
            }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "/",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: "/img/lex_white.png"
              })
            })
          }), !isMobile ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(Menu_Menu, {
            links: links
          }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(MobileMenu_MobileMenu, {
            links: links,
            setMenuOpen: setMenuOpen,
            isOpen: isMenuOpen
          })]
        })
      })
    })]
  });
};

/* harmony default export */ var Header_Header = (Header);
// CONCATENATED MODULE: ./layout/Header/index.tsx

// CONCATENATED MODULE: ./layout/Footer/Footer.styles.tsx


const FooterWrapper = external_styled_components_default.a.footer.withConfig({
  displayName: "Footerstyles__FooterWrapper",
  componentId: "sc-1mg2d41-0"
})(["padding:1rem;width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;grid-area:footer;color:", ";background:", ";& a{color:", ";text-decoration:none;}"], ({
  theme
}) => theme.colors.white, ({
  theme
}) => theme.colors.brand, ({
  theme
}) => theme.colors.white);
const FooterContent = external_styled_components_default.a.div.withConfig({
  displayName: "Footerstyles__FooterContent",
  componentId: "sc-1mg2d41-1"
})(["display:flex;padding:1rem;justify-content:space-between;@media (max-width:800px){flex-direction:column;}"]);
const FooterBottom = external_styled_components_default.a.div.withConfig({
  displayName: "Footerstyles__FooterBottom",
  componentId: "sc-1mg2d41-2"
})(["padding:1rem;"]);
const FooterColumn = external_styled_components_default.a.div.withConfig({
  displayName: "Footerstyles__FooterColumn",
  componentId: "sc-1mg2d41-3"
})(["margin-bottom:2rem;@media (min-width:800px){margin:0;flex:0 0 25%;max-width:25%;&:not(:first-child){padding:0 ", ";}}"], ({
  theme
}) => theme.spacing.md);
const FooterLogo = external_styled_components_default.a.img.withConfig({
  displayName: "Footerstyles__FooterLogo",
  componentId: "sc-1mg2d41-4"
})(["margin-bottom:0.6rem;"]);
const FooterContactItem = external_styled_components_default.a.div.withConfig({
  displayName: "Footerstyles__FooterContactItem",
  componentId: "sc-1mg2d41-5"
})(["display:flex;align-items:center;line-height:1.4;margin-bottom:", ";;"], ({
  theme
}) => theme.spacing.md);
const FooterLinks = external_styled_components_default.a.div.withConfig({
  displayName: "Footerstyles__FooterLinks",
  componentId: "sc-1mg2d41-6"
})(["display:flex;"]);
const FooterSocialIcons = external_styled_components_default.a.div.withConfig({
  displayName: "Footerstyles__FooterSocialIcons",
  componentId: "sc-1mg2d41-7"
})(["display:flex;align-items:center;margin-top:", ";"], ({
  theme
}) => theme.spacing.md);
const FooterSocialIcon = external_styled_components_default.a.div.withConfig({
  displayName: "Footerstyles__FooterSocialIcon",
  componentId: "sc-1mg2d41-8"
})(["display:flex;align-items:center;justify-content:center;margin:0 ", " 0 0;border-radius:", ";background:", ";padding:", ";&:hover{cursor:pointer;background:", ";}"], ({
  theme
}) => theme.spacing.md, ({
  theme
}) => theme.borderRadius, ({
  theme
}) => Object(external_polished_["lighten"])(0.1, theme.colors.brand), ({
  theme
}) => theme.spacing.md, ({
  theme
}) => Object(external_polished_["lighten"])(0.2, theme.colors.brand));
const FooterLinkItem = external_styled_components_default.a.li.withConfig({
  displayName: "Footerstyles__FooterLinkItem",
  componentId: "sc-1mg2d41-9"
})(["text-decoration:none;cursor:pointer;margin-bottom:0.6rem;& > a:hover{opacity:1 !important;text-decoration:underline;color:", "}"], ({
  theme
}) => theme.colors.white);
const Footer_styles_StyledLink = external_styled_components_default.a.a.withConfig({
  displayName: "Footerstyles__StyledLink",
  componentId: "sc-1mg2d41-10"
})(["&:hover{opacity:1 !important;text-decoration:underline;color:", "}"], ({
  theme
}) => theme.colors.white);
const FooterColumnTitle = external_styled_components_default.a.h6.withConfig({
  displayName: "Footerstyles__FooterColumnTitle",
  componentId: "sc-1mg2d41-11"
})(["font-size:1.4rem;text-decoration:none;margin-bottom:2rem;&:after{content:\"\";display:block;background:#fff;margin-top:10px;width:60px;height:2px;}"]);
// CONCATENATED MODULE: ./layout/Footer/Footer.tsx










const Footer = ({
  footerLinks
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(FooterWrapper, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Container["a" /* default */], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(FooterContent, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(FooterColumn, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(FooterLogo, {
            src: "/img/lex_white.png",
            alt: "lexell.pl"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: "LEXELL to firma dzia\u0142aj\u0105ca na rynku od 1992 roku. W swojej ofercie mamy internet radiowy oraz serwis komputer\xF3w i laptop\xF3w."
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(FooterSocialIcons, {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(FooterSocialIcon, {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                icon: free_brands_svg_icons_["faFacebookF"]
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(FooterSocialIcon, {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                icon: free_brands_svg_icons_["faInstagram"]
              })
            })]
          })]
        }), footerLinks.map(section => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(FooterColumn, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(FooterColumnTitle, {
            children: section.header
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
            children: section.link.map(l => {
              return /*#__PURE__*/Object(jsx_runtime_["jsx"])(FooterLinkItem, {
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer_styles_StyledLink, {
                  href: l.url,
                  children: l.name
                })
              }, l.id);
            })
          })]
        }, section.id)), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(FooterColumn, {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(FooterColumnTitle, {
            children: "Adres firmy"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(FooterContactItem, {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(FooterSocialIcon, {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                icon: free_solid_svg_icons_["faMapMarked"]
              })
            }), "ul. Przylesie 6, ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "60-185 Sk\xF3rzewo"]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(FooterContactItem, {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(FooterSocialIcon, {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                icon: free_solid_svg_icons_["faPhone"]
              })
            }), "61 814-38-25 ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "+48 516-178-131"]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(FooterContactItem, {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(FooterSocialIcon, {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
                icon: free_solid_svg_icons_["faEnvelope"]
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer_styles_StyledLink, {
              href: "/contact",
              children: "Napisz do nas"
            })]
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(FooterBottom, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "https://jachimov.pl",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            target: "_blank",
            rel: "noreferrer",
            children: "\xA9 2021 Jachimov.pl | All Rights Reserved"
          })
        })
      })]
    })
  });
};

/* harmony default export */ var Footer_Footer = (Footer);
// CONCATENATED MODULE: ./layout/Footer/index.tsx

// CONCATENATED MODULE: ./layout/Wrapper/Wrapper.styles.tsx

const WrapperStyles = external_styled_components_default.a.div.withConfig({
  displayName: "Wrapperstyles__WrapperStyles",
  componentId: "yq4x2l-0"
})(["display:grid;height:100vh;grid-template-rows:auto 1fr auto;grid-template-areas:\"header header header\"  \"main main main\"  \"footer footer footer\";"]);
// CONCATENATED MODULE: ./layout/Wrapper/Wrapper.tsx




const Wrapper = ({
  children
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(WrapperStyles, {
    children: children
  });
};

/* harmony default export */ var Wrapper_Wrapper = (Wrapper);
// CONCATENATED MODULE: ./layout/Wrapper/index.tsx

// EXTERNAL MODULE: ./lib/api.js
var api = __webpack_require__("qoWs");

// CONCATENATED MODULE: ./layout/Layout.tsx










const Layout = ({
  children
}) => {
  const menuLinks = [{
    id: 1,
    name: 'Strona główna',
    hasSubmenu: false,
    url: "/"
  }, {
    id: 2,
    name: 'Usługi',
    hasSubmenu: true,
    url: '',
    subLinks: [{
      id: 1,
      icon: free_solid_svg_icons_["faWifi"],
      name: 'LEXELL internet',
      url: '/clientChoose'
    }, {
      id: 2,
      icon: free_solid_svg_icons_["faTools"],
      name: 'LEXELL help desk IT',
      url: '/service'
    } // {
    //     id: 3,
    //     icon: faUpload,
    //     name: 'LEXELL computer',
    //     url: '/computer'
    // },
    // {
    //     id: 4,
    //     icon: faUpload,
    //     name: 'LEXELL energy',
    //     url: '/energy'
    // },
    // {
    //     id: 5,
    //     icon: faUpload,
    //     name: 'LEXELL smart and security',
    //     url: '/monitoring'
    // },
    // {
    //     id: 6,
    //     icon: faUpload,
    //     name: 'LEXELL building',
    //     url: '/constructionMachinery'
    // },
    ]
  }, {
    id: 3,
    name: 'O nas',
    hasSubmenu: false,
    url: "/about"
  }, {
    id: 4,
    name: "Kontakt",
    hasSubmenu: false,
    url: "/contact"
  }];
  const footerLinks = [{
    id: 1,
    header: 'Usługi',
    link: [{
      id: 1,
      name: 'LEXELL internet',
      url: '/clientChoose'
    }, {
      id: 2,
      name: 'LEXELL help desk IT',
      url: '/service'
    } // {
    //     id: 3,
    //     name: 'LEXELL computer',
    //     url: '/computer'
    // },
    // {
    //     id: 4,
    //     name: 'LEXELL energy',
    //     url: '/energy'
    // },
    // {
    //     id: 5,
    //     name: 'LEXELL smart and security',
    //     url: '/monitoring'
    // },
    // {
    //     id: 6,
    //     name: 'LEXELL building',
    //     url: '/constructionMachinery'
    // },
    ]
  }];
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Wrapper_Wrapper, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Header_Header, {
      links: menuLinks,
      isMobile: children.props.isMobile
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Main_Main, {
      children: children
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Footer_Footer, {
      footerLinks: footerLinks
    })]
  });
};

/* harmony default export */ var layout_Layout = (Layout);
async function getStaticProps({
  previewData
}) {
  const allPosts = await Object(api["a" /* getAllLayouts */])(previewData);
  console.log(allPosts.node);
  return {
    props: {}
  };
}
// CONCATENATED MODULE: ./layout/index.tsx

// CONCATENATED MODULE: ./pages/_app.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // import Font Awesome CSS


fontawesome_svg_core_["config"].autoAddCss = false; // Tell Font Awesome to skip adding the CSS


function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_styled_components_["ThemeProvider"], {
      theme: lightTheme,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(GlobalStyles, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(layout_Layout, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread({}, pageProps))
      })]
    })
  });
}

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {} // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (false) {}

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && !this.isPreview && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hKtz":
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "qoWs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export API_TOKEN */
/* unused harmony export API_LOCALE */
/* unused harmony export PrismicClient */
/* unused harmony export getAllPostsWithSlug */
/* unused harmony export getAllPostsForHome */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAllLayouts; });
/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vNl1");
/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prismic_javascript__WEBPACK_IMPORTED_MODULE_0__);

const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME;
const REF_API_URL = `https://${REPOSITORY}.prismic.io/api/v2`;
const GRAPHQL_API_URL = `https://${REPOSITORY}.prismic.io/graphql`; // export const API_URL = 'https://your-repo-name.cdn.prismic.io/api/v2'

const API_TOKEN = process.env.PRISMIC_API_TOKEN;
const API_LOCALE = process.env.PRISMIC_REPOSITORY_LOCALE;
const PrismicClient = prismic_javascript__WEBPACK_IMPORTED_MODULE_0___default.a.client(REF_API_URL, {
  accessToken: API_TOKEN
});

async function fetchAPI(query, {
  previewData,
  variables
} = {}) {
  const prismicAPI = await PrismicClient.getApi();
  const res = await fetch(`${GRAPHQL_API_URL}?query=${query}&variables=${JSON.stringify(variables)}`, {
    headers: {
      'Prismic-Ref': (previewData === null || previewData === void 0 ? void 0 : previewData.ref) || prismicAPI.masterRef.ref,
      'Content-Type': 'application/json',
      'Accept-Language': API_LOCALE,
      Authorization: `Token ${API_TOKEN}`
    }
  });

  if (res.status !== 200) {
    console.log(await res.text());
    throw new Error('Failed to fetch API');
  }

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

async function getAllPostsWithSlug() {
  var _data$allPosts;

  const data = await fetchAPI(`
    {
      allPosts {
        edges {
          node {
            _meta {
              uid
            }
          }
        }
      }
    }
  `);
  return data === null || data === void 0 ? void 0 : (_data$allPosts = data.allPosts) === null || _data$allPosts === void 0 ? void 0 : _data$allPosts.edges;
}
async function getAllPostsForHome(previewData) {
  const data = await fetchAPI(`
    query {
        allHomepages {
            edges {
                node {
                    hero_title
                }
            }
        }
    }
  `, {
    previewData
  });
  return data.allHomepages.edges;
}
async function getAllLayouts(previewData) {
  const data = await fetchAPI(`
    query {
      allLayouts {
        edges{
          node {
           body {
              ... on LayoutBodyCta_feature {
                primary {
                  text
                }
              }
            }
          }
        }
      }
    }
  `, {
    previewData
  });
  return data.allLayouts.edges;
} // export async function getPostAndMorePosts(slug, previewData) {
//   const data = await fetchAPI(
//     `
//   query PostBySlug($slug: String!, $lang: String!) {
//     post(uid: $slug, lang: $lang) {
//       title
//       content
//       date
//       coverimage
//       author {
//         ...on Author {
//           name
//           picture
//         }
//       }
//       _meta {
//         uid
//       }
//     }
//    morePosts: allPosts(sortBy: date_DESC, first: 3) {
//       edges {
//         node {
//           title
//           content
//           date
//           coverimage
//           excerpt
//           author {
//             ...on Author {
//               name
//               picture
//             }
//           }
//           _meta {
//             uid
//           }
//         }
//       }
//     }
//   }
//   `,
//     {
//       previewData,
//       variables: {
//         slug,
//         lang: API_LOCALE,
//       },
//     }
//   )
//   data.morePosts = data.morePosts.edges
//     .filter(({ node }) => node._meta.uid !== slug)
//     .slice(0, 2)
//   return data
// }

/***/ }),

/***/ "sLJp":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "vNl1":
/***/ (function(module, exports) {

module.exports = require("prismic-javascript");

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "zPlV":
/***/ (function(module, exports) {



/***/ })

/******/ });