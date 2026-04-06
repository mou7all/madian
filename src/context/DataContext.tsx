"use client";

import { createContext, useContext, useState, useEffect, type ReactNode, useCallback } from "react";
import type { Product, FooterData } from "@/data/products";
import { products as initialProducts, defaultFooter } from "@/data/products";

type DataContextType = {
  products: Product[];
  updateProductImages: (productId: string, images: string[]) => void;
  footer: FooterData;
  updateFooter: (footer: FooterData) => void;
};

const DataContext = createContext<DataContextType>({
  products: initialProducts,
  updateProductImages: () => {},
  footer: defaultFooter,
  updateFooter: () => {},
});

export function DataProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [footer, setFooter] = useState<FooterData>(defaultFooter);

  useEffect(() => {
    const savedProducts = localStorage.getItem("madian-products");
    if (savedProducts) {
      try {
        const parsed = JSON.parse(savedProducts);
        setProducts((prev) =>
          prev.map((p) => {
            const saved = parsed.find((sp: Product) => sp.id === p.id);
            return saved ? { ...p, images: saved.images } : p;
          })
        );
      } catch {}
    }
    const savedFooter = localStorage.getItem("madian-footer");
    if (savedFooter) {
      try {
        setFooter(JSON.parse(savedFooter));
      } catch {}
    }
  }, []);

  const updateProductImages = useCallback((productId: string, images: string[]) => {
    setProducts((prev) => {
      const updated = prev.map((p) => (p.id === productId ? { ...p, images } : p));
      localStorage.setItem(
        "madian-products",
        JSON.stringify(updated.map((p) => ({ id: p.id, images: p.images })))
      );
      return updated;
    });
  }, []);

  const updateFooter = useCallback((newFooter: FooterData) => {
    setFooter(newFooter);
    localStorage.setItem("madian-footer", JSON.stringify(newFooter));
  }, []);

  return (
    <DataContext.Provider value={{ products, updateProductImages, footer, updateFooter }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
