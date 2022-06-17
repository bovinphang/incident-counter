import { ChangeEvent, Component } from 'react';
import './App.scss';

type CounterProps = {
    incident: string;
};

type CounterState = {
    count: number;
    hasError?: boolean;
};

interface ErrorInfo {
    /**
     * Captures which component contained the exception, and its ancestors.
     */
    componentStack: string;
}

class Counter extends Component<CounterProps, CounterState> {
    // 生命周期(按照它们被调用的顺序):
    // 1. 在 React 组件挂载之前，会调用它的构造函数。如果不初始化 state 或不进行方法绑定，则不需要为 React 组件实现构造函数。
    constructor(props: CounterProps) {
        console.log('1. constructor');
        super(props);
        this.state = { count: 0, hasError: false };
    }

    /*    
    // state的另一种初始化方法
    state: CounterState = {
        count: 0
    }; 
    */

    // 2. 在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。此方法适用于罕见的用例。【不常用的生命周期】
    static getDerivedStateFromProps(props: CounterProps, state: CounterState) {
        console.log('2. getDerivedStateFromProps');
        return null;
    }

    // 3. 根据 shouldComponentUpdate() 的返回值，判断 React 组件的输出是否受当前 state 或 props 更改的影响。默认行为是 state 每次发生变化组件都会重新渲染。【不常用的生命周期】
    shouldComponentUpdate(nextProps: CounterProps, nextState: CounterState) {
        console.log('3. shouldComponentUpdate');
        return true;
    }

    increment = () => this.setState(({ count }) => ({ count: count + 1 })); // 递增
    decrement = () => this.setState(({ count }) => ({ count: count - 1 })); // 递减
    reset = () => this.setState({ count: 0 }); // 重置
    changeCount = (event: ChangeEvent<HTMLInputElement>) =>
        this.setState({ count: +event.target.value });

    // 4. 在组件挂载开始之前或props 和 state改变时被调用。如果 shouldComponentUpdate() 返回 false，则不会调用 render()。
    render() {
        console.log('4. render');
        const { incident } = this.props;
        const { count } = this.state;

        return (
            <main className="Counter">
                <h1>Days Since Last {incident}</h1>
                <p className="count">{count}</p>
                <section className="controls">
                    <button onClick={this.increment}>Increment</button>
                    <button onClick={this.reset}>Reset</button>
                    <button onClick={this.decrement}>Decrement</button>
                </section>
                <section className="controls">
                    <form
                        onSubmit={(event) => {
                            event.preventDefault();
                        }}
                    >
                        <label htmlFor="set-to">Set Count</label>
                        {/* 输入框改变(单向数据流) */}
                        <input
                            id="set-to"
                            type="number"
                            value={count}
                            onChange={this.changeCount}
                        />
                    </form>
                </section>
            </main>
        );
    }

    // 5. 在组件挂载后（插入 DOM 树中）立即调用。依赖于 DOM 节点的初始化应该放在这里。如需通过网络请求获取数据，此处是实例化请求的好地方。
    componentDidMount(): void {
        console.log('5. componentDidMount');
    }

    // 6. 在最近一次渲染输出（提交到 DOM 节点）之前调用。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。此生命周期方法的任何返回值将作为参数传递给 componentDidUpdate()。应返回 snapshot 的值（或 null）。【不常用的生命周期】
    getSnapshotBeforeUpdate(prevProps: CounterProps, prevState: CounterState) {
        console.log('6. getSnapshotBeforeUpdate');
        return null;
    }

    // 7. 在状态更新后会被立即调用。首次渲染不会执行此方法。
    componentDidUpdate(
        prevProps: CounterProps,
        prevState: CounterState,
        snapshot: any
    ): void {
        console.log('7. componentDidUpdate');
    }

    // 8. 在组件卸载及销毁之前直接调用。在此方法中执行必要的清理操作，例如，清除 timer，取消网络请求或清除在 componentDidMount() 中创建的订阅等。
    componentWillUnmount(): void {
        console.log('8. componentWillUnmount');
    }

    // 9. 此生命周期会在后代组件抛出错误后被调用。 它将抛出的错误作为参数，并返回一个值以更新 state
    static getDerivedStateFromError(error: Error) {
        console.log('9. getDerivedStateFromError');
        // 更新 state 使下一次渲染可以显降级 UI
        return { hasError: true };
    }

    // 10. 此生命周期在后代组件抛出错误后被调用。它接收两个参数：
    // 1) error —— 抛出的错误。
    // 2) info —— 带有 componentStack key 的对象，其中包含有关组件引发错误的栈信息。
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log('10. componentDidCatch');
    }
}

class App extends Component {
    render() {
        return <Counter incident={'Incident'} />;
    }
}

export default App;
