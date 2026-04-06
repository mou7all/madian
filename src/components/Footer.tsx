"use client";

import { useLocale } from "@/context/LocaleContext";
import { t } from "@/data/translations";
import { useData } from "@/context/DataContext";
import Link from "next/link";

export default function Footer() {
  const { locale } = useLocale();
  const { footer } = useData();

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4 text-rose-gold">{t(locale, "siteNameFull")}</h3>
            <p className="text-white/70 leading-relaxed text-sm">
              {t(locale, "footerAbout")}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-rose-gold">{t(locale, "quickLinks")}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/70 hover:text-rose-gold transition-colors text-sm">
                  {t(locale, "home")}
                </Link>
              </li>
              <li>
                <Link href="/#products" className="text-white/70 hover:text-rose-gold transition-colors text-sm">
                  {t(locale, "ourProducts")}
                </Link>
              </li>
              <li>
                <a href="https://wa.me/966554218410" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-rose-gold transition-colors text-sm">
                  {t(locale, "contactUs")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-rose-gold">{t(locale, "contactInfo")}</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-rose-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{locale === "ar" ? footer.phoneAr : footer.phoneEn}</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-rose-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{locale === "ar" ? footer.emailAr : footer.emailEn}</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-rose-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{locale === "ar" ? footer.addressAr : footer.addressEn}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-rose-gold">{t(locale, "workingHours")}</h3>
            <p className="text-white/70 text-sm">{locale === "ar" ? footer.workingHoursAr : footer.workingHoursEn}</p>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 text-rose-gold">{t(locale, "followUs")}</h4>
              <div className="flex gap-3">
                {footer.socialLinks.instagram && (
                  <a href={footer.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-gold/20 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                )}
                {footer.socialLinks.twitter && (
                  <a href={footer.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-gold/20 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                )}
                {footer.socialLinks.snapchat && (
                  <a href={footer.socialLinks.snapchat} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-gold/20 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.206.793c.424 0 1.245.041 1.925.273.54.183.975.42 1.296.77.32.35.49.792.54 1.31.05.517-.01 1.07-.13 1.62-.12.55-.31 1.13-.54 1.73-.23.6-.47 1.22-.69 1.84-.22.62-.37 1.24-.44 1.84-.07.6-.02 1.18.16 1.72.18.54.5.98.96 1.32.46.34 1.05.52 1.76.52.36 0 .72-.06 1.08-.18.36-.12.68-.3 1-.54.32-.24.58-.54.78-.88.2-.34.32-.72.36-1.14.04-.42 0-.84-.12-1.24-.12-.4-.32-.76-.6-1.06-.28-.3-.62-.54-1.02-.72-.4-.18-.82-.28-1.28-.28-.24 0-.48.03-.72.08-.24.05-.46.13-.66.24-.2.11-.38.25-.52.42-.14.17-.24.36-.3.56-.06.2-.08.4-.06.6.02.2.08.38.18.54.1.16.24.3.4.4.16.1.34.18.54.22.2.04.4.06.6.04.2-.02.38-.08.54-.16.16-.08.3-.2.4-.34.1-.14.16-.3.2-.46.04-.16.04-.34 0-.5-.04-.16-.12-.3-.24-.42-.12-.12-.28-.2-.46-.26-.18-.06-.38-.08-.6-.06-.22.02-.44.08-.66.18-.22.1-.42.24-.58.42-.16.18-.28.4-.36.64-.08.24-.12.5-.12.78 0 .28.04.56.12.82.08.26.2.5.36.72.16.22.36.4.6.56.24.16.5.28.8.36.3.08.62.12.96.12.34 0 .68-.04 1-.12.32-.08.62-.2.9-.36.28-.16.52-.36.74-.6.22-.24.4-.52.54-.82.14-.3.24-.64.28-1 .04-.36.04-.72 0-1.08-.04-.36-.14-.7-.28-1.02-.14-.32-.34-.62-.58-.88-.24-.26-.54-.48-.88-.64-.34-.16-.72-.26-1.14-.28-.42-.02-.84.02-1.26.12-.42.1-.8.26-1.14.48-.34.22-.62.5-.86.82-.24.32-.42.68-.54 1.08-.12.4-.18.82-.18 1.26 0 .44.06.88.18 1.3.12.42.3.82.54 1.18.24.36.54.68.9.94.36.26.76.46 1.2.6.44.14.9.2 1.38.18.48-.02.94-.12 1.38-.3.44-.18.84-.42 1.18-.72.34-.3.62-.64.84-1.02.22-.38.38-.8.48-1.24.1-.44.14-.9.12-1.36-.02-.46-.12-.9-.28-1.32-.16-.42-.38-.8-.66-1.12-.28-.32-.62-.58-1.02-.78-.4-.2-.84-.32-1.32-.34-.48-.02-.94.04-1.38.18-.44.14-.84.34-1.18.6-.34.26-.62.56-.84.9-.22.34-.38.72-.48 1.12-.1.4-.14.82-.12 1.24.02.42.12.82.28 1.2.16.38.38.72.66 1.02.28.3.62.54 1.02.72.4.18.84.28 1.32.3.48.02.94-.04 1.38-.18.44-.14.84-.34 1.18-.6.34-.26.62-.56.84-.9.22-.34.38-.72.48-1.12.1-.4.14-.82.12-1.24-.02-.42-.12-.82-.28-1.2-.16-.38-.38-.72-.66-1.02-.28-.3-.62-.54-1.02-.72-.4-.18-.84-.28-1.32-.3-.48-.02-.94.04-1.38.18-.44.14-.84.34-1.18.6-.34.26-.62.56-.84.9-.22.34-.38.72-.48 1.12-.1.4-.14.82-.12 1.24z"/></svg>
                  </a>
                )}
                {footer.socialLinks.tiktok && (
                  <a href={footer.socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-gold/20 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.15V11.7a4.83 4.83 0 01-3.77-1.78V6.69h3.77z"/></svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-white/50 text-sm">
            &copy; {new Date().getFullYear()} {t(locale, "siteNameFull")}. {t(locale, "rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
