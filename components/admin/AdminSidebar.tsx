'use client';

import Link from 'next/link';
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Users,
  Settings,
  LogOut,
  X,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Shield,
  Layers,
} from 'lucide-react';

interface AdminSidebarProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
  onOpenLogout: () => void;
  counts: {
    products: number;
    orders: number;
    customers: number;
  };
}

export default function AdminSidebar({
  activeTab,
  onSelectTab,
  isOpenMobile,
  onCloseMobile,
  onOpenLogout,
  counts,
}: AdminSidebarProps) {
  const NAV_ITEMS = [
    {
      name: 'Dashboard',
      icon: LayoutDashboard,
      badge: null,
      description: 'Overview & Performance',
    },
    {
      name: 'Products',
      icon: Package,
      badge: counts.products,
      description: 'Inventory & Catalogue',
    },
    {
      name: 'Orders',
      icon: ShoppingBag,
      badge: counts.orders,
      description: 'Wholesale Requests',
    },
    {
      name: 'Customers',
      icon: Users,
      badge: counts.customers,
      description: 'Boutiques & Resellers',
    },
    {
      name: 'Website Content',
      icon: Layers,
      badge: '6 Pages',
      description: 'Frontend CMS & Copy',
    },
    {
      name: 'Settings',
      icon: Settings,
      badge: null,
      description: 'Store & Wholesale Rules',
    },
  ];

  const sidebarContent = (
    <div className="flex flex-col h-full bg-[#FFFFFF] border-r border-[#E8DFC8] w-72">
      {/* Brand & Admin Title Header */}
      <div className="p-5 border-b border-[#E8DFC8] bg-[#FAF7F2]/50">
        <div className="flex items-center justify-between">
          <Link href="/admin" className="group block focus:outline-none">
            <span className="font-serif-luxury text-xl sm:text-2xl tracking-[0.16em] font-bold text-[#1C1917] group-hover:text-[#6B2A35] transition-colors block">
              EDAMONEGLINT
            </span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-[9px] uppercase tracking-[0.20em] font-semibold text-[#78716C]">
                Wholesale Portal
              </span>
              <span className="w-1 h-1 rounded-full bg-[#C5A880]"></span>
              <span className="text-[9px] uppercase tracking-widest text-[#9E5A63] font-bold">
                Admin v1.0
              </span>
            </div>
          </Link>

          {/* Mobile Close Button */}
          <button
            onClick={onCloseMobile}
            aria-label="Close Admin Sidebar"
            className="p-1.5 text-[#78716C] hover:text-[#1C1917] hover:bg-[#F3ECE2] rounded-md lg:hidden transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Admin Profile Section */}
      <div className="px-4 py-3.5 mx-3 my-3 bg-[#FAF7F2] border border-[#E8DFC8] rounded-lg">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-[#1C1917] text-[#FAF7F2] font-serif-luxury font-bold text-base flex items-center justify-center shadow-xs">
              EG
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#FAF7F2]"></span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <h4 className="text-xs font-bold text-[#1C1917] truncate">Administrator</h4>
              <span className="text-[9px] px-1.5 py-0.2 bg-[#EFE6D7] text-[#6B2A35] rounded font-semibold">
                HQ
              </span>
            </div>
            <p className="text-[10px] text-[#78716C] truncate">admin@edamoneglint.com</p>
          </div>
        </div>
      </div>

      {/* Main Navigation Links */}
      <div className="flex-1 px-3 py-2 space-y-1 overflow-y-auto">
        <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#78716C]">
          Management
        </div>

        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <button
              key={item.name}
              onClick={() => {
                onSelectTab(item.name);
                onCloseMobile();
              }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-medium transition-all duration-200 group cursor-pointer ${
                isActive
                  ? 'bg-[#1C1917] text-[#FAF7F2] shadow-sm font-semibold'
                  : 'text-[#292524] hover:bg-[#FAF7F2] hover:text-[#6B2A35]'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon
                  className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                    isActive ? 'text-[#C5A880]' : 'text-[#78716C]'
                  }`}
                />
                <div className="text-left">
                  <div className="leading-tight">{item.name}</div>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                {item.badge !== null && (
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-bold transition-colors ${
                      isActive
                        ? 'bg-[#6B2A35] text-[#FAF7F2]'
                        : 'bg-[#F3ECE2] text-[#6B2A35] border border-[#E8DFC8]'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
                {isActive && <ChevronRight className="w-3.5 h-3.5 text-[#C5A880]" />}
              </div>
            </button>
          );
        })}
      </div>

      {/* Quick Storefront Link & Logout Footer */}
      <div className="p-3 border-t border-[#E8DFC8] space-y-1.5 bg-[#FAF7F2]/40">
        <Link
          href="/"
          target="_blank"
          className="w-full flex items-center justify-between px-3 py-2 text-xs text-[#44403C] hover:bg-[#F3ECE2] hover:text-[#1C1917] rounded-md transition-colors"
        >
          <div className="flex items-center gap-2.5">
            <ExternalLink className="w-4 h-4 text-[#78716C]" />
            <span>Storefront Home</span>
          </div>
          <span className="text-[10px] text-[#78716C] uppercase font-mono">view</span>
        </Link>

        <button
          onClick={onOpenLogout}
          className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-[#9E5A63] hover:bg-[#F7ECE9] rounded-md transition-colors cursor-pointer"
        >
          <LogOut className="w-4 h-4 text-[#9E5A63]" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar (Permanent) */}
      <aside className="hidden lg:block fixed inset-y-0 left-0 z-30 w-72">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer (Collapsible) */}
      {isOpenMobile && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={onCloseMobile}
          />
          {/* Slide-out Sidebar */}
          <div className="fixed inset-y-0 left-0 max-w-xs w-full shadow-2xl z-10 animate-fade-in">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
