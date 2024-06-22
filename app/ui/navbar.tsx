"use client";

import React, { useState } from 'react';

// function NavLink({to, children}) {
//   return 
//   <a href={to} className={`mx-4`}>
//       {children}
//   </a>
// }




function MobileNav({open, setOpen}) {
  return (
      <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
          <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
          <img src="https://phcsports.com/static/img/phc_icon.png" alt="力康" ></img>
          </div>
          <div className="flex flex-col ml-4">

          
          <li className='group max-lg:border-b max-lg:px-3 max-lg:py-3 relative'>
            <a href='javascript:void(0)'
              className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>關於力康<svg
                xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block"
                viewBox="0 0 24 24">
                <path
                  d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                  data-name="16" data-original="#000000" />
              </svg>
            </a>
            <ul
              className='absolute top-5 max-lg:top-8 left-0 z-50 block space-y-2 shadow-lg bg-white max-h-0 overflow-hidden min-w-[250px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
              
              <li className="border-b py-3"><a className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block">歷史沿革</a></li>
              <li className="border-b py-3"><a className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block">專業介紹</a></li>
              <li className="border-b py-3"><a className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block">店點介紹</a></li>
              <li className="border-b py-3"><a className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block">聯絡我們</a></li>
            </ul>
          </li>
          <li className='group max-lg:border-b max-lg:px-3 max-lg:py-3 relative'>
            <a href='javascript:void(0)'
              className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>各院資訊<svg
                xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block"
                viewBox="0 0 24 24">
                <path
                  d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                  data-name="16" data-original="#000000" />
              </svg>
            </a>
            <ul
              className='absolute top-5 max-lg:top-8 left-0 z-50 block space-y-2 shadow-lg bg-white max-h-0 overflow-hidden min-w-[250px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
              
              <li className="border-b py-3"><a className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block">內湖力康復健科診所</a></li>
              <li className="border-b py-3"><a className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block">汐止力康復健科診所</a></li>
              <li className="border-b py-3"><a className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block">天母力康診所</a></li>
              <li className="border-b py-3"><a className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block">內湖力康運動醫學/運動表現中心</a></li>
              <li className="border-b py-3"><a className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block">汐止力康運動醫學/運動表現中心</a></li>
              <li className="border-b py-3"><a className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block">天母力康運動醫學/運動表現中心</a></li>
              <li className="border-b py-3"><a className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block">足部力學專科</a></li>
            </ul>
          </li>
          <li className='max-lg:border-b max-lg:px-3 max-lg:py-3'><a href='javascript:void(0)'
              className='hover:text-[#007bff] text-gray-600 font-semibold text-[15px] block'>衛教精選</a></li>

              {/* <a className="text-xl font-medium my-4" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
              關於力康
              </a>
              <a className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
              各院資訊
              </a>

              <a className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
              衛教精選
              </a> */}

          </div>  
      </div>
  )
}

export default function Navbar() {

  const [open, setOpen] = useState(false)
  return (
      <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
          <MobileNav open={open} setOpen={setOpen}/>
          <div className="w-3/12 flex items-center">
             
              <img src="https://phcsports.com/static/img/phc_icon.png" alt="力康" ></img>
              <span className="ml-3 text-xl hidden md:flex">力康運動醫學機構</span>
          

          </div>
          <div className="w-9/12 flex justify-end items-center">

              <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                  setOpen(!open)
              }}>
                  {/* hamburger button */}
                  <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                  <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                  <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
              </div>

              <div className="hidden md:flex">


        <ul
          className='lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
          <li className='max-lg:border-b max-lg:pb-4 px-3 lg:hidden'>
            <a href="javascript:void(0)"><img src="https://phcsports.com/static/img/phc_icon.png" alt="力康" className='w-36' />
            </a>
          </li>

          <li className='group max-lg:border-b max-lg:px-3 max-lg:py-3 relative'>
            <a href='javascript:void(0)'
              className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>關於力康<svg
                xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block"
                viewBox="0 0 24 24">
                <path
                  d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                  data-name="16" data-original="#000000" />
              </svg>
            </a>
            <ul
              className='absolute top-5 max-lg:top-8 left-0 z-50 block space-y-2 shadow-lg bg-white max-h-0 overflow-hidden min-w-[250px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
              
              <li className="border-b py-3"><a className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block">歷史沿革</a></li>
              <li className="border-b py-3"><a className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block">專業介紹</a></li>
              <li className="border-b py-3"><a className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block">店點介紹</a></li>
              <li className="border-b py-3"><a className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block">聯絡我們</a></li>
            </ul>
          </li>
          <li className='group max-lg:border-b max-lg:px-3 max-lg:py-3 relative'>
            <a href='javascript:void(0)'
              className='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>各院資訊<svg
                xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block"
                viewBox="0 0 24 24">
                <path
                  d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                  data-name="16" data-original="#000000" />
              </svg>
            </a>
            <ul
              className='absolute top-5 max-lg:top-8 left-0 z-50 block space-y-2 shadow-lg bg-white max-h-0 overflow-hidden min-w-[250px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
              
              <li className="border-b py-3"><a className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block">內湖力康復健科診所</a></li>
              <li className="border-b py-3"><a className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block">汐止力康復健科診所</a></li>
              <li className="border-b py-3"><a className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block">天母力康診所</a></li>
              <li className="border-b py-3"><a className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block">內湖力康運動醫學/運動表現中心</a></li>
              <li className="border-b py-3"><a className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block">汐止力康運動醫學/運動表現中心</a></li>
              <li className="border-b py-3"><a className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block">天母力康運動醫學/運動表現中心</a></li>
              <li className="border-b py-3"><a className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block">足部力學專科</a></li>
            </ul>
          </li>
          <li className='max-lg:border-b max-lg:px-3 max-lg:py-3'><a href='javascript:void(0)'
              className='hover:text-[#007bff] text-gray-600 font-semibold text-[15px] block'>衛教精選</a></li>

        </ul>


                  {/* <NavLink to="/contact">
                  ABOUT2
                  </NavLink>
                  <NavLink to="/about">
                      ABOUT
                  </NavLink> */}
              </div>
          </div>
      </nav>
  )
}