import Link from 'next/link'
import React from 'react'

const ThankYou = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Thank you for your purchase!</h1>
          <p className="text-lg">We will send you a confirmation email shortly.</p>
          <Link href="/learn/auth/1/1"><a className="text-blue-500">Go back to home</a></Link>
        </div>
      </div>
    </div>
  )
}

export default ThankYou