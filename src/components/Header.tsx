"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { t } from "@/data/translations";
import { useState } from "react";

export default function Header() {
  const { locale, setLocale } = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="nav-gradient sticky top-0 z-50 border-b border-rose-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden ring-2 ring-rose-gold/30 group-hover:ring-rose-gold transition-all duration-300">
              <Image
                src="/logo.png"
                alt="Print Madian Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-lg sm:text-xl font-bold text-white">
              {t(locale, "siteName")}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white/80 hover:text-rose-gold transition-colors duration-300 font-medium">
              {t(locale, "home")}
            </Link>
            <Link href="#products" className="text-white/80 hover:text-rose-gold transition-colors duration-300 font-medium">
              {t(locale, "ourProducts")}
            </Link>
            <Link href="#why-us" className="text-white/80 hover:text-rose-gold transition-colors duration-300 font-medium">
              {t(locale, "whyUs")}
            </Link>
            <a
              href="https://wa.me/966554218410"
              target="_blank"
              rel="noopener noreferrer"
              className="rose-gold-gradient text-navy px-5 py-2.5 rounded-full font-bold hover:shadow-lg hover:shadow-rose-gold/25 transition-all duration-300"
            >
              {t(locale, "orderNow")}
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setLocale(locale === "ar" ? "en" : "ar")}
              className="hidden sm:block px-4 py-2 rounded-full border border-rose-gold/40 text-rose-gold hover:bg-rose-gold/10 transition-all duration-300 text-sm font-medium"
            >
              {t(locale, "language")}
            </button>
            <Link
              href="/admin"
              className="hidden sm:block p-2 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-rose-gold/40 transition-all duration-300"
              title={t(locale, "admin")}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white/80 hover:text-rose-gold transition-colors"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 animate-fade-in">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-white/80 hover:text-rose-gold transition-colors font-medium py-2"
            >
              {t(locale, "home")}
            </Link>
            <Link
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-white/80 hover:text-rose-gold transition-colors font-medium py-2"
            >
              {t(locale, "ourProducts")}
            </Link>
            <Link
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-white/80 hover:text-rose-gold transition-colors font-medium py-2"
            >
              {t(locale, "whyUs")}
            </Link>
            <a
              href="https://wa.me/966554218410"
              target="_blank"
              rel="noopener noreferrer"
              className="block rose-gold-gradient text-navy text-center px-5 py-3 rounded-full font-bold"
            >
              {t(locale, "orderNow")}
            </a>
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => {
                  setLocale(locale === "ar" ? "en" : "ar");
                  setMobileMenuOpen(false);
                }}
                className="flex-1 px-4 py-2 rounded-full border border-rose-gold/40 text-rose-gold text-sm font-medium"
              >
                {t(locale, "language")}
              </button>
              <Link
                href="/admin"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-white/20 text-white/60 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {t(locale, "admin")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
