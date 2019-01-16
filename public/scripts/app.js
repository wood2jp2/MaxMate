'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function Header() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h3',
            null,
            'MaxMate'
        )
    );
};

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter() {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this));

        _this.state = {
            count: 0
        };
        _this.increment = _this.increment.bind(_this);
        _this.decrement = _this.decrement.bind(_this);
        _this.reset = _this.reset.bind(_this);

        return _this;
    }

    _createClass(Counter, [{
        key: 'increment',
        value: function increment() {
            var _this2 = this;

            this.setState(function (prevState) {
                return { count: prevState.count + 1 };
            }, function () {
                console.log(_this2.state.count);
            });
        }
    }, {
        key: 'decrement',
        value: function decrement() {
            this.setState(function (prevState) {
                return { count: prevState.count - 1 };
            });
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.setState(function () {
                return { count: 0 };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'p',
                    null,
                    'Count: ',
                    this.state.count
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: this.reset },
                    'Reset'
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: this.decrement },
                    'Decrement'
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: this.increment },
                    'Increment'
                )
            );
        }
    }]);

    return Counter;
}(_react2.default.Component);

var App = function App() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(Header, null),
        _react2.default.createElement(Counter, null)
    );
};

var root = document.getElementById('root');

_reactDom2.default.render(_react2.default.createElement(App, null), root);
