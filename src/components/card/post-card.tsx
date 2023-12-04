import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function PostCard(props: PostType) {
  const { title, description, author, date } = props;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{author}</p>
      </CardContent>
      <CardFooter>
        <p>{date}</p>
      </CardFooter>
    </Card>
  );
}
