"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "@/context/LocaleContext";
import { t } from "@/data/translations";
import Image from "next/image";
import Link from "next/link";

export default function AdminLoginPage() {
  const { locale } = useLocale();
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "madian2024") {
      sessionStorage.setItem("madian-admin", "true");
      router.push("/admin/dashboard");
    } else {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4">
      <div className="absolute top-6 left-6">
        <Link href="/" className="flex items-center gap-3 text-navy/60 hover:text-navy transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-medium">{t(locale, "home")}</span>
        </Link>
      </div>

      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-4 relative">
            <div className="w-20 h-20 rounded-2xl bg-navy flex items-center justify-center">
              <svg className="w-10 h-10 text-rose-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-navy">{t(locale, "login")}</h1>
          <p className="text-navy/50 text-sm mt-2">{t(locale, "admin")}</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg border border-rose-gold/10">
          <div className="mb-6">
            <label className="block text-sm font-medium text-navy mb-2">{t(locale, "password")}</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-3 rounded-xl border ${
                error ? "border-red-400 bg-red-50" : "border-rose-gold/20"
              } focus:outline-none focus:border-rose-gold text-navy`}
              placeholder="••••••••"
              autoFocus
            />
            {error && (
              <p className="text-red-500 text-sm mt-2 animate-fade-in">{t(locale, "loginError")}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full rose-gold-gradient text-navy py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-rose-gold/25 transition-all duration-300"
          >
            {t(locale, "login")}
          </button>
        </form>
      </div>
    </div>
  );
}
