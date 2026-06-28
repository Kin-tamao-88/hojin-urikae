import compareCost from "../../assets/icons/compare/icon-compare-cost.png"
import compareTax from "../../assets/icons/compare/icon-compare-tax.png"
import compareValueLoss from "../../assets/icons/compare/icon-compare-value-loss.png"
import compareDiagnosis from "../../assets/icons/compare/icon-compare-diagnosis.png"
import compareCash from "../../assets/icons/compare/icon-compare-cash.png"
import compareProfit from "../../assets/icons/compare/icon-compare-profit.png"

/* ───────── 装飾アイコン（共通：stroke=currentColor で親の色を継承） ───────── */
type IconProps = { className?: string }
const svgBase = {
  viewBox: "0 0 40 40",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
}

/* 比較項目アイコンは PNG 画像（assets/icons/compare）へ置換済み。装飾用 IconBulb のみ残す。 */
function IconBulb({ className = "" }: IconProps) {
  return (
    <svg {...svgBase} className={className} aria-hidden>
      <path d="M20 6 a9 9 0 0 1 5.5 16.1 c-1.1 0.9 -1.7 1.9 -1.8 3.1 h-7.4 c-0.1 -1.2 -0.7 -2.2 -1.8 -3.1 A9 9 0 0 1 20 6 Z" />
      <line x1="16.5" y1="29.5" x2="23.5" y2="29.5" />
      <line x1="17.5" y1="33" x2="22.5" y2="33" />
    </svg>
  )
}

const XMark = ({ className = "h-3.5 w-3.5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round">
    <path d="M6 6 L18 18 M18 6 L6 18" />
  </svg>
)
const CheckMark = ({ className = "h-4 w-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.5 l4.5 4.5 L19 7.5" />
  </svg>
)
const Arrow = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12 h13 M12 6 l6 6 l-6 6" />
  </svg>
)

type ItemData = { img: string; title: string; desc: string }

const dissolution: ItemData[] = [
  { img: compareCost, title: "清算費用が発生", desc: "登記抹消や清算手続きなどで、まとまった費用がかかります。" },
  { img: compareTax, title: "滞納税金の整理が必要", desc: "未納の税金や社会保険料などを精算する必要があります。" },
  { img: compareValueLoss, title: "会社価値が消滅する可能性", desc: "築いてきた会社の価値が、何も残らず失われてしまいます。" },
]

const sale: ItemData[] = [
  { img: compareDiagnosis, title: "会社価値を無料診断", desc: "まずは会社にどれだけの価値があるかを無料で診断します。" },
  { img: compareCash, title: "現金化できる可能性", desc: "解散では消えてしまう価値を、現金として受け取れます。" },
  { img: compareProfit, title: "売却益が得られる可能性", desc: "条件次第では、売却益が手元に残るケースもあります。" },
]


// 比較項目アイコンの円背景・画像サイズは左右で統一（カード間でズレないこと）
const COMPARE_ICON_RING = "flex h-[68px] w-[68px] items-center justify-center rounded-lg bg-white md:h-[104px] md:w-[104px]"
const COMPARE_ICON_IMG = "h-[52px] w-[52px] object-contain md:h-[82px] md:w-[82px]"

function CompareItem({ data, tone }: { data: ItemData; tone: "neg" | "pos" }) {
  const neg = tone === "neg"
  if (neg) {
    return (
      <li className="flex flex-1 items-center gap-3 py-4 md:gap-5 md:py-6">
        <div className="relative shrink-0">
          <span className={`${COMPARE_ICON_RING} border-2 border-ink-muted/25`}>
            <img src={data.img} alt="" aria-hidden className={COMPARE_ICON_IMG} />
          </span>
          <span className="absolute -left-1 -top-1 flex h-7 w-7 items-center justify-center rounded-lg bg-ink-muted text-white">
            <XMark />
          </span>
        </div>
        <div>
          <p className="text-[17px] font-extrabold leading-tight text-ink md:text-[22px]">{data.title}</p>
          <p className="mt-1 text-[12px] font-normal leading-relaxed text-ink-light md:mt-1.5 md:text-[14px]">{data.desc}</p>
        </div>
      </li>
    )
  }
  return (
    <li className="flex flex-1 items-center gap-3 py-4 md:gap-5 md:py-6">
      <div className="relative shrink-0">
        <span className={`${COMPARE_ICON_RING} border-2 border-gold/70`}>
          <img src={data.img} alt="" aria-hidden className={COMPARE_ICON_IMG} />
        </span>
        <span className="absolute -left-1 -top-1 flex h-8 w-8 items-center justify-center rounded-lg bg-gold text-white ">
          <CheckMark />
        </span>
      </div>
      <div>
        <p className="text-[17px] font-extrabold leading-tight text-gold-dark md:text-[22px]">{data.title}</p>
        <p className="mt-1 text-[12px] font-normal leading-relaxed text-navy md:mt-1.5 md:text-[15px]">{data.desc}</p>
      </div>
    </li>
  )
}

export function Comparison() {
  return (
    <section className="bg-white pt-1 pb-10 md:pt-1 md:pb-24">
      <div className="container-lp flex flex-col gap-10">
        {/* 見出しは直前の Hope セクションがリードを兼ねるため、当セクションのヘッダーは持たない */}

        {/* ───────── 比較（左：解散 / 右：法人売却）＋ 中央VS ───────── */}
        {/* ⑤ Hope の補強材料として機能させるため、比較表は約10%スリム化（max-w）して中央寄せ */}
        <div className="relative mx-auto grid w-full max-w-[1010px] grid-cols-1 items-stretch gap-8 md:grid-cols-2 md:gap-16">
          {/* 左：解散する場合（弱め・淡色） */}
          <div className="flex flex-col overflow-hidden rounded-lg border border-navy/[0.08] bg-slate-bg/70">
            <div className="bg-navy/75 py-3 text-center text-[18px] font-extrabold tracking-wide text-white/90 md:py-4">
              解散する場合
            </div>
            {/* 比較軸 */}
            <div className="flex items-center justify-center gap-2 bg-ink/[0.04] py-2.5 text-[14px] font-extrabold text-ink-light">
              <span className="flex h-5 w-5 items-center justify-center rounded-lg bg-ink-muted text-white">
                <XMark className="h-3 w-3" />
              </span>
              会社の価値を失う
            </div>
            {/* 右カードの補足バー(52px)ぶんを下パディングで補い、3項目(flex-1)の等分間隔を左右で一致させる */}
            <ul className="flex flex-1 flex-col divide-y divide-ink/[0.08] px-4 pb-[52px] md:px-7">
              {dissolution.map((item) => (
                <CompareItem key={item.title} data={item} tone="neg" />
              ))}
            </ul>
          </div>

          {/* 右：法人売却の場合（強調・高級感・浮き上げ） */}
          <div className="relative z-[1] flex flex-col overflow-hidden rounded-lg border-2 border-gold bg-cream md:-translate-y-2">
            <div className="bg-gold py-3 text-center text-[20px] font-extrabold tracking-wide text-white md:py-4">
              法人売却の場合
            </div>
            {/* 比較軸 */}
            <div className="flex items-center justify-center gap-2 bg-gold/[0.18] py-2.5 text-[14px] font-extrabold text-gold-dark">
              <span className="flex h-5 w-5 items-center justify-center rounded-lg bg-gold text-white">
                <CheckMark className="h-3 w-3" />
              </span>
              会社の価値を現金化
            </div>
            <ul className="flex flex-1 flex-col divide-y divide-gold/25 px-4 md:px-7">
              {sale.map((item) => (
                <CompareItem key={item.title} data={item} tone="pos" />
              ))}
            </ul>
            {/* 価値が残る可能性の補足 */}
            <p className="border-t border-gold/30 bg-gold/[0.12] px-3 py-2.5 text-center text-[12px] font-extrabold text-gold-dark md:px-6 md:py-3.5 md:text-[14px]">
              ＼ 法人売却で価値が付くケースもあります ／
            </p>
          </div>

          {/* 中央VS（PCのみ・ネイビー背景／白文字／象徴）⑥ 左右カード中心により正確に合わせるため約12px上方向へ補正 */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-[calc(50%+12px)] md:block">
            <span className="flex h-[96px] w-[96px] items-center justify-center rounded-lg border-4 border-white bg-navy text-[38px] font-black italic text-white">
              VS
            </span>
          </div>
        </div>

        {/* ───────── 下部CTA（LP後半の重要CTA：高コントラスト） ───────── */}
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-4 rounded-lg bg-navy px-6 py-6 md:flex-row md:justify-between md:gap-6 md:px-10 md:py-9 md:text-left">
          <div className="flex items-center gap-3 md:gap-5">
            <span className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-lg bg-white/10 text-gold-light ring-1 ring-gold/40 md:h-[72px] md:w-[72px]">
              <IconBulb className="h-[22px] w-[22px] md:h-10 md:w-10" />
            </span>
            <div>
              <p className="text-[17px] font-extrabold leading-snug text-white md:text-[24px]">
                <span className="md:hidden">会社が売却できるか<br />無料で確認しませんか？</span>
                <span className="hidden md:inline">解散費用を支払う前に、<br />会社が売却できるか確認しませんか？</span>
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="flex shrink-0 items-center gap-2 rounded-lg bg-cta px-6 py-3.5 text-[16px] font-extrabold text-white transition-colors hover:bg-cta-hover md:px-9 md:py-5 md:text-[18px]"
          >
            <span className="md:hidden">無料査定する</span>
            <span className="hidden md:inline">無料で査定する</span>
            <Arrow />
          </a>
        </div>
      </div>
    </section>
  )
}
