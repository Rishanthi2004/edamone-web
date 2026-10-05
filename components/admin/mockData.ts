import { PRODUCTS, Product, CATEGORIES } from '@/data/products';

export interface AdminOrder {
  id: string;
  orderNumber: string;
  customerName: string;
  businessName: string;
  customerType: string;
  email: string;
  phone: string;
  city: string;
  date: string;
  status: 'Pending' | 'Confirmed' | 'Processing' | 'Dispatched' | 'Delivered';
  totalItems: number;
  totalAmount: number;
  paymentStatus: 'Paid' | 'Advance 50%' | 'Pending' | 'Payment on Dispatch';
  items: {
    productId: string;
    productName: string;
    productCode: string;
    quantity: number;
    unitPrice: number;
    selectedColor: string;
  }[];
  notes?: string;
}

export interface AdminCustomer {
  id: string;
  name: string;
  businessName: string;
  type: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  totalOrders: number;
  totalSpend: number;
  tier: 'Diamond Wholesale' | 'Gold Tier' | 'Silver Tier' | 'Standard Boutique';
  joinedDate: string;
  lastActive: string;
  status: 'Active' | 'Inactive';
}

export const INITIAL_ORDERS: AdminOrder[] = [
  {
    id: 'ord-101',
    orderNumber: 'EDG-2026-894',
    customerName: 'Ananya Sharma',
    businessName: 'Velvet Ribbon Studio & Salon',
    customerType: 'Hair & Beauty Salon',
    email: 'ananya@velvetribbon.in',
    phone: '+91 98201 44521',
    city: 'Mumbai, MH',
    date: 'Today, 10:45 AM',
    status: 'Pending',
    totalItems: 140,
    totalAmount: 5180,
    paymentStatus: 'Advance 50%',
    items: [
      {
        productId: '1',
        productName: 'Korean Pearl Hair Clip',
        productCode: 'EDG-HC-001',
        quantity: 50,
        unitPrice: 35,
        selectedColor: 'Ivory Pearl / Gold',
      },
      {
        productId: '2',
        productName: 'Soft Ribbon Bow',
        productCode: 'EDG-BW-002',
        quantity: 40,
        unitPrice: 48,
        selectedColor: 'Warm Cream',
      },
      {
        productId: '5',
        productName: 'Matte Pastel Geometric Claw Clip',
        productCode: 'EDG-KC-005',
        quantity: 50,
        unitPrice: 28,
        selectedColor: 'Cream Butter',
      },
    ],
    notes: 'Urgent delivery requested for bridal styling season opening.',
  },
  {
    id: 'ord-102',
    orderNumber: 'EDG-2026-893',
    customerName: 'Rhea Sen',
    businessName: 'Seoul Aesthetic Boutique',
    customerType: 'Fashion Boutique',
    email: 'rhea@seoulaesthetic.com',
    phone: '+91 98112 88402',
    city: 'New Delhi, DL',
    date: 'Yesterday, 04:20 PM',
    status: 'Confirmed',
    totalItems: 220,
    totalAmount: 6480,
    paymentStatus: 'Paid',
    items: [
      {
        productId: '3',
        productName: 'Premium Satin Scrunchie',
        productCode: 'EDG-SC-003',
        quantity: 100,
        unitPrice: 22,
        selectedColor: 'Dusty Rose',
      },
      {
        productId: '5',
        productName: 'Matte Pastel Geometric Claw Clip',
        productCode: 'EDG-KC-005',
        quantity: 60,
        unitPrice: 28,
        selectedColor: 'Sage Mint',
      },
      {
        productId: '4',
        productName: 'Minimal Hair Band',
        productCode: 'EDG-HB-004',
        quantity: 60,
        unitPrice: 45,
        selectedColor: 'Oatmeal Beige',
      },
    ],
    notes: 'Include individual backing cards and retail display tags.',
  },
  {
    id: 'ord-103',
    orderNumber: 'EDG-2026-892',
    customerName: 'Pooja Hegde',
    businessName: 'K-Trend Closet Instagram Store',
    customerType: 'Instagram Reseller',
    email: 'pooja.ktrends@gmail.com',
    phone: '+91 97401 12903',
    city: 'Bengaluru, KA',
    date: 'Oct 01, 2026',
    status: 'Processing',
    totalItems: 180,
    totalAmount: 6100,
    paymentStatus: 'Paid',
    items: [
      {
        productId: '6',
        productName: 'Organza Oversized Cloud Bow',
        productCode: 'EDG-BW-006',
        quantity: 50,
        unitPrice: 52,
        selectedColor: 'Sheer Pearl White',
      },
      {
        productId: '7',
        productName: 'Tortoise Shell French Barrette',
        productCode: 'EDG-HC-007',
        quantity: 50,
        unitPrice: 38,
        selectedColor: 'Amber Tortoise',
      },
      {
        productId: '10',
        productName: 'Cloud Organza Scrunchie Duo',
        productCode: 'EDG-SC-010',
        quantity: 80,
        unitPrice: 32,
        selectedColor: 'Soft Rose + Blush',
      },
    ],
    notes: 'Dispatch via Express Air Courier with tracking SMS.',
  },
  {
    id: 'ord-104',
    orderNumber: 'EDG-2026-891',
    customerName: 'Meera Nair',
    businessName: 'Luxe Hair & Co.',
    customerType: 'Salons & Studios',
    email: 'meera@luxehairco.in',
    phone: '+91 98450 77123',
    city: 'Kochi, KL',
    date: 'Sep 29, 2026',
    status: 'Dispatched',
    totalItems: 250,
    totalAmount: 8450,
    paymentStatus: 'Paid',
    items: [
      {
        productId: '8',
        productName: 'Pleated Chiffon Twist Headband',
        productCode: 'EDG-HB-008',
        quantity: 50,
        unitPrice: 58,
        selectedColor: 'Dusty Rosewood',
      },
      {
        productId: '9',
        productName: 'Korean Crystal & Bead Bobby Pin Set',
        productCode: 'EDG-KC-009',
        quantity: 60,
        unitPrice: 45,
        selectedColor: 'Champagne & Clear Crystal',
      },
      {
        productId: '3',
        productName: 'Premium Satin Scrunchie',
        productCode: 'EDG-SC-003',
        quantity: 140,
        unitPrice: 22,
        selectedColor: 'Pearl Ivory',
      },
    ],
    notes: 'Delivering to salon branch at MG Road.',
  },
  {
    id: 'ord-105',
    orderNumber: 'EDG-2026-890',
    customerName: 'Tanvi Desai',
    businessName: 'Glint & Grace Concept Store',
    customerType: 'Gift & Lifestyle',
    email: 'tanvi@glintandgrace.com',
    phone: '+91 98920 33819',
    city: 'Ahmedabad, GJ',
    date: 'Sep 27, 2026',
    status: 'Delivered',
    totalItems: 300,
    totalAmount: 11400,
    paymentStatus: 'Paid',
    items: [
      {
        productId: '1',
        productName: 'Korean Pearl Hair Clip',
        productCode: 'EDG-HC-001',
        quantity: 100,
        unitPrice: 35,
        selectedColor: 'Ivory Pearl / Gold',
      },
      {
        productId: '5',
        productName: 'Matte Pastel Geometric Claw Clip',
        productCode: 'EDG-KC-005',
        quantity: 150,
        unitPrice: 28,
        selectedColor: 'Dusty Peach',
      },
      {
        productId: '4',
        productName: 'Minimal Hair Band',
        productCode: 'EDG-HB-004',
        quantity: 50,
        unitPrice: 55,
        selectedColor: 'Muted Rosewood',
      },
    ],
    notes: 'Repeat client. High customer satisfaction on claw clips.',
  },
];

export const INITIAL_CUSTOMERS: AdminCustomer[] = [
  {
    id: 'cust-1',
    name: 'Ananya Sharma',
    businessName: 'Velvet Ribbon Studio & Salon',
    type: 'Hair & Beauty Salon',
    email: 'ananya@velvetribbon.in',
    phone: '+91 98201 44521',
    city: 'Mumbai',
    state: 'Maharashtra',
    totalOrders: 6,
    totalSpend: 34200,
    tier: 'Gold Tier',
    joinedDate: 'Mar 2025',
    lastActive: 'Today',
    status: 'Active',
  },
  {
    id: 'cust-2',
    name: 'Rhea Sen',
    businessName: 'Seoul Aesthetic Boutique',
    type: 'Fashion Boutique',
    email: 'rhea@seoulaesthetic.com',
    phone: '+91 98112 88402',
    city: 'New Delhi',
    state: 'Delhi',
    totalOrders: 14,
    totalSpend: 82400,
    tier: 'Diamond Wholesale',
    joinedDate: 'Jan 2025',
    lastActive: 'Yesterday',
    status: 'Active',
  },
  {
    id: 'cust-3',
    name: 'Pooja Hegde',
    businessName: 'K-Trend Closet Instagram Store',
    type: 'Instagram Reseller',
    email: 'pooja.ktrends@gmail.com',
    phone: '+91 97401 12903',
    city: 'Bengaluru',
    state: 'Karnataka',
    totalOrders: 9,
    totalSpend: 47900,
    tier: 'Gold Tier',
    joinedDate: 'Apr 2025',
    lastActive: '2 days ago',
    status: 'Active',
  },
  {
    id: 'cust-4',
    name: 'Meera Nair',
    businessName: 'Luxe Hair & Co.',
    type: 'Salons & Studios',
    email: 'meera@luxehairco.in',
    phone: '+91 98450 77123',
    city: 'Kochi',
    state: 'Kerala',
    totalOrders: 4,
    totalSpend: 23800,
    tier: 'Silver Tier',
    joinedDate: 'Jun 2025',
    lastActive: '5 days ago',
    status: 'Active',
  },
  {
    id: 'cust-5',
    name: 'Tanvi Desai',
    businessName: 'Glint & Grace Concept Store',
    type: 'Gift & Lifestyle',
    email: 'tanvi@glintandgrace.com',
    phone: '+91 98920 33819',
    city: 'Ahmedabad',
    state: 'Gujarat',
    totalOrders: 18,
    totalSpend: 112500,
    tier: 'Diamond Wholesale',
    joinedDate: 'Nov 2024',
    lastActive: '1 week ago',
    status: 'Active',
  },
  {
    id: 'cust-6',
    name: 'Simran Kaur',
    businessName: 'Urban Chic Accessories',
    type: 'E-commerce Brands',
    email: 'simran@urbanchic.in',
    phone: '+91 98765 43210',
    city: 'Chandigarh',
    state: 'Punjab',
    totalOrders: 5,
    totalSpend: 28600,
    tier: 'Silver Tier',
    joinedDate: 'Jul 2025',
    lastActive: '3 days ago',
    status: 'Active',
  },
  {
    id: 'cust-7',
    name: 'Kavita Menon',
    businessName: 'Blush & Blossom Bridal Co.',
    type: 'Bridal & Styling Studio',
    email: 'kavita@blushandblossom.in',
    phone: '+91 99001 88234',
    city: 'Chennai',
    state: 'Tamil Nadu',
    totalOrders: 8,
    totalSpend: 54100,
    tier: 'Gold Tier',
    joinedDate: 'Feb 2025',
    lastActive: '4 days ago',
    status: 'Active',
  },
];

export const STORE_STATS = {
  totalProducts: PRODUCTS.length,
  totalOrders: 142,
  totalCustomers: 86,
  totalRevenue: '₹4,82,500',
  monthlyGrowth: '+24.5%',
  pendingEnquiries: 7,
  activeCategories: CATEGORIES.length,
  averageOrderValue: '₹3,398',
};
