"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./dropdown.css");

var _react = require("react");

var _jsxRuntime = require("react/jsx-runtime");

function Dropdown(props) {
  (0, _react.useEffect)(function () {
    props.getValue(props.data[0]);
  }, []);

  var sendDropdownValue = function sendDropdownValue(e) {
    props.getValue(e.target.value);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("select", {
    onChange: sendDropdownValue,
    className: "select-style",
    name: props.name,
    id: props.labelId,
    children: props.data.sort(function (a, b) {
      return a.localeCompare(b);
    }).map(function (el) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
        value: el,
        children: el
      }, el);
    })
  });
}

var _default = Dropdown;
exports.default = _default;