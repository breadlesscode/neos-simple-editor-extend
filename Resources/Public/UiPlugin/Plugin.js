/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@ckeditor/ckeditor5-basic-styles/src/attributecommand.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-basic-styles/src/attributecommand.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _command = __webpack_require__(/*! @ckeditor/ckeditor5-core/src/command */ "./node_modules/@ckeditor/ckeditor5-core/src/command.js");

var _command2 = _interopRequireDefault(_command);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * For licensing, see LICENSE.md.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @module basic-styles/attributecommand
 */

/**
 * An extension of the base {@link module:core/command~Command} class, which provides utilities for a command
 * that toggles a single attribute on a text or an element.
 *
 * `AttributeCommand` uses {@link module:engine/model/document~Document#selection}
 * to decide which nodes (if any) should be changed, and applies or removes the attribute from them.
 *
 * The command checks the {@link module:engine/model/model~Model#schema} to decide if it can be enabled
 * for the current selection and to which nodes the attribute can be applied.
 *
 * @extends module:core/command~Command
 */
var AttributeCommand = function (_Command) {
	_inherits(AttributeCommand, _Command);

	/**
  * @param {module:core/editor/editor~Editor} editor
  * @param {String} attributeKey Attribute that will be set by the command.
  */
	function AttributeCommand(editor, attributeKey) {
		_classCallCheck(this, AttributeCommand);

		/**
   * The attribute that will be set by the command.
   *
   * @readonly
   * @member {String}
   */
		var _this = _possibleConstructorReturn(this, (AttributeCommand.__proto__ || Object.getPrototypeOf(AttributeCommand)).call(this, editor));

		_this.attributeKey = attributeKey;

		/**
   * Flag indicating whether the command is active. The command is active when the
   * {@link module:engine/model/selection~Selection#hasAttribute selection has the attribute} which means that:
   *
   * * If the selection is not empty &ndash; That the attribute is set on the first node in the selection that allows this attribute.
   * * If the selection is empty &ndash; That the selection has the attribute itself (which means that newly typed
   * text will have this attribute, too).
   *
   * @observable
   * @readonly
   * @member {Boolean} #value
   */
		return _this;
	}

	/**
  * Updates the command's {@link #value} and {@link #isEnabled} based on the current selection.
  */


	_createClass(AttributeCommand, [{
		key: 'refresh',
		value: function refresh() {
			var model = this.editor.model;
			var doc = model.document;

			this.value = this._getValueFromFirstAllowedNode();
			this.isEnabled = model.schema.checkAttributeInSelection(doc.selection, this.attributeKey);
		}

		/**
   * Executes the command &mdash; applies the attribute to the selection or removes it from the selection.
   *
   * If the command is active (`value == true`), it will remove attributes. Otherwise, it will set attributes.
   *
   * The execution result differs, depending on the {@link module:engine/model/document~Document#selection}:
   *
   * * If the selection is on a range, the command applies the attribute to all nodes in that range
   * (if they are allowed to have this attribute by the {@link module:engine/model/schema~Schema schema}).
   * * If the selection is collapsed in a non-empty node, the command applies the attribute to the
   * {@link module:engine/model/document~Document#selection} itself (note that typed characters copy attributes from the selection).
   * * If the selection is collapsed in an empty node, the command applies the attribute to the parent node of the selection (note
   * that the selection inherits all attributes from a node if it is in an empty node).
   *
   * @fires execute
   * @param {Object} [options] Command options.
   * @param {Boolean} [options.forceValue] If set, it will force the command behavior. If `true`, the command will apply the attribute,
   * otherwise the command will remove the attribute.
   * If not set, the command will look for its current value to decide what it should do.
   */

	}, {
		key: 'execute',
		value: function execute() {
			var _this2 = this;

			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			var model = this.editor.model;
			var doc = model.document;
			var selection = doc.selection;
			var value = options.forceValue === undefined ? !this.value : options.forceValue;

			model.change(function (writer) {
				if (selection.isCollapsed) {
					if (value) {
						writer.setSelectionAttribute(_this2.attributeKey, true);
					} else {
						writer.removeSelectionAttribute(_this2.attributeKey);
					}
				} else {
					var ranges = model.schema.getValidRanges(selection.getRanges(), _this2.attributeKey);

					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;

					try {
						for (var _iterator = ranges[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							var range = _step.value;

							if (value) {
								writer.setAttribute(_this2.attributeKey, value, range);
							} else {
								writer.removeAttribute(_this2.attributeKey, range);
							}
						}
					} catch (err) {
						_didIteratorError = true;
						_iteratorError = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion && _iterator.return) {
								_iterator.return();
							}
						} finally {
							if (_didIteratorError) {
								throw _iteratorError;
							}
						}
					}
				}
			});
		}

		/**
   * Checks the attribute value of the first node in the selection that allows the attribute.
   * For the collapsed selection returns the selection attribute.
   *
   * @private
   * @returns {Boolean} The attribute value.
   */

	}, {
		key: '_getValueFromFirstAllowedNode',
		value: function _getValueFromFirstAllowedNode() {
			var model = this.editor.model;
			var schema = model.schema;
			var selection = model.document.selection;

			if (selection.isCollapsed) {
				return selection.hasAttribute(this.attributeKey);
			}

			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = selection.getRanges()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var range = _step2.value;
					var _iteratorNormalCompletion3 = true;
					var _didIteratorError3 = false;
					var _iteratorError3 = undefined;

					try {
						for (var _iterator3 = range.getItems()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
							var item = _step3.value;

							if (schema.checkAttribute(item, this.attributeKey)) {
								return item.hasAttribute(this.attributeKey);
							}
						}
					} catch (err) {
						_didIteratorError3 = true;
						_iteratorError3 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion3 && _iterator3.return) {
								_iterator3.return();
							}
						} finally {
							if (_didIteratorError3) {
								throw _iteratorError3;
							}
						}
					}
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}

			return false;
		}
	}]);

	return AttributeCommand;
}(_command2.default);

exports.default = AttributeCommand;

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-core/src/command.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-core/src/command.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * For licensing, see LICENSE.md.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

/**
 * @module core/command
 */

var _observablemixin = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/observablemixin */ "./node_modules/@ckeditor/ckeditor5-utils/src/observablemixin.js");

var _observablemixin2 = _interopRequireDefault(_observablemixin);

var _mix = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/mix */ "./node_modules/@ckeditor/ckeditor5-utils/src/mix.js");

var _mix2 = _interopRequireDefault(_mix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The base class for CKEditor commands.
 *
 * Commands are the main way to manipulate editor contents and state. They are mostly used by UI elements (or by other
 * commands) to make changes in the model. Commands are available in every part of code that has access to
 * the {@link module:core/editor/editor~Editor editor} instance.
 *
 * Instances of registered commands can be retrieved from {@link module:core/editor/editor~Editor#commands}.
 * The easiest way to execute a command is through {@link module:core/editor/editor~Editor#execute}.
 *
 * By default commands are disabled when the editor is in {@link module:core/editor/editor~Editor#isReadOnly read-only} mode.
 *
 * @mixes module:utils/observablemixin~ObservableMixin
 */
var Command = function () {
	/**
  * Creates a new `Command` instance.
  *
  * @param {module:core/editor/editor~Editor} editor Editor on which this command will be used.
  */
	function Command(editor) {
		var _this = this;

		_classCallCheck(this, Command);

		/**
   * The editor on which this command will be used.
   *
   * @readonly
   * @member {module:core/editor/editor~Editor}
   */
		this.editor = editor;

		/**
   * The value of a command. Concrete command class should define what it represents.
   *
   * For example, the `bold` command's value is whether the selection starts in a bolded text.
   * And the value of the `link` command may be an object with links details.
   *
   * It's possible for a command to have no value (e.g. for stateless actions such as `imageUpload`).
   *
   * @observable
   * @readonly
   * @member #value
   */
		this.set('value', undefined);

		/**
   * Flag indicating whether a command is enabled or disabled.
   * A disabled command should do nothing when executed.
   *
   * @observable
   * @readonly
   * @member {Boolean} #isEnabled
   */
		this.set('isEnabled', false);

		this.decorate('execute');

		// By default every command is refreshed when changes are applied to the model.
		this.listenTo(this.editor.model.document, 'change', function () {
			_this.refresh();
		});

		this.on('execute', function (evt) {
			if (!_this.isEnabled) {
				evt.stop();
			}
		}, { priority: 'high' });

		// By default commands are disabled when the editor is in read-only mode.
		this.listenTo(editor, 'change:isReadOnly', function (evt, name, value) {
			if (value) {
				_this.on('set:isEnabled', forceDisable, { priority: 'highest' });
				_this.isEnabled = false;
			} else {
				_this.off('set:isEnabled', forceDisable);
				_this.refresh();
			}
		});
	}

	/**
  * Refreshes the command. The command should update its {@link #isEnabled} and {@link #value} property
  * in this method.
  *
  * This method is automatically called when
  * {@link module:engine/model/document~Document#event:change any changes are applied to the document}.
  */


	_createClass(Command, [{
		key: 'refresh',
		value: function refresh() {
			this.isEnabled = true;
		}

		/**
   * Executes the command.
   *
   * A command may accept parameters. They will be passed from {@link module:core/editor/editor~Editor#execute}
   * to the command.
   *
   * The `execute()` method will automatically abort when the command is disabled ({@link #isEnabled} is `false`).
   * This behavior is implemented by a high priority listener to the {@link #event:execute} event.
   *
   * @fires execute
   */

	}, {
		key: 'execute',
		value: function execute() {}

		/**
   * Destroys the command.
   */

	}, {
		key: 'destroy',
		value: function destroy() {
			this.stopListening();
		}

		/**
   * Event fired by the {@link #execute} method. The command action is a listener to this event so it's
   * possible to change/cancel the behavior of the command by listening to this event.
   *
   * See {@link module:utils/observablemixin~ObservableMixin.decorate} for more information and samples.
   *
   * **Note:** This event is fired even if command is disabled. However, it is automatically blocked
   * by a high priority listener in order to prevent command execution.
   *
   * @event execute
   */

	}]);

	return Command;
}();

exports.default = Command;


(0, _mix2.default)(Command, _observablemixin2.default);

// Helper function that forces command to be disabled.
function forceDisable(evt) {
	evt.return = false;
	evt.stop();
}

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-core/src/plugin.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-core/src/plugin.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * For licensing, see LICENSE.md.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

/**
 * @module core/plugin
 */

var _observablemixin = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/observablemixin */ "./node_modules/@ckeditor/ckeditor5-utils/src/observablemixin.js");

var _observablemixin2 = _interopRequireDefault(_observablemixin);

var _mix = __webpack_require__(/*! @ckeditor/ckeditor5-utils/src/mix */ "./node_modules/@ckeditor/ckeditor5-utils/src/mix.js");

var _mix2 = _interopRequireDefault(_mix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The base class for CKEditor plugin classes.
 *
 * @implements module:core/plugin~PluginInterface
 * @mixes module:utils/observablemixin~ObservableMixin
 */
var Plugin = function () {
  /**
   * @inheritDoc
   */
  function Plugin(editor) {
    _classCallCheck(this, Plugin);

    /**
     * The editor instance.
     *
     * Note that most editors implement the {@link module:core/editor/editorwithui~EditorWithUI} interface in addition
     * to the base {@link module:core/editor/editor~Editor} interface. However, editors with an external UI
     * (i.e. Bootstrap-based) or a headless editor may not implement the {@link module:core/editor/editorwithui~EditorWithUI}
     * interface.
     *
     * Because of above, to make plugins more universal, it is recommended to split features into:
     *  - The "editing" part that only uses the {@link module:core/editor/editor~Editor} interface.
     *  - The "UI" part that uses both the {@link module:core/editor/editor~Editor} interface and
     *  the {@link module:core/editor/editorwithui~EditorWithUI} interface.
     *
     * @readonly
     * @member {module:core/editor/editor~Editor} #editor
     */
    this.editor = editor;
  }

  /**
   * @inheritDoc
   */


  _createClass(Plugin, [{
    key: 'destroy',
    value: function destroy() {
      this.stopListening();
    }
  }]);

  return Plugin;
}();

exports.default = Plugin;


(0, _mix2.default)(Plugin, _observablemixin2.default);

/**
 * The base interface for CKEditor plugins.
 *
 * In its minimal form it can be a simple function (it will be used as a constructor) that accepts
 * {@link module:core/editor/editor~Editor the editor} as a parameter.
 * It can also implement a few methods which, when present, will be used to properly initialize and destroy the plugin.
 *
 *		// A simple plugin that enables a data processor.
 *		function MyPlugin( editor ) {
 *			editor.data.processor = new MyDataProcessor();
 *		}
 *
 * In most cases, however, you will want to inherit from the {@link module:core/plugin~Plugin} class which implements the
 * {@link module:utils/observablemixin~ObservableMixin} and is, therefore, more convenient:
 *
 *		class MyPlugin extends Plugin {
 *			init() {
 *				// `listenTo()` and `editor` are available thanks to `Plugin`.
 *				// By using `listenTo()` you will ensure that the listener is removed when
 *				// the plugin is destroyed.
 *				this.listenTo( this.editor, 'dataReady', () => {
 *					// Do something when the data is ready.
 *				} );
 *			}
 *		}
 *
 * @interface PluginInterface
 */

/**
 * Creates a new plugin instance. This is the first step of the plugin initialization.
 * See also {@link #init} and {@link #afterInit}.
 *
 * A plugin is always instantiated after its {@link module:core/plugin~PluginInterface.requires dependencies} and the
 * {@link #init} and {@link #afterInit} methods are called in the same order.
 *
 * Usually, you will want to put your plugin's initialization code in the {@link #init} method.
 * The constructor can be understood as "before init" and used in special cases, just like
 * {@link #afterInit} serves the special "after init" scenarios (e.g.the code which depends on other
 * plugins, but which does not {@link module:core/plugin~PluginInterface.requires explicitly require} them).
 *
 * @method #constructor
 * @param {module:core/editor/editor~Editor} editor
 */

/**
 * An array of plugins required by this plugin.
 *
 * To keep the plugin class definition tight it is recommended to define this property as a static getter:
 *
 *		import Image from './image.js';
 *
 *		export default class ImageCaption {
 *			static get requires() {
 *				return [ Image ];
 *			}
 *		}
 *
 * @static
 * @readonly
 * @member {Array.<Function>|undefined} module:core/plugin~PluginInterface.requires
 */

/**
 * An optional name of the plugin. If set, the plugin will be available in
 * {@link module:core/plugincollection~PluginCollection#get} by its
 * name and its constructor. If not, then only by its constructor.
 *
 * The name should reflect the constructor name.
 *
 * To keep the plugin class definition tight it is recommended to define this property as a static getter:
 *
 *		export default class ImageCaption {
 *			static get pluginName() {
 *				return 'ImageCaption';
 *			}
 *		}
 *
 * Note: The native `Function.name` property could not be used to keep the plugin name because
 * it will be mangled during code minification.
 *
 * Naming a plugin is necessary to enable removing it through the
 * {@link module:core/editor/editorconfig~EditorConfig#removePlugins `config.removePlugins`} option.
 *
 * @static
 * @readonly
 * @member {String|undefined} module:core/plugin~PluginInterface.pluginName
 */

/**
 * The second stage (after plugin {@link #constructor}) of plugin initialization.
 * Unlike the plugin constructor this method can be asynchronous.
 *
 * A plugin's `init()` method is called after its {@link module:core/plugin~PluginInterface.requires dependencies} are initialized,
 * so in the same order as constructors of these plugins.
 *
 * **Note:** This method is optional. A plugin instance does not need to have it defined.
 *
 * @method #init
 * @returns {null|Promise}
 */

/**
 * The third (and last) stage of plugin initialization. See also {@link #constructor} and {@link #init}.
 *
 * **Note:** This method is optional. A plugin instance does not need to have it defined.
 *
 * @method #afterInit
 * @returns {null|Promise}
 */

/**
 * Destroys the plugin.
 *
 * **Note:** This method is optional. A plugin instance does not need to have it defined.
 *
 * @method #destroy
 * @returns {null|Promise}
 */

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/ckeditorerror.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/ckeditorerror.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.attachLinkToDocumentation = attachLinkToDocumentation;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module utils/ckeditorerror
 */

/**
 * URL to the documentation with error codes.
 */
var DOCUMENTATION_URL = exports.DOCUMENTATION_URL = 'https://docs.ckeditor.com/ckeditor5/latest/framework/guides/support/error-codes.html';

/**
 * The CKEditor error class.
 *
 * All errors will be shortened during the minification process in order to reduce the code size.
 * Therefore, all error messages should be documented in the same way as those in {@link module:utils/log}.
 *
 * Read more in the {@link module:utils/log} module.
 *
 * @extends Error
 */

var CKEditorError = function (_Error) {
	_inherits(CKEditorError, _Error);

	/**
  * Creates an instance of the CKEditorError class.
  *
  * Read more about error logging in the {@link module:utils/log} module.
  *
  * @param {String} message The error message in an `error-name: Error message.` format.
  * During the minification process the "Error message" part will be removed to limit the code size
  * and a link to this error documentation will be added to the `message`.
  * @param {Object} [data] Additional data describing the error. A stringified version of this object
  * will be appended to the error message, so the data are quickly visible in the console. The original
  * data object will also be later available under the {@link #data} property.
  */
	function CKEditorError(message, data) {
		_classCallCheck(this, CKEditorError);

		message = attachLinkToDocumentation(message);

		if (data) {
			message += ' ' + JSON.stringify(data);
		}

		/**
   * @member {String}
   */
		var _this = _possibleConstructorReturn(this, (CKEditorError.__proto__ || Object.getPrototypeOf(CKEditorError)).call(this, message));

		_this.name = 'CKEditorError';

		/**
   * The additional error data passed to the constructor.
   *
   * @member {Object}
   */
		_this.data = data;
		return _this;
	}

	/**
  * Checks if error is an instance of CKEditorError class.
  *
  * @param {Object} error Object to check.
  * @returns {Boolean}
  */


	_createClass(CKEditorError, null, [{
		key: 'isCKEditorError',
		value: function isCKEditorError(error) {
			return error instanceof CKEditorError;
		}
	}]);

	return CKEditorError;
}(Error);

/**
 * Attaches link to the documentation at the end of the error message.
 *
 * @param {String} message Message to be logged.
 * @returns {String}
 */


exports.default = CKEditorError;
function attachLinkToDocumentation(message) {
	var matchedErrorName = message.match(/^([^:]+):/);

	if (!matchedErrorName) {
		return message;
	}

	return message + (' Read more: ' + DOCUMENTATION_URL + '#error-' + matchedErrorName[1] + '\n');
}

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/emittermixin.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/emittermixin.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * For licensing, see LICENSE.md.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

/**
 * @module utils/emittermixin
 */

exports._getEmitterListenedTo = _getEmitterListenedTo;
exports._setEmitterId = _setEmitterId;
exports._getEmitterId = _getEmitterId;

var _eventinfo = __webpack_require__(/*! ./eventinfo */ "./node_modules/@ckeditor/ckeditor5-utils/src/eventinfo.js");

var _eventinfo2 = _interopRequireDefault(_eventinfo);

var _uid = __webpack_require__(/*! ./uid */ "./node_modules/@ckeditor/ckeditor5-utils/src/uid.js");

var _uid2 = _interopRequireDefault(_uid);

var _priorities = __webpack_require__(/*! ./priorities */ "./node_modules/@ckeditor/ckeditor5-utils/src/priorities.js");

var _priorities2 = _interopRequireDefault(_priorities);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _listeningTo = Symbol('listeningTo');
var _emitterId = Symbol('emitterId');

/**
 * Mixin that injects the {@link ~Emitter events API} into its host.
 *
 * @mixin EmitterMixin
 * @implements module:utils/emittermixin~Emitter
 */
var EmitterMixin = {
	/**
  * @inheritDoc
  */
	on: function on(event, callback) {
		var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

		this.listenTo(this, event, callback, options);
	},


	/**
  * @inheritDoc
  */
	once: function once(event, callback, options) {
		var onceCallback = function onceCallback(event) {
			// Go off() at the first call.
			event.off();

			// Go with the original callback.

			for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				args[_key - 1] = arguments[_key];
			}

			callback.call.apply(callback, [this, event].concat(args));
		};

		// Make a similar on() call, simply replacing the callback.
		this.listenTo(this, event, onceCallback, options);
	},


	/**
  * @inheritDoc
  */
	off: function off(event, callback) {
		this.stopListening(this, event, callback);
	},


	/**
  * @inheritDoc
  */
	listenTo: function listenTo(emitter, event, callback) {
		var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

		var emitterInfo = void 0,
		    eventCallbacks = void 0;

		// _listeningTo contains a list of emitters that this object is listening to.
		// This list has the following format:
		//
		// _listeningTo: {
		//     emitterId: {
		//         emitter: emitter,
		//         callbacks: {
		//             event1: [ callback1, callback2, ... ]
		//             ....
		//         }
		//     },
		//     ...
		// }

		if (!this[_listeningTo]) {
			this[_listeningTo] = {};
		}

		var emitters = this[_listeningTo];

		if (!_getEmitterId(emitter)) {
			_setEmitterId(emitter);
		}

		var emitterId = _getEmitterId(emitter);

		if (!(emitterInfo = emitters[emitterId])) {
			emitterInfo = emitters[emitterId] = {
				emitter: emitter,
				callbacks: {}
			};
		}

		if (!(eventCallbacks = emitterInfo.callbacks[event])) {
			eventCallbacks = emitterInfo.callbacks[event] = [];
		}

		eventCallbacks.push(callback);

		// Finally register the callback to the event.
		createEventNamespace(emitter, event);
		var lists = getCallbacksListsForNamespace(emitter, event);
		var priority = _priorities2.default.get(options.priority);

		var callbackDefinition = {
			callback: callback,
			priority: priority
		};

		// Add the callback to all callbacks list.
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = lists[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var callbacks = _step.value;

				// Add the callback to the list in the right priority position.
				var added = false;

				for (var i = 0; i < callbacks.length; i++) {
					if (callbacks[i].priority < priority) {
						callbacks.splice(i, 0, callbackDefinition);
						added = true;

						break;
					}
				}

				// Add at the end, if right place was not found.
				if (!added) {
					callbacks.push(callbackDefinition);
				}
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}
	},


	/**
  * @inheritDoc
  */
	stopListening: function stopListening(emitter, event, callback) {
		var emitters = this[_listeningTo];
		var emitterId = emitter && _getEmitterId(emitter);
		var emitterInfo = emitters && emitterId && emitters[emitterId];
		var eventCallbacks = emitterInfo && event && emitterInfo.callbacks[event];

		// Stop if nothing has been listened.
		if (!emitters || emitter && !emitterInfo || event && !eventCallbacks) {
			return;
		}

		// All params provided. off() that single callback.
		if (callback) {
			removeCallback(emitter, event, callback);
		}
		// Only `emitter` and `event` provided. off() all callbacks for that event.
		else if (eventCallbacks) {
				while (callback = eventCallbacks.pop()) {
					removeCallback(emitter, event, callback);
				}

				delete emitterInfo.callbacks[event];
			}
			// Only `emitter` provided. off() all events for that emitter.
			else if (emitterInfo) {
					for (event in emitterInfo.callbacks) {
						this.stopListening(emitter, event);
					}
					delete emitters[emitterId];
				}
				// No params provided. off() all emitters.
				else {
						for (emitterId in emitters) {
							this.stopListening(emitters[emitterId].emitter);
						}
						delete this[_listeningTo];
					}
	},


	/**
  * @inheritDoc
  */
	fire: function fire(eventOrInfo) {
		var eventInfo = eventOrInfo instanceof _eventinfo2.default ? eventOrInfo : new _eventinfo2.default(this, eventOrInfo);
		var event = eventInfo.name;
		var callbacks = getCallbacksForEvent(this, event);

		// Record that the event passed this emitter on its path.
		eventInfo.path.push(this);

		// Handle event listener callbacks first.

		for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
			args[_key2 - 1] = arguments[_key2];
		}

		if (callbacks) {
			// Arguments passed to each callback.
			var callbackArgs = [eventInfo].concat(args);

			// Copying callbacks array is the easiest and most secure way of preventing infinite loops, when event callbacks
			// are added while processing other callbacks. Previous solution involved adding counters (unique ids) but
			// failed if callbacks were added to the queue before currently processed callback.
			// If this proves to be too inefficient, another method is to change `.on()` so callbacks are stored if same
			// event is currently processed. Then, `.fire()` at the end, would have to add all stored events.
			callbacks = Array.from(callbacks);

			for (var i = 0; i < callbacks.length; i++) {
				callbacks[i].callback.apply(this, callbackArgs);

				// Remove the callback from future requests if off() has been called.
				if (eventInfo.off.called) {
					// Remove the called mark for the next calls.
					delete eventInfo.off.called;

					removeCallback(this, event, callbacks[i].callback);
				}

				// Do not execute next callbacks if stop() was called.
				if (eventInfo.stop.called) {
					break;
				}
			}
		}

		// Delegate event to other emitters if needed.
		if (this._delegations) {
			var destinations = this._delegations.get(event);
			var passAllDestinations = this._delegations.get('*');

			if (destinations) {
				fireDelegatedEvents(destinations, eventInfo, args);
			}

			if (passAllDestinations) {
				fireDelegatedEvents(passAllDestinations, eventInfo, args);
			}
		}

		return eventInfo.return;
	},


	/**
  * @inheritDoc
  */
	delegate: function delegate() {
		var _this = this;

		for (var _len3 = arguments.length, events = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
			events[_key3] = arguments[_key3];
		}

		return {
			to: function to(emitter, nameOrFunction) {
				if (!_this._delegations) {
					_this._delegations = new Map();
				}

				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = events[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var eventName = _step2.value;

						var destinations = _this._delegations.get(eventName);

						if (!destinations) {
							_this._delegations.set(eventName, new Map([[emitter, nameOrFunction]]));
						} else {
							destinations.set(emitter, nameOrFunction);
						}
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2.return) {
							_iterator2.return();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}
			}
		};
	},


	/**
  * @inheritDoc
  */
	stopDelegating: function stopDelegating(event, emitter) {
		if (!this._delegations) {
			return;
		}

		if (!event) {
			this._delegations.clear();
		} else if (!emitter) {
			this._delegations.delete(event);
		} else {
			var destinations = this._delegations.get(event);

			if (destinations) {
				destinations.delete(emitter);
			}
		}
	}
};

exports.default = EmitterMixin;

/**
 * Emitter/listener interface.
 *
 * Can be easily implemented by a class by mixing the {@link module:utils/emittermixin~EmitterMixin} mixin.
 *
 * @interface Emitter
 */

/**
 * Registers a callback function to be executed when an event is fired.
 *
 * Shorthand for {@link #listenTo `this.listenTo( this, event, callback, options )`} (it makes the emitter
 * listen on itself).
 *
 * @method #on
 * @param {String} event The name of the event.
 * @param {Function} callback The function to be called on event.
 * @param {Object} [options={}] Additional options.
 * @param {module:utils/priorities~PriorityString|Number} [options.priority='normal'] The priority of this event callback. The higher
 * the priority value the sooner the callback will be fired. Events having the same priority are called in the
 * order they were added.
 */

/**
 * Registers a callback function to be executed on the next time the event is fired only. This is similar to
 * calling {@link #on} followed by {@link #off} in the callback.
 *
 * @method #once
 * @param {String} event The name of the event.
 * @param {Function} callback The function to be called on event.
 * @param {Object} [options={}] Additional options.
 * @param {module:utils/priorities~PriorityString|Number} [options.priority='normal'] The priority of this event callback. The higher
 * the priority value the sooner the callback will be fired. Events having the same priority are called in the
 * order they were added.
 */

/**
 * Stops executing the callback on the given event.
 * Shorthand for {@link #stopListening `this.stopListening( this, event, callback )`}.
 *
 * @method #off
 * @param {String} event The name of the event.
 * @param {Function} callback The function to stop being called.
 */

/**
 * Registers a callback function to be executed when an event is fired in a specific (emitter) object.
 *
 * Events can be grouped in namespaces using `:`.
 * When namespaced event is fired, it additionally fires all callbacks for that namespace.
 *
 *		// myEmitter.on( ... ) is a shorthand for myEmitter.listenTo( myEmitter, ... ).
 *		myEmitter.on( 'myGroup', genericCallback );
 *		myEmitter.on( 'myGroup:myEvent', specificCallback );
 *
 *		// genericCallback is fired.
 *		myEmitter.fire( 'myGroup' );
 *		// both genericCallback and specificCallback are fired.
 *		myEmitter.fire( 'myGroup:myEvent' );
 *		// genericCallback is fired even though there are no callbacks for "foo".
 *		myEmitter.fire( 'myGroup:foo' );
 *
 * An event callback can {@link module:utils/eventinfo~EventInfo#stop stop the event} and
 * set the {@link module:utils/eventinfo~EventInfo#return return value} of the {@link #fire} method.
 *
 * @method #listenTo
 * @param {module:utils/emittermixin~Emitter} emitter The object that fires the event.
 * @param {String} event The name of the event.
 * @param {Function} callback The function to be called on event.
 * @param {Object} [options={}] Additional options.
 * @param {module:utils/priorities~PriorityString|Number} [options.priority='normal'] The priority of this event callback. The higher
 * the priority value the sooner the callback will be fired. Events having the same priority are called in the
 * order they were added.
 */

/**
 * Stops listening for events. It can be used at different levels:
 *
 * * To stop listening to a specific callback.
 * * To stop listening to a specific event.
 * * To stop listening to all events fired by a specific object.
 * * To stop listening to all events fired by all objects.
 *
 * @method #stopListening
 * @param {module:utils/emittermixin~Emitter} [emitter] The object to stop listening to. If omitted, stops it for all objects.
 * @param {String} [event] (Requires the `emitter`) The name of the event to stop listening to. If omitted, stops it
 * for all events from `emitter`.
 * @param {Function} [callback] (Requires the `event`) The function to be removed from the call list for the given
 * `event`.
 */

/**
 * Fires an event, executing all callbacks registered for it.
 *
 * The first parameter passed to callbacks is an {@link module:utils/eventinfo~EventInfo} object,
 * followed by the optional `args` provided in the `fire()` method call.
 *
 * @method #fire
 * @param {String|module:utils/eventinfo~EventInfo} eventOrInfo The name of the event or `EventInfo` object if event is delegated.
 * @param {...*} [args] Additional arguments to be passed to the callbacks.
 * @returns {*} By default the method returns `undefined`. However, the return value can be changed by listeners
 * through modification of the {@link module:utils/eventinfo~EventInfo#return `evt.return`}'s property (the event info
 * is the first param of every callback).
 */

/**
 * Delegates selected events to another {@link module:utils/emittermixin~Emitter}. For instance:
 *
 *		emitterA.delegate( 'eventX' ).to( emitterB );
 *		emitterA.delegate( 'eventX', 'eventY' ).to( emitterC );
 *
 * then `eventX` is delegated (fired by) `emitterB` and `emitterC` along with `data`:
 *
 *		emitterA.fire( 'eventX', data );
 *
 * and `eventY` is delegated (fired by) `emitterC` along with `data`:
 *
 *		emitterA.fire( 'eventY', data );
 *
 * @method #delegate
 * @param {...String} events Event names that will be delegated to another emitter.
 * @returns {module:utils/emittermixin~EmitterMixinDelegateChain}
 */

/**
 * Stops delegating events. It can be used at different levels:
 *
 * * To stop delegating all events.
 * * To stop delegating a specific event to all emitters.
 * * To stop delegating a specific event to a specific emitter.
 *
 * @method #stopDelegating
 * @param {String} [event] The name of the event to stop delegating. If omitted, stops it all delegations.
 * @param {module:utils/emittermixin~Emitter} [emitter] (requires `event`) The object to stop delegating a particular event to.
 * If omitted, stops delegation of `event` to all emitters.
 */

/**
 * Checks if `listeningEmitter` listens to an emitter with given `listenedToEmitterId` and if so, returns that emitter.
 * If not, returns `null`.
 *
 * @protected
 * @param {module:utils/emittermixin~EmitterMixin} listeningEmitter Emitter that listens.
 * @param {String} listenedToEmitterId Unique emitter id of emitter listened to.
 * @returns {module:utils/emittermixin~EmitterMixin|null}
 */

function _getEmitterListenedTo(listeningEmitter, listenedToEmitterId) {
	if (listeningEmitter[_listeningTo] && listeningEmitter[_listeningTo][listenedToEmitterId]) {
		return listeningEmitter[_listeningTo][listenedToEmitterId].emitter;
	}

	return null;
}

/**
 * Sets emitter's unique id.
 *
 * **Note:** `_emitterId` can be set only once.
 *
 * @protected
 * @param {module:utils/emittermixin~EmitterMixin} emitter Emitter for which id will be set.
 * @param {String} [id] Unique id to set. If not passed, random unique id will be set.
 */
function _setEmitterId(emitter, id) {
	if (!emitter[_emitterId]) {
		emitter[_emitterId] = id || (0, _uid2.default)();
	}
}

/**
 * Returns emitter's unique id.
 *
 * @protected
 * @param {module:utils/emittermixin~EmitterMixin} emitter Emitter which id will be returned.
 */
function _getEmitterId(emitter) {
	return emitter[_emitterId];
}

// Gets the internal `_events` property of the given object.
// `_events` property store all lists with callbacks for registered event names.
// If there were no events registered on the object, empty `_events` object is created.
function getEvents(source) {
	if (!source._events) {
		Object.defineProperty(source, '_events', {
			value: {}
		});
	}

	return source._events;
}

// Creates event node for generic-specific events relation architecture.
function makeEventNode() {
	return {
		callbacks: [],
		childEvents: []
	};
}

// Creates an architecture for generic-specific events relation.
// If needed, creates all events for given eventName, i.e. if the first registered event
// is foo:bar:abc, it will create foo:bar:abc, foo:bar and foo event and tie them together.
// It also copies callbacks from more generic events to more specific events when
// specific events are created.
function createEventNamespace(source, eventName) {
	var events = getEvents(source);

	// First, check if the event we want to add to the structure already exists.
	if (events[eventName]) {
		// If it exists, we don't have to do anything.
		return;
	}

	// In other case, we have to create the structure for the event.
	// Note, that we might need to create intermediate events too.
	// I.e. if foo:bar:abc is being registered and we only have foo in the structure,
	// we need to also register foo:bar.

	// Currently processed event name.
	var name = eventName;
	// Name of the event that is a child event for currently processed event.
	var childEventName = null;

	// Array containing all newly created specific events.
	var newEventNodes = [];

	// While loop can't check for ':' index because we have to handle generic events too.
	// In each loop, we truncate event name, going from the most specific name to the generic one.
	// I.e. foo:bar:abc -> foo:bar -> foo.
	while (name !== '') {
		if (events[name]) {
			// If the currently processed event name is already registered, we can be sure
			// that it already has all the structure created, so we can break the loop here
			// as no more events need to be registered.
			break;
		}

		// If this event is not yet registered, create a new object for it.
		events[name] = makeEventNode();
		// Add it to the array with newly created events.
		newEventNodes.push(events[name]);

		// Add previously processed event name as a child of this event.
		if (childEventName) {
			events[name].childEvents.push(childEventName);
		}

		childEventName = name;
		// If `.lastIndexOf()` returns -1, `.substr()` will return '' which will break the loop.
		name = name.substr(0, name.lastIndexOf(':'));
	}

	if (name !== '') {
		// If name is not empty, we found an already registered event that was a parent of the
		// event we wanted to register.

		// Copy that event's callbacks to newly registered events.
		var _iteratorNormalCompletion3 = true;
		var _didIteratorError3 = false;
		var _iteratorError3 = undefined;

		try {
			for (var _iterator3 = newEventNodes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
				var node = _step3.value;

				node.callbacks = events[name].callbacks.slice();
			}

			// Add last newly created event to the already registered event.
		} catch (err) {
			_didIteratorError3 = true;
			_iteratorError3 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion3 && _iterator3.return) {
					_iterator3.return();
				}
			} finally {
				if (_didIteratorError3) {
					throw _iteratorError3;
				}
			}
		}

		events[name].childEvents.push(childEventName);
	}
}

// Gets an array containing callbacks list for a given event and it's more specific events.
// I.e. if given event is foo:bar and there is also foo:bar:abc event registered, this will
// return callback list of foo:bar and foo:bar:abc (but not foo).
function getCallbacksListsForNamespace(source, eventName) {
	var eventNode = getEvents(source)[eventName];

	if (!eventNode) {
		return [];
	}

	var callbacksLists = [eventNode.callbacks];

	for (var i = 0; i < eventNode.childEvents.length; i++) {
		var childCallbacksLists = getCallbacksListsForNamespace(source, eventNode.childEvents[i]);

		callbacksLists = callbacksLists.concat(childCallbacksLists);
	}

	return callbacksLists;
}

// Get the list of callbacks for a given event, but only if there any callbacks have been registered.
// If there are no callbacks registered for given event, it checks if this is a specific event and looks
// for callbacks for it's more generic version.
function getCallbacksForEvent(source, eventName) {
	var event = void 0;

	if (!source._events || !(event = source._events[eventName]) || !event.callbacks.length) {
		// There are no callbacks registered for specified eventName.
		// But this could be a specific-type event that is in a namespace.
		if (eventName.indexOf(':') > -1) {
			// If the eventName is specific, try to find callback lists for more generic event.
			return getCallbacksForEvent(source, eventName.substr(0, eventName.lastIndexOf(':')));
		} else {
			// If this is a top-level generic event, return null;
			return null;
		}
	}

	return event.callbacks;
}

// Fires delegated events for given map of destinations.
//
// @private
// * @param {Map.<utils.Emitter>} destinations A map containing `[ {@link utils.Emitter}, "event name" ]` pair destinations.
// * @param {utils.EventInfo} eventInfo The original event info object.
// * @param {Array.<*>} fireArgs Arguments the original event was fired with.
function fireDelegatedEvents(destinations, eventInfo, fireArgs) {
	var _iteratorNormalCompletion4 = true;
	var _didIteratorError4 = false;
	var _iteratorError4 = undefined;

	try {
		for (var _iterator4 = destinations[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
			var _step4$value = _slicedToArray(_step4.value, 2),
			    emitter = _step4$value[0],
			    name = _step4$value[1];

			if (!name) {
				name = eventInfo.name;
			} else if (typeof name == 'function') {
				name = name(eventInfo.name);
			}

			var delegatedInfo = new _eventinfo2.default(eventInfo.source, name);

			delegatedInfo.path = [].concat(_toConsumableArray(eventInfo.path));

			emitter.fire.apply(emitter, [delegatedInfo].concat(_toConsumableArray(fireArgs)));
		}
	} catch (err) {
		_didIteratorError4 = true;
		_iteratorError4 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion4 && _iterator4.return) {
				_iterator4.return();
			}
		} finally {
			if (_didIteratorError4) {
				throw _iteratorError4;
			}
		}
	}
}

// Removes callback from emitter for given event.
//
// @param {module:utils/emittermixin~Emitter} emitter
// @param {String} event
// @param {Function} callback
function removeCallback(emitter, event, callback) {
	var lists = getCallbacksListsForNamespace(emitter, event);

	var _iteratorNormalCompletion5 = true;
	var _didIteratorError5 = false;
	var _iteratorError5 = undefined;

	try {
		for (var _iterator5 = lists[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
			var callbacks = _step5.value;

			for (var i = 0; i < callbacks.length; i++) {
				if (callbacks[i].callback == callback) {
					// Remove the callback from the list (fixing the next index).
					callbacks.splice(i, 1);
					i--;
				}
			}
		}
	} catch (err) {
		_didIteratorError5 = true;
		_iteratorError5 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion5 && _iterator5.return) {
				_iterator5.return();
			}
		} finally {
			if (_didIteratorError5) {
				throw _iteratorError5;
			}
		}
	}
}

/**
 * The return value of {@link ~EmitterMixin#delegate}.
 *
 * @interface module:utils/emittermixin~EmitterMixinDelegateChain
 */

/**
 * Selects destination for {@link module:utils/emittermixin~EmitterMixin#delegate} events.
 *
 * @method #to
 * @param {module:utils/emittermixin~Emitter} emitter An `EmitterMixin` instance which is the destination for delegated events.
 * @param {String|Function} nameOrFunction A custom event name or function which converts the original name string.
 */

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/eventinfo.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/eventinfo.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _spy = __webpack_require__(/*! ./spy */ "./node_modules/@ckeditor/ckeditor5-utils/src/spy.js");

var _spy2 = _interopRequireDefault(_spy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
                                                                                                                                                           * For licensing, see LICENSE.md.
                                                                                                                                                           */

/**
 * @module utils/eventinfo
 */

/**
 * The event object passed to event callbacks. It is used to provide information about the event as well as a tool to
 * manipulate it.
 */
var EventInfo =
/**
 * @param {Object} source The emitter.
 * @param {String} name The event name.
 */
function EventInfo(source, name) {
	_classCallCheck(this, EventInfo);

	/**
  * The object that fired the event.
  *
  * @readonly
  * @member {Object}
  */
	this.source = source;

	/**
  * The event name.
  *
  * @readonly
  * @member {String}
  */
	this.name = name;

	/**
  * Path this event has followed. See {@link module:utils/emittermixin~EmitterMixin#delegate}.
  *
  * @readonly
  * @member {Array.<Object>}
  */
	this.path = [];

	// The following methods are defined in the constructor because they must be re-created per instance.

	/**
  * Stops the event emitter to call further callbacks for this event interaction.
  *
  * @method #stop
  */
	this.stop = (0, _spy2.default)();

	/**
  * Removes the current callback from future interactions of this event.
  *
  * @method #off
  */
	this.off = (0, _spy2.default)();

	/**
  * The value which will be returned by {@link module:utils/emittermixin~EmitterMixin#fire}.
  *
  * It's `undefined` by default and can be changed by an event listener:
  *
  *		dataController.fire( 'getSelectedContent', ( evt ) => {
  *			// This listener will make `dataController.fire( 'getSelectedContent' )`
  *			// always return an empty DocumentFragment.
  *			evt.return = new DocumentFragment();
  *
  *			// Make sure no other listeners are executed.
  *			evt.stop();
  *		} );
  *
  * @member #return
  */
};

exports.default = EventInfo;

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_Reflect.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_Reflect.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _root = __webpack_require__(/*! ./_root */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_root.js");

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value references. */
var Reflect = _root2.default.Reflect;

exports.default = Reflect;

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_apply.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_apply.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  var length = args.length;
  switch (length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

exports.default = apply;

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_assignValue.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_assignValue.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _eq = __webpack_require__(/*! ./eq */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/eq.js");

var _eq2 = _interopRequireDefault(_eq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && (0, _eq2.default)(objValue, value)) || value === undefined && !(key in object)) {
    object[key] = value;
  }
}

exports.default = assignValue;

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_baseKeysIn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_baseKeysIn.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Reflect = __webpack_require__(/*! ./_Reflect */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_Reflect.js");

var _Reflect2 = _interopRequireDefault(_Reflect);

var _iteratorToArray = __webpack_require__(/*! ./_iteratorToArray */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_iteratorToArray.js");

var _iteratorToArray2 = _interopRequireDefault(_iteratorToArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var enumerate = _Reflect2.default ? _Reflect2.default.enumerate : undefined,
    propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * The base implementation of `_.keysIn` which doesn't skip the constructor
 * property of prototypes or treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  object = object == null ? object : Object(object);

  var result = [];
  for (var key in object) {
    result.push(key);
  }
  return result;
}

// Fallback for IE < 9 with es6-shim.
if (enumerate && !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf')) {
  baseKeysIn = function baseKeysIn(object) {
    return (0, _iteratorToArray2.default)(enumerate(object));
  };
}

exports.default = baseKeysIn;

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_baseProperty.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_baseProperty.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function (object) {
    return object == null ? undefined : object[key];
  };
}

exports.default = baseProperty;

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_baseTimes.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_baseTimes.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

exports.default = baseTimes;

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_checkGlobal.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_checkGlobal.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Checks if `value` is a global object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {null|Object} Returns `value` if it's a global object, else `null`.
 */
function checkGlobal(value) {
  return value && value.Object === Object ? value : null;
}

exports.default = checkGlobal;

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_copyObject.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_copyObject.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_assignValue.js");

var _assignValue2 = _interopRequireDefault(_assignValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : source[key];

    (0, _assignValue2.default)(object, key, newValue);
  }
  return object;
}

exports.default = copyObject;

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_createAssigner.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_createAssigner.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_isIterateeCall.js");

var _isIterateeCall2 = _interopRequireDefault(_isIterateeCall);

var _rest = __webpack_require__(/*! ./rest */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/rest.js");

var _rest2 = _interopRequireDefault(_rest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return (0, _rest2.default)(function (object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;

    if (guard && (0, _isIterateeCall2.default)(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

exports.default = createAssigner;

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_getLength.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_getLength.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseProperty = __webpack_require__(/*! ./_baseProperty */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_baseProperty.js");

var _baseProperty2 = _interopRequireDefault(_baseProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Gets the "length" property value of `object`.
 *
 * **Note:** This function is used to avoid a
 * [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792) that affects
 * Safari on at least iOS 8.1-8.3 ARM64.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {*} Returns the "length" value.
 */
var getLength = (0, _baseProperty2.default)('length');

exports.default = getLength;

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_indexKeys.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_indexKeys.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_baseTimes.js");

var _baseTimes2 = _interopRequireDefault(_baseTimes);

var _isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isArguments.js");

var _isArguments2 = _interopRequireDefault(_isArguments);

var _isArray = __webpack_require__(/*! ./isArray */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isArray.js");

var _isArray2 = _interopRequireDefault(_isArray);

var _isLength = __webpack_require__(/*! ./isLength */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isLength.js");

var _isLength2 = _interopRequireDefault(_isLength);

var _isString = __webpack_require__(/*! ./isString */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isString.js");

var _isString2 = _interopRequireDefault(_isString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an array of index keys for `object` values of arrays,
 * `arguments` objects, and strings, otherwise `null` is returned.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array|null} Returns index keys, else `null`.
 */
function indexKeys(object) {
  var length = object ? object.length : undefined;
  if ((0, _isLength2.default)(length) && ((0, _isArray2.default)(object) || (0, _isString2.default)(object) || (0, _isArguments2.default)(object))) {
    return (0, _baseTimes2.default)(length, String);
  }
  return null;
}

exports.default = indexKeys;

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_isIndex.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_isIndex.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

exports.default = isIndex;

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_isIterateeCall.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_isIterateeCall.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _eq = __webpack_require__(/*! ./eq */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/eq.js");

var _eq2 = _interopRequireDefault(_eq);

var _isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isArrayLike.js");

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

var _isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_isIndex.js");

var _isIndex2 = _interopRequireDefault(_isIndex);

var _isObject = __webpack_require__(/*! ./isObject */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isObject.js");

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!(0, _isObject2.default)(object)) {
    return false;
  }
  var type = typeof index === 'undefined' ? 'undefined' : _typeof(index);
  if (type == 'number' ? (0, _isArrayLike2.default)(object) && (0, _isIndex2.default)(index, object.length) : type == 'string' && index in object) {
    return (0, _eq2.default)(object[index], value);
  }
  return false;
}

exports.default = isIterateeCall;

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_isPrototype.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_isPrototype.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

  return value === proto;
}

exports.default = isPrototype;

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_iteratorToArray.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_iteratorToArray.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Converts `iterator` to an array.
 *
 * @private
 * @param {Object} iterator The iterator to convert.
 * @returns {Array} Returns the converted array.
 */
function iteratorToArray(iterator) {
  var data,
      result = [];

  while (!(data = iterator.next()).done) {
    result.push(data.value);
  }
  return result;
}

exports.default = iteratorToArray;

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_root.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_root.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module, global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _checkGlobal = __webpack_require__(/*! ./_checkGlobal */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_checkGlobal.js");

var _checkGlobal2 = _interopRequireDefault(_checkGlobal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to determine if values are of the language type `Object`. */
var objectTypes = {
  'function': true,
  'object': true
};

/** Detect free variable `exports`. */
var freeExports = objectTypes[ false ? undefined : _typeof(exports)] && exports && !exports.nodeType ? exports : undefined;

/** Detect free variable `module`. */
var freeModule = objectTypes[ false ? undefined : _typeof(module)] && module && !module.nodeType ? module : undefined;

/** Detect free variable `global` from Node.js. */
var freeGlobal = (0, _checkGlobal2.default)(freeExports && freeModule && (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global);

/** Detect free variable `self`. */
var freeSelf = (0, _checkGlobal2.default)(objectTypes[typeof self === 'undefined' ? 'undefined' : _typeof(self)] && self);

/** Detect free variable `window`. */
var freeWindow = (0, _checkGlobal2.default)(objectTypes[typeof window === 'undefined' ? 'undefined' : _typeof(window)] && window);

/** Detect `this` as the global object. */
var thisGlobal = (0, _checkGlobal2.default)(objectTypes[_typeof(undefined)] && undefined);

/**
 * Used as a reference to the global object.
 *
 * The `this` value is used if it's the global object to avoid Greasemonkey's
 * restricted `window` object, otherwise the `window` object is used.
 */
var root = freeGlobal || freeWindow !== (thisGlobal && thisGlobal.window) && freeWindow || freeSelf || thisGlobal || Function('return this')();

exports.default = root;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/assignIn.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/assignIn.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_assignValue.js");

var _assignValue2 = _interopRequireDefault(_assignValue);

var _copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_copyObject.js");

var _copyObject2 = _interopRequireDefault(_copyObject);

var _createAssigner = __webpack_require__(/*! ./_createAssigner */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_createAssigner.js");

var _createAssigner2 = _interopRequireDefault(_createAssigner);

var _isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isArrayLike.js");

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

var _isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_isPrototype.js");

var _isPrototype2 = _interopRequireDefault(_isPrototype);

var _keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/keysIn.js");

var _keysIn2 = _interopRequireDefault(_keysIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');

/**
 * This method is like `_.assign` except that it iterates over own and
 * inherited source properties.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extend
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assign
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * function Bar() {
 *   this.d = 4;
 * }
 *
 * Foo.prototype.c = 3;
 * Bar.prototype.e = 5;
 *
 * _.assignIn({ 'a': 1 }, new Foo, new Bar);
 * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 }
 */
var assignIn = (0, _createAssigner2.default)(function (object, source) {
  if (nonEnumShadows || (0, _isPrototype2.default)(source) || (0, _isArrayLike2.default)(source)) {
    (0, _copyObject2.default)(source, (0, _keysIn2.default)(source), object);
    return;
  }
  for (var key in source) {
    (0, _assignValue2.default)(object, key, source[key]);
  }
});

exports.default = assignIn;

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/eq.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/eq.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'user': 'fred' };
 * var other = { 'user': 'fred' };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

exports.default = eq;

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/extend.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/extend.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assignIn = __webpack_require__(/*! ./assignIn */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/assignIn.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_assignIn).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isArguments.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isArguments.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isArrayLikeObject.js");

var _isArrayLikeObject2 = _interopRequireDefault(_isArrayLikeObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
  return (0, _isArrayLikeObject2.default)(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

exports.default = isArguments;

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isArray.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @type {Function}
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 *  else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

exports.default = isArray;

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isArrayLike.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isArrayLike.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getLength = __webpack_require__(/*! ./_getLength */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_getLength.js");

var _getLength2 = _interopRequireDefault(_getLength);

var _isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isFunction.js");

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isLength = __webpack_require__(/*! ./isLength */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isLength.js");

var _isLength2 = _interopRequireDefault(_isLength);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && (0, _isLength2.default)((0, _getLength2.default)(value)) && !(0, _isFunction2.default)(value);
}

exports.default = isArrayLike;

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isArrayLikeObject.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isArrayLikeObject.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isArrayLike.js");

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

var _isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isObjectLike.js");

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return (0, _isObjectLike2.default)(value) && (0, _isArrayLike2.default)(value);
}

exports.default = isArrayLikeObject;

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isFunction.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isFunction.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isObject = __webpack_require__(/*! ./isObject */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isObject.js");

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 *  else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8 which returns 'object' for typed array and weak map constructors,
  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
  var tag = (0, _isObject2.default)(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

exports.default = isFunction;

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isLength.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isLength.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length,
 *  else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

exports.default = isLength;

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isObject.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isObject.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return !!value && (type == 'object' || type == 'function');
}

exports.default = isObject;

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isObjectLike.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isObjectLike.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
}

exports.default = isObjectLike;

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isString.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isString.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isArray = __webpack_require__(/*! ./isArray */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isArray.js");

var _isArray2 = _interopRequireDefault(_isArray);

var _isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isObjectLike.js");

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var stringTag = '[object String]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 *  else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' || !(0, _isArray2.default)(value) && (0, _isObjectLike2.default)(value) && objectToString.call(value) == stringTag;
}

exports.default = isString;

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isSymbol.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isSymbol.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isObjectLike.js");

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 *  else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'symbol' || (0, _isObjectLike2.default)(value) && objectToString.call(value) == symbolTag;
}

exports.default = isSymbol;

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/keysIn.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/keysIn.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_baseKeysIn.js");

var _baseKeysIn2 = _interopRequireDefault(_baseKeysIn);

var _indexKeys = __webpack_require__(/*! ./_indexKeys */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_indexKeys.js");

var _indexKeys2 = _interopRequireDefault(_indexKeys);

var _isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_isIndex.js");

var _isIndex2 = _interopRequireDefault(_isIndex);

var _isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_isPrototype.js");

var _isPrototype2 = _interopRequireDefault(_isPrototype);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  var index = -1,
      isProto = (0, _isPrototype2.default)(object),
      props = (0, _baseKeysIn2.default)(object),
      propsLength = props.length,
      indexes = (0, _indexKeys2.default)(object),
      skipIndexes = !!indexes,
      result = indexes || [],
      length = result.length;

  while (++index < propsLength) {
    var key = props[index];
    if (!(skipIndexes && (key == 'length' || (0, _isIndex2.default)(key, length))) && !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

exports.default = keysIn;

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/rest.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/rest.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _apply = __webpack_require__(/*! ./_apply */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/_apply.js");

var _apply2 = _interopRequireDefault(_apply);

var _toInteger = __webpack_require__(/*! ./toInteger */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/toInteger.js");

var _toInteger2 = _interopRequireDefault(_toInteger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates a function that invokes `func` with the `this` binding of the
 * created function and arguments from `start` and beyond provided as
 * an array.
 *
 * **Note:** This method is based on the
 * [rest parameter](https://mdn.io/rest_parameters).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Function
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var say = _.rest(function(what, names) {
 *   return what + ' ' + _.initial(names).join(', ') +
 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
 * });
 *
 * say('hello', 'fred', 'barney', 'pebbles');
 * // => 'hello fred, barney, & pebbles'
 */
function rest(func, start) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  start = nativeMax(start === undefined ? func.length - 1 : (0, _toInteger2.default)(start), 0);
  return function () {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    switch (start) {
      case 0:
        return func.call(this, array);
      case 1:
        return func.call(this, args[0], array);
      case 2:
        return func.call(this, args[0], args[1], array);
    }
    var otherArgs = Array(start + 1);
    index = -1;
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return (0, _apply2.default)(func, this, otherArgs);
  };
}

exports.default = rest;

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/toFinite.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/toFinite.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/toNumber.js");

var _toNumber2 = _interopRequireDefault(_toNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = (0, _toNumber2.default)(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

exports.default = toFinite;

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/toInteger.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/toInteger.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toFinite = __webpack_require__(/*! ./toFinite */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/toFinite.js");

var _toFinite2 = _interopRequireDefault(_toFinite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts `value` to an integer.
 *
 * **Note:** This function is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = (0, _toFinite2.default)(value),
      remainder = result % 1;

  return result === result ? remainder ? result - remainder : result : 0;
}

exports.default = toInteger;

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/toNumber.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/toNumber.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isFunction.js");

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isObject = __webpack_require__(/*! ./isObject */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isObject.js");

var _isObject2 = _interopRequireDefault(_isObject);

var _isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isSymbol.js");

var _isSymbol2 = _interopRequireDefault(_isSymbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if ((0, _isSymbol2.default)(value)) {
    return NAN;
  }
  if ((0, _isObject2.default)(value)) {
    var other = (0, _isFunction2.default)(value.valueOf) ? value.valueOf() : value;
    value = (0, _isObject2.default)(other) ? other + '' : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

exports.default = toNumber;

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/mix.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/mix.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mix;
/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module utils/mix
 */

/**
 * Copies enumerable properties and symbols from the objects given as 2nd+ parameters to the
 * prototype of first object (a constructor).
 *
 *		class Editor {
 *			...
 *		}
 *
 *		const SomeMixin = {
 *			a() {
 *				return 'a';
 *			}
 *		};
 *
 *		mix( Editor, SomeMixin, ... );
 *
 *		new Editor().a(); // -> 'a'
 *
 * Note: Properties which already exist in the base class will not be overriden.
 *
 * @param {Function} [baseClass] Class which prototype will be extended.
 * @param {Object} [...mixins] Objects from which to get properties.
 */
function mix(baseClass) {
  for (var _len = arguments.length, mixins = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    mixins[_key - 1] = arguments[_key];
  }

  mixins.forEach(function (mixin) {
    Object.getOwnPropertyNames(mixin).concat(Object.getOwnPropertySymbols(mixin)).forEach(function (key) {
      if (key in baseClass.prototype) {
        return;
      }

      var sourceDescriptor = Object.getOwnPropertyDescriptor(mixin, key);
      sourceDescriptor.enumerable = false;

      Object.defineProperty(baseClass.prototype, key, sourceDescriptor);
    });
  });
}

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/observablemixin.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/observablemixin.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _emittermixin = __webpack_require__(/*! ./emittermixin */ "./node_modules/@ckeditor/ckeditor5-utils/src/emittermixin.js");

var _emittermixin2 = _interopRequireDefault(_emittermixin);

var _ckeditorerror = __webpack_require__(/*! ./ckeditorerror */ "./node_modules/@ckeditor/ckeditor5-utils/src/ckeditorerror.js");

var _ckeditorerror2 = _interopRequireDefault(_ckeditorerror);

var _extend = __webpack_require__(/*! ./lib/lodash/extend */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/extend.js");

var _extend2 = _interopRequireDefault(_extend);

var _isObject = __webpack_require__(/*! ./lib/lodash/isObject */ "./node_modules/@ckeditor/ckeditor5-utils/src/lib/lodash/isObject.js");

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
                                                                                                                                                                                                     * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
                                                                                                                                                                                                     * For licensing, see LICENSE.md.
                                                                                                                                                                                                     */

/**
 * @module utils/observablemixin
 */

var observablePropertiesSymbol = Symbol('observableProperties');
var boundObservablesSymbol = Symbol('boundObservables');
var boundPropertiesSymbol = Symbol('boundProperties');

/**
 * Mixin that injects the "observable properties" and data binding functionality described in the
 * {@link ~Observable} interface.
 *
 * @mixin ObservableMixin
 * @mixes module:utils/emittermixin~EmitterMixin
 * @implements module:utils/observablemixin~Observable
 */
var ObservableMixin = {
	/**
  * @inheritDoc
  */
	set: function set(name, value) {
		var _this = this;

		// If the first parameter is an Object, iterate over its properties.
		if ((0, _isObject2.default)(name)) {
			Object.keys(name).forEach(function (property) {
				_this.set(property, name[property]);
			}, this);

			return;
		}

		initObservable(this);

		var properties = this[observablePropertiesSymbol];

		if (name in this && !properties.has(name)) {
			/**
    * Cannot override an existing property.
    *
    * This error is thrown when trying to {@link ~Observable#set set} an property with
    * a name of an already existing property. For example:
    *
    *		let observable = new Model();
    *		observable.property = 1;
    *		observable.set( 'property', 2 );			// throws
    *
    *		observable.set( 'property', 1 );
    *		observable.set( 'property', 2 );			// ok, because this is an existing property.
    *
    * @error observable-set-cannot-override
    */
			throw new _ckeditorerror2.default('observable-set-cannot-override: Cannot override an existing property.');
		}

		Object.defineProperty(this, name, {
			enumerable: true,
			configurable: true,

			get: function get() {
				return properties.get(name);
			},
			set: function set(value) {
				var oldValue = properties.get(name);

				// Fire `set` event before the new value will be set to make it possible
				// to override observable property without affecting `change` event.
				// See https://github.com/ckeditor/ckeditor5-utils/issues/171.
				var newValue = this.fire('set:' + name, name, value, oldValue);

				if (newValue === undefined) {
					newValue = value;
				}

				// Allow undefined as an initial value like A.define( 'x', undefined ) (#132).
				// Note: When properties map has no such own property, then its value is undefined.
				if (oldValue !== newValue || !properties.has(name)) {
					properties.set(name, newValue);
					this.fire('change:' + name, name, newValue, oldValue);
				}
			}
		});

		this[name] = value;
	},


	/**
  * @inheritDoc
  */
	bind: function bind() {
		for (var _len = arguments.length, bindProperties = Array(_len), _key = 0; _key < _len; _key++) {
			bindProperties[_key] = arguments[_key];
		}

		if (!bindProperties.length || !isStringArray(bindProperties)) {
			/**
    * All properties must be strings.
    *
    * @error observable-bind-wrong-properties
    */
			throw new _ckeditorerror2.default('observable-bind-wrong-properties: All properties must be strings.');
		}

		if (new Set(bindProperties).size !== bindProperties.length) {
			/**
    * Properties must be unique.
    *
    * @error observable-bind-duplicate-properties
    */
			throw new _ckeditorerror2.default('observable-bind-duplicate-properties: Properties must be unique.');
		}

		initObservable(this);

		var boundProperties = this[boundPropertiesSymbol];

		bindProperties.forEach(function (propertyName) {
			if (boundProperties.has(propertyName)) {
				/**
     * Cannot bind the same property more that once.
     *
     * @error observable-bind-rebind
     */
				throw new _ckeditorerror2.default('observable-bind-rebind: Cannot bind the same property more that once.');
			}
		});

		var bindings = new Map();

		// @typedef {Object} Binding
		// @property {Array} property Property which is bound.
		// @property {Array} to Array of observable–property components of the binding (`{ observable: ..., property: .. }`).
		// @property {Array} callback A function which processes `to` components.
		bindProperties.forEach(function (a) {
			var binding = { property: a, to: [] };

			boundProperties.set(a, binding);
			bindings.set(a, binding);
		});

		// @typedef {Object} BindChain
		// @property {Function} to See {@link ~ObservableMixin#_bindTo}.
		// @property {Function} toMany See {@link ~ObservableMixin#_bindToMany}.
		// @property {module:utils/observablemixin~Observable} _observable The observable which initializes the binding.
		// @property {Array} _bindProperties Array of `_observable` properties to be bound.
		// @property {Array} _to Array of `to()` observable–properties (`{ observable: toObservable, properties: ...toProperties }`).
		// @property {Map} _bindings Stores bindings to be kept in
		// {@link ~ObservableMixin#_boundProperties}/{@link ~ObservableMixin#_boundObservables}
		// initiated in this binding chain.
		return {
			to: bindTo,
			toMany: bindToMany,

			_observable: this,
			_bindProperties: bindProperties,
			_to: [],
			_bindings: bindings
		};
	},


	/**
  * @inheritDoc
  */
	unbind: function unbind() {
		var _this2 = this;

		// Nothing to do here if not inited yet.
		if (!(observablePropertiesSymbol in this)) {
			return;
		}

		var boundProperties = this[boundPropertiesSymbol];
		var boundObservables = this[boundObservablesSymbol];

		for (var _len2 = arguments.length, unbindProperties = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
			unbindProperties[_key2] = arguments[_key2];
		}

		if (unbindProperties.length) {
			if (!isStringArray(unbindProperties)) {
				/**
     * Properties must be strings.
     *
     * @error observable-unbind-wrong-properties
     */
				throw new _ckeditorerror2.default('observable-unbind-wrong-properties: Properties must be strings.');
			}

			unbindProperties.forEach(function (propertyName) {
				var binding = boundProperties.get(propertyName);

				// Nothing to do if the binding is not defined
				if (!binding) {
					return;
				}

				var toObservable = void 0,
				    toProperty = void 0,
				    toProperties = void 0,
				    toPropertyBindings = void 0;

				binding.to.forEach(function (to) {
					// TODO: ES6 destructuring.
					toObservable = to[0];
					toProperty = to[1];
					toProperties = boundObservables.get(toObservable);
					toPropertyBindings = toProperties[toProperty];

					toPropertyBindings.delete(binding);

					if (!toPropertyBindings.size) {
						delete toProperties[toProperty];
					}

					if (!Object.keys(toProperties).length) {
						boundObservables.delete(toObservable);
						_this2.stopListening(toObservable, 'change');
					}
				});

				boundProperties.delete(propertyName);
			});
		} else {
			boundObservables.forEach(function (bindings, boundObservable) {
				_this2.stopListening(boundObservable, 'change');
			});

			boundObservables.clear();
			boundProperties.clear();
		}
	},


	/**
  * @inheritDoc
  */
	decorate: function decorate(methodName) {
		var _this3 = this;

		var originalMethod = this[methodName];

		if (!originalMethod) {
			/**
    * Cannot decorate an undefined method.
    *
    * @error observablemixin-cannot-decorate-undefined
    * @param {Object} object The object which method should be decorated.
    * @param {String} methodName Name of the method which does not exist.
    */
			throw new _ckeditorerror2.default('observablemixin-cannot-decorate-undefined: Cannot decorate an undefined method.', { object: this, methodName: methodName });
		}

		this.on(methodName, function (evt, args) {
			evt.return = originalMethod.apply(_this3, args);
		});

		this[methodName] = function () {
			for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
				args[_key3] = arguments[_key3];
			}

			return this.fire(methodName, args);
		};
	}
};

(0, _extend2.default)(ObservableMixin, _emittermixin2.default);

exports.default = ObservableMixin;

// Init symbol properties needed to for the observable mechanism to work.
//
// @private
// @param {module:utils/observablemixin~ObservableMixin} observable

function initObservable(observable) {
	// Do nothing if already inited.
	if (observablePropertiesSymbol in observable) {
		return;
	}

	// The internal hash containing the observable's state.
	//
	// @private
	// @type {Map}
	Object.defineProperty(observable, observablePropertiesSymbol, {
		value: new Map()
	});

	// Map containing bindings to external observables. It shares the binding objects
	// (`{ observable: A, property: 'a', to: ... }`) with {@link module:utils/observablemixin~ObservableMixin#_boundProperties} and
	// it is used to observe external observables to update own properties accordingly.
	// See {@link module:utils/observablemixin~ObservableMixin#bind}.
	//
	//		A.bind( 'a', 'b', 'c' ).to( B, 'x', 'y', 'x' );
	//		console.log( A._boundObservables );
	//
	//			Map( {
	//				B: {
	//					x: Set( [
	//						{ observable: A, property: 'a', to: [ [ B, 'x' ] ] },
	//						{ observable: A, property: 'c', to: [ [ B, 'x' ] ] }
	//					] ),
	//					y: Set( [
	//						{ observable: A, property: 'b', to: [ [ B, 'y' ] ] },
	//					] )
	//				}
	//			} )
	//
	//		A.bind( 'd' ).to( B, 'z' ).to( C, 'w' ).as( callback );
	//		console.log( A._boundObservables );
	//
	//			Map( {
	//				B: {
	//					x: Set( [
	//						{ observable: A, property: 'a', to: [ [ B, 'x' ] ] },
	//						{ observable: A, property: 'c', to: [ [ B, 'x' ] ] }
	//					] ),
	//					y: Set( [
	//						{ observable: A, property: 'b', to: [ [ B, 'y' ] ] },
	//					] ),
	//					z: Set( [
	//						{ observable: A, property: 'd', to: [ [ B, 'z' ], [ C, 'w' ] ], callback: callback }
	//					] )
	//				},
	//				C: {
	//					w: Set( [
	//						{ observable: A, property: 'd', to: [ [ B, 'z' ], [ C, 'w' ] ], callback: callback }
	//					] )
	//				}
	//			} )
	//
	// @private
	// @type {Map}
	Object.defineProperty(observable, boundObservablesSymbol, {
		value: new Map()
	});

	// Object that stores which properties of this observable are bound and how. It shares
	// the binding objects (`{ observable: A, property: 'a', to: ... }`) with {@link utils.ObservableMixin#_boundObservables}.
	// This data structure is a reverse of {@link utils.ObservableMixin#_boundObservables} and it is helpful for
	// {@link utils.ObservableMixin#unbind}.
	//
	// See {@link utils.ObservableMixin#bind}.
	//
	//		A.bind( 'a', 'b', 'c' ).to( B, 'x', 'y', 'x' );
	//		console.log( A._boundProperties );
	//
	//			Map( {
	//				a: { observable: A, property: 'a', to: [ [ B, 'x' ] ] },
	//				b: { observable: A, property: 'b', to: [ [ B, 'y' ] ] },
	//				c: { observable: A, property: 'c', to: [ [ B, 'x' ] ] }
	//			} )
	//
	//		A.bind( 'd' ).to( B, 'z' ).to( C, 'w' ).as( callback );
	//		console.log( A._boundProperties );
	//
	//			Map( {
	//				a: { observable: A, property: 'a', to: [ [ B, 'x' ] ] },
	//				b: { observable: A, property: 'b', to: [ [ B, 'y' ] ] },
	//				c: { observable: A, property: 'c', to: [ [ B, 'x' ] ] },
	//				d: { observable: A, property: 'd', to: [ [ B, 'z' ], [ C, 'w' ] ], callback: callback }
	//			} )
	//
	// @private
	// @type {Map}
	Object.defineProperty(observable, boundPropertiesSymbol, {
		value: new Map()
	});
}

// A chaining for {@link module:utils/observablemixin~ObservableMixin#bind} providing `.to()` interface.
//
// @private
// @param {...[Observable|String|Function]} args Arguments of the `.to( args )` binding.
function bindTo() {
	var _this4 = this;

	var parsedArgs = parseBindToArgs.apply(undefined, arguments);
	var bindingsKeys = Array.from(this._bindings.keys());
	var numberOfBindings = bindingsKeys.length;

	// Eliminate A.bind( 'x' ).to( B, C )
	if (!parsedArgs.callback && parsedArgs.to.length > 1) {
		/**
   * Binding multiple observables only possible with callback.
   *
   * @error observable-bind-no-callback
   */
		throw new _ckeditorerror2.default('observable-bind-to-no-callback: Binding multiple observables only possible with callback.');
	}

	// Eliminate A.bind( 'x', 'y' ).to( B, callback )
	if (numberOfBindings > 1 && parsedArgs.callback) {
		/**
   * Cannot bind multiple properties and use a callback in one binding.
   *
   * @error observable-bind-to-extra-callback
   */
		throw new _ckeditorerror2.default('observable-bind-to-extra-callback: Cannot bind multiple properties and use a callback in one binding.');
	}

	parsedArgs.to.forEach(function (to) {
		// Eliminate A.bind( 'x', 'y' ).to( B, 'a' )
		if (to.properties.length && to.properties.length !== numberOfBindings) {
			/**
    * The number of properties must match.
    *
    * @error observable-bind-to-properties-length
    */
			throw new _ckeditorerror2.default('observable-bind-to-properties-length: The number of properties must match.');
		}

		// When no to.properties specified, observing source properties instead i.e.
		// A.bind( 'x', 'y' ).to( B ) -> Observe B.x and B.y
		if (!to.properties.length) {
			to.properties = _this4._bindProperties;
		}
	});

	this._to = parsedArgs.to;

	// Fill {@link BindChain#_bindings} with callback. When the callback is set there's only one binding.
	if (parsedArgs.callback) {
		this._bindings.get(bindingsKeys[0]).callback = parsedArgs.callback;
	}

	attachBindToListeners(this._observable, this._to);

	// Update observable._boundProperties and observable._boundObservables.
	updateBindToBound(this);

	// Set initial values of bound properties.
	this._bindProperties.forEach(function (propertyName) {
		updateBoundObservableProperty(_this4._observable, propertyName);
	});
}

// Binds to an attribute in a set of iterable observables.
//
// @private
// @param {Array.<Observable>} observables
// @param {String} attribute
// @param {Function} callback
function bindToMany(observables, attribute, callback) {
	if (this._bindings.size > 1) {
		/**
   * Binding one attribute to many observables only possible with one attribute.
   *
   * @error observable-bind-to-many-not-one-binding
   */
		throw new _ckeditorerror2.default('observable-bind-to-many-not-one-binding: Cannot bind multiple properties with toMany().');
	}

	this.to.apply(this, _toConsumableArray(getBindingTargets(observables, attribute)).concat([
	// ...using given callback to parse attribute values.
	callback]));
}

// Returns an array of binding components for
// {@link Observable#bind} from a set of iterable observables.
//
// @param {Array.<Observable>} observables
// @param {String} attribute
// @returns {Array.<String|Observable>}
function getBindingTargets(observables, attribute) {
	var observableAndAttributePairs = observables.map(function (observable) {
		return [observable, attribute];
	});

	// Merge pairs to one-dimension array of observables and attributes.
	return Array.prototype.concat.apply([], observableAndAttributePairs);
}

// Check if all entries of the array are of `String` type.
//
// @private
// @param {Array} arr An array to be checked.
// @returns {Boolean}
function isStringArray(arr) {
	return arr.every(function (a) {
		return typeof a == 'string';
	});
}

// Parses and validates {@link Observable#bind}`.to( args )` arguments and returns
// an object with a parsed structure. For example
//
//		A.bind( 'x' ).to( B, 'a', C, 'b', call );
//
// becomes
//
//		{
//			to: [
//				{ observable: B, properties: [ 'a' ] },
//				{ observable: C, properties: [ 'b' ] },
//			],
//			callback: call
// 		}
//
// @private
// @param {...*} args Arguments of {@link Observable#bind}`.to( args )`.
// @returns {Object}
function parseBindToArgs() {
	for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
		args[_key4] = arguments[_key4];
	}

	// Eliminate A.bind( 'x' ).to()
	if (!args.length) {
		/**
   * Invalid argument syntax in `to()`.
   *
   * @error observable-bind-to-parse-error
   */
		throw new _ckeditorerror2.default('observable-bind-to-parse-error: Invalid argument syntax in `to()`.');
	}

	var parsed = { to: [] };
	var lastObservable = void 0;

	if (typeof args[args.length - 1] == 'function') {
		parsed.callback = args.pop();
	}

	args.forEach(function (a) {
		if (typeof a == 'string') {
			lastObservable.properties.push(a);
		} else if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) == 'object') {
			lastObservable = { observable: a, properties: [] };
			parsed.to.push(lastObservable);
		} else {
			throw new _ckeditorerror2.default('observable-bind-to-parse-error: Invalid argument syntax in `to()`.');
		}
	});

	return parsed;
}

// Synchronizes {@link module:utils/observablemixin#_boundObservables} with {@link Binding}.
//
// @private
// @param {Binding} binding A binding to store in {@link Observable#_boundObservables}.
// @param {Observable} toObservable A observable, which is a new component of `binding`.
// @param {String} toPropertyName A name of `toObservable`'s property, a new component of the `binding`.
function updateBoundObservables(observable, binding, toObservable, toPropertyName) {
	var boundObservables = observable[boundObservablesSymbol];
	var bindingsToObservable = boundObservables.get(toObservable);
	var bindings = bindingsToObservable || {};

	if (!bindings[toPropertyName]) {
		bindings[toPropertyName] = new Set();
	}

	// Pass the binding to a corresponding Set in `observable._boundObservables`.
	bindings[toPropertyName].add(binding);

	if (!bindingsToObservable) {
		boundObservables.set(toObservable, bindings);
	}
}

// Synchronizes {@link Observable#_boundProperties} and {@link Observable#_boundObservables}
// with {@link BindChain}.
//
// Assuming the following binding being created
//
// 		A.bind( 'a', 'b' ).to( B, 'x', 'y' );
//
// the following bindings were initialized by {@link Observable#bind} in {@link BindChain#_bindings}:
//
// 		{
// 			a: { observable: A, property: 'a', to: [] },
// 			b: { observable: A, property: 'b', to: [] },
// 		}
//
// Iterate over all bindings in this chain and fill their `to` properties with
// corresponding to( ... ) arguments (components of the binding), so
//
// 		{
// 			a: { observable: A, property: 'a', to: [ B, 'x' ] },
// 			b: { observable: A, property: 'b', to: [ B, 'y' ] },
// 		}
//
// Then update the structure of {@link Observable#_boundObservables} with updated
// binding, so it becomes:
//
// 		Map( {
// 			B: {
// 				x: Set( [
// 					{ observable: A, property: 'a', to: [ [ B, 'x' ] ] }
// 				] ),
// 				y: Set( [
// 					{ observable: A, property: 'b', to: [ [ B, 'y' ] ] },
// 				] )
//			}
// 		} )
//
// @private
// @param {BindChain} chain The binding initialized by {@link Observable#bind}.
function updateBindToBound(chain) {
	var toProperty = void 0;

	chain._bindings.forEach(function (binding, propertyName) {
		// Note: For a binding without a callback, this will run only once
		// like in A.bind( 'x', 'y' ).to( B, 'a', 'b' )
		// TODO: ES6 destructuring.
		chain._to.forEach(function (to) {
			toProperty = to.properties[binding.callback ? 0 : chain._bindProperties.indexOf(propertyName)];

			binding.to.push([to.observable, toProperty]);
			updateBoundObservables(chain._observable, binding, to.observable, toProperty);
		});
	});
}

// Updates an property of a {@link Observable} with a value
// determined by an entry in {@link Observable#_boundProperties}.
//
// @private
// @param {Observable} observable A observable which property is to be updated.
// @param {String} propertyName An property to be updated.
function updateBoundObservableProperty(observable, propertyName) {
	var boundProperties = observable[boundPropertiesSymbol];
	var binding = boundProperties.get(propertyName);
	var propertyValue = void 0;

	// When a binding with callback is created like
	//
	// 		A.bind( 'a' ).to( B, 'b', C, 'c', callback );
	//
	// collect B.b and C.c, then pass them to callback to set A.a.
	if (binding.callback) {
		propertyValue = binding.callback.apply(observable, binding.to.map(function (to) {
			return to[0][to[1]];
		}));
	} else {
		propertyValue = binding.to[0];
		propertyValue = propertyValue[0][propertyValue[1]];
	}

	if (observable.hasOwnProperty(propertyName)) {
		observable[propertyName] = propertyValue;
	} else {
		observable.set(propertyName, propertyValue);
	}
}

// Starts listening to changes in {@link BindChain._to} observables to update
// {@link BindChain._observable} {@link BindChain._bindProperties}. Also sets the
// initial state of {@link BindChain._observable}.
//
// @private
// @param {BindChain} chain The chain initialized by {@link Observable#bind}.
function attachBindToListeners(observable, toBindings) {
	toBindings.forEach(function (to) {
		var boundObservables = observable[boundObservablesSymbol];
		var bindings = void 0;

		// If there's already a chain between the observables (`observable` listens to
		// `to.observable`), there's no need to create another `change` event listener.
		if (!boundObservables.get(to.observable)) {
			observable.listenTo(to.observable, 'change', function (evt, propertyName) {
				bindings = boundObservables.get(to.observable)[propertyName];

				// Note: to.observable will fire for any property change, react
				// to changes of properties which are bound only.
				if (bindings) {
					bindings.forEach(function (binding) {
						updateBoundObservableProperty(observable, binding.property);
					});
				}
			});
		}
	});
}

/**
 * Interface which adds "observable properties" and data binding functionality.
 *
 * Can be easily implemented by a class by mixing the {@link module:utils/observablemixin~ObservableMixin} mixin.
 *
 * @interface Observable
 * @extends module:utils/emittermixin~Emitter
 */

/**
 * Fired when a property changed value.
 *
 *		observable.set( 'prop', 1 );
 *
 *		observable.on( 'change:prop', ( evt, propertyName, newValue, oldValue ) => {
 *			console.log( `${ propertyName } has changed from ${ oldValue } to ${ newValue }` );
 *		} );
 *
 *		observable.prop = 2; // -> 'prop has changed from 1 to 2'
 *
 * @event change:{property}
 * @param {String} name The property name.
 * @param {*} value The new property value.
 * @param {*} oldValue The previous property value.
 */

/**
 * Fired when a property value is going to be set but is not set yet (before the `change` event is fired).
 *
 * You can control the final value of the property by using
 * the {@link module:utils/eventinfo~EventInfo#return event's `return` property}.
 *
 *		observable.set( 'prop', 1 );
 *
 *		observable.on( 'set:prop', ( evt, propertyName, newValue, oldValue ) => {
 *			console.log( `Value is going to be changed from ${ oldValue } to ${ newValue }` );
 *			console.log( `Current property value is ${ observable[ propertyName ] }` );
 *
 *			// Let's override the value.
 *			evt.return = 3;
 *		} );
 *
 *		observable.on( 'change:prop', ( evt, propertyName, newValue, oldValue ) => {
 *			console.log( `Value has changed from ${ oldValue } to ${ newValue }` );
 *		} );
 *
 *		observable.prop = 2; // -> 'Value is going to be changed from 1 to 2'
 *		                     // -> 'Current property value is 1'
 *		                     // -> 'Value has changed from 1 to 3'
 *
 * **Note:** Event is fired even when the new value is the same as the old value.
 *
 * @event set:{property}
 * @param {String} name The property name.
 * @param {*} value The new property value.
 * @param {*} oldValue The previous property value.
 */

/**
 * Creates and sets the value of an observable property of this object. Such an property becomes a part
 * of the state and is be observable.
 *
 * It accepts also a single object literal containing key/value pairs with properties to be set.
 *
 * This method throws the `observable-set-cannot-override` error if the observable instance already
 * have a property with the given property name. This prevents from mistakenly overriding existing
 * properties and methods, but means that `foo.set( 'bar', 1 )` may be slightly slower than `foo.bar = 1`.
 *
 * @method #set
 * @param {String|Object} name The property's name or object with `name=>value` pairs.
 * @param {*} [value] The property's value (if `name` was passed in the first parameter).
 */

/**
 * Binds observable properties to another objects implementing {@link module:utils/observablemixin~Observable}
 * interface (like {@link module:ui/model~Model}).
 *
 * Once bound, the observable will immediately share the current state of properties
 * of the observable it is bound to and react to the changes to these properties
 * in the future.
 *
 * **Note**: To release the binding use {@link module:utils/observablemixin~Observable#unbind}.
 *
 * Using `bind().to()` chain:
 *
 *		A.bind( 'a' ).to( B );
 *		A.bind( 'a' ).to( B, 'b' );
 *		A.bind( 'a', 'b' ).to( B, 'c', 'd' );
 *		A.bind( 'a' ).to( B, 'b', C, 'd', ( b, d ) => b + d );
 *
 * It is also possible to bind to the same property in a observables collection using `bind().toMany()` chain:
 *
 *		A.bind( 'a' ).toMany( [ B, C, D ], 'x', ( a, b, c ) => a + b + c );
 *		A.bind( 'a' ).toMany( [ B, C, D ], 'x', ( ...x ) => x.every( x => x ) );
 *
 * @method #bind
 * @param {...String} bindProperties Observable properties that will be bound to another observable(s).
 * @returns {Object} The bind chain with the `to()` and `toMany()` methods.
 */

/**
 * Removes the binding created with {@link #bind}.
 *
 *		A.unbind( 'a' );
 *		A.unbind();
 *
 * @method #unbind
 * @param {...String} [unbindProperties] Observable properties to be unbound. All the bindings will
 * be released if no properties provided.
 */

/**
 * Turns the given methods of this object into event-based ones. This means that the new method will fire an event
 * (named after the method) and the original action will be plugged as a listener to that event.
 *
 * This is a very simplified method decoration. Itself it doesn't change the behavior of a method (expect adding the event),
 * but it allows to modify it later on by listening to the method's event.
 *
 * For example, in order to cancel the method execution one can stop the event:
 *
 *		class Foo {
 *			constructor() {
 *				this.decorate( 'method' );
 *			}
 *
 *			method() {
 *				console.log( 'called!' );
 *			}
 *		}
 *
 *		const foo = new Foo();
 *		foo.on( 'method', ( evt ) => {
 *			evt.stop();
 *		}, { priority: 'high' } );
 *
 *		foo.method(); // Nothing is logged.
 *
 *
 * Note: we used a high priority listener here to execute this callback before the one which
 * calls the original method (which used the default priority).
 *
 * It's also possible to change the return value:
 *
 *		foo.on( 'method', ( evt ) => {
 *			evt.return = 'Foo!';
 *		} );
 *
 *		foo.method(); // -> 'Foo'
 *
 * Finally, it's possible to access and modify the parameters:
 *
 *		method( a, b ) {
 *			console.log( `${ a }, ${ b }`  );
 *		}
 *
 *		// ...
 *
 *		foo.on( 'method', ( evt, args ) => {
 *			args[ 0 ] = 3;
 *
 *			console.log( args[ 1 ] ); // -> 2
 *		}, { priority: 'high' } );
 *
 *		foo.method( 1, 2 ); // -> '3, 2'
 *
 * @method #decorate
 * @param {String} methodName Name of the method to decorate.
 */

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/priorities.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/priorities.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module utils/priorities
 */

/**
 * String representing a priority value.
 *
 * @typedef {'highest'|'high'|'normal'|'low'|'lowest'} module:utils/priorities~PriorityString
 */

/**
 * Provides group of constants to use instead of hardcoding numeric priority values.
 *
 * @namespace
 */
var priorities = {
	/**
  * Converts a string with priority name to it's numeric value. If `Number` is given, it just returns it.
  *
  * @static
  * @param {module:utils/priorities~PriorityString|Number} priority Priority to convert.
  * @returns {Number} Converted priority.
  */
	get: function get(priority) {
		if (typeof priority != 'number') {
			return this[priority] || this.normal;
		} else {
			return priority;
		}
	},


	highest: 100000,
	high: 1000,
	normal: 0,
	low: -1000,
	lowest: -100000
};

exports.default = priorities;

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/spy.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/spy.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module utils/spy
 */

/**
 * Creates a spy function (ala Sinon.js) that can be used to inspect call to it.
 *
 * The following are the present features:
 *
 * * spy.called: property set to `true` if the function has been called at least once.
 *
 * @returns {Function} The spy function.
 */
function spy() {
  return function spy() {
    spy.called = true;
  };
}

exports.default = spy;

/***/ }),

/***/ "./node_modules/@ckeditor/ckeditor5-utils/src/uid.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ckeditor/ckeditor5-utils/src/uid.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = uid;
/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module utils/uid
 */

/**
 * Returns a unique id. This id consist of an 'e' character and a randomly generated string of 32 aphanumeric characters.
 * Each character in uid string represents a hexadecimal digit (base 16).
 *
 * @returns {String} A hexadecimal number representing the id.
 */
function uid() {
  var uuid = 'e'; // Make sure that id does not start with number.

  for (var i = 0; i < 8; i++) {
    uuid += Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  return uuid;
}

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var manifest_1 = tslib_1.__importDefault(__webpack_require__(/*! ./manifest */ "./node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js"));
var createReadOnlyValue = function createReadOnlyValue(value) {
    return {
        value: value,
        writable: false,
        enumerable: false,
        configurable: true
    };
};
function createConsumerApi(manifests, exposureMap) {
    var api = {};
    Object.keys(exposureMap).forEach(function (key) {
        Object.defineProperty(api, key, createReadOnlyValue(exposureMap[key]));
    });
    Object.defineProperty(api, '@manifest', createReadOnlyValue(manifest_1["default"](manifests)));
    Object.defineProperty(window, '@Neos:HostPluginAPI', createReadOnlyValue(api));
}
exports["default"] = createConsumerApi;
//# sourceMappingURL=createConsumerApi.js.map

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var createConsumerApi_1 = tslib_1.__importDefault(__webpack_require__(/*! ./createConsumerApi */ "./node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js"));
exports.createConsumerApi = createConsumerApi_1["default"];
var readFromConsumerApi_1 = tslib_1.__importDefault(__webpack_require__(/*! ./readFromConsumerApi */ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js"));
exports.readFromConsumerApi = readFromConsumerApi_1["default"];
var index_1 = __webpack_require__(/*! ./registry/index */ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js");
exports.SynchronousRegistry = index_1.SynchronousRegistry;
exports.SynchronousMetaRegistry = index_1.SynchronousMetaRegistry;
exports["default"] = readFromConsumerApi_1["default"]('manifest');
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = function (manifests) {
    return function (identifier, options, bootstrap) {
        var _a;
        manifests.push((_a = {}, _a[identifier] = {
            options: options,
            bootstrap: bootstrap
        }, _a));
    };
};
//# sourceMappingURL=manifest.js.map

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function readFromConsumerApi(key) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a;
        if (window['@Neos:HostPluginAPI'] && window['@Neos:HostPluginAPI']["@" + key]) {
            return (_a = window['@Neos:HostPluginAPI'])["@" + key].apply(_a, args);
        }
        throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!");
    };
}
exports["default"] = readFromConsumerApi;
//# sourceMappingURL=readFromConsumerApi.js.map

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var AbstractRegistry = function () {
    function AbstractRegistry(description) {
        this.SERIAL_VERSION_UID = 'd8a5aa78-978e-11e6-ae22-56b6b6499611';
        this.description = description;
    }
    return AbstractRegistry;
}();
exports["default"] = AbstractRegistry;
//# sourceMappingURL=AbstractRegistry.js.map

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var SynchronousRegistry_1 = tslib_1.__importDefault(__webpack_require__(/*! ./SynchronousRegistry */ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js"));
var SynchronousMetaRegistry = function (_super) {
    tslib_1.__extends(SynchronousMetaRegistry, _super);
    function SynchronousMetaRegistry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SynchronousMetaRegistry.prototype.set = function (key, value) {
        if (value.SERIAL_VERSION_UID !== 'd8a5aa78-978e-11e6-ae22-56b6b6499611') {
            throw new Error('You can only add registries to a meta registry');
        }
        return _super.prototype.set.call(this, key, value);
    };
    return SynchronousMetaRegistry;
}(SynchronousRegistry_1["default"]);
exports["default"] = SynchronousMetaRegistry;
//# sourceMappingURL=SynchronousMetaRegistry.js.map

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var AbstractRegistry_1 = tslib_1.__importDefault(__webpack_require__(/*! ./AbstractRegistry */ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js"));
var positional_array_sorter_1 = tslib_1.__importDefault(__webpack_require__(/*! @neos-project/positional-array-sorter */ "./node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js"));
var SynchronousRegistry = function (_super) {
    tslib_1.__extends(SynchronousRegistry, _super);
    function SynchronousRegistry(description) {
        var _this = _super.call(this, description) || this;
        _this._registry = [];
        return _this;
    }
    SynchronousRegistry.prototype.set = function (key, value, position) {
        if (position === void 0) {
            position = 0;
        }
        if (typeof key !== 'string') {
            throw new Error('Key must be a string');
        }
        if (typeof position !== 'string' && typeof position !== 'number') {
            throw new Error('Position must be a string or a number');
        }
        var entry = { key: key, value: value };
        if (position) {
            entry.position = position;
        }
        var indexOfItemWithTheSameKey = this._registry.findIndex(function (item) {
            return item.key === key;
        });
        if (indexOfItemWithTheSameKey === -1) {
            this._registry.push(entry);
        } else {
            this._registry[indexOfItemWithTheSameKey] = entry;
        }
        return value;
    };
    SynchronousRegistry.prototype.get = function (key) {
        if (typeof key !== 'string') {
            console.error('Key must be a string');
            return null;
        }
        var result = this._registry.find(function (item) {
            return item.key === key;
        });
        return result ? result.value : null;
    };
    SynchronousRegistry.prototype._getChildrenWrapped = function (searchKey) {
        var unsortedChildren = this._registry.filter(function (item) {
            return item.key.indexOf(searchKey + '/') === 0;
        });
        return positional_array_sorter_1["default"](unsortedChildren);
    };
    SynchronousRegistry.prototype.getChildrenAsObject = function (searchKey) {
        var result = {};
        this._getChildrenWrapped(searchKey).forEach(function (item) {
            result[item.key] = item.value;
        });
        return result;
    };
    SynchronousRegistry.prototype.getChildren = function (searchKey) {
        return this._getChildrenWrapped(searchKey).map(function (item) {
            return item.value;
        });
    };
    SynchronousRegistry.prototype.has = function (key) {
        if (typeof key !== 'string') {
            console.error('Key must be a string');
            return false;
        }
        return Boolean(this._registry.find(function (item) {
            return item.key === key;
        }));
    };
    SynchronousRegistry.prototype._getAllWrapped = function () {
        return positional_array_sorter_1["default"](this._registry);
    };
    SynchronousRegistry.prototype.getAllAsObject = function () {
        var result = {};
        this._getAllWrapped().forEach(function (item) {
            result[item.key] = item.value;
        });
        return result;
    };
    SynchronousRegistry.prototype.getAllAsList = function () {
        return this._getAllWrapped().map(function (item) {
            return Object.assign({ id: item.key }, item.value);
        });
    };
    return SynchronousRegistry;
}(AbstractRegistry_1["default"]);
exports["default"] = SynchronousRegistry;
//# sourceMappingURL=SynchronousRegistry.js.map

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var SynchronousRegistry_1 = tslib_1.__importDefault(__webpack_require__(/*! ./SynchronousRegistry */ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js"));
exports.SynchronousRegistry = SynchronousRegistry_1["default"];
var SynchronousMetaRegistry_1 = tslib_1.__importDefault(__webpack_require__(/*! ./SynchronousMetaRegistry */ "./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js"));
exports.SynchronousMetaRegistry = SynchronousMetaRegistry_1["default"];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-backend-connector/index.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-backend-connector/index.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchWithErrorHandling = undefined;

var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().NeosUiBackendConnectorDefault;
var fetchWithErrorHandling = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().NeosUiBackendConnector.fetchWithErrorHandling;
exports.fetchWithErrorHandling = fetchWithErrorHandling;

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-ckeditor5-bindings/index.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-ckeditor5-bindings/index.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().CkEditorApi;

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-decorators/index.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-decorators/index.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().NeosUiDecorators;

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/react-ui-components/index.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/react-ui-components/index.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().ReactUiComponents;

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/plow-js/index.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/plow-js/index.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().plow;

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/prop-types/index.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/prop-types/index.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().PropTypes;

/***/ }),

/***/ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _readFromConsumerApi = __webpack_require__(/*! ../../../../dist/readFromConsumerApi */ "./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js");

var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = (0, _readFromConsumerApi2.default)('vendor')().React;

/***/ }),

/***/ "./node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var isOriginal = function isOriginal(value) {
    return value && value.indexOf && value.indexOf('_original_') === 0;
};
var getOriginal = function getOriginal(value) {
    return value && value.substring && Number(value.substring(10));
};
var positionalArraySorter = function positionalArraySorter(subject, position, idKey) {
    if (position === void 0) {
        position = 'position';
    }
    if (idKey === void 0) {
        idKey = 'key';
    }
    var positionAccessor = typeof position === 'string' ? function (value) {
        return value[position];
    } : position;
    var positionsArray = subject.map(function (value, index) {
        var position = positionAccessor(value);
        return position === undefined ? "_original_" + index : position;
    });
    var validKeys = subject.map(function (value) {
        return idKey in value && value[idKey];
    }).filter(function (i) {
        return i;
    }).map(function (i) {
        return String(i);
    });
    var middleKeys = [];
    var startKeys = [];
    var endKeys = [];
    var beforeKeys = [];
    var afterKeys = [];
    var corruptKeys = [];
    positionsArray.forEach(function (value, index) {
        if (isNaN(value) === false || isOriginal(value)) {
            middleKeys.push([index, value]);
        } else if (typeof value === 'string') {
            if (value.includes('start')) {
                var weightMatch = value.match(/start\s+(\d+)/);
                var weight = weightMatch && weightMatch[1] || 0;
                startKeys.push([index, Number(weight)]);
            } else if (value.includes('end')) {
                var weightMatch = value.match(/end\s+(\d+)/);
                var weight = weightMatch && weightMatch[1] || 0;
                endKeys.push([index, Number(weight)]);
            } else if (value.includes('before')) {
                var keyMatch = value.match(/before\s+(\S+)/);
                var key = keyMatch && keyMatch[1];
                if (key && validKeys.includes(key)) {
                    beforeKeys.push([index, key]);
                } else {
                    corruptKeys.push(index);
                    console.warn('The following position value is corrupt: %s', value);
                }
            } else if (value.includes('after')) {
                var keyMatch = value.match(/after\s+(\S+)/);
                var key = keyMatch && keyMatch[1];
                if (key && validKeys.includes(key)) {
                    afterKeys.push([index, key]);
                } else {
                    corruptKeys.push(index);
                    console.warn('The following position value is corrupt: %s', value);
                }
            } else {
                corruptKeys.push(index);
                console.warn('The following position value is corrupt: %s', value);
            }
        } else {
            corruptKeys.push(index);
            console.warn('The following position value is corrupt: %s', value);
        }
    });
    var sortByWeightFunc = function sortByWeightFunc(a, b) {
        return a[1] - b[1];
    };
    var sortWithRetainingOriginalPos = function sortWithRetainingOriginalPos(_a, _b) {
        var a = _a[1];
        var b = _b[1];
        if (isOriginal(a) && isOriginal(b)) {
            return getOriginal(a) - getOriginal(b);
        }
        if (typeof a === 'string' && a.includes && a.includes('_original_')) {
            return 1;
        }
        if (typeof b === 'string' && b.includes && b.includes('_original_')) {
            return -1;
        }
        return Number(a) - Number(b);
    };
    var sortedIndexes = startKeys.sort(sortByWeightFunc).map(function (pair) {
        return pair[0];
    }).concat(middleKeys.sort(sortWithRetainingOriginalPos).map(function (pair) {
        return pair[0];
    }), corruptKeys, endKeys.sort(sortByWeightFunc).map(function (pair) {
        return pair[0];
    }));
    var _loop_1 = function _loop_1() {
        var alteredNumber = 0;
        beforeKeys.forEach(function (pair, index) {
            var targetIndexInSubject = subject.findIndex(function (item) {
                return String(item[idKey]) === pair[1];
            });
            var indexInIndexes = sortedIndexes.findIndex(function (item) {
                return item === targetIndexInSubject;
            });
            if (indexInIndexes !== -1) {
                sortedIndexes.splice(indexInIndexes, 0, pair[0]);
                beforeKeys.splice(index, 1);
                alteredNumber++;
            }
        });
        afterKeys.forEach(function (pair, index) {
            var targetIndexInSubject = subject.findIndex(function (item) {
                return String(item[idKey]) === pair[1];
            });
            var indexInIndexes = sortedIndexes.findIndex(function (item) {
                return item === targetIndexInSubject;
            });
            if (indexInIndexes !== -1) {
                sortedIndexes.splice(indexInIndexes + 1, 0, pair[0]);
                afterKeys.splice(index, 1);
                alteredNumber++;
            }
        });
        if (alteredNumber === 0) {
            console.warn('Circular reference detected. Append broken entries at the end.');
            sortedIndexes = sortedIndexes.concat(beforeKeys.map(function (pair) {
                return pair[0];
            }), afterKeys.map(function (pair) {
                return pair[0];
            }));
            return "break";
        }
    };
    while (beforeKeys.length > 0 || afterKeys.length > 0) {
        var state_1 = _loop_1();
        if (state_1 === "break") break;
    }
    return sortedIndexes.map(function (index) {
        return subject[index];
    });
};
exports["default"] = positionalArraySorter;
//# sourceMappingURL=positionalArraySorter.js.map

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/ButtonComponent.js":
/*!********************************!*\
  !*** ./src/ButtonComponent.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function (commandName) {
    var _dec, _class, _class2, _temp2;

    var FormattingButton = (_dec = (0, _neosUiDecorators.neos)(function (globalRegistry) {
        return {
            i18nRegistry: globalRegistry.get('i18n')
        };
    }), _dec(_class = (_temp2 = _class2 = function (_PureComponent) {
        _inherits(FormattingButton, _PureComponent);

        function FormattingButton() {
            var _ref;

            var _temp, _this, _ret;

            _classCallCheck(this, FormattingButton);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormattingButton.__proto__ || Object.getPrototypeOf(FormattingButton)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function () {
                // this command name must match the identifier of the command from examplePlugin.js, this.editor.commands.add(...)
                (0, _neosUiCkeditor5Bindings.executeCommand)(commandName);
            }, _temp), _possibleConstructorReturn(_this, _ret);
        }

        _createClass(FormattingButton, [{
            key: 'render',
            value: function render() {
                var props = {
                    onClick: this.handleClick,
                    isActive: Boolean(this.props.isActive),
                    title: this.props.i18nRegistry.translate(this.props.tooltip),
                    icon: this.props.icon
                };
                return _react2.default.createElement(_reactUiComponents.IconButton, props);
            }
        }]);

        return FormattingButton;
    }(_react.PureComponent), _class2.propTypes = {
        i18nRegistry: _propTypes2.default.object,
        tooltip: _propTypes2.default.string,
        isActive: _propTypes2.default.boolean
    }, _temp2)) || _class);


    return FormattingButton;
};

var _react = __webpack_require__(/*! react */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactUiComponents = __webpack_require__(/*! @neos-project/react-ui-components */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/react-ui-components/index.js");

var _neosUiDecorators = __webpack_require__(/*! @neos-project/neos-ui-decorators */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-decorators/index.js");

var _neosUiCkeditor5Bindings = __webpack_require__(/*! @neos-project/neos-ui-ckeditor5-bindings */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-ckeditor5-bindings/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/***/ }),

/***/ "./src/CkeditorPluginUtils.js":
/*!************************************!*\
  !*** ./src/CkeditorPluginUtils.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getRichtextToolbarConfig = exports.getCkeditorPluginConfig = exports.getCkeditorPlugin = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _plugin = __webpack_require__(/*! @ckeditor/ckeditor5-core/src/plugin */ "./node_modules/@ckeditor/ckeditor5-core/src/plugin.js");

var _plugin2 = _interopRequireDefault(_plugin);

var _attributecommand = __webpack_require__(/*! @ckeditor/ckeditor5-basic-styles/src/attributecommand */ "./node_modules/@ckeditor/ckeditor5-basic-styles/src/attributecommand.js");

var _attributecommand2 = _interopRequireDefault(_attributecommand);

var _plowJs = __webpack_require__(/*! plow-js */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/plow-js/index.js");

var _ButtonComponent = __webpack_require__(/*! ./ButtonComponent */ "./src/ButtonComponent.js");

var _ButtonComponent2 = _interopRequireDefault(_ButtonComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getCkeditorPlugin = function getCkeditorPlugin(extensionName, commandName, formatting) {
    var attributeName = extensionName + 'Attribute';

    return function (_Plugin) {
        _inherits(_class, _Plugin);

        function _class() {
            _classCallCheck(this, _class);

            return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, [{
            key: 'init',
            value: function init() {
                var config = {
                    model: attributeName,
                    view: {
                        name: formatting.tag,
                        classes: formatting.classes,
                        styles: formatting.styles
                    }
                };

                this.editor.model.schema.extend('$text', { allowAttributes: attributeName });
                this.editor.conversion.attributeToElement(config);
                this.editor.commands.add(commandName, new _attributecommand2.default(this.editor, attributeName));
            }
        }], [{
            key: 'pluginName',
            get: function get() {
                return extensionName;
            }
        }]);

        return _class;
    }(_plugin2.default);
};

var getCkeditorPluginConfig = function getCkeditorPluginConfig(formattingName, ckeditorPlugin) {
    return function (ckEditorConfiguration, options) {
        if ((0, _plowJs.$get)(['formatting', formattingName], options.editorOptions)) {
            ckEditorConfiguration.plugins = ckEditorConfiguration.plugins || [];
            return (0, _plowJs.$add)('plugins', ckeditorPlugin, ckEditorConfiguration);
        }
        return ckEditorConfiguration;
    };
};

var getRichtextToolbarConfig = function getRichtextToolbarConfig(commandName, formattingName, icon, tooltip) {
    return {
        commandName: commandName,
        isActive: (0, _plowJs.$get)(commandName),
        isVisible: (0, _plowJs.$get)(['formatting', formattingName]),
        component: (0, _ButtonComponent2.default)(commandName),
        icon: icon,
        tooltip: tooltip
    };
};

exports.getCkeditorPlugin = getCkeditorPlugin;
exports.getCkeditorPluginConfig = getCkeditorPluginConfig;
exports.getRichtextToolbarConfig = getRichtextToolbarConfig;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./manifest */ "./src/manifest.js");

/***/ }),

/***/ "./src/manifest.js":
/*!*************************!*\
  !*** ./src/manifest.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _neosUiExtensibility = __webpack_require__(/*! @neos-project/neos-ui-extensibility */ "./node_modules/@neos-project/neos-ui-extensibility/dist/index.js");

var _neosUiExtensibility2 = _interopRequireDefault(_neosUiExtensibility);

var _CkeditorPluginUtils = __webpack_require__(/*! ./CkeditorPluginUtils */ "./src/CkeditorPluginUtils.js");

var _neosUiBackendConnector = __webpack_require__(/*! @neos-project/neos-ui-backend-connector */ "./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-backend-connector/index.js");

var _neosUiBackendConnector2 = _interopRequireDefault(_neosUiBackendConnector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _neosUiExtensibility2.default)('Breadlesscode.SimpleEditorExtend:UiPlugin', {}, function (globalRegistry) {
    var richtextToolbar = globalRegistry.get('ckEditor5').get('richtextToolbar');
    var config = globalRegistry.get('ckEditor5').get('config');

    var getJsonResource = _neosUiBackendConnector2.default.get().endpoints.getJsonResource;

    var configUri = '/breadlesscode/editor-config';

    getJsonResource(configUri).then(function (buttonConfig) {
        Object.keys(buttonConfig).forEach(function (formattingName) {
            var options = buttonConfig[formattingName];
            var commandName = options.extensionName + 'Command';

            richtextToolbar.set(options.extensionName, (0, _CkeditorPluginUtils.getRichtextToolbarConfig)(commandName, formattingName, options.icon, options.tooltip), options.position);

            config.set(options.extensionName, (0, _CkeditorPluginUtils.getCkeditorPluginConfig)(formattingName, (0, _CkeditorPluginUtils.getCkeditorPlugin)(options.extensionName, commandName, options.formatting)));
        });
    });
});

/***/ })

/******/ });
//# sourceMappingURL=Plugin.js.map