import { SectionHeading } from "../ui/SectionHeading"

/* ───────── 信頼を「数字・実績」で示す統一カード（横並び3枚） ───────── */
type StatData = {
  label: string
  pre?: string
  big: string
  unit?: string
  desc: string
  highlight?: boolean
}

const stats: StatData[] = [
  {
    label: "対応実績",
    big: "1,000",
    unit: "件以上",
    desc: "他社で断られた法人も含め、これまで多数の法人売却を成約へと導いてきました。",
  },
  {
    label: "スピード",
    pre: "最短",
    big: "即日",
    desc: "スピーディーな審査と査定で、ご相談から最短即日での現金化に対応します。",
    highlight: true,
  },
  {
    label: "専門性",
    pre: "全国",
    big: "47",
    unit: "都道府県",
    desc: "赤字・休眠・債務超過法人など、難しい案件にも専門特化で全国対応します。",
  },
]

function StatCard({ label, pre, big, unit, desc, highlight }: StatData) {
  return (
    <div
      className="flex h-full flex-col rounded-lg border border-navy/10 bg-white p-7 md:p-8"
      // 上部ボーダー：共通=ゴールド3px／即日カードのみ赤4px
      style={{ borderTop: highlight ? "4px solid #b03023" : "3px solid #9a7a3a" }}
    >
      {/* 数字（主役・特大ゴールド） */}
      <p className="flex items-baseline gap-1.5">
        {pre && <span className="text-xl font-extrabold text-[#1e3a5f]">{pre}</span>}
        <span className="text-[56px] font-black leading-none tracking-tight text-[#9a7a3a]">{big}</span>
        {unit && <span className="text-2xl font-extrabold text-[#9a7a3a]">{unit}</span>}
      </p>

      {/* ラベル */}
      <span className="mt-4 text-[15px] font-extrabold tracking-wide text-[#1e3a5f]">{label}</span>

      <span className="mt-5 h-px w-full bg-navy/10" aria-hidden />

      {/* 説明（#1e3a5f） */}
      <p className="mt-5 text-sm leading-relaxed text-[#1e3a5f]">{desc}</p>
    </div>
  )
}

export function Strength() {
  return (
    <section className="bg-white pt-8 pb-6 md:pt-10 md:pb-8">
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

        {/* 文章訴求エリア（1枚の広告：問いかけ→価値提案→安心材料→活用事例へ／カード・装飾・背景なし） */}
        <div className="mx-auto mt-6 flex w-full max-w-[760px] flex-col items-center px-4 text-center">
          {/* 問いかけ（設定・大きく） */}
          <h3 className="text-[30px] font-extrabold leading-[1.45] tracking-tight text-[#1e3a5f] md:text-[44px]">
            放置している法人に、
            <br />
            無駄なコストを
            <br />
            割いていませんか？
          </h3>

          {/* 価値提案（主役・最大の感情フック／ゴールドは「価値」へ） */}
          <p className="mt-9 text-[24px] font-extrabold leading-snug tracking-tight text-[#1e3a5f] md:text-[36px]">
            今のうちに、
            <br className="md:hidden" />
            <span className="inline-block border-b-[3px] border-[#9a7a3a] pb-1.5">
              <span className="text-[#9a7a3a]">価値</span>を確認してみませんか？
            </span>
          </p>

          <span className="mt-12 h-px w-full bg-[#9a7a3a]/35" aria-hidden />

          {/* 安心材料（本文・少し大きく・#1e3a5f・指定語のみゴールド） */}
          <div className="mt-10 flex flex-col gap-6 text-[16px] leading-[2] text-[#1e3a5f] md:text-[19px]">
            <p>
              赤字法人や休眠法人だからといって、
              <br className="hidden md:block" />
              <span className="font-extrabold text-[#9a7a3a]">価値</span>がないとは限りません。
            </p>
            <p>
              弊社では<span className="font-extrabold text-[#9a7a3a]">1,000社以上</span>のご相談実績があり、
              <br className="hidden md:block" />
              <span className="font-extrabold text-[#9a7a3a]">全国オンライン対応</span>により多くのご紹介もいただいております。
            </p>
            <p>
              解散か放置を決める前に、まずは<span className="font-extrabold text-[#9a7a3a]">10分</span>で終わる
              <br className="hidden md:block" />
              <span className="font-extrabold text-[#9a7a3a]">スピード査定</span>をお試しください。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
