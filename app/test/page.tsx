import { Card } from '@/app/dashboard/cards';
import { Suspense } from 'react';
import CardWrapper from '@/app/dashboard/cards';
import RevenueChart from '@/app/dashboard/revenue-chart';
import LatestInvoices from '@/app/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchRevenue, fetchLatestInvoices,fetchCardData } from '@/app/lib/data';
import {
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
  CardsSkeleton,
} from '@/app/ui/skeletons';
import   Navbar  from '@/app/ui/navbar';






function HeaderComponent() {
  return (
    <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        
        <img src="https://phcsports.com/static/img/phc_icon.png" alt="力康" ></img>
        <span className="ml-3 text-xl">力康運動醫學機構</span>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <li className="group  relative dropdown  px-4 text-black-500 hover:text-blue-700 cursor-pointer  hover:font-bold text-base uppercase tracking-wide">
      <a className="mr-5 hover:text-gray-900">各院資訊</a>
      <div className="group-hover:block dropdown-menu absolute hidden h-auto">
      <ul className="top-0 w-48 bg-white shadow px-6 py-8">
            <li className="py-1"><a className="block text-blue-500 font-bold text-base uppercase hover:text-blue-700 cursor-pointer">內湖力康復健科診所</a></li>
            <li className="py-1"><a className="block text-blue-500 font-bold text-base uppercase hover:text-blue-700 cursor-pointer">汐止力康復健科診所</a></li>
            <li className="py-1"><a className="block text-blue-500 font-bold text-base uppercase hover:text-blue-700 cursor-pointer">萬隆力康復健科診所</a></li>
            <li className="py-1"><a className="block text-blue-500 font-bold text-base uppercase hover:text-blue-700 cursor-pointer">天母力康診所</a></li>
            <li className="py-1"><a className="block text-blue-500 font-bold text-base uppercase hover:text-blue-700 cursor-pointer">內湖力康運動醫學/運動表現中心</a></li>
            <li className="py-1"><a className="block text-blue-500 font-bold text-base uppercase hover:text-blue-700 cursor-pointer">汐止力康運動醫學/運動表現中心</a></li>
            <li className="py-1"><a className="block text-blue-500 font-bold text-base uppercase hover:text-blue-700 cursor-pointer">天母力康運動醫學/運動表現中心</a></li>
            <li className="py-1"><a className="block text-blue-500 font-bold text-base uppercase hover:text-blue-700 cursor-pointer">足部力學專科</a></li>
        </ul>
        </div>
    </li>
        <a className="mr-5 hover:text-gray-900">關於立康</a>
        <a className="mr-5 hover:text-gray-900">各院資訊</a>
        <a className="mr-5 hover:text-gray-900">衛教精選</a>
      </nav>

      {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button> */}
    </div>
  </header>
  );
}


function HeaderTwoComponent() {
  return (

<header className='shadow-md bg-white font-[sans-serif] tracking-wide relative z-50'>
    <section
      className='flex items-center flex-wrap lg:justify-center gap-4 py-3 sm:px-10 px-4 border-gray-200 border-b min-h-[75px]'>
  


  <img src="https://phcsports.com/static/img/phc_icon.png" alt="力康" ></img>
  <span className="ml-3 text-xl">力康運動醫學機構</span>
  

  
      {/* <div className="lg:absolute lg:right-10 flex items-center ml-auto space-x-8">
        <span className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="20px"
            className="cursor-pointer fill-[#333] hover:fill-[#007bff] inline-block" viewBox="0 0 64 64">
            <path
              d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
              data-original="#000000" />
          </svg>
          <span className="absolute left-auto -ml-1 top-0 rounded-full bg-black px-1 py-0 text-xs text-white">1</span>
        </span>
        <span className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
            className="cursor-pointer fill-[#333] hover:fill-[#007bff] inline-block" viewBox="0 0 512 512">
            <path
              d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
              data-original="#000000"></path>
          </svg>
          <span className="absolute left-auto -ml-1 top-0 rounded-full bg-black px-1 py-0 text-xs text-white">4</span>
        </span>
        <div className="inline-block cursor-pointer border-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"
            className="hover:fill-[#007bff]">
            <circle cx="10" cy="7" r="6" data-original="#000000" />
            <path
              d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
              data-original="#000000" />
          </svg>
        </div>
      </div> */}
    </section>
  
    <div className='flex flex-wrap justify-center px-10 py-3 relative'>
  
      <div id="collapseMenu"
        className='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50'>
        <button id="toggleClose" className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
            <path
              d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
              data-original="#000000"></path>
            <path
              d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
              data-original="#000000"></path>
          </svg>
        </button>
  
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
      </div>
  
      <div id="toggleOpen" className='flex ml-auto lg:hidden'>
        <button>
          <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
    </div>
  </header>


  );
}


function HeroComponent() {
  return (  
    

  <div className=" mx-auto  px-5 justify-center items-center">

  <div className="bg-[url('https://phcsports.com/media/store/cover/2019/08/yoga-1994667_1920.jpg')] bg-cover bg-center h-screen flex justify-center items-center">
    <div className="text-center text-white">
      <h1 className="text-6xl font-bold mb-4">力康運動醫學機構</h1>
      <p className="text-2xl">力康復健科診所+力康運動健康管理中心，國內少數結合復健科醫師、物理治療師與體能教練，想從傷痛回到運動場上，力康給你360度最全面的健康規劃。</p>
    </div>
  </div>


  </div>


  );
}

function SectionTwoComponent() {
  return (  
    


<section className=" justify-center items-center bg-white text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">

      <div className="text-3xl font-extrabold text-black  sm:text-4xl">
      <h2 className="text-color-tertiary font-weight-medium mt-5 mb-3 title-tag-ls fst-italic"> Beyond陪伴您 找到心中的自己</h2>
      <p className="font-weight-bold line-height-5 pt-5">用心，認真看待每一個人，是<span className="text-color-tertiary px-1">Beyond</span>堅持的專業精神。</p>
      </div>
      <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-8 mb-6"></span>


    </div>
  </div>
</section>

  );
}

function SectionThreeComponent() {
  return (  
    


<section className=" justify-center items-center bg-white text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">

      <div className="text-3xl font-extrabold text-black  sm:text-4xl">
      <h2 className="text-color-tertiary font-weight-medium mt-5 mb-3 title-tag-ls fst-italic"> Beyond陪伴您 找到心中的自己</h2>
      <p className="font-weight-bold line-height-5 pt-5">用心，認真看待每一個人，是<span className="text-color-tertiary px-1">Beyond</span>堅持的專業精神。</p>
      </div>
      <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-8 mb-6"></span>


    </div>
  </div>
</section>









  );
}


export default async function Page() {
  const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData(); // wait for fetchLatestInvoices() to finish
  //console.log(revenue);
  return (
    <main>

      <Navbar/>
      <HeroComponent/>
      <SectionTwoComponent/>
    </main>
  );
}