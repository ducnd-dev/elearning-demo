'use client';
import { Sidebar } from '@/app/[locale]/(auth)/dashboard/components/Sidebar'
import { MenuOutlined } from '@ant-design/icons';
import { Drawer } from 'antd'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'

const DrawerHeader = () => {
  const [open, setOpen] = useState(false);
  const showMenuOutlined = usePathname().includes('/dashboard');

  return (
    <>
      <Drawer className="lg:hidden" open={open} onClose={() => setOpen(false)} placement="left">
        <Sidebar />
      </Drawer>
      {showMenuOutlined && <MenuOutlined className="!lg:hidden cursor-pointer px-5" onClick={() => setOpen(true)} />}

    </>
  )
}

export default DrawerHeader