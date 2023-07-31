//import type { Metadata } from 'next';

import { getClient } from '@/lib/client';
import { ApolloWrapper } from '../cc/apollo-wrapper';
import { AllBlogpostsDocument } from '@/lib/blogposts/documents.generated';
//import { GET_ALL_BLOGPOSTS } from '@/lib/blogposts/Queries';
import BlogpostCard from '@/components/blogposts/BlogpostCard';

export const dynamic = 'force-dynamic';

export default async function Page() {
  const data = await getClient().query({
    query: AllBlogpostsDocument,
  });
  const blogposts =
    data?.data?.blogposts?.edges?.map((edge) => edge.node) || [];
  console.log(blogposts);

  // we are using Apollo Wrapper here too so we can use
  // useMutation in the Poll component
  return (
    <ApolloWrapper>
      <div className='flex justify-center'>
        <main className='bg-white my-3 md:my-6 md:rounded-lg max-w-3xl'>
          <section className='flex flex-col items-start justify-start px-12 pt-12 pb-2'>
            <h1 className='text-2xl sm:text-4xl font-extrabold text-gray-800'>
              Blog - About NextPress
            </h1>
            <p className='text-left mt-5 text-gray-800 text-lg'>
              The fictive use-case for the NextPress app is the following: An
              administrator of a WordPress site maintains a blog written in
              Markdown. A group of people contributes to the blog with text
              snippets in Markdown format (see{' '}
              <span className='italic'>My notes</span> after logging in). The
              group members can see all contrbutions but only edit and delete
              their own.
            </p>
            <p className='text-left mt-5 text-gray-800 text-lg'>
              The <span className='italic'>Blogposts</span> below give furhter
              insigth into the code base and the{' '}
              <span className='italic'>Notes</span> provide some additional
              details.
            </p>
          </section>
          <div className='flex justify-center items-center mt-6'>
            <ul className='grid grid-cols-1 gap-x-6 mb-6'>
              {blogposts &&
                blogposts.length > 0 &&
                blogposts.map((blogpost) => {
                  return <BlogpostCard key={blogpost.id} blogpost={blogpost} />;
                })}

              {!blogposts ||
                (blogposts.length === 0 && (
                  <li>
                    <p>Oops, no posts found!</p>
                  </li>
                ))}
            </ul>
          </div>
        </main>
      </div>
    </ApolloWrapper>
  );
}
