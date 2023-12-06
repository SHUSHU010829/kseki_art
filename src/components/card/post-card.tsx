import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
        <p>{date}</p>
      </CardFooter>
    </Card>
  );
}
