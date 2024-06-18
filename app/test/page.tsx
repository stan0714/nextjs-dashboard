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
      <HeaderComponent/>
      <HeroComponent/>
      <SectionTwoComponent/>
    </main>
  );
}