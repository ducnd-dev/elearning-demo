// import { useTranslations } from 'next-intl';

import Link from 'next/link';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function DashboardLayout(props: { children: React.ReactNode }) {
  // const t = useTranslations('DashboardLayout');

  return (
    <>
      <Header />
      <div className="grid min-h-screen grid-cols-12 ">
        <div className="col-span-3 px-4">
          <div>Profile</div>
          <ul className="px-4 font-semibold">
            <li className="mt-3">
              <Link href="/dashboard" className="flex items-center gap-3">
                <img src="https://khanhhung.academy/learn/assets/images/mb-ic-3.svg" alt="" />
                {' '}
                Dashboard
              </Link>
            </li>
            <li className="mt-3">
              <Link href="/dashboard/forgot-password" className="flex items-center gap-3">
                <img src="https://khanhhung.academy/learn/assets/images/mb-ic-3.svg" alt="" />
                Quên mật khẩu
              </Link>
            </li>
            <li className="mt-3">
              <Link href="/dashboard/profile" className="flex items-center gap-3">
                <img src="https://khanhhung.academy/learn/assets/images/mb-ic-3.svg" alt="" />
                Profile C1
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-9">
          {props.children}
        </div>
      </div>
      <Footer />
    </>
  );
}

export const dynamic = 'force-dynamic';
