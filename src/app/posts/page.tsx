import { PostCardGroup } from '@/components/group/post-card-group';
import TouristLayout from '@/layout/TouristLayout';

import postsData from "@/data/posts.json";

export default function Page() {
  return (
    <TouristLayout>
      <PostCardGroup posts={postsData} />
    </TouristLayout>
  );
}
