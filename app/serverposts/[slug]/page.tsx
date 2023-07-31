import { getClient } from '@/lib/client';
import { SingleServerPostDocument } from '@/lib/nextpress/documents.generated';
//import { ApolloWrapper } from '../../cc/apollo-wrapper';
//import BlogpostBigCard from '@/components/blogposts/BlogpostBigCard';
//import { GET_BLOGPOST_BY_SLUG } from '@/lib/blogposts/Queries';

export const dynamic = 'force-dynamic';

type Params = {
  params: {
    slug: string;
  };
};

export default async function Page({ params: { slug } }: Params) {
  const data = await getClient().query({
    query: SingleServerPostDocument,
    // @ts-ignore
    variables: { id: slug, idType: 'SLUG' },
  });
  const serverpost = data.data.serverpost;

  return (
    <div>
      {/*@ts-ignore*/}
      <h1>{serverpost.title}</h1>
      {/*@ts-ignore*/}
      <p>{serverpost.content}</p>
    </div>
  );
}
