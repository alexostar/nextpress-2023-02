'use client';

import Link from 'next/link';
import useAuth from '@/hooks/useAuth';

export default function Home() {
  const { user } = useAuth();
  const isUser = Boolean(user);

  return (
    <div>
      {isUser ? (
        <p className='text-left mt-5 mb-10 text-indigo-100 '>
          You are logged in as {user.username}
        </p>
      ) : (
        <p className='text-left mt-5 mb-10 text-indigo-100'>
          Nobody is logged in
        </p>
      )}
      <ul className='list-disc pl-4 text-xl'>
        <li>
          <Link href='/cc' className='underline'>
            Client Components example
          </Link>
        </li>
        <li>
          <Link href='/rsc' className='underline'>
            RSC example
          </Link>
        </li>
        <li>
          <Link href='/blogposts' className='underline'>
            NextPress blog (server compponent)
          </Link>
        </li>
      </ul>
    </div>
  );
}
