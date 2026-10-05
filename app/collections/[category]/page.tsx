import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CATEGORIES } from '@/data/products';
import CategoryDetailView from '@/components/views/CategoryDetailView';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = CATEGORIES.find((c) => c.slug === categorySlug);

  if (!category) {
    return {
      title: 'Collection Not Found',
    };
  }

  return {
    title: `${category.name} Wholesale`,
    description: category.description,
  };
}

export default async function CategoryDetailPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = CATEGORIES.find((c) => c.slug === categorySlug);

  if (!category) {
    notFound();
  }

  return <CategoryDetailView category={category} categorySlug={categorySlug} />;
}
