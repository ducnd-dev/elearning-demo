'use client';
import { Sidebar } from '@/app/[locale]/(auth)/dashboard/components/Sidebar'
import { useUser } from '@/stores/auth-store';
import { Drawer } from 'antd'
import React, { useState } from 'react'
import '@/styles/global.css';

const DrawerHeader = () => {
  const [open, setOpen] = useState(false);
  const { user } = useUser();

  return (
    user ? <>
      <Drawer open={open} onClose={() => setOpen(false)} placement="left" className='!w-[300px]'>
        <Sidebar setOpen={setOpen} />
      </Drawer>
      <img src="/assets/images/icons/icon-menu.png" alt="logo" className="cursor-pointer w-14 h-14 mt-5 md:mt-10" onClick={() => setOpen(true)} />
    </> : <></>
  )
}

export default DrawerHeader
