export default function HairmakePricePage() {
  const menus = [
    {
      category: "ヘアセット",
      items: [
        { name: "ヘアセット（シンプル）", price: "¥3,300〜" },
        { name: "ヘアセット（アップスタイル）", price: "¥4,400〜" },
        { name: "ヘアセット（編み込み）", price: "¥4,400〜" },
        { name: "ヘアセット（ハーフアップ）", price: "¥3,850〜" },
      ],
    },
    {
      category: "メイク",
      items: [
        { name: "フルメイク", price: "¥4,400〜" },
        { name: "部分メイク", price: "¥2,200〜" },
      ],
    },
    {
      category: "着付け",
      items: [
        { name: "浴衣着付け", price: "¥3,300〜" },
        { name: "振袖着付け", price: "¥8,800〜" },
        { name: "訪問着着付け", price: "¥6,600〜" },
      ],
    },
    {
      category: "ブライダル",
      items: [
        { name: "ブライダルヘアメイク（お試し）", price: "¥11,000〜" },
        { name: "ブライダルヘアメイク（本番）", price: "要相談" },
      ],
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <p className="text-xs tracking-widest text-gray-400 mb-2 uppercase">Hairmake</p>
      <h1 className="text-2xl font-medium mb-12 tracking-wide">Price</h1>

      <div className="space-y-12">
        {menus.map((section) => (
          <div key={section.category}>
            <h2 className="text-xs tracking-widest text-gray-500 mb-4 pb-2 border-b border-gray-200 uppercase">
              {section.category}
            </h2>
            <ul className="space-y-3">
              {section.items.map((item) => (
                <li key={item.name} className="flex justify-between items-baseline py-2">
                  <span className="text-sm">{item.name}</span>
                  <span className="text-sm font-medium tabular-nums">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 p-6 bg-gray-50 text-xs text-gray-500 leading-relaxed">
        <p>※ 料金はすべて税込みです。</p>
        <p>※ ヘアの長さ・量・ご要望によって料金が変わる場合があります。</p>
        <p>※ 出張料金は別途ご相談ください。</p>
      </div>
    </div>
  );
}
