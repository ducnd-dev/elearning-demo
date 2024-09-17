import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Portfolio',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const Portfolio = (props: { params: { locale: string } }) => {
  unstable_setRequestLocale(props.params.locale);
  // const t = useTranslations('Portfolio');

  return (
    <>
      2
    </>
  );
};

export default Portfolio;
