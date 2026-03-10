// ─── Types ────────────────────────────────────────────────────────────────────

export type AssetCondition = "BAIK" | "RUSAK_RINGAN" | "RUSAK_BERAT" | "TIDAK_AKTIF";
export type AssetStatus    = "AKTIF" | "DIPINJAM" | "DIPERBAIKI" | "DIHAPUS";

export interface Category {
  id:   string;
  name: string;
  slug: string;
}

export interface Location {
  id:      string;
  name:    string;
  address: string;
  lat:     number;
  lng:     number;
}

export interface Asset {
  id:            string;
  code:          string; // isi QR code
  name:          string;
  description:   string;
  condition:     AssetCondition;
  status:        AssetStatus;
  imageUrl:      string | null;
  purchaseDate:  string; // ISO date string
  purchasePrice: number;
  categoryId:    string;
  category:      Category;
  locationId:    string;
  location:      Location;
}

// ─── Categories ───────────────────────────────────────────────────────────────

export const categories: Category[] = [
  { id: "cat-1", name: "Kendaraan",        slug: "kendaraan"       },
  { id: "cat-2", name: "Peralatan IT",     slug: "peralatan-it"    },
  { id: "cat-3", name: "Mesin Produksi",   slug: "mesin-produksi"  },
  { id: "cat-4", name: "Peralatan Kantor", slug: "peralatan-kantor"},
  { id: "cat-5", name: "Alat Berat",       slug: "alat-berat"      },
];

// ─── Locations ────────────────────────────────────────────────────────────────

export const locations: Location[] = [
  {
    id:      "loc-1",
    name:    "Kantor Pusat",
    address: "Jl. Abiyasa No.2, Baturaja, Ogan Komering Ulu, Sumatera Selatan",
    lat:     -4.1285,
    lng:     104.1705,
  },
  {
    id:      "loc-2",
    name:    "Pabrik Baturaja I",
    address: "Jl. Pabrik Semen, Baturaja Timur, OKU",
    lat:     -4.1340,
    lng:     104.1820,
  },
  {
    id:      "loc-3",
    name:    "Pabrik Baturaja II",
    address: "Jl. Industri Km.12, Baturaja, OKU",
    lat:     -4.1480,
    lng:     104.2010,
  },
  {
    id:      "loc-4",
    name:    "Gudang Material",
    address: "Komplek Pabrik, Baturaja, OKU",
    lat:     -4.1360,
    lng:     104.1850,
  },
  {
    id:      "loc-5",
    name:    "Tambang Kapur",
    address: "Bukit Kapur, Martapura, OKU Timur",
    lat:     -4.3500,
    lng:     104.3700,
  },
];

// ─── Assets ───────────────────────────────────────────────────────────────────

export const assets: Asset[] = [
  // ── Kendaraan ──
  {
    id: "ast-001", code: "SMBR-KND-001",
    name: "Toyota Hilux Double Cabin 2022",
    description: "Kendaraan operasional lapangan area pabrik dan tambang.",
    condition: "BAIK", status: "AKTIF",
    imageUrl: null,
    purchaseDate: "2022-03-15", purchasePrice: 485000000,
    categoryId: "cat-1", category: categories[0],
    locationId: "loc-2", location: locations[1],
  },
  {
    id: "ast-002", code: "SMBR-KND-002",
    name: "Mitsubishi L300 Box 2021",
    description: "Kendaraan pengangkut dokumen dan logistik kantor.",
    condition: "BAIK", status: "AKTIF",
    imageUrl: null,
    purchaseDate: "2021-07-10", purchasePrice: 240000000,
    categoryId: "cat-1", category: categories[0],
    locationId: "loc-1", location: locations[0],
  },
  {
    id: "ast-003", code: "SMBR-KND-003",
    name: "Isuzu Elf NMR 2020",
    description: "Kendaraan angkutan barang area tambang.",
    condition: "RUSAK_RINGAN", status: "DIPERBAIKI",
    imageUrl: null,
    purchaseDate: "2020-11-20", purchasePrice: 380000000,
    categoryId: "cat-1", category: categories[0],
    locationId: "loc-5", location: locations[4],
  },
  {
    id: "ast-004", code: "SMBR-KND-004",
    name: "Honda Brio 2023",
    description: "Kendaraan dinas direksi.",
    condition: "BAIK", status: "DIPINJAM",
    imageUrl: null,
    purchaseDate: "2023-01-05", purchasePrice: 210000000,
    categoryId: "cat-1", category: categories[0],
    locationId: "loc-1", location: locations[0],
  },

  // ── Peralatan IT ──
  {
    id: "ast-005", code: "SMBR-IT-001",
    name: "Laptop Dell Latitude 5540",
    description: "Laptop core i7 gen-13, RAM 16GB, SSD 512GB untuk staff engineering.",
    condition: "BAIK", status: "AKTIF",
    imageUrl: null,
    purchaseDate: "2023-06-01", purchasePrice: 18500000,
    categoryId: "cat-2", category: categories[1],
    locationId: "loc-1", location: locations[0],
  },
  {
    id: "ast-006", code: "SMBR-IT-002",
    name: "Laptop Lenovo ThinkPad E15",
    description: "Laptop core i5 gen-12 untuk staff administrasi.",
    condition: "BAIK", status: "AKTIF",
    imageUrl: null,
    purchaseDate: "2022-09-14", purchasePrice: 13200000,
    categoryId: "cat-2", category: categories[1],
    locationId: "loc-1", location: locations[0],
  },
  {
    id: "ast-007", code: "SMBR-IT-003",
    name: "Printer Canon ImageRunner 2630i",
    description: "Printer multifungsi A3 untuk cetak dokumen produksi.",
    condition: "RUSAK_RINGAN", status: "DIPERBAIKI",
    imageUrl: null,
    purchaseDate: "2021-04-22", purchasePrice: 28000000,
    categoryId: "cat-2", category: categories[1],
    locationId: "loc-2", location: locations[1],
  },
  {
    id: "ast-008", code: "SMBR-IT-004",
    name: "Server Dell PowerEdge R740",
    description: "Server database utama sistem ERP perusahaan.",
    condition: "BAIK", status: "AKTIF",
    imageUrl: null,
    purchaseDate: "2021-12-10", purchasePrice: 185000000,
    categoryId: "cat-2", category: categories[1],
    locationId: "loc-1", location: locations[0],
  },
  {
    id: "ast-009", code: "SMBR-IT-005",
    name: "Switch Cisco Catalyst 2960",
    description: "Network switch 24-port untuk jaringan LAN kantor pusat.",
    condition: "BAIK", status: "AKTIF",
    imageUrl: null,
    purchaseDate: "2022-02-18", purchasePrice: 12500000,
    categoryId: "cat-2", category: categories[1],
    locationId: "loc-1", location: locations[0],
  },

  // ── Mesin Produksi ──
  {
    id: "ast-010", code: "SMBR-MSN-001",
    name: "Ball Mill BM-01",
    description: "Mesin penggiling batu kapur kapasitas 120 ton/jam, Pabrik I.",
    condition: "BAIK", status: "AKTIF",
    imageUrl: null,
    purchaseDate: "2015-08-20", purchasePrice: 12500000000,
    categoryId: "cat-3", category: categories[2],
    locationId: "loc-2", location: locations[1],
  },
  {
    id: "ast-011", code: "SMBR-MSN-002",
    name: "Rotary Kiln RK-01",
    description: "Kiln pembakaran klinker kapasitas 3000 ton/hari, Pabrik I.",
    condition: "BAIK", status: "AKTIF",
    imageUrl: null,
    purchaseDate: "2015-08-20", purchasePrice: 45000000000,
    categoryId: "cat-3", category: categories[2],
    locationId: "loc-2", location: locations[1],
  },
  {
    id: "ast-012", code: "SMBR-MSN-003",
    name: "Cement Mill CM-02",
    description: "Mesin penggilingan semen akhir, Pabrik II.",
    condition: "RUSAK_BERAT", status: "DIPERBAIKI",
    imageUrl: null,
    purchaseDate: "2019-03-11", purchasePrice: 18000000000,
    categoryId: "cat-3", category: categories[2],
    locationId: "loc-3", location: locations[2],
  },
  {
    id: "ast-013", code: "SMBR-MSN-004",
    name: "Packer FLSmidth HAVER 2000",
    description: "Mesin pengemas semen kemasan 40kg dan 50kg.",
    condition: "BAIK", status: "AKTIF",
    imageUrl: null,
    purchaseDate: "2020-06-05", purchasePrice: 3200000000,
    categoryId: "cat-3", category: categories[2],
    locationId: "loc-3", location: locations[2],
  },

  // ── Peralatan Kantor ──
  {
    id: "ast-014", code: "SMBR-KTR-001",
    name: "AC Daikin Split 2PK",
    description: "Air conditioner ruang rapat lantai 3, kantor pusat.",
    condition: "BAIK", status: "AKTIF",
    imageUrl: null,
    purchaseDate: "2023-04-10", purchasePrice: 8500000,
    categoryId: "cat-4", category: categories[3],
    locationId: "loc-1", location: locations[0],
  },
  {
    id: "ast-015", code: "SMBR-KTR-002",
    name: "Meja Rapat Kayu Jati (12 Orang)",
    description: "Meja rapat direksi kayu jati solid, kapasitas 12 orang.",
    condition: "BAIK", status: "AKTIF",
    imageUrl: null,
    purchaseDate: "2018-09-01", purchasePrice: 35000000,
    categoryId: "cat-4", category: categories[3],
    locationId: "loc-1", location: locations[0],
  },
  {
    id: "ast-016", code: "SMBR-KTR-003",
    name: "CCTV Dahua 32 Channel",
    description: "Sistem CCTV 32 kamera area kantor dan pabrik.",
    condition: "BAIK", status: "AKTIF",
    imageUrl: null,
    purchaseDate: "2022-07-17", purchasePrice: 65000000,
    categoryId: "cat-4", category: categories[3],
    locationId: "loc-2", location: locations[1],
  },

  // ── Alat Berat ──
  {
    id: "ast-017", code: "SMBR-ALB-001",
    name: "Excavator Komatsu PC200-8",
    description: "Excavator penggalian area tambang kapur.",
    condition: "BAIK", status: "AKTIF",
    imageUrl: null,
    purchaseDate: "2019-05-12", purchasePrice: 1850000000,
    categoryId: "cat-5", category: categories[4],
    locationId: "loc-5", location: locations[4],
  },
  {
    id: "ast-018", code: "SMBR-ALB-002",
    name: "Bulldozer Caterpillar D6R",
    description: "Bulldozer perataan lahan tambang.",
    condition: "RUSAK_RINGAN", status: "DIPERBAIKI",
    imageUrl: null,
    purchaseDate: "2018-11-30", purchasePrice: 2400000000,
    categoryId: "cat-5", category: categories[4],
    locationId: "loc-5", location: locations[4],
  },
  {
    id: "ast-019", code: "SMBR-ALB-003",
    name: "Dump Truck Volvo FMX 440",
    description: "Truck pengangkut batu kapur dari tambang ke pabrik.",
    condition: "BAIK", status: "AKTIF",
    imageUrl: null,
    purchaseDate: "2021-02-25", purchasePrice: 1650000000,
    categoryId: "cat-5", category: categories[4],
    locationId: "loc-5", location: locations[4],
  },
  {
    id: "ast-020", code: "SMBR-ALB-004",
    name: "Wheel Loader Komatsu WA380",
    description: "Wheel loader pengangkat material di gudang dan pabrik.",
    condition: "BAIK", status: "AKTIF",
    imageUrl: null,
    purchaseDate: "2020-09-08", purchasePrice: 1350000000,
    categoryId: "cat-5", category: categories[4],
    locationId: "loc-4", location: locations[3],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

export const conditionLabel: Record<AssetCondition, string> = {
  BAIK:          "Baik",
  RUSAK_RINGAN:  "Rusak Ringan",
  RUSAK_BERAT:   "Rusak Berat",
  TIDAK_AKTIF:   "Tidak Aktif",
};

export const conditionColor: Record<AssetCondition, { bg: string; text: string }> = {
  BAIK:         { bg: "#135d3a1a", text: "#135d3a" },
  RUSAK_RINGAN: { bg: "#fef3c71a", text: "#d97706"  },
  RUSAK_BERAT:  { bg: "#d7362d1a", text: "#d7362d"  },
  TIDAK_AKTIF:  { bg: "#94a3b81a", text: "#64748b"  },
};

export const statusLabel: Record<AssetStatus, string> = {
  AKTIF:       "Aktif",
  DIPINJAM:    "Dipinjam",
  DIPERBAIKI:  "Diperbaiki",
  DIHAPUS:     "Dihapus",
};

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style:    "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getAssetsByCategory(categorySlug: string): Asset[] {
  const cat = categories.find((c) => c.slug === categorySlug);
  if (!cat) return assets;
  return assets.filter((a) => a.categoryId === cat.id);
}

export function searchAssets(query: string): Asset[] {
  const q = query.toLowerCase().trim();
  if (!q) return assets;
  return assets.filter(
    (a) =>
      a.name.toLowerCase().includes(q) ||
      a.code.toLowerCase().includes(q) ||
      a.category.name.toLowerCase().includes(q) ||
      a.location.name.toLowerCase().includes(q)
  );
}
