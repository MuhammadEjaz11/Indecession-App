"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecessionApp = function (_React$Component) {
    _inherits(IndecessionApp, _React$Component);

    function IndecessionApp(props) {
        _classCallCheck(this, IndecessionApp);

        var _this = _possibleConstructorReturn(this, (IndecessionApp.__proto__ || Object.getPrototypeOf(IndecessionApp)).call(this, props));

        _this.handlepick = _this.handlepick.bind(_this);
        _this.removeAll = _this.removeAll.bind(_this);
        _this.addoption = _this.addoption.bind(_this);
        _this.removeItem = _this.removeItem.bind(_this);
        _this.state = {
            options: []
        };
        return _this;
    }

    _createClass(IndecessionApp, [{
        key: "handlepick",
        value: function handlepick() {
            var number = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[number]);
        }
    }, {
        key: "removeAll",
        value: function removeAll() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: "addoption",
        value: function addoption(value) {
            if (this.state.options.indexOf(value) > -1) {
                return alert("This options is Already Exist");
            }
            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat([value])
                };
            });
        }
    }, {
        key: "removeItem",
        value: function removeItem(removeValue) {

            this.setState(function (prevState) {
                return {

                    options: prevState.options.filter(function (x) {
                        return removeValue !== x;
                    })
                };
            });
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            console.log("fetching");
            var json = localStorage.getItem("options");
            var option = JSON.parse(json);
            if (option) {

                this.setState(function () {
                    return {
                        options: option
                    };
                });
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(_prevProps, prevState) {
            console.log("update");
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem("options", json);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var title = "Indeccesion App";
            var subtitle = "Put Your Life in Hands of Computer";
            // const options = ["Option1","Option2","Option3"];


            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, { handPick: this.handlepick, option: this.state.options.length }),
                React.createElement(Options, { removeItem: this.removeItem, removeAll: this.removeAll, option: this.state.options }),
                React.createElement(Addoptions, { addoption: this.addoption })
            );
        }
    }]);

    return IndecessionApp;
}(React.Component);

// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         )
//     }
// }


var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        React.createElement(
            "h2",
            null,
            props.subtitle
        )
    );
};

// class Action extends React.Component {
//     // handlepick(){
//     //     alert("HandlePick")
//     // }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handPick} disabled={!this.props.option}>What Should I do?</button>
//             </div>
//         )
//     }
// }
var Action = function Action(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: props.handPick, disabled: !props.option },
            "What Should I do?"
        )
    );
};

// class Options extends React.Component {

//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.removeAll}>Remove All</button>
//                 <h3>Options are here</h3>
//                 <h3>{this.props.option.map((option)=>{return <p key={option}>{option}</p>})}</h3>
//                 <Option/>
//             </div>
//         )
//     }
// }
var Options = function Options(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: props.removeAll },
            "Remove All"
        ),
        React.createElement(
            "h3",
            null,
            "Options are here"
        ),
        React.createElement(
            "h3",
            null,
            props.option.map(function (option) {
                return React.createElement(
                    "p",
                    { key: option },
                    option,
                    " ",
                    React.createElement(
                        "button",
                        { onClick: function onClick(_e) {
                                props.removeItem(option);
                            } },
                        "Remove"
                    )
                );
            })
        ),
        React.createElement(Option, null)
    );
};
// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h3>Option component are here</h3>

//             </div>
//         )
//     }
// }
var Option = function Option() {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h3",
            null,
            "Option component are here"
        )
    );
};

var Addoptions = function (_React$Component2) {
    _inherits(Addoptions, _React$Component2);

    function Addoptions(props) {
        _classCallCheck(this, Addoptions);

        var _this2 = _possibleConstructorReturn(this, (Addoptions.__proto__ || Object.getPrototypeOf(Addoptions)).call(this, props));

        _this2.handleAddoption = _this2.handleAddoption.bind(_this2);

        return _this2;
    }

    _createClass(Addoptions, [{
        key: "handleAddoption",
        value: function handleAddoption(e) {
            e.preventDefault();
            var value = e.target.elements.options.value.trim();
            if (value) {
                this.props.addoption(value);
                e.target.elements.options.value = "";
            } else {
                alert("Please Enter the Valid Value");
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "form",
                    { action: "", onSubmit: this.handleAddoption },
                    React.createElement("input", { name: "options", type: "text", placeholder: "Add Your Options here " }),
                    " ",
                    React.createElement(
                        "button",
                        null,
                        "Add Option"
                    )
                )
            );
        }
    }]);

    return Addoptions;
}(React.Component);

var jsx = React.createElement("div", null);

ReactDOM.render(React.createElement(IndecessionApp, null), document.getElementById("app"));
