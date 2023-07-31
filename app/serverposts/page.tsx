//import type { Metadata } from 'next';
import Link from 'next/link';
import { getClient } from '@/lib/client';
import { ApolloWrapper } from '../cc/apollo-wrapper';
import { AllServerPostsDocument } from '@/lib/nextpress/documents.generated';
//import { GET_ALL_BLOGPOSTS } from '@/lib/blogposts/Queries';
//import BlogpostCard from '@/components/blogposts/BlogpostCard';

export const dynamic = 'force-dynamic';

export default async function Page() {
  const data = await getClient().query({
    query: AllServerPostsDocument,
  });
  const serverposts =
    data?.data?.serverposts?.edges?.map((edge) => edge.node) || [];
  console.log(serverposts);

  // we are using Apollo Wrapper here too so we can use
  // useMutation in the Poll component
  return (
    <ApolloWrapper>
      <div className='flex justify-center'>
        <main className='bg-white my-3 md:my-6 md:rounded-lg max-w-3xl'>
          <section className='flex flex-col items-start justify-start px-12 pt-12 pb-2'>
            <h1 className='text-2xl sm:text-4xl font-extrabold text-gray-800'>
              Serverposts
            </h1>
          </section>
          <div className='flex justify-center items-center mt-6'>
            <ul className='grid grid-cols-1 gap-x-6 mb-6'>
              {serverposts &&
                serverposts.length > 0 &&
                serverposts.map((serverpost) => {
                  return (
                    <ul key={serverpost.id} className='text-indigo-800'>
                      <li>
                        <p>{serverpost.title}</p>
                        <Link
                          href={`/serverposts/${serverpost.slug}`}
                          className='mt-3 text-indigo-600 inline-flex items-center'>
                          Read more
                          <svg
                            fill='none'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            className='w-4 h-4 ml-2'
                            viewBox='0 0 24 24'>
                            <path d='M5 12h14M12 5l7 7-7 7'></path>
                          </svg>
                        </Link>
                      </li>
                    </ul>
                  );
                })}

              {!serverposts ||
                (serverposts.length === 0 && (
                  <li>
                    <p>Oops, no serverposts found!</p>
                  </li>
                ))}
            </ul>
          </div>
        </main>
      </div>
    </ApolloWrapper>
  );
}
