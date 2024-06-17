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

function SectionTwoComponent() {
  return (  
    

    <section className="section section-no-background section-text-light section-center border-0 mt-0 mb-0 py-5" id="main">
    <div className="container py-5">
        <div className="row px-1 px-lg-5 px-md-5">
            <div className="col-12">
                <div className="animated-icon animated fadeIn" >
                  <!--?xml version="1.0" encoding="UTF-8"?-->
<svg id="icon_131718603927709" data-name="圖層 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.06 31.5" data-filename="double_quotes.svg" width="40" height="40" className="">
  <defs>
    <style>
      .uuid-c7102e16-d9db-41ba-ab04-4e2a8f2d8a3c {
        fill: #e76751;
        stroke-width: 0px;
      }
    </style>
  </defs>
  <path className="uuid-c7102e16-d9db-41ba-ab04-4e2a8f2d8a3c" d="m37.46,0c-5.46,1.79-16.39,7.29-16.39,20.77,0,2.2,0,10.73,7.06,10.73,3.6,0,7.06-2.89,7.06-7.29,0-3.44-2.27-7.02-7.06-7.02-1.2,0-1.87-.69-1.87-2.06,0-1.24.8-3.03,2.27-4.95,2-2.89,5.46-5.23,10.53-7.15l-1.6-3.03Zm-21.07,0C10.93,1.79,0,7.29,0,20.77c0,2.2,0,10.73,7.06,10.73,3.6,0,7.06-2.89,7.06-7.29,0-3.44-2.27-7.02-7.06-7.02-1.2,0-1.87-.69-1.87-2.06,0-1.24.8-3.03,2.27-4.95,2-2.89,5.46-5.23,10.53-7.15l-1.6-3.03Z" style="stroke-dasharray: 181, 183; stroke-dashoffset: 0;"></path>
<style>#icon_131718603927709 path, #icon_131718603927709 line, #icon_131718603927709 rect, #icon_131718603927709 circle, #icon_131718603927709 polyline { stroke: #EBD7BF; fill:#EBD7BF}</style></svg></div>

                <h1 className="text-color-tertiary font-weight-medium mt-5 mb-3 title-tag-ls fst-italic">
                    Beyond陪伴您<br className="hidden-sm-up">找到心中的自己
                </h1>
                <h3 className="font-weight-bold line-height-5 pt-5">用心，認真看待每一個人，<br>是<span className="text-color-tertiary px-1">Beyond</span>堅持的專業精神。</h3>
            </div>
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