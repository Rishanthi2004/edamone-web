'use client';

import { useState } from 'react';
import {
  ShoppingBag,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  Truck,
  Layers,
  Eye,
  X,
  Phone,
  Mail,
  MapPin,
  Calendar,
  FileSpreadsheet,
  Download,
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons';
import { AdminOrder } from './mockData';

interface OrdersViewProps {
  orders: AdminOrder[];
  onUpdateOrderStatus: (orderId: string, newStatus: AdminOrder['status']) => void;
  selectedOrderModal: AdminOrder | null;
  onOpenOrderModal: (order: AdminOrder | null) => void;
}

export default function OrdersView({
  orders,
  onUpdateOrderStatus,
  selectedOrderModal,
  onOpenOrderModal,
}: OrdersViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');

  const filteredOrders = orders.filter((o) => {
    const matchesStatus = statusFilter === 'All' || o.status === statusFilter;
    const matchesSearch =
      o.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.businessName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.city.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

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

  const statusOptions: AdminOrder['status'][] = [
    'Pending',
    'Confirmed',
    'Processing',
    'Dispatched',
    'Delivered',
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl p-5 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-widest bg-[#F3ECE2] text-[#6B2A35] rounded border border-[#E8DFC8]">
              Wholesale Fulfillment
            </span>
            <span className="text-xs text-[#78716C]">{orders.length} Total Enquiries & Batches</span>
          </div>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1C1917] mt-1">
            Wholesale Orders
          </h2>
          <p className="text-xs sm:text-sm text-[#78716C]">
            Track boutique requests, confirm invoice payments, and update dispatch milestones.
          </p>
        </div>

        <button
          onClick={() => alert('Exporting wholesale orders report as CSV...')}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#FFFFFF] border border-[#E8DFC8] text-[#1C1917] text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#F3ECE2] transition-colors cursor-pointer"
        >
          <Download className="w-4 h-4 text-[#6B2A35]" />
          <span>Export Summary</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl p-4 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-[#78716C] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by Order # (e.g. EDG-2026-894), boutique name, or city..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917] placeholder-[#78716C] focus:outline-none focus:border-[#6B2A35]"
          />
        </div>

        {/* Status Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
          {['All', 'Pending', 'Confirmed', 'Processing', 'Dispatched', 'Delivered'].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                statusFilter === status
                  ? 'bg-[#1C1917] text-[#FAF7F2]'
                  : 'bg-[#FAF7F2] text-[#44403C] hover:bg-[#F3ECE2] border border-[#E8DFC8]'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#FAF7F2] border-b border-[#E8DFC8] text-[11px] uppercase tracking-wider font-semibold text-[#78716C]">
                <th className="py-3.5 px-4">Order ID & Date</th>
                <th className="py-3.5 px-4">Boutique & Buyer</th>
                <th className="py-3.5 px-4">Items & Units</th>
                <th className="py-3.5 px-4">Amount</th>
                <th className="py-3.5 px-4">Payment</th>
                <th className="py-3.5 px-4">Fulfillment Status</th>
                <th className="py-3.5 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8DFC8]/60 text-xs">
              {filteredOrders.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-[#78716C]">
                    <ShoppingBag className="w-8 h-8 mx-auto text-[#C5A880] mb-2 opacity-60" />
                    <p className="font-semibold text-[#1C1917]">No orders found</p>
                    <p className="text-xs">Try selecting a different filter or clearing your search.</p>
                  </td>
                </tr>
              ) : (
                filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-[#FAF7F2]/50 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-medium text-[#1C1917]">
                      <div>{order.orderNumber}</div>
                      <div className="text-[10px] text-[#78716C] font-sans flex items-center gap-1 mt-0.5">
                        <Calendar className="w-3 h-3 text-[#C5A880]" />
                        {order.date}
                      </div>
                    </td>

                    <td className="py-3.5 px-4">
                      <div className="font-bold text-[#1C1917]">{order.businessName}</div>
                      <div className="text-[11px] text-[#78716C]">
                        {order.customerName} • {order.city}
                      </div>
                      <div className="text-[10px] text-[#9E5A63] font-medium">{order.customerType}</div>
                    </td>

                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-[#1C1917]">{order.totalItems} Pcs Total</div>
                      <div className="text-[10px] text-[#78716C] truncate max-w-xs">
                        {order.items.map((i) => i.productName).join(', ')}
                      </div>
                    </td>

                    <td className="py-3.5 px-4">
                      <div className="font-bold text-sm text-[#1C1917]">₹{order.totalAmount.toLocaleString()}</div>
                    </td>

                    <td className="py-3.5 px-4">
                      <span className="inline-block px-2 py-0.5 text-[10px] font-semibold rounded bg-[#F3ECE2] text-[#6B2A35] border border-[#E8DFC8]">
                        {order.paymentStatus}
                      </span>
                    </td>

                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2">
                        {getStatusBadge(order.status)}
                        <select
                          value={order.status}
                          onChange={(e) =>
                            onUpdateOrderStatus(order.id, e.target.value as AdminOrder['status'])
                          }
                          className="text-[10px] bg-[#FAF7F2] border border-[#E8DFC8] rounded px-1.5 py-0.5 text-[#1C1917] cursor-pointer focus:outline-none focus:border-[#6B2A35]"
                        >
                          {statusOptions.map((st) => (
                            <option key={st} value={st}>
                              {st}
                            </option>
                          ))}
                        </select>
                      </div>
                    </td>

                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => onOpenOrderModal(order)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium text-[#1C1917] bg-[#FAF7F2] border border-[#E8DFC8] rounded hover:bg-[#F3ECE2] hover:text-[#6B2A35] transition-colors cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View</span>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Detail Modal */}
      {selectedOrderModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 relative animate-fade-in">
            <button
              onClick={() => onOpenOrderModal(null)}
              className="absolute top-4 right-4 p-1.5 text-[#78716C] hover:text-[#1C1917] hover:bg-[#FAF7F2] rounded-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center justify-between pb-3 border-b border-[#E8DFC8] pr-8">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#9E5A63]">
                  Wholesale Order Summary
                </span>
                <h3 className="font-serif-luxury text-2xl font-bold text-[#1C1917]">
                  {selectedOrderModal.orderNumber}
                </h3>
              </div>
              <div>{getStatusBadge(selectedOrderModal.status)}</div>
            </div>

            {/* Client & Shipping Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 p-4 bg-[#FAF7F2] rounded-lg border border-[#E8DFC8] text-xs">
              <div>
                <h4 className="font-bold text-[#1C1917] uppercase tracking-wider mb-2">Boutique Details</h4>
                <p className="font-semibold text-[#1C1917]">{selectedOrderModal.businessName}</p>
                <p className="text-[#78716C]">Contact: {selectedOrderModal.customerName}</p>
                <p className="text-[#78716C] flex items-center gap-1 mt-1">
                  <MapPin className="w-3 h-3 text-[#C5A880]" />
                  {selectedOrderModal.city}
                </p>
                <p className="text-[#78716C] flex items-center gap-1 mt-1">
                  <Mail className="w-3 h-3 text-[#C5A880]" />
                  {selectedOrderModal.email}
                </p>
                <p className="text-[#78716C] flex items-center gap-1 mt-1">
                  <Phone className="w-3 h-3 text-[#C5A880]" />
                  {selectedOrderModal.phone}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#1C1917] uppercase tracking-wider mb-2">Order Milestones</h4>
                <p className="text-[#78716C]">Received: {selectedOrderModal.date}</p>
                <p className="text-[#78716C] mt-1">
                  Payment Mode:{' '}
                  <span className="font-semibold text-[#1C1917]">{selectedOrderModal.paymentStatus}</span>
                </p>
                {selectedOrderModal.notes && (
                  <div className="mt-2 p-2 bg-[#FFFFFF] border border-[#E8DFC8] rounded text-[11px] text-[#6B2A35]">
                    <span className="font-semibold block">Client Special Note:</span>
                    {selectedOrderModal.notes}
                  </div>
                )}
              </div>
            </div>

            {/* Order Items Table */}
            <div className="my-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1917] mb-2">
                Order Items ({selectedOrderModal.totalItems} Pcs)
              </h4>
              <div className="border border-[#E8DFC8] rounded-lg overflow-hidden">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#FAF7F2] border-b border-[#E8DFC8] text-[10px] uppercase font-semibold text-[#78716C]">
                      <th className="py-2.5 px-3">Product Name</th>
                      <th className="py-2.5 px-3">Selected Color</th>
                      <th className="py-2.5 px-3">Qty</th>
                      <th className="py-2.5 px-3">Rate</th>
                      <th className="py-2.5 px-3 text-right">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E8DFC8]/60">
                    {selectedOrderModal.items.map((item, idx) => (
                      <tr key={idx}>
                        <td className="py-2.5 px-3">
                          <div className="font-semibold text-[#1C1917]">{item.productName}</div>
                          <div className="font-mono text-[10px] text-[#78716C]">{item.productCode}</div>
                        </td>
                        <td className="py-2.5 px-3 text-[#78716C]">{item.selectedColor}</td>
                        <td className="py-2.5 px-3 font-semibold text-[#1C1917]">{item.quantity} pcs</td>
                        <td className="py-2.5 px-3 text-[#78716C]">₹{item.unitPrice}</td>
                        <td className="py-2.5 px-3 text-right font-bold text-[#1C1917]">
                          ₹{(item.quantity * item.unitPrice).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-[#FAF7F2] font-bold text-[#1C1917] border-t border-[#E8DFC8]">
                      <td colSpan={4} className="py-3 px-3 text-right">
                        Total Wholesale Invoice:
                      </td>
                      <td className="py-3 px-3 text-right text-sm text-[#6B2A35]">
                        ₹{selectedOrderModal.totalAmount.toLocaleString()}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-[#E8DFC8] flex flex-wrap items-center justify-between gap-3">
              <a
                href={`https://wa.me/?text=Hello%20${encodeURIComponent(
                  selectedOrderModal.customerName
                )},%20regarding%20your%20Wholesale%20Order%20${selectedOrderModal.orderNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#25D366] text-white text-xs font-semibold rounded hover:bg-[#1EBE5B] transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Message Client on WhatsApp</span>
              </a>

              <button
                onClick={() => onOpenOrderModal(null)}
                className="px-4 py-2 bg-[#1C1917] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider rounded hover:bg-[#6B2A35] transition-colors cursor-pointer"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
