// JSX属性值

//你可以使用引号将字符串字面量指定为属性值：
const element = <div tabIndex="0"></div>; /*注意这里的”0”是一个字符串字面量。*/



// 或者你可以将一个JavaScript表达式嵌在一个大括号中作为属性值：
const element2 = <img src={user.avatarUrl}></img>;

// 这里用到的是JavaScript属性访问表达式，上面的代码将编译为：
const element21 = React.createElement("img", { src: user.avatarUrl });


// 5、JSX的Children

// 首先JSX可以是一个不包含Children的empty tag。如：
const element3 = <img src={user.avatarUrl} />;

// JSX也可以像HTML标签一样包含Children：
const element31 = (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
    </div>
);

// 这种写法在生成React元素的时候给我们带来了很大的便利，而且能够更加直观地描述UI。不然我们需要像下面这样创建和上面代码等价的React元素：
const element32 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Hello!"
    ),
    React.createElement(
        "h2",
        null,
        "Good to see you here."
    )
);

// tip: React DOM结点使用骆驼拼写法给属性命名

// 例如：class在JSX中应写作className，tabindex应写作tabIndex。

// 另外关于JSX的children需要注意的是

// React自定义组件的chilren是不会像固有的HTML标签的子元素那样自动render的，我们看下面的例子：
class Test extends React.Component {
    render() {
        return (
            <div>
                Here is a list:
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                </ul>
            </div>
        )
    }
};
ReactDOM.render(
    <Test />,
    document.getElementById('test')
);

// 以上代码定义的组件中都是build - in组件，类似div、p、ul、li等。它们中的子元素会直接render出来，像下面这样：
// 略
// 但是如果你使用用户定义组件，比如：
class Test extends React.Component {
    render() {
        return (
            <Em>
                Here is a list:
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                </ul>
            </Em>
        )
    }
};

class Em extends React.Component {
    render() {
        return (<div></div>);
    }
}

ReactDOM.render(
    <Test />,
    document.getElementById('test')
);
// 并不能得到跟上面代码1一样的结果，我们得到的只是一个空的div标签

// 如果你想得到和代码1一样的结果，需要显示地指定props.children，像下面这样：
class Test extends React.Component {
    render() {
        return (
            <Em>
                Here is a list:
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                </ul>
            </Em>
        )
    }
};

class Em extends React.Component {
    render() {
        return (<div>{this.props.children}</div>);
    }
}

ReactDOM.render(
    <Test />,
    document.getElementById('test')
);