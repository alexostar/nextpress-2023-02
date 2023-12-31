'use client';

import { useRouter } from 'next/router';

import SetPasswordForm from '@/components/users/SetPasswordForm';

export default function SetPassword() {
  const router = useRouter();
  const resetKey = String(router.query.key || '');
  const login = String(router.query.login || '');

  return (
    <div>
      <SetPasswordForm resetKey={resetKey} login={login} />
    </div>
  );
}
