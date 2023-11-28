import { NavBar } from '@/components/bar/navbar'
import { ToolBar } from '@/components/bar/toolbar';
// import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex">
      <div className="toolbar-nav-container">
        <ToolBar />
        <NavBar />
      </div>
    </div>
  );
}
