import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="flex flex-col justify-center m-5">
      <h3 data-testid="counter-value" className="text-center font-bold text-3xl">{count}</h3>
      <button
        onClick={() => setCount((prev: number) => prev + 1)}
        className="text-white mt-3 p-3 bg-slate-600 rounded-lg hover:opacity-90"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
