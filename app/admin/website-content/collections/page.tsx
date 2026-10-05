'use client';

import { useRouter } from 'next/navigation';
import { CollectionsContent } from '@/data/websiteContent';
import AdminLayoutShell from '@/components/admin/AdminLayoutShell';
import CollectionsContentEditor from '@/components/admin/content/CollectionsContentEditor';
import { useWebsiteContent } from '@/context/WebsiteContentContext';

export default function CollectionsContentPage() {
  const router = useRouter();
  const { content, updateCollectionsContent } = useWebsiteContent();

  const handleSave = (updated: CollectionsContent) => {
    updateCollectionsContent(updated);
  };

  return (
    <AdminLayoutShell activeTabTitle="Website Content">
      <CollectionsContentEditor
        initialContent={content.collections}
        onSave={handleSave}
        onBack={() => router.push('/admin/website-content')}
      />
    </AdminLayoutShell>
  );
}
