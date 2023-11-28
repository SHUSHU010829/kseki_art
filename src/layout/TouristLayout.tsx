'use client';

import { NavBar } from '@/components/bar/navbar';
import { ToolBar } from '@/components/bar/toolbar';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function TouristLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const userId = getCookie('userId') || '';

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   if (userId === '') {
  //     router.push('/');
  //   }
  // }, [router, userId]);

  return (
    <>
      <div>
        <div className="toolbar-nav-container">
          <ToolBar />
          <NavBar />
        </div>
        <div className="content p-6">{children}</div>
      </div>
    </>
  );
}
