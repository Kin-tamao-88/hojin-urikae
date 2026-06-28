import imgCaseIt from "../../assets/case/case-person-it.png"
import imgCaseConstruction from "../../assets/case/case-person-construction.png"

type CaseItem = {
  no: string
  industry: string
  beforeLabel: string
  beforeValue: string
  afterLabel: string
  afterValue: string
  quote: string
  personAge: string
  personRole: string
  image: string
}

const cases: CaseItem[] = [
  {
    no: "01",
    industry: "IT企業（システム開発業）",
    beforeLabel: "他社査定",
    beforeValue: "買取不可",
    afterLabel: "弊社成約",
    afterValue: "200万円",
    quote:
      "負債が大きくなり、誰に相談しても法人破産を勧められる状況でした。破産手続きには200万円以上かかると言われ途方に暮れていたところ、法人売却センターに相談。コストはほとんどかからず、むしろ買い取っていただきプラスになりました。対応も非常に早くて助かりました。",
    personAge: "40代・男性",
    personRole: "IT企業 経営者",
    image: imgCaseIt,
  },
  {
    no: "02",
    industry: "建設業（一般建設業）",
    beforeLabel: "他社提示額",
    beforeValue: "140万円",
    afterLabel: "弊社成約",
    afterValue: "700万円",
    quote:
      "受注が決まり準備を進めていた矢先、取引先が突然破産。手元のキャッシュだけでは約500万円の代理弁済が必要で、支払いが間に合わず会社の存続も危ぶまれる状況でした。売却センターに相談したところ『債権があっても価値は高いかもしれない』と言っていただき、700万円で法人売却が成立。本当に助かりました。",
    personAge: "50代・男性",
    personRole: "建設業 経営者",
    image: imgCaseConstruction,
  },
]

export function CaseStudy() {
  return (
    <section style={{ background: "#f5f2ec", paddingTop: "48px", paddingBottom: "64px" }}>
      <div className="container-lp">

        {/* セクションヘッダー */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.2em", color: "#D4AF37", marginBottom: "4px" }}>
            CASE STUDY
          </p>
          <h2 style={{ fontSize: "48px", fontWeight: 900, color: "#1e3a5f", letterSpacing: "-0.02em", lineHeight: 1 }}>
            活用事例
          </h2>
          <p style={{ fontSize: "14px", color: "#555", marginTop: "8px" }}>
            さまざまな状況でも、法人売却という選択肢で問題解決に導いています。
          </p>
        </div>

        {/* CASEリスト */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {cases.map((c) => (
            <div key={c.no} style={{ overflow: "hidden", border: "1px solid #ddd7ce", borderRadius: "4px", background: "#fff" }}>

              {/* ① CASEヘッダー帯 */}
              <div className="case-header" style={{ background: "#1a2744", padding: "14px 28px", display: "flex", alignItems: "center", gap: "14px" }}>
                <span style={{ fontSize: "11px", fontWeight: 900, letterSpacing: "0.15em", color: "rgba(255,255,255,0.5)", whiteSpace: "nowrap" }}>
                  CASE {c.no}
                </span>
                <span style={{ display: "inline-block", width: "1px", height: "16px", background: "rgba(255,255,255,0.25)", flexShrink: 0 }} />
                <h3 className="case-industry" style={{ fontSize: "18px", fontWeight: 900, color: "#ffffff", margin: 0 }}>
                  {c.industry}
                </h3>
              </div>

              {/* ② 数字エリア */}
              <div style={{ background: "#ffffff", padding: "10px 24px", borderBottom: "1px solid #e8e3dc" }}>
                <div className="case-numbers" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "24px" }}>

                  {/* Before */}
                  <div className="case-before" style={{ textAlign: "center" }}>
                    <span style={{ display: "inline-block", background: "#888", color: "#ffffff", fontSize: "13px", fontWeight: 700, padding: "4px 16px", borderRadius: "2px", letterSpacing: "0.05em", marginBottom: "6px" }}>
                      {c.beforeLabel}
                    </span>
                    <p className="case-before-value" style={{ fontSize: "40px", fontWeight: 700, color: "#999", letterSpacing: "-0.02em", lineHeight: 1, margin: 0, whiteSpace: "nowrap", textDecoration: "line-through", textDecorationColor: "#b03023", textDecorationThickness: "3px" }}>
                      {c.beforeValue}
                    </p>
                  </div>

                  {/* 矢印 */}
                  <div style={{ flexShrink: 0 }}>
                    <svg className="case-arrow" width="80" height="56" viewBox="0 0 80 56" xmlns="http://www.w3.org/2000/svg">
                      <polygon points="0,20 50,20 50,4 80,28 50,52 50,36 0,36" fill="#b03023"/>
                    </svg>
                  </div>

                  {/* After */}
                  <div className="case-after" style={{ textAlign: "center", position: "relative" }}>
                    <div style={{ marginBottom: "6px" }}>
                      <span style={{ display: "inline-block", background: "#9a7a3a", color: "#ffffff", fontSize: "13px", fontWeight: 700, padding: "4px 16px", borderRadius: "2px", letterSpacing: "0.05em" }}>
                        {c.afterLabel}
                      </span>
                    </div>
                    <div style={{ position: "relative", display: "inline-block" }}>
                      <p className="case-after-value" style={{ fontSize: "72px", fontWeight: 900, color: "#b03023", letterSpacing: "-0.03em", lineHeight: 1, margin: 0, whiteSpace: "nowrap", borderBottom: "4px solid #D4AF37", paddingBottom: "4px" }}>
                        {c.afterValue}
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* ③ 口コミエリア */}
              <div style={{ background: "#faf8f3", padding: "8px 24px 12px" }}>
                <div className="case-quote-wrap" style={{ display: "grid", gridTemplateColumns: "1fr 140px", gap: "16px", alignItems: "center" }}>

                  {/* 吹き出しコメント */}
                  <div className="case-quote-bubble" style={{ position: "relative", background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "14px 18px" }}>
                    <p style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.9, color: "#374151", margin: 0 }}>
                      {c.quote}
                    </p>
                    <div className="case-bubble-arrow" style={{
                      position: "absolute",
                      right: "-12px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: 0,
                      height: 0,
                      borderTop: "10px solid transparent",
                      borderBottom: "10px solid transparent",
                      borderLeft: "12px solid #ffffff",
                      filter: "drop-shadow(1px 0 0 #e2e8f0)"
                    }} />
                  </div>

                  {/* 人物写真＋属性（PC表示、SPは非表示） */}
                  <div className="case-person" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                    <img
                      src={c.image}
                      alt={`${c.personAge} ${c.personRole}`}
                      style={{ width: "130px", height: "130px", borderRadius: "50%", objectFit: "cover", objectPosition: "center 10%", border: "2px solid #D4AF37" }}
                    />
                    <div style={{ textAlign: "center", lineHeight: 1.6 }}>
                      <p style={{ fontSize: "13px", fontWeight: 700, color: "#1e3a5f", margin: 0 }}>{c.personAge}</p>
                      <p style={{ fontSize: "12px", fontWeight: 400, color: "rgba(30,58,95,0.65)", margin: 0 }}>{c.personRole}</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>

        {/* 注釈 */}
        <p style={{ marginTop: "20px", textAlign: "center", fontSize: "11px", color: "rgba(30,58,95,0.4)" }}>
          ※上記は一例であり、すべてのケースで同様の結果を保証するものではありません。
        </p>

      </div>

      <style>{`
        @media (max-width: 767px) {

          /* ヘッダー帯 */
          .case-header {
            padding: 12px 16px !important;
          }
          .case-industry {
            font-size: 15px !important;
          }

          /* 数字エリア：縦積みに変更 */
          .case-numbers {
            flex-direction: column !important;
            align-items: center !important;
            gap: 0 !important;
            padding: 18px 16px 14px !important;
          }

          /* Before：控えめ表示 */
          .case-before {
            width: 100% !important;
            padding-bottom: 6px !important;
          }
          .case-before-value {
            font-size: 26px !important;
          }
          .case-before span {
            font-size: 11px !important;
            padding: 3px 10px !important;
          }

          /* 赤い太矢印の親divを非表示 */
          .case-numbers > div:not(.case-before):not(.case-after) {
            display: none !important;
          }

          /* After：小さな下向き三角 + 数字強調 */
          .case-after {
            width: 100% !important;
          }
          .case-after::before {
            content: "" !important;
            display: block !important;
            width: 0 !important;
            height: 0 !important;
            border-left: 6px solid transparent !important;
            border-right: 6px solid transparent !important;
            border-top: 8px solid #9a7a3a !important;
            margin: 10px auto 12px !important;
          }
          .case-after-value {
            font-size: 52px !important;
          }

          /* 口コミ：1カラム全幅 */
          .case-quote-wrap {
            grid-template-columns: 1fr !important;
          }

          /* 吹き出し三角・人物：SP非表示 */
          .case-bubble-arrow {
            display: none !important;
          }
          .case-person {
            display: none !important;
          }

          /* 口コミボックス：吹き出し解除・シンプルカード */
          .case-quote-bubble {
            border-radius: 6px !important;
            padding: 16px !important;
            position: static !important;
            border: 1px solid #e2e8f0 !important;
          }
          .case-quote-bubble p {
            font-size: 14px !important;
            line-height: 1.85 !important;
          }
        }
      `}</style>
    </section>
  )
}
