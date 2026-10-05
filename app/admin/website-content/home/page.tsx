'use client';

import { useRouter } from 'next/navigation';
import { HomeContent } from '@/data/websiteContent';
import AdminLayoutShell from '@/components/admin/AdminLayoutShell';
import HomeContentEditor from '@/components/admin/content/HomeContentEditor';
import { useWebsiteContent } from '@/context/WebsiteContentContext';

export default function HomeContentPage() {
  const router = useRouter();
  const { content, updateHomeContent } = useWebsiteContent();

  const handleSave = (updated: HomeContent) => {
    updateHomeContent(updated);
  };

  return (
    <AdminLayoutShell activeTabTitle="Website Content">
      <HomeContentEditor
        initialContent={content.home}
        onSave={handleSave}
        onBack={() => router.push('/admin/website-content')}
      />
    </AdminLayoutShell>
  );
}
