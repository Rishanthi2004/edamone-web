'use client';

import { useState } from 'react';
import { X, Plus, Sparkles, Image as ImageIcon } from 'lucide-react';
import { Product, CATEGORIES } from '@/data/products';
import ImageUploadField from '@/components/admin/ImageUploadField';

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProduct: (product: Product) => void;
}

export default function AddProductModal({
  isOpen,
  onClose,
  onAddProduct,
}: AddProductModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    code: '',
    category: 'hair-clips' as Product['category'],
    materials: '',
    moq: '40 Pcs',
    wholesalePrice: '₹35 / pc',
    wholesalePriceRange: '₹30 - ₹45 / pc',
    shortDescription: '',
    description: '',
    packaging: '10 pcs bulk master pack with branded cards',
    isNewArrival: true,
    isFeatured: false,
    isBestSeller: false,
  });

  const [productImage, setProductImage] = useState<string>('/images/category-hair-clips.jpg');

  if (!isOpen) return null;

  const handleCategoryChange = (newCat: Product['category']) => {
    let defaultImg = '/images/category-hair-clips.jpg';
    if (newCat === 'bows') defaultImg = '/images/category-bows.jpg';
    if (newCat === 'scrunchies') defaultImg = '/images/category-scrunchies.jpg';
    if (newCat === 'hair-bands') defaultImg = '/images/category-hair-bands.jpg';
    if (newCat === 'korean-hair-accessories') defaultImg = '/images/product-matte-claw.jpg';

    setFormData({ ...formData, category: newCat });
    if (!productImage || productImage.startsWith('/images/category-') || productImage.startsWith('/images/product-')) {
      setProductImage(defaultImg);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.code) return;

    const matchedCat = CATEGORIES.find((c) => c.id === formData.category);
    const categoryName = matchedCat ? matchedCat.name : 'Hair Clips';

    const finalImg = productImage || '/images/category-hair-clips.jpg';

    const newProduct: Product = {
      id: `prod-${Date.now()}`,
      slug: formData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      code: formData.code.toUpperCase(),
      name: formData.name,
      category: formData.category,
      categoryName: categoryName,
      description: formData.description || formData.shortDescription || 'Korean-inspired luxury hair accessory with refined finish.',
      shortDescription: formData.shortDescription || 'Premium Korean wholesale hair accessory.',
      features: [
        'High-grade material with anti-snag finish',
        'Ergonomic all-day comfort hold',
        'Engineered for wholesale retail display',
      ],
      materials: formData.materials || 'Cellulose Acetate, Alloy Spring',
      moq: formData.moq || '50 Pcs',
      wholesalePrice: formData.wholesalePrice || '₹35 / pc',
      wholesalePriceRange: formData.wholesalePriceRange || `${formData.wholesalePrice || '₹35 / pc'} (volume discount)`,
      colors: [
        { name: 'Warm Ivory', hex: '#FDFBF7' },
        { name: 'Dusty Rose', hex: '#C9939B' },
        { name: 'Noir Onyx', hex: '#1C1917' },
      ],
      images: [finalImg],
      isNewArrival: formData.isNewArrival ?? true,
      isFeatured: Boolean(formData.isFeatured),
      isBestSeller: Boolean(formData.isBestSeller),
      packaging: formData.packaging,
    };

    onAddProduct(newProduct);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/40 backdrop-blur-xs animate-fade-in">
      <div className="bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-4 sm:p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-[#78716C] hover:text-[#1C1917] hover:bg-[#FAF7F2] rounded-md transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-1">
          <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-widest bg-[#F3ECE2] text-[#6B2A35] rounded border border-[#E8DFC8]">
            Catalogue Entry
          </span>
        </div>
        <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1C1917]">
          Add New Product SKU
        </h3>
        <p className="text-xs text-[#78716C] mb-4">
          Create a new Korean hair accessory listing for wholesale buyers with image upload and pricing.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          {/* Image Upload Option */}
          <div>
            <ImageUploadField
              label="Product Showcase Image *"
              value={productImage}
              onChange={(newImg) => setProductImage(newImg)}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-[#1C1917] mb-1">Product Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Velvet Knotted Hair Band"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917] focus:outline-none focus:border-[#6B2A35]"
              />
            </div>

            <div>
              <label className="block font-semibold text-[#1C1917] mb-1">SKU Code *</label>
              <input
                type="text"
                required
                placeholder="e.g. EDG-HB-011"
                value={formData.code}
                onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917] focus:outline-none focus:border-[#6B2A35]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block font-semibold text-[#1C1917] mb-1">Category</label>
              <select
                value={formData.category}
                onChange={(e) => handleCategoryChange(e.target.value as Product['category'])}
                className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917] focus:outline-none focus:border-[#6B2A35]"
              >
                <option value="hair-clips">Hair Clips & Claws</option>
                <option value="bows">Silk & Chiffon Bows</option>
                <option value="scrunchies">Premium Scrunchies</option>
                <option value="hair-bands">Hair Bands</option>
                <option value="korean-hair-accessories">Korean Signature Edit</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-[#1C1917] mb-1">Wholesale Price</label>
              <input
                type="text"
                placeholder="e.g. ₹45 / pc"
                value={formData.wholesalePrice}
                onChange={(e) => setFormData({ ...formData, wholesalePrice: e.target.value })}
                className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917] focus:outline-none focus:border-[#6B2A35]"
              />
            </div>

            <div>
              <label className="block font-semibold text-[#1C1917] mb-1">MOQ</label>
              <input
                type="text"
                placeholder="e.g. 50 Pcs"
                value={formData.moq}
                onChange={(e) => setFormData({ ...formData, moq: e.target.value })}
                className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917] focus:outline-none focus:border-[#6B2A35]"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-[#1C1917] mb-1">Materials / Craft</label>
            <input
              type="text"
              placeholder="e.g. Mulberry Silk, Korean Acetate, Zinc Alloy"
              value={formData.materials}
              onChange={(e) => setFormData({ ...formData, materials: e.target.value })}
              className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917] focus:outline-none focus:border-[#6B2A35]"
            />
          </div>

          <div>
            <label className="block font-semibold text-[#1C1917] mb-1">Short Description</label>
            <textarea
              rows={2}
              placeholder="Brief summary for catalog previews..."
              value={formData.shortDescription}
              onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
              className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917] focus:outline-none focus:border-[#6B2A35]"
            />
          </div>

          <div>
            <label className="block font-semibold text-[#1C1917] mb-1">Full Description</label>
            <textarea
              rows={3}
              placeholder="Detailed wholesale product description for product page..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917] focus:outline-none focus:border-[#6B2A35]"
            />
          </div>

          <div>
            <label className="block font-semibold text-[#1C1917] mb-1">Packaging Specification</label>
            <input
              type="text"
              placeholder="e.g. Individual backing card, 10 pcs inner polybag"
              value={formData.packaging}
              onChange={(e) => setFormData({ ...formData, packaging: e.target.value })}
              className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917] focus:outline-none focus:border-[#6B2A35]"
            />
          </div>

          {/* Status & Availability Flags */}
          <div className="p-3 bg-[#FAF7F2] border border-[#E8DFC8] rounded-lg space-y-2">
            <span className="font-bold text-[#1C1917] block text-[11px] uppercase tracking-wider">
              Product Badges & Visibility
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={Boolean(formData.isNewArrival)}
                  onChange={(e) => setFormData({ ...formData, isNewArrival: e.target.checked })}
                  className="rounded border-[#E8DFC8] text-[#6B2A35] focus:ring-[#6B2A35]"
                />
                <span className="text-xs text-[#1C1917]">New Arrival</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={Boolean(formData.isFeatured)}
                  onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                  className="rounded border-[#E8DFC8] text-[#6B2A35] focus:ring-[#6B2A35]"
                />
                <span className="text-xs text-[#1C1917]">Featured on Home</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={Boolean(formData.isBestSeller)}
                  onChange={(e) => setFormData({ ...formData, isBestSeller: e.target.checked })}
                  className="rounded border-[#E8DFC8] text-[#6B2A35] focus:ring-[#6B2A35]"
                />
                <span className="text-xs text-[#1C1917]">Popular / Best Seller</span>
              </label>
            </div>
          </div>

          <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2.5 sm:gap-3 pt-3 border-t border-[#E8DFC8]">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 bg-[#FAF7F2] hover:bg-[#F3ECE2] text-[#44403C] border border-[#E8DFC8] rounded-md text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer text-center"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#1C1917] hover:bg-[#6B2A35] text-[#FAF7F2] rounded-md text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs cursor-pointer text-center"
            >
              <Plus className="w-4 h-4 text-[#C5A880]" />
              <span>Save & Publish Product</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
