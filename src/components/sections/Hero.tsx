import {
  Building2,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react"
import heroVisual from "../../assets/hero/01-hero-visual.png"
import iconRedCompany from "../../assets/icons/01-icon-red-company.png"
import iconDebt from "../../assets/icons/01-icon-debt.png"
import iconNationwide from "../../assets/icons/01-icon-nationwide.png"
import iconProfessionalSupport from "../../assets/icons/01-icon-professional-support.png"
import laurelLeft from "../../assets/results/01-results-laurel-left.png"

const LAUREL_CLS = "h-[68px] w-[50px] shrink-0 object-contain"

function StatValue({ value, size = 40 }: { value: string; size?: number }) {
  return (
    <div className="relative flex h-[60px] w-full items-center justify-center">
      <img src={laurelLeft} alt="" aria-hidden className={`${LAUREL_CLS} absolute left-[calc(50%-160px)] top-1/2 -translate-y-1/2`} />
      <span className="whitespace-nowrap font-extrabold leading-none" style={{ color: GOLD, fontSize: `${size}px` }}>
        {value}
      </span>
      <img src={laurelLeft} alt="" aria-hidden className={`${LAUREL_CLS} absolute left-[calc(50%+110px)] top-1/2 -translate-y-1/2 -scale-x-100`} />
    </div>
  )
}

const NAVY = "#1e3a5f"
const NAVY2 = "#16304d"
const GOLD = "#E5C04A"
const RED = "#b03023"
const PAGE_BG = "#fafafa"

const cards = [
  { icon: iconRedCompany, label: "赤字法人", ok: true },
  { icon: iconDebt, label: "債務あり", ok: true },
  { icon: iconNationwide, label: "全国対応\nオンラインで完結", ok: false, highlight: true },
  { icon: iconProfessionalSupport, label: "士業連携で\n安心サポート", ok: false },
]

const stats: { value: string; label: string; note: string; vSize?: number }[] = [
  { value: "300件以上", label: "法人売却相談", note: "※2025年度実績" },
  { value: "85万円以上", label: "平均買取実績", note: "赤字・負債ありでも", vSize: 32 },
  { value: "最低10万円以上", label: "買取保証アリ", note: "過去買取実績", vSize: 28 },
  { value: "即日対応", label: "最短査定", note: "当日現金化OK", vSize: 36 },
]

export function Hero() {
  return (
    <section id="hero" style={{ background: PAGE_BG }}>
      <header className="w-full bg-white" style={{ borderBottom: `1px solid ${NAVY}1a` }}>
        <div className="mx-auto flex h-[96px] w-full max-w-[1536px] items-center justify-between px-10">
          <a href="#hero" className="flex items-center gap-3.5">
            <span className="flex h-12 w-12 items-center justify-center rounded-md" style={{ background: NAVY, color: GOLD }}>
              <Building2 className="h-7 w-7" strokeWidth={1.75} />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[22px] font-extrabold tracking-tight" style={{ color: NAVY }}>法人売却センター</span>
              <span className="text-[12px]" style={{ color: NAVY }}>法人の売却・譲渡を専門サポート</span>
            </span>
          </a>
          <div className="flex flex-col items-center leading-tight">
            <span className="text-[12px]" style={{ color: NAVY }}>お急ぎの方はお電話でご相談ください</span>
            <a href="tel:03-0000-0000" className="flex items-center gap-2 text-[32px] font-black" style={{ color: NAVY }}>
              <Phone className="h-6 w-6" strokeWidth={2.5} style={{ color: GOLD }} />
              03-XXXX-XXXX
            </a>
            <span className="text-[11px]" style={{ color: NAVY }}>受付時間 9:00-18:00（土日祝日を除く）</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <a href="#contact" className="flex items-center gap-2 rounded-md border-2 bg-white px-8 py-3.5 text-[18px] font-extrabold" style={{ color: NAVY, borderColor: NAVY }}>
              <Mail className="h-[22px] w-[22px]" strokeWidth={2} />
              無料で査定してみる
            </a>
            <span className="text-[11px] font-extrabold" style={{ color: GOLD }}>24時間受付中</span>
          </div>
        </div>
      </header>

      <div className="w-full px-[10px] py-[10px]">
        <div className="mx-auto w-full max-w-[1516px]">
          <div className="relative flex overflow-hidden bg-white">

            {/* 左カラム：約58% */}
            <div className="relative flex flex-col py-[40px] pl-[60px] pr-[16px]" style={{ flexBasis: "58%", flexShrink: 0 }}>

              <span className="inline-flex w-fit items-center rounded-lg px-[26px] py-[14px] text-[18px] font-extrabold" style={{ background: NAVY, color: GOLD }}>
                赤字・債務・休眠法人もご相談可能
              </span>

              {/* メインコピー */}
              <p className="hero-heading-lead">放置している法人を</p>

              <div style={{ paddingLeft: "40px", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                <span style={{ fontSize: "100px", fontWeight: 900, color: "#c0341a" }}>高額</span>
                <span style={{ position: "relative", display: "inline-block", fontSize: "62px", fontWeight: 900, color: "#1a1a1a", whiteSpace: "nowrap", verticalAlign: "baseline" }}>
                  <span aria-hidden style={{ position: "absolute", left: 0, right: 0, bottom: "0.05em", height: "0.28em", background: "rgba(200,165,38,0.80)", borderRadius: "1px 2px 1px 2px", transform: "rotate(-0.3deg)", zIndex: 0 }} />
                  <span style={{ position: "relative" }}>で売却しませんか？</span>
                </span>
              </div>

              <p style={{ fontSize: "22px", fontWeight: 600, lineHeight: 1.5, color: NAVY, margin: 0, marginTop: "16px" }}>
                法人売却・事業承継の専門チームが
                <br />
                全国対応・秘密厳守でサポートいたします
              </p>

              <div className="mt-[18px] flex gap-[10px]">
                {cards.map((card) => (
                  <div
                    key={card.label}
                    className="flex h-[110px] flex-1 flex-row items-center justify-center gap-[12px] rounded-lg bg-white text-left"
                    style={{ border: `1px solid ${NAVY}22` }}
                  >
                    <img src={card.icon} alt="" aria-hidden className="h-[40px] w-[40px] shrink-0 object-contain" />
                    <span className="whitespace-pre-line text-[16px] font-extrabold leading-tight" style={{ color: NAVY }}>
                      {card.label.split('\n').map((line, i) => (
                        <span key={i} style={{ display: 'block' }}>
                          {card.ok && i === 0 ? (
                            <>{line.replace('OK', '')}<span style={{ color: RED }}>OK</span></>
                          ) : card.highlight && i === 1 ? (
                            <span style={{ color: RED }}>{line}</span>
                          ) : line}
                        </span>
                      ))}
                    </span>
                  </div>
                ))}
              </div>

              <div className="relative mt-[16px] w-full">
                <a
                  href="#contact"
                  className="hero-cta-pulse relative flex h-[84px] w-full items-center justify-center rounded-lg px-[32px] text-[28px] font-extrabold text-white"
                  style={{ background: RED }}
                >
                  <span
                    className="absolute left-[8px] top-1/2 flex h-[64px] w-[64px] -translate-y-1/2 flex-col items-center justify-center rounded-md text-center text-[11px] font-extrabold leading-tight"
                    style={{ background: GOLD, color: NAVY }}
                  >
                    簡単60秒
                    <br />
                    入力
                  </span>
                  <span className="flex items-center gap-[14px]">
                    <Mail className="h-[28px] w-[28px] shrink-0" strokeWidth={2.25} />
                    <span>無料で査定してみる</span>
                  </span>
                  <ChevronRight className="absolute right-[28px] top-1/2 h-[26px] w-[26px] -translate-y-1/2" strokeWidth={2.5} />
                </a>
              </div>

              <p className="mt-[10px] text-center text-[14px]" style={{ color: NAVY }}>
                査定だけでもOK｜しつこい営業は一切いたしません
              </p>
            </div>

            {/* 右カラム */}
            <div className="relative overflow-hidden" style={{ flexBasis: "42%", flexShrink: 0 }}>
              <img
                src={heroVisual}
                alt="法人売却センター 担当者とオフィスビル群"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: "22% 18%" }}
              />
              <div
                className="pointer-events-none absolute inset-0"
                aria-hidden
                style={{
                  background: "linear-gradient(to right, #fff 0%, rgba(255,255,255,0.7) 5%, rgba(255,255,255,0) 16%)",
                  backdropFilter: "blur(1.5px)",
                  WebkitBackdropFilter: "blur(1.5px)",
                  maskImage: "linear-gradient(to right, black 0%, black 8%, transparent 18%)",
                  WebkitMaskImage: "linear-gradient(to right, black 0%, black 8%, transparent 18%)",
                }}
              />
            </div>

            {/* 査定最高額：絶対配置 */}
            <div
              className="pointer-events-none absolute left-[41%] top-[60px] z-30 flex flex-col items-start"
              style={{ transform: "rotate(-6deg)", transformOrigin: "left center" }}
              aria-hidden
            >
              <span className="whitespace-nowrap leading-none" style={{ fontSize: "22px", fontWeight: 800, color: RED }}>
                査定最高額
              </span>
              <div className="relative mt-[8px]">
                <svg
                  className="absolute -left-[10px] -bottom-[12px] -z-10 h-[28px] w-[260px]"
                  viewBox="0 0 260 50"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="heroBrush" x1="0" y1="1" x2="1" y2="0">
                      <stop offset="0%" stopColor="#E5C04A" />
                      <stop offset="100%" stopColor="#E5C04A" />
                    </linearGradient>
                  </defs>
                  <path d="M4 44 C 60 36, 130 30, 220 20 C 300 12, 360 10, 415 4 C 390 18, 330 22, 248 30 C 158 38, 72 42, 10 50 Z" fill="url(#heroBrush)" opacity="0.95" />
                  <path d="M6 42 C 80 34, 180 26, 310 16 C 360 12, 395 8, 414 5 C 400 14, 365 18, 318 22 C 200 30, 90 38, 12 47 Z" fill="#E5C04A" opacity="0.35" />
                  <path d="M30 37 C 140 30, 260 23, 380 12" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                <span className="relative whitespace-nowrap leading-none" style={{ color: RED }}>
                  <span style={{ fontSize: "52px", fontWeight: 900 }}>1,100</span>
                  <span style={{ fontSize: "32px", fontWeight: 700, marginLeft: "2px" }}>万円</span>
                  <span style={{ fontSize: "32px", fontWeight: 700, marginLeft: "4px" }}>！</span>
                </span>
              </div>
              <span className="mt-[10px] whitespace-nowrap leading-none" style={{ fontSize: "15px", fontWeight: 700, color: NAVY }}>
                当日払いの実績アリ
              </span>
            </div>

          </div>

          {/* 実績バー */}
          <div className="flex h-[150px] w-full" style={{ background: NAVY }}>
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-1 flex-col items-center justify-center gap-[6px] text-center"
                style={i > 0 ? { borderLeft: `1px solid ${NAVY2}` } : undefined}
              >
                <span className="text-[16px] font-extrabold text-white/90">{stat.label}</span>
                <StatValue value={stat.value} size={stat.vSize} />
                <span className="text-[13px] text-white/70">{stat.note || " "}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}