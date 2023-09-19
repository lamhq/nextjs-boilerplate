import { NextResponse } from 'next/server';
import products from '@/api/catalog/product/data';

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) {
    return NextResponse.json({ error: 'product_not_found' }, { status: 404 });
  }
  return NextResponse.json(product);
}
