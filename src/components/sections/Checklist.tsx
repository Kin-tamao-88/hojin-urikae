import { Check, Headset, ChevronRight } from "lucide-react"
import { SectionHeading } from "../ui/SectionHeading"
import checkBank from "../../assets/icons/check/icon-check-bank.png"
import checkActive from "../../assets/icons/check/icon-check-active.png"
import checkCost from "../../assets/icons/check/icon-check-cost.png"
import checkDormant from "../../assets/icons/check/icon-check-dormant.png"
import checkCash from "../../assets/icons/check/icon-check-cash.png"

const items = [
  { img: checkBank, text: "法人口座を持っている" },
  { img: checkActive, text: "現在も法人が存続している" },
  { img: checkCost, text: "維持費が負担になっている" },
  { img: checkDormant, text: "休眠状態になっている" },
  { img: checkCash, text: "少しでも現金化したい" },
]

export function Checklist() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F4F7FC] to-white pt-20 pb-8 md:pt-24 md:pb-8">
      <div className="container-lp relative flex flex-col items-center">
        <SectionHeading
          tone="dark"
          eyebrow="セルフチェック"
          title="その法人、まだ価値が残っているかもしれません"
          description="以下の項目にチェックして、あなたの法人の状況を確認してみてください。"
        />

        {/* 診断ブロック（チェックリスト自体が主役・中央・拡大 max-860） */}
        <div className="mx-auto mt-10 w-full max-w-[860px]">
          <div className="w-full rounded-3xl border border-navy/15 px-5 py-2 shadow-[0_12px_44px_rgba(27,42,74,0.07)] md:px-12 md:py-6">
            {/* 項目群は中央寄せの1ブロック（左右余白を均等化・左端は揃える） */}
            <ul className="mx-auto flex w-full max-w-fit flex-col divide-y divide-navy/[0.12]">
              {items.map((item) => (
                <li key={item.text} className="flex items-center gap-2.5 py-3 md:gap-6 md:py-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1e3a5f] text-white md:h-[52px] md:w-[52px]">
                    <Check className="h-[18px] w-[18px] md:h-7 md:w-7" strokeWidth={3} />
                  </span>
                  <img
                    src={item.img}
                    alt=""
                    aria-hidden
                    className="h-[44px] w-[44px] shrink-0 object-contain md:h-[100px] md:w-[100px]"
                  />
                  <span className="text-base font-bold text-navy md:text-[26px]">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ===== CTAセクション（チェックリスト下・余白48px・同幅 max-680・中央揃え） ===== */}
        <div className="relative mx-auto mt-12 w-full max-w-[720px] overflow-hidden rounded-2xl border-2 border-[#D4AF37] bg-[#FFF8EE] px-5 py-8 md:p-8">
          {/* ⑤ 右上：金の丸バッジ＋3点しっぽ（モバイルは赤ピルとの重なり回避のため非表示） */}
          <div className="absolute right-3 top-3 z-10 hidden md:right-6 md:top-6 md:block">
            <div className="flex h-[80px] w-[80px] flex-col items-center justify-center whitespace-nowrap rounded-full bg-[#C9A24A] text-center text-[11px] font-bold leading-snug tracking-tight text-white shadow-[0_6px_16px_rgba(201,162,74,0.4)] md:h-[150px] md:w-[150px] md:text-[15px]">
              まずは価値を
              <br />
              確認してみませんか？
            </div>
            <span className="absolute -bottom-1 left-2 h-2.5 w-2.5 rounded-full bg-[#C9A24A]" aria-hidden />
            <span className="absolute -bottom-3.5 left-0 h-1.5 w-1.5 rounded-full bg-[#C9A24A]" aria-hidden />
          </div>

          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
            {/* ③ 赤ピル＋下向き三角しっぽ */}
            <div className="relative">
              <span className="inline-block rounded-full bg-[#B03023] px-6 py-2 text-[15px] font-bold text-white md:text-base">
                1つでも当てはまる方は
              </span>
              <span
                className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-x-[7px] border-t-[8px] border-x-transparent border-t-[#B03023]"
                aria-hidden
              />
            </div>

            {/* ④ メイン見出し（左上に光線3本＋手書き金下線） */}
            <div className="relative inline-flex items-end justify-center gap-1 pt-1">
              <svg
                className="pointer-events-none absolute -left-4 -top-2 h-11 w-11 text-[#D4AF37] md:-left-7 md:-top-3 md:h-16 md:w-16"
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                aria-hidden
              >
                <path d="M10 40 L4 28" />
                <path d="M20 30 L15 13" />
                <path d="M33 26 L35 8" />
              </svg>
              <span className="relative leading-none">
                <span className="text-[40px] font-black text-[#B03023] md:text-[56px]">査定対象</span>
                <svg
                  className="absolute -bottom-3 left-0 h-[10px] w-full md:-bottom-4 md:h-[14px]"
                  viewBox="0 0 320 16"
                  preserveAspectRatio="none"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M6 9 C 70 3, 150 12, 230 6 C 270 3, 300 7, 314 8"
                    stroke="#F2C94C"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="text-[30px] font-black leading-none text-[#0B1D3A] md:text-[44px]">です！</span>
            </div>

            {/* ⑥ 補足文 */}
            <p className="text-[14px] leading-[1.8] text-[#4A5568] md:text-base">
              解散予定・休眠中・赤字・負債があっても、売却できる可能性があります。
              <br className="hidden md:block" />
              専門家が<span className="font-bold text-[#B03023]">無料</span>で、あなたの法人の価値を確認します。
            </p>

            {/* CTAボタン */}
            <div className="mt-1 flex w-full max-w-xl items-stretch overflow-hidden rounded-full shadow-[0_10px_24px_rgba(11,29,58,0.25)]">
              <a
                href="#contact"
                className="flex flex-col items-center justify-center bg-[#0B1D3A] px-6 py-4 text-center text-sm font-bold leading-tight text-white"
              >
                査定は
                <br />
                無料です
              </a>
              <a
                href="#contact"
                className="flex flex-1 items-center justify-center gap-1.5 bg-[#C9A24A] py-4 text-[15px] font-bold text-white transition-[filter] hover:brightness-95 md:gap-2 md:text-lg"
              >
                <Headset className="h-[18px] w-[18px] md:h-5 md:w-5" strokeWidth={2} />
                まずはお気軽にご相談ください
                <ChevronRight className="hidden h-5 w-5 md:block" strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
