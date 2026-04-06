"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/context/LocaleContext";
import { t } from "@/data/translations";
import type { Product } from "@/data/products";
import AnimateOnScroll from "@/components/AnimateOnScroll";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const { locale } = useLocale();
  const name = locale === "ar" ? product.nameAr : product.nameEn;
  const description = locale === "ar" ? product.descriptionAr : product.descriptionEn;
  const category = locale === "ar" ? product.categoryAr : product.categoryEn;

  const whatsappMessage = locale === "ar"
    ? `مرحباً، أرغب بطلب:\n\n📦 المنتج: ${name}\n🏷️ التصنيف: ${category}\n\nأرجو إفادتي بالتفاصيل والأسعار. شكراً لكم.`
    : `Hello, I would like to order:\n\n📦 Product: ${name}\n🏷️ Category: ${category}\n\nPlease provide details and pricing. Thank you.`;

  const whatsappUrl = `https://wa.me/966554218410?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <AnimateOnScroll delay={(index % 4) * 100}>
      <div
        className="card-hover group bg-white rounded-2xl overflow-hidden shadow-md border border-rose-gold/10 h-full"
      >
        <div className="relative h-56 bg-gradient-to-br from-navy/5 to-rose-gold/10 overflow-hidden">
          {product.images.length > 0 ? (
            <Image
              src={product.images[0]}
              alt={name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-navy/10 flex items-center justify-center">
                <svg className="w-10 h-10 text-rose-gold/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 bg-rose-gold/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
              {category}
            </span>
          </div>
        </div>

        <div className="p-5">
          <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-rose-gold-dark transition-colors duration-300">
            {name}
          </h3>
          <p className="text-sm text-navy/60 line-clamp-2 mb-4 leading-relaxed">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <Link
              href={`/products/${product.id}`}
              className="text-rose-gold font-semibold text-sm hover:text-rose-gold-dark transition-colors flex items-center gap-1 group/link"
            >
              {t(locale, "viewDetails")}
              <svg className="w-4 h-4 rtl:rotate-180 transition-transform group-hover/link:translate-x-1 rtl:group-hover/link:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rose-gold-gradient text-navy text-xs font-bold px-4 py-2 rounded-full hover:shadow-lg hover:shadow-rose-gold/25 transition-all duration-300"
            >
              {t(locale, "orderNow")}
            </a>
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
}
