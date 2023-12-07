import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PiArrowUpRight } from "react-icons/pi";

export function PostCard(props: PostType) {
  const { title, outline, author, date, tags, count } = props;

  return (
    <Card>
      <CardHeader>
        <div className="flex gap-2 mb-5">
          {tags.map((tag) => (
            <div key={tag} className="cursor-pointer">
              <Badge variant="outline"># {tag}</Badge>
            </div>
          ))}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div>{outline}</div>
      </CardContent>
      <CardFooter>
        <div className="flex justify-end items-center w-full gap-3">
          <div className="flex gap-2">
            <span className="font-medium">{author}</span>
            <span className="text-gray-500"> ▪ </span>
            <span className="text-gray-500">{date}</span>
          </div>
          <div>
            <PiArrowUpRight className="text-base" />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
