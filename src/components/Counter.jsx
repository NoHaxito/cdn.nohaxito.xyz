import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  const add = () => setCount((i) => i + 1);
  const subtract = () => setCount((i) => i - 1);

  return (
    <>
      <div className="select-none">
        <button onClick={subtract} className="rounded-md px-1 py-1 bg-red-500">
          Remove
        </button>
        <pre>{count}</pre>
        <button onClick={add} className="rounded-md px-1 py-1 bg-green-500">
          Add
        </button>
      </div>
    </>
  );
}
