'use client';

import MyNoteBigCard from '@/components/mynotes/MyNoteBigCard';

import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { GET_MYNOTE_BY_ID } from '@/lib/mynotes/Queries';
import { useQuery } from '@apollo/client';

export default function MynoteUpdatePage({ params }) {
  //const router = useRouter();
  const { id } = params.id;
  const { user } = useAuth();

  const { data, error, loading } = useQuery(GET_MYNOTE_BY_ID, {
    variables: {
      id,
    },
  });

  if (error) return <div>Something went wrong</div>;
  if (loading) return <div>Loading</div>;

  return (
    <div>
      <MyNoteBigCard mynote={data.mynote} user={user} />
    </div>
  );
}
