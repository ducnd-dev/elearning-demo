import { unstable_setRequestLocale } from 'next-intl/server';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Layout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(props.params.locale);
  // const t = useTranslations('RootLayout');

  return (
    <>
      <Header />
      <div className="min-h-screen w-full bg-gradient-to-b from-[#580b94] to-[#a75ee0] px-1">
        <div className="container mx-auto pt-24">
          {props.children}
        </div>
      </div>
      <Footer />
    </>
  );
}
