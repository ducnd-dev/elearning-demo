'use sever';
import '@/styles/course.css';
import '@/styles/home.css';
import '@/styles/root.css';

import CourePlayer from './components/CourePlayer';

const getData = async (slug: string) => {
  const res = await fetch(`/course/${slug}`);
  const data = await res.json();
  return data;
};
export default function Page(props: { params: { slug: string } }) {
  const data = getData(props.params.slug);
  return (
    <CourePlayer data={data} />
  );
}
