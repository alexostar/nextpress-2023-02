'use client';

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
    </div>
  );
}
