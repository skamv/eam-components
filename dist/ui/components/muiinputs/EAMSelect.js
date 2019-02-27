'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Select = require('./Select');

var _Select2 = _interopRequireDefault(_Select);

var _EAMBaseInput2 = require('./EAMBaseInput');

var _EAMBaseInput3 = _interopRequireDefault(_EAMBaseInput2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EAMSelect = function (_EAMBaseInput) {
    _inherits(EAMSelect, _EAMBaseInput);

    function EAMSelect() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, EAMSelect);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EAMSelect.__proto__ || Object.getPrototypeOf(EAMSelect)).call.apply(_ref, [this].concat(args))), _this), _this.init = function (props) {
            return _this.setValue(props.value || '');
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(EAMSelect, [{
        key: 'renderComponent',
        value: function renderComponent() {
            var _this2 = this;

            var _props$elementInfo = this.props.elementInfo,
                elementId = _props$elementInfo.elementId,
                text = _props$elementInfo.text,
                nullable = _props$elementInfo.nullable;


            return _react2.default.createElement(_Select2.default, {
                required: this.isRequired(),
                error: this.state.error,
                helperText: this.state.helperText,
                disabled: this.state.disabled || this.props.elementInfo.readonly,
                onChange: function onChange(value) {
                    return _this2.onChangeHandler(value);
                },
                value: this.props.value || '',
                values: this.props.values,
                label: text
            });
        }
    }]);

    return EAMSelect;
}(_EAMBaseInput3.default);

exports.default = EAMSelect;