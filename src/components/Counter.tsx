import useCounter from "../hooks/useCounter";

const Counter = () => {
  const {counter, increment} = useCounter(5);
  return (
    <div className="flex flex-col justify-center m-5">
      <h3 data-testid="counter-value" className="text-center font-bold text-3xl">{counter}</h3>
      <button
        onClick={increment}
        className="text-white mt-3 p-3 bg-slate-600 rounded-lg hover:opacity-90"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
