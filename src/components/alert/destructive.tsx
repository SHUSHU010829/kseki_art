import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { PiSirenFill } from "react-icons/pi";

interface Props {
  title: string;
  description: string;
}

export function AlertDestructive({ title, description }: Props) {
  return (
    <Alert variant="destructive">
      <div className="flex items-center pb-1 gap-2">
        <PiSirenFill />
        <AlertTitle>{title}</AlertTitle>
      </div>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
}
