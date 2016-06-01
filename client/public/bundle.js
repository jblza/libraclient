/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/*!****************************!*\
  !*** ./client/app/App.jsx ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Login = __webpack_require__(/*! ./Login.jsx */ 168);
	
	var _Login2 = _interopRequireDefault(_Login);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var App = React.createClass({
		displayName: 'App',
	
		render: function render() {
			return React.createElement(_Login2.default, null);
		}
	});
	
	ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

/***/ },

/***/ 168:
/*!******************************!*\
  !*** ./client/app/Login.jsx ***!
  \******************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var Login = React.createClass({
		displayName: 'Login',
	
	
		render: function render() {
			return React.createElement(
				'form',
				null,
				React.createElement('input', { type: 'email', placeholder: 'Email address' }),
				React.createElement('input', { type: 'password', placeholder: 'Password' }),
				React.createElement('input', { type: 'submit', value: 'Log in' })
			);
		}
	});
	
	exports.default = Login;

/***/ }

/******/ });
//# sourceMappingURL=bundle.js.map