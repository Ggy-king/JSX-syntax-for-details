// 在JSX中使用JavaScript表达式

// 在JSX中插入JavaScript表达式十分简单，直接在JSX中将JS表达式用大括号括起来即可

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};
// js

const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);
// jsx


ReactDOM.render(
    element,
    document.getElementById('root')
);

// 上面的代码中用到了函数调用表达式fromatName(user)。

// 在JavaScript中，表达式就是一个短语，Javascript解释器会将其计算出一个结果，常量就是最简单的一类表达式。常用的表达式有：

/**
 变量名；
函数定义表达式；
属性访问表达式；
函数调用表达式；
算数表达式；
关系表达式；
逻辑表达式；
 */

// 需要注意的是，if语句以及for循环不是JavaScript表达式，不能直接作为表达式写在{ } 中，但可以先将其赋值给一个变量（变量是一个JavaScript表达式）

function NumberDescriber(props) {
    let description;
    if (props.number % 2 == 0) {
        description = <strong>even</strong>;
    } else {
        description = <i>odd</i>;
    }
    return <div>{props.number} is an {description} number</div>;
}