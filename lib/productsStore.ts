import { PRODUCTS, Product, CATEGORIES } from '@/data/products';

export const PRODUCTS_STORAGE_KEY = 'edamone_products_v1';
export const PRODUCTS_UPDATED_EVENT = 'edamone_products_updated';

/**
 * Validate and sanitize product object to ensure all required fields are present
 */
function sanitizeProduct(p: Partial<Product>, index: number): Product {
  const defaultCategory = 'hair-clips';
  const matchedCat = CATEGORIES.find((c) => c.id === p.category) || CATEGORIES[0];

  return {
    id: p.id || `prod-${Date.now()}-${index}`,
    slug: p.slug || (p.name ? p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') : `product-${index}`),
    code: p.code ? p.code.toUpperCase() : `EDG-SKU-${index + 1}`,
    name: p.name || 'Korean Hair Accessory',
    category: (p.category || defaultCategory) as Product['category'],
    categoryName: p.categoryName || matchedCat.name,
    description: p.description || p.shortDescription || 'Korean-inspired hair accessory curated for modern boutiques and retailers.',
    shortDescription: p.shortDescription || 'Curated Korean wholesale hair accessory.',
    features: Array.isArray(p.features) && p.features.length > 0 ? p.features : [
      'High-grade material with anti-snag finish',
      'Ergonomic all-day comfort hold',
      'Engineered for wholesale retail display',
    ],
    materials: p.materials || 'Cellulose Acetate, Alloy Spring',
    moq: p.moq || '40 Pcs',
    wholesalePrice: p.wholesalePrice || '₹35 / pc',
    wholesalePriceRange: p.wholesalePriceRange || '₹30 - ₹45 / pc',
    colors: Array.isArray(p.colors) && p.colors.length > 0 ? p.colors : [
      { name: 'Warm Ivory', hex: '#FDFBF7' },
      { name: 'Dusty Rose', hex: '#C9939B' },
      { name: 'Noir Onyx', hex: '#1C1917' },
    ],
    images: Array.isArray(p.images) && p.images.length > 0 ? p.images : ['/images/category-hair-clips.jpg'],
    isNewArrival: p.isNewArrival ?? false,
    isFeatured: p.isFeatured ?? false,
    isBestSeller: p.isBestSeller ?? false,
    dimensions: p.dimensions,
    packaging: p.packaging || '10 pcs bulk master pack with branded cards',
  };
}

/**
 * Load products from localStorage safely with fallback to default catalog
 */
export function getStoredProducts(): Product[] {
  if (typeof window === 'undefined') {
    return PRODUCTS;
  }

  try {
    const raw = window.localStorage.getItem(PRODUCTS_STORAGE_KEY);
    if (!raw) {
      return PRODUCTS;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      return PRODUCTS;
    }
    return parsed.map((item, idx) => sanitizeProduct(item, idx));
  } catch (error) {
    console.error('Failed to load products from localStorage:', error);
    return PRODUCTS;
  }
}

/**
 * Save products to localStorage and dispatch update events for instant reactivity
 */
export function saveStoredProducts(newProducts: Product[]): Product[] {
  if (typeof window === 'undefined') {
    return newProducts;
  }

  try {
    const sanitized = newProducts.map((item, idx) => sanitizeProduct(item, idx));
    window.localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(sanitized));

    // Dispatch custom event for same-tab instant listeners
    window.dispatchEvent(
      new CustomEvent(PRODUCTS_UPDATED_EVENT, { detail: sanitized })
    );

    return sanitized;
  } catch (error) {
    console.error('Failed to save products to localStorage:', error);
    return newProducts;
  }
}

/**
 * Add a new product to the store
 */
export function addStoredProduct(newProduct: Product): Product[] {
  const current = getStoredProducts();
  const updated = [newProduct, ...current];
  return saveStoredProducts(updated);
}

/**
 * Update an existing product in the store
 */
export function updateStoredProduct(updatedProduct: Product): Product[] {
  const current = getStoredProducts();
  const updated = current.map((p) =>
    p.id === updatedProduct.id || p.code === updatedProduct.code ? updatedProduct : p
  );
  return saveStoredProducts(updated);
}

/**
 * Delete a product from the store by ID
 */
export function deleteStoredProduct(productId: string): Product[] {
  const current = getStoredProducts();
  const updated = current.filter((p) => p.id !== productId);
  return saveStoredProducts(updated);
}

/**
 * Reset products back to default initial catalogue
 */
export function resetStoredProducts(): Product[] {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem(PRODUCTS_STORAGE_KEY);
    window.dispatchEvent(
      new CustomEvent(PRODUCTS_UPDATED_EVENT, { detail: PRODUCTS })
    );
  }
  return PRODUCTS;
}
