import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Layout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // unstable_setRequestLocale(props.params.locale);
  return (
    <>
      <Header />
      <div className="min-h-screen w-full px-1 mt-[96px] md:mt-[112px]">
        <div>
          {props.children}
        </div>
      </div>
      <Footer />
    </>
  );
}
