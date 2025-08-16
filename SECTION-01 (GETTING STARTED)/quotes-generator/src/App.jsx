import { useEffect, useState } from "react";
import "./App.css";
import { FaDiceFive } from "react-icons/fa";
function App() {
  const [advice, setAdvice] = useState({ id: "", advice: "" });
  const [count, setCount] = useState(0);
  async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip);
    setCount((c) => c + 1);
  }
  useEffect(function () {
    getAdvice();
  }, []);

  return (
    <>
      <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-purple-50">
        <section className=" w-[90%] md:w-[40%] h-[60%] md:h-[55%] bg-white shadow-2xl rounded-2xl  md:p-8 text-center">
          <p className=" text-sm uppercase text-violet-600 tracking-wider font-bold">
            Advice #{advice.id}
          </p>
          <h1 className=" text-2xl font-light leading-relaxed text-gray-800 mt-6 mb-8">
            "{advice.advice}"
          </h1>
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-purple-400 flex-1 max-w-32"></div>
            <div className="mx-4">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            </div>
            <div className="h-px bg-purple-400 flex-1 max-w-32"></div>
          </div>
          <Counter count={count} />
          <button
            onClick={getAdvice}
            className="p-3 rounded-2xl mb-8 bg-violet-400 cursor-pointer"
          >
            <FaDiceFive className="w-8 h-8 text-gray-100 hover:text-gray-200 transition" />
          </button>
        </section>
      </div>
    </>
  );
}
function Counter({ count }) {
  return (
    <div className="text-sm mb-5 text-gray-800 font-medium">
      <p> Count: {count}</p>
    </div>
  );
}

export default App;
