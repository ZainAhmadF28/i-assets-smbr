"use client";
import Link from "next/link";
import { useState, useMemo } from "react";
import {
  assets,
  categories,
  conditionLabel,
  conditionColor,
  statusLabel,
  formatCurrency,
  type Asset,
  type AssetCondition,
  type AssetStatus,
} from "@/data/assets";

// ─── Icons ────────────────────────────────────────────────────────────────────

function IconSearch() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
function IconFilter() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}
function IconChevronRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}
function IconHome() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
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
function IconScan() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="5" height="5" rx="1" /><rect x="16" y="3" width="5" height="5" rx="1" />
      <rect x="3" y="16" width="5" height="5" rx="1" /><path d="M16 16h2v2h-2z" />
      <path d="M18 18h3" /><path d="M21 16v3" />
    </svg>
  );
}
function IconUser() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
  );
}
function IconX() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
function IconMapPin() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  );
}

// ─── Bottom Nav ───────────────────────────────────────────────────────────────

function NavBtn({ href, label, active, children }: { href: string; label: string; active?: boolean; children: React.ReactNode }) {
  return (
    <Link href={href} className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-colors ${active ? "text-[#135d3a]" : "text-slate-400 hover:text-slate-600"}`}>
      {children}
      <span className="text-[10px] font-medium">{label}</span>
    </Link>
  );
}

// ─── Status Badge ─────────────────────────────────────────────────────────────

const statusColors: Record<AssetStatus, { bg: string; text: string }> = {
  AKTIF:      { bg: "#135d3a1a", text: "#135d3a" },
  DIPINJAM:   { bg: "#fef3c71a", text: "#d97706"  },
  DIPERBAIKI: { bg: "#d7362d1a", text: "#d7362d"  },
  DIHAPUS:    { bg: "#94a3b81a", text: "#64748b"  },
};

// ─── Asset Card ───────────────────────────────────────────────────────────────

function AssetCard({ asset }: { asset: Asset }) {
  const cond   = conditionColor[asset.condition];
  const stat   = statusColors[asset.status];

  return (
    <Link
      href={`/assets/${asset.id}`}
      className="flex items-center gap-3 px-4 py-3.5 hover:bg-slate-50 active:bg-slate-100 transition-colors border-b border-slate-100 last:border-0"
    >
      {/* Avatar placeholder */}
      <div
        className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 text-lg font-bold"
        style={{ backgroundColor: cond.bg, color: cond.text }}
      >
        {asset.name.charAt(0)}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-slate-800 text-[13px] truncate">{asset.name}</p>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="text-[10px] text-slate-400 font-mono">{asset.code}</span>
          <span className="text-slate-200">·</span>
          <span className="text-[10px] text-slate-400 flex items-center gap-0.5">
            <IconMapPin /> {asset.location.name}
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-1.5">
          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: stat.bg, color: stat.text }}>
            {statusLabel[asset.status]}
          </span>
          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: cond.bg, color: cond.text }}>
            {conditionLabel[asset.condition]}
          </span>
        </div>
      </div>

      <span className="text-slate-300 flex-shrink-0"><IconChevronRight /></span>
    </Link>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const CONDITIONS: { label: string; value: AssetCondition | "ALL" }[] = [
  { label: "Semua",        value: "ALL"          },
  { label: "Baik",         value: "BAIK"         },
  { label: "Rusak Ringan", value: "RUSAK_RINGAN" },
  { label: "Rusak Berat",  value: "RUSAK_BERAT"  },
  { label: "Tidak Aktif",  value: "TIDAK_AKTIF"  },
];

export default function AssetsPage() {
  const [search,    setSearch]    = useState("");
  const [catFilter, setCatFilter] = useState("ALL");
  const [condFilter, setCondFilter] = useState<AssetCondition | "ALL">("ALL");
  const [showFilter, setShowFilter] = useState(false);

  const filtered = useMemo(() => {
    let list = assets;
    if (catFilter !== "ALL") list = list.filter((a) => a.categoryId === catFilter);
    if (condFilter !== "ALL") list = list.filter((a) => a.condition === condFilter);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.code.toLowerCase().includes(q) ||
          a.location.name.toLowerCase().includes(q)
      );
    }
    return list;
  }, [search, catFilter, condFilter]);

  const totalValue = useMemo(
    () => filtered.reduce((sum, a) => sum + a.purchasePrice, 0),
    [filtered]
  );

  const hasFilter = catFilter !== "ALL" || condFilter !== "ALL";

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ── HEADER ── */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-30">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link href="/" className="text-slate-400 hover:text-slate-600 transition-colors p-1 -ml-1">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </Link>
          <h1 className="font-bold text-slate-800 text-base flex-1">Daftar Aset</h1>
          <button
            onClick={() => setShowFilter((v) => !v)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors"
            style={hasFilter
              ? { backgroundColor: "#135d3a1a", color: "#135d3a" }
              : { backgroundColor: "#f1f5f9", color: "#64748b" }
            }
          >
            <IconFilter />
            Filter
            {hasFilter && <span className="w-1.5 h-1.5 rounded-full bg-[#135d3a] ml-0.5" />}
          </button>
        </div>

        {/* Search bar */}
        <div className="max-w-2xl mx-auto px-4 pb-3">
          <div className="bg-slate-100 rounded-xl flex items-center gap-2 px-3 py-2">
            <span className="text-slate-400"><IconSearch /></span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari nama, kode, atau lokasi..."
              className="flex-1 text-sm text-slate-700 placeholder-slate-400 outline-none bg-transparent"
            />
            {search && (
              <button onClick={() => setSearch("")} className="text-slate-400 hover:text-slate-600">
                <IconX />
              </button>
            )}
          </div>
        </div>

        {/* Filter panel */}
        {showFilter && (
          <div className="max-w-2xl mx-auto px-4 pb-3 space-y-2.5 border-t border-slate-100 pt-3">
            {/* Category */}
            <div>
              <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Kategori</p>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => setCatFilter("ALL")}
                  className="px-3 py-1 rounded-full text-xs font-medium transition-colors"
                  style={catFilter === "ALL"
                    ? { backgroundColor: "#135d3a", color: "#fff" }
                    : { backgroundColor: "#f1f5f9", color: "#64748b" }
                  }
                >
                  Semua
                </button>
                {categories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setCatFilter(c.id)}
                    className="px-3 py-1 rounded-full text-xs font-medium transition-colors"
                    style={catFilter === c.id
                      ? { backgroundColor: "#135d3a", color: "#fff" }
                      : { backgroundColor: "#f1f5f9", color: "#64748b" }
                    }
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>
            {/* Condition */}
            <div>
              <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Kondisi</p>
              <div className="flex flex-wrap gap-1.5">
                {CONDITIONS.map((c) => (
                  <button
                    key={c.value}
                    onClick={() => setCondFilter(c.value)}
                    className="px-3 py-1 rounded-full text-xs font-medium transition-colors"
                    style={condFilter === c.value
                      ? { backgroundColor: "#135d3a", color: "#fff" }
                      : { backgroundColor: "#f1f5f9", color: "#64748b" }
                    }
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>
            {hasFilter && (
              <button
                onClick={() => { setCatFilter("ALL"); setCondFilter("ALL"); }}
                className="text-xs font-medium flex items-center gap-1 mt-1"
                style={{ color: "#d7362d" }}
              >
                <IconX /> Reset filter
              </button>
            )}
          </div>
        )}
      </header>

      {/* ── SUMMARY STRIP ── */}
      <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
        <p className="text-xs text-slate-500">
          <span className="font-bold text-slate-700">{filtered.length}</span> aset ditemukan
        </p>
        <p className="text-xs text-slate-400">
          Total:{" "}
          <span className="font-semibold text-slate-600">{formatCurrency(totalValue)}</span>
        </p>
      </div>

      {/* ── LIST ── */}
      <main className="max-w-2xl mx-auto px-4 pb-28 md:pb-8">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-slate-400">
            <div className="text-4xl mb-3">🔍</div>
            <p className="text-sm font-medium">Aset tidak ditemukan</p>
            <p className="text-xs mt-1">Coba ubah kata kunci atau filter</p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            {filtered.map((a) => (
              <AssetCard key={a.id} asset={a} />
            ))}
          </div>
        )}
      </main>

      {/* ── MOBILE BOTTOM NAV ── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-t border-slate-100 pb-safe">
        <div className="max-w-sm mx-auto flex items-center justify-around px-2 py-2">
          <NavBtn href="/" label="Beranda"><IconHome /></NavBtn>
          <NavBtn href="/assets" label="Aset" active><IconBox /></NavBtn>
          <div className="flex flex-col items-center -mt-7">
            <Link
              href="/scan"
              className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg active:scale-95 transition-transform text-white"
              style={{ backgroundColor: "#d7362d", boxShadow: "0 8px 20px #d7362d40" }}
            >
              <IconScan />
            </Link>
            <span className="text-[10px] font-semibold mt-1" style={{ color: "#d7362d" }}>Scan</span>
          </div>
          <NavBtn href="/assets" label="Cari"><IconSearch /></NavBtn>
          <NavBtn href="/login" label="Admin"><IconUser /></NavBtn>
        </div>
      </nav>
    </div>
  );
}
