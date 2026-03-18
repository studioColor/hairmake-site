import Link from "next/link";

const sections = [
  { label: "スライドショー管理", href: "/admin/slides", desc: "トップのヒーロー画像を追加・削除・並び替え" },
  { label: "ギャラリー管理", href: "/admin/gallery", desc: "hair / 着付けの写真を追加・削除" },
  { label: "料金メニュー管理", href: "/admin/menu", desc: "ヘアメイク・まつげのメニューと料金を編集" },
  { label: "ブログ管理", href: "/admin/blog", desc: "記事の作成・編集・公開/非公開" },
];

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-xl font-medium mb-2">ダッシュボード</h1>
      <p className="text-xs text-gray-500 mb-10">Studio color 管理画面</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {sections.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="block bg-white border border-gray-200 p-6 hover:border-black transition-colors group"
          >
            <h2 className="text-sm font-medium mb-2 group-hover:underline">{s.label}</h2>
            <p className="text-xs text-gray-500">{s.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
