"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
require("@babel/core").transform("code", {
  presets: ["@babel/preset-env"]
});

// const wrapperA = document.querySelector(".wrapperA");
// const wrapperB = document.querySelector(".wrapperB");
// const ul = wrapperB.querySelector("ul");

// const numList = [1, 2, 3, 4, 5];
// const newNumList = numList.map((num) => num * 3);
// const str1 = newNumList.join(" ");

// const p1 = document.createElement("p");
// p1.innerText = str1;
// wrapperA.append(p1);

// const strList = ["One", "Two", "Three", "Four", "Five"];
// const newStrList = strList.filter((item) => item.startsWith("T"));
// const str2 = newStrList.join(" ");

// const p2 = document.createElement("p");
// p2.innerText = str2;
// wrapperA.append(p2);

// /////////////////////////////////////////////////////////////////////////////////
// // Template Literals
// const frag = new DocumentFragment();
// strList.forEach((item) => {
//   const li = document.createElement("li");
//   li.innerText = item;
//   frag.appendChild(li);
// });
// ul.append(frag);

// const print = (item) => console.log(item);
// print`Hello World!`;

// const createTag = (tag) => {
//   const el = document.createElement(tag);
//   el.innerText = "Appended!";
//   return (args) => {
//     const style = args[0];
//     el.style = style;
//     return el;
//   };
// };

// const el1 = createTag("h3")`background-color:tomato;`;
// const el2 = createTag("p")`background-color:teal; font-weight:bold;`;
// wrapperA.append(el1);
// wrapperA.append(el2);

// /////////////////////////////////////////////////////////////////////////////////
// // Array
// const divCollection1 = wrapperA.querySelectorAll(".nothing"); // return nodelist
// const divCollection2 = wrapperA.getElementsByClassName("nothing"); // return HTMLCollection
// console.log(divCollection1);
// console.log(divCollection2);
// divCollection1.forEach(() => console.log("Method: foreach"));
var _count = /*#__PURE__*/new WeakMap();
var Counter = /*#__PURE__*/function () {
  function Counter() {
    _classCallCheck(this, Counter);
    _classPrivateFieldInitSpec(this, _count, {
      writable: true,
      value: 0
    });
  }
  _createClass(Counter, [{
    key: "get",
    get: function get() {
      return _classPrivateFieldGet(this, _count);
    }
  }, {
    key: "plus",
    value: function plus() {
      var _this$count, _this$count2;
      _classPrivateFieldSet(this, _count, (_this$count = _classPrivateFieldGet(this, _count), _this$count2 = _this$count++, _this$count)), _this$count2;
    }
  }]);
  return Counter;
}();
var c = new Counter();
c.plus();
c.plus();
c.plus();
c.plus();
c.plus();
console.log(c.get);