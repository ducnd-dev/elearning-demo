'use sever';
import '@/styles/course.css';
import '@/styles/home.css';
import '@/styles/root.css';

// import { revalidatePath } from 'next/cache';

import request from '@/libs/request';

import CourePlayer from './components/CourePlayer';
import Header from '@/components/Header';

const getData = async (slug: string) => {
  try {
    const data = await request<API.CourseMaterial>(`/v1/course_materials/${slug}`);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const fetchData = async (categoryId: string) => {
  try {
    const data = await request<API.GetCoursesResponse>(`/v1/categories/${categoryId}`);
    return data;
  } catch (error: any) {
    console.error('Error fetching data:', error.message);
    return null;
  }
};

export default async function Page(props: { params: { slug: string; categoryId: string } }) {
  // revalidatePath('/[locale]/(auth)/learn/auth/[categoryId]/[slug]');
  const data = await getData(props.params.slug);
  const listData = await fetchData(props.params.categoryId);
  return (
    <>
      {/* <Header showBanner={false}/> */}
      <div className="border-t border-dashed border-gray-200 mt-[100px]">
        {listData && <CourePlayer data={data || {} as  Model.CourseMaterial} listData={listData} />}
      </div>
    </>
  );
}
