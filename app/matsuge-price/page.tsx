export default function MatsugePricePage() {
  const menus = [
    {
      category: "まつげエクステ",
      items: [
        { name: "80本", price: "¥4,400〜" },
        { name: "100本", price: "¥5,500〜" },
        { name: "120本", price: "¥6,600〜" },
        { name: "オフのみ", price: "¥1,100〜" },
      ],
    },
    {
      category: "まつげパーマ",
      items: [
        { name: "まつげパーマ（上のみ）", price: "¥4,400〜" },
        { name: "まつげパーマ（上下）", price: "¥6,600〜" },
      ],
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <p className="text-xs tracking-widest text-gray-400 mb-2 uppercase">Eyelash</p>
      <h1 className="text-2xl font-medium mb-12 tracking-wide">まつげ Price</h1>

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
        <p>※ 使用するグルーや本数によって料金が変わる場合があります。</p>
      </div>
    </div>
  );
}
