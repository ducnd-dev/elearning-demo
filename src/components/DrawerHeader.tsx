'use client';
import { Sidebar } from '@/app/[locale]/(auth)/dashboard/components/Sidebar'
import { useUser } from '@/stores/auth-store';
import { MenuOutlined } from '@ant-design/icons';
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
      <MenuOutlined className="md:!hidden cursor-pointer px-5 !text-gray-400" onClick={() => setOpen(true)} />
    </> : <></>
  )
}

export default DrawerHeader
