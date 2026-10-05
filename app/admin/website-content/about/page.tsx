'use client';

import { useRouter } from 'next/navigation';
import { AboutContent } from '@/data/websiteContent';
import AdminLayoutShell from '@/components/admin/AdminLayoutShell';
import AboutContentEditor from '@/components/admin/content/AboutContentEditor';
import { useWebsiteContent } from '@/context/WebsiteContentContext';

export default function AboutContentPage() {
  const router = useRouter();
  const { content, updateAboutContent } = useWebsiteContent();

  const handleSave = (updated: AboutContent) => {
    updateAboutContent(updated);
  };

  return (
    <AdminLayoutShell activeTabTitle="Website Content">
      <AboutContentEditor
        initialContent={content.about}
        onSave={handleSave}
        onBack={() => router.push('/admin/website-content')}
      />
    </AdminLayoutShell>
  );
}
