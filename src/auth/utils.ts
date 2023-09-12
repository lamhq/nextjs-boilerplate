import { User } from 'next-auth';
import { Credentials } from './types';

const user: User = {
  id: '1213',
  name: 'Albert',
  email: 'daibanglam@gmail.com',
  image: 'https://avatars.githubusercontent.com/u/4916597?v=4',
};

export async function validateCredentials(credentials?: Credentials): Promise<User | null> {
  if (credentials && credentials.username === user?.email && credentials.password === '123123') {
    return user;
  }

  return null;
}
