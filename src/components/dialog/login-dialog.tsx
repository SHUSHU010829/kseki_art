"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaXTwitter, FaGoogle } from "react-icons/fa6";

export function LogInDialog() {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>登入 ✨</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>登入 👋</DialogTitle>
          <DialogDescription>登入後就可以投票及投稿！</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button variant="outline">
            <FaGoogle className="mr-5 text-base" />
            Continue with Google
          </Button>
          <Button variant="outline">
            <FaXTwitter className="mr-5 text-base" />
            Continue with Twitter
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
