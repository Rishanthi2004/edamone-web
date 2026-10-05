'use client';

import { useState } from 'react';
import {
  Settings,
  Store,
  Shield,
  Bell,
  Sliders,
  CheckCircle2,
  Save,
  Sparkles,
  Lock,
  Mail,
  Phone,
  FileText,
} from 'lucide-react';

export default function SettingsView() {
  const [activeSubTab, setActiveSubTab] = useState<'store' | 'wholesale' | 'security'>('store');
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Settings State
  const [storeInfo, setStoreInfo] = useState({
    brandName: 'EDAMONEGLINT',
    tagline: 'Korean-Inspired Hair Accessories Wholesale',
    supportEmail: 'contact@edamoneglint.com',
    wholesalePhone: '+91 98765 43210',
    warehouseCity: 'Mumbai, Maharashtra',
    gstNumber: '27AABCE1234F1Z5',
  });

  const [wholesaleRules, setWholesaleRules] = useState({
    defaultMoq: '30 Pcs',
    minimumOrderAmount: '₹3,000',
    advancePaymentPercent: '50%',
    enableWhatsAppDirectOrders: true,
    autoInvoiceGeneration: true,
    allowMixedColorPacks: true,
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl p-5 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-widest bg-[#F3ECE2] text-[#6B2A35] rounded border border-[#E8DFC8]">
              Configuration
            </span>
            <span className="text-xs text-[#78716C]">Store Preferences & Wholesale Thresholds</span>
          </div>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1C1917] mt-1">
            Store & Admin Settings
          </h2>
          <p className="text-xs sm:text-sm text-[#78716C]">
            Configure your wholesale MOQ guidelines, catalog parameters, and manager security.
          </p>
        </div>

        {savedSuccess && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 border border-emerald-300 text-emerald-800 rounded-md text-xs font-semibold animate-fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Settings saved successfully!</span>
          </div>
        )}
      </div>

      {/* Sub Tabs */}
      <div className="flex items-center gap-2 border-b border-[#E8DFC8] pb-1">
        <button
          onClick={() => setActiveSubTab('store')}
          className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-t-lg transition-colors cursor-pointer ${
            activeSubTab === 'store'
              ? 'bg-[#FFFFFF] text-[#6B2A35] border-t-2 border-x border-[#E8DFC8] -mb-1'
              : 'text-[#78716C] hover:text-[#1C1917]'
          }`}
        >
          Store Identity
        </button>
        <button
          onClick={() => setActiveSubTab('wholesale')}
          className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-t-lg transition-colors cursor-pointer ${
            activeSubTab === 'wholesale'
              ? 'bg-[#FFFFFF] text-[#6B2A35] border-t-2 border-x border-[#E8DFC8] -mb-1'
              : 'text-[#78716C] hover:text-[#1C1917]'
          }`}
        >
          Wholesale Rules
        </button>
        <button
          onClick={() => setActiveSubTab('security')}
          className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-t-lg transition-colors cursor-pointer ${
            activeSubTab === 'security'
              ? 'bg-[#FFFFFF] text-[#6B2A35] border-t-2 border-x border-[#E8DFC8] -mb-1'
              : 'text-[#78716C] hover:text-[#1C1917]'
          }`}
        >
          Admin Security
        </button>
      </div>

      {/* Main Settings Form */}
      <div className="bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl p-6 shadow-xs">
        <form onSubmit={handleSave} className="space-y-5 text-xs max-w-2xl">
          {activeSubTab === 'store' && (
            <div className="space-y-4">
              <h3 className="font-serif-luxury text-xl font-bold text-[#1C1917]">
                General Store Information
              </h3>

              <div>
                <label className="block font-semibold text-[#1C1917] mb-1">Brand Name</label>
                <input
                  type="text"
                  value={storeInfo.brandName}
                  onChange={(e) => setStoreInfo({ ...storeInfo, brandName: e.target.value })}
                  className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917] focus:outline-none focus:border-[#6B2A35]"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#1C1917] mb-1">Tagline</label>
                <input
                  type="text"
                  value={storeInfo.tagline}
                  onChange={(e) => setStoreInfo({ ...storeInfo, tagline: e.target.value })}
                  className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917] focus:outline-none focus:border-[#6B2A35]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-[#1C1917] mb-1">Support Email</label>
                  <input
                    type="email"
                    value={storeInfo.supportEmail}
                    onChange={(e) => setStoreInfo({ ...storeInfo, supportEmail: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917] focus:outline-none focus:border-[#6B2A35]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#1C1917] mb-1">Wholesale WhatsApp Phone</label>
                  <input
                    type="text"
                    value={storeInfo.wholesalePhone}
                    onChange={(e) => setStoreInfo({ ...storeInfo, wholesalePhone: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917] focus:outline-none focus:border-[#6B2A35]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-[#1C1917] mb-1">Warehouse City</label>
                  <input
                    type="text"
                    value={storeInfo.warehouseCity}
                    onChange={(e) => setStoreInfo({ ...storeInfo, warehouseCity: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917] focus:outline-none focus:border-[#6B2A35]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#1C1917] mb-1">GST / Business Tax ID</label>
                  <input
                    type="text"
                    value={storeInfo.gstNumber}
                    onChange={(e) => setStoreInfo({ ...storeInfo, gstNumber: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917] focus:outline-none focus:border-[#6B2A35]"
                  />
                </div>
              </div>
            </div>
          )}

          {activeSubTab === 'wholesale' && (
            <div className="space-y-4">
              <h3 className="font-serif-luxury text-xl font-bold text-[#1C1917]">
                Wholesale Order Policies & MOQ Rules
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-[#1C1917] mb-1">Default MOQ Threshold</label>
                  <input
                    type="text"
                    value={wholesaleRules.defaultMoq}
                    onChange={(e) =>
                      setWholesaleRules({ ...wholesaleRules, defaultMoq: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917] focus:outline-none focus:border-[#6B2A35]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#1C1917] mb-1">
                    Minimum Order Value (INR)
                  </label>
                  <input
                    type="text"
                    value={wholesaleRules.minimumOrderAmount}
                    onChange={(e) =>
                      setWholesaleRules({ ...wholesaleRules, minimumOrderAmount: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917] focus:outline-none focus:border-[#6B2A35]"
                  />
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={wholesaleRules.enableWhatsAppDirectOrders}
                    onChange={(e) =>
                      setWholesaleRules({
                        ...wholesaleRules,
                        enableWhatsAppDirectOrders: e.target.checked,
                      })
                    }
                    className="rounded border-[#E8DFC8] text-[#6B2A35] focus:ring-[#6B2A35]"
                  />
                  <span className="font-medium text-[#1C1917]">
                    Enable One-Click Direct WhatsApp Enquiry prefill with SKU codes
                  </span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={wholesaleRules.autoInvoiceGeneration}
                    onChange={(e) =>
                      setWholesaleRules({
                        ...wholesaleRules,
                        autoInvoiceGeneration: e.target.checked,
                      })
                    }
                    className="rounded border-[#E8DFC8] text-[#6B2A35] focus:ring-[#6B2A35]"
                  />
                  <span className="font-medium text-[#1C1917]">
                    Auto-calculate tiered wholesale volume discounts for 100+ pcs
                  </span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={wholesaleRules.allowMixedColorPacks}
                    onChange={(e) =>
                      setWholesaleRules({
                        ...wholesaleRules,
                        allowMixedColorPacks: e.target.checked,
                      })
                    }
                    className="rounded border-[#E8DFC8] text-[#6B2A35] focus:ring-[#6B2A35]"
                  />
                  <span className="font-medium text-[#1C1917]">
                    Allow mixed pastel shade bundles within single MOQ carton
                  </span>
                </label>
              </div>
            </div>
          )}

          {activeSubTab === 'security' && (
            <div className="space-y-4">
              <h3 className="font-serif-luxury text-xl font-bold text-[#1C1917]">
                Admin Account & Credentials
              </h3>

              <div>
                <label className="block font-semibold text-[#1C1917] mb-1">Admin Account Email</label>
                <input
                  type="email"
                  defaultValue="admin@edamoneglint.com"
                  disabled
                  className="w-full px-3 py-2 bg-[#EDE5DA] border border-[#E8DFC8] rounded-md text-[#78716C] cursor-not-allowed"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-[#1C1917] mb-1">Current Password</label>
                  <input
                    type="password"
                    placeholder="••••••••••••"
                    className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917] focus:outline-none focus:border-[#6B2A35]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#1C1917] mb-1">New Password</label>
                  <input
                    type="password"
                    placeholder="Enter new password"
                    className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917] focus:outline-none focus:border-[#6B2A35]"
                  />
                </div>
              </div>

              <div className="p-3 bg-[#FAF7F2] border border-[#E8DFC8] rounded-lg">
                <div className="flex items-center gap-2 font-semibold text-[#1C1917]">
                  <Lock className="w-4 h-4 text-[#C5A880]" />
                  <span>Session Security Active</span>
                </div>
                <p className="text-[11px] text-[#78716C] mt-1">
                  Automatic session expiry after 24 hours of inactivity.
                </p>
              </div>
            </div>
          )}

          <div className="pt-4 border-t border-[#E8DFC8] flex items-center justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1C1917] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#6B2A35] transition-colors cursor-pointer shadow-xs"
            >
              <Save className="w-4 h-4 text-[#C5A880]" />
              <span>Save Changes</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
