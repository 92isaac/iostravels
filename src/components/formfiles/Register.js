import React, { useEffect, useRef, useState } from "react";

const Register = () => {
  const inputRef = useRef();
  const errRef = useRef();
  const [input, setInput] = useState("");
  const [errMsg, setErrMsg] = useState(false);
  const [inputFocus, setInputFocus] = useState(false);
  const nameLength = input.length < 4;
  const [validate, setValidate] = useState(null)

  useEffect(()=>{
    inputRef.current.focus()
  }, [input])

  useEffect(()=>{
    // const result = nameLength.test(input)
    if(input.length < nameLength){
        setErrMsg(true)
    }

    if(input.length > nameLength){
        setErrMsg(false)
    }
  }, [input, nameLength])
  return (
    <div>
      <p ref={errRef} className={errMsg ? "errmsg" : "displayNone"}>
        Required
      </p>
      <input
        className={errMsg ? 'inputRed' : "inputGreen"}
        type="text"
        ref={inputRef}
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
      />
      <button>Click</button>
    </div>
  );
};

export default Register;
