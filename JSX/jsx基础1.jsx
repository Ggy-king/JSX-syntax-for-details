// 1、JSX是什么
// JSX是一种像下面这样的语法：  react
const element = <h1>Hello, world!</h1>;

/*它是一种JavaScript语法扩展，在React中可以方便地用来描述UI。*/

/*
本质上，JSX为我们提供了创建React元素方法
（React.createElement(component, props, ...children)）
的语法糖（syntactic sugar）。上面的代码实质上等价于：

*/

var element2 = React.createElement(
    "h1",
    null,
    "Hello, world!"
);

// 2、JSX代表JS对象

// JSX本身也是一个表达式，在编译后，JSX表达式会变成普通的JavaScript对象。

// 你可以在if语句或for循环中使用JSX，你可以将它赋值给变量，你可以将它作为参数接收，你也可以在函数中返回JSX。

function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

// babel编译后

function test(user) {
    if (user) {
        return React.createElement(
            "h1",
            null,
            "Hello, ",
            formatStr(user),
            "!"
        );
    }
    return React.createElement(
        "h1",
        null,
        "Hello, Stranger."
    );
}
