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
      <div className="min-h-screen w-full px-1">
        <div>
          {props.children}
        </div>
      </div>
      <Footer />
    </>
  );
}
