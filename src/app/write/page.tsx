import { NewPost } from "@/components/new-post";
import TouristLayout from "@/layout/TouristLayout";

export default function Page() {
  return (
    <TouristLayout>
      <div className="flex justify-center">
        <NewPost />
      </div>
    </TouristLayout>
  );
}
