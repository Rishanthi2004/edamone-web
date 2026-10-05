'use client';

import { useState } from 'react';
import {
  Users,
  Search,
  Plus,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  ShoppingBag,
  TrendingUp,
  Award,
  ExternalLink,
  X,
  Check,
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons';
import { AdminCustomer } from './mockData';

interface CustomersViewProps {
  customers: AdminCustomer[];
  onAddCustomer: (customer: AdminCustomer) => void;
}

export default function CustomersView({ customers, onAddCustomer }: CustomersViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [tierFilter, setTierFilter] = useState<string>('All');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New Client form state
  const [newClient, setNewClient] = useState({
    name: '',
    businessName: '',
    type: 'Fashion Boutique',
    email: '',
    phone: '',
    city: '',
    state: '',
    tier: 'Gold Tier' as AdminCustomer['tier'],
  });

  const filteredCustomers = customers.filter((c) => {
    const matchesTier = tierFilter === 'All' || c.tier === tierFilter;
    const matchesSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.businessName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTier && matchesSearch;
  });

  const handleCreateClient = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClient.name || !newClient.businessName) return;

    const created: AdminCustomer = {
      id: `cust-${Date.now()}`,
      name: newClient.name,
      businessName: newClient.businessName,
      type: newClient.type,
      email: newClient.email || 'partner@wholesale.com',
      phone: newClient.phone || '+91 98000 00000',
      city: newClient.city || 'Mumbai',
      state: newClient.state || 'Maharashtra',
      totalOrders: 1,
      totalSpend: 0,
      tier: newClient.tier,
      joinedDate: 'Oct 2026',
      lastActive: 'Just now',
      status: 'Active',
    };

    onAddCustomer(created);
    setIsAddModalOpen(false);
    setNewClient({
      name: '',
      businessName: '',
      type: 'Fashion Boutique',
      email: '',
      phone: '',
      city: '',
      state: '',
      tier: 'Gold Tier',
    });
  };

  const getTierBadge = (tier: AdminCustomer['tier']) => {
    switch (tier) {
      case 'Diamond Wholesale':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#FAF7F2] text-[#6B2A35] border border-[#C5A880]">
            <Award className="w-3 h-3 text-[#C5A880]" />
            Diamond VIP
          </span>
        );
      case 'Gold Tier':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-900 border border-amber-300">
            <Sparkles className="w-3 h-3 text-amber-600" />
            Gold Tier
          </span>
        );
      case 'Silver Tier':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-800 border border-slate-300">
            Silver Tier
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-[#FAF7F2] text-[#78716C] border border-[#E8DFC8]">
            Standard
          </span>
        );
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl p-5 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-widest bg-[#F3ECE2] text-[#6B2A35] rounded border border-[#E8DFC8]">
              Wholesale Network
            </span>
            <span className="text-xs text-[#78716C]">{customers.length} Verified Boutique Accounts</span>
          </div>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1C1917] mt-1">
            Boutique & Retail Clients
          </h2>
          <p className="text-xs sm:text-sm text-[#78716C]">
            Directory of partner boutiques, beauty studios, salons, and online resellers.
          </p>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#1C1917] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#6B2A35] transition-colors shadow-xs cursor-pointer"
        >
          <Plus className="w-4 h-4 text-[#C5A880]" />
          <span>Add Boutique Client</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl p-4 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-[#78716C] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by business name, owner name, or city..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917] placeholder-[#78716C] focus:outline-none focus:border-[#6B2A35]"
          />
        </div>

        {/* Tier Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
          {['All', 'Diamond Wholesale', 'Gold Tier', 'Silver Tier'].map((tier) => (
            <button
              key={tier}
              onClick={() => setTierFilter(tier)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                tierFilter === tier
                  ? 'bg-[#1C1917] text-[#FAF7F2]'
                  : 'bg-[#FAF7F2] text-[#44403C] hover:bg-[#F3ECE2] border border-[#E8DFC8]'
              }`}
            >
              {tier}
            </button>
          ))}
        </div>
      </div>

      {/* Customers Cards / Table */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCustomers.map((cust) => (
          <div
            key={cust.id}
            className="bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl p-5 shadow-xs hover:border-[#6B2A35] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-bold text-sm text-[#1C1917]">{cust.businessName}</h3>
                  <div className="text-xs text-[#78716C]">{cust.name}</div>
                </div>
                {getTierBadge(cust.tier)}
              </div>

              <div className="space-y-1.5 text-xs text-[#44403C] py-2 border-y border-[#E8DFC8]/60 my-2">
                <div className="flex items-center gap-2 text-[#78716C]">
                  <span className="text-[10px] font-semibold uppercase tracking-wider bg-[#FAF7F2] px-1.5 py-0.5 rounded border border-[#E8DFC8] text-[#9E5A63]">
                    {cust.type}
                  </span>
                  <span>• Joined {cust.joinedDate}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#78716C]">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                  <span>{cust.city}, {cust.state}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#78716C]">
                  <Phone className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                  <span>{cust.phone}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#78716C] truncate">
                  <Mail className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                  <span className="truncate">{cust.email}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 my-3 p-2.5 bg-[#FAF7F2] rounded-lg border border-[#E8DFC8] text-center">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#78716C] block">Orders</span>
                  <span className="font-bold text-sm text-[#1C1917]">{cust.totalOrders}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#78716C] block">Total Spend</span>
                  <span className="font-bold text-sm text-[#6B2A35]">₹{cust.totalSpend.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={`https://wa.me/?text=Hello%20${encodeURIComponent(
                  cust.name
                )},%20greeting%20from%20EDAMONEGLINT%20Wholesale!`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 bg-[#25D366] text-white text-xs font-semibold rounded hover:bg-[#1EBE5B] transition-colors"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`mailto:${cust.email}`}
                className="inline-flex items-center justify-center p-2 bg-[#FAF7F2] border border-[#E8DFC8] text-[#1C1917] rounded hover:bg-[#F3ECE2] transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4 text-[#78716C]" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Add Client Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl max-w-md w-full shadow-2xl p-6 relative animate-fade-in">
            <button
              onClick={() => setIsAddModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 text-[#78716C] hover:text-[#1C1917] hover:bg-[#FAF7F2] rounded-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif-luxury text-2xl font-bold text-[#1C1917] mb-1">
              Add Boutique Buyer
            </h3>
            <p className="text-xs text-[#78716C] mb-4">Register a new retail or wholesale account.</p>

            <form onSubmit={handleCreateClient} className="space-y-3 text-xs">
              <div>
                <label className="block font-medium text-[#1C1917] mb-1">Business / Boutique Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Blossom Hair Studio"
                  value={newClient.businessName}
                  onChange={(e) => setNewClient({ ...newClient, businessName: e.target.value })}
                  className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917] focus:outline-none focus:border-[#6B2A35]"
                />
              </div>

              <div>
                <label className="block font-medium text-[#1C1917] mb-1">Contact Person Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priya Sharma"
                  value={newClient.name}
                  onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
                  className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917] focus:outline-none focus:border-[#6B2A35]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-[#1C1917] mb-1">Business Type</label>
                  <select
                    value={newClient.type}
                    onChange={(e) => setNewClient({ ...newClient, type: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917] focus:outline-none focus:border-[#6B2A35]"
                  >
                    <option value="Fashion Boutique">Fashion Boutique</option>
                    <option value="Hair & Beauty Salon">Hair & Beauty Salon</option>
                    <option value="Instagram Reseller">Instagram Reseller</option>
                    <option value="E-commerce Brands">E-commerce Brands</option>
                    <option value="Gift & Lifestyle">Gift & Lifestyle</option>
                  </select>
                </div>

                <div>
                  <label className="block font-medium text-[#1C1917] mb-1">Wholesale Tier</label>
                  <select
                    value={newClient.tier}
                    onChange={(e) =>
                      setNewClient({ ...newClient, tier: e.target.value as AdminCustomer['tier'] })
                    }
                    className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917] focus:outline-none focus:border-[#6B2A35]"
                  >
                    <option value="Standard Boutique">Standard Boutique</option>
                    <option value="Silver Tier">Silver Tier</option>
                    <option value="Gold Tier">Gold Tier</option>
                    <option value="Diamond Wholesale">Diamond VIP</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-[#1C1917] mb-1">Phone / WhatsApp</label>
                  <input
                    type="text"
                    placeholder="+91 98..."
                    value={newClient.phone}
                    onChange={(e) => setNewClient({ ...newClient, phone: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917] focus:outline-none focus:border-[#6B2A35]"
                  />
                </div>

                <div>
                  <label className="block font-medium text-[#1C1917] mb-1">City</label>
                  <input
                    type="text"
                    placeholder="e.g. Mumbai"
                    value={newClient.city}
                    onChange={(e) => setNewClient({ ...newClient, city: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917] focus:outline-none focus:border-[#6B2A35]"
                  />
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#E8DFC8] flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 bg-[#FAF7F2] text-[#44403C] border border-[#E8DFC8] rounded font-semibold uppercase tracking-wider text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#1C1917] text-[#FAF7F2] rounded font-semibold uppercase tracking-wider text-xs hover:bg-[#6B2A35] transition-colors cursor-pointer"
                >
                  Create Client Account
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
