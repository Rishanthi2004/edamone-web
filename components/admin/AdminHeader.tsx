'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Menu,
  Bell,
  Search,
  ExternalLink,
  ChevronDown,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Clock,
  LogOut,
  Sliders,
  ShoppingBag,
  Package,
  ArrowRight,
  Check,
} from 'lucide-react';
import { INITIAL_NOTIFICATIONS, AdminNotification } from '@/data/notificationsData';

interface AdminHeaderProps {
  onToggleSidebar: () => void;
  activeTab: string;
  onSelectTab: (tab: string) => void;
  onOpenLogout: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function AdminHeader({
  onToggleSidebar,
  activeTab,
  onSelectTab,
  onOpenLogout,
  searchQuery,
  setSearchQuery,
}: AdminHeaderProps) {
  const router = useRouter();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [notifications, setNotifications] = useState<AdminNotification[]>(INITIAL_NOTIFICATIONS);

  const notificationRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking anywhere outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setShowNotifications(false);
      }
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const unreadCount = notifications.filter((n) => n.unread).length;

  const handleMarkAllRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, unread: false })));
  };

  const handleNotificationClick = (notif: AdminNotification) => {
    setNotifications(
      notifications.map((n) => (n.id === notif.id ? { ...n, unread: false } : n))
    );
    setShowNotifications(false);
    if (notif.actionUrl) {
      router.push(notif.actionUrl);
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DFC8] px-3 sm:px-6 lg:px-8 py-3.5 transition-all">
      <div className="flex items-center justify-between gap-2 sm:gap-4">
        {/* Left Side: Mobile Menu Button & Title/Breadcrumbs */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={onToggleSidebar}
            aria-label="Toggle Sidebar Menu"
            className="p-2 -ml-1 text-[#1C1917] hover:bg-[#F3ECE2] border border-[#E8DFC8]/60 rounded-md lg:hidden transition-colors cursor-pointer shrink-0"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <span className="hidden sm:inline-block font-serif-luxury text-lg sm:text-xl font-semibold text-[#1C1917] tracking-wider shrink-0">
              EDAMONEGLINT
            </span>
            <span className="hidden sm:inline-block text-[#C5A880]">/</span>
            <span className="px-2 sm:px-2.5 py-0.5 text-[10px] sm:text-[11px] font-semibold tracking-wider sm:tracking-widest uppercase rounded bg-[#F3ECE2] text-[#6B2A35] border border-[#E8DFC8] truncate max-w-[140px] sm:max-w-none">
              {activeTab}
            </span>
          </div>
        </div>

        {/* Center: Search Bar */}
        <div className="flex-1 max-w-md hidden md:block">
          <div className="relative">
            <Search className="w-4 h-4 text-[#78716C] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search products, orders, boutiques..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-12 py-1.5 text-xs bg-[#FFFFFF] border border-[#E8DFC8] rounded-md text-[#1C1917] placeholder-[#78716C] focus:outline-none focus:border-[#6B2A35] focus:ring-1 focus:ring-[#6B2A35] transition-all"
            />
            <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] uppercase font-mono tracking-widest text-[#78716C] bg-[#FAF7F2] px-1.5 py-0.5 rounded border border-[#E8DFC8]">
              ⌘K
            </span>
          </div>
        </div>

        {/* Right Side: Quick Actions & Profile */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          {/* View Live Store */}
          <Link
            href="/"
            target="_blank"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#1C1917] bg-[#FFFFFF] border border-[#E8DFC8] rounded-md hover:bg-[#F3ECE2] hover:text-[#6B2A35] transition-colors"
          >
            <span>Live Store</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#78716C]" />
          </Link>

          {/* Notifications Dropdown Container */}
          <div ref={notificationRef} className="relative">
            <button
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowProfileMenu(false);
              }}
              aria-label="Toggle notifications"
              className={`relative p-2 rounded-md border transition-colors cursor-pointer ${
                showNotifications
                  ? 'bg-[#1C1917] text-[#FAF7F2] border-[#1C1917]'
                  : 'text-[#292524] bg-[#FFFFFF] border-[#E8DFC8] hover:bg-[#F3ECE2]'
              }`}
            >
              <Bell className="w-4 h-4" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#9E5A63] rounded-full animate-pulse ring-2 ring-[#FAF7F2]" />
              )}
            </button>

            {/* Responsive Dropdown: Stays within screen margins with balanced left/right spacing on mobile */}
            {showNotifications && (
              <div className="absolute -right-9 sm:right-0 mt-2 w-[calc(100vw-24px)] xs:w-[330px] sm:w-84 max-w-[350px] sm:max-w-sm bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl shadow-2xl py-2 z-50 animate-fade-in">
                <div className="px-4 py-2.5 border-b border-[#E8DFC8] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1C1917]">
                      Notifications
                    </span>
                    {unreadCount > 0 && (
                      <span className="text-[10px] bg-[#6B2A35] text-[#FAF7F2] px-1.5 py-0.2 rounded-full font-semibold">
                        {unreadCount} new
                      </span>
                    )}
                  </div>
                  {unreadCount > 0 && (
                    <button
                      onClick={handleMarkAllRead}
                      className="text-[11px] text-[#9E5A63] hover:text-[#6B2A35] font-medium transition-colors cursor-pointer"
                    >
                      Mark all read
                    </button>
                  )}
                </div>

                <div className="divide-y divide-[#E8DFC8]/60 max-h-72 overflow-y-auto">
                  {notifications.slice(0, 4).map((n) => (
                    <div
                      key={n.id}
                      onClick={() => handleNotificationClick(n)}
                      className={`px-4 py-3 text-xs hover:bg-[#FAF7F2] transition-colors cursor-pointer ${
                        n.unread
                          ? 'bg-[#F7ECE9]/35 border-l-3 border-[#6B2A35]'
                          : 'opacity-85'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1 font-semibold text-[#1C1917]">
                        <span className="truncate">{n.title}</span>
                        <span className="text-[10px] text-[#78716C] font-normal shrink-0">
                          {n.time}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#78716C] mt-0.5 line-clamp-2 leading-relaxed">
                        {n.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* View all notifications CTA */}
                <div className="px-4 py-2.5 border-t border-[#E8DFC8] text-center bg-[#FAF7F2]/60">
                  <Link
                    href="/admin/notifications"
                    onClick={() => setShowNotifications(false)}
                    className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#6B2A35] hover:text-[#9E5A63] transition-colors w-full py-1"
                  >
                    <span>View all notifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Profile Dropdown Container */}
          <div ref={profileRef} className="relative">
            <button
              onClick={() => {
                setShowProfileMenu(!showProfileMenu);
                setShowNotifications(false);
              }}
              className="flex items-center gap-1.5 sm:gap-2 p-1 sm:px-3 sm:py-1.5 bg-[#FFFFFF] border border-[#E8DFC8] rounded-md hover:bg-[#F3ECE2] transition-colors cursor-pointer"
            >
              <div className="w-6 h-6 rounded-full bg-[#6B2A35] text-[#FAF7F2] text-xs font-serif-luxury font-bold flex items-center justify-center shrink-0">
                E
              </div>
              <div className="hidden sm:block text-left">
                <div className="text-xs font-semibold text-[#1C1917] leading-tight">Admin Manager</div>
                <div className="text-[10px] text-[#C5A880] font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Super Admin
                </div>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-[#78716C] hidden sm:block" />
            </button>

            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-56 bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl shadow-2xl py-2 z-50 animate-fade-in">
                <div className="px-4 py-2.5 border-b border-[#E8DFC8]">
                  <p className="text-xs font-semibold text-[#1C1917]">EDAMONEGLINT Admin</p>
                  <p className="text-[11px] text-[#78716C]">admin@edamoneglint.com</p>
                  <div className="mt-1.5 inline-flex items-center gap-1 px-2 py-0.5 bg-[#F3ECE2] text-[#6B2A35] text-[10px] font-medium rounded border border-[#E8DFC8]">
                    <ShieldCheck className="w-3 h-3 text-[#C5A880]" />
                    <span>Store Administrator</span>
                  </div>
                </div>

                <div className="py-1">
                  <Link
                    href="/admin/notifications"
                    onClick={() => setShowProfileMenu(false)}
                    className="w-full px-4 py-2 text-xs text-left text-[#292524] hover:bg-[#FAF7F2] hover:text-[#6B2A35] flex items-center gap-2 transition-colors"
                  >
                    <Bell className="w-3.5 h-3.5 text-[#78716C]" />
                    <span>Notification Center</span>
                  </Link>

                  <button
                    onClick={() => {
                      onSelectTab('Settings');
                      setShowProfileMenu(false);
                    }}
                    className="w-full px-4 py-2 text-xs text-left text-[#292524] hover:bg-[#FAF7F2] hover:text-[#6B2A35] flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <Sliders className="w-3.5 h-3.5 text-[#78716C]" />
                    <span>Store Settings</span>
                  </button>

                  <Link
                    href="/"
                    target="_blank"
                    className="w-full px-4 py-2 text-xs text-left text-[#292524] hover:bg-[#FAF7F2] hover:text-[#6B2A35] flex items-center gap-2 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#78716C]" />
                    <span>Customer Storefront</span>
                  </Link>
                </div>

                <div className="pt-1 border-t border-[#E8DFC8]">
                  <button
                    onClick={() => {
                      setShowProfileMenu(false);
                      onOpenLogout();
                    }}
                    className="w-full px-4 py-2 text-xs text-left text-[#9E5A63] hover:bg-[#F7ECE9] flex items-center gap-2 transition-colors font-medium cursor-pointer"
                  >
                    <LogOut className="w-3.5 h-3.5 text-[#9E5A63]" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
