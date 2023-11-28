"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  PiFilesDuotone,
  PiBookmarksFill,
  PiFilesFill,
  PiPencilSimpleLineDuotone,
  PiUserCircleGearFill,
  PiBookmarksDuotone,
  PiPencilSimpleLineFill,
} from "react-icons/pi";
import { IconButtonToolTip } from "@/components/button/icon-button-tooltip";


function HoverIconButton({
  Icon,
  HoverIcon,
  tip,
  onClick,
}: {
  Icon: React.ElementType;
  HoverIcon: React.ElementType;
  tip: string;
  onClick: () => void;
}) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <IconButtonToolTip tip={tip}>
      <div
        className="cursor-pointer p-2 flex items-center rounded-lg"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={onClick}
      >
        {isHovering ? (
          <HoverIcon className="text-2xl transition duration-300" />
        ) : (
          <Icon className="text-2xl transition duration-300" />
        )}
      </div>
    </IconButtonToolTip>
  );
}

export function ToolBar() {
  const router = useRouter();

  return (
    <div className="border-r p-3 h-screen flex flex-col justify-between bg-white w-16">
      <div className="flex flex-col gap-5 my-auto">
        <HoverIconButton
          Icon={PiFilesDuotone}
          HoverIcon={PiFilesFill}
          tip="看文！"
          onClick={() => {router}}
        />
        <HoverIconButton
          Icon={PiBookmarksDuotone}
          HoverIcon={PiBookmarksFill}
          tip="我的收藏"
          onClick={() => {}}
        />
        <HoverIconButton
          Icon={PiPencilSimpleLineDuotone}
          HoverIcon={PiPencilSimpleLineFill}
          tip="發佈作品"
          onClick={() => {}}
        />
      </div>
      <div>
        <Button variant="ghost" size="icon">
          <PiUserCircleGearFill className="text-2xl" />
        </Button>
      </div>
    </div>
  );
}
