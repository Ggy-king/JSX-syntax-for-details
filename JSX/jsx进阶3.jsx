// 3、注意事项
// (1)使用JSX时要引入React库
// 前面已经解释过了，JSX是React.createElement方法的语法糖，因此在使用JSX的作用域中必须引入React库。

// 如果你使用了JS打包工具，你可以在文件的头部作如下引用：
import React from 'react';

// 或者你不使用打包工具，也可以直接通过script标签引入React，比如：
//本地

{/* <script src="./react.js"></script> */}

//或者BootCDN
{/* <script src="http://cdn.bootcss.com/react/15.4.0/react.js"></script> */ }

// (2)注意引入JSX中用到的自定义组件
// JSX中用到的组件可能并不会在JavaScript中直接引用到，但自定义组件本质上就是一个JS对象，你在JSX中使用的时候，需要首先将该组件引入到当前作用域：
import MyComponent from './MyComponent.js'

...

<Outer>
    <MyComponent />
</Outer>


// (3)自定义组件首字母一定要大写
// JSX中小写字母开头的element代表HTML固有组件如div，span，p，ul等。用户自定义组件首字母一定要大写如 < Header >、<Picker>。

// (4)元素标签名不能使用表达式
// 下面的代码将产生错误：
const components = {
    photo: PhotoStory,
    video: VideoStory
};

function Story(props) {
    // Wrong! JSX标签名不能使用表达式
    return <components[props.storyType] story = { props.story } />;
}

// 如果你需要使用一个表达式来决定元素标签，你应该先将该表达式的值赋给一个大写字母开头的变量：
const components1 = {
    photo: PhotoStory,
    video: VideoStory
};

function Story1(props) {
    // Correct! JSX type can be a capitalized variable.
    const SpecificStory = components[props.storyType];
    return <SpecificStory story={props.story} />;
}

// (5)设置style属性

// 在设置标签style属性的时候，要注意，我们是将一个描述style的对象以JavaScipt表达式的形式传入。因此应该有2层大括号：
<div style={{ color: 'red', margin: '10px auto' }}></div>