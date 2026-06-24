import { Mail, ChevronRight, AlertCircle } from "lucide-react"
import iconGraphDown from "../../assets/icons/icon-graph-down.png"
import iconDebt from "../../assets/icons/icon-debt.png"
import iconSleeping from "../../assets/icons/icon-sleeping.png"
import iconTax from "../../assets/icons/icon-tax.png"
import iconElderly from "../../assets/icons/icon-elderly.png"
import iconSuccessor from "../../assets/icons/icon-successor.png"

const ORANGE = "#e8550a"
const NAVY = "#1a2744"
const DARK = "#1a1a1a"
const BG = "#fff8f5"

// 上段3つ：大タイトル強調スタイル
const topItems = [
  {
    icon: iconGraphDown,
    title: "赤字法人",
    desc: "業績が赤字の状態でも、事業価値を適切に評価し、売却できる可能性があります。",
    iconSize: 72,
    titleSize: "2.6rem",
  },
  {
    icon: iconDebt,
    title: "債務超過",
    desc: "負債が資産を上回る状態でも、再生ノウハウを持つ買い手につなぐことが可能です。",
    iconSize: 64,
    titleSize: "2.2rem",
  },
  {
    icon: iconSleeping,
    title: "休眠法人",
    desc: "長期間事業を停止している法人でも、価値を見出す買い手が見つかる可能性があります。",
    iconSize: 68,
    titleSize: "2.4rem",
  },
]

// 下段3つ：標準スタイル
const bottomItems = [
  {
    icon: iconTax,
    title: "税金滞納",
    desc: "税金の滞納がある場合でも、専門家と連携し、適切な解決策をご提案します。",
  },
  {
    icon: iconElderly,
    title: "代表者高齢",
    desc: "代表者の高齢化により事業承継にお悩みの法人も、スムーズな売却をサポートします。",
  },
  {
    icon: iconSuccessor,
    title: "後継者不在",
    desc: "後継者がいない法人でも、従業員や取引先の雇用・取引を守りながら売却が可能です。",
  },
]

export function Pain() {
  return (
    <section style={{ background: BG, padding: "64px 40px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* ヘッダー */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "14px" }}>
            <span style={{ width: "32px", height: "1px", background: ORANGE }} />
            <span style={{ fontSize: "13px", fontWeight: 700, color: ORANGE, letterSpacing: "0.1em" }}>
              赤字・債務・休眠法人もご相談可能
            </span>
            <span style={{ width: "32px", height: "1px", background: ORANGE }} />
          </div>
          <h2 style={{ fontSize: "2.8rem", fontWeight: 900, color: DARK, lineHeight: 1.25, margin: "0 0 16px" }}>
            こんな法人でも<br />
            <span style={{ color: ORANGE }}>売却できる可能性</span>があります
          </h2>
          <p style={{ fontSize: "1rem", color: "#555", lineHeight: 1.85, margin: 0 }}>
            一般的に売却が難しいとされる法人でも、当社の独自ネットワークとノウハウにより、<br />
            多くの法人の売却を実現してきました。まずはお気軽にご相談ください。
          </p>
        </div>

        {/* 上段：大タイトル3枚 */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "16px" }}>
          {topItems.map((item) => (
            <div key={item.title} style={{
              background: "#ffffff",
              border: "1px solid rgba(232,85,10,0.15)",
              padding: "32px 24px 28px",
            }}>
              {/* アイコン＋タイトル横並び */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                <img src={item.icon} alt={item.title} style={{ width: `${item.iconSize * 1.8}px`, height: `${item.iconSize * 1.8}px`, objectFit: "contain", mixBlendMode: "multiply" as const, flexShrink: 0 }} />
                <h3 style={{
                  fontSize: item.titleSize,
                  fontWeight: 900,
                  color: ORANGE,
                  margin: 0,
                  lineHeight: 1.1,
                }}>
                  {item.title}
                </h3>
              </div>
              <p style={{ fontSize: "0.88rem", color: "#555", lineHeight: 1.8, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 下段：標準3枚 */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "40px" }}>
          {bottomItems.map((item) => (
            <div key={item.title} style={{
              background: "#ffffff",
              border: "1px solid rgba(232,85,10,0.1)",
              padding: "24px",
              display: "flex", gap: "16px", alignItems: "flex-start",
            }}>
              <img src={item.icon} alt={item.title} style={{ width: "72px", height: "72px", objectFit: "contain", mixBlendMode: "multiply" as const, flexShrink: 0 }} />
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 900, color: NAVY, margin: "0 0 8px" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "#555", lineHeight: 1.8, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA帯 */}
        <div style={{
          background: "#ffffff",
          border: "1.5px solid rgba(232,85,10,0.2)",
          padding: "24px 32px",
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{
              width: "64px", height: "64px", borderRadius: "50%",
              background: ORANGE, flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <AlertCircle size={22} color="#ffffff" strokeWidth={2} />
            </div>
            <div>
              <p style={{ fontSize: "1.1rem", fontWeight: 900, color: DARK, margin: "0 0 3px" }}>
                まずは<span style={{ color: ORANGE }}>無料で相談</span>してみませんか？
              </p>
              <p style={{ fontSize: "0.82rem", color: "#777", margin: 0 }}>
                秘密厳守・相談無料で、あなたの状況に合わせた最適なご提案をいたします。
              </p>
            </div>
          </div>
          <a href="#contact" style={{
            display: "flex", alignItems: "center", gap: "10px",
            background: ORANGE, color: "#ffffff",
            fontSize: "1rem", fontWeight: 800,
            padding: "14px 28px", textDecoration: "none",
            whiteSpace: "nowrap", flexShrink: 0,
          }}>
            <Mail size={18} strokeWidth={2} />
            無料で査定してみる
            <ChevronRight size={18} strokeWidth={2.5} />
          </a>
        </div>

      </div>
    </section>
  )
}