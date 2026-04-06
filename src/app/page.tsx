"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductCard from "@/components/ProductCard";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { useLocale } from "@/context/LocaleContext";
import { t } from "@/data/translations";
import { useData } from "@/context/DataContext";
import { categories } from "@/data/products";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const { locale } = useLocale();
  const { products } = useData();
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => {
          const catAr = p.categoryAr;
          const catEn = p.categoryEn;
          const matchAr = categories.find((c) => c.id === activeCategory)?.nameAr;
          const matchEn = categories.find((c) => c.id === activeCategory)?.nameEn;
          return catAr === matchAr || catEn === matchEn;
        });

  return (
    <>
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-72 h-72 bg-rose-gold rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-rose-gold/50 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-gold/30 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
            <div className="text-center">
              <div className="animate-fade-in-up">
                <span className="inline-block px-6 py-2 bg-rose-gold/20 text-rose-gold rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-rose-gold/30">
                  {t(locale, "siteNameFull")}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 animate-fade-in-up stagger-1 leading-tight">
                {t(locale, "heroTitle")}
                <span className="block gradient-text mt-2">برنت مديان</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 animate-fade-in-up stagger-2 leading-relaxed">
                {t(locale, "heroSubtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-3">
                <a
                  href="https://wa.me/966554218410"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rose-gold-gradient text-navy px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-rose-gold/30 transition-all duration-300 hover:scale-105"
                >
                  {t(locale, "orderNow")}
                </a>
                <a
                  href="#products"
                  className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-bold text-lg hover:bg-white/10 hover:border-rose-gold/50 transition-all duration-300"
                >
                  {t(locale, "ourProducts")}
                </a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream to-transparent" />
        </section>

        {/* Why Us Section */}
        <section id="why-us" className="py-20 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-navy mb-4">
                  {t(locale, "whyUs")}
                </h2>
                <div className="w-24 h-1 rose-gold-gradient mx-auto rounded-full" />
              </div>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z", title: t(locale, "quality"), desc: t(locale, "qualityDesc") },
                { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: t(locale, "speed"), desc: t(locale, "speedDesc") },
                { icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01", title: t(locale, "design"), desc: t(locale, "designDesc") },
                { icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", title: t(locale, "price"), desc: t(locale, "priceDesc") },
              ].map((item, i) => (
                <AnimateOnScroll key={i} delay={i * 150}>
                  <div
                    className="bg-white rounded-2xl p-8 text-center card-hover border border-rose-gold/10 h-full"
                  >
                    <div className="w-16 h-16 rose-gold-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-rose-gold/20">
                      <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                    <p className="text-navy/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20 bg-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black text-navy mb-4">
                  {t(locale, "ourProducts")}
                </h2>
                <p className="text-navy/60 max-w-2xl mx-auto mb-8">
                  {t(locale, "productsSubtitle")}
                </p>
                <div className="w-24 h-1 rose-gold-gradient mx-auto rounded-full mb-10" />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeCategory === cat.id
                        ? "rose-gold-gradient text-navy shadow-lg shadow-rose-gold/25"
                        : "bg-white text-navy/70 hover:text-navy hover:bg-navy/5 border border-rose-gold/20"
                    }`}
                  >
                    {locale === "ar" ? cat.nameAr : cat.nameEn}
                  </button>
                ))}
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="hero-gradient py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-48 h-48 bg-rose-gold rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-rose-gold/50 rounded-full blur-3xl" />
          </div>
          <AnimateOnScroll>
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                {t(locale, "heroDescription")}
              </h2>
              <a
                href="https://wa.me/966554218410"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rose-gold-gradient text-navy px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-rose-gold/30 transition-all duration-300 hover:scale-105"
              >
                {t(locale, "orderViaWhatsapp")}
              </a>
            </div>
          </AnimateOnScroll>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
