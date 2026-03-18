import Link from "next/link";

const siteLinks = [
  { label: "Hairmake Price", href: "/hairmake-price" },
  { label: "まつげ Price", href: "/matsuge-price" },
  { label: "School", href: "/school" },
  { label: "BLOG", href: "/blog" },
  { label: "COMPANY", href: "/company" },
  { label: "お問い合わせ", href: "https://lin.ee/XXXXXXX", external: true },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-24">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-xs font-bold">Color</span>
              </div>
              <div>
                <p className="text-xs text-gray-400">東京都立川市 ヘアセット＆フォト</p>
                <p className="text-sm font-medium tracking-widest">Studio color</p>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              立川で評判のヘアセットサロン。<br />
              ヘアセットをもっと身近に♡
            </p>
          </div>

          {/* Site Map */}
          <div>
            <h3 className="text-xs tracking-widest text-gray-400 mb-4 uppercase">Site Map</h3>
            <ul className="space-y-2">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Policy */}
          <div>
            <h3 className="text-xs tracking-widest text-gray-400 mb-4 uppercase">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/company" className="text-sm text-gray-300 hover:text-white transition-colors">
                  会社情報
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-gray-300 hover:text-white transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Studio color. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
