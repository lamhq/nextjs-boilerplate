import { getServerSession } from 'next-auth';

export default async function Home() {
  const session = await getServerSession();
  if (session) {
    return <>{session?.user?.name}</>;
  }

  return (
    <>
      <p>Not logged in</p>
    </>
  );
}
