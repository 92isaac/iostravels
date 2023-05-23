import React from "react";
import Logo from "../../assets/icons/logo.png";
import { Link } from "react-router-dom";
import HttpServices from "services/HttpServices";

export const Login = () => {
  return (
    <div className="h-screen grid grid-cols-3">
      <div className={`bg-[#171B4A] col-span-1 h-screen`}></div>
      <div className="col-span-2 bg-[#F4F6FA]">
        <div className="flex justify-end mr-16 pt-6">
          <img src={Logo} alt="" className="w-20" />
        </div>
        <div className=" text-[#171B4A] ml-20 mt-24 ">
          <h2 className="font-bold mb-1">Log into your account</h2>
          <p className="text-xs font-bold">
            Enter your login credentials to access your account
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
            <input
              type="password"
              id="password"
              className="border block mt-4 rounded w-2/5 px-4 py-1 placeholder:text-xs"
              placeholder="Password"

              // onChange={(e) => setMatchPwd(e.target.value)}
              // value={matchPwd}
              // required
              // aria-invalid={validMatch ? "false" : "true"}
              // aria-describedby="confirmnote"
              // onFocus={() => setMatchFocus(true)}
              // onBlur={() => setMatchFocus(false)}
            />
            <div className="flex  gap-6 text-xs mt-5">
              <label htmlFor="checkbox" className="items-center flex">
                <input type="checkbox" className="mr-2"/>
                Keep me signed in
              </label>
              <Link to='/reset_password' className="text-[#2E61E6]">Forgot password</Link>
            </div>

            <button className="bg-[#2E61E6] text-white text-xs rounded-full px-5 py-2 mt-8">Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
};
