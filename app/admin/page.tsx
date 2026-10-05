'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { PRODUCTS, Product } from '@/data/products';
import {
  INITIAL_ORDERS,
  INITIAL_CUSTOMERS,
  AdminOrder,
  AdminCustomer,
} from '@/components/admin/mockData';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminHeader from '@/components/admin/AdminHeader';
import DashboardView from '@/components/admin/DashboardView';
import ProductsView from '@/components/admin/ProductsView';
import OrdersView from '@/components/admin/OrdersView';
import CustomersView from '@/components/admin/CustomersView';
import SettingsView from '@/components/admin/SettingsView';
import LogoutModal from '@/components/admin/LogoutModal';
import AddProductModal from '@/components/admin/AddProductModal';
import {
  INITIAL_WEBSITE_CONTENT,
  WebsiteContentState,
  HomeContent,
  CollectionsContent,
  NewArrivalsContent,
  WholesaleContent,
  AboutContent,
  ContactContent,
} from '@/data/websiteContent';
import { useWebsiteContent } from '@/context/WebsiteContentContext';
import { useProducts } from '@/context/ProductsContext';
import WebsiteContentOverview from '@/components/admin/content/WebsiteContentOverview';
import HomeContentEditor from '@/components/admin/content/HomeContentEditor';
import CollectionsContentEditor from '@/components/admin/content/CollectionsContentEditor';
import NewArrivalsContentEditor from '@/components/admin/content/NewArrivalsContentEditor';
import WholesaleContentEditor from '@/components/admin/content/WholesaleContentEditor';
import AboutContentEditor from '@/components/admin/content/AboutContentEditor';
import ContactContentEditor from '@/components/admin/content/ContactContentEditor';

export default function AdminPage() {
  const router = useRouter();

  // Central Website Content State & Updaters
  const {
    content: websiteContent,
    updateHomeContent,
    updateCollectionsContent,
    updateNewArrivalsContent,
    updateWholesaleContent,
    updateAboutContent,
    updateContactContent,
  } = useWebsiteContent();

  // Central Products Management State & Updaters
  const {
    products,
    addProduct: handleAddProduct,
    updateProduct: handleUpdateProduct,
    deleteProduct: deleteProductDirect,
  } = useProducts();

  // Navigation & UI State
  const [activeTab, setActiveTab] = useState<string>('Dashboard');
  const [selectedContentPage, setSelectedContentPage] = useState<string | null>(null);
  const [isSidebarMobileOpen, setIsSidebarMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Synchronize tab and page from URL parameters
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get('tab');
      if (tabParam) {
        setActiveTab(tabParam);
      }
      const pageParam = params.get('page');
      if (pageParam) {
        setSelectedContentPage(pageParam);
      }
    }
  }, []);

  // Modals
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [selectedOrderModal, setSelectedOrderModal] = useState<AdminOrder | null>(null);

  // Core Data State (Pre-populated from store data & wholesale mock records)
  const [orders, setOrders] = useState<AdminOrder[]>(INITIAL_ORDERS);
  const [customers, setCustomers] = useState<AdminCustomer[]>(INITIAL_CUSTOMERS);

  // Handlers
  const handleDeleteProduct = (productId: string) => {
    if (confirm('Are you sure you want to remove this product SKU from the catalogue?')) {
      deleteProductDirect(productId);
    }
  };

  const handleUpdateOrderStatus = (orderId: string, newStatus: AdminOrder['status']) => {
    setOrders(
      orders.map((o) => (o.id === orderId ? { ...o, status: newStatus } : o))
    );
    if (selectedOrderModal && selectedOrderModal.id === orderId) {
      setSelectedOrderModal({ ...selectedOrderModal, status: newStatus });
    }
  };

  const handleAddCustomer = (newCustomer: AdminCustomer) => {
    setCustomers([newCustomer, ...customers]);
  };

  const handleConfirmLogout = () => {
    setIsLogoutModalOpen(false);
    router.push('/');
  };

  const handleViewOrder = (order: AdminOrder) => {
    setSelectedOrderModal(order);
    setActiveTab('Orders');
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1917] font-sans-clean flex">
      {/* Admin Sidebar Navigation */}
      <AdminSidebar
        activeTab={activeTab}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          setSelectedContentPage(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        isOpenMobile={isSidebarMobileOpen}
        onCloseMobile={() => setIsSidebarMobileOpen(false)}
        onOpenLogout={() => setIsLogoutModalOpen(true)}
        counts={{
          products: products.length,
          orders: orders.length,
          customers: customers.length,
        }}
      />

      {/* Main Admin Area */}
      <div className="flex-1 lg:pl-72 flex flex-col min-w-0">
        {/* Sticky Admin Header */}
        <AdminHeader
          onToggleSidebar={() => setIsSidebarMobileOpen(!isSidebarMobileOpen)}
          activeTab={activeTab === 'Website Content' && selectedContentPage ? `Content / ${selectedContentPage}` : activeTab}
          onSelectTab={(tab) => {
            setActiveTab(tab);
            setSelectedContentPage(null);
          }}
          onOpenLogout={() => setIsLogoutModalOpen(true)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Dynamic View Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-[1600px] w-full mx-auto">
          {activeTab === 'Dashboard' && (
            <DashboardView
              orders={orders}
              products={products}
              customers={customers}
              onSelectTab={setActiveTab}
              onViewOrder={handleViewOrder}
              onOpenAddProduct={() => setIsAddProductModalOpen(true)}
            />
          )}

          {activeTab === 'Products' && (
            <ProductsView
              products={products}
              onAddProduct={handleAddProduct}
              onUpdateProduct={handleUpdateProduct}
              onDeleteProduct={handleDeleteProduct}
              onOpenAddModal={() => setIsAddProductModalOpen(true)}
            />
          )}

          {activeTab === 'Orders' && (
            <OrdersView
              orders={orders}
              onUpdateOrderStatus={handleUpdateOrderStatus}
              selectedOrderModal={selectedOrderModal}
              onOpenOrderModal={setSelectedOrderModal}
            />
          )}

          {activeTab === 'Customers' && (
            <CustomersView
              customers={customers}
              onAddCustomer={handleAddCustomer}
            />
          )}

          {activeTab === 'Website Content' && !selectedContentPage && (
            <WebsiteContentOverview
              content={websiteContent}
              onSelectPage={(pageId) => setSelectedContentPage(pageId)}
            />
          )}

          {activeTab === 'Website Content' && selectedContentPage === 'home' && (
            <HomeContentEditor
              initialContent={websiteContent.home}
              onSave={(updated) => updateHomeContent(updated)}
              onBack={() => setSelectedContentPage(null)}
            />
          )}

          {activeTab === 'Website Content' && selectedContentPage === 'collections' && (
            <CollectionsContentEditor
              initialContent={websiteContent.collections}
              onSave={(updated) => updateCollectionsContent(updated)}
              onBack={() => setSelectedContentPage(null)}
            />
          )}

          {activeTab === 'Website Content' && selectedContentPage === 'new-arrivals' && (
            <NewArrivalsContentEditor
              initialContent={websiteContent.newArrivals}
              onSave={(updated) => updateNewArrivalsContent(updated)}
              onBack={() => setSelectedContentPage(null)}
            />
          )}

          {activeTab === 'Website Content' && selectedContentPage === 'wholesale' && (
            <WholesaleContentEditor
              initialContent={websiteContent.wholesale}
              onSave={(updated) => updateWholesaleContent(updated)}
              onBack={() => setSelectedContentPage(null)}
            />
          )}

          {activeTab === 'Website Content' && selectedContentPage === 'about' && (
            <AboutContentEditor
              initialContent={websiteContent.about}
              onSave={(updated) => updateAboutContent(updated)}
              onBack={() => setSelectedContentPage(null)}
            />
          )}

          {activeTab === 'Website Content' && selectedContentPage === 'contact' && (
            <ContactContentEditor
              initialContent={websiteContent.contact}
              onSave={(updated) => updateContactContent(updated)}
              onBack={() => setSelectedContentPage(null)}
            />
          )}

          {activeTab === 'Settings' && <SettingsView />}
        </main>

        {/* Admin Minimal Footer */}
        <footer className="border-t border-[#E8DFC8] bg-[#FAF7F2] px-4 sm:px-8 py-4 text-center sm:flex sm:justify-between sm:items-center text-xs text-[#78716C]">
          <div>
            <span className="font-serif-luxury font-bold text-[#1C1917] tracking-wider">
              EDAMONEGLINT
            </span>{' '}
            • Wholesale Management Dashboard
          </div>
          <div className="mt-1 sm:mt-0 text-[11px]">
            Korean Hair Accessories B2B System © {new Date().getFullYear()}
          </div>
        </footer>
      </div>

      {/* Add Product Modal */}
      <AddProductModal
        isOpen={isAddProductModalOpen}
        onClose={() => setIsAddProductModalOpen(false)}
        onAddProduct={handleAddProduct}
      />

      {/* Logout Confirmation Modal */}
      <LogoutModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirmLogout={handleConfirmLogout}
      />
    </div>
  );
}
