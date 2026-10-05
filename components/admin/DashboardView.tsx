'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Package,
  ShoppingBag,
  Users,
  DollarSign,
  TrendingUp,
  ArrowUpRight,
  Plus,
  Eye,
  CheckCircle2,
  Clock,
  Truck,
  AlertCircle,
  Filter,
  Sparkles,
  Layers,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import { PRODUCTS, CATEGORIES, Product } from '@/data/products';
import { AdminOrder, AdminCustomer, STORE_STATS } from './mockData';

interface DashboardViewProps {
  orders: AdminOrder[];
  products: Product[];
  customers: AdminCustomer[];
  onSelectTab: (tab: string) => void;
  onViewOrder: (order: AdminOrder) => void;
  onOpenAddProduct: () => void;
}

export default function DashboardView({
  orders,
  products,
  customers,
  onSelectTab,
  onViewOrder,
  onOpenAddProduct,
}: DashboardViewProps) {
  const getStatusBadge = (status: AdminOrder['status']) => {
    switch (status) {
      case 'Pending':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-800 border border-amber-200">
            <Clock className="w-3 h-3 text-amber-600" />
            Pending
          </span>
        );
      case 'Confirmed':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-800 border border-blue-200">
            <CheckCircle2 className="w-3 h-3 text-blue-600" />
            Confirmed
          </span>
        );
      case 'Processing':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-purple-50 text-purple-800 border border-purple-200">
            <Layers className="w-3 h-3 text-purple-600" />
            Processing
          </span>
        );
      case 'Dispatched':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-50 text-indigo-800 border border-indigo-200">
            <Truck className="w-3 h-3 text-indigo-600" />
            Dispatched
          </span>
        );
      case 'Delivered':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            Delivered
          </span>
        );
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in">
      {/* Welcome Banner & Quick Actions */}
      <div className="bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl p-5 sm:p-6 shadow-xs flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-widest bg-[#F3ECE2] text-[#6B2A35] rounded border border-[#E8DFC8]">
              Wholesale Command Hub
            </span>
            <span className="text-xs text-[#78716C]">Today is {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>
          <h1 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1C1917] mt-1.5">
            Welcome back, Store Admin
          </h1>
          <p className="text-xs sm:text-sm text-[#78716C] mt-0.5">
            Manage your Korean-inspired hair accessories catalogue, wholesale orders, and boutique clients.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={onOpenAddProduct}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1C1917] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#6B2A35] transition-colors shadow-xs cursor-pointer"
          >
            <Plus className="w-4 h-4 text-[#C5A880]" />
            <span>Add Product</span>
          </button>
          <button
            onClick={() => onSelectTab('Orders')}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FFFFFF] border border-[#E8DFC8] text-[#1C1917] text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#F3ECE2] transition-colors cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 text-[#6B2A35]" />
            <span>View Orders</span>
          </button>
        </div>
      </div>

      {/* Primary KPI Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
        {/* Card 1: Total Products */}
        <div
          onClick={() => onSelectTab('Products')}
          className="bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl p-3.5 sm:p-5 hover:border-[#6B2A35] transition-all duration-200 cursor-pointer group shadow-xs hover:shadow-md"
        >
          <div className="flex items-center justify-between gap-1">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-widest text-[#78716C] truncate">
              Total Products
            </span>
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-[#FAF7F2] border border-[#E8DFC8] flex items-center justify-center text-[#6B2A35] group-hover:bg-[#6B2A35] group-hover:text-[#FAF7F2] transition-colors shrink-0">
              <Package className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
          </div>
          <div className="mt-2 sm:mt-3">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif-luxury text-[#1C1917]">
              {products.length}
            </div>
            <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-[#78716C]">
              <span className="text-emerald-700 font-semibold flex items-center">
                <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-0.5 inline" /> Active
              </span>
              <span className="hidden sm:inline">• Across 5 categories</span>
            </div>
          </div>
        </div>

        {/* Card 2: Total Orders */}
        <div
          onClick={() => onSelectTab('Orders')}
          className="bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl p-3.5 sm:p-5 hover:border-[#6B2A35] transition-all duration-200 cursor-pointer group shadow-xs hover:shadow-md"
        >
          <div className="flex items-center justify-between gap-1">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-widest text-[#78716C] truncate">
              Total Orders
            </span>
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-[#FAF7F2] border border-[#E8DFC8] flex items-center justify-center text-[#6B2A35] group-hover:bg-[#6B2A35] group-hover:text-[#FAF7F2] transition-colors shrink-0">
              <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
          </div>
          <div className="mt-2 sm:mt-3">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif-luxury text-[#1C1917]">
              {STORE_STATS.totalOrders}
            </div>
            <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-[#78716C]">
              <span className="text-emerald-700 font-semibold flex items-center">
                <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-0.5 inline" /> +18%
              </span>
              <span className="hidden sm:inline">• {orders.length} batches</span>
            </div>
          </div>
        </div>

        {/* Card 3: Total Customers */}
        <div
          onClick={() => onSelectTab('Customers')}
          className="bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl p-3.5 sm:p-5 hover:border-[#6B2A35] transition-all duration-200 cursor-pointer group shadow-xs hover:shadow-md"
        >
          <div className="flex items-center justify-between gap-1">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-widest text-[#78716C] truncate">
              Total Customers
            </span>
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-[#FAF7F2] border border-[#E8DFC8] flex items-center justify-center text-[#6B2A35] group-hover:bg-[#6B2A35] group-hover:text-[#FAF7F2] transition-colors shrink-0">
              <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
          </div>
          <div className="mt-2 sm:mt-3">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif-luxury text-[#1C1917]">
              {STORE_STATS.totalCustomers}
            </div>
            <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-[#78716C]">
              <span className="text-emerald-700 font-semibold flex items-center">
                <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-0.5 inline" /> +12 new
              </span>
              <span className="hidden sm:inline">• Boutiques</span>
            </div>
          </div>
        </div>

        {/* Card 4: Total Revenue */}
        <div className="bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl p-3.5 sm:p-5 shadow-xs">
          <div className="flex items-center justify-between gap-1">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-widest text-[#78716C] truncate">
              Total Revenue
            </span>
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-[#FAF7F2] border border-[#E8DFC8] flex items-center justify-center text-[#C5A880] shrink-0">
              <DollarSign className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
          </div>
          <div className="mt-2 sm:mt-3">
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif-luxury text-[#1C1917]">
              {STORE_STATS.totalRevenue}
            </div>
            <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-[#78716C]">
              <span className="text-emerald-700 font-semibold flex items-center">
                <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-0.5 inline" /> {STORE_STATS.monthlyGrowth}
              </span>
              <span className="hidden sm:inline">vs last mo.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid: Recent Orders (Left) & Overview / Recent Products (Right) */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left 2 Cols: Recent Orders Table */}
        <div className="xl:col-span-2 bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl overflow-hidden shadow-xs">
          <div className="p-5 border-b border-[#E8DFC8] flex items-center justify-between">
            <div>
              <h3 className="font-serif-luxury text-xl font-bold text-[#1C1917]">Recent Wholesale Orders</h3>
              <p className="text-xs text-[#78716C]">Latest incoming batches and dispatch statuses</p>
            </div>
            <button
              onClick={() => onSelectTab('Orders')}
              className="text-xs font-semibold text-[#6B2A35] hover:text-[#9E5A63] flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>View All</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#FAF7F2] border-b border-[#E8DFC8] text-[11px] uppercase tracking-wider font-semibold text-[#78716C]">
                  <th className="py-3 px-4">Order ID</th>
                  <th className="py-3 px-4">Boutique / Client</th>
                  <th className="py-3 px-4">Units & Amount</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8DFC8]/60 text-xs">
                {orders.slice(0, 5).map((order) => (
                  <tr key={order.id} className="hover:bg-[#FAF7F2]/50 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-medium text-[#1C1917]">
                      <div>{order.orderNumber}</div>
                      <div className="text-[10px] text-[#78716C] font-sans">{order.date}</div>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-[#1C1917]">{order.businessName}</div>
                      <div className="text-[11px] text-[#78716C]">
                        {order.customerName} • {order.city}
                      </div>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-[#1C1917]">₹{order.totalAmount.toLocaleString()}</div>
                      <div className="text-[10px] text-[#78716C]">{order.totalItems} pcs</div>
                    </td>
                    <td className="py-3.5 px-4">{getStatusBadge(order.status)}</td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => onViewOrder(order)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium text-[#1C1917] bg-[#FAF7F2] border border-[#E8DFC8] rounded hover:bg-[#F3ECE2] hover:text-[#6B2A35] transition-colors cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Details</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right 1 Col: Category Overview & Top Products */}
        <div className="space-y-6">
          {/* Simple Overview Section */}
          <div className="bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl p-5 shadow-xs">
            <h3 className="font-serif-luxury text-xl font-bold text-[#1C1917]">Inventory Overview</h3>
            <p className="text-xs text-[#78716C] mb-4">Stock distribution across core wholesale categories</p>

            <div className="space-y-3">
              {CATEGORIES.map((cat) => {
                const count = products.filter((p) => p.category === cat.id).length;
                const percentage = Math.round((count / products.length) * 100) || 20;

                return (
                  <div key={cat.id} className="space-y-1">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-[#1C1917]">{cat.name}</span>
                      <span className="text-[#78716C]">{count} products ({percentage}%)</span>
                    </div>
                    <div className="w-full h-2 bg-[#FAF7F2] border border-[#E8DFC8]/60 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#6B2A35] rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 pt-4 border-t border-[#E8DFC8] flex items-center justify-between text-xs">
              <span className="text-[#78716C]">Average Wholesale MOQ</span>
              <span className="font-semibold text-[#1C1917]">40–50 Pcs / SKU</span>
            </div>
          </div>

          {/* Quick Wholesale Activity Feed */}
          <div className="bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl p-5 shadow-xs">
            <h3 className="font-serif-luxury text-xl font-bold text-[#1C1917]">Quick Enquiries</h3>
            <p className="text-xs text-[#78716C] mb-3">Live wholesale requests awaiting dispatch quote</p>

            <div className="space-y-3">
              <div className="p-3 bg-[#FAF7F2] border border-[#E8DFC8] rounded-lg text-xs">
                <div className="flex items-center justify-between font-semibold text-[#1C1917]">
                  <span>Aura Salon & Spa</span>
                  <span className="text-[10px] text-[#9E5A63]">5 mins ago</span>
                </div>
                <p className="text-[11px] text-[#78716C] mt-1">
                  Enquired for 100 pcs Satin Scrunchies + 50 Velvet Bands (Bengaluru)
                </p>
              </div>

              <div className="p-3 bg-[#FAF7F2] border border-[#E8DFC8] rounded-lg text-xs">
                <div className="flex items-center justify-between font-semibold text-[#1C1917]">
                  <span>Seoul Glint Reseller</span>
                  <span className="text-[10px] text-[#9E5A63]">2 hours ago</span>
                </div>
                <p className="text-[11px] text-[#78716C] mt-1">
                  Requested custom card packaging pricing for 300 Pearl Clips
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Products Row */}
      <div className="bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl p-5 sm:p-6 shadow-xs">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="font-serif-luxury text-xl font-bold text-[#1C1917]">Recent Products</h3>
            <p className="text-xs text-[#78716C]">Recently updated items in your wholesale catalogue</p>
          </div>
          <button
            onClick={() => onSelectTab('Products')}
            className="text-xs font-semibold text-[#6B2A35] hover:text-[#9E5A63] flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>Manage All ({products.length})</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.slice(0, 4).map((product) => (
            <div
              key={product.id}
              className="bg-[#FAF7F2]/60 border border-[#E8DFC8] rounded-lg p-3.5 flex flex-col justify-between hover:border-[#6B2A35] transition-colors group"
            >
              <div>
                <div className="relative w-full h-36 bg-[#F3ECE2] rounded overflow-hidden mb-3">
                  <Image
                    src={product.images[0] || '/images/hero-claw-clip.jpg'}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 bg-[#1C1917]/80 backdrop-blur-xs text-[#FAF7F2] px-2 py-0.5 rounded text-[10px] font-mono">
                    {product.code}
                  </div>
                </div>

                <div className="text-[10px] uppercase tracking-wider font-semibold text-[#9E5A63]">
                  {product.categoryName}
                </div>
                <h4 className="text-xs font-bold text-[#1C1917] mt-0.5 line-clamp-1">{product.name}</h4>
                <p className="text-[11px] text-[#78716C] mt-1 line-clamp-2">{product.shortDescription}</p>
              </div>

              <div className="mt-3 pt-3 border-t border-[#E8DFC8]/60 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#1C1917]">{product.wholesalePrice}</div>
                  <div className="text-[10px] text-[#78716C]">MOQ: {product.moq}</div>
                </div>
                <span className="text-[10px] px-2 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full font-semibold">
                  In Stock
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
