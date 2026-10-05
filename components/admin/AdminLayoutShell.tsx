'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useProducts } from '@/context/ProductsContext';
import { INITIAL_ORDERS, INITIAL_CUSTOMERS } from '@/components/admin/mockData';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminHeader from '@/components/admin/AdminHeader';
import LogoutModal from '@/components/admin/LogoutModal';

interface AdminLayoutShellProps {
  children: React.ReactNode;
  activeTabTitle?: string;
}

export default function AdminLayoutShell({
  children,
  activeTabTitle = 'Website Content',
}: AdminLayoutShellProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { products } = useProducts();

  const [isSidebarMobileOpen, setIsSidebarMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleSelectTab = (tabName: string) => {
    switch (tabName) {
      case 'Dashboard':
        router.push('/admin');
        break;
      case 'Products':
        router.push('/admin?tab=Products');
        break;
      case 'Orders':
        router.push('/admin?tab=Orders');
        break;
      case 'Customers':
        router.push('/admin?tab=Customers');
        break;
      case 'Website Content':
        router.push('/admin/website-content');
        break;
      case 'Settings':
        router.push('/admin?tab=Settings');
        break;
      default:
        router.push('/admin');
        break;
    }
  };

  const handleConfirmLogout = () => {
    setIsLogoutModalOpen(false);
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1917] font-sans-clean flex">
      {/* Admin Sidebar Navigation */}
      <AdminSidebar
        activeTab={activeTabTitle}
        onSelectTab={handleSelectTab}
        isOpenMobile={isSidebarMobileOpen}
        onCloseMobile={() => setIsSidebarMobileOpen(false)}
        onOpenLogout={() => setIsLogoutModalOpen(true)}
        counts={{
          products: products.length,
          orders: INITIAL_ORDERS.length,
          customers: INITIAL_CUSTOMERS.length,
        }}
      />

      {/* Main Admin Area */}
      <div className="flex-1 lg:pl-72 flex flex-col min-w-0">
        {/* Sticky Admin Header */}
        <AdminHeader
          onToggleSidebar={() => setIsSidebarMobileOpen(!isSidebarMobileOpen)}
          activeTab={activeTabTitle}
          onSelectTab={handleSelectTab}
          onOpenLogout={() => setIsLogoutModalOpen(true)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Dynamic View Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-[1600px] w-full mx-auto">
          {children}
        </main>

        {/* Admin Minimal Footer */}
        <footer className="border-t border-[#E8DFC8] bg-[#FAF7F2] px-4 sm:px-8 py-4 text-center sm:flex sm:justify-between sm:items-center text-xs text-[#78716C]">
          <div>
            <span className="font-serif-luxury font-bold text-[#1C1917] tracking-wider">
              EDAMONEGLINT
            </span>{' '}
            • Website Content Management System
          </div>
          <div className="mt-1 sm:mt-0 text-[11px]">
            Frontend CMS Engine © {new Date().getFullYear()}
          </div>
        </footer>
      </div>

      {/* Logout Confirmation Modal */}
      <LogoutModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirmLogout={handleConfirmLogout}
      />
    </div>
  );
}
