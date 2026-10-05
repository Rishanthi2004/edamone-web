'use client';

import { useRouter } from 'next/navigation';
import { NewArrivalsContent } from '@/data/websiteContent';
import AdminLayoutShell from '@/components/admin/AdminLayoutShell';
import NewArrivalsContentEditor from '@/components/admin/content/NewArrivalsContentEditor';
import { useWebsiteContent } from '@/context/WebsiteContentContext';

export default function NewArrivalsContentPage() {
  const router = useRouter();
  const { content, updateNewArrivalsContent } = useWebsiteContent();

  const handleSave = (updated: NewArrivalsContent) => {
    updateNewArrivalsContent(updated);
  };

  return (
    <AdminLayoutShell activeTabTitle="Website Content">
      <NewArrivalsContentEditor
        initialContent={content.newArrivals}
        onSave={handleSave}
        onBack={() => router.push('/admin/website-content')}
      />
    </AdminLayoutShell>
  );
}
