'use client';

import { useRouter } from 'next/navigation';
import { WholesaleContent } from '@/data/websiteContent';
import AdminLayoutShell from '@/components/admin/AdminLayoutShell';
import WholesaleContentEditor from '@/components/admin/content/WholesaleContentEditor';
import { useWebsiteContent } from '@/context/WebsiteContentContext';

export default function WholesaleContentPage() {
  const router = useRouter();
  const { content, updateWholesaleContent } = useWebsiteContent();

  const handleSave = (updated: WholesaleContent) => {
    updateWholesaleContent(updated);
  };

  return (
    <AdminLayoutShell activeTabTitle="Website Content">
      <WholesaleContentEditor
        initialContent={content.wholesale}
        onSave={handleSave}
        onBack={() => router.push('/admin/website-content')}
      />
    </AdminLayoutShell>
  );
}
