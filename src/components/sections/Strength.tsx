import imgNetwork from "../../assets/strength/strength-network.png"
import imgSpeed from "../../assets/strength/strength-speed.png"
import imgPotential from "../../assets/strength/strength-potential.png"

type StrengthItem = {
  no: string
  subLabel: string
  num: string
  numSuffix?: string
  numColor?: string
  heading: string
  body: string
  footnote?: string
  image: string
  reverse: boolean
  bg: string
}

const items: StrengthItem[] = [
  {
    no: "01",
    subLabel: "対応実績",
    num: "1,000",
    numSuffix: "件以上",
    heading: "独自のネットワーク",
    body: "赤字法人や休眠法人でも、価値が残っているケースがあります。弊社では独自のネットワークを活用し、法人を必要としている買い手様とのマッチングを行っています。需要を見出す提案力が、高値での譲渡につながる理由のひとつです。",
    image: imgNetwork,
    reverse: false,
    bg: "#faf9f6",
  },
  {
    no: "02",
    subLabel: "最短査定",
    num: "即日",
    heading: "圧倒的なスピード対応",
    body: "法人売却はタイミングも重要です。全国オンライン対応により、ご相談から査定までスピーディーに対応。最短即日で方向性をご提案いたします。",
    image: imgSpeed,
    reverse: true,
    bg: "#f0ece3",
  },
  {
    no: "03",
    subLabel: "他社断られ案件の成約率",
    num: "89",
    numSuffix: "%",
    heading: "他社で断られた法人も対応",
    body: "赤字・債務超過・長期休眠・売上ゼロ。「こんな状態では無理」と思っている法人ほど、意外な価値が残っているケースがあります。他社で断られた案件の89%が、弊社のネットワークで成約に至っています。",
    footnote: "※2024年1月〜2026年5月の当社実績に基づく（他社で一度断られた案件を対象）",
    image: imgPotential,
    reverse: true,
    bg: "#faf9f6",
  },
]

export function Strength() {
  return (
    <section>
      {/* セクションヘッダー */}
      <div className="bg-[#faf9f6] pt-12 pb-4">
        <div className="container-lp flex flex-col items-center text-center">
          <span className="mb-3 inline-flex items-center gap-2 text-sm font-extrabold tracking-wider text-gold">
            <span className="h-px w-6 bg-gold" aria-hidden />
            なぜ高値で・赤字でも・スピーディーに買い取れるのか
            <span className="h-px w-6 bg-gold" aria-hidden />
          </span>
          <h2 className="text-4xl font-black leading-tight tracking-tight text-[#1e3a5f] md:text-5xl">
            確固たる3つの強み
          </h2>
        </div>
      </div>

      {items.map((item) => (
        <div key={item.no} style={{ backgroundColor: item.bg }}>
          {/* PC: 左右2カラム / SP: flex縦積み＋order制御 */}
          <div
            className="strength-item-grid mx-auto grid grid-cols-1 items-center"
            style={{
              maxWidth: "1200px",
              padding: "24px 32px",
              gridTemplateColumns: item.reverse ? "40% 60%" : "60% 40%",
            }}
          >
            {/* テキストブロック（SP: display:contentsで子要素をflexの直接子に） */}
            <div className={`strength-text-wrap flex flex-col px-6 py-4 ${item.reverse ? "md:order-2" : "md:order-1"}`}>

              {/* ① 数字＋見出し（SP: order 1） */}
              <div className="strength-num-head">
                <div className="mb-2 flex items-baseline gap-1">
                  <span
                    style={{
                      fontSize: "72px",
                      fontWeight: 900,
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                      color: item.numColor ?? "#b03023",
                    }}
                  >
                    {item.num}
                  </span>
                  {item.numSuffix && (
                    <span
                      style={{
                        fontSize: "28px",
                        fontWeight: 900,
                        color: item.numColor ?? "#b03023",
                      }}
                    >
                      {item.numSuffix}
                    </span>
                  )}
                </div>
                <div className="mb-[10px] flex items-center gap-3">
                  <span
                    className="text-4xl font-bold leading-none"
                    style={{ color: "#D4AF37" }}
                  >
                    {item.no}
                  </span>
                  <h3 className="text-3xl font-bold leading-snug text-[#1e3a5f]">
                    {item.heading}
                  </h3>
                </div>
              </div>

              {/* ② 本文＋注釈（SP: order 3、画像の後） */}
              <div className="strength-body">
                <p className="text-base font-normal text-[#1e3a5f]" style={{ lineHeight: 1.85 }}>
                  {item.body}
                </p>
                {item.footnote && (
                  <p
                    className="text-[11px] leading-relaxed text-[#1e3a5f]/50"
                    style={{ marginTop: "8px" }}
                  >
                    {item.footnote}
                  </p>
                )}
              </div>
            </div>

            {/* 画像ブロック（SP: order 2、見出しと本文の間） */}
            <div
              className={`strength-img-wrap flex items-center justify-center px-4 py-4 ${item.reverse ? "md:order-1" : "md:order-2"}`}
            >
              <img
                src={item.image}
                alt={item.heading}
                className="w-full object-contain"
                style={{ maxWidth: "238px" }}
              />
            </div>
          </div>
        </div>
      ))}

      <style>{`
        @media (max-width: 767px) {

          /* アイテム全体をflexに変えてorder制御 */
          .strength-item-grid {
            display: flex !important;
            flex-direction: column !important;
            padding: 16px 14px 22px !important;
            margin: 0 12px 16px !important;
            background: #ffffff !important;
            border: 1px solid #e8e0d8 !important;
            border-radius: 12px !important;
          }

          /* テキストラッパーをflexの流れに溶け込ませる */
          .strength-text-wrap {
            display: contents !important;
          }

          /* 数字＋バッジ＋見出しブロック：SPでflex-wrapコンテナに変換 */
          .strength-num-head {
            order: 1;
            padding: 0 0 6px !important;
            display: flex !important;
            flex-wrap: wrap !important;
            align-items: baseline !important;
            gap: 4px 8px !important;
          }

          /* 内部divをcontentsに溶け込ませてflexの直接子にする */
          .strength-num-head > div {
            display: contents !important;
          }

          /* no-badge（01/02/03）：行の先頭（ゴールド） */
          .strength-num-head > div:last-child > span:first-child {
            font-size: 22px !important;
            order: 1 !important;
          }

          /* メイン数字（1,000 / 即日 / 89）：バッジの右（赤） */
          .strength-num-head > div:first-child > span:first-child {
            font-size: 47px !important;
            line-height: 1 !important;
            order: 2 !important;
          }

          /* 数字サフィックス（件以上 / %）：数字の直後 */
          .strength-num-head > div:first-child > span:last-child:not(:first-child) {
            font-size: 22px !important;
            order: 3 !important;
          }

          /* h3タイトル：flex-basis 100%で次行全幅 → 1行表示を確保 */
          .strength-num-head h3 {
            font-size: 26px !important;
            line-height: 1.3 !important;
            order: 4 !important;
            flex-basis: 100% !important;
            margin-top: 2px !important;
          }

          /* 画像：見出しの次 */
          .strength-img-wrap {
            order: 2;
            padding: 2px 0 8px !important;
          }
          .strength-img-wrap img {
            max-width: 155px !important;
            margin: 0 auto !important;
          }

          /* 本文：画像の後 */
          .strength-body {
            order: 3;
          }
        }
      `}</style>
    </section>
  )
}
