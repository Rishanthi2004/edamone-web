'use client';

import { useState, FormEvent, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, Building2, Phone, User, MapPin, Tag, Package, HelpCircle } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons';

interface WholesaleEnquiryFormProps {
  initialProductCode?: string;
  initialProductName?: string;
  className?: string;
}

export default function WholesaleEnquiryForm({
  initialProductCode = '',
  initialProductName = '',
  className = '',
}: WholesaleEnquiryFormProps) {
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [cityLocation, setCityLocation] = useState('');
  const [businessType, setBusinessType] = useState('Fashion Boutique');
  const [productsInterested, setProductsInterested] = useState(
    initialProductCode ? `${initialProductCode} - ${initialProductName}` : 'All Collections (Hair Clips, Bows, Scrunchies)'
  );
  const [approxQuantity, setApproxQuantity] = useState('100 - 300 Pcs');
  const [message, setMessage] = useState(
    initialProductCode
      ? `Hello Edamoneglint, I am interested in wholesale pricing and availability for ${initialProductCode} (${initialProductName}). Please send catalog and MOQ terms.`
      : ''
  );
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Update field if props change
  useEffect(() => {
    if (initialProductCode && initialProductName) {
      setProductsInterested(`${initialProductCode} - ${initialProductName}`);
      setMessage(
        `Hello Edamoneglint, I am interested in wholesale pricing and availability for ${initialProductCode} (${initialProductName}). Please send catalog and MOQ terms.`
      );
    }
  }, [initialProductCode, initialProductName]);

  // Construct dynamic WhatsApp Link
  const generateWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `*Wholesale Enquiry - EDAMONEGLINT*\n` +
      `*Name:* ${name || 'Prospective Client'}\n` +
      `*Business:* ${businessName || 'Boutique/Store'}\n` +
      `*Location:* ${cityLocation || 'Unspecified'}\n` +
      `*Business Type:* ${businessType}\n` +
      `*Products:* ${productsInterested || 'General Collection'}\n` +
      `*Estimated Qty:* ${approxQuantity}\n` +
      `*Message:* ${message || 'Please send wholesale catalog and pricing.'}`
    );
    return `https://wa.me/?text=${text}`;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim() || !businessName.trim() || !whatsappNumber.trim()) {
      setErrorMessage('Please fill in your name, business name, and WhatsApp number.');
      return;
    }

    setIsSubmitting(true);
    // Simulate swift form processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className={`bg-[#FFFFFF] border border-[#EAE2D5] p-6 sm:p-8 md:p-10 shadow-sm ${className}`}>
      {isSubmitted ? (
        <div className="text-center py-10 space-y-4">
          <div className="w-16 h-16 bg-[#F7ECE9] text-[#6B2A35] rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#1C1917] font-medium">
            Thank You for Your Enquiry
          </h3>
          <p className="text-sm text-[#57534E] max-w-md mx-auto leading-relaxed">
            We have received your wholesale requirements. Our wholesale desk will review your details and reach out via WhatsApp with our price sheet and product availability.
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-medium text-xs uppercase tracking-widest hover:bg-[#1EBE5B] transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Speed up on WhatsApp</span>
            </a>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setName('');
                setBusinessName('');
                setMessage('');
              }}
              className="w-full sm:w-auto px-6 py-3 bg-[#FAF7F2] border border-[#E8DFC8] text-[#1C1917] font-medium text-xs uppercase tracking-widest hover:bg-[#F3ECE2] transition-colors"
            >
              Submit Another Enquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {errorMessage && (
            <div className="p-3 bg-[#FBF0F0] border border-[#F5C2C7] text-[#842029] text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#44403C] mb-1.5">
                Your Name <span className="text-[#6B2A35]">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Min-Ji Park / Sarah Jenkins"
                  className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#E8DFC8] text-sm text-[#1C1917] focus:outline-none focus:border-[#9E5A63] focus:bg-white transition-colors"
                />
              </div>
            </div>

            {/* Business Name */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#44403C] mb-1.5">
                Business / Boutique Name <span className="text-[#6B2A35]">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Bloom Atelier Boutique"
                  className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#E8DFC8] text-sm text-[#1C1917] focus:outline-none focus:border-[#9E5A63] focus:bg-white transition-colors"
                />
              </div>
            </div>

            {/* WhatsApp Number */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#44403C] mb-1.5">
                WhatsApp Number (with Country Code) <span className="text-[#6B2A35]">*</span>
              </label>
              <div className="relative">
                <input
                  type="tel"
                  required
                  value={whatsappNumber}
                  onChange={(e) => setWhatsappNumber(e.target.value)}
                  placeholder="e.g. +1 (555) 019-2834"
                  className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#E8DFC8] text-sm text-[#1C1917] focus:outline-none focus:border-[#9E5A63] focus:bg-white transition-colors"
                />
              </div>
            </div>

            {/* City / Location */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#44403C] mb-1.5">
                City / Country / Location
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={cityLocation}
                  onChange={(e) => setCityLocation(e.target.value)}
                  placeholder="e.g. Los Angeles, CA / London, UK"
                  className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#E8DFC8] text-sm text-[#1C1917] focus:outline-none focus:border-[#9E5A63] focus:bg-white transition-colors"
                />
              </div>
            </div>

            {/* Business Type */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#44403C] mb-1.5">
                Business Type
              </label>
              <select
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#E8DFC8] text-sm text-[#1C1917] focus:outline-none focus:border-[#9E5A63] focus:bg-white transition-colors"
              >
                <option value="Fashion Boutique">Fashion Boutique</option>
                <option value="Hair & Beauty Salon">Hair & Beauty Salon</option>
                <option value="Online Reseller / Shopify Store">Online Reseller / Shopify Store</option>
                <option value="Instagram / TikTok Seller">Instagram / TikTok Seller</option>
                <option value="Retail Shop">Retail Shop</option>
                <option value="Gift & Lifestyle Store">Gift & Lifestyle Store</option>
                <option value="Wholesale Distributor">Wholesale Distributor</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Approximate Quantity */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#44403C] mb-1.5">
                Estimated Order Quantity & Budget
              </label>
              <select
                value={approxQuantity}
                onChange={(e) => setApproxQuantity(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#E8DFC8] text-sm text-[#1C1917] focus:outline-none focus:border-[#9E5A63] focus:bg-white transition-colors"
              >
                <option value="30 - 50 Pcs (₹1,500 - ₹2,500 Sample Kit)">30 - 50 Pcs (₹1,500 - ₹2,500 Sample Kit)</option>
                <option value="50 - 100 Pcs (₹2,500 - ₹5,000)">50 - 100 Pcs (₹2,500 - ₹5,000)</option>
                <option value="100 - 300 Pcs (₹5,000 - ₹15,000)">100 - 300 Pcs (₹5,000 - ₹15,000)</option>
                <option value="300 - 500 Pcs (₹15,000 - ₹25,000)">300 - 500 Pcs (₹15,000 - ₹25,000)</option>
                <option value="500+ Pcs (₹25,000+ Bulk Commercial)">500+ Pcs (₹25,000+ Bulk Commercial)</option>
              </select>
            </div>
          </div>

          {/* Products Interested In */}
          <div>
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#44403C] mb-1.5">
              Products or SKUs Interested In
            </label>
            <input
              type="text"
              value={productsInterested}
              onChange={(e) => setProductsInterested(e.target.value)}
              placeholder="e.g. EDG-HC-001 Korean Pearl Clip, Silk Bows, Velvet Bands"
              className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#E8DFC8] text-sm text-[#1C1917] focus:outline-none focus:border-[#9E5A63] focus:bg-white transition-colors"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#44403C] mb-1.5">
              Special Requirements / Message
            </label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Share details on preferred color assortments, delivery timeline, or questions about wholesale tiered rates..."
              className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#E8DFC8] text-sm text-[#1C1917] focus:outline-none focus:border-[#9E5A63] focus:bg-white transition-colors resize-none"
            />
          </div>

          {/* Action Row */}
          <div className="pt-2 space-y-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 bg-[#1C1917] hover:bg-[#6B2A35] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-semibold text-center transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 shadow-sm"
            >
              {isSubmitting ? (
                <span>Submitting Your Requirements...</span>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Wholesale Enquiry</span>
                </>
              )}
            </button>

            {/* Prefer WhatsApp Option */}
            <div className="pt-3 border-t border-[#F3ECE2] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <div className="text-xs text-[#78716C]">
                <span className="font-semibold text-[#44403C]">Prefer WhatsApp?</span> Connect directly with our wholesale representative.
              </div>
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#1EBE5B] text-white text-xs uppercase tracking-wider font-semibold transition-colors shrink-0"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
