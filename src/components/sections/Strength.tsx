import type { ReactNode } from "react"
import { Building2, Clock, MapPin } from "lucide-react"
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
    <div className="flex h-full flex-col rounded-lg border border-navy/10 bg-white p-7 md:p-8">
      {/* ラベル＋アイコン */}
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy/[0.04] text-gold-dark ring-1 ring-gold/30">
          <Icon className="h-[22px] w-[22px]" strokeWidth={1.7} />
        </span>
        <span className="text-[15px] font-extrabold tracking-wide text-navy">{label}</span>
      </div>

      {/* 数字（主役） */}
      <p className="mt-5 flex items-baseline gap-1.5">
        {pre && <span className="text-lg font-extrabold text-ink-light">{pre}</span>}
        <span className="text-[52px] font-black leading-none tracking-tight text-navy">{big}</span>
        {unit && <span className="text-xl font-extrabold text-gold-dark">{unit}</span>}
      </p>

      <span className="mt-6 h-px w-full bg-navy/10" aria-hidden />

      {/* 説明 */}
      <p className="mt-5 text-sm leading-relaxed text-ink-light">{desc}</p>
    </div>
  )
}

export function Strength() {
  return (
    <section className="bg-white pt-8 pb-12 md:pt-10 md:pb-14">
      <div className="container-lp flex flex-col gap-8">
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

        {/* 文章訴求ブロック（参考LPの雰囲気：マーカー見出し＋左揃え本文＋細い罫線／カード・ボックス化しない） */}
        <div className="mx-auto mt-4 flex w-full max-w-[720px] flex-col gap-9 px-4">
          {/* 見出し（中央・要点をゴールドのマーカーで） */}
          <h3 className="text-center text-[23px] font-extrabold leading-[1.55] text-[#1e3a5f] md:text-[30px]">
            <span className="box-decoration-clone bg-[#9a7a3a] px-2.5 py-0.5 text-white">放置している法人</span>
            に、
            <br className="hidden md:block" />
            無駄なコストを割いていませんか？
            <span className="mt-4 block text-[19px] font-extrabold leading-snug text-[#1e3a5f] md:text-[23px]">
              今のうちに<span className="text-[#9a7a3a]">価値</span>を確認してみませんか？
            </span>
          </h3>

          <span className="h-px w-full bg-[#9a7a3a]/35" aria-hidden />

          {/* 本文（左揃え・読ませる・指定語のみゴールド強調） */}
          <div className="flex flex-col gap-5 text-left text-[15px] leading-[2.1] text-[#1e3a5f] md:text-[17px]">
            <p>
              赤字法人や休眠法人だからといって、
              <span className="font-extrabold text-[#9a7a3a]">価値</span>がないとは限りません。
            </p>
            <p>
              弊社では<span className="font-extrabold text-[#9a7a3a]">1,000社以上</span>のご相談実績があり、
              <span className="font-extrabold text-[#9a7a3a]">全国オンライン対応</span>により多くのご紹介もいただいております。
            </p>
            <p>
              解散か放置を決める前に、まずは<span className="font-extrabold text-[#9a7a3a]">10分</span>で終わる
              <span className="font-extrabold text-[#9a7a3a]">スピード査定</span>をお試しください。
            </p>
          </div>

          <span className="h-px w-full bg-[#9a7a3a]/35" aria-hidden />
        </div>
      </div>
    </section>
  )
}
