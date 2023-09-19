import { singleton } from 'tsyringe';
import { Product } from '@/api/catalog/types';
import HttpError from '@/error/types/HttpError';

@singleton()
export default class ProductService {
  public async findOneBySlug(slug: string) {
    const resp = await fetch(`http://localhost:3000/api/catalog/products/${slug}`);
    if (!resp.ok) {
      throw new HttpError(resp);
    }
    const product: Product = await resp.json();
    return product;
  }
}
