import { ChangeEvent, useState, useEffect, useRef } from 'react';
import './App.scss';

export interface Props {
    initial?: number;
}

//custom Hook
function usePrevious(value: number) {
    const ref = useRef<number>(0);
    useEffect(() => {
        ref.current = value;
    }, [value]);
    return ref.current;
}
const Counter: React.FC<Props> = ({ initial = 0 }: Props) => {
    const [count, setCount] = useState<number>(initial);

    const inc = (count: number): number => count + 1; // 递增
    const dec = (count: number): number => count - 1; // 递减
    // 输入框改变
    const changeCount = (event: ChangeEvent<HTMLInputElement>) => {
        setCount(+event.target.value);
    };

    const prevCount = usePrevious(count); // 获取旧的计数值

    useEffect(() => {
        // 监听计数状态变化并打印计数
        console.log('The old counter value is: ' + prevCount);
        console.log('The new counter value is: ' + count);
    }, [prevCount, count]);

    return (
        <main className="Counter">
            <h1>Days Since Last Incident</h1>
            <p className="count">{count}</p>
            <section className="controls">
                <button onClick={() => setCount(inc)}>Increment</button>
                <button onClick={() => setCount(0)}>Reset</button>
                <button onClick={() => setCount(dec)}>Decrement</button>
            </section>
            <section className="controls">
                <form onSubmit={() => {}}>
                    <label htmlFor="set-to">Set Count</label>
                    {/* 输入框改变(单向数据流) */}
                    <input
                        id="set-to"
                        type="number"
                        value={count}
                        onChange={changeCount}
                    />
                </form>
            </section>
        </main>
    );
};

const App = () => <Counter initial={0} />;

export default App;
