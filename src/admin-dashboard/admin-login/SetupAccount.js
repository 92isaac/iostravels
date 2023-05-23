import React, { useState, useRef, useEffect } from 'react'
import Logo from "../../assets/icons/logo.png";
import { FaCheck }  from 'react-icons/fa'



const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export const SetupAccount = () => {
  const userRef = useRef();
  const errRef = useRef();

  // const [user, setUser] = useState('');
  // const [validName, setValidName] = useState(false);
  // const [userFocus, setUserFocus] = useState(false);

  const [tempPassword, setTempPassword] = useState('');
  // const [validTempPassword, setValidTempassword] = useState(false);
  const [tempPwdFocus, setTempPwdFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
}, [])

// useEffect(()=>{
//   const result = USER_REGEX.test(user)
//   console.log(result)
//   console.log(user)
//   setValidName(result)
// }, [user])


useEffect(()=>{
  const result = PWD_REGEX.test(pwd);
  console.log(result)
  console.log(pwd)
  setValidPwd(result);
  const match = pwd === matchPwd
  setValidMatch(match)

}, [pwd, matchPwd])


useEffect(()=>{
  setErrMsg('');
}, [ pwd, matchPwd])

  return (
    <section className="h-screen grid grid-cols-3">
      <div className={`bg-[#171B4A] col-span-1 h-screen`}></div>
      <div className="col-span-2 bg-[#F4F6FA]">
        <div className="flex justify-end mr-16 pt-6">
          <img src={Logo} alt="" className="w-20" />
        </div>
        <div className=" text-[#171B4A] ml-20 mt-24 ">
          <h1 className="font-bold mb-1">Setup your account password</h1>
          <p className="text-xs font-bold">
          You’re almost done! Create a new password to secure your account
          </p>

          <form action="" className="mt-8">
            {/* temporary password */}
            <input
              type="password"
              id="temporary-password"
              className="border block mt-4 rounded w-2/5 px-4 py-1 placeholder:text-xs bd-white"
              placeholder="Temporary Password"
              ref={userRef}
              onChange={(e) => setTempPassword(e.target.value)}
              value={tempPassword}
              autoComplete='off'
              required
              // aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setTempPwdFocus(true)}
              onBlur={() => setTempPwdFocus(false)}
            />
            {/* new password */}
            <input
              type="password"
              id="password"
              className="border block mt-4 rounded w-2/5 px-4 py-1 placeholder:text-xs bd-white"
              placeholder="Password"

              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            
            <div className='text-xs mt-4'>
                <p className='leading-6'>< FaCheck className={validPwd ? "bg-[#A7B8BF] rounded-full p-1 mr-2 text-lg text-white inline" : "bg-red-400 rounded-full p-1 mr-2 text-lg text-white inline"}/> Must Contain One Capital Letter</p>
                <p className='leading-6'>< FaCheck className={validPwd ? "bg-[#A7B8BF] rounded-full p-1 mr-2 text-lg text-white inline" : "bg-red-400 rounded-full p-1 mr-2 text-lg text-white inline"}/> Must Contain Special Character (@$%*&^!)</p>
                <p className='leading-6'>< FaCheck className={validPwd ? "bg-[#A7B8BF] rounded-full p-1 mr-2 text-lg text-white inline" : "bg-red-400 rounded-full p-1 mr-2 text-lg text-white inline"}/> Must Contain A Number</p>
                <p className='leading-6'>< FaCheck className={validPwd ? "bg-[#A7B8BF] rounded-full p-1 mr-2 text-lg text-white inline" : "bg-red-400 rounded-full p-1 mr-2 text-lg text-white inline"}/> Must Be At Least 8 Characters In Length</p>
            </div>

            <input
              type="password"
              id="confirm-password"
              className="border block mt-4 rounded w-2/5 px-4 py-1 placeholder:text-xs bd-white"
              placeholder="Confirm Password"

              // onChange={(e) => setMatchPwd(e.target.value)}
              // value={matchPwd}
              // required
              // aria-invalid={validMatch ? "false" : "true"}
              // aria-describedby="confirmnote"
              // onFocus={() => setMatchFocus(true)}
              // onBlur={() => setMatchFocus(false)}
            />
              <p id="confirmnote" className={matchFocus && !validMatch ? "block" : "hidden"}>
                            Must match the first password input field.
                        </p>
            <div className="flex  gap-6 text-xs mt-5">
            <button className="bg-[#2E61E6] text-white text-xs rounded-full px-5 py-2 mt-8">Reset Password</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
