import React from 'react'
import Logo from "../../assets/icons/logo.png";
import EmailSuccess from '../assets/login/email_success.svg'
import { Link } from 'react-router-dom';


export const EmailSuccessSent = () => {
  return (
    <div className="h-screen grid grid-cols-3">
      <div className={`bg-[#171B4A] col-span-1 h-screen`}></div>
      <div className="col-span-2 bg-[#F4F6FA]">
        <div className="flex justify-end mr-16 pt-6">
          <img src={Logo} alt="" className="w-20" />
        </div>
        <div className=" text-[#171B4A] ml-28 mt-28 ">
            <div className="flex gap-5">
                <div className="img">
                    <img src={EmailSuccess} alt="" className='w-20'/>
                </div>
                <div>
          <h1 className="font-bold mb-2">Email successfully sent</h1>
          <p className="text-xs font-bold">
          Check your registered email for the temporary <br />password sent
          </p>
          <form action="" className="mt-8">
            <div className="flex items-center gap-4 mt-8">
            <Link to="/admin_login" className="bg-[#2E61E6] text-white text-xs rounded-full px-5 py-2 block"  >log into my account</Link>
            </div>
          </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
