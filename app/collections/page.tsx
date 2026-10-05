import { Metadata } from 'next';
import CollectionsView from '@/components/views/CollectionsView';

export const metadata: Metadata = {
  title: 'All Wholesale Collections',
  description:
    'Explore curated Korean hair accessories wholesale collections: hair clips, chiffon bows, mulberry satin scrunchies, padded headbands, and signature Seoul edits.',
};

export default function CollectionsPage() {
  return <CollectionsView />;
}
