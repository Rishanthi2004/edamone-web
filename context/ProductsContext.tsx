'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from 'react';
import { PRODUCTS, Product } from '@/data/products';
import {
  PRODUCTS_STORAGE_KEY,
  PRODUCTS_UPDATED_EVENT,
  getStoredProducts,
  saveStoredProducts,
  addStoredProduct,
  updateStoredProduct,
  deleteStoredProduct,
  resetStoredProducts,
} from '@/lib/productsStore';

interface ProductsContextValue {
  products: Product[];
  isLoaded: boolean;
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (productId: string) => void;
  resetProducts: () => void;
  getProductBySlug: (slug: string) => Product | undefined;
  getProductById: (id: string) => Product | undefined;
}

const ProductsContext = createContext<ProductsContextValue>({
  products: PRODUCTS,
  isLoaded: false,
  addProduct: () => {},
  updateProduct: () => {},
  deleteProduct: () => {},
  resetProducts: () => {},
  getProductBySlug: () => undefined,
  getProductById: () => undefined,
});

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize from storage on client mount
  useEffect(() => {
    const stored = getStoredProducts();
    setProducts(stored);
    setIsLoaded(true);

    // Handler for local custom event (same tab)
    const handleProductsUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<Product[]>;
      if (customEvent.detail) {
        setProducts(customEvent.detail);
      } else {
        setProducts(getStoredProducts());
      }
    };

    // Handler for cross-tab storage changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === PRODUCTS_STORAGE_KEY) {
        setProducts(getStoredProducts());
      }
    };

    window.addEventListener(PRODUCTS_UPDATED_EVENT, handleProductsUpdate);
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener(PRODUCTS_UPDATED_EVENT, handleProductsUpdate);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const addProduct = useCallback((product: Product) => {
    const updated = addStoredProduct(product);
    setProducts(updated);
  }, []);

  const updateProduct = useCallback((product: Product) => {
    const updated = updateStoredProduct(product);
    setProducts(updated);
  }, []);

  const deleteProduct = useCallback((productId: string) => {
    const updated = deleteStoredProduct(productId);
    setProducts(updated);
  }, []);

  const resetProducts = useCallback(() => {
    const defaultData = resetStoredProducts();
    setProducts(defaultData);
  }, []);

  const getProductBySlug = useCallback(
    (slug: string) => {
      return products.find((p) => p.slug === slug);
    },
    [products]
  );

  const getProductById = useCallback(
    (id: string) => {
      return products.find((p) => p.id === id);
    },
    [products]
  );

  return (
    <ProductsContext.Provider
      value={{
        products,
        isLoaded,
        addProduct,
        updateProduct,
        deleteProduct,
        resetProducts,
        getProductBySlug,
        getProductById,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
}
