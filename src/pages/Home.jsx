import React, { useState } from 'react'
import { Navbar } from '../components/common/Navbar'
import Slider from "react-slick";
import styles  from "../styles/home.module.css"




export const Home = () => {
    const [isAgree, setIsAgree] = useState(false)

    // Carousel setting 
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        autoplay: true,
        autoplaySpeed: 5000,
        button:false,
        pauseOnHover:false
    };

    return (
        <>
            {/* home header  */}
            <div className="home-page h-[100vh] w-[100vw] relative ">
                <div className='z-30 relative'>
                    <Navbar />
                </div>
                <div className="container mx-5 px-3 ">

                    {/* Left hero content */}
                    <div className="z-10  left-content absolute left-[7%] top-[23%] ">
                        <div className="card w-[280px]  rounded-[13px] bg-white ">
                            {!isAgree ?
                                <div className='p-4 h-80 overflow-y-auto'>
                                    <div>
                                        <img src="/assets/we-transfer-logo.svg" className='h-5 w-auto' alt="" />
                                    </div>
                                    <div>
                                        <h3 className='text-4xl/8 font-semibold my-4'>You're <span className='font-black'>alomst</span> there</h3>
                                    </div>
                                    <div>
                                        <p className='text-lg/5 font-semibold my-5 pt-4 pb-2 text-[#484a4d]'>To continue, please agree to our <a href="" className='underline decoration-[1.5px]'>Terms of Service</a>, and
                                            acknowledge our <a href="" className='underline decoration-[1.5px]'>Privacy Policy</a>.</p>
                                    </div>
                                    <div>
                                        <button className='w-full text-center text-white taxt-base p-2 font-medium bg-[#3767ea] rounded-[15px]' onClick={() => setIsAgree(true)}>I agree</button>
                                    </div>
                                </div> :

                                // {/* After agree card content  */}
                                <div className='h-[100%] overflow-y-auto' >
                                    <form action="">
                                        <div className=''>
                                            <div className='p-2'>
                                                <div className='mb-4'>
                                                    <div className='flex gap-2 items-center '>
                                                        <div className='w-50 rounded-[8px] bg-blue-100 p-2 pb-[10px]  relative '>
                                                            <input type="file" className='w-[80%] absolute h-[80%] border opacity-0' />
                                                            <img src="/assets/icons/add.svg" alt="" className='mx-auto' />
                                                            <p className='text-sm font-bold text-center '>Add files</p>
                                                        </div>
                                                        <div className='w-50 rounded-[8px] bg-blue-100  p-2 relative '>
                                                            <input type="file" className='w-[80%] absolute h-[80%] border opacity-0' />
                                                            <img src="/assets/icons/folder.svg" className='mx-auto' alt="" />
                                                            <p className='text-sm font-bold text-center'>Add folders</p>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center justify-center my-2'>
                                                        <p className='text-sm font-bold text-[#6a6d70] '>Up to 2GB free </p>
                                                        <a href="" className='text-[#8e21cc] flex items-center ml-2 text-sm font-bold'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#8e21cc" class="styles_module_wtIconSvg__d2f058f9" role="img" viewBox="0 0 32 32"><path fill="currentColor" fill-rule="evenodd" d="M15.797 28.892c-.371.54-1.217.277-1.216-.378l.012-9.58H5.358a.667.667 0 0 1-.528-1.075l11.576-14.98c.389-.503 1.194-.228 1.194.407v9.78h7.8c.537 0 .853.602.55 1.045L15.796 28.89z" clip-rule="evenodd"></path></svg>
                                                            Increase limit</a>
                                                    </div>
                                                </div>
                                                <div className='my-2'>
                                                    <input type="email" placeholder='Email to ' className='px-3 pb-2 text-lg font-semibold outline-none border-b-1 border-gray-300 w-full' />
                                                </div>
                                                <div className='my-2'>
                                                    <input type="email" placeholder='Your Eamil ' className='px-3 pb-2 text-lg font-semibold outline-none border-b-1 border-gray-300 w-full' />
                                                </div>
                                                <div className='my-2'>
                                                    <input type="text" placeholder='Title ' className='px-3 pb-2 text-lg font-semibold outline-none border-b-1 border-gray-300 w-full' />
                                                </div>
                                                <div className='mt-2'>
                                                    <textarea name="" id="" rows="1" placeholder='Message' className='px-3 pb-2 text-lg font-semibold outline-none '></textarea>
                                                </div>
                                            </div>
                                            {/* <div>
                                    preview more content
                                </div> */}
                                            <div className=' mb-3 pt-5 flex gap-2 p-2 border-t-1 border-gray-300 '>
                                                <button className='cursor-pointer'>
                                                    <svg width="24" height="24" fill='#3767ea' id="transfer-options-icon" role="img" aria-label="Toggle transfer options"><path d="M12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 Z M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M16.5,13.5 C17.3284271,13.5 18,12.8284271 18,12 C18,11.1715729 17.3284271,10.5 16.5,10.5 C15.6715729,10.5 15,11.1715729 15,12 C15,12.8284271 15.6715729,13.5 16.5,13.5 Z M12,13.5 C12.8284271,13.5 13.5,12.8284271 13.5,12 C13.5,11.1715729 12.8284271,10.5 12,10.5 C11.1715729,10.5 10.5,11.1715729 10.5,12 C10.5,12.8284271 11.1715729,13.5 12,13.5 Z M7.5,13.5 C8.32842712,13.5 9,12.8284271 9,12 C9,11.1715729 8.32842712,10.5 7.5,10.5 C6.67157288,10.5 6,11.1715729 6,12 C6,12.8284271 6.67157288,13.5 7.5,13.5 Z"></path></svg>
                                                </button>
                                                <button className='cursor-pointer text-lg font-semibold text-white bg-[#3767ea] rounded-[16px] text-center py-[12px] w-40 ml-3'>Transfer</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            }



                        </div>


                    </div>

                    {/* ----------------------------------------
                       | Hero bg animated content
                    ---------------------------------------*/}
                    <div className=" home-hero-box fixed top-0 left-0 bg-blue-100 z-0 w-[100vw] h-[100vh]">

                            <div className='w-[100vw] flex justify-center items-center'>
                                <Slider {...settings} className='w-[100vw]'>
                                    <a href="/" className='bg-[#F1F1F1] h-[100vh]'>
                                        <div className="flex   gap-5  lg:justify-end  ">
                                            <div className=" px-5 content-box w-[35%] mr-0  flex flex-col gap-3 items-start justify-center text-start">
                                                <h1 className=' text-6xl font-bold w-80'>Feedback slowing you down?</h1>
                                                <p className='text-lg/6 font-samibold w-90'>Sarah al-Sarraj depicts a mythical tribe separated by thousands of years but still very much connected</p>
                                                <a href="" className='bg-(--btn-bg-blue) px-5 py-2 rounded-[12px] text-white text-lg'>Know More</a>
                                            </div>
                                            <div className="img-box w-[37%] flex  items-center justify-end py-4 ">
                                                <img className='inline-block h-[80%] w-auto ml-[-50px]' src="https://creatives.wetransfer.net/creator/wetransfer/2211-refresh/static-2/1_GQft9D/one/../favourited.1e40a57f0213acfb55b7.png" alt="" />
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" target='_blank'  className=' h-[100vh]'>
                                        <div className="flex gap-5 justify-end ">
                                            <div className=" px-5 content-box w-[35%] mr-0  flex flex-col gap-3 items-start justify-center text-start">
                                                <h1 className=' text-6xl font-bold w-80'>Feedback slowing you down?</h1>
                                                <p className='text-lg/6 font-samibold w-90'>Sarah al-Sarraj depicts a mythical tribe separated by thousands of years but still very much connected</p>
                                                <a href="" className='bg-(--btn-bg-blue) px-5 py-2 rounded-[12px] text-white text-lg'>Know More</a>
                                            </div>
                                            <div className="img-box w-[37%]  flex items-center justify-end py-4">
                                                <img className='inline-block h-[80%] w-auto ml-[-50px]' src="https://creatives.wetransfer.net/creator/wepresent-25/2502-p11/wp1_sq/1_Lt6Ufb/img.88222eb492295e367bfb.jpg" alt="" />
                                            </div>
                                           
                                        </div>
                                    </a>
                                    <a href="/" className='bg-gray-950 h-[100vh]'>
                                        <div className="flex gap-5 justify-end ">
                                            <div className=" px-5 content-box w-[35%] mr-0  flex flex-col gap-3 items-start justify-center text-start">
                                                <h1 className=' text-6xl text-white font-bold w-80'>Never chase payments again</h1>
                                                <p className='text-lg/6 text-white font-samibold w-90'>Sarah al-Sarraj depicts a mythical tribe separated by thousands of years but still very much connected</p>
                                                <a href="" className='bg-(--btn-bg-blue) px-5 py-2 rounded-[12px] text-white text-lg'>Learn more</a>
                                            </div>
                                            <div className="img-box w-[37%]  flex items-center justify-end py-4">
                                                <img className='inline-block h-[80%] w-auto ml-[-50px]' src="https://creatives.wetransfer.net/creator/wetransfer/2404-sellfiles/static1/1_hxczQN/big.2652daf8414e2130f4e2.png" alt="" />
                                            </div>
                                        </div>
                                    </a>
                                

                                </Slider>
                                                            

                            </div>
                    </div>


                </div>

            </div>
        </>
    )
}
