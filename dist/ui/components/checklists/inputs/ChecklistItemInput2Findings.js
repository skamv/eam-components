'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Checkbox = require('@material-ui/core/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _FormControlLabel = require('@material-ui/core/FormControlLabel');

var _FormControlLabel2 = _interopRequireDefault(_FormControlLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChecklistItemInputFinding = function (_Component) {
    _inherits(ChecklistItemInputFinding, _Component);

    function ChecklistItemInputFinding() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ChecklistItemInputFinding);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ChecklistItemInputFinding.__proto__ || Object.getPrototypeOf(ChecklistItemInputFinding)).call.apply(_ref, [this].concat(args))), _this), _this.mainStyle = {
            flex: "0 0 170px",
            display: "flex",
            marginLeft: 10,
            flexWrap: "wrap",
            justifyContent: "space-between"
        }, _this.handleChange = function (value) {
            var currentValue = _this.props.checklistItem.finding;
            var checklistItem = _this.props.checklistItem;

            var finding1 = checklistItem.possibleFindings[0];
            var finding2 = checklistItem.possibleFindings[1];

            switch (currentValue) {
                case finding1.code:
                    value = value === finding1.code ? null : value;
                    break;
                case finding2.code:
                    value = value === finding2.code ? null : value;
                    break;
            }

            _this.props.onChange(_extends({}, _this.props.checklistItem, {
                finding: value
            }));
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ChecklistItemInputFinding, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var checklistItem = this.props.checklistItem;

            var finding1 = checklistItem.possibleFindings[0];
            var finding2 = checklistItem.possibleFindings[1];

            return _react2.default.createElement(
                'div',
                { style: this.mainStyle },
                _react2.default.createElement(_FormControlLabel2.default, {
                    control: _react2.default.createElement(_Checkbox2.default, {
                        color: 'primary',
                        checked: checklistItem.finding === finding1.code,
                        onChange: function onChange() {
                            return _this2.handleChange(finding1.code);
                        } }),
                    label: finding1.desc
                }),
                _react2.default.createElement(_FormControlLabel2.default, {
                    control: _react2.default.createElement(_Checkbox2.default, {
                        color: 'primary',
                        checked: checklistItem.finding === finding2.code,
                        onChange: function onChange() {
                            return _this2.handleChange(finding2.code);
                        } }),
                    label: finding2.desc
                })
            );
        }
    }]);

    return ChecklistItemInputFinding;
}(_react.Component);

exports.default = ChecklistItemInputFinding;