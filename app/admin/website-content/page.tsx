'use client';

import { useRouter } from 'next/navigation';
import AdminLayoutShell from '@/components/admin/AdminLayoutShell';
import WebsiteContentOverview from '@/components/admin/content/WebsiteContentOverview';
import { useWebsiteContent } from '@/context/WebsiteContentContext';

export default function WebsiteContentPage() {
  const router = useRouter();
  const { content } = useWebsiteContent();

  const handleSelectPage = (pageId: string) => {
    router.push(`/admin/website-content/${pageId}`);
  };

  return (
    <AdminLayoutShell activeTabTitle="Website Content">
      <WebsiteContentOverview content={content} onSelectPage={handleSelectPage} />
    </AdminLayoutShell>
  );
}
