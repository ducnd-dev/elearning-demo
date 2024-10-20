import request from '@/libs/request'
import React from 'react'
const getBlogs = async (slug: string): Promise<Model.Blog | null> => {
  try {
    const res = await request<API.GetBlogResponse>(`/v1/blogs/${slug}`)
    return res.data
  } catch (error) {
    return null
  }
}
const BlogDetail = async (props: { params: { slug: string } }) => {
  const blog = await getBlogs(props.params.slug)
  return (
    <div className='container py-10'>
      <div className='grid grid-cols-12'>
        <div className='col-span-2 hidden lg:block '></div>
          <div className='col-span-8 order-3'>
            <div className='text-[#7C0FD1] uppercase text-lg font-semibold'>{blog?.created_at}</div>
            <h2 className='text-5xl font-semibold border-b border-gray-200 mb-10 mt-4'>{blog?.title}</h2>
            <div className='flex gap-10 w-full mb-5'>
              <div className='flex justify-center '>
                <div className='ml-2 font-semibold'>{blog?.user?.first_name} {blog?.user.last_name}</div>
              </div>
              <div className='flex items-center gap-3'>
                <div className="acces brd-8 d-flex watched gap-2" title="2,143">
                  <span className="ic w-full"> <img src="https://khanhhung.academy/template/assets/images/ic-eye.svg" alt="" className='object-contain'/></span>
                  <span className="txt">{blog?.views}</span>
                </div>
                {/* <div className="acces brd-8 d-flex liked gap-2 items-center" title="Thả tym">
                  <span className="ic"> <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M14.04 3.795a3.6 3.6 0 00-4.31-1.117c-.66.285-1.251.767-1.73 1.406-.479-.64-1.07-1.122-1.73-1.406a3.6 3.6 0 00-4.31 1.117c-.516.675-.788 1.52-.788 2.441 0 1.327.79 2.782 2.35 4.327 1.271 1.258 2.773 2.289 3.555 2.79a1.711 1.711 0 001.846 0c.781-.501 2.284-1.532 3.554-2.79 1.56-1.545 2.351-3 2.351-4.327 0-.921-.272-1.766-.788-2.441z" fill="#F9595F"></path>
                  </svg></span>
                  <span className="txt">0</span>
                </div>
                <div className="acces brd-8 d-flex shared gap-2 items-center" title="Sao chép liên kết">
                  <span className="ic"> <img src="https://khanhhung.academy/template/assets/images/ic-share.svg" alt="" /></span>
                  <span className="txt">0</span>
                  <span className="notice">Đã sao chép!</span>
                </div> */}
            </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: blog?.content || '' }}></div>
          </div>
      </div>
    </div>
  )
}

export default BlogDetail