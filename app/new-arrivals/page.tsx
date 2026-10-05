import { Metadata } from 'next';
import NewArrivalsView from '@/components/views/NewArrivalsView';

export const metadata: Metadata = {
  title: 'New Arrivals | Korean Hair Accessories Wholesale',
  description:
    'Discover the latest additions to the Edamoneglint wholesale collection. Fresh seasonal Korean hair clips, organza bows, twist headbands, and velvet styles.',
};

export default function NewArrivalsPage() {
  return <NewArrivalsView />;
}
