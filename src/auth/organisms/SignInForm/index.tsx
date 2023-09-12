'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { Credentials } from '@/auth/types';
import { useSearchParams } from 'next/navigation';
import cx from 'clsx';

const defaultFormValues = {
  username: 'daibanglam@gmail.com',
  password: '123123',
};

export type SignInErrorTypes =
  | 'Signin'
  | 'OAuthSignin'
  | 'OAuthCallback'
  | 'OAuthCreateAccount'
  | 'EmailCreateAccount'
  | 'Callback'
  | 'OAuthAccountNotLinked'
  | 'EmailSignin'
  | 'CredentialsSignin'
  | 'SessionRequired'
  | 'default';

const authErrors: Record<SignInErrorTypes, string> = {
  Signin: 'Try signing in with a different account.',
  OAuthSignin: 'Try signing in with a different account.',
  OAuthCallback: 'Try signing in with a different account.',
  OAuthCreateAccount: 'Try signing in with a different account.',
  EmailCreateAccount: 'Try signing in with a different account.',
  Callback: 'Try signing in with a different account.',
  OAuthAccountNotLinked:
    'To confirm your identity, sign in with the same account you used originally.',
  EmailSignin: 'The e-mail could not be sent.',
  CredentialsSignin: 'Sign in failed. Check the details you provided are correct.',
  SessionRequired: 'Please sign in to access this page.',
  default: 'Unable to sign in.',
};

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Credentials>({
    defaultValues: defaultFormValues,
  });
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '';
  const errorType = searchParams.get('error') || '';
  const errorMsg = errorType && (authErrors[errorType as SignInErrorTypes] ?? authErrors.default);
  const onSubmit: SubmitHandler<Credentials> = (data) => {
    signIn('credentials', {
      username: data.username,
      password: data.password,
      callbackUrl,
    });
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      {errorMsg && (
        <div
          className="mb-4 flex items-center rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-800 dark:border-red-800 dark:bg-gray-800 dark:text-red-400"
          role="alert">
          <svg
            className="mr-3 inline h-4 w-4 flex-shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <div>{errorMsg}</div>
        </div>
      )}
      <div className="mb-6">
        <label
          htmlFor="email"
          className={cx('mb-2 block text-sm font-medium', errors.username && 'text-red-700')}>
          Email address
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className={cx(
            'block w-full rounded-lg border p-2.5 text-sm focus:ring-red-500',
            errors.username &&
              'border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500',
          )}
          {...register('username', { required: true, minLength: 6 })}
        />
        {errors.username && <p className="mt-2 text-sm text-red-600">This field is required</p>}
      </div>
      <div>
        <label
          htmlFor="password"
          className={cx('mb-2 block text-sm font-medium', errors.password && 'text-red-700')}>
          Password
        </label>
        <input
          type="password"
          autoComplete="current-password"
          className={cx(
            'block w-full rounded-lg border p-2.5 text-sm focus:ring-red-500',
            errors.password &&
              'border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500',
          )}
          {...register('password', { required: true, minLength: 6 })}
        />
        {errors.password && <p className="mt-2 text-sm text-red-600">This field is required</p>}
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Sign in
        </button>
      </div>

      <div>
        <button
          type="button"
          onClick={() => signIn('github', { callbackUrl })}
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Sign in with Github
        </button>
      </div>
    </form>
  );
}
