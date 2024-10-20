import Footer from '@/components/Footer';
import Header from '@/components/Header';
import request from '@/libs/request';
import { useSetting } from '@/stores/common-store';

const getSettings = async (): Promise<Model.Setting> => {
  try {
    const res = await request<API.GetSettingsResponse>('/v1/setting/1');
    console.log(res.data);
    
    return res.data;
  } catch (e) {
    return {} as Model.Setting;
  }
}

export default async function Layout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // unstable_setRequestLocale(props.params.locale);
  const { setSetting, setting } = useSetting();
  // const t = useTranslations('RootLayout');
  await getSettings().then((res) => setSetting(res));
  console.log(setting);
  
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
