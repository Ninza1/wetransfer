import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems, MenuSection } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/16/solid'
import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Dashboard', to: '#', current: true },
  { name: 'Team', to: '#', current: false },
  { name: 'Projects', to: '#', current: false },
  { name: 'Calendar', to: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-transparent ">
      <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />

            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Link to="/">
                <img
                  alt="Your Company"
                  src="/assets/we-transfer-logo.svg"
                  className="h-6 w-auto"
                /></Link>
            </div>

          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


            {/* Right nav links */}
            <div className='flex items-center gap-3 '>
              <div className="hidden sm:ml-6 sm:block rounded-[12px] px[22px] py-[10px]  bg-white">
                <div className="flex space-x-[24px] px-[24px]">
                  <Link
                    to="#"
                    className='group text-lg font-bold relative'
                  >
                    <div className="flex gap-1 items-center  hover:text-[#676767]">
                      Features
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.172 8 8 10.828 10.83 8"></path></svg>
                    </div>
                    {/* Feature sub links */}
                    <div className='group-hover:block hidden pb-3 absolute top-[100%] left-0 '>
                      <ul className='bg-light p-3 rounded-[10px] w-[190px] bg-white mt-5'>
                        <li className='mb-4'><Link to="" className='group text-base font-bold  hover:text-[#676767]'>Share you file</Link></li>
                        <li className='my-4'><Link to="" className='group text-base font-bold hover:text-[#676767]'>Customize you file</Link></li>
                        <li className='my-4'><Link to="" className='group text-base font-bold hover:text-[#676767]'>give & get feed back</Link></li>
                        <li className='my-4'><Link to="" className='group text-base font-bold hover:text-[#676767]'>Get benefit & perks</Link></li>
                        <li className='my-4'><Link to="" className='group text-base font-bold hover:text-[#676767]'>give & get feed back</Link></li>
                        <li className='my-4'><Link to="" className='group text-base font-bold hover:text-[#676767]'>Get benefit & perks</Link></li>

                      </ul>
                    </div>
                  </Link>
                  <Link
                    to="#"
                    className=' text-lg font-bold hover:text-[#676767]'
                  >
                    Price
                  </Link>
                  <Link
                    to="#"
                    className='group text-lg font-bold relative'
                  >
                    <div className="flex gap-1 items-center hover:text-[#676767]">
                      Use Case
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.172 8 8 10.828 10.83 8"></path></svg>
                    </div>
                    {/* Use Case sub links */}
                    <div className='group-hover:block hidden pb-3 absolute top-[100%] left-[-10%] '>
                      <ul className='bg-light p-3 rounded-[10px] w-[190px] bg-white mt-5'>
                        <li className='mb-4'><Link to="" className='group text-base font-bold hover:text-[#676767]'>Share you file</Link></li>
                        <li className='my-4'><Link to="" className='group text-base font-bold hover:text-[#676767]'>Customize you file</Link></li>
                        <li className='my-4'><Link to="" className='group text-base font-bold hover:text-[#676767]'>give & get feed back</Link></li>
                        <li className='my-4'><Link to="" className='group text-base font-bold hover:text-[#676767]'>Get benefit & perks</Link></li>
                        <li className='my-4'><Link to="" className='group text-base font-bold hover:text-[#676767]'>give & get feed back</Link></li>
                        <li className='my-4'><Link to="" className='group text-base font-bold hover:text-[#676767]'>Get benefit & perks</Link></li>

                      </ul>
                    </div>
                  </Link>
                  <Link
                    to="#"
                    className=' text-lg font-bold hover:text-[#676767]'
                  >
                    Resource
                  </Link>

                </div>
              </div>
              <div className='hidden sm:block  rounded-[12px] px[16px] py-[10px] bg-white'>
                <ul className='flex items-center gap-4  pl-[16px] pr-[10px]'>
                  <li><Link to="/login" className='text-lg font-bold hover:text-[#676767]'>Login</Link></li>
                  <li><Link to="/signup" className='text-lg font-bold px-[12px] pt-[5px] pb-[7px] rounded-[10px] bg-[#353535] hover:bg-[#353535cf]  text-[#f1f1f1]'>Signup</Link></li>
                </ul>
              </div>
              {/* singup  will show in mini device */}
              <ul className=' block sm:hidden  pl-[16px] pr-[10px]'>
                <li><Link to="/signup" className='text-lg font-bold     text-gray'>Signup</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>


{/* Navebar for mini devices  */}
      <DisclosurePanel className="sm:hidden">
        <div className='flex items-center gap-3 '>
          <div className=" sm:ml-6  rounded-[12px]  py-[10px]  bg-white w-full">
            <div className="flex flex-col space-x-[24px] px-[24px] ">
              
              <Link
                to="#"
                className='group text-lg font-bold relative'
              >
                <div className="flex gap-1 items-center  hover:text-[#676767]">
                  Features
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.172 8 8 10.828 10.83 8"></path></svg>
                </div>
                {/* Feature sub links */}
                <div className='group-hover:block hidden pb-3 absolute top-[100%] left-0 '>
                  <ul className='bg-light p-3 rounded-[10px] w-[190px] bg-white mt-5'>
                    <li className='mb-4'><Link to="" className='group text-base font-bold  hover:text-[#676767]'>Share you file</Link></li>
                    <li className='my-4'><Link to="" className='group text-base font-bold hover:text-[#676767]'>Customize you file</Link></li>
                    <li className='my-4'><Link to="" className='group text-base font-bold hover:text-[#676767]'>give & get feed back</Link></li>
                    <li className='my-4'><Link to="" className='group text-base font-bold hover:text-[#676767]'>Get benefit & perks</Link></li>
                    <li className='my-4'><Link to="" className='group text-base font-bold hover:text-[#676767]'>give & get feed back</Link></li>
                    <li className='my-4'><Link to="" className='group text-base font-bold hover:text-[#676767]'>Get benefit & perks</Link></li>

                  </ul>
                </div>
              </Link>
              <Link
                to="#"
                className=' text-lg font-bold hover:text-[#676767]'
              >
                Price
              </Link>
              <Link
                to="#"
                className='group text-lg font-bold relative'
              >
                <div className="flex gap-1 items-center hover:text-[#676767]">
                  Use Case
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.172 8 8 10.828 10.83 8"></path></svg>
                </div>
                {/* Use Case sub links */}
                <div className='group-hover:block hidden pb-3 absolute top-[100%] left-[-10%] '>
                  <ul className='bg-light p-3 rounded-[10px] w-[190px] bg-white mt-5'>
                    <li className='mb-4'><Link to="" className='group text-base font-bold hover:text-[#676767]'>Share you file</Link></li>
                    <li className='my-4'><Link to="" className='group text-base font-bold hover:text-[#676767]'>Customize you file</Link></li>
                    <li className='my-4'><Link to="" className='group text-base font-bold hover:text-[#676767]'>give & get feed back</Link></li>
                    <li className='my-4'><Link to="" className='group text-base font-bold hover:text-[#676767]'>Get benefit & perks</Link></li>
                    <li className='my-4'><Link to="" className='group text-base font-bold hover:text-[#676767]'>give & get feed back</Link></li>
                    <li className='my-4'><Link to="" className='group text-base font-bold hover:text-[#676767]'>Get benefit & perks</Link></li>

                  </ul>
                </div>
              </Link>
              <Link
                to="#"
                className=' text-lg font-bold hover:text-[#676767]'
              >
                Resource
              </Link>
              <Link
                to="#"
                className=' text-lg font-bold hover:text-[#676767]'
              >
                Login
              </Link>

            </div>
          </div>
         
        
        </div>
      </DisclosurePanel>
    </Disclosure>

  )
}
