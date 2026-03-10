"use client";
import Link from "next/link";
import { useState } from "react";

// ─── Icon Components ───────────────────────────────────────────────────────────

function IconScan() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="5" height="5" rx="1" />
      <rect x="16" y="3" width="5" height="5" rx="1" />
      <rect x="3" y="16" width="5" height="5" rx="1" />
      <path d="M16 16h2v2h-2z" />
      <path d="M18 18h3" />
      <path d="M21 16v3" />
    </svg>
  );
}

function IconList() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" />
      <line x1="3" y1="12" x2="3.01" y2="12" />
      <line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  );
}

function IconChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function IconHome() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function IconBox() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    </svg>
  );
}

function IconSearch() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function IconUser() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const features = [
  {
    icon: "📷",
    title: "Scan QR Code",
    desc: "Identifikasi aset fisik langsung via kamera HP",
  },
  {
    icon: "🗺️",
    title: "Tracking Lokasi",
    desc: "Lihat posisi aset di Google Maps secara visual",
  },
  {
    icon: "📋",
    title: "Katalog Digital",
    desc: "Kelola data aset lengkap dalam satu platform",
  },
  {
    icon: "🔍",
    title: "Filter & Cari",
    desc: "Temukan aset berdasarkan nama, kategori, dll",
  },
];

const stats = [
  { label: "Total Aset", value: "—", colorClass: "text-blue-600" },
  { label: "Kategori", value: "—", colorClass: "text-violet-600" },
  { label: "Lokasi", value: "—", colorClass: "text-emerald-600" },
];

// ─── Nav Button ───────────────────────────────────────────────────────────────

function NavBtn({
  href,
  label,
  active,
  children,
}: {
  href: string;
  label: string;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-colors ${
        active ? "text-blue-600" : "text-slate-400 hover:text-slate-600"
      }`}
    >
      {children}
      <span className="text-[10px] font-medium">{label}</span>
    </Link>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ── HERO WITH BG IMAGE ── */}
      <section
        className="relative min-h-[220px] md:min-h-[280px] flex flex-col justify-end bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/background.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60" />

        {/* Search bar */}
        <div className="relative z-20 px-4 pb-6 max-w-2xl mx-auto w-full">
          <div className="bg-white rounded-2xl shadow-2xl shadow-black/25 flex items-center gap-2 px-4 py-1 border border-slate-100">
            <span className="text-slate-400 flex-shrink-0">
              <IconSearch />
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari nama atau ID aset..."
              className="flex-1 text-sm text-slate-700 placeholder-slate-400 outline-none bg-transparent py-3.5"
            />
            <Link
              href={`/assets${search ? `?q=${encodeURIComponent(search)}` : ""}`}
              className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-4 py-2 rounded-xl text-xs font-semibold transition-colors flex-shrink-0"
            >
              Cari
            </Link>
          </div>
        </div>
      </section>

      {/* ── ACTION CARDS ── */}
      <section className="relative z-10 px-4 mt-5 max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/80 border border-slate-100 overflow-hidden">
          <Link
            href="/scan"
            className="flex items-center gap-4 p-5 hover:bg-orange-50/60 active:bg-orange-50 transition-colors border-b border-slate-100"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-sm shadow-orange-200 flex-shrink-0 text-white">
              <IconScan />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-slate-800 text-[15px]">Scan QR Code</p>
              <p className="text-xs text-slate-400 mt-0.5">Identifikasi aset via kamera HP</p>
            </div>
            <span className="text-slate-300 flex-shrink-0">
              <IconChevronRight />
            </span>
          </Link>

          <Link
            href="/assets"
            className="flex items-center gap-4 p-5 hover:bg-blue-50/60 active:bg-blue-50 transition-colors"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-sm shadow-blue-200 flex-shrink-0 text-white">
              <IconList />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-slate-800 text-[15px]">Lihat Semua Aset</p>
              <p className="text-xs text-slate-400 mt-0.5">Telusuri katalog aset perusahaan</p>
            </div>
            <span className="text-slate-300 flex-shrink-0">
              <IconChevronRight />
            </span>
          </Link>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="px-4 mt-5 max-w-2xl mx-auto">
        <div className="grid grid-cols-3 gap-3">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-4 text-center shadow-sm border border-slate-100">
              <p className={`text-xl font-black ${s.colorClass}`}>{s.value}</p>
              <p className="text-[10px] text-slate-400 leading-tight mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURE HIGHLIGHTS ── */}
      <section className="px-4 mt-5 max-w-2xl mx-auto pb-28 md:pb-10">
        <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-3 px-1">
          Fitur Utama
        </p>
        <div className="grid grid-cols-2 gap-3">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
              <div className="text-2xl mb-2">{f.icon}</div>
              <p className="font-semibold text-slate-700 text-[13px]">{f.title}</p>
              <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-[10px] text-slate-300 mt-8">
          © 2026 PT Semen Baturaja (Persero) Tbk
        </p>
      </section>

      {/* ── MOBILE BOTTOM NAV ── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-t border-slate-100 pb-safe">
        <div className="max-w-sm mx-auto flex items-center justify-around px-2 py-2">
          <NavBtn href="/" label="Beranda" active>
            <IconHome />
          </NavBtn>
          <NavBtn href="/assets" label="Aset">
            <IconBox />
          </NavBtn>

          {/* Center elevated Scan button */}
          <div className="flex flex-col items-center -mt-7">
            <Link
              href="/scan"
              className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-300 active:scale-95 transition-transform text-white"
            >
              <IconScan />
            </Link>
            <span className="text-[10px] text-orange-500 font-semibold mt-1">Scan</span>
          </div>

          <NavBtn href="/assets" label="Cari">
            <IconSearch />
          </NavBtn>
          <NavBtn href="/login" label="Admin">
            <IconUser />
          </NavBtn>
        </div>
      </nav>

    </div>
  );
}
