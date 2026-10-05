export interface AdminNotification {
  id: string;
  title: string;
  desc: string;
  time: string;
  date: string;
  category: 'Enquiry' | 'Order' | 'Inventory' | 'Customer' | 'System';
  unread: boolean;
  actionUrl?: string;
  actionLabel?: string;
}

export const INITIAL_NOTIFICATIONS: AdminNotification[] = [
  {
    id: 'notif-1',
    title: 'New Wholesale Enquiry Received',
    desc: 'Velvet Ribbon Studio & Salon requested pricing quote for 140 pcs assortment (Claw clips & Satin scrunchies).',
    time: '10m ago',
    date: 'Today, 10:45 AM',
    category: 'Enquiry',
    unread: true,
    actionUrl: '/admin?tab=Orders',
    actionLabel: 'View Enquiry',
  },
  {
    id: 'notif-2',
    title: 'Payment Received for Order #EDG-2026-893',
    desc: '₹6,480 advance payment confirmed from Seoul Aesthetic Boutique via Direct Bank Transfer.',
    time: '1h ago',
    date: 'Today, 09:30 AM',
    category: 'Order',
    unread: true,
    actionUrl: '/admin?tab=Orders',
    actionLabel: 'View Order',
  },
  {
    id: 'notif-3',
    title: 'Low Stock Threshold Alert',
    desc: 'Matte Pastel Geometric Claw Clip (EDG-KC-005) is below wholesale batch minimum (under 60 pcs).',
    time: '3h ago',
    date: 'Today, 07:15 AM',
    category: 'Inventory',
    unread: true,
    actionUrl: '/admin?tab=Products',
    actionLabel: 'Check Stock',
  },
  {
    id: 'notif-4',
    title: 'New Boutique Account Registered',
    desc: 'Kavita Menon registered Blush & Blossom Bridal Co. (Chennai) for Gold Tier wholesale partnership.',
    time: 'Yesterday',
    date: 'Yesterday, 04:20 PM',
    category: 'Customer',
    unread: false,
    actionUrl: '/admin?tab=Customers',
    actionLabel: 'View Profile',
  },
  {
    id: 'notif-5',
    title: 'Wholesale Order Dispatched',
    desc: 'Order #EDG-2026-891 for Luxe Hair & Co. (Kochi) dispatched via Express Air Cargo (Tracking: BLR-99824).',
    time: '2 days ago',
    date: 'Oct 01, 2026, 02:15 PM',
    category: 'Order',
    unread: false,
    actionUrl: '/admin?tab=Orders',
    actionLabel: 'Track Shipment',
  },
  {
    id: 'notif-6',
    title: 'Catalogue Sync Complete',
    desc: 'Korean Signature Edit autumn collection updated with 5 new seasonal color variants.',
    time: '3 days ago',
    date: 'Sep 30, 2026, 11:00 AM',
    category: 'System',
    unread: false,
    actionUrl: '/admin?tab=Products',
    actionLabel: 'View Products',
  },
];
