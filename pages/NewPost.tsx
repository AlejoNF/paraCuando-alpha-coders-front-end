import NarvarUser from '@/components/NarvarUser';
import PostInfo from '@/components/posts/PostInfo';

export default function NewPost() {
  return (
    <div>
      <section>
        <NarvarUser />
      </section>
      <section>
        <PostInfo />
      </section>
    </div>
  );
}
