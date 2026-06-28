import { Check, Headset, ChevronRight } from "lucide-react"
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
    <section className="relative overflow-hidden bg-[#fafafa] pt-4 pb-8 md:pt-24 md:pb-8">
      <div className="container-lp relative flex flex-col items-center">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 text-sm font-extrabold tracking-wider text-gold">
            <span className="h-px w-6 bg-gold" aria-hidden />
            セルフチェック
            <span className="h-px w-6 bg-gold" aria-hidden />
          </span>
          <h2 className="text-[28px] font-extrabold leading-tight tracking-tight text-navy md:text-4xl">
            その法人、まだ価値が<br className="md:hidden" />残っているかもしれません
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-ink-light">
            以下の項目にチェックして、あなたの法人の状況を確認してみてください。
          </p>
        </div>

        {/* 診断ブロック */}
        <div className="mx-auto mt-6 w-full max-w-[860px] md:mt-10">
          <div className="w-full rounded-lg border border-navy/15 px-5 py-2 md:px-12 md:py-6">
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
                  <span className="text-base font-extrabold text-navy md:text-[26px]">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 査定対象CTAカード */}
        <div className="relative mx-auto mt-8 w-full max-w-[720px] overflow-hidden rounded-lg border-2 border-[#D4AF37] bg-[#FFF8EE] px-4 py-4 md:mt-12 md:p-8">
          {/* 右上バッジ（PCのみ） */}
          <div className="absolute right-3 top-3 z-10 hidden md:right-6 md:top-6 md:block">
            <div className="flex h-[80px] w-[80px] flex-col items-center justify-center whitespace-nowrap rounded-lg bg-[#9a7a3a] text-center text-[11px] font-extrabold leading-snug tracking-tight text-white md:h-[150px] md:w-[150px] md:text-[15px]">
              まずは価値を
              <br />
              確認してみませんか？
            </div>
            <span className="absolute -bottom-1 left-2 h-2.5 w-2.5 rounded-lg bg-[#9a7a3a]" aria-hidden />
            <span className="absolute -bottom-3.5 left-0 h-1.5 w-1.5 rounded-lg bg-[#9a7a3a]" aria-hidden />
          </div>

          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-3 text-center md:gap-5">
            {/* 赤ピル */}
            <div className="relative">
              <span className="inline-block rounded-lg bg-[#b03023] px-6 py-2 text-[15px] font-extrabold text-white md:text-base">
                1つでも当てはまる方は
              </span>
              <span
                className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-x-[7px] border-t-[8px] border-x-transparent border-t-[#b03023]"
                aria-hidden
              />
            </div>

            {/* 査定対象です！ */}
            <div className="relative inline-flex items-end justify-center gap-1 pt-1">
              <svg
                className="pointer-events-none absolute -left-4 -top-2 h-11 w-11 text-[#D4AF37] hidden md:block md:-left-7 md:-top-3 md:h-16 md:w-16"
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
                <span className="text-[32px] font-black text-[#b03023] md:text-[56px]">査定対象</span>
                <svg
                  className="absolute -bottom-3 left-0 h-[10px] w-full md:-bottom-4 md:h-[14px]"
                  viewBox="0 0 320 16"
                  preserveAspectRatio="none"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M6 9 C 70 3, 150 12, 230 6 C 270 3, 300 7, 314 8"
                    stroke="#9a7a3a"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="text-[24px] font-black leading-none text-[#1e3a5f] md:text-[44px]">です！</span>
            </div>

            {/* 補足文 */}
            <p className="text-[15px] leading-[1.85] text-[#1e3a5f] md:text-base">
              解散予定・休眠中・赤字・負債があっても、売却できる可能性があります。
              <br className="hidden md:block" />
              専門家が<span className="font-extrabold text-[#b03023]">無料</span>で、あなたの法人の価値を確認します。
            </p>

            {/* CTAボタン */}
            <div className="mt-1 flex w-full max-w-xl items-stretch overflow-hidden rounded-lg">
              <a
                href="#contact"
                className="flex flex-col items-center justify-center bg-[#1e3a5f] px-6 py-2 text-center text-sm font-extrabold leading-tight text-white md:py-4"
              >
                <span className="md:hidden">無料<br />査定</span>
                <span className="hidden md:inline">査定は<br />無料です</span>
              </a>
              <a
                href="#contact"
                className="flex flex-1 items-center justify-center gap-2.5 bg-[#9a7a3a] py-2 text-[15px] font-extrabold text-white transition-[filter] hover:brightness-95 md:gap-2 md:py-4 md:text-lg"
              >
                <Headset className="h-[18px] w-[18px] md:h-5 md:w-5" strokeWidth={2} />
                <span className="md:hidden">相談する</span>
                <span className="hidden md:inline">まずはお気軽にご相談ください</span>
                <ChevronRight className="hidden h-5 w-5 md:block" strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
