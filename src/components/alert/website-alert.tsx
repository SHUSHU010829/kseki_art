import {
  Card
} from "@/components/ui/card";
import { PiMegaphoneSimpleFill, PiXBold } from "react-icons/pi";

interface Props {
  description: string;
}

export function WebsiteAlert({ description }: Props) {
  return (
    <Card>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <PiMegaphoneSimpleFill className="m-3 mx-5 -scale-x-100" />
          <div className="font-medium">{description}</div>
        </div>
        <div>
          <PiXBold className="m-3 mx-5" />
        </div>
      </div>
    </Card>
  );
}
