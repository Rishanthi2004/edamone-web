'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Bell,
  CheckCircle2,
  Clock,
  Filter,
  Search,
  Check,
  Trash2,
  ExternalLink,
  ShoppingBag,
  Package,
  Users,
  AlertCircle,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { INITIAL_NOTIFICATIONS, AdminNotification } from '@/data/notificationsData';
import AdminLayoutShell from '@/components/admin/AdminLayoutShell';

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<AdminNotification[]>(INITIAL_NOTIFICATIONS);
  const [filterTab, setFilterTab] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const unreadCount = notifications.filter((n) => n.unread).length;

  const filteredNotifications = notifications.filter((n) => {
    let matchesTab = true;
    if (filterTab === 'Unread') matchesTab = n.unread;
    else if (filterTab !== 'All') matchesTab = n.category === filterTab;

    const matchesSearch =
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  const handleToggleRead = (id: string) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, unread: !n.unread } : n))
    );
  };

  const handleMarkAllRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, unread: false })));
  };

  const handleDeleteNotification = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  const getCategoryIcon = (category: AdminNotification['category']) => {
    switch (category) {
      case 'Order':
        return <ShoppingBag className="w-4 h-4 text-[#6B2A35]" />;
      case 'Enquiry':
        return <Sparkles className="w-4 h-4 text-[#C5A880]" />;
      case 'Inventory':
        return <Package className="w-4 h-4 text-amber-600" />;
      case 'Customer':
        return <Users className="w-4 h-4 text-indigo-600" />;
      case 'System':
      default:
        return <Bell className="w-4 h-4 text-[#78716C]" />;
    }
  };

  return (
    <AdminLayoutShell activeTabTitle="Notifications">
      <div className="space-y-6 animate-fade-in">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl p-5 shadow-xs">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-widest bg-[#F3ECE2] text-[#6B2A35] rounded border border-[#E8DFC8]">
                Notification Center
              </span>
              {unreadCount > 0 ? (
                <span className="text-xs font-semibold text-[#6B2A35]">
                  {unreadCount} Unread Alerts
                </span>
              ) : (
                <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> All caught up
                </span>
              )}
            </div>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1C1917] mt-1">
              Store Alerts & Wholesale Activity
            </h2>
            <p className="text-xs sm:text-sm text-[#78716C]">
              Real-time notifications for incoming wholesale enquiries, order payments, stock milestones, and buyer registrations.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {unreadCount > 0 && (
              <button
                onClick={handleMarkAllRead}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#FAF7F2] hover:bg-[#F3ECE2] border border-[#E8DFC8] text-[#1C1917] text-xs font-semibold uppercase tracking-wider rounded-md transition-colors cursor-pointer"
              >
                <Check className="w-4 h-4 text-[#6B2A35]" />
                <span>Mark All As Read</span>
              </button>
            )}
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl p-4 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#78716C] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search notifications by keyword, buyer, SKU..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917] placeholder-[#78716C] focus:outline-none focus:border-[#6B2A35]"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
            {['All', 'Unread', 'Enquiry', 'Order', 'Inventory', 'Customer'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilterTab(tab)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  filterTab === tab
                    ? 'bg-[#1C1917] text-[#FAF7F2] font-semibold'
                    : 'bg-[#FAF7F2] text-[#44403C] hover:bg-[#F3ECE2] border border-[#E8DFC8]'
                }`}
              >
                {tab === 'Unread' && unreadCount > 0 ? `Unread (${unreadCount})` : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Notifications List */}
        <div className="bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl overflow-hidden shadow-xs divide-y divide-[#E8DFC8]/60">
          {filteredNotifications.length === 0 ? (
            <div className="py-16 text-center text-[#78716C] space-y-2">
              <Bell className="w-10 h-10 mx-auto text-[#C5A880] opacity-50" />
              <p className="font-bold text-[#1C1917] text-sm">No notifications found</p>
              <p className="text-xs">There are no notifications matching your selected filter.</p>
            </div>
          ) : (
            filteredNotifications.map((notif) => (
              <div
                key={notif.id}
                className={`p-4 sm:p-5 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  notif.unread
                    ? 'bg-[#F7ECE9]/30 border-l-4 border-[#6B2A35]'
                    : 'hover:bg-[#FAF7F2]/60'
                }`}
              >
                {/* Left content */}
                <div className="flex items-start gap-3.5 flex-1 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-[#FAF7F2] border border-[#E8DFC8] flex items-center justify-center shrink-0 mt-0.5">
                    {getCategoryIcon(notif.category)}
                  </div>

                  <div className="space-y-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4
                        className={`text-xs sm:text-sm text-[#1C1917] ${
                          notif.unread ? 'font-bold' : 'font-semibold text-[#44403C]'
                        }`}
                      >
                        {notif.title}
                      </h4>

                      {notif.unread ? (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold uppercase bg-[#6B2A35] text-[#FAF7F2]">
                          Unread
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-medium bg-[#FAF7F2] text-[#78716C] border border-[#E8DFC8]">
                          Read
                        </span>
                      )}

                      <span className="text-[10px] text-[#78716C] font-mono">
                        • {notif.category}
                      </span>
                    </div>

                    <p className="text-xs text-[#57534E] leading-relaxed">
                      {notif.desc}
                    </p>

                    <div className="flex items-center gap-2 text-[11px] text-[#78716C] pt-0.5">
                      <Clock className="w-3 h-3 text-[#C5A880]" />
                      <span>{notif.date} ({notif.time})</span>
                    </div>
                  </div>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-2 sm:self-center shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#E8DFC8]/60">
                  {notif.actionUrl && notif.actionLabel && (
                    <Link
                      href={notif.actionUrl}
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#1C1917] hover:bg-[#6B2A35] text-[#FAF7F2] text-xs font-semibold rounded transition-colors"
                    >
                      <span>{notif.actionLabel}</span>
                      <ArrowRight className="w-3 h-3 text-[#C5A880]" />
                    </Link>
                  )}

                  <button
                    onClick={() => handleToggleRead(notif.id)}
                    className="p-1.5 text-[#78716C] hover:text-[#1C1917] hover:bg-[#FAF7F2] border border-[#E8DFC8] rounded transition-colors text-xs font-medium"
                    title={notif.unread ? 'Mark as Read' : 'Mark as Unread'}
                  >
                    {notif.unread ? 'Mark Read' : 'Mark Unread'}
                  </button>

                  <button
                    onClick={() => handleDeleteNotification(notif.id)}
                    className="p-1.5 text-[#9E5A63] hover:text-[#6B2A35] hover:bg-[#F7ECE9] border border-transparent hover:border-[#E8DFC8] rounded transition-colors"
                    title="Delete Notification"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </AdminLayoutShell>
  );
}
