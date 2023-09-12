import { getServerSession } from 'next-auth';

export default async function Protected() {
  const session = await getServerSession();
  if (!session) {
    throw new Error('Not authenticated');
  }

  return <>This is a protected page</>;
}
