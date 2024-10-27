import React from 'react';

import { MdDashboard, MdManageAccounts } from 'react-icons/md';
import { GrTransaction } from 'react-icons/gr';
import { IoAnalytics, IoSettings } from 'react-icons/io5';
import { RiShoppingCartLine } from 'react-icons/ri';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const menus = [
  {
    title: 'Дашборд',
    icon: <MdDashboard />,
    href: '/admin/dashboard'
  },
  {
    title: 'Товары',
    icon: <RiShoppingCartLine />,
    href: '/admin/products'
  },
  {
    title: 'Аккаунт',
    icon: <MdManageAccounts />,
    href: '/admin/account'
  },
  {
    title: 'Операции',
    icon: <GrTransaction />,
    href: '/admin/transactions'
  },
  {
    title: 'Аналитика',
    icon: <IoAnalytics />,
    href: '#'
  },
  {
    title: 'Настройки',
    icon: <IoSettings />,
    href: '#'
  }
];

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <div className='dark:bg-gray-900 bg-white w-[300px] min-h-screen p-4 shrink-0'>
      <div className="flex items-center gap-4">
        <Image className="size-12 rounded-lg" src="logo.svg" alt="logo" />
        <h2 className='text-[20px] font-semibold dark:text-white'>WholeSale</h2>
      </div>
      <ul className='space-y-4 mt-6'>
        {menus.map(menu => <Link key={menu.title} href={menu.href} className={`flex g-2 items-center p-4 rounded-lg cursor-pointer hover:bg-pink hover:text-white ${pathName === menu.href ? 'bg-pink text-white' : 'bg-gray-200'}`}>
          <div className='text-[20px]'>{menu.icon}</div>
          <p>{menu.title}</p>
        </Link>)}
      </ul>
    </div>
  );
};

export default Sidebar;