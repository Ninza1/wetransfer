import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
    return (
        <>
            <div className="login sm:mx-5 mx-2 p-3">
                <div>
                    <Link to='/'>
                    <img src="/assets/we-transfer-logo.svg" alt="Company Logo" className='h-6 w-auto' /></Link>
                </div>
                <div className="login-body text-center w-full max-w-[430px] m-auto p-4">
                    <div>
                        <img src="https://auth-web.wetransfer.com/_next/static/media/logo.82bd2bb6.svg" className='h-8 w-auto mx-auto mb-5' alt="" />
                    </div>
                    {/* Sing in  */}
                    <div className="sign-in-box mb-5 pt-4">
                        <div className='my-3'>
                            <h4 className='text-2xl font-bold'>Sign In</h4>
                            <p className='text-xl font-medium mb-5'>to continue to your WeTransfer account.</p>
                        </div>
                        <div className='p-[12px] border border-gray-300 rounded-[16px]'>
                            <input type="email" placeholder='Email' className='outline-0 w-full text-xl text-start font-semibold' />
                        </div>
                        <div className='my-3'>
                            <button className='w-full  p-[10px] rounded-[16px] bg-[#3767ea] text-white text-[21px] text-center font-semibold'>Continue with email</button>
                        </div>
                    </div>
                    <Link to='#' className='text-lg  underline decoration-1 hover:underline-none font-medium'>Forgot Password</Link>
                    <div className='my-4 flex items-center justify-center'>
                        <span className='inline-block border border-gray-200 h-[1px] w-[45%] mt-1 '></span>
                        <span className='mx-3 inline-block text-lg font-semibold text-gray-400'> or</span>
                        <span className='inline-block border border-gray-200 h-[1px] w-[45%] mt-1'></span>
                    </div>

                    {/* Third party links */}
                    <div className="thrdp-links">
                        
                        <Link to="https://google.com/" className='block mb-2 flex justify-center gap-2 items-center w-full p-[8px] border border-gray rounded-[15px]'>
                            <img src="https://auth-web.wetransfer.com/_next/static/media/google.226bc584.svg" className='mt-1 h-6 w-auto' alt="" />
                            <p className=' text-[21px] text-center font-semibold ' >Continue with Google</p>
                        </Link>
                        <Link to='#' className='block mb-2 flex justify-center gap-2 items-center w-full p-[8px] border border-gray rounded-[15px]'>
                            <img src="https://auth-web.wetransfer.com/_next/static/media/slack.e82882b2.svg" className='mt-1 h-6 w-auto' alt="" />
                            <p className=' text-[21px] text-center font-semibold ' >Continue with Slack</p>
                        </Link>
                        <Link to="https://www.apple.com/in" className='block mb-2 flex justify-center gap-2 items-center w-full p-[8px] border border-gray rounded-[15px]'>
                            <img src="https://auth-web.wetransfer.com/_next/static/media/apple.951afce8.svg" className='mt-1 h-6 w-auto' alt="" />
                            <p className=' text-[21px] text-center font-semibold ' >Continue with Apple</p>
                        </Link>
                        <div className='mt-5'>
                            <p className='text-lg font-medium text-gray-600 '>Don't have an account? <Link to="/signup" className='underline decoration-1'>Sign up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
