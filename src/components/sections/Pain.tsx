import { Check, Shield } from "lucide-react"
import painCost from "../../assets/icons/pain/icon-pain-cost.png"
import painDecline from "../../assets/icons/pain/icon-pain-decline.png"
import painRestricted from "../../assets/icons/pain/icon-pain-restricted.png"
import painProcedure from "../../assets/icons/pain/icon-pain-procedure.png"

type Seg = { t: string; hi?: boolean }

/* 悩みアイコンは PNG 画像（assets/icons/pain）へ置換済み */
const pains: { img: string; line1: string; line2: Seg[]; desc: string }[] = [
  {
    img: painCost,
    line1: "会社を使っていないのに",
    line2: [{ t: "毎年" }, { t: "維持費", hi: true }, { t: "だけが掛かる" }],
    desc: "法人住民税や決算費用など、使っていなくても赤字続きになる",
  },
  {
    img: painDecline,
    line1: "赤字続きで",
    line2: [{ t: "事業継続", hi: true }, { t: "が難しい" }],
    desc: "赤字続きで、資金や借入の見通しが立たない",
  },
  {
    img: painRestricted,
    line1: "税金や借入金の問題で",
    line2: [{ t: "身動き", hi: true }, { t: "が取れない" }],
    desc: "税金の滞納や借入金の問題で、事業の身動きが取れない",
  },
  {
    img: painProcedure,
    line1: "解散・清算の手続きが",
    line2: [{ t: "面倒", hi: true }, { t: "で進められない" }],
    desc: "解散・清算の手続きが面倒で、やるべきことが進められない",
  },
]

const CARD_SHADOW = "0 4px 20px rgba(0,0,0,0.06)"

export function Pain() {
  return (
    <section className="bg-white pt-12 pb-10 md:py-24">
      <div className="container-lp flex flex-col gap-10 md:gap-14">
        {/* ───────── セクション見出し ───────── */}
        <div className="flex flex-col items-center gap-3 text-center md:gap-5">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 rounded-lg bg-cta" aria-hidden />
            <span className="rounded-lg bg-navy px-6 py-2 text-sm font-extrabold tracking-wide text-white">
              こんなお悩みありませんか？
            </span>
            <span className="h-[2px] w-8 rounded-lg bg-cta" aria-hidden />
          </div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-navy md:text-[40px]">
            <span className="md:hidden">こんな<span className="text-cta">お悩み</span>ありませんか？</span>
            <span className="hidden md:inline">会社を運営していて、こんな<span className="text-cta">お悩み</span>はありませんか？</span>
          </h2>
        </div>

        {/* ───────── 悩みカード（PC 2×2グリッド） ───────── */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
          {pains.map((pain) => (
            <div
              key={pain.line1}
              className="flex items-start gap-3 rounded-lg border border-navy/10 bg-white p-4 md:items-center md:gap-6 md:p-7"
              style={{ boxShadow: CARD_SHADOW }}
            >
              {/* アイコン：SP固定44px / PC 35% */}
              <div className="flex h-[56px] w-[44px] shrink-0 items-center justify-center rounded-lg bg-skyblue md:aspect-[5/6] md:h-auto md:w-[35%]">
                <img
                  src={pain.img}
                  alt=""
                  aria-hidden
                  className="h-[36px] w-auto object-contain md:h-[88px]"
                />
              </div>

              <div className="flex min-w-0 flex-1 flex-col">
                <h3>
                  <span className="flex items-center gap-2">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-lg bg-cta md:h-6 md:w-6">
                      <Check className="h-3 w-3 text-white md:h-4 md:w-4" strokeWidth={3} />
                    </span>
                    <span className="text-[13px] font-extrabold text-navy md:text-[17px]">{pain.line1}</span>
                  </span>
                  <span className="mt-1.5 block text-[18px] font-black leading-tight text-navy md:mt-2 md:text-[22px]">
                    {pain.line2.map((seg, i) =>
                      seg.hi ? (
                        <span key={i} className="text-[22px] text-cta md:text-[27px]">
                          {seg.t}
                        </span>
                      ) : (
                        <span key={i}>{seg.t}</span>
                      )
                    )}
                  </span>
                </h3>

                <span className="my-2 h-px w-full bg-navy/10 md:my-4" aria-hidden />

                <p className="text-[13px] leading-[1.8] text-ink md:text-[16px]">{pain.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ───────── 下部CTA ───────── */}
        <div
          className="mx-auto flex max-w-3xl items-center gap-4 rounded-lg border border-gold/40 bg-[#fff8ee] px-5 py-5 md:gap-5 md:border-navy/25 md:bg-white md:px-8 md:py-6"
          style={{ boxShadow: CARD_SHADOW }}
        >
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center md:h-12 md:w-12">
            <Shield className="h-10 w-10 text-navy md:h-12 md:w-12" strokeWidth={1.75} />
            <Check className="absolute h-[15px] w-[15px] text-cta md:h-[18px] md:w-[18px]" strokeWidth={3.5} style={{ marginTop: "-3px" }} />
          </span>
          <div className="text-left">
            <p className="text-[13px] text-ink md:text-[15px]">ひとつでも当てはまる方は、解散する前に</p>
            <p className="text-[17px] font-extrabold leading-snug text-navy md:text-[20px]">
              <span className="text-cta">「法人売却」という選択肢</span>
              をご検討ください。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
