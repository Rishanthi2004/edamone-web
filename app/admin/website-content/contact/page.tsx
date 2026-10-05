'use client';

import { useRouter } from 'next/navigation';
import { ContactContent } from '@/data/websiteContent';
import AdminLayoutShell from '@/components/admin/AdminLayoutShell';
import ContactContentEditor from '@/components/admin/content/ContactContentEditor';
import { useWebsiteContent } from '@/context/WebsiteContentContext';

export default function ContactContentPage() {
  const router = useRouter();
  const { content, updateContactContent } = useWebsiteContent();

  const handleSave = (updated: ContactContent) => {
    updateContactContent(updated);
  };

  return (
    <AdminLayoutShell activeTabTitle="Website Content">
      <ContactContentEditor
        initialContent={content.contact}
        onSave={handleSave}
        onBack={() => router.push('/admin/website-content')}
      />
    </AdminLayoutShell>
  );
}
