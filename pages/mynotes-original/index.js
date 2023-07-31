import useAuth from '@/hooks/useAuth';
import AuthContent from '@/components/users/AuthContent';
import Link from 'next/link';

import MyNotesFetch from '@/components/mynotes/MyNotesFetch';

export default function MyNotes() {
  const { user } = useAuth();
  const isUser = Boolean(user);

  return (
    <div className='flex justify-center'>
      <main className='bg-white my-3 md:my-6 md:rounded-lg max-w-3xl '>
        <section className='flex flex-col items-start justify-start px-12 pt-12 pb-2'>
          <h1 className='text-2xl sm:text-4xl font-extrabold text-gray-800'>
            Notes - CSR and CRUD Demo
          </h1>
          <p className='text-left mt-5 text-gray-800 text-lg'>
            This section is purely for demo purposes and the posts will be
            deleted at the end of the day (except the notes by IceSwede and
            Alexstar). The maximum number of posts per user is set to five.
          </p>
          {isUser ? (
            <p className='text-left mt-5 text-indigo-700  '>
              You are logged in as {user.username}
            </p>
          ) : (
            <p></p>
          )}
          <Link
            href={`/mynotes/create`}
            className='bg-indigo-600 text-white rounded-md my-8 py-2 px-4 flex justify-center'>
            Create Note
          </Link>
        </section>
        <AuthContent>
          {user ? (
            <MyNotesFetch user={user} />
          ) : (
            <p>You don&#39;t have the permissions necessary to create posts.</p>
          )}
        </AuthContent>
      </main>
    </div>
  );
}
