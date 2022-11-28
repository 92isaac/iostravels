import React, { useEffect, useRef, useState } from "react";


const Lemuella = () => {
  const [result, setResult] = useState("");
  const inputRef = useRef();
  const [focus, setFocus] = useState(false);
  const [error, setError] = useState(false);

  useEffect(()=>{
    inputRef.current.focus();
    setFocus(false)
    setError(false);
  }, [])




  useEffect(() => {
    if (result.length >= 5) {
        setError(false);
      }
    if (result.length > 0 && result.length < 5) {
      setError(true);
    }
  }, [result.length]);

  console.log(error)

  return (
    <div className=" pt-48 w-full h-72 ">
      <p className={error ? "text-red-500 text-lg" : 'hidden' }>{result.length > 0 && result.length < 5 ? `you typed ${result.length} characters, you have ${5 - result.length} left` : null}
      </p>

      <form className="flex flex-col w-56 mx-auto  h-56   ">
        <label className="mr-4 ">
          <b>Username</b>
        </label>
        <input
          autoComplete="off"
          className={error ? "border-2 border-red-700  w-72 h-10 pl-4 outline-none" : "border-2 border-green-700  w-72 h-10 pl-4 outline-none"}
          type="text"
          placeholder="Enter Username"
        
          name="name"
          onChange={(e) => {
            setResult(e.target.value);
            console.log(result);
            
          }}
          ref={inputRef}
          onFocus={() => {
            setFocus(false);
            setError(true)
            console.log(inputRef)
            console.log(`${focus}: this is focus`);
          }}
          onBlur={() => {
            setFocus(true);
            console.log(`${focus}: this is blur`);
          }}
        />
      </form>
    </div>
  );
};

export default Lemuella;