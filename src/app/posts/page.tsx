import { PostCardGroup } from '@/components/group/post-card-group';
import { Separator } from "@/components/ui/separator";
import TouristLayout from '@/layout/TouristLayout';
import postsData from "@/data/posts.json";
import { WebsiteAlert } from '@/components/alert/website-alert';

export default function Page() {
  return (
    <TouristLayout>
      <WebsiteAlert description='新功能告知：熱門觀看'/>
      <div className="mb-5 font-bold text-2xl">最新文章</div>
      <Separator className='mb-5' />
      <PostCardGroup posts={postsData} />
    </TouristLayout>
  );
}
