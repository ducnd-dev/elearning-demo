'use client';
import { Pagination } from 'antd'
import { useRouter } from 'next-nprogress-bar';
import React from 'react'

type Props = {
  defaultCurrent: number;
  total: number;
  path: string;
}
const BlogPagination = (props: Props) => {
  const router = useRouter()
  return (
    <Pagination defaultCurrent={props.defaultCurrent} total={props.total} onChange={(page) => router.push(`${props.path}?page=${page}`)} />
  )
}

export default BlogPagination