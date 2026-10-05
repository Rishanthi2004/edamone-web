import { Metadata } from 'next';
import WholesaleView from '@/components/views/WholesaleView';

export const metadata: Metadata = {
  title: 'Wholesale Program | Hair Accessories for Boutiques & Resellers',
  description:
    'Stock premium Korean-inspired hair accessories for your boutique, salon, or online shop. Low MOQs, tiered wholesale pricing, fast worldwide delivery, and direct WhatsApp communication.',
};

export default function WholesalePage() {
  return <WholesaleView />;
}
