'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _EAMBaseInput2 = require('./EAMBaseInput');

var _EAMBaseInput3 = _interopRequireDefault(_EAMBaseInput2);

var _EAMTextField = require('./EAMTextField');

var _EAMTextField2 = _interopRequireDefault(_EAMTextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EAMInput = function (_EAMBaseInput) {
    _inherits(EAMInput, _EAMBaseInput);

    function EAMInput() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, EAMInput);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EAMInput.__proto__ || Object.getPrototypeOf(EAMInput)).call.apply(_ref, [this].concat(args))), _this), _this.init = function (props) {
            return _this.setValue(props.value || '');
        }, _this.onLoseFocus = function () {
            //TODO prep input (e.g. uppercase)
            _this.onChangeHandler(_this.state.value);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(EAMInput, [{
        key: 'renderComponent',
        value: function renderComponent() {
            var _this2 = this;

            var elementInfo = this.props.elementInfo;


            return _react2.default.createElement(_EAMTextField2.default, {
                disabled: this.state.disabled || elementInfo && elementInfo.readonly,
                error: this.state.error,
                helperText: this.state.helperText,
                required: this.isRequired(),
                label: elementInfo && elementInfo.text,
                value: this.state.value,
                onChange: function onChange(event) {
                    return _this2.setValue(event.target.value);
                },
                onBlur: this.onLoseFocus,
                InputLabelProps: { shrink: true } });
        }
    }]);

    return EAMInput;
}(_EAMBaseInput3.default);

exports.default = EAMInput;