export default function SchoolPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <p className="text-xs tracking-widest text-gray-400 mb-2 uppercase">Hair Set</p>
      <h1 className="text-2xl font-medium mb-4 tracking-wide">School</h1>

      <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-12">
        <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
        <span className="text-xs tracking-wide text-gray-600">OPEN準備中♡</span>
      </div>

      <div className="space-y-8 text-sm text-gray-600 leading-loose">
        <p>
          東京都立川市で、ヘアセットの資格が取れるスクールを開校準備中です。
        </p>
        <p>
          プロのヘアメイクアーティストとして活躍したい方、副業・独立を考えている方、
          自分や家族のヘアセットを上手にできるようになりたい方など、
          さまざまなニーズに合わせたカリキュラムを用意しています。
        </p>

        <div className="border border-gray-200 p-6">
          <h2 className="text-xs tracking-widest text-gray-500 mb-4 uppercase">予定コース</h2>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-gray-300">—</span>
              <span>基礎コース（ヘアセット入門）</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-300">—</span>
              <span>プロコース（資格取得対応）</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-300">—</span>
              <span>ブライダルコース</span>
            </li>
          </ul>
        </div>

        <p className="text-xs text-gray-400">
          開校情報はInstagram・LINEにてお知らせします。お楽しみに♡
        </p>
      </div>
    </div>
  );
}
