// 2、JSX中的Children
// React组件中有一个特殊的prop–props.children。它指代了JSX表达式中开闭标签中包含的内容。

// 下面讨论的是几种指定JSX的children的方法：

// (1)使用字符串字面量
// 你可以直接在JSX的开闭标签中写入字符串字面量，组件得到的props.children就是该字符串值。

// 以下面的代码为例：
<MyComponent>Hello world!</MyComponent>

// MyComponent的props.chilren将获得”Hello World!”字符串。通过该方式传入的字符串是未经HTML转义的。实际上你只需要像在HTML标签中写入文本那样就可以了。例如你想在一对 < p > 标签中写入文本”<script></script>”，HTML和JSX写法是一样的，就像下面这样：
<p>&#60;script&#62;&#60;/script&#62;</p>

/*
另外需要注意的是：

JXS会自动删除一行中开头和结尾处的空白符；JSX会自动删除空行；
JSX会删除紧邻标签的换行；JSX会删除字符串中的换行；字符串中的换行会被转换成一个空格。
 */

// 下面代码等价
    /*
<div>Hello World</div>

<div> Hello World   </div>

<div>
  Hello World
</div>

<div>
  Hello
  World
</div>

<div>

  Hello World
</div>
 */

// (2)JSX元素作为children
// 我们同样可以使用JSX元素作为JSX的children，由此生成嵌套组件：
<MyContainer>
  <MyFirstComponent />
  <MySecondComponent />
</MyContainer>

//我们也可以混合使用字符串字面量和JSX作为children：
<El>
  Here is a list:
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
</El>

// 可以看到数组的第一个元素就是字符串“Here is a list:”，第二个元素是一个对象（JSX代表JavaScript对象）。

// (3)JavaScript表达式
// 和prop一样，你也可以将任何有效的JavaScript表达式作为children传入，将它放在{ } 中就可以了。像下面这样：
<MyComponent>{'foo'}</MyComponent>

// 这里传入了一个常量表达式。

// 下面使用一个函数调用表达式来生成一个list作为children：
function Item(props) {
    return <li>{props.message}</li>;
}

function TodoList() {
    const todos = ['finish doc', 'submit pr', 'nag dan to review'];
    return (
        <ul>
            {todos.map((message) => <Item key={message} message={message} />)}
        </ul>
    );
}

// 当然你也可以在一个字符串children中插入一个JavaScript表达式来生成一个“模板”：
function Hello(props) {
    return <div>Hello {props.username}!</div>;
}

// (4)函数children

// 首先说明，这不是一种常见的用法。

// 实际上，传入自定义组件的children并没有严格的限制，只要在React需要render的时候能将它们转换成可以render的东西就行了。

// 下面是一个函数children的例子：
function ListOfTenThings() {
    return (
        <Repeat numTimes={10}>
            {(index) => <div key={index}>This is item {index} in the list</div>}
        </Repeat>
    );
}

// Calls the children callback numTimes to produce a repeated component
function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
        items.push(props.children(i));
    }
    return <div>{items}</div>;
}
// 实际上，我们更通常的情况下是将(index) => <div key={index}>This is item {index} in the list</div>作为一个prop传入子组件。这个例子只是作为一种理解上的扩展。

// (5)有关布尔值、Null以及Undefined
// 布尔值，Null以及Undefined可以作为有效的children，但他们不会被render，下面的JSX表达式都会render一个空的div标签：
<div />

<div></div>

<div>{false}</div>

<div>{null}</div>

<div>{true}</div>

// 关于此有一个有趣的应用，在条件render中，下面的 < Header /> 只有在show为true时才会render：
<div>
  {showHeader && <Header />}
  <Content />
</div>

