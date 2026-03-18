import Link from "next/link";

// 本番はFirestoreからデータ取得
const placeholderPosts = [
  { id: "1", title: "ヘアセットのコツ〜普段使いに♡", createdAt: "2026-03-01" },
  { id: "2", title: "成人式ヘアセット事例まとめ", createdAt: "2026-02-15" },
  { id: "3", title: "春のトレンドスタイルご紹介", createdAt: "2026-02-01" },
];

export default function BlogPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <p className="text-xs tracking-widest text-gray-400 mb-2 uppercase">Studio color</p>
      <h1 className="text-2xl font-medium mb-12 tracking-wide">Blog</h1>

      <ul className="divide-y divide-gray-100">
        {placeholderPosts.map((post) => (
          <li key={post.id}>
            <Link
              href={`/blog/${post.id}`}
              className="flex items-start justify-between py-5 hover:opacity-60 transition-opacity group"
            >
              <div>
                <p className="text-sm mb-1">{post.title}</p>
                <p className="text-xs text-gray-400">{post.createdAt}</p>
              </div>
              <span className="text-gray-300 group-hover:text-gray-600 transition-colors ml-4 flex-shrink-0">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
