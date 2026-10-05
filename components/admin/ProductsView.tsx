'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Package,
  Search,
  Filter,
  Plus,
  Edit3,
  Trash2,
  Eye,
  Check,
  X,
  Sparkles,
  Tag,
  Boxes,
  Layers,
  ArrowUpDown,
  Upload,
} from 'lucide-react';
import { Product, CATEGORIES } from '@/data/products';
import ImageUploadField from '@/components/admin/ImageUploadField';

interface ProductsViewProps {
  products: Product[];
  onAddProduct: (product: Product) => void;
  onUpdateProduct?: (product: Product) => void;
  onDeleteProduct: (productId: string) => void;
  onOpenAddModal: () => void;
}

export default function ProductsView({
  products,
  onAddProduct,
  onUpdateProduct,
  onDeleteProduct,
  onOpenAddModal,
}: ProductsViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [editFormData, setEditFormData] = useState<Partial<Product>>({});
  const [editImage, setEditImage] = useState<string>('');

  const [saveSuccessToast, setSaveSuccessToast] = useState<string | null>(null);

  const filteredProducts = products.filter((p) => {
    const matchesCategory =
      selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.categoryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.materials.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleStartEdit = (product: Product) => {
    setEditingProduct(product);
    setEditFormData({
      name: product.name,
      code: product.code,
      category: product.category,
      categoryName: product.categoryName,
      wholesalePrice: product.wholesalePrice,
      wholesalePriceRange: product.wholesalePriceRange,
      moq: product.moq,
      materials: product.materials,
      shortDescription: product.shortDescription,
      description: product.description,
      packaging: product.packaging,
      isNewArrival: product.isNewArrival ?? false,
      isFeatured: product.isFeatured ?? false,
      isBestSeller: product.isBestSeller ?? false,
    });
    setEditImage(product.images[0] || '/images/hero-claw-clip.jpg');
    if (selectedProduct) setSelectedProduct(null);
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;

    const matchedCat = CATEGORIES.find((c) => c.id === editFormData.category);
    const categoryName = matchedCat ? matchedCat.name : editFormData.categoryName || 'Hair Accessories';

    const newName = (editFormData.name || editingProduct.name).trim();

    const updatedProduct: Product = {
      ...editingProduct,
      name: newName,
      slug: editingProduct.slug, // Maintain slug consistency for product detail URLs
      code: (editFormData.code || editingProduct.code).toUpperCase().trim(),
      category: (editFormData.category || editingProduct.category) as Product['category'],
      categoryName: categoryName,
      wholesalePrice: (editFormData.wholesalePrice || editingProduct.wholesalePrice).trim(),
      wholesalePriceRange: (editFormData.wholesalePriceRange || editingProduct.wholesalePriceRange || `${editFormData.wholesalePrice || editingProduct.wholesalePrice} (volume discount)`).trim(),
      moq: (editFormData.moq || editingProduct.moq).trim(),
      materials: (editFormData.materials || editingProduct.materials).trim(),
      shortDescription: (editFormData.shortDescription || editingProduct.shortDescription).trim(),
      description: (editFormData.description || editFormData.shortDescription || editingProduct.description).trim(),
      packaging: (editFormData.packaging || editingProduct.packaging || '').trim(),
      images: [editImage || editingProduct.images[0] || '/images/hero-claw-clip.jpg', ...(editingProduct.images?.slice(1) || [])],
      isNewArrival: editFormData.isNewArrival ?? editingProduct.isNewArrival,
      isFeatured: editFormData.isFeatured ?? editingProduct.isFeatured,
      isBestSeller: editFormData.isBestSeller ?? editingProduct.isBestSeller,
    };

    if (onUpdateProduct) {
      onUpdateProduct(updatedProduct);
    }
    setEditingProduct(null);

    setSaveSuccessToast(`"${updatedProduct.name}" updated successfully! Client-facing pages updated.`);
    setTimeout(() => {
      setSaveSuccessToast(null);
    }, 4000);
  };

  return (
    <div className="space-y-6 animate-fade-in relative">
      {/* Toast Notification */}
      {saveSuccessToast && (
        <div className="p-4 bg-[#F0FDF4] border border-[#86EFAC] rounded-xl flex items-center justify-between text-[#15803D] text-xs font-semibold shadow-md animate-fade-in">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#16A34A] shrink-0" />
            <span>{saveSuccessToast}</span>
          </div>
          <button
            onClick={() => setSaveSuccessToast(null)}
            className="text-[#16A34A] hover:text-[#15803D] cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Top Header & Action */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl p-4 sm:p-5 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-widest bg-[#F3ECE2] text-[#6B2A35] rounded border border-[#E8DFC8]">
              Catalogue Management
            </span>
            <span className="text-xs text-[#78716C]">{filteredProducts.length} Items Listed</span>
          </div>
          <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1C1917] mt-1">
            Wholesale Products
          </h2>
          <p className="text-xs sm:text-sm text-[#78716C]">
            Manage SKU codes, product photos, minimum order quantities (MOQ), and pricing.
          </p>
        </div>

        <button
          onClick={onOpenAddModal}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#1C1917] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#6B2A35] transition-colors shadow-xs cursor-pointer w-full sm:w-auto"
        >
          <Plus className="w-4 h-4 text-[#C5A880]" />
          <span>Add New Product</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl p-4 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-[#78716C] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by product name, SKU code (e.g. EDG-HC-001), material..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917] placeholder-[#78716C] focus:outline-none focus:border-[#6B2A35]"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#1C1917] text-[#FAF7F2]'
                : 'bg-[#FAF7F2] text-[#44403C] hover:bg-[#F3ECE2] border border-[#E8DFC8]'
            }`}
          >
            All Categories ({products.length})
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#1C1917] text-[#FAF7F2]'
                  : 'bg-[#FAF7F2] text-[#44403C] hover:bg-[#F3ECE2] border border-[#E8DFC8]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#FAF7F2] border-b border-[#E8DFC8] text-[11px] uppercase tracking-wider font-semibold text-[#78716C]">
                <th className="py-3.5 px-4">Product Info</th>
                <th className="py-3.5 px-4">Category</th>
                <th className="py-3.5 px-4">Wholesale Price</th>
                <th className="py-3.5 px-4">MOQ</th>
                <th className="py-3.5 px-4">Colors</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8DFC8]/60 text-xs">
              {filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-[#78716C]">
                    <Package className="w-8 h-8 mx-auto text-[#C5A880] mb-2 opacity-60" />
                    <p className="font-semibold text-[#1C1917]">No products matched your search</p>
                    <p className="text-xs">Try clearing your filters or adding a new product SKU.</p>
                  </td>
                </tr>
              ) : (
                filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-[#FAF7F2]/50 transition-colors">
                    {/* Product Name & Image */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-md bg-[#FAF7F2] border border-[#E8DFC8] overflow-hidden shrink-0">
                          <Image
                            src={product.images[0] || '/images/hero-claw-clip.jpg'}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-bold text-[#1C1917]">{product.name}</div>
                          <div className="font-mono text-[10px] text-[#78716C] mt-0.5">
                            SKU: {product.code}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="py-3.5 px-4">
                      <span className="inline-block px-2 py-0.5 text-[10px] uppercase font-semibold tracking-wider bg-[#FAF7F2] text-[#6B2A35] border border-[#E8DFC8] rounded">
                        {product.categoryName}
                      </span>
                    </td>

                    {/* Wholesale Price */}
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-[#1C1917]">{product.wholesalePrice}</div>
                      <div className="text-[10px] text-[#78716C]">{product.wholesalePriceRange}</div>
                    </td>

                    {/* MOQ */}
                    <td className="py-3.5 px-4 font-medium text-[#292524]">
                      {product.moq}
                    </td>

                    {/* Colors */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-1">
                        {product.colors?.slice(0, 3).map((col, idx) => (
                          <span
                            key={idx}
                            title={col.name}
                            className="w-3.5 h-3.5 rounded-full border border-[#D6D3D1] shrink-0"
                            style={{ backgroundColor: col.hex }}
                          />
                        ))}
                        {(product.colors?.length || 0) > 3 && (
                          <span className="text-[10px] text-[#78716C] ml-0.5">
                            +{(product.colors?.length || 0) - 3}
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Status */}
                    <td className="py-3.5 px-4">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        Active
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-4 text-right">
                      <div className="inline-flex items-center gap-1">
                        <button
                          onClick={() => setSelectedProduct(product)}
                          title="View Details"
                          className="p-1.5 text-[#78716C] hover:text-[#1C1917] hover:bg-[#FAF7F2] rounded border border-transparent hover:border-[#E8DFC8] transition-colors cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleStartEdit(product)}
                          title="Edit Product & Image"
                          className="p-1.5 text-[#78716C] hover:text-[#1C1917] hover:bg-[#FAF7F2] rounded border border-transparent hover:border-[#E8DFC8] transition-colors cursor-pointer"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => onDeleteProduct(product.id)}
                          title="Delete Product"
                          className="p-1.5 text-[#9E5A63] hover:text-[#6B2A35] hover:bg-[#F7ECE9] rounded border border-transparent hover:border-[#E8DFC8] transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-4 sm:p-6 relative animate-fade-in">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 p-1.5 text-[#78716C] hover:text-[#1C1917] hover:bg-[#FAF7F2] rounded-md transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 text-[10px] font-mono uppercase bg-[#F3ECE2] text-[#6B2A35] rounded font-bold">
                {selectedProduct.code}
              </span>
              <span className="text-xs text-[#78716C]">{selectedProduct.categoryName}</span>
            </div>

            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1C1917]">
              {selectedProduct.name}
            </h3>

            <div className="relative w-full h-56 bg-[#FAF7F2] rounded-lg overflow-hidden my-4 border border-[#E8DFC8]">
              <Image
                src={selectedProduct.images[0] || '/images/hero-claw-clip.jpg'}
                alt={selectedProduct.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <h4 className="font-semibold text-[#1C1917] uppercase tracking-wider mb-1">
                  Description
                </h4>
                <p className="text-[#78716C] leading-relaxed">{selectedProduct.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 p-3 bg-[#FAF7F2] rounded-lg border border-[#E8DFC8]">
                <div>
                  <span className="text-[#78716C] block">Wholesale Rate</span>
                  <span className="font-bold text-[#1C1917] text-sm">{selectedProduct.wholesalePrice}</span>
                </div>
                <div>
                  <span className="text-[#78716C] block">Minimum Order (MOQ)</span>
                  <span className="font-bold text-[#1C1917] text-sm">{selectedProduct.moq}</span>
                </div>
                <div>
                  <span className="text-[#78716C] block">Materials</span>
                  <span className="font-medium text-[#1C1917]">{selectedProduct.materials}</span>
                </div>
                <div>
                  <span className="text-[#78716C] block">Packaging</span>
                  <span className="font-medium text-[#1C1917]">{selectedProduct.packaging || 'Standard Box'}</span>
                </div>
              </div>

              {selectedProduct.features && selectedProduct.features.length > 0 && (
                <div>
                  <h4 className="font-semibold text-[#1C1917] uppercase tracking-wider mb-1.5">
                    Product Features
                  </h4>
                  <ul className="list-disc pl-4 space-y-1 text-[#78716C]">
                    {selectedProduct.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProduct.colors && selectedProduct.colors.length > 0 && (
                <div>
                  <h4 className="font-semibold text-[#1C1917] uppercase tracking-wider mb-1.5">
                    Available Shades / Variants
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.colors.map((c, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-1.5 px-2 py-1 bg-[#FAF7F2] border border-[#E8DFC8] rounded"
                      >
                        <span
                          className="w-3 h-3 rounded-full border border-gray-300"
                          style={{ backgroundColor: c.hex }}
                        />
                        <span className="text-[#1C1917] font-medium">{c.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-[#E8DFC8] flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2.5">
              <button
                onClick={() => setSelectedProduct(null)}
                className="px-4 py-2 bg-[#FAF7F2] hover:bg-[#F3ECE2] text-[#44403C] border border-[#E8DFC8] text-xs font-semibold uppercase tracking-wider rounded transition-colors cursor-pointer text-center"
              >
                Close View
              </button>
              <button
                onClick={() => handleStartEdit(selectedProduct)}
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2 bg-[#1C1917] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider rounded hover:bg-[#6B2A35] transition-colors cursor-pointer text-center"
              >
                <Edit3 className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Edit / Change Image</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Product & Image Modal */}
      {editingProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/40 backdrop-blur-xs animate-fade-in">
          <div className="bg-[#FFFFFF] border border-[#E8DFC8] rounded-xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-4 sm:p-6 relative">
            <button
              onClick={() => setEditingProduct(null)}
              className="absolute top-4 right-4 p-1.5 text-[#78716C] hover:text-[#1C1917] hover:bg-[#FAF7F2] rounded-md transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-widest bg-[#F3ECE2] text-[#6B2A35] rounded border border-[#E8DFC8]">
                Edit SKU
              </span>
              <span className="text-xs text-[#78716C] font-mono">{editingProduct.code}</span>
            </div>
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1C1917]">
              Edit Product Listing
            </h3>
            <p className="text-xs text-[#78716C] mb-4">
              Update image, details, minimum order quantities, and wholesale pricing.
            </p>

            <form onSubmit={handleSaveEdit} className="space-y-4 text-xs">
              {/* Product Image Upload Field */}
              <div>
                <ImageUploadField
                  label="Product Showcase Image *"
                  value={editImage}
                  onChange={(newImg) => setEditImage(newImg)}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-[#1C1917] mb-1">Product Name *</label>
                  <input
                    type="text"
                    required
                    value={editFormData.name || ''}
                    onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917] focus:outline-none focus:border-[#6B2A35]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#1C1917] mb-1">SKU Code *</label>
                  <input
                    type="text"
                    required
                    value={editFormData.code || ''}
                    onChange={(e) => setEditFormData({ ...editFormData, code: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917] focus:outline-none focus:border-[#6B2A35]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block font-semibold text-[#1C1917] mb-1">Category</label>
                  <select
                    value={editFormData.category || 'hair-clips'}
                    onChange={(e) => setEditFormData({ ...editFormData, category: e.target.value as Product['category'] })}
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
                  <label className="block font-semibold text-[#1C1917] mb-1">Wholesale Price *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. ₹35 / pc"
                    value={editFormData.wholesalePrice || ''}
                    onChange={(e) => setEditFormData({ ...editFormData, wholesalePrice: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917] focus:outline-none focus:border-[#6B2A35]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#1C1917] mb-1">Price Tier Range</label>
                  <input
                    type="text"
                    placeholder="e.g. ₹30 - ₹45 / pc"
                    value={editFormData.wholesalePriceRange || ''}
                    onChange={(e) => setEditFormData({ ...editFormData, wholesalePriceRange: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917] focus:outline-none focus:border-[#6B2A35]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-[#1C1917] mb-1">MOQ (Minimum Order Qty)</label>
                  <input
                    type="text"
                    placeholder="e.g. 50 Pcs"
                    value={editFormData.moq || ''}
                    onChange={(e) => setEditFormData({ ...editFormData, moq: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917] focus:outline-none focus:border-[#6B2A35]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#1C1917] mb-1">Materials / Craft</label>
                  <input
                    type="text"
                    placeholder="e.g. Cellulose Acetate, Alloy Spring"
                    value={editFormData.materials || ''}
                    onChange={(e) => setEditFormData({ ...editFormData, materials: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917] focus:outline-none focus:border-[#6B2A35]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[#1C1917] mb-1">Short Description (Cards view)</label>
                <textarea
                  rows={2}
                  value={editFormData.shortDescription || ''}
                  onChange={(e) => setEditFormData({ ...editFormData, shortDescription: e.target.value })}
                  className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917] focus:outline-none focus:border-[#6B2A35]"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#1C1917] mb-1">Full Description (Product details page)</label>
                <textarea
                  rows={3}
                  value={editFormData.description || ''}
                  onChange={(e) => setEditFormData({ ...editFormData, description: e.target.value })}
                  className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#E8DFC8] rounded-md text-[#1C1917] focus:outline-none focus:border-[#6B2A35]"
                />
              </div>

              <div>
                <label className="block font-semibold text-[#1C1917] mb-1">Packaging Specification</label>
                <input
                  type="text"
                  value={editFormData.packaging || ''}
                  onChange={(e) => setEditFormData({ ...editFormData, packaging: e.target.value })}
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
                      checked={Boolean(editFormData.isNewArrival)}
                      onChange={(e) => setEditFormData({ ...editFormData, isNewArrival: e.target.checked })}
                      className="rounded border-[#E8DFC8] text-[#6B2A35] focus:ring-[#6B2A35]"
                    />
                    <span className="text-xs text-[#1C1917]">New Arrival</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={Boolean(editFormData.isFeatured)}
                      onChange={(e) => setEditFormData({ ...editFormData, isFeatured: e.target.checked })}
                      className="rounded border-[#E8DFC8] text-[#6B2A35] focus:ring-[#6B2A35]"
                    />
                    <span className="text-xs text-[#1C1917]">Featured on Home</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={Boolean(editFormData.isBestSeller)}
                      onChange={(e) => setEditFormData({ ...editFormData, isBestSeller: e.target.checked })}
                      className="rounded border-[#E8DFC8] text-[#6B2A35] focus:ring-[#6B2A35]"
                    />
                    <span className="text-xs text-[#1C1917]">Popular / Best Seller</span>
                  </label>
                </div>
              </div>

              <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2.5 sm:gap-3 pt-3 border-t border-[#E8DFC8]">
                <button
                  type="button"
                  onClick={() => setEditingProduct(null)}
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#FAF7F2] hover:bg-[#F3ECE2] text-[#44403C] border border-[#E8DFC8] rounded-md text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer text-center"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#1C1917] hover:bg-[#6B2A35] text-[#FAF7F2] rounded-md text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs cursor-pointer text-center"
                >
                  <Check className="w-4 h-4 text-[#C5A880]" />
                  <span>Save Changes</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
