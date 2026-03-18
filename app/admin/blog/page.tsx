"use client";

import { useState } from "react";
import Link from "next/link";

type Post = {
  id: string;
  title: string;
  published: boolean;
  createdAt: string;
};

const mockPosts: Post[] = [
  { id: "1", title: "ヘアセットのコツ〜普段使いに♡", published: true, createdAt: "2026-03-01" },
  { id: "2", title: "成人式ヘアセット事例まとめ", published: true, createdAt: "2026-02-15" },
  { id: "3", title: "下書き記事", published: false, createdAt: "2026-02-10" },
];

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<Post[]>(mockPosts);

  const togglePublish = (id: string) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, published: !p.published } : p))
    );
    // TODO: Firestoreを更新
  };

  const handleDelete = (id: string) => {
    if (!confirm("削除しますか？")) return;
    setPosts((prev) => prev.filter((p) => p.id !== id));
    // TODO: Firestoreから削除
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-xl font-medium mb-1">ブログ管理</h1>
          <p className="text-xs text-gray-500">記事の作成・編集・公開設定</p>
        </div>
        <Link
          href="/admin/blog/new"
          className="bg-black text-white text-xs px-4 py-2 hover:bg-gray-800 transition-colors"
        >
          + 新規作成
        </Link>
      </div>

      <ul className="divide-y divide-gray-100">
        {posts.map((post) => (
          <li key={post.id} className="bg-white flex items-center justify-between px-4 py-4">
            <div className="flex items-center gap-4">
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  post.published ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
                }`}
              >
                {post.published ? "公開中" : "下書き"}
              </span>
              <div>
                <p className="text-sm">{post.title}</p>
                <p className="text-xs text-gray-400">{post.createdAt}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => togglePublish(post.id)}
                className="text-xs text-gray-500 hover:text-black border border-gray-200 px-3 py-1 transition-colors"
              >
                {post.published ? "非公開にする" : "公開する"}
              </button>
              <button
                onClick={() => handleDelete(post.id)}
                className="text-xs text-red-500 hover:text-red-700"
              >
                削除
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
