import type { ReactNode } from "react"
import { Building2, Clock, MapPin, Lightbulb } from "lucide-react"
import { SectionHeading } from "../ui/SectionHeading"

/* ───────── 信頼を「数字・実績」で示す統一カード（横並び3枚） ───────── */
type StatData = {
  Icon: (p: { className?: string; strokeWidth?: number }) => ReactNode
  label: string
  pre?: string
  big: string
  unit?: string
  desc: string
}

const stats: StatData[] = [
  {
    Icon: Building2,
    label: "対応実績",
    big: "1,000",
    unit: "件以上",
    desc: "他社で断られた法人も含め、これまで多数の法人売却を成約へと導いてきました。",
  },
  {
    Icon: Clock,
    label: "スピード",
    pre: "最短",
    big: "即日",
    desc: "スピーディーな審査と査定で、ご相談から最短即日での現金化に対応します。",
  },
  {
    Icon: MapPin,
    label: "専門性",
    pre: "全国",
    big: "47",
    unit: "都道府県",
    desc: "赤字・休眠・債務超過法人など、難しい案件にも専門特化で全国対応します。",
  },
]

function StatCard({ Icon, label, pre, big, unit, desc }: StatData) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-navy/10 bg-white p-7 shadow-[0_12px_40px_rgba(27,42,74,0.08)] md:p-8">
      {/* ラベル＋アイコン */}
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy/[0.04] text-gold-dark ring-1 ring-gold/30">
          <Icon className="h-[22px] w-[22px]" strokeWidth={1.7} />
        </span>
        <span className="text-[15px] font-bold tracking-wide text-navy">{label}</span>
      </div>

      {/* 数字（主役） */}
      <p className="mt-5 flex items-baseline gap-1.5">
        {pre && <span className="text-lg font-bold text-ink-light">{pre}</span>}
        <span className="text-[52px] font-black leading-none tracking-tight text-navy">{big}</span>
        {unit && <span className="text-xl font-bold text-gold-dark">{unit}</span>}
      </p>

      <span className="mt-6 h-px w-full bg-navy/10" aria-hidden />

      {/* 説明 */}
      <p className="mt-5 text-sm leading-relaxed text-ink-light">{desc}</p>
    </div>
  )
}

export function Strength() {
  return (
    <section className="bg-white pt-8 pb-20 md:pt-10 md:pb-24">
      <div className="container-lp flex flex-col gap-12">
        <SectionHeading
          eyebrow="諦める前に、まずはご相談ください"
          title="当社が選ばれる確固たる強み"
          description="法人売却を成功へ導く、3つの強みがあります"
        />

        {/* 横並び3カード（サイズ統一・実績/スピード/専門性を数字で示す） */}
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>

        {/* 下部バナー（ネイビー×ゴールドの相談導線） */}
        <div className="mx-auto flex w-full max-w-3xl items-center justify-center gap-4 rounded-2xl border border-gold/30 bg-navy px-8 py-6 text-center shadow-[0_14px_44px_rgba(27,42,74,0.18)]">
          <Lightbulb className="h-7 w-7 shrink-0 text-gold" strokeWidth={1.6} />
          <div className="flex flex-col items-start gap-0.5 text-left">
            <p className="text-lg font-bold text-white">まずはお客様の状況をお聞かせください</p>
            <p className="text-sm text-gold-light">最適なご提案をさせていただきます</p>
          </div>
        </div>
      </div>
    </section>
  )
}
