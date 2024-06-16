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
        <a className="mr-5 hover:text-gray-900">First Link</a>
        <a className="mr-5 hover:text-gray-900">Second Link</a>
        <a className="mr-5 hover:text-gray-900">Third Link</a>
        <a className="mr-5 hover:text-gray-900">Fourth Link</a>
      </nav>
      <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
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
    </main>
  );
}