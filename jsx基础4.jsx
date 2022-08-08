// 6、JSX可自动防范注入攻击

// 在JSX中嵌入接收到的内容是安全的，比如：
const danger = response.potentialDanger;

const ele = <h1>{title}</h1>

// 在默认情况下，React DOM会将所有嵌入JSX的值进行编码。这样可以有效避免xss攻击。

// 我们将以下代码编译后引入html:
class Test extends React.Component {
    render() {
        let v = "<script><\/script>";
        return (
            <div>
                <h1>{v}</h1>
            </div>
        )
    }
};

ReactDOM.render(
    <Test />,
    document.getElementById('test')
);