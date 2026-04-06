"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "@/context/LocaleContext";
import { t } from "@/data/translations";
import { useData } from "@/context/DataContext";
import Image from "next/image";
import Link from "next/link";
import type { Product, FooterData } from "@/data/products";

export default function DashboardPage() {
  const { locale, setLocale } = useLocale();
  const router = useRouter();
  const { products, updateProductImages, footer, updateFooter } = useData();
  const [activeTab, setActiveTab] = useState<"images" | "footer">("images");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [saved, setSaved] = useState(false);

  const [footerForm, setFooterForm] = useState<FooterData>(footer);

  useEffect(() => {
    const auth = sessionStorage.getItem("madian-admin");
    if (auth !== "true") {
      router.push("/admin");
    }
  }, [router]);

  const handleLogout = () => {
    sessionStorage.removeItem("madian-admin");
    router.push("/");
  };

  const handleImageUpload = (productId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const product = products.find((p) => p.id === productId);
    if (!product) return;

    const newImages = [...product.images];

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (ev) => {
        if (ev.target?.result) {
          newImages.push(ev.target.result as string);
          updateProductImages(productId, newImages);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleRemoveImage = (productId: string, imageIndex: number) => {
    const product = products.find((p) => p.id === productId);
    if (!product) return;
    const newImages = product.images.filter((_, i) => i !== imageIndex);
    updateProductImages(productId, newImages);
  };

  const handleFooterSave = () => {
    updateFooter(footerForm);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleLogoutClick = () => {
    handleLogout();
  };

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Admin Header */}
      <header className="bg-navy text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-white/70 hover:text-rose-gold transition-colors text-sm">
                {t(locale, "home")}
              </Link>
              <span className="text-white/30">|</span>
              <h1 className="text-lg font-bold text-rose-gold">{t(locale, "dashboard")}</h1>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setLocale(locale === "ar" ? "en" : "ar")}
                className="px-3 py-1.5 rounded-full border border-rose-gold/40 text-rose-gold hover:bg-rose-gold/10 transition-all text-sm"
              >
                {t(locale, "language")}
              </button>
              <button
                onClick={handleLogoutClick}
                className="px-4 py-1.5 rounded-full bg-red-500/20 text-red-300 hover:bg-red-500/30 transition-all text-sm font-medium"
              >
                {t(locale, "logout")}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          <button
            onClick={() => setActiveTab("images")}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeTab === "images"
                ? "rose-gold-gradient text-navy shadow-lg"
                : "bg-white text-navy/60 hover:text-navy"
            }`}
          >
            {t(locale, "manageImages")}
          </button>
          <button
            onClick={() => setActiveTab("footer")}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              activeTab === "footer"
                ? "rose-gold-gradient text-navy shadow-lg"
                : "bg-white text-navy/60 hover:text-navy"
            }`}
          >
            {t(locale, "manageFooter")}
          </button>
        </div>

        {/* Images Tab */}
        {activeTab === "images" && (
          <div>
            {!selectedProduct ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {products.map((product) => {
                  const name = locale === "ar" ? product.nameAr : product.nameEn;
                  return (
                    <button
                      key={product.id}
                      onClick={() => setSelectedProduct(product)}
                      className="bg-white rounded-xl p-4 text-left card-hover border border-rose-gold/10 flex items-center gap-4"
                    >
                      <div className="w-14 h-14 rounded-lg overflow-hidden bg-gradient-to-br from-navy/5 to-rose-gold/10 flex-shrink-0 flex items-center justify-center">
                        {product.images.length > 0 ? (
                          <Image src={product.images[0]} alt={name} width={56} height={56} className="object-cover w-full h-full" />
                        ) : (
                          <svg className="w-6 h-6 text-rose-gold/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <h3 className="font-bold text-navy text-sm">{name}</h3>
                        <p className="text-xs text-navy/40 mt-1">
                          {product.images.length} {locale === "ar" ? "صور" : "images"}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            ) : (
              <div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="flex items-center gap-2 text-navy/60 hover:text-navy mb-6 transition-colors"
                >
                  <svg className="w-5 h-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span className="text-sm font-medium">{t(locale, "manageImages")}</span>
                </button>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-rose-gold/10">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-navy">
                      {locale === "ar" ? selectedProduct.nameAr : selectedProduct.nameEn}
                    </h2>
                    <label className="rose-gold-gradient text-navy px-4 py-2 rounded-full text-sm font-bold cursor-pointer hover:shadow-lg hover:shadow-rose-gold/25 transition-all">
                      {t(locale, "uploadImage")}
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={(e) => handleImageUpload(selectedProduct.id, e)}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {selectedProduct.images.length === 0 ? (
                    <div className="text-center py-16">
                      <svg className="w-16 h-16 text-rose-gold/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-navy/40">{t(locale, "noImages")}</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                      {selectedProduct.images.map((img, idx) => (
                        <div key={idx} className="relative group rounded-xl overflow-hidden bg-light-gray">
                          <div className="relative h-40">
                            <Image src={img} alt="" fill className="object-cover" />
                          </div>
                          <button
                            onClick={() => handleRemoveImage(selectedProduct.id, idx)}
                            className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Footer Tab */}
        {activeTab === "footer" && (
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-rose-gold/10 max-w-2xl">
            <h2 className="text-xl font-bold text-navy mb-6">{t(locale, "footerSettings")}</h2>

            {saved && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm animate-fade-in">
                {t(locale, "saved")}
              </div>
            )}

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-navy mb-2">{t(locale, "phone")}</label>
                <input
                  type="text"
                  value={locale === "ar" ? footerForm.phoneAr : footerForm.phoneEn}
                  onChange={(e) =>
                    setFooterForm((prev) => ({
                      ...prev,
                      ...(locale === "ar" ? { phoneAr: e.target.value } : { phoneEn: e.target.value }),
                    }))
                  }
                  className="w-full px-4 py-3 rounded-xl border border-rose-gold/20 focus:outline-none focus:border-rose-gold text-navy"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-2">{t(locale, "email")}</label>
                <input
                  type="email"
                  value={locale === "ar" ? footerForm.emailAr : footerForm.emailEn}
                  onChange={(e) =>
                    setFooterForm((prev) => ({
                      ...prev,
                      ...(locale === "ar" ? { emailAr: e.target.value } : { emailEn: e.target.value }),
                    }))
                  }
                  className="w-full px-4 py-3 rounded-xl border border-rose-gold/20 focus:outline-none focus:border-rose-gold text-navy"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-2">{t(locale, "address")}</label>
                <input
                  type="text"
                  value={locale === "ar" ? footerForm.addressAr : footerForm.addressEn}
                  onChange={(e) =>
                    setFooterForm((prev) => ({
                      ...prev,
                      ...(locale === "ar" ? { addressAr: e.target.value } : { addressEn: e.target.value }),
                    }))
                  }
                  className="w-full px-4 py-3 rounded-xl border border-rose-gold/20 focus:outline-none focus:border-rose-gold text-navy"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-2">
                  {locale === "ar" ? "ساعات العمل" : "Working Hours"}
                </label>
                <input
                  type="text"
                  value={locale === "ar" ? footerForm.workingHoursAr : footerForm.workingHoursEn}
                  onChange={(e) =>
                    setFooterForm((prev) => ({
                      ...prev,
                      ...(locale === "ar" ? { workingHoursAr: e.target.value } : { workingHoursEn: e.target.value }),
                    }))
                  }
                  className="w-full px-4 py-3 rounded-xl border border-rose-gold/20 focus:outline-none focus:border-rose-gold text-navy"
                />
              </div>

              <div className="pt-4 border-t border-rose-gold/10">
                <h3 className="text-sm font-bold text-navy mb-4">
                  {locale === "ar" ? "روابط التواصل الاجتماعي" : "Social Media Links"}
                </h3>
                <div className="space-y-4">
                  {(
                    [
                      { key: "instagram" as const, label: "Instagram" },
                      { key: "twitter" as const, label: "X (Twitter)" },
                      { key: "snapchat" as const, label: "Snapchat" },
                      { key: "tiktok" as const, label: "TikTok" },
                    ] as const
                  ).map(({ key, label }) => (
                    <div key={key}>
                      <label className="block text-xs font-medium text-navy/60 mb-1">{label}</label>
                      <input
                        type="url"
                        value={footerForm.socialLinks[key] || ""}
                        onChange={(e) =>
                          setFooterForm((prev) => ({
                            ...prev,
                            socialLinks: { ...prev.socialLinks, [key]: e.target.value },
                          }))
                        }
                        placeholder="https://"
                        className="w-full px-4 py-2.5 rounded-xl border border-rose-gold/20 focus:outline-none focus:border-rose-gold text-navy text-sm"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={handleFooterSave}
                className="w-full rose-gold-gradient text-navy py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-rose-gold/25 transition-all duration-300"
              >
                {t(locale, "save")}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
