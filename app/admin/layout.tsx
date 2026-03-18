import Link from "next/link";

const adminNav = [
  { label: "ダッシュボード", href: "/admin" },
  { label: "スライドショー", href: "/admin/slides" },
  { label: "ギャラリー", href: "/admin/gallery" },
  { label: "料金メニュー", href: "/admin/menu" },
  { label: "ブログ", href: "/admin/blog" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-56 bg-black text-white flex flex-col">
        <div className="p-6 border-b border-gray-800">
          <p className="text-xs tracking-widest text-gray-400 mb-1">ADMIN</p>
          <p className="text-sm font-medium">Studio color</p>
        </div>
        <nav className="flex-1 py-4">
          {adminNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-6 py-3 text-xs tracking-wide text-gray-300 hover:text-white hover:bg-gray-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-6 border-t border-gray-800">
          <Link href="/" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
            ← サイトに戻る
          </Link>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8 overflow-auto">{children}</main>
    </div>
  );
}
