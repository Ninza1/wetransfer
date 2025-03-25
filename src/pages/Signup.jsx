import React from 'react'
import "../styles/signup.css"
import { Link } from 'react-router-dom'

export const Signup = () => {
    return (
        <>
            <div className="signup sm:mx-5 mx-2 p-3 ">
                <div>
                    <Link to="/"><img src="/assets/we-transfer-logo.svg" alt="Company Logo" className='h-6 w-auto' /></Link>
                </div>
                <div className="signup-body">

                    {/* singup */}

                    <section class="section contact contact-section">
                        <div class="container contact-column">
                            <div>
                                <img src="https://auth-web.wetransfer.com/_next/static/media/logo.82bd2bb6.svg" className='h-6 w-auto mx-auto mb-5' alt="" />
                            </div>
                            <div className='my-3 text-center'>
                                <h4 className='text-2xl font-bold tracking-tight'>Welcome to WeTransfer</h4>
                                <p className='text-xl/5 font-medium mb-5'>Sign up and start sending and receiving files.</p>
                            </div>
                            <form name="contact" class="contact-inform form">
                                <div class="form-control">
                                    <input type="email" name="email" class="form-input" placeholder="none" required />
                                    <label for="email" class="form-label">Email</label>
                                </div>
                                <div class="form-control">
                                    <input type="text" name="name" class="form-input" placeholder="none" required />
                                    <label for="email" class="form-label text-lg ">Name</label>
                                </div>
                                <div class="form-control">
                                    <input type="password" name="password" class="form-input" placeholder="none" required />
                                    <label for="password" class="form-label text-lg ">Password</label>
                                </div>

                                <button type="submit" class="bg-(--btn-bg-blue) w-full text-white text-[22px] text-center p-[9px] rounded-[16px] font-semibold" >Continue</button>
                                <div>
                                    <p className='text-base/4 font-medium text-gray-500 mt-5 mb-2 text-center'>By creating an account, you agree to our <Link to="" className='text-gray-600 font-semibold'>Terms of Service</Link> and <Link to="" className='text-gray-600 font-semibold'>Privacy & Cookie Statement</Link>.</p>
                                </div>

                            </form>

                            {/* Continue with google */}
                            <div className='px-3'>
                                {/* or */}
                                <div className='mb-5 flex items-center justify-center'>
                                    <span className='inline-block border border-gray-200 h-[1px] w-[45%] mt-1 '></span>
                                    <span className='mx-3 inline-block text-lg font-semibold text-gray-400'> or</span>
                                    <span className='inline-block border border-gray-200 h-[1px] w-[45%] mt-1'></span>
                                </div>
                                <Link to="#" className='block mb-2 flex justify-center gap-2 items-center w-full p-[8px] border border-gray rounded-[15px]'>
                                    <img src="https://auth-web.wetransfer.com/_next/static/media/google.226bc584.svg" className='mt-1 h-6 w-auto' alt="" />
                                    <p className=' text-[21px] text-center font-semibold ' >Continue with Google</p>
                                </Link>
                                <div className='mt-5'>
                                    <p className='text-lg font-medium text-gray-600 text-center'>Already have an account? <Link to="/login" className='underline decoration-1'>Sign in</Link></p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div >
            </div >
        </>
    )
}
