
import { NavBar } from '@/components/bar/navbar';
import { ToolBar } from '@/components/bar/toolbar';
import { CookieUseDialog } from '@/components/dialog/cookie-use-dialog';

export default function TouristLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <div className="toolbar-nav-container z-50">
          <ToolBar />
          <NavBar />
        </div>
        <div className="content p-6">{children}</div>
        <CookieUseDialog />
      </div>
    </>
  );
}
