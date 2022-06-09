import { ChangeEvent, useState, useEffect, useRef } from 'react';
import './App.scss';

//custom Hook
function usePrevious(value: number) {
  const ref = useRef<number>(0);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

const Counter = () => {
  const [count, setCount] = useState(0);

  const inc = (count: number) => count + 1;
  const dec = (count: number) => count - 1;
  const changeCount = (event: ChangeEvent<HTMLInputElement>) => {
    setCount(+event.target.value);
  };

  const prevCount = usePrevious(count);

  useEffect(() => {
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

const App = () => <Counter />;

export default App;
