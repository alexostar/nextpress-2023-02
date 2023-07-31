'use client';

import './globals.css';
import { Space_Grotesk } from 'next/font/google';
import clsx from 'clsx';
//import { ApolloWrapper } from "./cc/apollo-wrapper";
import Link from 'next/link';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

import { ApolloProvider } from '@apollo/client';
import { client } from '@/lib/originalApolloClient';
import { AuthProvider } from '@/hooks/useAuth';

/* USE AGAIN WHEN THIS BECOMES SERVERCOMPONENT
export const metadata = {
  title: 'Apollo Next.js 13 Poll Demo',
};
*/

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <ApolloProvider client={client}>
        <AuthProvider>
          <body
            className={clsx('bg-blue-600 text-white', spaceGrotesk.className)}>
            <main className='max-w-5xl p-8'>
              <header className='mb-4'>
                <h1 className='text-3xl underline underline-offset-2'>
                  <Link href='/' className='hover:decoration-blue-900'>
                    Apollo Next.js 13 Poll Demo
                  </Link>
                </h1>
              </header>

              {children}
            </main>
          </body>
        </AuthProvider>
      </ApolloProvider>
    </html>
  );
}
