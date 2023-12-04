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
        <Button className="px-8">登入 ✨</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>登入 👋</DialogTitle>
          <DialogDescription>歡迎觀光本站 ⸜(๑˙ᵕ ˙๑)⸝</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button>
            <FaXTwitter className="mr-5 text-base" />
            Continue with Twitter
          </Button>
          <Button variant="outline">
            <FaGoogle className="mr-5 text-base" />
            Continue with Google
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
