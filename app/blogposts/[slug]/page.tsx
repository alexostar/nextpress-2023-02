import { getClient } from '@/lib/client';
import { BlogpostBySlugDocument } from '@/lib/blogposts/documents.generated';
//import { ApolloWrapper } from '../../cc/apollo-wrapper';
import BlogpostBigCard from '@/components/blogposts/BlogpostBigCard';
//import { GET_BLOGPOST_BY_SLUG } from '@/lib/blogposts/Queries';

export const dynamic = 'force-dynamic';

type Params = {
  params: {
    slug: string;
  };
};

export default async function Page({ params: { slug } }: Params) {
  const data = await getClient().query({
    query: BlogpostBySlugDocument,
    // @ts-ignore
    variables: { id: slug, idType: 'SLUG' },
  });
  const blogpost = data.data.blogpost;

  return <BlogpostBigCard blogpost={blogpost} />;
}
