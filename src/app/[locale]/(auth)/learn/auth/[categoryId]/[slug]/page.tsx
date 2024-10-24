'use sever';
import '@/styles/course.css';
import '@/styles/home.css';
import '@/styles/root.css';

import { revalidatePath } from 'next/cache';

import request from '@/libs/request';

import CourePlayer from './components/CourePlayer';
import Header from '@/components/Header';

const getData = async (slug: string) => {
  const data = await request<API.CourseMaterial>(`/v1/course_materials/${slug}`);
  return data;
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
  revalidatePath('/[locale]/(auth)/learn/auth/[categoryId]/[slug]');
  const data = await getData(props.params.slug);
  const listData = await fetchData(props.params.categoryId);
  return (
    <>
      <Header />
      <div className="border-t border-dashed border-gray-200">
        {listData && <CourePlayer data={data} listData={listData} />}
      </div>
    </>
  );
}
