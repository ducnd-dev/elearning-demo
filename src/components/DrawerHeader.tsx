'use client';
import { Sidebar } from '@/app/[locale]/(auth)/dashboard/components/Sidebar'
import { MenuOutlined } from '@ant-design/icons';
import { Drawer } from 'antd'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import Menu from './Menu';
type Props = {
  setting: Model.Setting | null,
}
const DrawerHeader = (props: Props) => {
  const [open, setOpen] = useState(false);
  const showMenuOutlined = usePathname().includes('/dashboard');

  return (
    <>
      <Drawer open={open} onClose={() => setOpen(false)} placement="left" className='!w-[300px]'>
        {showMenuOutlined ? <Sidebar setOpen={setOpen} /> : <Menu setting={props.setting} setOpen={setOpen}/>}
      </Drawer>
      <MenuOutlined className="md:!hidden cursor-pointer px-5 !text-gray-400" onClick={() => setOpen(true)} />
    </>
  )
}

export default DrawerHeader
