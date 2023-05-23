import React, { useState, useEffect } from "react";
import Logo from "../../assets/icons/logo.png";
import { Link, useNavigate } from "react-router-dom";

export const ResetPasswod = () => {

    const navigate = useNavigate();
    const [isWaiting, setIsWaiting] = useState(false);

    const handleClick =()=> {
        setIsWaiting(true);
      }

      useEffect(() => {
        let timeoutId;
    
        if (isWaiting) {
          timeoutId = setTimeout(() => {
            navigate('/email_successfully_sent');
          }, 5000);
        }
    
        return () => clearTimeout(timeoutId);
      }, [isWaiting, navigate]);

  return (
    <div className="h-screen grid grid-cols-3">
      <div className={`bg-[#171B4A] col-span-1 h-screen`}></div>
      <div className="col-span-2 bg-[#F4F6FA]">
        <div className="flex justify-end mr-16 pt-6">
          <img src={Logo} alt="" className="w-20" />
        </div>
        <div className=" text-[#171B4A] ml-20 mt-24 ">
          <h1 className="font-bold  mb-2">Reset Password</h1>
          <p className="text-xs font-bold">
          Enter your registered email address and we will send you a <br />temporary password to reset yours with
          </p>

          <form action="" className="mt-8">
            <input
              type="email"
              id="email"
              className="border block mt-4 rounded w-2/5 px-4 py-1 placeholder:text-xs"
              placeholder="Email Address"
              // onChange={(e) => setMatchPwd(e.target.value)}
              // value={matchPwd}
              // required
              // aria-invalid={validMatch ? "false" : "true"}
              // aria-describedby="confirmnote"
              // onFocus={() => setMatchFocus(true)}
              // onBlur={() => setMatchFocus(false)}
            />
            <div className="flex items-center gap-4 mt-8">
            <button type="submit" className="bg-[#2E61E6] text-white text-xs rounded-full px-5 py-2 block"   onClick={handleClick}
        disabled={isWaiting}>{isWaiting ? 'Please wait...' : 'Continue'}</button>
            <Link to='/admin_login' className="text-[#2E61E6] text-xs">log into my account</Link>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

