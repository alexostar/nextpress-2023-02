import { useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

import useAuth from '@/hooks/useAuth';

export default function UnAuthContent({ children }: { children: ReactNode }) {
  const { loggedIn, loading } = useAuth();
  const router = useRouter();

  // Navigate authenticated users to Home page.
  useEffect(() => {
    if (!loading && loggedIn) {
      router.push('/');
    }
  }, [loggedIn, loading, router]);

  if (!loggedIn) {
    return <>{children}</>;
  }

  return <p>Loading...</p>;
}
