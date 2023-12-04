"use client";

import { useState } from "react";
import { PiCookieFill } from "react-icons/pi";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export function CookieUseDialog() {
  const [open, setOpen] = useState(true);

  const handleSubmit = () => {
    setOpen(false);
  };

  return (
    <div >
      {/* {open && (
        <AlertDialog open>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Cookie 使用許可 🍪</AlertDialogTitle>
              <AlertDialogDescription>
                我們使用 cookie 來改進網站體驗。
                <br />
                點擊「同意」表示您接受使用 cookie。
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction className="w-full" onClick={handleSubmit}>
                <PiCookieFill className="mr-5 text-base" />
                好的，我同意 Cookie 使用
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )} */}
    </div>
  );
}
