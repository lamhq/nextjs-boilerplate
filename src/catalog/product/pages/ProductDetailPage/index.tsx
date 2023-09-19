import getService from '@/common/utils/getService';
import ProductService from '../../services/ProductService';

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  const productService = getService(ProductService);
  const product = await productService.findOneBySlug(params.slug);
  return <>{product.name}</>;
}
