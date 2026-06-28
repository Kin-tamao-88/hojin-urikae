import {
  Building2,
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
    <div className="stat-value-wrap relative flex h-[60px] w-full items-center justify-center">
      <img src={laurelLeft} alt="" aria-hidden className={`stat-laurel ${LAUREL_CLS} absolute left-[calc(50%-160px)] top-1/2 -translate-y-1/2`} />
      <span className="stat-number whitespace-nowrap font-extrabold leading-none" style={{ color: GOLD, fontSize: `${size}px` }}>
        {value}
      </span>
      <img src={laurelLeft} alt="" aria-hidden className={`stat-laurel ${LAUREL_CLS} absolute left-[calc(50%+110px)] top-1/2 -translate-y-1/2 -scale-x-100`} />
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
  { icon: iconNationwide, label: "全国対応\nオンラインで完結", ok: false },
  { icon: iconProfessionalSupport, label: "士業連携で\n安心サポート", ok: false },
]

const stats: { value: string; label: string; note: string; vSize?: number }[] = [
  { value: "300件以上", label: "法人売却相談", note: "※2025年度実績" },
  { value: "85万円以上", label: "平均買取実績", note: "赤字・負債ありでも", vSize: 32 },
  { value: "最低10万円以上", label: "買取保証アリ", note: "過去買取実績", vSize: 28 },
  { value: "即日対応", label: "最短査定", note: "当日現金化OK", vSize: 36 },
]

export default function Hero() {
  return (
    <section id="hero" style={{ background: PAGE_BG }}>

      {/* ===== HEADER ===== */}
      <header className="w-full bg-white" style={{ borderBottom: `1px solid ${NAVY}1a` }}>
        <div className="mx-auto flex w-full max-w-[1536px] items-center justify-between px-4 md:px-10 h-[64px] md:h-[96px]">

          {/* ロゴ */}
          <a href="#hero" className="flex items-center gap-2 md:gap-3.5">
            <span className="flex h-9 w-9 md:h-12 md:w-12 items-center justify-center rounded-md" style={{ background: NAVY, color: GOLD }}>
              <Building2 className="h-5 w-5 md:h-7 md:w-7" strokeWidth={1.75} />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[16px] md:text-[22px] font-extrabold tracking-tight" style={{ color: NAVY }}>法人売却センター</span>
              <span className="hidden md:block text-[12px]" style={{ color: NAVY }}>法人の売却・譲渡を専門サポート</span>
            </span>
          </a>

          {/* CTAボタン */}
          <div className="flex flex-col items-center gap-1">
            <a
              href="#contact"
              className="flex items-center gap-1.5 md:gap-2 rounded-md border-2 bg-white px-3 md:px-8 py-2 md:py-3.5 text-[14px] md:text-[18px] font-extrabold"
              style={{ color: NAVY, borderColor: NAVY }}
            >
              <Mail className="h-[18px] w-[18px] md:h-[22px] md:w-[22px] shrink-0" strokeWidth={2} />
              {/* SP用テキスト */}
              <span className="header-cta-sp">無料査定</span>
              {/* PC用テキスト */}
              <span className="header-cta-pc">無料で査定してみる</span>
            </a>
            <span className="text-[11px] font-extrabold" style={{ color: GOLD }}>24時間受付中</span>
          </div>
        </div>
      </header>

      {/* ===== HERO MAIN ===== */}
      <div className="w-full px-[6px] py-[6px] md:px-[10px] md:py-[10px]">
        <div className="mx-auto w-full max-w-[1516px]">
          <div className="relative flex flex-col md:flex-row overflow-hidden bg-white">

            {/* 左カラム：テキスト */}
            <div
              className="relative flex flex-col py-[28px] px-[20px] md:py-[40px] md:pl-[60px] md:pr-[16px]"
              style={{ flexBasis: "auto" }}
            >
              {/* バッジ */}
              <span className="inline-flex w-fit items-center rounded-lg px-[16px] md:px-[26px] py-[10px] md:py-[14px] text-[14px] md:text-[18px] font-extrabold" style={{ background: NAVY, color: GOLD }}>
                赤字・債務・休眠法人もご相談可能
              </span>

              {/* メインコピー */}
              <p className="mt-3 text-[22px] md:text-[28px] font-extrabold leading-tight" style={{ color: NAVY }}>
                放置している法人を
              </p>

              {/* 高額で売却しませんか？ */}
              <div style={{ paddingLeft: "24px", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
                <span className="hero-main-copy" style={{ position: "relative", display: "inline-block", fontSize: "clamp(30px, 9vw, 72px)", fontWeight: 900, lineHeight: 1.1, color: "#1a1a1a", whiteSpace: "nowrap" }}>
                  <span aria-hidden style={{ position: "absolute", left: 0, right: 0, bottom: "0.05em", height: "0.28em", background: "rgba(200,165,38,0.80)", borderRadius: "1px 2px 1px 2px", transform: "rotate(-0.3deg)", zIndex: 0 }} />
                  <span style={{ position: "relative" }}><span style={{ color: "#c0341a" }}>高額で</span>売却しませんか？</span>
                </span>
              </div>

              {/* サブコピー：zIndex 2 で画像より確実に前面 */}
              <p className="mt-2 md:mt-3 text-[16px] md:text-[22px] font-semibold leading-relaxed" style={{ color: NAVY, position: "relative", zIndex: 2 }}>
                法人売却・事業承継の専門チームが<br />
                全国対応・秘密厳守でサポートいたします
              </p>

              {/* SP画像：zIndex 0 でテキストの後面・上端80pxで強フェード */}
              <div className="md:hidden w-full -mx-[20px]" style={{ position: "relative", width: "calc(100% + 40px)", marginTop: "-4px", zIndex: 0 }}>
                {/* 上端グラデーション：上25%を白で塗り潰し、文字エリアを完全カバー */}
                <div
                  aria-hidden
                  style={{
                    position: "absolute", top: 0, left: 0, right: 0,
                    height: "48px",
                    background: "linear-gradient(to bottom, #ffffff 0%, rgba(255,255,255,0.5) 50%, transparent 100%)",
                    pointerEvents: "none",
                    zIndex: 1,
                  }}
                />
                <img
                  src={heroVisual}
                  alt="法人売却センター 担当者とオフィスビル群"
                  className="w-full object-cover"
                  style={{ height: "205px", objectPosition: "22% 18%" }}
                />
                {/* 1,100万円バッジ（SP用） */}
                <div
                  className="absolute right-3 bottom-3 flex flex-col items-center rounded-lg px-3 py-2"
                  style={{ background: "rgba(255,255,255,0.92)", border: `2px solid ${RED}` }}
                >
                  <span className="text-[11px] font-extrabold" style={{ color: RED }}>査定最高額</span>
                  <span className="font-black leading-none" style={{ color: RED, fontSize: "28px" }}>1,100<span style={{ fontSize: "18px" }}>万円！</span></span>
                  <span className="text-[10px] font-bold" style={{ color: NAVY }}>当日払いの実績アリ</span>
                </div>
              </div>

              {/* カード4枚 */}
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-[8px] md:gap-[10px]">
                {cards.map((card) => (
                  <div
                    key={card.label}
                    className="flex items-center justify-center gap-[8px] md:gap-[12px] rounded-lg bg-white py-3 px-2"
                    style={{ border: `1px solid ${NAVY}22` }}
                  >
                    <img src={card.icon} alt="" aria-hidden className="h-[32px] w-[32px] md:h-[40px] md:w-[40px] shrink-0 object-contain" />
                    <span className="whitespace-pre-line text-[13px] md:text-[16px] font-extrabold leading-tight" style={{ color: NAVY }}>
                      {card.label}
                      {card.ok && <span style={{ color: RED }}>OK</span>}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTAボタン */}
              <div className="relative mt-4 w-full">
                <a
                  href="#contact"
                  className="hero-cta-pulse relative flex w-full items-center justify-center rounded-lg px-[20px] md:px-[32px] font-extrabold text-white"
                  style={{ background: RED, height: "clamp(64px, 12vw, 84px)" }}
                >
                  <span
                    className="absolute left-[6px] md:left-[8px] top-1/2 flex h-[52px] md:h-[64px] w-[52px] md:w-[64px] -translate-y-1/2 flex-col items-center justify-center rounded-md text-center text-[10px] md:text-[11px] font-extrabold leading-tight"
                    style={{ background: GOLD, color: NAVY }}
                  >
                    簡単60秒<br />入力
                  </span>
                  <span className="flex items-center gap-[10px] md:gap-[14px]" style={{ fontSize: "clamp(18px, 5vw, 28px)" }}>
                    <Mail className="h-[22px] w-[22px] md:h-[28px] md:w-[28px] shrink-0" strokeWidth={2.25} />
                    <span>無料で査定してみる</span>
                  </span>
                  <ChevronRight className="absolute right-[16px] md:right-[28px] top-1/2 h-[22px] w-[22px] md:h-[26px] md:w-[26px] -translate-y-1/2" strokeWidth={2.5} />
                </a>
              </div>

              <p className="mt-2 text-center text-[13px] md:text-[14px]" style={{ color: NAVY }}>
                査定だけでもOK｜しつこい営業は一切いたしません
              </p>
            </div>

            {/* 右カラム：漫画画像（PC表示・SP非表示） */}
            <div className="hidden md:block relative overflow-hidden" style={{ flexBasis: "42%", flexShrink: 0 }}>
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

            {/* 査定最高額：絶対配置（PC専用） */}
            <div
              className="pointer-events-none absolute left-[41%] top-[20px] z-30 hidden md:flex flex-col items-start"
              style={{ transform: "rotate(-6deg)", transformOrigin: "left center" }}
              aria-hidden
            >
              <span className="whitespace-nowrap leading-none" style={{ fontSize: "20px", fontWeight: 800, color: RED }}>
                査定最高額
              </span>
              <div className="relative mt-[8px]">
                <svg
                  className="absolute -left-[8px] -bottom-[10px] -z-10 h-[36px] w-[300px]"
                  viewBox="0 0 300 50"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="heroBrush" x1="0" y1="1" x2="1" y2="0">
                      <stop offset="0%" stopColor="#E5C04A" />
                      <stop offset="100%" stopColor="#E5C04A" />
                    </linearGradient>
                  </defs>
                  <path d="M4 44 C 60 36, 130 30, 220 20 C 260 12, 280 10, 295 4 C 280 18, 240 22, 178 30 C 118 38, 52 42, 10 50 Z" fill="url(#heroBrush)" opacity="0.95" />
                  <path d="M6 42 C 80 34, 160 26, 270 16 C 283 12, 293 8, 295 5 C 286 14, 266 18, 238 22 C 150 30, 70 38, 12 47 Z" fill="#E5C04A" opacity="0.35" />
                  <path d="M20 37 C 100 30, 190 23, 280 12" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
                <span className="relative whitespace-nowrap leading-none" style={{ color: RED }}>
                  <span style={{ fontSize: "52px", fontWeight: 900 }}>1,100</span>
                  <span style={{ fontSize: "34px", fontWeight: 700, marginLeft: "2px" }}>万円</span>
                  <span style={{ fontSize: "34px", fontWeight: 700, marginLeft: "2px" }}>！</span>
                </span>
              </div>
              <span className="mt-[10px] whitespace-nowrap leading-none" style={{ fontSize: "14px", fontWeight: 700, color: NAVY }}>
                当日払いの実績アリ
              </span>
              <span className="mt-[4px] self-center whitespace-nowrap" style={{ fontSize: "11px", fontWeight: 400, color: NAVY }}>
                （負債有り法人の実績）
              </span>
            </div>

          </div>

          {/* ===== 実績バー ===== */}
          <div className="grid grid-cols-2 md:grid-cols-4 w-full" style={{ background: NAVY }}>
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center gap-[4px] md:gap-[6px] text-center py-3.5 md:py-0 md:h-[150px]"
                style={i % 2 !== 0 ? { borderLeft: `1px solid ${NAVY2}` } : undefined}
              >
                <span className="text-[13px] md:text-[16px] font-extrabold text-white/90">{stat.label}</span>
                <StatValue value={stat.value} size={stat.vSize} />
                <span className="text-[10px] md:text-[13px] text-white/70">{stat.note || " "}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ===== レスポンシブ調整 ===== */}
      <style>{`
        /* ヘッダーCTA：PCはSP用テキストを隠す、SPはPC用テキストを隠す */
        .header-cta-sp { display: none; }
        .header-cta-pc { display: inline; }

        /* 修正5: SP実績バー 月桂樹非表示・数字縮小 */
        @media (max-width: 767px) {
          .header-cta-sp { display: inline; }
          .header-cta-pc { display: none; }

          .hero-main-copy {
            font-size: 24px !important;
          }

          .stat-laurel {
            display: none !important;
          }
          .stat-value-wrap {
            height: auto !important;
            padding: 4px 8px;
          }
          .stat-number {
            font-size: 22px !important;
            white-space: normal !important;
            word-break: keep-all;
          }
        }
      `}</style>

    </section>
  )
}
