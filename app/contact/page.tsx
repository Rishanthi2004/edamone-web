import { Metadata } from 'next';
import ContactView from '@/components/views/ContactView';

export const metadata: Metadata = {
  title: 'Contact & Wholesale Enquiry | EDAMONEGLINT',
  description:
    'Connect with EDAMONEGLINT wholesale desk. Send your wholesale accessory requirements or chat directly on WhatsApp for catalogue pricing.',
};

export default function ContactPage() {
  return <ContactView />;
}
