// 1、JSX中的props

// 指定JSX中的props有以下几种方式：

// (1)使用JavaScript表达式
// 任何有效的JavaScript表达式都可以作为prop的值，使用的时候将该表达式放在一对大括号中即可：
<MyComponent foo={1 + 2 + 3 + 4} />

<YourComponent clickTodo={(id) => this.props.handleClick(id)} />

// (2)使用字符串字面量
// 字符串字面量可以作为prop值，下面的代码是等价的：
<MyComponent message="hello world" />

<MyComponent message={'hello world'} />

// (3)使用扩展运算符

// 如果你想将一个prop对象传入JSX，你可以使用扩展运算符...直接将整个prop对象传入。下面的2个组件是等价的
function App1() {
    return <Greeting firstName="Ben" lastName="Hector" />;
}

function App2() {
    const props = { firstName: 'Ben', lastName: 'Hector' };
    return <Greeting {...props} />;
}

// 扩展运算符是一个es6特性。是一种传递属性的十分便利的方式。但请注意不要滥用该运算符，注意不要将一大堆毫不相关的prop一股脑全部传入下面的组件中。

