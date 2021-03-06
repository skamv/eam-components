'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('@material-ui/core/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _EAMGridFilterTypeMenu = require('./EAMGridFilterTypeMenu');

var _EAMGridFilterTypeMenu2 = _interopRequireDefault(_EAMGridFilterTypeMenu);

var _index = require('@material-ui/core/styles/index');

var _materialUiPickers = require('material-ui-pickers');

var _dateFns = require('@date-io/date-fns');

var _dateFns2 = _interopRequireDefault(_dateFns);

var _core = require('@material-ui/core');

var _dateFns3 = require('date-fns');

var _EAMGridFilterInput = require('./EAMGridFilterInput');

var _EAMGridFilterInput2 = _interopRequireDefault(_EAMGridFilterInput);

var _Constants = require('../../../../../../enums/Constants');

var _Constants2 = _interopRequireDefault(_Constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
    return _extends({}, theme, {
        filterCell: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 5,
            marginRight: 5
        },

        filterInput: {
            width: "100%",
            backgroundColor: "#FFFFFF"
        },
        filterInnerInput: {
            fontSize: '10px'
        },
        input: {
            backgroundColor: 'red'
        }
    });
};

/**
 * Data grid filter, with:
 *  - a select to choose which kind of filter (DataGridFilterTypeMenu component)
 *  - an input text to choose the actual value with which we want to filter
 */

var DataGridTableFilter = function (_Component) {
    _inherits(DataGridTableFilter, _Component);

    function DataGridTableFilter(props) {
        _classCallCheck(this, DataGridTableFilter);

        var _this = _possibleConstructorReturn(this, (DataGridTableFilter.__proto__ || Object.getPrototypeOf(DataGridTableFilter)).call(this, props));

        _this._handleChangeValue = function (event) {
            _this.setState({
                filterValue: event.target.value
            });

            _this.props.setFilter({
                fieldName: _this.props.filter.fieldName,
                fieldValue: event.target.value
            }, _this.props.dataType);
        };

        _this._handleChangeDate = function (date) {
            _this.setState({
                filterValue: date ? date : null
            });
            _this.props.setFilter({
                fieldName: _this.props.filter.fieldName,
                fieldValue: _this._readDate(date)
            }, _this.props.dataType);
        };

        _this._handleChangeDateTime = function (date) {
            _this.setState({
                filterValue: date ? date : null
            });
            _this.props.setFilter({
                fieldName: _this.props.filter.fieldName,
                fieldValue: _this._readDateTime(date)
            }, _this.props.dataType);
        };

        _this._handleKeyPress = function (event) {
            if (event.key === 'Enter') {
                _this.props.runSearch();
            }
        };

        _this._readDate = function (date) {
            return date ? (0, _dateFns3.format)(date, _Constants2.default.DATE_FORMAT_VALUE) : '';
        };

        _this._readDateTime = function (date) {
            return date ? (0, _dateFns3.format)(date, _Constants2.default.DATETIME_FORMAT_VALUE) : '';
        };

        _this.state = {
            filterValue: props.filter.fieldValue,
            inputDisabled: false
        };
        return _this;
    }

    _createClass(DataGridTableFilter, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var filterValue = nextProps.filter && nextProps.filter.fieldValue || '';
            this.setState({ filterValue: filterValue });
        }
    }, {
        key: '_onChange',
        value: function _onChange(option) {
            // Disable input text depending on filter operator chosen
            var disableInput = option.operator === 'IS_EMPTY' || option.operator === 'NOT_EMPTY';
            this.setState({
                inputDisabled: disableInput
            });
            this.props.setFilter(option);
        }
    }, {
        key: 'render',
        value: function render() {
            var classes = this.props.classes;
            var filterValue = this.state.filterValue;


            return _react2.default.createElement(
                'div',
                { className: classes.filterCell },
                _react2.default.createElement(_EAMGridFilterTypeMenu2.default, {
                    filter: this.props.filter,
                    onChange: this._onChange.bind(this),
                    dataType: this.props.dataType
                }),
                this.props.dataType && (this.props.dataType === 'VARCHAR' || this.props.dataType === 'MIXVARCHAR' || this.props.dataType === 'DECIMAL' || this.props.dataType === 'NUMBER' || this.props.dataType === 'DATETIME' || this.props.dataType === 'DATE') && _react2.default.createElement(_EAMGridFilterInput2.default, {
                    disabled: this.state.inputDisabled,
                    width: this.props.width,
                    value: filterValue,
                    onChange: this._handleChangeValue,
                    onKeyPress: this._handleKeyPress,
                    dataType: this.props.dataType
                })
            );
        }
    }]);

    return DataGridTableFilter;
}(_react.Component);

exports.default = (0, _index.withStyles)(styles)(DataGridTableFilter);