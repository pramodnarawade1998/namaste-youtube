import { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

function Demo() {
  const [num, setNum] = useState(1);
  const [isDark, setIsDark] = useState(false);
  // console.log(`Rendering...`);

  // Heavy Operation
  // const prime = findPrime(num);
  const prime = useMemo(() => findPrime(num));

  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black " +
        (isDark && "bg-gray-900 text-white")
      }
    >
      <div>
        <button
          className="m-10 p-2 bg-green-200"
          onClick={() => setIsDark(!isDark)}
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          className="border border-black w-72 px-2"
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
      </div>
      <div>
        <h1 className="mt-4 font-bold text-xl">nth Prime: {prime}</h1>
      </div>
    </div>
  );
}

export default Demo;
