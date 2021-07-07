/*
* picasso-plugin-q v1.1.0
* Copyright (c) 2021 QlikTech International AB
* Released under the MIT license.
*/


(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.picassoQ = factory());
}(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var hasOwn = Object.prototype.hasOwnProperty;
  var toStr = Object.prototype.toString;
  var defineProperty = Object.defineProperty;
  var gOPD = Object.getOwnPropertyDescriptor;

  var isArray = function isArray(arr) {
  	if (typeof Array.isArray === 'function') {
  		return Array.isArray(arr);
  	}

  	return toStr.call(arr) === '[object Array]';
  };

  var isPlainObject = function isPlainObject(obj) {
  	if (!obj || toStr.call(obj) !== '[object Object]') {
  		return false;
  	}

  	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
  	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
  	// Not own constructor property must be Object
  	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
  		return false;
  	}

  	// Own properties are enumerated firstly, so to speed up,
  	// if last one is own, then all properties are own.
  	var key;
  	for (key in obj) { /**/ }

  	return typeof key === 'undefined' || hasOwn.call(obj, key);
  };

  // If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
  var setProperty = function setProperty(target, options) {
  	if (defineProperty && options.name === '__proto__') {
  		defineProperty(target, options.name, {
  			enumerable: true,
  			configurable: true,
  			value: options.newValue,
  			writable: true
  		});
  	} else {
  		target[options.name] = options.newValue;
  	}
  };

  // Return undefined instead of __proto__ if '__proto__' is not an own property
  var getProperty = function getProperty(obj, name) {
  	if (name === '__proto__') {
  		if (!hasOwn.call(obj, name)) {
  			return void 0;
  		} else if (gOPD) {
  			// In early versions of node, obj['__proto__'] is buggy when obj has
  			// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
  			return gOPD(obj, name).value;
  		}
  	}

  	return obj[name];
  };

  var extend = function extend() {
  	var options, name, src, copy, copyIsArray, clone;
  	var target = arguments[0];
  	var i = 1;
  	var length = arguments.length;
  	var deep = false;

  	// Handle a deep copy situation
  	if (typeof target === 'boolean') {
  		deep = target;
  		target = arguments[1] || {};
  		// skip the boolean and the target
  		i = 2;
  	}
  	if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
  		target = {};
  	}

  	for (; i < length; ++i) {
  		options = arguments[i];
  		// Only deal with non-null/undefined values
  		if (options != null) {
  			// Extend the base object
  			for (name in options) {
  				src = getProperty(target, name);
  				copy = getProperty(options, name);

  				// Prevent never-ending loop
  				if (target !== copy) {
  					// Recurse if we're merging plain objects or arrays
  					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
  						if (copyIsArray) {
  							copyIsArray = false;
  							clone = src && isArray(src) ? src : [];
  						} else {
  							clone = src && isPlainObject(src) ? src : {};
  						}

  						// Never move original objects, clone them
  						setProperty(target, { name: name, newValue: extend(deep, clone, copy) });

  					// Don't bring in undefined values
  					} else if (typeof copy !== 'undefined') {
  						setProperty(target, { name: name, newValue: copy });
  					}
  				}
  			}
  		}
  	}

  	// Return the modified object
  	return target;
  };

  function getFieldAccessor$1(field, page, deps) {
    if (!field) {
      return -1;
    }

    var cache = deps.cache;
    var origin = field.origin ? field.origin() : null;

    if (origin) {
      field = origin;
    }

    var fieldIdx = cache.fields.indexOf(field);
    var attrIdx = -1;
    var attrDimIdx = -1;

    if (fieldIdx === -1) {
      for (var i = 0; i < cache.wrappedFields.length; i++) {
        attrDimIdx = cache.wrappedFields[i].attrDims.map(function (v) {
          return v.instance;
        }).indexOf(field);
        attrIdx = cache.wrappedFields[i].attrExps.map(function (v) {
          return v.instance;
        }).indexOf(field);

        if (attrDimIdx !== -1 || attrIdx !== -1) {
          fieldIdx = i;
          break;
        }
      }
    }

    fieldIdx -= page.qArea.qLeft;

    if (fieldIdx < 0 || fieldIdx >= page.qArea.qWidth) {
      // throw new Error('Field out of range');
      return -1;
    }

    if (attrDimIdx >= 0) {
      return function (row) {
        return row[fieldIdx].qAttrDims.qValues[attrDimIdx];
      };
    }

    if (attrIdx >= 0) {
      return function (row) {
        return row[fieldIdx].qAttrExps.qValues[attrIdx];
      };
    }

    return function (row) {
      return row[fieldIdx];
    };
  } // TODO - handle 'other' value
  // const specialTextValues = {
  //   '-3': (meta) => {
  //     if ('othersLabel' in meta) {
  //       return meta.othersLabel;
  //     }
  //     return '';
  //   }
  // };

  function datumExtract$1(propCfg, cell, _ref) {
    var key = _ref.key;
    var datum = {
      value: typeof propCfg.value === 'function' ? propCfg.value(cell) : typeof propCfg.value !== 'undefined' ? propCfg.value : cell // eslint-disable-line no-nested-ternary

    };
    datum.label = typeof propCfg.label === 'function' ? propCfg.label(cell) : typeof propCfg.label !== 'undefined' ? String(propCfg.label) : String(datum.value); // eslint-disable-line no-nested-ternary

    if (propCfg.field) {
      datum.source = {
        key: key,
        field: propCfg.field.key()
      };
    }

    return datum;
  }

  function cellToValue(_ref2) {
    var cache = _ref2.cache,
        f = _ref2.f,
        mainCell = _ref2.mainCell,
        p = _ref2.p;
        _ref2.prop;
        var page = _ref2.page,
        rowIdx = _ref2.rowIdx,
        row = _ref2.row,
        sourceKey = _ref2.sourceKey,
        target = _ref2.target,
        targetProp = _ref2.targetProp;
    var propCell = mainCell;

    if (p.field && p.field !== f) {
      var propCellFn = getFieldAccessor$1(p.field, page, {
        cache: cache
      });

      if (propCellFn === -1) {
        return;
      }

      propCell = extend({
        qRow: rowIdx
      }, propCellFn(row));
    }

    target[targetProp] = datumExtract$1(p, propCell, {
      key: sourceKey
    });
  }

  function extract$1(config, dataset, cache, util) {
    var cfgs = Array.isArray(config) ? config : [config];
    var dataItems = [];

    for (var i = 0; i < cfgs.length; i++) {
      if (typeof cfgs[i].field !== 'undefined') {
        var cube = dataset.raw();
        var sourceKey = dataset.key();
        var f = _typeof(cfgs[i].field) === 'object' ? cfgs[i].field : dataset.field(cfgs[i].field);

        var _util$normalizeConfig = util.normalizeConfig(cfgs[i], dataset),
            props = _util$normalizeConfig.props,
            main = _util$normalizeConfig.main;

        var propsArr = Object.keys(props);
        var track = !!cfgs[i].trackBy;

        var trackType = _typeof(cfgs[i].trackBy);

        var tracker = {};
        var trackedItems = [];
        var items = [];

        for (var j = 0; j < cube.qDataPages.length; j++) {
          var fn = getFieldAccessor$1(f, cube.qDataPages[j], {
            cache: cache
          });

          if (fn === -1) {
            continue;
          }

          for (var k = 0; k < cube.qDataPages[j].qMatrix.length; k++) {
            var rowIdx = cube.qDataPages[j].qArea.qTop + k;
            var mainCell = extend({
              qRow: rowIdx
            }, fn(cube.qDataPages[j].qMatrix[k]));
            var ret = datumExtract$1(main, mainCell, {
              key: sourceKey
            });
            var exclude = main.filter && !main.filter(mainCell);

            if (exclude) {
              continue;
            }

            for (var l = 0; l < propsArr.length; l++) {
              var p = props[propsArr[l]];
              var arr = p.fields || [p];

              if (p.fields) {
                ret[propsArr[l]] = [];
              } // loop through all props that need to be mapped and
              // assign 'value' and 'source' to each property


              for (var m = 0; m < arr.length; m++) {
                cellToValue({
                  cache: cache,
                  f: f,
                  mainCell: mainCell,
                  p: arr[m],
                  prop: propsArr[l],
                  props: props,
                  page: cube.qDataPages[j],
                  rowIdx: rowIdx,
                  row: cube.qDataPages[j].qMatrix[k],
                  sourceKey: sourceKey,
                  target: p.fields ? ret[propsArr[l]] : ret,
                  targetProp: p.fields ? m : propsArr[l]
                });
              }

              if (p.fields) {
                var fieldValues = ret[propsArr[l]].map(function (v) {
                  return v.value;
                });
                var fieldLabels = ret[propsArr[l]].map(function (v) {
                  return v.label;
                });
                ret[propsArr[l]] = {
                  value: typeof p.value === 'function' ? p.value(fieldValues) : typeof p.value !== 'undefined' ? p.value : fieldValues,
                  label: typeof p.label === 'function' ? p.label(fieldLabels) : typeof p.label !== 'undefined' ? String(p.label) : String(ret[propsArr[l]].value)
                };
              }
            } // collect items based on the trackBy value
            // items with the same trackBy value are placed in an array and reduced later


            if (track) {
              util.track({
                cfg: cfgs[i],
                itemData: mainCell,
                obj: ret,
                target: trackedItems,
                tracker: tracker,
                trackType: trackType
              });
            }

            items.push(ret);
          }
        } // reduce if items have been grouped


        if (track) {
          dataItems.push.apply(dataItems, _toConsumableArray(util.collect(trackedItems, {
            main: main,
            propsArr: propsArr,
            props: props
          })));
        } else {
          dataItems.push.apply(dataItems, items);
        }
      }
    }

    return dataItems;
  }

  function count(node) {
    var sum = 0,
        children = node.children,
        i = children && children.length;
    if (!i) sum = 1;
    else while (--i >= 0) sum += children[i].value;
    node.value = sum;
  }

  function node_count() {
    return this.eachAfter(count);
  }

  function node_each(callback) {
    var node = this, current, next = [node], children, i, n;
    do {
      current = next.reverse(), next = [];
      while (node = current.pop()) {
        callback(node), children = node.children;
        if (children) for (i = 0, n = children.length; i < n; ++i) {
          next.push(children[i]);
        }
      }
    } while (next.length);
    return this;
  }

  function node_eachBefore(callback) {
    var node = this, nodes = [node], children, i;
    while (node = nodes.pop()) {
      callback(node), children = node.children;
      if (children) for (i = children.length - 1; i >= 0; --i) {
        nodes.push(children[i]);
      }
    }
    return this;
  }

  function node_eachAfter(callback) {
    var node = this, nodes = [node], next = [], children, i, n;
    while (node = nodes.pop()) {
      next.push(node), children = node.children;
      if (children) for (i = 0, n = children.length; i < n; ++i) {
        nodes.push(children[i]);
      }
    }
    while (node = next.pop()) {
      callback(node);
    }
    return this;
  }

  function node_sum(value) {
    return this.eachAfter(function(node) {
      var sum = +value(node.data) || 0,
          children = node.children,
          i = children && children.length;
      while (--i >= 0) sum += children[i].value;
      node.value = sum;
    });
  }

  function node_sort(compare) {
    return this.eachBefore(function(node) {
      if (node.children) {
        node.children.sort(compare);
      }
    });
  }

  function node_path(end) {
    var start = this,
        ancestor = leastCommonAncestor(start, end),
        nodes = [start];
    while (start !== ancestor) {
      start = start.parent;
      nodes.push(start);
    }
    var k = nodes.length;
    while (end !== ancestor) {
      nodes.splice(k, 0, end);
      end = end.parent;
    }
    return nodes;
  }

  function leastCommonAncestor(a, b) {
    if (a === b) return a;
    var aNodes = a.ancestors(),
        bNodes = b.ancestors(),
        c = null;
    a = aNodes.pop();
    b = bNodes.pop();
    while (a === b) {
      c = a;
      a = aNodes.pop();
      b = bNodes.pop();
    }
    return c;
  }

  function node_ancestors() {
    var node = this, nodes = [node];
    while (node = node.parent) {
      nodes.push(node);
    }
    return nodes;
  }

  function node_descendants() {
    var nodes = [];
    this.each(function(node) {
      nodes.push(node);
    });
    return nodes;
  }

  function node_leaves() {
    var leaves = [];
    this.eachBefore(function(node) {
      if (!node.children) {
        leaves.push(node);
      }
    });
    return leaves;
  }

  function node_links() {
    var root = this, links = [];
    root.each(function(node) {
      if (node !== root) { // Don’t include the root’s parent, if any.
        links.push({source: node.parent, target: node});
      }
    });
    return links;
  }

  function hierarchy(data, children) {
    var root = new Node(data),
        valued = +data.value && (root.value = data.value),
        node,
        nodes = [root],
        child,
        childs,
        i,
        n;

    if (children == null) children = defaultChildren;

    while (node = nodes.pop()) {
      if (valued) node.value = +node.data.value;
      if ((childs = children(node.data)) && (n = childs.length)) {
        node.children = new Array(n);
        for (i = n - 1; i >= 0; --i) {
          nodes.push(child = node.children[i] = new Node(childs[i]));
          child.parent = node;
          child.depth = node.depth + 1;
        }
      }
    }

    return root.eachBefore(computeHeight);
  }

  function node_copy() {
    return hierarchy(this).eachBefore(copyData);
  }

  function defaultChildren(d) {
    return d.children;
  }

  function copyData(node) {
    node.data = node.data.data;
  }

  function computeHeight(node) {
    var height = 0;
    do node.height = height;
    while ((node = node.parent) && (node.height < ++height));
  }

  function Node(data) {
    this.data = data;
    this.depth =
    this.height = 0;
    this.parent = null;
  }

  Node.prototype = hierarchy.prototype = {
    constructor: Node,
    count: node_count,
    each: node_each,
    eachAfter: node_eachAfter,
    eachBefore: node_eachBefore,
    sum: node_sum,
    sort: node_sort,
    path: node_path,
    ancestors: node_ancestors,
    descendants: node_descendants,
    leaves: node_leaves,
    links: node_links,
    copy: node_copy
  };

  function required(f) {
    if (typeof f !== "function") throw new Error;
    return f;
  }

  var keyPrefix = "$", // Protect against keys like “__proto__”.
      preroot = {depth: -1},
      ambiguous = {};

  function defaultId(d) {
    return d.id;
  }

  function defaultParentId(d) {
    return d.parentId;
  }

  function stratify() {
    var id = defaultId,
        parentId = defaultParentId;

    function stratify(data) {
      var d,
          i,
          n = data.length,
          root,
          parent,
          node,
          nodes = new Array(n),
          nodeId,
          nodeKey,
          nodeByKey = {};

      for (i = 0; i < n; ++i) {
        d = data[i], node = nodes[i] = new Node(d);
        if ((nodeId = id(d, i, data)) != null && (nodeId += "")) {
          nodeKey = keyPrefix + (node.id = nodeId);
          nodeByKey[nodeKey] = nodeKey in nodeByKey ? ambiguous : node;
        }
      }

      for (i = 0; i < n; ++i) {
        node = nodes[i], nodeId = parentId(data[i], i, data);
        if (nodeId == null || !(nodeId += "")) {
          if (root) throw new Error("multiple roots");
          root = node;
        } else {
          parent = nodeByKey[keyPrefix + nodeId];
          if (!parent) throw new Error("missing: " + nodeId);
          if (parent === ambiguous) throw new Error("ambiguous: " + nodeId);
          if (parent.children) parent.children.push(node);
          else parent.children = [node];
          node.parent = parent;
        }
      }

      if (!root) throw new Error("no root");
      root.parent = preroot;
      root.eachBefore(function(node) { node.depth = node.parent.depth + 1; --n; }).eachBefore(computeHeight);
      root.parent = null;
      if (n > 0) throw new Error("cycle");

      return root;
    }

    stratify.id = function(x) {
      return arguments.length ? (id = required(x), stratify) : id;
    };

    stratify.parentId = function(x) {
      return arguments.length ? (parentId = required(x), stratify) : parentId;
    };

    return stratify;
  }

  /**
   * Resolves the value at the given JSON path
   * @private
   * @param  {String} path [description]
   * @param  {Object} obj  [description]
   * @return {Object}      [description]
   *
   * @example
   * let path = "/path/to/paradise";
   * let obj = {
   *   path: {
   *     to: { paradise: "heaven"},
   *     from: {...}
   *   }
   * };
   * resolve( path, obj ); // "heaven"
   */
  function resolve(path, obj) {
    if (path.charAt(0) === '/') {
      path = path.substring(1);
    }

    var arr = path.split('/');
    var subpath;
    var container = obj;

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === '*' && Array.isArray(container)) {
        var carr = [];
        subpath = arr.slice(i + 1).join('/');

        for (var c = 0; c < container.length; c++) {
          var v = resolve(subpath, container[c]); // v.forEach(_ => _._parent = container[c]);

          if (Array.isArray(v)) {
            carr.push.apply(carr, _toConsumableArray(v));
          } else {
            carr.push(v);
          }
        }

        return carr; // return container.map(v => resolve(arr.slice(i + 1).join('/'), v));
      }

      if (!arr[i] && Array.isArray(container)) {
        var _carr = new Array(container.length);

        subpath = arr.slice(i + 1).join('/');

        for (var _c = 0; _c < container.length; _c++) {
          _carr[_c] = resolve(subpath, container[_c]);
        }

        return _carr; // return container.map(v => resolve(arr.slice(i + 1).join('/'), v));
      }

      if (arr[i] in container) {
        container = container[arr[i]];
      }
    }

    return container;
  }

  function flattenTree(children, steps, arrIndexAtTargetDepth) {
    var arr = [];

    if (!children || !children.length) {
      return arr;
    }

    if (steps <= 0) {
      var nodes = arrIndexAtTargetDepth >= 0 ? [children[arrIndexAtTargetDepth]] : children;
      arr.push.apply(arr, _toConsumableArray(nodes));
    } else {
      for (var i = 0; i < children.length; i++) {
        if (children[i].children && children[i].children.length) {
          arr.push.apply(arr, _toConsumableArray(flattenTree(children[i].children, steps - 1, arrIndexAtTargetDepth)));
        }
      }
    }

    return arr;
  }

  function treeAccessor(sourceDepth, targetDepth, arrIndexAtTargetDepth) {
    if (sourceDepth === targetDepth) {
      return function (d) {
        return d;
      };
    }

    if (sourceDepth > targetDepth) {
      // traverse upwards
      var steps = Math.max(0, Math.min(100, sourceDepth - targetDepth));

      var path = _toConsumableArray(Array(steps)).map(String.prototype.valueOf, 'parent').join('.');

      return Function('node', "return node.".concat(path, ";")); // eslint-disable-line no-new-func
    }

    if (targetDepth > sourceDepth) {
      // flatten descendants
      var _steps = Math.max(0, Math.min(100, targetDepth - sourceDepth));

      return function (node) {
        return flattenTree(node.children, _steps - 1, arrIndexAtTargetDepth);
      };
    }

    return false;
  }
  function findField(query, _ref) {
    var cache = _ref.cache;

    if (typeof query === 'number') {
      return cache.fields[query];
    }

    var allFields = cache.allFields;

    if (typeof query === 'function') {
      for (var i = 0; i < allFields.length; i++) {
        if (query(allFields[i])) {
          return allFields[i];
        }
      }

      return false;
    }

    if (typeof query === 'string') {
      for (var _i = 0; _i < allFields.length; _i++) {
        if (allFields[_i].key() === query || allFields[_i].title() === query) {
          return allFields[_i];
        }
      }
    } else if (query && allFields.indexOf(query) !== -1) {
      // assume 'query' is a field instance
      return query;
    }

    throw Error("Field not found: ".concat(query));
  }

  var DIM_RX$1 = /^qDimensionInfo(?:\/(\d+))?/;
  var M_RX$1 = /^\/?qMeasureInfo\/(\d+)/;
  var ATTR_EXPR_RX$1 = /\/qAttrExprInfo\/(\d+)/;
  var ATTR_DIM_RX$1 = /\/qAttrDimInfo\/(\d+)/;

  function getColumnOrder(dataset) {
    var qColumnOrder = dataset.raw().qColumnOrder;
    var fields = dataset.fields();
    return qColumnOrder && qColumnOrder.length === fields.length ? qColumnOrder : fields.map(function (f, i) {
      return i;
    });
  }

  function getDimensionColumnOrder(cube) {
    var order = cube.qColumnOrder && cube.qColumnOrder.length ? cube.qColumnOrder : cube.qDimensionInfo.map(function (d, ii) {
      return ii;
    });
    return order.filter(function (ii) {
      return ii < cube.qDimensionInfo.length;
    });
  }

  function getFieldDepth(field, _ref) {
    var cube = _ref.cube;

    if (!field) {
      return -1;
    }

    var key = field.origin && field.origin() ? field.origin().key() : field.key();
    var isFieldDimension = false;
    var fieldIdx = -1; // cache.fields.indexOf(field);

    var attrIdx = -1;
    var attrDimIdx = -1;
    var fieldDepth = -1;
    var pseudoMeasureIndex = -1;
    var measureIdx = -1;
    var remainder = key;
    var treeOrder = cube.qEffectiveInterColumnSortOrder;
    var columnOrder = getDimensionColumnOrder(cube);

    if (DIM_RX$1.test(remainder)) {
      isFieldDimension = true;
      fieldIdx = +DIM_RX$1.exec(remainder)[1];
      remainder = key.replace(DIM_RX$1, '');
    }

    if (M_RX$1.test(remainder)) {
      if (cube.qMode === 'K') {
        pseudoMeasureIndex = +M_RX$1.exec(remainder)[1];
      } else if (treeOrder && treeOrder.indexOf(-1) !== -1) {
        pseudoMeasureIndex = +M_RX$1.exec(remainder)[1];
        measureIdx = 0;
      } else {
        measureIdx = +M_RX$1.exec(remainder)[1];
      }

      remainder = remainder.replace(M_RX$1, '');
    }

    if (remainder) {
      if (ATTR_DIM_RX$1.exec(remainder)) {
        attrDimIdx = +ATTR_DIM_RX$1.exec(remainder)[1];
      } else if (ATTR_EXPR_RX$1.exec(remainder)) {
        attrIdx = +ATTR_EXPR_RX$1.exec(remainder)[1];
      }
    }

    if (isFieldDimension) {
      if (cube.qMode === 'S') {
        fieldDepth = columnOrder[fieldIdx];
      } else {
        fieldDepth = treeOrder ? treeOrder.indexOf(fieldIdx) : fieldIdx;
      }
    } else if (treeOrder && treeOrder.indexOf(-1) !== -1) {
      // if pseudo dimension exists in sort order
      fieldDepth = treeOrder.indexOf(-1); // depth of pesudodimension
    } else {
      // assume measure is at the bottom of the tree
      fieldDepth = cube.qDimensionInfo.length - (cube.qMode === 'K' ? 0 : 1);
    }

    return {
      fieldDepth: fieldDepth + 1,
      // +1 due to root node
      pseudoMeasureIndex: pseudoMeasureIndex,
      measureIdx: measureIdx,
      attrDimIdx: attrDimIdx,
      attrIdx: attrIdx
    };
  }

  function getFieldAccessor(sourceDepthObject, targetDepthObject) {
    var nodeFn = treeAccessor(sourceDepthObject.fieldDepth, targetDepthObject.fieldDepth, targetDepthObject.pseudoMeasureIndex);
    var valueFn;

    if (targetDepthObject.measureIdx >= 0) {
      valueFn = function valueFn(node) {
        return node.data.qValues[targetDepthObject.measureIdx];
      };
    } else {
      valueFn = function valueFn(node) {
        return node.data;
      };
    }

    var attrFn;

    if (targetDepthObject.attrDimIdx >= 0) {
      attrFn = function attrFn(data) {
        var _data$qAttrDims;

        return data === null || data === void 0 ? void 0 : (_data$qAttrDims = data.qAttrDims) === null || _data$qAttrDims === void 0 ? void 0 : _data$qAttrDims.qValues[targetDepthObject.attrDimIdx];
      };
    } else if (targetDepthObject.attrIdx >= 0) {
      attrFn = function attrFn(data) {
        var _data$qAttrExps;

        return data === null || data === void 0 ? void 0 : (_data$qAttrExps = data.qAttrExps) === null || _data$qAttrExps === void 0 ? void 0 : _data$qAttrExps.qValues[targetDepthObject.attrIdx];
      };
    }

    return {
      nodeFn: nodeFn,
      attrFn: attrFn,
      valueFn: valueFn
    };
  }

  function datumExtract(propCfg, cell, _ref2) {
    var key = _ref2.key;
    var datum = {
      value: typeof propCfg.value === 'function' ? propCfg.value(cell) : typeof propCfg.value !== 'undefined' ? propCfg.value : cell // eslint-disable-line no-nested-ternary

    };
    datum.label = typeof propCfg.label === 'function' ? propCfg.label(cell) : typeof propCfg.label !== 'undefined' ? String(propCfg.label) : String(datum.value); // eslint-disable-line no-nested-ternary

    if (propCfg.field) {
      datum.source = {
        key: key,
        field: propCfg.field.key()
      };
    }

    return datum;
  }

  function doIt(_ref3) {
    var propsArr = _ref3.propsArr,
        props = _ref3.props,
        item = _ref3.item,
        itemData = _ref3.itemData,
        ret = _ref3.ret,
        sourceKey = _ref3.sourceKey;

    for (var i = 0; i < propsArr.length; i++) {
      var pCfg = props[propsArr[i]];
      var arr = pCfg.fields || [pCfg];
      var coll = void 0;
      var collStr = void 0;

      if (pCfg.fields) {
        coll = [];
        collStr = [];
      }

      var _loop = function _loop(j) {
        var p = arr[j];
        var fn = void 0;
        var str = void 0;
        var value = void 0;
        var nodes = void 0;
        var cells = void 0;
        var label = void 0;

        if (p.type === 'primitive') {
          value = p.value;
          label = String(p.value);
        } else {
          if (typeof p.value === 'function') {
            fn = function fn(v) {
              return p.value(v, item);
            };
          }

          if (typeof p.label === 'function') {
            str = function str(v) {
              return p.label(v, item);
            };
          }

          if (p.accessor) {
            nodes = p.accessor(item);

            if (Array.isArray(nodes)) {
              // propably descendants
              cells = nodes.map(p.valueAccessor);

              if (p.attrAccessor) {
                cells = cells.map(p.attrAccessor);
              }

              if (fn) {
                value = cells.map(fn);
                fn = null;
              }

              if (str) {
                label = cells.map(str);
                str = null;
              }

              value = p.reduce ? p.reduce(value) : value;
              label = p.reduceLabel ? p.reduceLabel(label, value) : String(value);
            } else {
              value = p.attrAccessor ? p.attrAccessor(p.valueAccessor(nodes)) : p.valueAccessor(nodes);
              label = value;
            }
          } else {
            value = itemData;
            label = itemData;
          }
        }

        if (pCfg.fields) {
          var v = fn ? fn(value) : value;
          coll.push(v);
          collStr.push(str && label != null ? str(label) : label != null ? label : String(v));
        } else {
          var _v = fn ? fn(value) : value;

          ret[propsArr[i]] = {
            value: _v,
            label: str ? str(label) : label != null ? label : String(_v)
          };

          if (p.field) {
            ret[propsArr[i]].source = {
              field: p.field.key(),
              key: sourceKey
            };
          }
        }
      };

      for (var j = 0; j < arr.length; j++) {
        _loop(j);
      }

      if (coll) {
        ret[propsArr[i]] = {
          value: typeof pCfg.value === 'function' ? pCfg.value(coll, item) : coll,
          label: typeof pCfg.label === 'function' ? pCfg.label(collStr, item) : collStr
        };
      }
    }
  }

  var getHierarchy = function getHierarchy(cube, cache, config) {
    var rootPath = cube.qMode === 'K' ? '/qStackedDataPages/*/qData' : '/qTreeDataPages/*';
    var childNodes = cube.qMode === 'K' ? 'qSubNodes' : 'qNodes';
    var root = resolve(rootPath, cube);

    if (!root || !root[0]) {
      return null;
    }

    cache.tree = hierarchy(root[0], config.children || function (node) {
      return node[childNodes];
    });
    return cache.tree;
  };

  function getHierarchyForSMode(dataset) {
    var matrix = dataset.raw().qDataPages.length ? dataset.raw().qDataPages[0].qMatrix : [];
    var order = getColumnOrder(dataset);
    var fields = dataset.fields();
    var dimensions = dataset.fields().filter(function (f) {
      return f.type() === 'dimension';
    }).map(function (f) {
      return order.indexOf(fields.indexOf(f));
    });
    var measures = dataset.fields().filter(function (f) {
      return f.type() === 'measure';
    }).map(function (f) {
      return order.indexOf(fields.indexOf(f));
    });
    var root = {
      __id: '__root',
      qValues: []
    };
    var keys = {
      __root: root
    };

    for (var r = 0; r < matrix.length; r++) {
      var row = matrix[r];
      var id = '__root'; // let parent = root;

      var isNew = false;

      for (var c = 0; c < dimensions.length; c++) {
        var cell = row[dimensions[c]];
        var key = "".concat(id, "__").concat(cell.qText);

        if (!keys[key]) {
          keys[key] = _objectSpread2({
            __id: key,
            __parent: id,
            qValues: []
          }, cell);
          isNew = true;
        }

        id = key;
      }

      if (isNew) {
        for (var _c = 0; _c < measures.length; _c++) {
          var _cell = row[measures[_c]];
          keys[id].qValues.push(_cell);
        }
      }
    }

    var nodes = Object.keys(keys).map(function (key) {
      return keys[key];
    });
    var h = stratify().id(function (d) {
      return d.__id;
    }).parentId(function (d) {
      return d.__parent;
    })(nodes);
    return h;
  }

  var attachPropsAccessors = function attachPropsAccessors(_ref4) {
    var propsArr = _ref4.propsArr,
        props = _ref4.props,
        cube = _ref4.cube,
        cache = _ref4.cache,
        itemDepthObject = _ref4.itemDepthObject,
        f = _ref4.f;

    for (var i = 0; i < propsArr.length; i++) {
      var pCfg = props[propsArr[i]];
      var arr = pCfg.fields ? pCfg.fields : [pCfg];

      for (var j = 0; j < arr.length; j++) {
        var p = arr[j];

        if (p.field !== f) {
          var depthObject = getFieldDepth(p.field, {
            cube: cube,
            cache: cache
          });
          var accessors = getFieldAccessor(itemDepthObject, depthObject);
          p.accessor = accessors.nodeFn; // nodes accessor

          p.valueAccessor = accessors.valueFn; // cell accessor

          p.attrAccessor = accessors.attrFn; // attr cell accessor
        }
      }
    }
  };

  function augment() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var dataset = arguments.length > 1 ? arguments[1] : undefined;
    var cache = arguments.length > 2 ? arguments[2] : undefined;
    var util = arguments.length > 3 ? arguments[3] : undefined;
    var cube = dataset.raw();
    var sourceKey = dataset.key();
    var h = cube.qMode === 'S' ? getHierarchyForSMode(dataset) : getHierarchy(cube, cache, config);

    if (!h) {
      return null;
    }

    var height = h.height;
    var propDefs = [];

    for (var i = 0; i <= height; i++) {
      var f = null;

      if (i > 0) {
        if (cube.qMode === 'S') {
          var order = getDimensionColumnOrder(cube);
          var idx = order[i - 1];
          f = cache.fields[idx];
        } else {
          var _idx = cube.qEffectiveInterColumnSortOrder[i - 1]; // if (idx === -1) { // pseudo
          //   let childIdx = node.parent.children.indexOf(node);
          //   idx = cube.qDimensionInfo.length + childIdx; // measure field
          // }

          if (i > cube.qEffectiveInterColumnSortOrder.length) {
            _idx = cube.qDimensionInfo.length;
          }

          f = cache.fields[_idx];
        }
      }

      var _util$normalizeConfig = util.normalizeConfig(_objectSpread2(_objectSpread2({}, config), {}, {
        field: f ? f.key() : undefined
      }), dataset),
          props = _util$normalizeConfig.props,
          main = _util$normalizeConfig.main;

      var propsArr = Object.keys(props);
      propDefs[i] = {
        propsArr: propsArr,
        props: props,
        main: main
      };
      var itemDepthObject = f ? getFieldDepth(f, {
        cube: cube,
        cache: cache
      }) : {
        fieldDepth: 0
      };
      attachPropsAccessors({
        propsArr: propsArr,
        props: props,
        cube: cube,
        cache: cache,
        itemDepthObject: itemDepthObject,
        f: f
      });
    }

    var replica = h.copy();
    var replicaDescendants = replica.descendants();
    var descendants = h.descendants();

    for (var _i = 0; _i < descendants.length; _i++) {
      var _propsArr = propDefs[descendants[_i].depth].propsArr;
      var _props = propDefs[descendants[_i].depth].props;
      var _main = propDefs[descendants[_i].depth].main;
      var item = replicaDescendants[_i];
      var itemData = item.data; // main.valueAccessor(currentOriginal);

      var ret = datumExtract(_main, itemData, {
        key: sourceKey
      });
      doIt({
        propsArr: _propsArr,
        props: _props,
        item: item,
        itemData: itemData,
        ret: ret,
        sourceKey: sourceKey,
        isTree: true
      });
      descendants[_i].data = ret;
    }

    return h;
  }
  function extract(config, dataset, cache, util) {
    var cfgs = Array.isArray(config) ? config : [config];
    var dataItems = [];

    for (var g = 0; g < cfgs.length; g++) {
      if (typeof cfgs[g].field !== 'undefined') {
        var cube = dataset.raw();
        var sourceKey = dataset.key();
        var h = getHierarchy(cube, cache, config);

        if (!h) {
          continue;
        }

        var f = _typeof(cfgs[g].field) === 'object' ? cfgs[g].field : dataset.field(cfgs[g].field);

        var _util$normalizeConfig2 = util.normalizeConfig(cfgs[g], dataset),
            props = _util$normalizeConfig2.props,
            main = _util$normalizeConfig2.main;

        var propsArr = Object.keys(props);
        var itemDepthObject = getFieldDepth(f, {
          cube: cube,
          cache: cache
        });

        var _getFieldAccessor = getFieldAccessor({
          fieldDepth: 0
        }, itemDepthObject),
            nodeFn = _getFieldAccessor.nodeFn,
            attrFn = _getFieldAccessor.attrFn,
            valueFn = _getFieldAccessor.valueFn;

        attachPropsAccessors({
          propsArr: propsArr,
          props: props,
          cube: cube,
          cache: cache,
          itemDepthObject: itemDepthObject,
          f: f
        });
        var track = !!cfgs[g].trackBy;

        var trackType = _typeof(cfgs[g].trackBy);

        var tracker = {};
        var trackedItems = [];
        var items = nodeFn(cache.tree);
        var mapped = [];

        for (var i = 0; i < items.length; i++) {
          var item = items[i];
          var itemData = attrFn ? attrFn(valueFn(item)) : valueFn(item);
          var exclude = main.filter && !main.filter(itemData);

          if (exclude) {
            continue;
          }

          var ret = datumExtract(main, itemData, {
            key: sourceKey
          });
          doIt({
            propsArr: propsArr,
            props: props,
            item: item,
            itemData: itemData,
            ret: ret,
            sourceKey: sourceKey
          }); // collect items based on the trackBy value
          // items with the same trackBy value are placed in an array and reduced later

          if (track) {
            util.track({
              cfg: cfgs[g],
              itemData: itemData,
              obj: ret,
              target: trackedItems,
              tracker: tracker,
              trackType: trackType
            });
          }

          mapped.push(ret);
        } // reduce if items have been grouped


        if (track) {
          dataItems.push.apply(dataItems, _toConsumableArray(util.collect(trackedItems, {
            main: main,
            propsArr: propsArr,
            props: props
          })));
        } else {
          dataItems.push.apply(dataItems, mapped);
        }
      }
    }

    return dataItems;
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var format_min = createCommonjsModule(function (module) {
  /*! javascript-number-formatter - v1.1.11 - http://mottie.github.com/javascript-number-formatter/ * © ecava */
  !function(a,b){module.exports=b();}(commonjsGlobal,function(){return function(a,b){if(!a||isNaN(+b))return b;var c,d,e,f,g,h,i,j,k,l,m=a.length,n=a.search(/[0-9\-\+#]/),o=n>0?a.substring(0,n):"",p=a.split("").reverse().join(""),q=p.search(/[0-9\-\+#]/),r=m-q,s=a.substring(r,r+1),t=r+("."===s||","===s?1:0),u=q>0?a.substring(t,m):"";if(a=a.substring(n,t),b="-"===a.charAt(0)?-b:+b,c=b<0?b=-b:0,d=a.match(/[^\d\-\+#]/g),e=d&&d[d.length-1]||".",f=d&&d[1]&&d[0]||",",a=a.split(e),b=b.toFixed(a[1]&&a[1].length),b=+b+"",h=a[1]&&a[1].lastIndexOf("0"),j=b.split("."),(!j[1]||j[1]&&j[1].length<=h)&&(b=(+b).toFixed(h+1)),k=a[0].split(f),a[0]=k.join(""),g=a[0]&&a[0].indexOf("0"),g>-1)for(;j[0].length<a[0].length-g;)j[0]="0"+j[0];else 0===+j[0]&&(j[0]="");if(b=b.split("."),b[0]=j[0],i=k[1]&&k[k.length-1].length){for(l=b[0],p="",r=l.length%i,m=l.length,t=0;t<m;t++)p+=l.charAt(t),!((t-r+1)%i)&&t<m-i&&(p+=f);b[0]=p;}return b[1]=a[1]&&b[1]?e+b[1]:"",d=b.join(""),"0"!==d&&""!==d||(c=!1),o+((c?"-":"")+d)+u}});
  });

  function escapeRegExp(str) {
    return str.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
  }

  var SIprefixes = {
    3: 'k',
    6: 'M',
    9: 'G',
    12: 'T',
    15: 'P',
    18: 'E',
    21: 'Z',
    24: 'Y',
    '-3': 'm',
    '-6': 'μ',
    '-9': 'n',
    '-12': 'p',
    '-15': 'f',
    '-18': 'a',
    '-21': 'z',
    '-24': 'y'
  },
      percentage = /%$/,
      //    scientific = /e[\+\-][0-9]+/,
  radix = /^\(r(0[2-9]|[12]\d|3[0-6])\)/i,
      oct = /^\(oct\)/i,
      dec = /^\(dec\)/i,
      hex = /^\(hex\)/i,
      bin = /^\(bin\)/i,
      rom = /^\(rom\)/i,
      functional = /^(\(rom\)|\(bin\)|\(hex\)|\(dec\)|\(oct\)|\(r(0[2-9]|[12]\d|3[0-6])\))/i,
      prec = /#|0/g;

  function formatRadix(value, fradix, pattern, decimal) {
    value = value.toString(fradix);

    if (pattern[1] === pattern[1].toUpperCase()) {
      value = value.toUpperCase();
    }

    if (value.length - value.indexOf('.') > 10) {
      // limit to 10 decimal places
      value = value.slice(0, value.indexOf('.') + 11);
    }

    return value.replace('.', decimal || '.');
  } // value must be an integer
  // value must not be in scientific notation


  function formatRoman(value, pattern) {
    var i,
        s = '',
        v = Number(String(value).slice(-3)),
        nThousands = (value - v) / 1000,
        decimal = [0, 1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900].reverse(),
        numeral = ['0', 'I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM'].reverse();

    while (v > 0) {
      for (i = 0; i < decimal.length; i++) {
        if (decimal[i] <= v) {
          s += numeral[i];
          v -= decimal[i];
          break;
        }
      }
    }

    for (i = 0; i < nThousands; i++) {
      s = "M".concat(s);
    }

    if (pattern[1] !== pattern[1].toUpperCase()) {
      s = s.toLowerCase();
    }

    return s;
  }

  function formatFunctional(value, pattern, d) {
    var temp;

    if (radix.test(pattern)) {
      value = formatRadix(value, Number(/\d{2}/.exec(pattern)[0]), pattern, d);
    } else if (oct.test(pattern)) {
      value = formatRadix(value, 8, pattern, d);
    } else if (dec.test(pattern)) {
      value = formatRadix(value, 10, pattern, d);
    } else if (hex.test(pattern)) {
      value = formatRadix(value, 16, pattern, d);
    } else if (bin.test(pattern)) {
      value = formatRadix(value, 2, pattern, d);
    } else if (rom.test(pattern)) {
      temp = '';

      if (value < 0) {
        temp = '-';
        value = -value;
      }

      value = Math.floor(value);

      if (value === 0) {
        value = '0';
      } else if (value <= 500000) {
        // limit in engine
        value = formatRoman(value, pattern);
        value = temp + value;
      } else {
        value = pattern + temp + value.toExponential(0); // to return same result as engine
      }
    }

    return value;
  }

  function escape(value, flags, justStr) {
    var str = escapeRegExp(value);

    if (justStr) {
      return str;
    }

    return new RegExp(str || '', flags);
  }

  function createRegExp(thousand, decimal) {
    if (decimal) {
      decimal = escapeRegExp(decimal);
    }

    if (thousand) {
      thousand = escapeRegExp(thousand);
    }

    return new RegExp("(?:[#0]+".concat(thousand, ")?[#0]+(?:").concat(decimal, "[#0]+)?"));
  }

  function getAbbreviations(localeInfo, listSeparator) {
    if (!localeInfo || !localeInfo.qNumericalAbbreviation) {
      return SIprefixes;
    }

    var abbreviations = {};
    var abbrs = localeInfo.qNumericalAbbreviation.split(listSeparator);
    abbrs.forEach(function (abbreviation) {
      var abbreviationTuple = abbreviation.split(':');

      if (abbreviationTuple.length === 2) {
        abbreviations[abbreviationTuple[0]] = abbreviationTuple[1];
      }
    });
    return abbreviations;
  }

  function preparePattern(o, t, d) {
    var parts,
        lastPart,
        pattern = o.pattern,
        numericPattern,
        prefix,
        postfix,
        groupTemp,
        decTemp,
        temp,
        regex;

    if (pattern.indexOf('A') >= 0) {
      // abbreviate SI
      pattern = pattern.replace('A', '');
      o.abbreviate = true;
    } // extract the numeric part from the pattern


    regex = createRegExp(t, d);
    numericPattern = pattern.match(regex);
    numericPattern = numericPattern ? numericPattern[0] : '';
    prefix = numericPattern ? pattern.substr(0, pattern.indexOf(numericPattern)) : pattern;
    postfix = numericPattern ? pattern.substring(pattern.indexOf(numericPattern) + numericPattern.length) : '';

    if (!numericPattern) {
      numericPattern = pattern ? '#' : '##########';
    }

    if (t && t === d) {
      // ignore grouping if grouping separator is same as decimal separator
      // extract decimal part
      parts = numericPattern.split(d);
      lastPart = parts.pop();
      numericPattern = parts.join('') + d + lastPart;
      t = '';
    } // formatting library does not support multiple characters as separator (nor +-).
    // do a temporary replacement


    groupTemp = t;
    t = /,/.test(d) ? '¤' : ',';

    if (groupTemp) {
      numericPattern = numericPattern.replace(escape(groupTemp, 'g'), t);
    }

    decTemp = d;
    d = '.';

    if (decTemp) {
      numericPattern = numericPattern.replace(escape(decTemp, 'g'), d);
    }

    temp = numericPattern.match(/#/g);
    temp = temp ? temp.length : 0;
    var splitPattern = pattern.split(decTemp);
    var matchPrecisionResult;

    if (splitPattern[1]) {
      matchPrecisionResult = splitPattern[1].match(prec);
    }

    o.prefix = prefix || '';
    o.postfix = postfix || '';
    o.pattern = pattern;
    o.maxPrecision = matchPrecisionResult ? matchPrecisionResult.length : 2;
    o.percentage = percentage.test(pattern);
    o.numericPattern = numericPattern || '';
    o.numericRegex = new RegExp("".concat(escape(t, null, true), "|").concat(escape(d, null, true)), 'g');
    o.groupTemp = groupTemp;
    o.decTemp = decTemp;
    o.t = t;
    o.d = d;
    o.temp = temp;
  }

  var NumberFormatter = /*#__PURE__*/function () {
    /**
     * @name NumberFormatter
     * @constructs
     * @param {Object} localeInfo
     * @param {String} pattern
     * @param {String} [thousand]
     * @param {String} [decimal]
     * @param {String} [type]
     */
    function NumberFormatter(localeInfo, pattern, thousand, decimal, type) {
      _classCallCheck(this, NumberFormatter);

      this.localeInfo = localeInfo;
      this.pattern = pattern;
      this.thousandDelimiter = thousand || ',';
      this.decimalDelimiter = decimal || '.';
      this.type = type || 'numeric'; // FIXME qListSep?
      // this.patternSeparator = this.localeInfo && this.localeInfo.qListSep ? this.localeInfo.qListSep : ';';

      this.patternSeparator = ';';
      this.abbreviations = getAbbreviations(localeInfo, this.patternSeparator);
      this.prepare();
    }

    _createClass(NumberFormatter, [{
      key: "clone",
      value: function clone() {
        var n = new NumberFormatter(this.localeInfo, this.pattern, this.thousandDelimiter, this.decimalDelimiter, this.type);
        n.subtype = this.subtype;
        return n;
      }
      /**
       * Formats a number according to a specific pattern.
       * Use # for optional numbers and 0 for padding.
       * @param {Number} value Number to format.
       * @param {String} [pattern] The pattern to apply.
       * @param {String} [t] Grouping separator.
       * @param {String} [d] Decimal delimiter.
       * @example
       * format(10, "0") // 10;
       * format(10, "#") // 10;
       * format(10, "##.#") // 10;
       * format(10, "##.0") // 10.0;
       * format(10, "000") // 010;
       * format(10.123, "0.0") // 10.1;
       * format(10.123, "0.00##") // 10.123; // at least 2 decimals, never more than 4
       * format(123456789, "#,###") // 123,456,789;
       * format(123456789, "####-####", "-") // 1-2345-6789;
       * format(10000, "#A") // 10k,  A -> SI abbreviation
       * format(1234567, "#.###A") // 1.235M;
       * format(0.0001, "#.#A") // 0.1m;
       *
       * format(0.257, "0.0%") // 25.7%; // will multiply by 100
       * format(9876, "$#,###") // $9,876;
       * format(-9876, "$#,###;$(#,###)") // $(9,876); // use ; for alternative formatting for negative values
       * format(10, "(r16)") // a; // radix 16
       * format(15, "(hex)") // f; // same as (r16)
       * format(15, "(HEX)") // F;
       * format(10, "(bin)") // 1010; // same as (r02)
       * format(10, "(oct)") // 12; // same as (r08)
       */

    }, {
      key: "format",
      value: function format(value, pattern, t, d) {
        this.prepare(pattern, t, d);
        return this.formatValue(value);
      }
    }, {
      key: "prepare",
      value: function prepare(pattern, t, d) {
        var prep;

        if (typeof pattern === 'undefined') {
          pattern = this.pattern;
        }

        if (typeof t === 'undefined') {
          t = this.thousandDelimiter;
        }

        if (typeof d === 'undefined') {
          d = this.decimalDelimiter;
        }

        if (!pattern) {
          this._prepared = {
            pattern: false
          };
          return;
        }

        this._prepared = {
          positive: {
            d: d,
            t: t,
            abbreviate: false,
            isFunctional: false,
            prefix: '',
            postfix: ''
          },
          negative: {
            d: d,
            t: t,
            abbreviate: false,
            isFunctional: false,
            prefix: '',
            postfix: ''
          },
          zero: {
            d: d,
            t: t,
            abbreviate: false,
            isFunctional: false,
            prefix: '',
            postfix: ''
          }
        };
        prep = this._prepared;
        pattern = pattern.split(this.patternSeparator);
        prep.positive.pattern = pattern[0];
        prep.negative.pattern = pattern[1];
        prep.zero.pattern = pattern[2];

        if (functional.test(pattern[0])) {
          prep.positive.isFunctional = true;
        }

        if (!pattern[1]) {
          prep.negative = false;
        } else if (functional.test(pattern[1])) {
          prep.negative.isFunctional = true;
        }

        if (!pattern[2]) {
          prep.zero = false;
        } else if (functional.test(pattern[2])) {
          prep.zero.isFunctional = true;
        }

        if (!prep.positive.isFunctional) {
          preparePattern(prep.positive, t, d);
        }

        if (prep.negative && !prep.negative.isFunctional) {
          preparePattern(prep.negative, t, d);
        }

        if (prep.zero && !prep.zero.isFunctional) {
          preparePattern(prep.zero, t, d);
        }
      }
    }, {
      key: "formatValue",
      value: function formatValue(value) {
        var prep = this._prepared,
            temp,
            exponent,
            abbr = '',
            absValue,
            num,
            sciValue = '',
            d,
            t,
            i,
            numericPattern,
            decimalPartPattern,
            original = value;

        if (isNaN(value)) {
          return "".concat(original);
        }

        value = +value;

        if (prep.pattern === false) {
          return value.toString();
        }

        if (value === 0 && prep.zero) {
          prep = prep.zero;
          return prep.pattern;
        }

        if (value < 0 && prep.negative) {
          prep = prep.negative;
          value = -value;
        } else {
          prep = prep.positive;
        }

        d = prep.d;
        t = prep.t;

        if (prep.isFunctional) {
          value = formatFunctional(value, prep.pattern, d);
        } else {
          if (prep.percentage) {
            value *= 100;
          }

          if (prep.abbreviate) {
            var abbrArray = Object.keys(this.abbreviations).map(function (key) {
              return parseInt(key, 10);
            }).sort(function (a, b) {
              return a - b;
            });
            var lowerAbbreviation;
            var upperAbbreviation = abbrArray[0];
            i = 0;
            exponent = Number(Number(value).toExponential().split('e')[1]);

            while (upperAbbreviation <= exponent && i < abbrArray.length) {
              i++;
              upperAbbreviation = abbrArray[i];
            }

            if (i > 0) {
              lowerAbbreviation = abbrArray[i - 1];
            }

            var suggestedAbbrExponent; // value and lower abbreviation is for values above 10, use the lower (move to the left <==)

            if (lowerAbbreviation && exponent > 0 && lowerAbbreviation > 0) {
              suggestedAbbrExponent = lowerAbbreviation; // value and lower abbreviation is for values below 0.1 (move to the right ==>)
            } else if (exponent < 0 && lowerAbbreviation < 0 || !lowerAbbreviation) {
              // upper abbreviation is also for values below 0.1 and precision allows for using the upper abbreviation(move to the right ==>)
              if (upperAbbreviation < 0 && upperAbbreviation - exponent <= prep.maxPrecision) {
                suggestedAbbrExponent = upperAbbreviation; // lower abbrevaition is smaller than exponent and we can't get away with not abbreviating
              } else if (lowerAbbreviation <= exponent && !(upperAbbreviation > 0 && -exponent <= prep.maxPrecision)) {
                // (move to left <==)
                suggestedAbbrExponent = lowerAbbreviation;
              }
            }

            if (suggestedAbbrExponent) {
              abbr = this.abbreviations[suggestedAbbrExponent];
              value /= Math.pow(10, suggestedAbbrExponent);
            }
          }

          absValue = Math.abs(value);
          temp = prep.temp;
          numericPattern = prep.numericPattern;
          decimalPartPattern = numericPattern.split(d)[1];

          if (this.type === 'I') {
            value = Math.round(value);
          }

          num = value;

          if (!decimalPartPattern && numericPattern.slice(-1)[0] === '#') {
            if (absValue >= Math.pow(10, temp) || absValue < 1 || absValue < 1e-4) {
              if (value === 0) {
                value = '0';
              } else if (absValue < 1e-4 || absValue >= 1e20) {
                // engine always formats values < 1e-4 in scientific form, values >= 1e20 can only be represented in scientific form
                value = num.toExponential(Math.max(1, Math.min(14, temp)) - 1);
                value = value.replace(/\.?0+(?=e)/, '');
                sciValue = '';
              } else {
                value = value.toPrecision(Math.max(1, Math.min(14, temp)));

                if (value.indexOf('.') >= 0) {
                  value = value.replace(value.indexOf('e') < 0 ? /0+$/ : /\.?0+(?=e)/, '');
                  value = value.replace('.', d);
                }
              }
            } else {
              numericPattern += d;
              temp = Math.max(0, Math.min(20, temp - Math.ceil(Math.log(absValue) / Math.log(10))));

              for (i = 0; i < temp; i++) {
                numericPattern += '#';
              }

              value = format_min(numericPattern, value);
            }
          } else if (absValue >= 1e15 || absValue > 0 && absValue <= 1e-14) {
            value = absValue ? absValue.toExponential(15).replace(/\.?0+(?=e)/, '') : '0';
          } else {
            var wholePart = Number(value.toFixed(Math.min(20, decimalPartPattern ? decimalPartPattern.length : 0)).split('.')[0]);
            var wholePartPattern = numericPattern.split(d)[0];
            wholePartPattern += d;
            value = format_min(wholePartPattern, wholePart) || '0';

            if (decimalPartPattern) {
              var nDecimals = Math.max(0, Math.min(14, decimalPartPattern.length)); // the length of e.g. 0000#####

              var nZeroes = decimalPartPattern.replace(/#+$/, '').length;
              var decimalPart = (this.type === 'I' ? 0 : absValue % 1).toFixed(nDecimals).slice(2).replace(/0+$/, ''); // remove trailing zeroes

              for (i = decimalPart.length; i < nZeroes; i++) {
                decimalPart += '0';
              }

              if (decimalPart) {
                value += d + decimalPart;
              }
            } else if (wholePart === 0) {
              // to avoid "-" being prefixed to value
              num = 0;
            }
          }

          value = value.replace(prep.numericRegex, function (m) {
            if (m === t) {
              return prep.groupTemp;
            }

            if (m === d) {
              return prep.decTemp;
            }

            return '';
          });

          if (num < 0 && !/^-/.test(value)) {
            value = "-".concat(value);
          }
        }

        return prep.prefix + value + sciValue + abbr + prep.postfix;
      }
    }], [{
      key: "getStaticFormatter",
      value: function getStaticFormatter() {
        return {
          prepare: function prepare() {},
          formatValue: function formatValue(v) {
            return "".concat(v);
          }
        };
      }
    }]);

    return NumberFormatter;
  }();

  function numberFormatFactory() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _construct(NumberFormatter, args);
  }

  function memoize(func) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _opts$size = opts.size,
        size = _opts$size === void 0 ? 5000 : _opts$size,
        _opts$multipleArgumen = opts.multipleArguments,
        multipleArguments = _opts$multipleArgumen === void 0 ? false : _opts$multipleArgumen,
        _opts$toKey = opts.toKey,
        toKey = _opts$toKey === void 0 ? function (arg) {
      return arg;
    } : _opts$toKey;
    var cache = Object.create(null);
    var index = Object.create(null);
    var counter = 0;
    var fifo = 0; // First-In-First-Out index

    var _cacher2;

    var k;

    if (multipleArguments) {
      _cacher2 = function cacher() {
        k = toKey.apply(void 0, arguments);

        if (_cacher2.has(k)) {
          return _cacher2.get(k);
        }

        return _cacher2.set(k, func.apply(void 0, arguments));
      };
    } else {
      _cacher2 = function _cacher(arg) {
        k = toKey(arg);

        if (_cacher2.has(k)) {
          return _cacher2.get(k);
        }

        return _cacher2.set(k, func(arg));
      };
    }

    _cacher2.set = function (key, val) {
      if (counter >= size) {
        delete cache[index[fifo]];
        delete index[fifo];
        counter--;
        fifo++;
      }

      cache[key] = val;
      index[counter] = key;
      counter++;
      return val;
    };

    _cacher2.get = function (key) {
      return cache[key];
    };

    _cacher2.has = function (key) {
      return key in cache;
    };

    _cacher2.clear = function () {
      cache = Object.create(null);
      index = Object.create(null);
      counter = 0;
      fifo = 0;
    };

    _cacher2.size = function () {
      return counter;
    };

    return _cacher2;
  }

  function formatter$1(pattern, thousand, decimal, qType, localeInfo) {
    var qformat = numberFormatFactory(localeInfo, pattern, thousand, decimal, qType);
    var memoized = memoize(qformat.formatValue.bind(qformat), {
      // Handle NaN and cases where toString yields different result than +operator. Ex. a Date.
      toKey: function toKey(value) {
        return isNaN(value) ? value : +value;
      }
    });
    /**
     * Format a value according to the specified pattern created at construct
     *
     * @param  {Number} value   The number to be formatted
     * @return {String}         [description]
     */

    function format(value) {
      return memoized(value);
    }
    /**
     * Format a value according to a specific pattern
     * that is not the one specified in the constructor
     *
     * @param  {String} p   Pattern
     * @param  {Number} v   Value
     * @param  {String} t   Thousand
     * @param  {String} d   Decimal
     * @return {String}     Formatted value
     */


    format.format = function formatFn(p, v, t, d) {
      memoized.clear();
      return qformat.format(v, p, t, d);
    };
    /**
     * Change the pattern on existing formatter
     *
     * @param  {String} p     Pattern (optional)
     * @return {String}       Returns the pattern
     */


    format.pattern = function patternFn(p) {
      if (p) {
        memoized.clear();
        qformat.pattern = p;
        qformat.prepare();
      }

      return qformat.pattern;
    };
    /**
     * Set the locale for the formatter
     *
     * @param  {Object} args   Locale object for formatting
     * @return {Undefined}      Returns nothing
     */

    /* format.locale = function( ...args ) {
      locale = formatLocale( ...args );
      d3format = locale.format( pattern );
       return this;
    }; */


    return format;
  }

  /* eslint import/prefer-default-export: 0 */
  var TYPES = {
    AUTO: 'U',
    INTEGER: 'I',
    NUMBER: 'R',
    FIXED_TO: 'F',
    MONEY: 'M',
    DATE: 'D',
    TIME: 'T',
    DATE_TIME: 'TS',
    INTERVAL: 'IV'
  };

  var DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  var DAYS_ABBR = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var MONTHS_ABBR = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var SECONDS_PER_DAY = 86400;

  function pad(s, n) {
    for (var i = s.length; i < n; i++) {
      s = "0".concat(s);
    }

    return s;
  }

  function parseDate(d, twelveFormat) {
    var h = d.getUTCHours();
    var day = d.getUTCDay() - 1;

    if (twelveFormat) {
      h %= 12;

      if (!h) {
        // h == 0 -> 12
        h = 12;
      }
    }

    if (day < 0) {
      day = 6;
    }

    return {
      year: d.getUTCFullYear(),
      month: d.getUTCMonth(),
      day: day,
      date: d.getUTCDate(),
      h: h,
      m: d.getUTCMinutes(),
      s: d.getUTCSeconds(),
      f: d.getUTCMilliseconds(),
      t: d.getUTCHours() >= 12 ? 'pm' : 'am'
    };
  }

  function getRemainder(value) {
    var s = value.toString().split('.');

    if (s[1]) {
      s = Number("0.".concat(s[1]));
    } else {
      return 0;
    }

    return s;
  }

  function parseIntervalDays(days) {
    var d = days;
    var h = 24 * getRemainder(d);
    var m = 60 * getRemainder(h);
    var s = 60 * getRemainder(m);
    var ms = 1000 * getRemainder(s);
    return {
      d: Math.floor(d),
      h: Math.floor(h),
      m: Math.floor(m),
      s: Math.floor(s),
      f: Math.round(ms)
    };
  }

  function parseInterval(days, pattern) {
    var units = parseIntervalDays(days),
        d = units.d,
        h = units.h,
        m = units.m,
        s = units.s,
        f = units.f,
        w = 0,
        date;

    if (/w+|t+/gi.test(pattern)) {
      date = new Date(Date.UTC(1899, 11, 30 + Math.floor(days), 0, 0, Math.round(SECONDS_PER_DAY * (days - Math.floor(days)))));

      if (isNaN(date.getTime())) {
        date = null;
      }
    }

    if (!/D+/gi.test(pattern)) {
      h += d * 24;
    }

    if (!/h+/gi.test(pattern)) {
      m += h * 60;
    }

    if (!/m+/gi.test(pattern)) {
      s += m * 60;
    }

    if (/w+/gi.test(pattern)) {
      w = date ? date.getDay() - 1 : 0;

      if (w < 0) {
        w = 6;
      }
    }

    var someT = '';

    if (date) {
      someT = date.getUTCHours() >= 12 ? 'pm' : 'am';
    }

    return {
      year: 0,
      month: 0,
      day: w,
      date: d,
      h: h,
      m: m,
      s: s,
      f: f,
      t: someT
    };
  }

  function getMasks(inst, d) {
    return {
      'Y+|y+': {
        Y: "".concat(Number("".concat(d.year).slice(-2))),
        YY: pad("".concat(d.year).slice(-2), 2),
        YYY: pad("".concat(d.year).slice(-3), 3),
        def: function def(m) {
          // default
          return pad("".concat(d.year), m.length);
        }
      },
      'M+': {
        M: d.month + 1,
        MM: pad("".concat(d.month + 1), 2),
        MMM: inst.locale_months_abbr[d.month],
        def: inst.locale_months[d.month]
      },
      'W+|w+': {
        W: d.day,
        WW: pad("".concat(d.day), 2),
        WWW: inst.locale_days_abbr[d.day],
        def: inst.locale_days[d.day]
      },
      'D+|d+': {
        D: d.date,
        def: function def(m) {
          return pad("".concat(d.date), m.length);
        }
      },
      'h+|H+': {
        h: d.h,
        def: function def(m) {
          return pad("".concat(d.h), m.length);
        }
      },
      'm+': {
        m: d.m,
        def: function def(m) {
          return pad("".concat(d.m), m.length);
        }
      },
      's+|S+': {
        s: d.s,
        def: function def(m) {
          return pad("".concat(d.s), m.length);
        }
      },
      'f+|F+': {
        def: function def(m) {
          var f = "".concat(d.f),
              n = m.length - f.length;

          if (n > 0) {
            for (var i = 0; i < n; i++) {
              f += '0';
            }
          } else if (n < 0) {
            f = f.slice(0, m.length);
          }

          return f;
        }
      },
      't{1,2}|T{1,2}': {
        def: function def(m) {
          var t = d.t;

          if (m[0].toUpperCase() === m[0]) {
            t = t.toUpperCase();
          }

          t = t.slice(0, m.length);
          return t;
        }
      }
    };
  }

  var DateFormatter = /*#__PURE__*/function () {
    /**
     * @name DateFormatter
     * @constructs
     * @param {Object} localeInfo
     * @param {String} pattern
     */
    function DateFormatter(localeInfo, pattern, qtype) {
      _classCallCheck(this, DateFormatter);

      var info = localeInfo || {};

      if (!info.qCalendarStrings) {
        info.qCalendarStrings = {
          qLongDayNames: DAYS,
          qDayNames: DAYS_ABBR,
          qLongMonthNames: MONTHS,
          qMonthNames: MONTHS_ABBR
        };
      }

      this.localeInfo = info;
      this.locale_days = info.qCalendarStrings.qLongDayNames.slice();
      this.locale_days_abbr = info.qCalendarStrings.qDayNames.slice();
      this.locale_months = info.qCalendarStrings.qLongMonthNames.slice();
      this.locale_months_abbr = info.qCalendarStrings.qMonthNames.slice();

      if (!pattern) {
        var _patternMap;

        var patternMap = (_patternMap = {}, _defineProperty(_patternMap, TYPES.TIME, info.qTimeFmt || 'hh:mm:ss'), _defineProperty(_patternMap, TYPES.DATE, info.qDateFmt || 'YYYY-MM-DD'), _defineProperty(_patternMap, TYPES.DATE_TIME, info.qTimestampFmt || 'YYYY-MM-DD hh:mm:ss'), _patternMap);
        pattern = patternMap[qtype];
      }

      this.pattern = pattern;
    }

    _createClass(DateFormatter, [{
      key: "clone",
      value: function clone() {
        var n = new DateFormatter(this.localeInfo, this.pattern);
        n.subtype = this.subtype;
        return n;
      }
      /**
       * Formats a date according to given pattern
       * @param {Date} date The date to format.
       * @param {String} pattern The desired format of the date
       * var d = new Date(2013, 8, 15, 13, 55, 40, 987);
       * var n = new DateFormatter();
       * @example
       * m.format( d, 'YYYY-MM-DD hh:mm:ss.ffff') // 2013-08-15 13:55:40.9870
       * m.format( d, 'h:m:s tt') // 1:55:40 pm
       * m.format( d, 'h:m:s TT') // 1:55:40 PM
       * m.format( d, 'M/D/YYYY') // 8/15/2013
       * m.format( d, 'WWWW DD MMM') // Thursday 15 Aug
       * m.format( d, 'WWW DD MMMM @ hh:mm:ss') // Thu 15 August @ 13:55:40
       */

    }, {
      key: "format",
      value: function format(date, pattern) {
        // Fallback pattern is set in constructor
        if (!pattern) {
          pattern = this.pattern ? this.pattern : 'YYYY-MM-DD hh:mm:ss';
        }

        pattern = pattern.replace(/\[.+]|\[|]/g, '');
        var hasTwelveFlag = /t+/gi.test(pattern);
        var parsedDate;

        if (date instanceof Date) {
          parsedDate = parseDate(date, hasTwelveFlag);
        } else {
          if (date < 0) {
            // parseInterval don't support for negative values
            date = -date;
            pattern = "-".concat(pattern);
          }

          parsedDate = parseInterval(date, pattern);
        } // remove [] and everything inside it


        var masks = getMasks(this, parsedDate);
        var masksArr = [];

        for (var mask in masks) {
          if (Object.prototype.hasOwnProperty.call(masks, mask)) {
            masksArr.push(mask);
          }
        }

        var dateTimeRegex = new RegExp(masksArr.join('|'), 'g');
        var result = pattern.replace(dateTimeRegex, function (m) {
          var r;
          var mask;

          for (mask in masks) {
            if (Object.prototype.hasOwnProperty.call(masks, mask)) {
              r = new RegExp(mask);

              if (r.test(m)) {
                break;
              }
            }
          }

          if (!r) {
            return '';
          }

          var value;

          for (var submask in masks[mask]) {
            if (submask === m || submask.toLowerCase() === m) {
              value = masks[mask][submask];

              if (typeof value === 'undefined') {
                value = masks[mask][submask.toLowerCase()];
              }

              break;
            }
          }

          if (typeof value === 'undefined') {
            value = masks[mask].def;
          }

          if (typeof value === 'function') {
            value = value(m);
          }

          return value;
        });
        return result;
      }
    }]);

    return DateFormatter;
  }();

  function dateFormatFactory() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _construct(DateFormatter, args);
  }

  var MS_PER_DAY = 86400000;
  function QlikTimeToDate(value) {
    return new Date(Date.UTC(1899, 11, 30 + Math.floor(value), 0, 0, 0, Math.round(MS_PER_DAY * (value - Math.floor(value)))));
  }
  function formatter(pattern) {
    var qtype = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'TS';
    var localeInfo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var qformat = dateFormatFactory(localeInfo, pattern, qtype);
    var memoized = memoize(qformat.format.bind(qformat), {
      toKey: function toKey(date) {
        return _typeof(date) === 'object' && typeof date.getTime === 'function' ? date.getTime() : date;
      }
    });
    /**
     * Prepare a value according to the specified qtype
     *
     * @param  {Number} value The value to be formatted
     * @return {Number}       The converted value (if applied)
     */

    function prepare(value) {
      if (qtype !== TYPES.INTERVAL) {
        return QlikTimeToDate(value);
      }

      return value;
    }
    /**
     * Format a value according to the specified pattern created at construct
     *
     * @param  {Date} value   The number to be formatted
     * @return {String}         [description]
     */


    function format(value) {
      value = prepare(value);
      return memoized(value);
    }
    /**
     * Format a value according to a specific pattern
     * that is not the one specified in the constructor
     *
     * @param  {String} p   Pattern
     * @param  {Date} v   Value
     * @return {String}     Formatted value
     */


    format.format = function formatFn(p, v) {
      memoized.clear();
      v = prepare(v);
      return qformat.format(v, p);
    };
    /**
     * Set the locale for the formatter
     *
     * @param  {Object} args   Locale object for formatting
     * @return {Undefined}      Returns nothing
     */


    format.locale = function locale(li) {
      qformat = dateFormatFactory(li, pattern, qtype);
      memoized = memoize(qformat.format.bind(qformat), {
        toKey: function toKey(date) {
          return _typeof(date) === 'object' ? date.getTime() : date;
        }
      });
      return this;
    };
    /**
     * Get or set the QType
     *
     * @param  {String} nqt New qType (optional)
     * @return {String}     Current qtype
     */


    format.qtype = function qtypeFn(nqt) {
      if (nqt !== undefined) {
        qtype = nqt;
        memoized.clear();
      }

      return qtype;
    };

    return format;
  }

  function createFromMetaInfo(meta, localeInfo) {
    if (meta && meta.qNumFormat && ['D', 'T', 'TS', 'IV'].indexOf(meta.qNumFormat.qType) !== -1) {
      return formatter(meta.qNumFormat.qFmt, meta.qNumFormat.qType, localeInfo);
    }

    var pattern = '#';
    var thousand = localeInfo && typeof localeInfo.qThousandSep !== 'undefined' ? localeInfo.qThousandSep : ',';
    var decimal = localeInfo && typeof localeInfo.qDecimalSep !== 'undefined' ? localeInfo.qDecimalSep : '.';
    var type = 'U';
    var isAuto = meta && !!meta.qIsAutoFormat;

    if (meta && meta.qNumFormat) {
      pattern = meta.qNumFormat.qFmt || pattern;
      thousand = meta.qNumFormat.qThou || thousand;
      decimal = meta.qNumFormat.qDec || decimal;
      type = meta.qNumFormat.qType || type;
      isAuto = isAuto && ['M'].indexOf(meta.qNumFormat.qType) === -1;
    } else {
      isAuto = true;
    }

    if (isAuto || type === 'U') {
      pattern = "#".concat(decimal, "##A");
      type = 'U';
    }

    return formatter$1(pattern, thousand, decimal, type, localeInfo);
  }

  function qField() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        meta = _ref.meta,
        _id = _ref.id,
        _key = _ref.key,
        localeInfo = _ref.localeInfo,
        fieldExtractor = _ref.fieldExtractor,
        value = _ref.value,
        _type = _ref.type,
        sourceField = _ref.sourceField;

    var values;
    var valueFn = value || (_type === 'dimension' ? function (d) {
      return d.qElemNo;
    } : function (d) {
      return d.qValue;
    });

    var labelFn = function labelFn(d) {
      return d.qText || '';
    };

    var reduce = _type === 'dimension' ? 'first' : 'avg';

    var _formatter = createFromMetaInfo(meta, localeInfo);

    var reduceLabel = _type === 'dimension' ? 'first' : function (labels, v) {
      return _formatter(v);
    };
    var f = {
      id: function id() {
        return _id;
      },
      key: function key() {
        return _key;
      },
      raw: function raw() {
        return meta;
      },
      title: function title() {
        return meta.qFallbackTitle || meta.label;
      },
      type: function type() {
        return _type;
      },
      origin: function origin() {
        return sourceField;
      },
      items: function items() {
        if (!values) {
          values = fieldExtractor(f);
        }

        return values;
      },
      min: function min() {
        return meta.qMin;
      },
      max: function max() {
        return meta.qMax;
      },
      value: valueFn,
      label: labelFn,
      reduce: reduce,
      reduceLabel: reduceLabel,
      formatter: function formatter() {
        return _formatter;
      },
      tags: function tags() {
        return meta.qTags;
      }
    };
    return f;
  }

  function createFields(path, obj, prefix, parentKey, opts) {
    return (obj[path] || []).map(function (meta, i) {
      var fieldKey = "".concat(parentKey ? "".concat(parentKey, "/") : '').concat(path, "/").concat(i);
      var f = {
        instance: qField(extend({
          id: "".concat(prefix ? "".concat(prefix, "/") : '').concat(fieldKey),
          key: fieldKey,
          meta: meta
        }, opts))
      };
      f.attrDims = createFields('qAttrDimInfo', meta, prefix, fieldKey, extend({}, opts, {
        value: function value(v) {
          return v.qElemNo;
        },
        type: 'dimension'
      }));
      f.attrExps = createFields('qAttrExprInfo', meta, prefix, fieldKey, extend({}, opts, {
        value: function value(v) {
          return v.qNum;
        },
        type: 'measure'
      }));
      f.measures = createFields('qMeasureInfo', meta, prefix, fieldKey, extend({}, opts, {
        value: function value(v) {
          return v.qValue;
        },
        type: 'measure'
      }));
      return f;
    });
  }

  function q() {
    var _cache$wrappedFields, _cache$wrappedFields2, _cache$allFields;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _key = _ref.key,
        data = _ref.data,
        _ref$config = _ref.config,
        config = _ref$config === void 0 ? {} : _ref$config;

    var cache = {
      fields: [],
      wrappedFields: [],
      allFields: [],
      virtualFields: []
    };
    var cube = data;

    if (!cube) {
      throw new Error('Missing "data" input');
    }

    if (!cube.qDimensionInfo) {
      throw new Error('The "data" input is not recognized as a hypercube');
    }

    var deps = q.util;
    var opts = {
      cache: cache,
      cube: cube,
      localeInfo: config.localeInfo,
      fieldExtractor: null,
      pages: null,
      hierarchy: function hierarchy() {
        return null;
      },
      virtualFields: config.virtualFields
    };
    var dataset = {
      key: function key() {
        return _key;
      },
      raw: function raw() {
        return cube;
      },
      field: function field(query) {
        return findField(query, opts);
      },
      fields: function fields() {
        return cache.fields.slice();
      },
      extract: function extract(extractionConfig) {
        return opts.extractor(extractionConfig, dataset, cache, deps);
      },
      hierarchy: function hierarchy(hierarchyConfig) {
        return opts.hierarchy(hierarchyConfig, dataset, cache, deps);
      },
      _cache: function _cache() {
        return cache;
      }
    };

    if (cube.qMode === 'K' || cube.qMode === 'T' || !cube.qMode && cube.qNodesOnDim) {
      opts.extractor = extract;
      opts.hierarchy = augment;
      opts.pages = cube.qMode === 'K' ? cube.qStackedDataPages : cube.qTreeDataPages;
    } else if (cube.qMode === 'S') {
      opts.extractor = extract$1;
      opts.pages = cube.qDataPages;
      opts.hierarchy = augment;
    } else {
      opts.extractor = function () {
        return [];
      }; // TODO - throw unsupported error?

    }

    opts.fieldExtractor = function (f) {
      return opts.extractor({
        field: f
      }, dataset, cache, deps);
    };

    var dimAcc = cube.qMode === 'S' ? function (d) {
      return d.qElemNumber;
    } : undefined;
    var measAcc = cube.qMode === 'S' ? function (d) {
      return d.qNum;
    } : undefined;

    (_cache$wrappedFields = cache.wrappedFields).push.apply(_cache$wrappedFields, _toConsumableArray(createFields('qDimensionInfo', cube, _key, '', extend({}, opts, {
      value: dimAcc,
      type: 'dimension'
    }))));

    (_cache$wrappedFields2 = cache.wrappedFields).push.apply(_cache$wrappedFields2, _toConsumableArray(createFields('qMeasureInfo', cube, _key, '', extend({}, opts, {
      value: measAcc,
      type: 'measure'
    }))));

    cache.fields = cache.wrappedFields.map(function (f) {
      return f.instance;
    });

    var traverse = function traverse(arr) {
      arr.forEach(function (f) {
        cache.allFields.push(f.instance);
        traverse(f.measures);
        traverse(f.attrDims);
        traverse(f.attrExps);
      });
    };

    traverse(cache.wrappedFields);
    (config.virtualFields || []).forEach(function (v) {
      // key: 'temporal',
      // from: 'qDimensionInfo/0',
      // override: {
      //   value: v => v.qNum,
      // },
      var sourceField = dataset.field(v.from);
      var f = qField(_objectSpread2({
        meta: sourceField.raw(),
        id: "".concat(_key, "/").concat(v.key),
        sourceField: sourceField,
        fieldExtractor: function fieldExtractor(ff) {
          return opts.extractor({
            field: ff
          }, dataset, cache, deps);
        },
        key: v.key,
        type: sourceField.type(),
        localeInfo: opts.localeInfo,
        value: sourceField.value
      }, v.override || {}));
      cache.virtualFields.push(f);
    });

    (_cache$allFields = cache.allFields).push.apply(_cache$allFields, _toConsumableArray(cache.virtualFields));

    return dataset;
  }

  var LAYOUT_TO_PROP = [['qHyperCube', 'qHyperCubeDef'], ['qTreeData', 'qTreeDataDef'], ['qDimensionInfo', 'qDimensions'], ['qMeasureInfo', 'qMeasures'], ['qAttrDimInfo', 'qAttributeDimensions'], ['qAttrExprInfo', 'qAttributeExpressions']];
  var DIM_RX = /\/qDimensionInfo(?:\/(\d+))?/;
  var M_RX = /\/qMeasureInfo\/(\d+)/;
  var ATTR_DIM_RX = /\/qAttrDimInfo\/(\d+)(?:\/(\d+))?/;
  var ATTR_EXPR_RX = /\/qAttrExprInfo\/(\d+)/;
  var HC_RX = /\/?qHyperCube/;
  var TD_RX = /\/?qTreeData/;

  var SHORTEN_HC = function SHORTEN_HC(path) {
    return "".concat(path.substr(0, path.indexOf('/qHyperCubeDef') + 14));
  }; // 14 = length of '/qHyperCubeDef'


  var SHORTEN_TD = function SHORTEN_TD(path) {
    return "".concat(path.substr(0, path.indexOf('/qTreeDataDef') + 13));
  }; // 13 = length of '/qTreeDataDef'


  function extractFieldFromId(id, layout) {
    var path = id;
    var dimensionIdx = -1;
    var measureIdx = -1;
    var pathToCube = '';

    var shortenizer = function shortenizer(p) {
      return p;
    };

    if (HC_RX.test(id)) {
      pathToCube = "".concat(path.substr(0, path.indexOf('qHyperCube') + 10)); // 10 = length of 'qHyperCube'

      shortenizer = SHORTEN_HC;
    } else if (TD_RX.test(id)) {
      pathToCube = "".concat(path.substr(0, path.indexOf('qTreeData') + 9)); // 9 = length of 'qTreeData'

      shortenizer = SHORTEN_TD;
    }

    var shortenPath = true;

    if (DIM_RX.test(id)) {
      dimensionIdx = +DIM_RX.exec(id)[1];
    }

    if (M_RX.test(id)) {
      measureIdx = +M_RX.exec(id)[1];
    }

    if (ATTR_DIM_RX.test(id)) {
      measureIdx = -1;
      dimensionIdx = 0;
      var attrCol = +ATTR_DIM_RX.exec(path)[2];

      if (!isNaN(attrCol)) {
        dimensionIdx = attrCol;
        path = path.replace(/\/\d+$/, '');
      }

      shortenPath = false;
    }

    if (ATTR_EXPR_RX.test(id)) {
      // depends on number of measures + number of attr expressions
      // in dimensions and measures before this one
      var offset = measureIdx;

      if (layout) {
        measureIdx = 0;
        var hc = resolve(pathToCube, layout); // offset by number of measures

        measureIdx += (hc.qMeasureInfo || []).length; // offset by total number of attr expr in dimensions
        // (assuming attr expr in dimensions are ordered first)

        if (dimensionIdx > -1) {
          measureIdx = hc.qDimensionInfo.slice(0, dimensionIdx).reduce(function (v, dim) {
            return v + dim.qAttrExprInfo.length;
          }, measureIdx);
          dimensionIdx = -1;
        } else {
          measureIdx = hc.qDimensionInfo.reduce(function (v, dim) {
            return v + dim.qAttrExprInfo.length;
          }, measureIdx); // offset by total number of attr expr in measures before 'index'

          measureIdx = hc.qMeasureInfo.slice(0, offset).reduce(function (v, meas) {
            return v + meas.qAttrExprInfo.length;
          }, measureIdx);
        } // offset by the actual column value for the attribute expression itself


        measureIdx += +ATTR_EXPR_RX.exec(path)[1];
      } else if (dimensionIdx > -1) {
        dimensionIdx = -1;
        measureIdx = +ATTR_EXPR_RX.exec(path)[1];
      } else {
        measureIdx += +ATTR_EXPR_RX.exec(path)[1] + 1;
      }
    }

    LAYOUT_TO_PROP.forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          v = _ref2[0],
          prop = _ref2[1];

      path = path.replace(v, prop);
    });

    if (shortenPath) {
      path = shortenizer(path);
    }

    if (path && path[0] !== '/') {
      path = "/".concat(path);
    }

    return {
      measureIdx: measureIdx,
      dimensionIdx: dimensionIdx,
      path: path
    };
  }
  /**
   * Helper method to generate suitable QIX selection methods and parameters based on a brush instance.
   * @alias brush
   * @memberof picasso.q
   * @param {Brush} brush A brush instance
   * @param {object} [opts]
   * @param {boolean} [opts.byCells=false] Whether to prefer selection by row index.
   * @param {string} [opts.primarySource] Field source to extract row indices from. If not specified, indices from first source are used.
   * @param {boolean} [opts.orMode=true] If false, combine measure range selections.
   * @param {object} [layout] QIX data layout. Needed only when brushing on attribute expressions, to be able to calculate the measure index.
   * @return {object[]} An array of relevant selections
   */

  function qBrush(brush) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var layout = arguments.length > 2 ? arguments[2] : undefined;
    var byCells = opts.byCells;
    var primarySource = opts.primarySource;
    var selections = [];
    var methods = {};
    var isActive = brush.isActive();
    var hasValues = false;
    brush.brushes().forEach(function (b) {
      var info = extractFieldFromId(b.id, layout);

      if (b.type === 'range' && info.measureIdx > -1 && info.dimensionIdx > -1) {
        var ranges = b.brush.ranges();

        if (ranges.length) {
          hasValues = true;

          if (!methods.multiRangeSelectTreeDataValues) {
            methods.multiRangeSelectTreeDataValues = {
              path: info.path,
              ranges: []
            };
          }

          ranges.forEach(function (range) {
            return methods.multiRangeSelectTreeDataValues.ranges.push({
              qMeasureIx: info.measureIdx,
              qDimensionIx: info.dimensionIdx,
              qRange: {
                qMin: range.min,
                qMax: range.max,
                qMinInclEq: true,
                qMaxInclEq: true
              }
            });
          });
        }
      } else {
        if (b.type === 'range' && info.measureIdx > -1) {
          var _ranges = b.brush.ranges();

          if (_ranges.length) {
            hasValues = true;

            if (!methods.rangeSelectHyperCubeValues) {
              methods.rangeSelectHyperCubeValues = {
                path: info.path,
                ranges: []
              };
            }

            _ranges.forEach(function (range) {
              return methods.rangeSelectHyperCubeValues.ranges.push({
                qMeasureIx: info.measureIdx,
                qRange: {
                  qMin: range.min,
                  qMax: range.max,
                  qMinInclEq: true,
                  qMaxInclEq: true
                }
              });
            });
          }
        }

        if (b.type === 'range' && info.dimensionIdx > -1) {
          var _ranges2 = b.brush.ranges();

          if (_ranges2.length) {
            hasValues = true;

            if (!methods.selectHyperCubeContinuousRange) {
              methods.selectHyperCubeContinuousRange = {
                path: info.path,
                ranges: []
              };
            }

            _ranges2.forEach(function (range) {
              return methods.selectHyperCubeContinuousRange.ranges.push({
                qDimIx: info.dimensionIdx,
                qRange: {
                  qMin: range.min,
                  qMax: range.max,
                  qMinInclEq: true,
                  qMaxInclEq: false
                }
              });
            });
          }
        }

        if (b.type === 'value' && info.dimensionIdx > -1) {
          if (byCells) {
            if (layout && layout.qHyperCube && (layout.qHyperCube.qMode === 'P' || layout.qHyperCube.qMode === 'T' || layout.qHyperCube.qMode === 'K')) {
              var hyperCube = layout.qHyperCube;
              var noOfLeftDims = hyperCube.qNoOfLeftDims;
              var dimInterColSortIdx = hyperCube.qEffectiveInterColumnSortOrder.indexOf(info.dimensionIdx);

              if (!methods.selectPivotCells) {
                methods.selectPivotCells = {
                  path: info.path,
                  cells: []
                };
              }

              if (b.id === primarySource || !primarySource) {
                var validValues = b.brush.values().map(function (s) {
                  return +s;
                }).filter(function (v) {
                  return !isNaN(v);
                });

                if ((noOfLeftDims === 0 || dimInterColSortIdx >= noOfLeftDims) && noOfLeftDims > -1) {
                  validValues.forEach(function (val) {
                    methods.selectPivotCells.cells.push({
                      qType: 'T',
                      qCol: val,
                      qRow: dimInterColSortIdx - noOfLeftDims
                    });
                  });
                } else {
                  validValues.forEach(function (val) {
                    methods.selectPivotCells.cells.push({
                      qType: 'L',
                      qCol: info.dimensionIdx,
                      qRow: val
                    });
                  });
                }

                hasValues = !!methods.selectPivotCells.cells.length;
              }
            } else {
              if (!methods.selectHyperCubeCells) {
                methods.selectHyperCubeCells = {
                  path: info.path,
                  cols: []
                };
              }

              methods.selectHyperCubeCells.cols.push(info.dimensionIdx);

              if (b.id === primarySource || !primarySource && !methods.selectHyperCubeCells.values) {
                methods.selectHyperCubeCells.values = b.brush.values().map(function (s) {
                  return +s;
                }).filter(function (v) {
                  return !isNaN(v);
                });
                hasValues = !!methods.selectHyperCubeCells.values.length;
              }
            }
          } else {
            var values = b.brush.values().map(function (s) {
              return +s;
            }).filter(function (v) {
              return !isNaN(v);
            });
            hasValues = !!values.length;
            selections.push({
              params: [info.path, info.dimensionIdx, values, false],
              method: 'selectHyperCubeValues'
            });
          }
        }
      }
    });

    if (!hasValues && isActive) {
      return [{
        method: 'resetMadeSelections',
        params: []
      }];
    }

    if (methods.rangeSelectHyperCubeValues) {
      var _opts$orMode;

      selections.push({
        method: 'rangeSelectHyperCubeValues',
        params: [methods.rangeSelectHyperCubeValues.path, methods.rangeSelectHyperCubeValues.ranges, [], (_opts$orMode = opts.orMode) !== null && _opts$orMode !== void 0 ? _opts$orMode : true]
      });
    }

    if (methods.selectHyperCubeContinuousRange) {
      selections.push({
        method: 'selectHyperCubeContinuousRange',
        params: [methods.selectHyperCubeContinuousRange.path, methods.selectHyperCubeContinuousRange.ranges]
      });
    }

    if (methods.selectHyperCubeCells) {
      selections.push({
        method: 'selectHyperCubeCells',
        params: [methods.selectHyperCubeCells.path, methods.selectHyperCubeCells.values, methods.selectHyperCubeCells.cols]
      });
    }

    if (methods.selectPivotCells) {
      selections.push({
        method: 'selectPivotCells',
        params: [methods.selectPivotCells.path, methods.selectPivotCells.cells]
      });
    }

    if (methods.multiRangeSelectTreeDataValues) {
      selections.push({
        method: 'multiRangeSelectTreeDataValues',
        params: [methods.multiRangeSelectTreeDataValues.path, methods.multiRangeSelectTreeDataValues.ranges]
      });
    }

    return selections;
  }

  function initialize(picasso) {
    q.util = picasso.data('matrix').util;
    picasso.data('q', q);
    picasso.formatter('q-number', formatter$1);
    picasso.formatter('q-time', formatter);
  }
  initialize.qBrushHelper = qBrush; // deprecated

  initialize.selections = qBrush;

  return initialize;

})));
//# sourceMappingURL=picasso-q.js.map
