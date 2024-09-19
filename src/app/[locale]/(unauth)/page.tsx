import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { ColleagueCourses } from './components/home/ColleagueCourses';
import { TopSession } from './components/home/TopSession';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Index(props: { params: { locale: string } }) {
  unstable_setRequestLocale(props.params.locale);
  // const t = useTranslations('Index');

  return (
    <>
      <TopSession />
      <ColleagueCourses />
    </>
  );
}
