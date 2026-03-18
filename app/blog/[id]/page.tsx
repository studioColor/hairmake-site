import Link from "next/link";

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      <Link href="/blog" className="text-xs text-gray-400 hover:text-gray-600 mb-8 inline-block">
        ← ブログ一覧
      </Link>
      <p className="text-xs text-gray-400 mb-4">2026-03-01</p>
      <h1 className="text-xl font-medium mb-12 leading-relaxed">
        ブログ記事タイトル（ID: {params.id}）
      </h1>
      <div className="prose prose-sm max-w-none text-gray-600 leading-loose">
        <p>この記事はプレースホルダーです。管理画面からFirestoreへ投稿すると表示されます。</p>
      </div>
    </div>
  );
}
