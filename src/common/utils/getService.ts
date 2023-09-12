import { InjectionToken, container } from 'tsyringe';

export default function getService<T>(token: InjectionToken<T>) {
  return container.resolve(token);
}
