"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { t } from "@/data/translations";
import { useData } from "@/context/DataContext";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const { locale } = useLocale();
  const { products } = useData();
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return (
      <>
        <Header />
        <main className="flex-1 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-navy mb-4">Product not found</h1>
            <Link href="/" className="text-rose-gold hover:underline">
              {t(locale, "backToProducts")}
            </Link>
          </div>
        </main>
        <Footer />
        <WhatsAppButton />
      </>
    );
  }

  const name = locale === "ar" ? product.nameAr : product.nameEn;
  const description = locale === "ar" ? product.descriptionAr : product.descriptionEn;
  const category = locale === "ar" ? product.categoryAr : product.categoryEn;

  const whatsappMessage = locale === "ar"
    ? `مرحباً، أرغب بطلب:\n\n📦 المنتج: ${name}\n🏷️ التصنيف: ${category}\n\nأرجو إفادتي بالتفاصيل والأسعار. شكراً لكم.`
    : `Hello, I would like to order:\n\n📦 Product: ${name}\n🏷️ Category: ${category}\n\nPlease provide details and pricing. Thank you.`;

  const whatsappUrl = `https://wa.me/966554218410?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <Header />
      <main className="flex-1 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-navy/50 mb-8">
            <Link href="/" className="hover:text-rose-gold transition-colors">
              {t(locale, "home")}
            </Link>
            <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/#products" className="hover:text-rose-gold transition-colors">
              {t(locale, "ourProducts")}
            </Link>
            <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-navy font-medium">{name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div>
              {product.images.length > 0 ? (
                <>
                  <div className="relative h-96 rounded-2xl overflow-hidden bg-white shadow-lg mb-4">
                    <Image
                      src={product.images[selectedImage]}
                      alt={name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {product.images.length > 1 && (
                    <div className="flex gap-3 overflow-x-auto pb-2">
                      {product.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedImage(idx)}
                          className={`relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 transition-all duration-300 ${
                            selectedImage === idx
                              ? "ring-3 ring-rose-gold scale-105"
                              : "opacity-60 hover:opacity-100"
                          }`}
                        >
                          <Image src={img} alt="" fill className="object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="h-96 rounded-2xl bg-gradient-to-br from-navy/5 to-rose-gold/10 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-rose-gold/40 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-navy/40">{t(locale, "noImages")}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <span className="inline-block px-4 py-1.5 bg-rose-gold/10 text-rose-gold-dark rounded-full text-sm font-medium mb-4 w-fit">
                {category}
              </span>
              <h1 className="text-3xl md:text-4xl font-black text-navy mb-6">{name}</h1>
              <p className="text-navy/70 text-lg leading-relaxed mb-8">{description}</p>

              <div className="bg-white rounded-2xl p-5 border border-rose-gold/20 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span className="text-sm font-bold text-navy">
                    {locale === "ar" ? "رسالة الطلب الجاهزة" : "Pre-filled Order Message"}
                  </span>
                </div>
                <div className="bg-green-50 rounded-xl p-4 text-sm text-navy/70 leading-relaxed whitespace-pre-line border border-green-100">
                  {whatsappMessage}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rose-gold-gradient text-navy px-8 py-4 rounded-full font-bold text-center hover:shadow-2xl hover:shadow-rose-gold/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {t(locale, "orderViaWhatsapp")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
