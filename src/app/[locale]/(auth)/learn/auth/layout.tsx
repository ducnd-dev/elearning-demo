import Header from '@/components/Header'
import React from 'react'
type Props = {
  children: React.ReactNode
}
const LearnLayout = ({ children }: Props) => {
  return (
    <>
        <Header />
      {children}
    </>
  )
}
export default LearnLayout
