import Header from '@/components/Header'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'
type Props = {
  children: React.ReactNode
}
const LearnLayout = async ({ children }: Props) => {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')
  if (!token) {
    redirect('/')
  }
  return (
    <>
        <Header />
      {children}
    </>
  )
}
export default LearnLayout
