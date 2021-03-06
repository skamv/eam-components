'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Checkbox = require('@material-ui/core/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _FormControlLabel = require('@material-ui/core/FormControlLabel');

var _FormControlLabel2 = _interopRequireDefault(_FormControlLabel);

var _EAMBaseInput2 = require('./EAMBaseInput');

var _EAMBaseInput3 = _interopRequireDefault(_EAMBaseInput2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var checkBoxStyle = {
    width: '50%',
    fontSize: '14px',
    float: 'left',
    boxSizing: 'border-box',
    display: 'block'
};

var EAMCheckbox = function (_EAMBaseInput) {
    _inherits(EAMCheckbox, _EAMBaseInput);

    function EAMCheckbox() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, EAMCheckbox);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EAMCheckbox.__proto__ || Object.getPrototypeOf(EAMCheckbox)).call.apply(_ref, [this].concat(args))), _this), _this.init = function (props) {
            var checkedTextValue = props.value || '';
            _this.setValue(checkedTextValue.toLowerCase() === true.toString(), false);
        }, _this.handleChange = function (event, checked) {
            _this.onChangeHandler(checked.toString());
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(EAMCheckbox, [{
        key: 'renderComponent',
        value: function renderComponent() {
            var elementInfo = this.props.elementInfo;

            return _react2.default.createElement(
                'div',
                { style: checkBoxStyle },
                _react2.default.createElement(_FormControlLabel2.default, {
                    label: elementInfo && elementInfo.text,
                    control: _react2.default.createElement(_Checkbox2.default, {
                        color: 'primary',
                        checked: this.state.value,
                        value: this.props.value || '',
                        onChange: this.handleChange,
                        disabled: elementInfo && elementInfo.readonly
                    })
                })
            );
        }
    }]);

    return EAMCheckbox;
}(_EAMBaseInput3.default);

exports.default = EAMCheckbox;