import request from '@/libs/request'
import Link from 'next/link'
import React from 'react'
import BlogPagination from './components/BlogPagination'
const getBlogs = async (page: string): Promise<API.GetBlogsResponse> => {
  try {
    const res = await request<API.GetBlogsResponse>(`/v1/blogs?page=${page}`)
    return res
  } catch (error) {
    return {
      data: {
        data: [],
        current_page: 0,
        total: 0
      }
    }
  }
}
const page = async (props: { searchParams: { page: string } } ) => {
  const res = await getBlogs(props.searchParams?.page || '1')
  return (
    <div className='container pb-20'>
      <div>
        <div id="paginations" className="feature-article sec-com">
          <div className="container">
            <div className="feature-article-tt sec-com-tt">Bài viết nổi bật </div>
            <div className="feature-article-content">
              <div className="feature-article-list d-flex f-ctn gap-10 mt-10">
                {res.data.data.map((blog: Model.Blog) => (<div className=" hover:shadow-lg col-3 feature-article-item rounded-2xl overflow-hidden">
                  <div className="feature-article-inner">
                    <div className="img">
                      <div className="inner"> 
                        <Link href={`/blogs/${blog.slug}`}>
                          <img src={blog.image} alt={blog.title} />            
                        </Link>
                      </div>
                  </div>
                  <div className=' p-5'>
                    <div className="content  mb-3">
                        <Link className=" hover:text-[#7C0FD1] text-4xl font-semibold" href={`/blogs/${blog.slug}`}>{ blog.title }</ Link>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: blog?.content || '' }} className='line-clamp-3'></div>
                    </div>
                  </div>
                </div>))}
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center mt-10'>
          <BlogPagination defaultCurrent={res.data.current_page} total={res.data.total} path="/blogs" />
        </div>
      </div>
    </div>
  )
}

export default page