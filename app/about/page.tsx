import { Metadata } from 'next';
import AboutView from '@/components/views/AboutView';

export const metadata: Metadata = {
  title: 'About Edamoneglint | Korean Hair Accessories Wholesale',
  description:
    'Learn more about EDAMONEGLINT. Curated Korean-inspired hair accessories crafted with beautiful details and wholesale simplicity for modern boutiques.',
};

export default function AboutPage() {
  return <AboutView />;
}
