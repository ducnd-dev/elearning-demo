// import { useTranslations } from 'next-intl';
import '@/styles/home.css';
import '@/styles/root.css';
import '@/styles/dashboard.css';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

import { Sidebar } from './components/Sidebar';

export default function DashboardLayout(props: { children: React.ReactNode }) {
  // const t = useTranslations('DashboardLayout');

  return (
    <>
      <Header />
      <div className="mb-6 border-b border-dashed border-b-gray-300 mt-[96px] md:mt-[112px]"></div>
      <div className="grid min-h-screen grid-cols-12 ">
        <div className="col-span-2 hidden lg:block">
          <Sidebar />
        </div>
        <div className="col-span-full lg:col-span-9 mb-2">
          {props.children}
        </div>
      </div>
      <Footer />
    </>
  );
}

export const dynamic = 'force-dynamic';
