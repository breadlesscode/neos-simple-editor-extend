(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

  // node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js
  var init_manifest = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js"() {
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js
  var init_createConsumerApi = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js"() {
      init_manifest();
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js
  function readFromConsumerApi(key) {
    return (...args) => {
      if (window["@Neos:HostPluginAPI"] && window["@Neos:HostPluginAPI"][`@${key}`]) {
        return window["@Neos:HostPluginAPI"][`@${key}`](...args);
      }
      throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!");
    };
  }
  var init_readFromConsumerApi = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js"() {
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js
  var init_AbstractRegistry = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js"() {
    }
  });

  // node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js
  var init_positionalArraySorter = __esm({
    "node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js"() {
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js
  var init_SynchronousRegistry = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js"() {
      init_AbstractRegistry();
      init_positionalArraySorter();
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js
  var init_SynchronousMetaRegistry = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js"() {
      init_SynchronousRegistry();
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js
  var init_registry = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js"() {
      init_SynchronousRegistry();
      init_SynchronousMetaRegistry();
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/index.js
  var dist_default;
  var init_dist = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/index.js"() {
      init_createConsumerApi();
      init_readFromConsumerApi();
      init_registry();
      dist_default = readFromConsumerApi("manifest");
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/ckeditor5-exports/index.js
  var require_ckeditor5_exports = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/ckeditor5-exports/index.js"(exports2, module2) {
      init_readFromConsumerApi();
      module2.exports = readFromConsumerApi("vendor")().CkEditor5;
    }
  });

  // src/AllowAttributesPlugin.js
  function stylesToString(styles) {
    return Object.keys(styles).map((style) => style + ":" + styles[style]).join(";");
  }
  var import_ckeditor5_exports, AllowAttributesPlugin_default;
  var init_AllowAttributesPlugin = __esm({
    "src/AllowAttributesPlugin.js"() {
      import_ckeditor5_exports = __toESM(require_ckeditor5_exports());
      AllowAttributesPlugin_default = (presetConfiguration) => class AllowAttributesPlugin extends import_ckeditor5_exports.Plugin {
        init() {
          const styleIds = Object.keys(presetConfiguration);
          const config = {
            model: {
              key: "AllowAttributesPlugin",
              values: styleIds
            },
            view: {}
          };
          styleIds.forEach((styleId) => {
            const formattingOptions = presetConfiguration[styleId].formatting;
            let newConfig = {
              name: formattingOptions.tag,
              attributes: {}
            };
            if (formattingOptions.classes) {
              newConfig.attributes.class = formattingOptions.classes;
            }
            if (formattingOptions.style) {
              newConfig.attributes.style = stylesToString(formattingOptions.styles);
            }
            this.editor.model.schema.extend("$text", { allowAttributes: styleId });
            this.editor.model.schema.setAttributeProperties(styleId, { isFormatting: true });
            config.view[styleId] = newConfig;
            console.log(config);
          });
          this.editor.conversion.attributeToElement(config);
        }
      };
    }
  });

  // node_modules/@ckeditor/ckeditor5-utils/src/spy.js
  function spy() {
    return function spy2() {
      spy2.called = true;
    };
  }
  var spy_default;
  var init_spy = __esm({
    "node_modules/@ckeditor/ckeditor5-utils/src/spy.js"() {
      spy_default = spy;
    }
  });

  // node_modules/@ckeditor/ckeditor5-utils/src/eventinfo.js
  var EventInfo;
  var init_eventinfo = __esm({
    "node_modules/@ckeditor/ckeditor5-utils/src/eventinfo.js"() {
      init_spy();
      EventInfo = class {
        /**
         * @param {Object} source The emitter.
         * @param {String} name The event name.
         */
        constructor(source, name) {
          this.source = source;
          this.name = name;
          this.path = [];
          this.stop = spy_default();
          this.off = spy_default();
        }
      };
    }
  });

  // node_modules/@ckeditor/ckeditor5-utils/src/uid.js
  function uid() {
    let uuid = "e";
    for (let i = 0; i < 8; i++) {
      uuid += Math.floor((1 + Math.random()) * 65536).toString(16).substring(1);
    }
    return uuid;
  }
  var init_uid = __esm({
    "node_modules/@ckeditor/ckeditor5-utils/src/uid.js"() {
    }
  });

  // node_modules/@ckeditor/ckeditor5-utils/src/priorities.js
  var priorities, priorities_default;
  var init_priorities = __esm({
    "node_modules/@ckeditor/ckeditor5-utils/src/priorities.js"() {
      priorities = {
        /**
         * Converts a string with priority name to it's numeric value. If `Number` is given, it just returns it.
         *
         * @static
         * @param {module:utils/priorities~PriorityString|Number} priority Priority to convert.
         * @returns {Number} Converted priority.
         */
        get(priority) {
          if (typeof priority != "number") {
            return this[priority] || this.normal;
          } else {
            return priority;
          }
        },
        highest: 1e5,
        high: 1e3,
        normal: 0,
        low: -1e3,
        lowest: -1e5
      };
      priorities_default = priorities;
    }
  });

  // node_modules/@ckeditor/ckeditor5-utils/src/emittermixin.js
  function _setEmitterId(emitter, id) {
    if (!emitter[_emitterId]) {
      emitter[_emitterId] = id || uid();
    }
  }
  function _getEmitterId(emitter) {
    return emitter[_emitterId];
  }
  function getEvents(source) {
    if (!source._events) {
      Object.defineProperty(source, "_events", {
        value: {}
      });
    }
    return source._events;
  }
  function makeEventNode() {
    return {
      callbacks: [],
      childEvents: []
    };
  }
  function createEventNamespace(source, eventName) {
    const events = getEvents(source);
    if (events[eventName]) {
      return;
    }
    let name = eventName;
    let childEventName = null;
    const newEventNodes = [];
    while (name !== "") {
      if (events[name]) {
        break;
      }
      events[name] = makeEventNode();
      newEventNodes.push(events[name]);
      if (childEventName) {
        events[name].childEvents.push(childEventName);
      }
      childEventName = name;
      name = name.substr(0, name.lastIndexOf(":"));
    }
    if (name !== "") {
      for (const node of newEventNodes) {
        node.callbacks = events[name].callbacks.slice();
      }
      events[name].childEvents.push(childEventName);
    }
  }
  function getCallbacksListsForNamespace(source, eventName) {
    const eventNode = getEvents(source)[eventName];
    if (!eventNode) {
      return [];
    }
    let callbacksLists = [eventNode.callbacks];
    for (let i = 0; i < eventNode.childEvents.length; i++) {
      const childCallbacksLists = getCallbacksListsForNamespace(source, eventNode.childEvents[i]);
      callbacksLists = callbacksLists.concat(childCallbacksLists);
    }
    return callbacksLists;
  }
  function getCallbacksForEvent(source, eventName) {
    let event;
    if (!source._events || !(event = source._events[eventName]) || !event.callbacks.length) {
      if (eventName.indexOf(":") > -1) {
        return getCallbacksForEvent(source, eventName.substr(0, eventName.lastIndexOf(":")));
      } else {
        return null;
      }
    }
    return event.callbacks;
  }
  function fireDelegatedEvents(destinations, eventInfo, fireArgs) {
    for (let [emitter, name] of destinations) {
      if (!name) {
        name = eventInfo.name;
      } else if (typeof name == "function") {
        name = name(eventInfo.name);
      }
      const delegatedInfo = new EventInfo(eventInfo.source, name);
      delegatedInfo.path = [...eventInfo.path];
      emitter.fire(delegatedInfo, ...fireArgs);
    }
  }
  function removeCallback(emitter, event, callback) {
    const lists = getCallbacksListsForNamespace(emitter, event);
    for (const callbacks of lists) {
      for (let i = 0; i < callbacks.length; i++) {
        if (callbacks[i].callback == callback) {
          callbacks.splice(i, 1);
          i--;
        }
      }
    }
  }
  var _listeningTo, _emitterId, EmitterMixin, emittermixin_default;
  var init_emittermixin = __esm({
    "node_modules/@ckeditor/ckeditor5-utils/src/emittermixin.js"() {
      init_eventinfo();
      init_uid();
      init_priorities();
      _listeningTo = Symbol("listeningTo");
      _emitterId = Symbol("emitterId");
      EmitterMixin = {
        /**
         * @inheritDoc
         */
        on(event, callback, options = {}) {
          this.listenTo(this, event, callback, options);
        },
        /**
         * @inheritDoc
         */
        once(event, callback, options) {
          const onceCallback = function(event2, ...args) {
            event2.off();
            callback.call(this, event2, ...args);
          };
          this.listenTo(this, event, onceCallback, options);
        },
        /**
         * @inheritDoc
         */
        off(event, callback) {
          this.stopListening(this, event, callback);
        },
        /**
         * @inheritDoc
         */
        listenTo(emitter, event, callback, options = {}) {
          let emitterInfo, eventCallbacks;
          if (!this[_listeningTo]) {
            this[_listeningTo] = {};
          }
          const emitters = this[_listeningTo];
          if (!_getEmitterId(emitter)) {
            _setEmitterId(emitter);
          }
          const emitterId = _getEmitterId(emitter);
          if (!(emitterInfo = emitters[emitterId])) {
            emitterInfo = emitters[emitterId] = {
              emitter,
              callbacks: {}
            };
          }
          if (!(eventCallbacks = emitterInfo.callbacks[event])) {
            eventCallbacks = emitterInfo.callbacks[event] = [];
          }
          eventCallbacks.push(callback);
          createEventNamespace(emitter, event);
          const lists = getCallbacksListsForNamespace(emitter, event);
          const priority = priorities_default.get(options.priority);
          const callbackDefinition = {
            callback,
            priority
          };
          for (const callbacks of lists) {
            let added = false;
            for (let i = 0; i < callbacks.length; i++) {
              if (callbacks[i].priority < priority) {
                callbacks.splice(i, 0, callbackDefinition);
                added = true;
                break;
              }
            }
            if (!added) {
              callbacks.push(callbackDefinition);
            }
          }
        },
        /**
         * @inheritDoc
         */
        stopListening(emitter, event, callback) {
          const emitters = this[_listeningTo];
          let emitterId = emitter && _getEmitterId(emitter);
          const emitterInfo = emitters && emitterId && emitters[emitterId];
          const eventCallbacks = emitterInfo && event && emitterInfo.callbacks[event];
          if (!emitters || emitter && !emitterInfo || event && !eventCallbacks) {
            return;
          }
          if (callback) {
            removeCallback(emitter, event, callback);
          } else if (eventCallbacks) {
            while (callback = eventCallbacks.pop()) {
              removeCallback(emitter, event, callback);
            }
            delete emitterInfo.callbacks[event];
          } else if (emitterInfo) {
            for (event in emitterInfo.callbacks) {
              this.stopListening(emitter, event);
            }
            delete emitters[emitterId];
          } else {
            for (emitterId in emitters) {
              this.stopListening(emitters[emitterId].emitter);
            }
            delete this[_listeningTo];
          }
        },
        /**
         * @inheritDoc
         */
        fire(eventOrInfo, ...args) {
          const eventInfo = eventOrInfo instanceof EventInfo ? eventOrInfo : new EventInfo(this, eventOrInfo);
          const event = eventInfo.name;
          let callbacks = getCallbacksForEvent(this, event);
          eventInfo.path.push(this);
          if (callbacks) {
            const callbackArgs = [eventInfo, ...args];
            callbacks = Array.from(callbacks);
            for (let i = 0; i < callbacks.length; i++) {
              callbacks[i].callback.apply(this, callbackArgs);
              if (eventInfo.off.called) {
                delete eventInfo.off.called;
                removeCallback(this, event, callbacks[i].callback);
              }
              if (eventInfo.stop.called) {
                break;
              }
            }
          }
          if (this._delegations) {
            const destinations = this._delegations.get(event);
            const passAllDestinations = this._delegations.get("*");
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
        delegate(...events) {
          return {
            to: (emitter, nameOrFunction) => {
              if (!this._delegations) {
                this._delegations = /* @__PURE__ */ new Map();
              }
              for (const eventName of events) {
                const destinations = this._delegations.get(eventName);
                if (!destinations) {
                  this._delegations.set(eventName, /* @__PURE__ */ new Map([[emitter, nameOrFunction]]));
                } else {
                  destinations.set(emitter, nameOrFunction);
                }
              }
            }
          };
        },
        /**
         * @inheritDoc
         */
        stopDelegating(event, emitter) {
          if (!this._delegations) {
            return;
          }
          if (!event) {
            this._delegations.clear();
          } else if (!emitter) {
            this._delegations.delete(event);
          } else {
            const destinations = this._delegations.get(event);
            if (destinations) {
              destinations.delete(emitter);
            }
          }
        }
      };
      emittermixin_default = EmitterMixin;
    }
  });

  // node_modules/@ckeditor/ckeditor5-utils/src/ckeditorerror.js
  function attachLinkToDocumentation(message) {
    const matchedErrorName = message.match(/^([^:]+):/);
    if (!matchedErrorName) {
      return message;
    }
    return message + ` Read more: ${DOCUMENTATION_URL}#error-${matchedErrorName[1]}
`;
  }
  var DOCUMENTATION_URL, CKEditorError;
  var init_ckeditorerror = __esm({
    "node_modules/@ckeditor/ckeditor5-utils/src/ckeditorerror.js"() {
      DOCUMENTATION_URL = "https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/error-codes.html";
      CKEditorError = class extends Error {
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
        constructor(message, data) {
          message = attachLinkToDocumentation(message);
          if (data) {
            message += " " + JSON.stringify(data);
          }
          super(message);
          this.name = "CKEditorError";
          this.data = data;
        }
        /**
         * Checks if error is an instance of CKEditorError class.
         *
         * @param {Object} error Object to check.
         * @returns {Boolean}
         */
        static isCKEditorError(error) {
          return error instanceof CKEditorError;
        }
      };
    }
  });

  // node_modules/lodash-es/_freeGlobal.js
  var freeGlobal, freeGlobal_default;
  var init_freeGlobal = __esm({
    "node_modules/lodash-es/_freeGlobal.js"() {
      freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      freeGlobal_default = freeGlobal;
    }
  });

  // node_modules/lodash-es/_root.js
  var freeSelf, root, root_default;
  var init_root = __esm({
    "node_modules/lodash-es/_root.js"() {
      init_freeGlobal();
      freeSelf = typeof self == "object" && self && self.Object === Object && self;
      root = freeGlobal_default || freeSelf || Function("return this")();
      root_default = root;
    }
  });

  // node_modules/lodash-es/_Symbol.js
  var Symbol2, Symbol_default;
  var init_Symbol = __esm({
    "node_modules/lodash-es/_Symbol.js"() {
      init_root();
      Symbol2 = root_default.Symbol;
      Symbol_default = Symbol2;
    }
  });

  // node_modules/lodash-es/_getRawTag.js
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
      value[symToStringTag] = void 0;
      var unmasked = true;
    } catch (e) {
    }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }
  var objectProto, hasOwnProperty, nativeObjectToString, symToStringTag, getRawTag_default;
  var init_getRawTag = __esm({
    "node_modules/lodash-es/_getRawTag.js"() {
      init_Symbol();
      objectProto = Object.prototype;
      hasOwnProperty = objectProto.hasOwnProperty;
      nativeObjectToString = objectProto.toString;
      symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
      getRawTag_default = getRawTag;
    }
  });

  // node_modules/lodash-es/_objectToString.js
  function objectToString(value) {
    return nativeObjectToString2.call(value);
  }
  var objectProto2, nativeObjectToString2, objectToString_default;
  var init_objectToString = __esm({
    "node_modules/lodash-es/_objectToString.js"() {
      objectProto2 = Object.prototype;
      nativeObjectToString2 = objectProto2.toString;
      objectToString_default = objectToString;
    }
  });

  // node_modules/lodash-es/_baseGetTag.js
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
  }
  var nullTag, undefinedTag, symToStringTag2, baseGetTag_default;
  var init_baseGetTag = __esm({
    "node_modules/lodash-es/_baseGetTag.js"() {
      init_Symbol();
      init_getRawTag();
      init_objectToString();
      nullTag = "[object Null]";
      undefinedTag = "[object Undefined]";
      symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
      baseGetTag_default = baseGetTag;
    }
  });

  // node_modules/lodash-es/isObjectLike.js
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }
  var isObjectLike_default;
  var init_isObjectLike = __esm({
    "node_modules/lodash-es/isObjectLike.js"() {
      isObjectLike_default = isObjectLike;
    }
  });

  // node_modules/lodash-es/isArray.js
  var isArray, isArray_default;
  var init_isArray = __esm({
    "node_modules/lodash-es/isArray.js"() {
      isArray = Array.isArray;
      isArray_default = isArray;
    }
  });

  // node_modules/lodash-es/isObject.js
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  var isObject_default;
  var init_isObject = __esm({
    "node_modules/lodash-es/isObject.js"() {
      isObject_default = isObject;
    }
  });

  // node_modules/lodash-es/identity.js
  function identity(value) {
    return value;
  }
  var identity_default;
  var init_identity = __esm({
    "node_modules/lodash-es/identity.js"() {
      identity_default = identity;
    }
  });

  // node_modules/lodash-es/isFunction.js
  function isFunction(value) {
    if (!isObject_default(value)) {
      return false;
    }
    var tag = baseGetTag_default(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }
  var asyncTag, funcTag, genTag, proxyTag, isFunction_default;
  var init_isFunction = __esm({
    "node_modules/lodash-es/isFunction.js"() {
      init_baseGetTag();
      init_isObject();
      asyncTag = "[object AsyncFunction]";
      funcTag = "[object Function]";
      genTag = "[object GeneratorFunction]";
      proxyTag = "[object Proxy]";
      isFunction_default = isFunction;
    }
  });

  // node_modules/lodash-es/_coreJsData.js
  var coreJsData, coreJsData_default;
  var init_coreJsData = __esm({
    "node_modules/lodash-es/_coreJsData.js"() {
      init_root();
      coreJsData = root_default["__core-js_shared__"];
      coreJsData_default = coreJsData;
    }
  });

  // node_modules/lodash-es/_isMasked.js
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  var maskSrcKey, isMasked_default;
  var init_isMasked = __esm({
    "node_modules/lodash-es/_isMasked.js"() {
      init_coreJsData();
      maskSrcKey = function() {
        var uid2 = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
        return uid2 ? "Symbol(src)_1." + uid2 : "";
      }();
      isMasked_default = isMasked;
    }
  });

  // node_modules/lodash-es/_toSource.js
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {
      }
      try {
        return func + "";
      } catch (e) {
      }
    }
    return "";
  }
  var funcProto, funcToString, toSource_default;
  var init_toSource = __esm({
    "node_modules/lodash-es/_toSource.js"() {
      funcProto = Function.prototype;
      funcToString = funcProto.toString;
      toSource_default = toSource;
    }
  });

  // node_modules/lodash-es/_baseIsNative.js
  function baseIsNative(value) {
    if (!isObject_default(value) || isMasked_default(value)) {
      return false;
    }
    var pattern = isFunction_default(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource_default(value));
  }
  var reRegExpChar, reIsHostCtor, funcProto2, objectProto3, funcToString2, hasOwnProperty2, reIsNative, baseIsNative_default;
  var init_baseIsNative = __esm({
    "node_modules/lodash-es/_baseIsNative.js"() {
      init_isFunction();
      init_isMasked();
      init_isObject();
      init_toSource();
      reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      reIsHostCtor = /^\[object .+?Constructor\]$/;
      funcProto2 = Function.prototype;
      objectProto3 = Object.prototype;
      funcToString2 = funcProto2.toString;
      hasOwnProperty2 = objectProto3.hasOwnProperty;
      reIsNative = RegExp(
        "^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      );
      baseIsNative_default = baseIsNative;
    }
  });

  // node_modules/lodash-es/_getValue.js
  function getValue(object, key) {
    return object == null ? void 0 : object[key];
  }
  var getValue_default;
  var init_getValue = __esm({
    "node_modules/lodash-es/_getValue.js"() {
      getValue_default = getValue;
    }
  });

  // node_modules/lodash-es/_getNative.js
  function getNative(object, key) {
    var value = getValue_default(object, key);
    return baseIsNative_default(value) ? value : void 0;
  }
  var getNative_default;
  var init_getNative = __esm({
    "node_modules/lodash-es/_getNative.js"() {
      init_baseIsNative();
      init_getValue();
      getNative_default = getNative;
    }
  });

  // node_modules/lodash-es/_apply.js
  function apply(func, thisArg, args) {
    switch (args.length) {
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
  var apply_default;
  var init_apply = __esm({
    "node_modules/lodash-es/_apply.js"() {
      apply_default = apply;
    }
  });

  // node_modules/lodash-es/_shortOut.js
  function shortOut(func) {
    var count = 0, lastCalled = 0;
    return function() {
      var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(void 0, arguments);
    };
  }
  var HOT_COUNT, HOT_SPAN, nativeNow, shortOut_default;
  var init_shortOut = __esm({
    "node_modules/lodash-es/_shortOut.js"() {
      HOT_COUNT = 800;
      HOT_SPAN = 16;
      nativeNow = Date.now;
      shortOut_default = shortOut;
    }
  });

  // node_modules/lodash-es/constant.js
  function constant(value) {
    return function() {
      return value;
    };
  }
  var constant_default;
  var init_constant = __esm({
    "node_modules/lodash-es/constant.js"() {
      constant_default = constant;
    }
  });

  // node_modules/lodash-es/_defineProperty.js
  var defineProperty, defineProperty_default;
  var init_defineProperty = __esm({
    "node_modules/lodash-es/_defineProperty.js"() {
      init_getNative();
      defineProperty = function() {
        try {
          var func = getNative_default(Object, "defineProperty");
          func({}, "", {});
          return func;
        } catch (e) {
        }
      }();
      defineProperty_default = defineProperty;
    }
  });

  // node_modules/lodash-es/_baseSetToString.js
  var baseSetToString, baseSetToString_default;
  var init_baseSetToString = __esm({
    "node_modules/lodash-es/_baseSetToString.js"() {
      init_constant();
      init_defineProperty();
      init_identity();
      baseSetToString = !defineProperty_default ? identity_default : function(func, string) {
        return defineProperty_default(func, "toString", {
          "configurable": true,
          "enumerable": false,
          "value": constant_default(string),
          "writable": true
        });
      };
      baseSetToString_default = baseSetToString;
    }
  });

  // node_modules/lodash-es/_setToString.js
  var setToString, setToString_default;
  var init_setToString = __esm({
    "node_modules/lodash-es/_setToString.js"() {
      init_baseSetToString();
      init_shortOut();
      setToString = shortOut_default(baseSetToString_default);
      setToString_default = setToString;
    }
  });

  // node_modules/lodash-es/_isIndex.js
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
  }
  var MAX_SAFE_INTEGER, reIsUint, isIndex_default;
  var init_isIndex = __esm({
    "node_modules/lodash-es/_isIndex.js"() {
      MAX_SAFE_INTEGER = 9007199254740991;
      reIsUint = /^(?:0|[1-9]\d*)$/;
      isIndex_default = isIndex;
    }
  });

  // node_modules/lodash-es/_baseAssignValue.js
  function baseAssignValue(object, key, value) {
    if (key == "__proto__" && defineProperty_default) {
      defineProperty_default(object, key, {
        "configurable": true,
        "enumerable": true,
        "value": value,
        "writable": true
      });
    } else {
      object[key] = value;
    }
  }
  var baseAssignValue_default;
  var init_baseAssignValue = __esm({
    "node_modules/lodash-es/_baseAssignValue.js"() {
      init_defineProperty();
      baseAssignValue_default = baseAssignValue;
    }
  });

  // node_modules/lodash-es/eq.js
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }
  var eq_default;
  var init_eq = __esm({
    "node_modules/lodash-es/eq.js"() {
      eq_default = eq;
    }
  });

  // node_modules/lodash-es/_assignValue.js
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty3.call(object, key) && eq_default(objValue, value)) || value === void 0 && !(key in object)) {
      baseAssignValue_default(object, key, value);
    }
  }
  var objectProto4, hasOwnProperty3, assignValue_default;
  var init_assignValue = __esm({
    "node_modules/lodash-es/_assignValue.js"() {
      init_baseAssignValue();
      init_eq();
      objectProto4 = Object.prototype;
      hasOwnProperty3 = objectProto4.hasOwnProperty;
      assignValue_default = assignValue;
    }
  });

  // node_modules/lodash-es/_copyObject.js
  function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});
    var index = -1, length = props.length;
    while (++index < length) {
      var key = props[index];
      var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
      if (newValue === void 0) {
        newValue = source[key];
      }
      if (isNew) {
        baseAssignValue_default(object, key, newValue);
      } else {
        assignValue_default(object, key, newValue);
      }
    }
    return object;
  }
  var copyObject_default;
  var init_copyObject = __esm({
    "node_modules/lodash-es/_copyObject.js"() {
      init_assignValue();
      init_baseAssignValue();
      copyObject_default = copyObject;
    }
  });

  // node_modules/lodash-es/_overRest.js
  function overRest(func, start, transform) {
    start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
    return function() {
      var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
      while (++index < length) {
        array[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = transform(array);
      return apply_default(func, this, otherArgs);
    };
  }
  var nativeMax, overRest_default;
  var init_overRest = __esm({
    "node_modules/lodash-es/_overRest.js"() {
      init_apply();
      nativeMax = Math.max;
      overRest_default = overRest;
    }
  });

  // node_modules/lodash-es/_baseRest.js
  function baseRest(func, start) {
    return setToString_default(overRest_default(func, start, identity_default), func + "");
  }
  var baseRest_default;
  var init_baseRest = __esm({
    "node_modules/lodash-es/_baseRest.js"() {
      init_identity();
      init_overRest();
      init_setToString();
      baseRest_default = baseRest;
    }
  });

  // node_modules/lodash-es/isLength.js
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER2;
  }
  var MAX_SAFE_INTEGER2, isLength_default;
  var init_isLength = __esm({
    "node_modules/lodash-es/isLength.js"() {
      MAX_SAFE_INTEGER2 = 9007199254740991;
      isLength_default = isLength;
    }
  });

  // node_modules/lodash-es/isArrayLike.js
  function isArrayLike(value) {
    return value != null && isLength_default(value.length) && !isFunction_default(value);
  }
  var isArrayLike_default;
  var init_isArrayLike = __esm({
    "node_modules/lodash-es/isArrayLike.js"() {
      init_isFunction();
      init_isLength();
      isArrayLike_default = isArrayLike;
    }
  });

  // node_modules/lodash-es/_isIterateeCall.js
  function isIterateeCall(value, index, object) {
    if (!isObject_default(object)) {
      return false;
    }
    var type = typeof index;
    if (type == "number" ? isArrayLike_default(object) && isIndex_default(index, object.length) : type == "string" && index in object) {
      return eq_default(object[index], value);
    }
    return false;
  }
  var isIterateeCall_default;
  var init_isIterateeCall = __esm({
    "node_modules/lodash-es/_isIterateeCall.js"() {
      init_eq();
      init_isArrayLike();
      init_isIndex();
      init_isObject();
      isIterateeCall_default = isIterateeCall;
    }
  });

  // node_modules/lodash-es/_createAssigner.js
  function createAssigner(assigner) {
    return baseRest_default(function(object, sources) {
      var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
      customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
      if (guard && isIterateeCall_default(sources[0], sources[1], guard)) {
        customizer = length < 3 ? void 0 : customizer;
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
  var createAssigner_default;
  var init_createAssigner = __esm({
    "node_modules/lodash-es/_createAssigner.js"() {
      init_baseRest();
      init_isIterateeCall();
      createAssigner_default = createAssigner;
    }
  });

  // node_modules/lodash-es/_isPrototype.js
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto5;
    return value === proto;
  }
  var objectProto5, isPrototype_default;
  var init_isPrototype = __esm({
    "node_modules/lodash-es/_isPrototype.js"() {
      objectProto5 = Object.prototype;
      isPrototype_default = isPrototype;
    }
  });

  // node_modules/lodash-es/_baseTimes.js
  function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }
  var baseTimes_default;
  var init_baseTimes = __esm({
    "node_modules/lodash-es/_baseTimes.js"() {
      baseTimes_default = baseTimes;
    }
  });

  // node_modules/lodash-es/_baseIsArguments.js
  function baseIsArguments(value) {
    return isObjectLike_default(value) && baseGetTag_default(value) == argsTag;
  }
  var argsTag, baseIsArguments_default;
  var init_baseIsArguments = __esm({
    "node_modules/lodash-es/_baseIsArguments.js"() {
      init_baseGetTag();
      init_isObjectLike();
      argsTag = "[object Arguments]";
      baseIsArguments_default = baseIsArguments;
    }
  });

  // node_modules/lodash-es/isArguments.js
  var objectProto6, hasOwnProperty4, propertyIsEnumerable, isArguments, isArguments_default;
  var init_isArguments = __esm({
    "node_modules/lodash-es/isArguments.js"() {
      init_baseIsArguments();
      init_isObjectLike();
      objectProto6 = Object.prototype;
      hasOwnProperty4 = objectProto6.hasOwnProperty;
      propertyIsEnumerable = objectProto6.propertyIsEnumerable;
      isArguments = baseIsArguments_default(function() {
        return arguments;
      }()) ? baseIsArguments_default : function(value) {
        return isObjectLike_default(value) && hasOwnProperty4.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
      };
      isArguments_default = isArguments;
    }
  });

  // node_modules/lodash-es/stubFalse.js
  function stubFalse() {
    return false;
  }
  var stubFalse_default;
  var init_stubFalse = __esm({
    "node_modules/lodash-es/stubFalse.js"() {
      stubFalse_default = stubFalse;
    }
  });

  // node_modules/lodash-es/isBuffer.js
  var freeExports, freeModule, moduleExports, Buffer2, nativeIsBuffer, isBuffer, isBuffer_default;
  var init_isBuffer = __esm({
    "node_modules/lodash-es/isBuffer.js"() {
      init_root();
      init_stubFalse();
      freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      moduleExports = freeModule && freeModule.exports === freeExports;
      Buffer2 = moduleExports ? root_default.Buffer : void 0;
      nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
      isBuffer = nativeIsBuffer || stubFalse_default;
      isBuffer_default = isBuffer;
    }
  });

  // node_modules/lodash-es/_baseIsTypedArray.js
  function baseIsTypedArray(value) {
    return isObjectLike_default(value) && isLength_default(value.length) && !!typedArrayTags[baseGetTag_default(value)];
  }
  var argsTag2, arrayTag, boolTag, dateTag, errorTag, funcTag2, mapTag, numberTag, objectTag, regexpTag, setTag, stringTag, weakMapTag, arrayBufferTag, dataViewTag, float32Tag, float64Tag, int8Tag, int16Tag, int32Tag, uint8Tag, uint8ClampedTag, uint16Tag, uint32Tag, typedArrayTags, baseIsTypedArray_default;
  var init_baseIsTypedArray = __esm({
    "node_modules/lodash-es/_baseIsTypedArray.js"() {
      init_baseGetTag();
      init_isLength();
      init_isObjectLike();
      argsTag2 = "[object Arguments]";
      arrayTag = "[object Array]";
      boolTag = "[object Boolean]";
      dateTag = "[object Date]";
      errorTag = "[object Error]";
      funcTag2 = "[object Function]";
      mapTag = "[object Map]";
      numberTag = "[object Number]";
      objectTag = "[object Object]";
      regexpTag = "[object RegExp]";
      setTag = "[object Set]";
      stringTag = "[object String]";
      weakMapTag = "[object WeakMap]";
      arrayBufferTag = "[object ArrayBuffer]";
      dataViewTag = "[object DataView]";
      float32Tag = "[object Float32Array]";
      float64Tag = "[object Float64Array]";
      int8Tag = "[object Int8Array]";
      int16Tag = "[object Int16Array]";
      int32Tag = "[object Int32Array]";
      uint8Tag = "[object Uint8Array]";
      uint8ClampedTag = "[object Uint8ClampedArray]";
      uint16Tag = "[object Uint16Array]";
      uint32Tag = "[object Uint32Array]";
      typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag2] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag2] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      baseIsTypedArray_default = baseIsTypedArray;
    }
  });

  // node_modules/lodash-es/_baseUnary.js
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }
  var baseUnary_default;
  var init_baseUnary = __esm({
    "node_modules/lodash-es/_baseUnary.js"() {
      baseUnary_default = baseUnary;
    }
  });

  // node_modules/lodash-es/_nodeUtil.js
  var freeExports2, freeModule2, moduleExports2, freeProcess, nodeUtil, nodeUtil_default;
  var init_nodeUtil = __esm({
    "node_modules/lodash-es/_nodeUtil.js"() {
      init_freeGlobal();
      freeExports2 = typeof exports == "object" && exports && !exports.nodeType && exports;
      freeModule2 = freeExports2 && typeof module == "object" && module && !module.nodeType && module;
      moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
      freeProcess = moduleExports2 && freeGlobal_default.process;
      nodeUtil = function() {
        try {
          var types = freeModule2 && freeModule2.require && freeModule2.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      }();
      nodeUtil_default = nodeUtil;
    }
  });

  // node_modules/lodash-es/isTypedArray.js
  var nodeIsTypedArray, isTypedArray, isTypedArray_default;
  var init_isTypedArray = __esm({
    "node_modules/lodash-es/isTypedArray.js"() {
      init_baseIsTypedArray();
      init_baseUnary();
      init_nodeUtil();
      nodeIsTypedArray = nodeUtil_default && nodeUtil_default.isTypedArray;
      isTypedArray = nodeIsTypedArray ? baseUnary_default(nodeIsTypedArray) : baseIsTypedArray_default;
      isTypedArray_default = isTypedArray;
    }
  });

  // node_modules/lodash-es/_arrayLikeKeys.js
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray_default(value), isArg = !isArr && isArguments_default(value), isBuff = !isArr && !isArg && isBuffer_default(value), isType = !isArr && !isArg && !isBuff && isTypedArray_default(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes_default(value.length, String) : [], length = result.length;
    for (var key in value) {
      if ((inherited || hasOwnProperty5.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
      (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
      isIndex_default(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }
  var objectProto7, hasOwnProperty5, arrayLikeKeys_default;
  var init_arrayLikeKeys = __esm({
    "node_modules/lodash-es/_arrayLikeKeys.js"() {
      init_baseTimes();
      init_isArguments();
      init_isArray();
      init_isBuffer();
      init_isIndex();
      init_isTypedArray();
      objectProto7 = Object.prototype;
      hasOwnProperty5 = objectProto7.hasOwnProperty;
      arrayLikeKeys_default = arrayLikeKeys;
    }
  });

  // node_modules/lodash-es/_nativeKeysIn.js
  function nativeKeysIn(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }
  var nativeKeysIn_default;
  var init_nativeKeysIn = __esm({
    "node_modules/lodash-es/_nativeKeysIn.js"() {
      nativeKeysIn_default = nativeKeysIn;
    }
  });

  // node_modules/lodash-es/_baseKeysIn.js
  function baseKeysIn(object) {
    if (!isObject_default(object)) {
      return nativeKeysIn_default(object);
    }
    var isProto = isPrototype_default(object), result = [];
    for (var key in object) {
      if (!(key == "constructor" && (isProto || !hasOwnProperty6.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }
  var objectProto8, hasOwnProperty6, baseKeysIn_default;
  var init_baseKeysIn = __esm({
    "node_modules/lodash-es/_baseKeysIn.js"() {
      init_isObject();
      init_isPrototype();
      init_nativeKeysIn();
      objectProto8 = Object.prototype;
      hasOwnProperty6 = objectProto8.hasOwnProperty;
      baseKeysIn_default = baseKeysIn;
    }
  });

  // node_modules/lodash-es/keysIn.js
  function keysIn(object) {
    return isArrayLike_default(object) ? arrayLikeKeys_default(object, true) : baseKeysIn_default(object);
  }
  var keysIn_default;
  var init_keysIn = __esm({
    "node_modules/lodash-es/keysIn.js"() {
      init_arrayLikeKeys();
      init_baseKeysIn();
      init_isArrayLike();
      keysIn_default = keysIn;
    }
  });

  // node_modules/lodash-es/assignIn.js
  var assignIn, assignIn_default;
  var init_assignIn = __esm({
    "node_modules/lodash-es/assignIn.js"() {
      init_copyObject();
      init_createAssigner();
      init_keysIn();
      assignIn = createAssigner_default(function(object, source) {
        copyObject_default(source, keysIn_default(source), object);
      });
      assignIn_default = assignIn;
    }
  });

  // node_modules/lodash-es/extend.js
  var init_extend = __esm({
    "node_modules/lodash-es/extend.js"() {
      init_assignIn();
    }
  });

  // node_modules/lodash-es/lodash.js
  var init_lodash = __esm({
    "node_modules/lodash-es/lodash.js"() {
      init_extend();
      init_isObject();
    }
  });

  // node_modules/@ckeditor/ckeditor5-utils/src/observablemixin.js
  function initObservable(observable) {
    if (observablePropertiesSymbol in observable) {
      return;
    }
    Object.defineProperty(observable, observablePropertiesSymbol, {
      value: /* @__PURE__ */ new Map()
    });
    Object.defineProperty(observable, boundObservablesSymbol, {
      value: /* @__PURE__ */ new Map()
    });
    Object.defineProperty(observable, boundPropertiesSymbol, {
      value: /* @__PURE__ */ new Map()
    });
  }
  function bindTo(...args) {
    const parsedArgs = parseBindToArgs(...args);
    const bindingsKeys = Array.from(this._bindings.keys());
    const numberOfBindings = bindingsKeys.length;
    if (!parsedArgs.callback && parsedArgs.to.length > 1) {
      throw new CKEditorError("observable-bind-to-no-callback: Binding multiple observables only possible with callback.");
    }
    if (numberOfBindings > 1 && parsedArgs.callback) {
      throw new CKEditorError("observable-bind-to-extra-callback: Cannot bind multiple properties and use a callback in one binding.");
    }
    parsedArgs.to.forEach((to) => {
      if (to.properties.length && to.properties.length !== numberOfBindings) {
        throw new CKEditorError("observable-bind-to-properties-length: The number of properties must match.");
      }
      if (!to.properties.length) {
        to.properties = this._bindProperties;
      }
    });
    this._to = parsedArgs.to;
    if (parsedArgs.callback) {
      this._bindings.get(bindingsKeys[0]).callback = parsedArgs.callback;
    }
    attachBindToListeners(this._observable, this._to);
    updateBindToBound(this);
    this._bindProperties.forEach((propertyName) => {
      updateBoundObservableProperty(this._observable, propertyName);
    });
  }
  function bindToMany(observables, attribute, callback) {
    if (this._bindings.size > 1) {
      throw new CKEditorError("observable-bind-to-many-not-one-binding: Cannot bind multiple properties with toMany().");
    }
    this.to(
      ...getBindingTargets(observables, attribute),
      // ...using given callback to parse attribute values.
      callback
    );
  }
  function getBindingTargets(observables, attribute) {
    const observableAndAttributePairs = observables.map((observable) => [observable, attribute]);
    return Array.prototype.concat.apply([], observableAndAttributePairs);
  }
  function isStringArray(arr) {
    return arr.every((a) => typeof a == "string");
  }
  function parseBindToArgs(...args) {
    if (!args.length) {
      throw new CKEditorError("observable-bind-to-parse-error: Invalid argument syntax in `to()`.");
    }
    const parsed = { to: [] };
    let lastObservable;
    if (typeof args[args.length - 1] == "function") {
      parsed.callback = args.pop();
    }
    args.forEach((a) => {
      if (typeof a == "string") {
        lastObservable.properties.push(a);
      } else if (typeof a == "object") {
        lastObservable = { observable: a, properties: [] };
        parsed.to.push(lastObservable);
      } else {
        throw new CKEditorError("observable-bind-to-parse-error: Invalid argument syntax in `to()`.");
      }
    });
    return parsed;
  }
  function updateBoundObservables(observable, binding, toObservable, toPropertyName) {
    const boundObservables = observable[boundObservablesSymbol];
    const bindingsToObservable = boundObservables.get(toObservable);
    const bindings = bindingsToObservable || {};
    if (!bindings[toPropertyName]) {
      bindings[toPropertyName] = /* @__PURE__ */ new Set();
    }
    bindings[toPropertyName].add(binding);
    if (!bindingsToObservable) {
      boundObservables.set(toObservable, bindings);
    }
  }
  function updateBindToBound(chain) {
    let toProperty;
    chain._bindings.forEach((binding, propertyName) => {
      chain._to.forEach((to) => {
        toProperty = to.properties[binding.callback ? 0 : chain._bindProperties.indexOf(propertyName)];
        binding.to.push([to.observable, toProperty]);
        updateBoundObservables(chain._observable, binding, to.observable, toProperty);
      });
    });
  }
  function updateBoundObservableProperty(observable, propertyName) {
    const boundProperties = observable[boundPropertiesSymbol];
    const binding = boundProperties.get(propertyName);
    let propertyValue;
    if (binding.callback) {
      propertyValue = binding.callback.apply(observable, binding.to.map((to) => to[0][to[1]]));
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
  function attachBindToListeners(observable, toBindings) {
    toBindings.forEach((to) => {
      const boundObservables = observable[boundObservablesSymbol];
      let bindings;
      if (!boundObservables.get(to.observable)) {
        observable.listenTo(to.observable, "change", (evt, propertyName) => {
          bindings = boundObservables.get(to.observable)[propertyName];
          if (bindings) {
            bindings.forEach((binding) => {
              updateBoundObservableProperty(observable, binding.property);
            });
          }
        });
      }
    });
  }
  var observablePropertiesSymbol, boundObservablesSymbol, boundPropertiesSymbol, ObservableMixin, observablemixin_default;
  var init_observablemixin = __esm({
    "node_modules/@ckeditor/ckeditor5-utils/src/observablemixin.js"() {
      init_emittermixin();
      init_ckeditorerror();
      init_lodash();
      observablePropertiesSymbol = Symbol("observableProperties");
      boundObservablesSymbol = Symbol("boundObservables");
      boundPropertiesSymbol = Symbol("boundProperties");
      ObservableMixin = {
        /**
         * @inheritDoc
         */
        set(name, value) {
          if (isObject_default(name)) {
            Object.keys(name).forEach((property) => {
              this.set(property, name[property]);
            }, this);
            return;
          }
          initObservable(this);
          const properties = this[observablePropertiesSymbol];
          if (name in this && !properties.has(name)) {
            throw new CKEditorError("observable-set-cannot-override: Cannot override an existing property.");
          }
          Object.defineProperty(this, name, {
            enumerable: true,
            configurable: true,
            get() {
              return properties.get(name);
            },
            set(value2) {
              const oldValue = properties.get(name);
              let newValue = this.fire("set:" + name, name, value2, oldValue);
              if (newValue === void 0) {
                newValue = value2;
              }
              if (oldValue !== newValue || !properties.has(name)) {
                properties.set(name, newValue);
                this.fire("change:" + name, name, newValue, oldValue);
              }
            }
          });
          this[name] = value;
        },
        /**
         * @inheritDoc
         */
        bind(...bindProperties) {
          if (!bindProperties.length || !isStringArray(bindProperties)) {
            throw new CKEditorError("observable-bind-wrong-properties: All properties must be strings.");
          }
          if (new Set(bindProperties).size !== bindProperties.length) {
            throw new CKEditorError("observable-bind-duplicate-properties: Properties must be unique.");
          }
          initObservable(this);
          const boundProperties = this[boundPropertiesSymbol];
          bindProperties.forEach((propertyName) => {
            if (boundProperties.has(propertyName)) {
              throw new CKEditorError("observable-bind-rebind: Cannot bind the same property more that once.");
            }
          });
          const bindings = /* @__PURE__ */ new Map();
          bindProperties.forEach((a) => {
            const binding = { property: a, to: [] };
            boundProperties.set(a, binding);
            bindings.set(a, binding);
          });
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
        unbind(...unbindProperties) {
          if (!(observablePropertiesSymbol in this)) {
            return;
          }
          const boundProperties = this[boundPropertiesSymbol];
          const boundObservables = this[boundObservablesSymbol];
          if (unbindProperties.length) {
            if (!isStringArray(unbindProperties)) {
              throw new CKEditorError("observable-unbind-wrong-properties: Properties must be strings.");
            }
            unbindProperties.forEach((propertyName) => {
              const binding = boundProperties.get(propertyName);
              if (!binding) {
                return;
              }
              let toObservable, toProperty, toProperties, toPropertyBindings;
              binding.to.forEach((to) => {
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
                  this.stopListening(toObservable, "change");
                }
              });
              boundProperties.delete(propertyName);
            });
          } else {
            boundObservables.forEach((bindings, boundObservable) => {
              this.stopListening(boundObservable, "change");
            });
            boundObservables.clear();
            boundProperties.clear();
          }
        },
        /**
         * @inheritDoc
         */
        decorate(methodName) {
          const originalMethod = this[methodName];
          if (!originalMethod) {
            throw new CKEditorError(
              "observablemixin-cannot-decorate-undefined: Cannot decorate an undefined method.",
              { object: this, methodName }
            );
          }
          this.on(methodName, (evt, args) => {
            evt.return = originalMethod.apply(this, args);
          });
          this[methodName] = function(...args) {
            return this.fire(methodName, args);
          };
        }
      };
      assignIn_default(ObservableMixin, emittermixin_default);
      observablemixin_default = ObservableMixin;
    }
  });

  // node_modules/@ckeditor/ckeditor5-utils/src/mix.js
  function mix(baseClass, ...mixins) {
    mixins.forEach((mixin) => {
      Object.getOwnPropertyNames(mixin).concat(Object.getOwnPropertySymbols(mixin)).forEach((key) => {
        if (key in baseClass.prototype) {
          return;
        }
        const sourceDescriptor = Object.getOwnPropertyDescriptor(mixin, key);
        sourceDescriptor.enumerable = false;
        Object.defineProperty(baseClass.prototype, key, sourceDescriptor);
      });
    });
  }
  var init_mix = __esm({
    "node_modules/@ckeditor/ckeditor5-utils/src/mix.js"() {
    }
  });

  // node_modules/@ckeditor/ckeditor5-core/src/plugin.js
  var Plugin2;
  var init_plugin = __esm({
    "node_modules/@ckeditor/ckeditor5-core/src/plugin.js"() {
      init_observablemixin();
      init_mix();
      Plugin2 = class {
        /**
         * @inheritDoc
         */
        constructor(editor) {
          this.editor = editor;
        }
        /**
         * @inheritDoc
         */
        destroy() {
          this.stopListening();
        }
      };
      mix(Plugin2, observablemixin_default);
    }
  });

  // node_modules/@ckeditor/ckeditor5-core/src/command.js
  function forceDisable(evt) {
    evt.return = false;
    evt.stop();
  }
  var Command;
  var init_command = __esm({
    "node_modules/@ckeditor/ckeditor5-core/src/command.js"() {
      init_observablemixin();
      init_mix();
      Command = class {
        /**
         * Creates a new `Command` instance.
         *
         * @param {module:core/editor/editor~Editor} editor Editor on which this command will be used.
         */
        constructor(editor) {
          this.editor = editor;
          this.set("value", void 0);
          this.set("isEnabled", false);
          this.decorate("execute");
          this.listenTo(this.editor.model.document, "change", () => {
            this.refresh();
          });
          this.on("execute", (evt) => {
            if (!this.isEnabled) {
              evt.stop();
            }
          }, { priority: "high" });
          this.listenTo(editor, "change:isReadOnly", (evt, name, value) => {
            if (value) {
              this.on("set:isEnabled", forceDisable, { priority: "highest" });
              this.isEnabled = false;
            } else {
              this.off("set:isEnabled", forceDisable);
              this.refresh();
            }
          });
        }
        /**
         * Refreshes the command. The command should update its {@link #isEnabled} and {@link #value} properties
         * in this method.
         *
         * This method is automatically called when
         * {@link module:engine/model/document~Document#event:change any changes are applied to the document}.
         */
        refresh() {
          this.isEnabled = true;
        }
        /**
         * Executes the command.
         *
         * A command may accept parameters. They will be passed from {@link module:core/editor/editor~Editor#execute `editor.execute()`}
         * to the command.
         *
         * The `execute()` method will automatically abort when the command is disabled ({@link #isEnabled} is `false`).
         * This behavior is implemented by a high priority listener to the {@link #event:execute} event.
         *
         * In order to see how to disable a command from "outside" see the {@link #isEnabled} documentation.
         *
         * @fires execute
         */
        execute() {
        }
        /**
         * Destroys the command.
         */
        destroy() {
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
      };
      mix(Command, observablemixin_default);
    }
  });

  // node_modules/@ckeditor/ckeditor5-basic-styles/src/attributecommand.js
  var AttributeCommand;
  var init_attributecommand = __esm({
    "node_modules/@ckeditor/ckeditor5-basic-styles/src/attributecommand.js"() {
      init_command();
      AttributeCommand = class extends Command {
        /**
         * @param {module:core/editor/editor~Editor} editor
         * @param {String} attributeKey Attribute that will be set by the command.
         */
        constructor(editor, attributeKey) {
          super(editor);
          this.attributeKey = attributeKey;
        }
        /**
         * Updates the command's {@link #value} and {@link #isEnabled} based on the current selection.
         */
        refresh() {
          const model = this.editor.model;
          const doc = model.document;
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
        execute(options = {}) {
          const model = this.editor.model;
          const doc = model.document;
          const selection = doc.selection;
          const value = options.forceValue === void 0 ? !this.value : options.forceValue;
          model.change((writer) => {
            if (selection.isCollapsed) {
              if (value) {
                writer.setSelectionAttribute(this.attributeKey, true);
              } else {
                writer.removeSelectionAttribute(this.attributeKey);
              }
            } else {
              const ranges = model.schema.getValidRanges(selection.getRanges(), this.attributeKey);
              for (const range of ranges) {
                if (value) {
                  writer.setAttribute(this.attributeKey, value, range);
                } else {
                  writer.removeAttribute(this.attributeKey, range);
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
        _getValueFromFirstAllowedNode() {
          const model = this.editor.model;
          const schema = model.schema;
          const selection = model.document.selection;
          if (selection.isCollapsed) {
            return selection.hasAttribute(this.attributeKey);
          }
          for (const range of selection.getRanges()) {
            for (const item of range.getItems()) {
              if (schema.checkAttribute(item, this.attributeKey)) {
                return item.hasAttribute(this.attributeKey);
              }
            }
          }
          return false;
        }
      };
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/plow-js/index.js
  var require_plow_js = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/plow-js/index.js"(exports2, module2) {
      init_readFromConsumerApi();
      module2.exports = readFromConsumerApi("vendor")().plow;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js
  var require_react = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js"(exports2, module2) {
      init_readFromConsumerApi();
      module2.exports = readFromConsumerApi("vendor")().React;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/prop-types/index.js
  var require_prop_types = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/prop-types/index.js"(exports2, module2) {
      init_readFromConsumerApi();
      module2.exports = readFromConsumerApi("vendor")().PropTypes;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js
  var require_react_ui_components = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js"(exports2, module2) {
      init_readFromConsumerApi();
      module2.exports = readFromConsumerApi("NeosProjectPackages")().ReactUiComponents;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-decorators/index.js
  var require_neos_ui_decorators = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-decorators/index.js"(exports2, module2) {
      init_readFromConsumerApi();
      module2.exports = readFromConsumerApi("NeosProjectPackages")().NeosUiDecorators;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-ckeditor5-bindings/index.js
  var require_neos_ui_ckeditor5_bindings = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-ckeditor5-bindings/index.js"(exports2, module2) {
      init_readFromConsumerApi();
      module2.exports = readFromConsumerApi("NeosProjectPackages")().CkEditorApi;
    }
  });

  // src/ButtonComponent.js
  function ButtonComponent_default(commandName) {
    let FormattingButton = class extends import_react.PureComponent {
      constructor() {
        super(...arguments);
        this.handleClick = () => {
          (0, import_neos_ui_ckeditor5_bindings.executeCommand)(commandName);
        };
      }
      render() {
        const props = {
          onClick: this.handleClick,
          title: this.props.i18nRegistry.translate(this.props.tooltip),
          icon: this.props.icon,
          isActive: this.props.isActive
        };
        return /* @__PURE__ */ import_react.default.createElement(import_react_ui_components.IconButton, { ...props });
      }
    };
    FormattingButton.propTypes = {
      i18nRegistry: import_prop_types.default.object,
      tooltip: import_prop_types.default.string,
      isActive: import_prop_types.default.boolean
    };
    FormattingButton = __decorateClass([
      (0, import_neos_ui_decorators.neos)((globalRegistry) => ({
        i18nRegistry: globalRegistry.get("i18n")
      }))
    ], FormattingButton);
    return FormattingButton;
  }
  var import_react, import_prop_types, import_react_ui_components, import_neos_ui_decorators, import_neos_ui_ckeditor5_bindings;
  var init_ButtonComponent = __esm({
    "src/ButtonComponent.js"() {
      import_react = __toESM(require_react());
      import_prop_types = __toESM(require_prop_types());
      import_react_ui_components = __toESM(require_react_ui_components());
      import_neos_ui_decorators = __toESM(require_neos_ui_decorators());
      import_neos_ui_ckeditor5_bindings = __toESM(require_neos_ui_ckeditor5_bindings());
    }
  });

  // src/CkeditorPluginUtils.js
  var import_plow_js, getCkeditorPlugin, getCkeditorPluginConfig, getRichtextToolbarConfig, getSelectToolbarConfig;
  var init_CkeditorPluginUtils = __esm({
    "src/CkeditorPluginUtils.js"() {
      init_plugin();
      init_attributecommand();
      import_plow_js = __toESM(require_plow_js());
      init_ButtonComponent();
      getCkeditorPlugin = function(extensionName, commandName, formatting) {
        const attributeName = extensionName + "Attribute";
        return class extends Plugin2 {
          static get pluginName() {
            return extensionName;
          }
          init() {
            const config = {
              model: attributeName,
              view: {
                name: formatting.tag,
                classes: formatting.classes,
                styles: formatting.styles
              }
            };
            this.editor.model.schema.extend("$text", { allowAttributes: attributeName });
            this.editor.conversion.attributeToElement(config);
            this.editor.commands.add(commandName, new AttributeCommand(this.editor, attributeName));
          }
        };
      };
      getCkeditorPluginConfig = function(formattingName, ckeditorPlugin) {
        return (ckEditorConfiguration, options) => {
          if ((0, import_plow_js.$get)(["formatting", formattingName], options.editorOptions)) {
            ckEditorConfiguration.plugins = ckEditorConfiguration.plugins || [];
            return (0, import_plow_js.$add)(
              "plugins",
              ckeditorPlugin,
              ckEditorConfiguration
            );
          }
          return ckEditorConfiguration;
        };
      };
      getRichtextToolbarConfig = function(commandName, formattingName, icon, tooltip) {
        return {
          commandName,
          isActive: (0, import_plow_js.$get)(commandName),
          isVisible: (0, import_plow_js.$get)(["formatting", formattingName]),
          component: ButtonComponent_default(commandName),
          icon,
          tooltip
        };
      };
      getSelectToolbarConfig = function(formattingName, label) {
        return {
          commandName: "heading",
          commandArgs: [{
            value: formattingName
          }],
          label,
          isActive: (formattingUnderCursor) => (0, import_plow_js.$get)("heading", formattingUnderCursor) === formattingName,
          isVisible: (0, import_plow_js.$get)(["formatting", formattingName])
        };
      };
    }
  });

  // src/manifest.js
  var manifest_exports = {};
  var init_manifest2 = __esm({
    "src/manifest.js"() {
      init_dist();
      init_AllowAttributesPlugin();
      init_CkeditorPluginUtils();
      dist_default("Breadlesscode.SimpleEditorExtend:UiPlugin", {}, (globalRegistry, { frontendConfiguration }) => {
        const ckEditor = globalRegistry.get("ckEditor5");
        const richtextToolbar = ckEditor.get("richtextToolbar");
        const ckEditorConfig = ckEditor.get("config");
        const buttonConfig = frontendConfiguration["Breadlesscode.SimpleEditorExtend:Buttons"];
        const selectConfig = frontendConfiguration["Breadlesscode.SimpleEditorExtend:HeadingSelect"];
        if (buttonConfig && buttonConfig.constructor === Object && Object.entries(buttonConfig).length !== 0) {
          Object.keys(buttonConfig).forEach((formattingName) => {
            const options = buttonConfig[formattingName];
            const commandName = options.extensionName + "Command";
            richtextToolbar.set(
              options.extensionName,
              getRichtextToolbarConfig(commandName, formattingName, options.icon, options.tooltip),
              options.position
            );
            ckEditorConfig.set(
              options.extensionName,
              getCkeditorPluginConfig(
                formattingName,
                getCkeditorPlugin(options.extensionName, commandName, options.formatting)
              )
            );
          });
        }
        if (selectConfig && selectConfig.constructor === Object && Object.entries(selectConfig).length !== 0) {
          const configureHeadings = ckEditorConfig.get("configureHeadings");
          const headingOptions = [];
          Object.keys(selectConfig).forEach((formattingName) => {
            const options = selectConfig[formattingName];
            richtextToolbar.set(
              "style/" + formattingName,
              getSelectToolbarConfig(formattingName, options.extensionName),
              options.position
            );
            headingOptions.push({
              model: formattingName,
              view: {
                name: options.formatting.tag,
                classes: options.formatting.classes,
                styles: options.formatting.styles
              }
            });
          });
          ckEditorConfig.set("configureHeadings", (config) => {
            if (!Array.isArray(config?.heading?.options)) {
              config = configureHeadings(config);
            }
            config.heading.options = config.heading.options.concat(headingOptions);
            config.plugins = config.plugins || [];
            config.plugins.push(AllowAttributesPlugin_default(selectConfig));
            return config;
          });
        }
      });
    }
  });

  // src/index.js
  init_manifest2();
})();
/*! Bundled license information:

@ckeditor/ckeditor5-utils/src/spy.js:
  (**
   * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md.
   *)

@ckeditor/ckeditor5-utils/src/eventinfo.js:
  (**
   * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md.
   *)

@ckeditor/ckeditor5-utils/src/uid.js:
  (**
   * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md.
   *)

@ckeditor/ckeditor5-utils/src/priorities.js:
  (**
   * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md.
   *)

@ckeditor/ckeditor5-utils/src/emittermixin.js:
  (**
   * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md.
   *)

@ckeditor/ckeditor5-utils/src/ckeditorerror.js:
  (**
   * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md.
   *)

lodash-es/lodash.js:
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)

@ckeditor/ckeditor5-utils/src/observablemixin.js:
  (**
   * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md.
   *)

@ckeditor/ckeditor5-utils/src/mix.js:
  (**
   * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md.
   *)

@ckeditor/ckeditor5-core/src/plugin.js:
  (**
   * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md.
   *)

@ckeditor/ckeditor5-core/src/command.js:
  (**
   * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md.
   *)

@ckeditor/ckeditor5-basic-styles/src/attributecommand.js:
  (**
   * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md.
   *)
*/
