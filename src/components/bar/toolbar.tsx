"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  PiFilesDuotone,
  PiBookmarksFill,
  PiPencilSimpleLineDuotone,
  PiUserCircleGearFill,
} from "react-icons/pi";

export function ToolBar() {
  return (
    <div className="border-r p-3 h-screen flex flex-col justify-between">
      <div className="flex flex-col gap-5 my-auto">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button variant="ghost" size="icon">
                <PiFilesDuotone className="text-2xl" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={20}>
              <p>看文！</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Button variant="ghost" size="icon">
                <PiBookmarksFill className="text-2xl" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={20}>
              <p>我的收藏</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Button variant="outline" size="icon">
                <PiPencilSimpleLineDuotone className="text-2xl" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={20}>
              <p>發佈作品</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div>
        <Button variant="ghost" size="icon">
          <PiUserCircleGearFill className="text-2xl" />
        </Button>
      </div>
    </div>
  );
}
