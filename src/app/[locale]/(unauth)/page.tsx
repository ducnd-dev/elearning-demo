import '@/styles/home.css';
import '@/styles/root.css';

import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { Benefit } from './components/home/Benefit';
import { ColleagueClubMask } from './components/home/ColleagueClubMask';
import { ColleagueCourses } from './components/home/ColleagueCourses';
import { ComingSoon } from './components/home/ComingSoon';
import { CoursesPersonalizedData } from './components/home/coursesPersonalizedData';
import { Faqs } from './components/home/Faqs';
import { Intro } from './components/home/Intro';
import { Staff } from './components/home/Staff';
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
      <div className="banner-receive txt-white layer-digital">
        <TopSession />
        <ColleagueCourses />
        <ComingSoon />
        <ColleagueClubMask />
        <Benefit />
      </div>
      <CoursesPersonalizedData />
      <Intro />
      <Staff />
      <Faqs />
    </>
  );
}
