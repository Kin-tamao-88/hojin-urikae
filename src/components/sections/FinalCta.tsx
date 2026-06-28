import { useState } from "react"
import { ChevronRight } from "lucide-react"

export function FinalCta() {
  const [agreed, setAgreed] = useState(false)

  return (
    <section id="contact" style={{ background: "#f5f2ec", paddingTop: "56px", paddingBottom: "64px" }}>
      <div className="container-lp" style={{ maxWidth: "720px", margin: "0 auto" }}>

        {/* ヘッダー */}
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 900, color: "#1e3a5f", margin: 0 }}>
            <span className="finalcta-h2-line1">無料お申し込み</span><span style={{ color: "#b03023" }}>フォーム</span>
          </h2>
          <p style={{ fontSize: "13px", color: "#888", marginTop: "10px" }}>
            ※ 法人口座をお持ちでない場合、買取対象外となりますのでお申し込みいただけません。
          </p>
        </div>

        {/* フォーム */}
        <div className="finalcta-card" style={{ background: "#ffffff", borderRadius: "12px", padding: "36px 40px", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>

          {/* 会社名 */}
          <div className="finalcta-row" style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "16px", alignItems: "center", marginBottom: "20px" }}>
            <label className="finalcta-label" style={{ fontSize: "15px", fontWeight: 700, color: "#1e3a5f", display: "flex", alignItems: "center", gap: "8px" }}>
              会社名
              <span style={{ background: "#b03023", color: "#fff", fontSize: "11px", fontWeight: 700, padding: "2px 8px", borderRadius: "2px" }}>必須</span>
            </label>
            <input
              type="text"
              placeholder="例：株式会社サンプル"
              style={{ border: "1px solid #d1ccc4", borderRadius: "6px", padding: "12px 14px", fontSize: "15px", width: "100%", boxSizing: "border-box", outline: "none" }}
            />
          </div>

          {/* ご担当者様氏名 */}
          <div className="finalcta-row" style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "16px", alignItems: "center", marginBottom: "20px" }}>
            <label className="finalcta-label" style={{ fontSize: "15px", fontWeight: 700, color: "#1e3a5f", display: "flex", alignItems: "center", gap: "8px" }}>
              ご担当者様氏名
              <span style={{ background: "#b03023", color: "#fff", fontSize: "11px", fontWeight: 700, padding: "2px 8px", borderRadius: "2px" }}>必須</span>
            </label>
            <input
              type="text"
              placeholder="例：山田 太郎"
              style={{ border: "1px solid #d1ccc4", borderRadius: "6px", padding: "12px 14px", fontSize: "15px", width: "100%", boxSizing: "border-box", outline: "none" }}
            />
          </div>

          {/* 電話番号 */}
          <div className="finalcta-row" style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "16px", alignItems: "center", marginBottom: "20px" }}>
            <label className="finalcta-label" style={{ fontSize: "15px", fontWeight: 700, color: "#1e3a5f", display: "flex", alignItems: "center", gap: "8px" }}>
              電話番号
              <span style={{ background: "#b03023", color: "#fff", fontSize: "11px", fontWeight: 700, padding: "2px 8px", borderRadius: "2px" }}>必須</span>
            </label>
            <input
              type="tel"
              placeholder="例：090-1234-5678"
              style={{ border: "1px solid #d1ccc4", borderRadius: "6px", padding: "12px 14px", fontSize: "15px", width: "100%", boxSizing: "border-box", outline: "none" }}
            />
          </div>

          {/* メールアドレス */}
          <div className="finalcta-row" style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "16px", alignItems: "center", marginBottom: "20px" }}>
            <label className="finalcta-label" style={{ fontSize: "15px", fontWeight: 700, color: "#1e3a5f", display: "flex", alignItems: "center", gap: "8px" }}>
              メールアドレス
              <span style={{ background: "#b03023", color: "#fff", fontSize: "11px", fontWeight: 700, padding: "2px 8px", borderRadius: "2px" }}>必須</span>
            </label>
            <input
              type="email"
              placeholder="例：sample@example.com"
              style={{ border: "1px solid #d1ccc4", borderRadius: "6px", padding: "12px 14px", fontSize: "15px", width: "100%", boxSizing: "border-box", outline: "none" }}
            />
          </div>

          {/* ご質問など */}
          <div className="finalcta-row" style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: "16px", alignItems: "flex-start", marginBottom: "28px" }}>
            <label className="finalcta-label" style={{ fontSize: "15px", fontWeight: 700, color: "#1e3a5f", display: "flex", alignItems: "center", gap: "8px", paddingTop: "12px" }}>
              ご質問など
              <span style={{ background: "#888", color: "#fff", fontSize: "11px", fontWeight: 700, padding: "2px 8px", borderRadius: "2px" }}>任意</span>
            </label>
            <textarea
              placeholder="ご質問がございましたら、こちらにご記入ください"
              rows={4}
              style={{ border: "1px solid #d1ccc4", borderRadius: "6px", padding: "12px 14px", fontSize: "15px", width: "100%", boxSizing: "border-box", outline: "none", resize: "vertical" }}
            />
          </div>

          {/* プライバシーポリシー */}
          <div className="finalcta-privacy" style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "center", marginBottom: "28px" }}>
            <input
              type="checkbox"
              id="privacy"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              style={{ width: "18px", height: "18px", cursor: "pointer", flexShrink: 0 }}
            />
            <label htmlFor="privacy" style={{ fontSize: "14px", color: "#555", cursor: "pointer" }}>
              <span style={{ background: "#b03023", color: "#fff", fontSize: "11px", fontWeight: 700, padding: "2px 8px", borderRadius: "2px", marginRight: "8px" }}>必須</span>
              プライバシーポリシーに同意する
            </label>
          </div>

          {/* 送信ボタン */}
          <button
            className="finalcta-btn"
            disabled={!agreed}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              width: "100%",
              padding: "20px",
              borderRadius: "50px",
              background: agreed ? "#C9A84C" : "#ccc",
              color: "#ffffff",
              fontSize: "22px",
              fontWeight: 900,
              border: "none",
              cursor: agreed ? "pointer" : "not-allowed",
              letterSpacing: "0.05em",
              transition: "background 0.2s",
            }}
          >
            査定スタート！
            <ChevronRight size={24} />
          </button>

          <p style={{ textAlign: "center", fontSize: "12px", color: "#999", marginTop: "12px" }}>
            査定だけでもOK｜しつこい営業は一切いたしません
          </p>

        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {

          /* 見出し：2行固定 */
          .finalcta-h2-line1 {
            display: block;
          }

          /* フォームカード */
          .finalcta-card {
            padding: 24px 20px !important;
            border-radius: 8px !important;
          }

          /* 各フォーム行：縦積み */
          .finalcta-row {
            display: flex !important;
            flex-direction: column !important;
            gap: 6px !important;
            margin-bottom: 20px !important;
          }

          /* ラベル */
          .finalcta-label {
            padding-top: 0 !important;
          }

          /* input */
          .finalcta-row input {
            min-height: 48px !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }

          /* textarea */
          .finalcta-row textarea {
            min-height: 120px !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }

          /* チェックボックス行：左寄せ */
          .finalcta-privacy {
            justify-content: flex-start !important;
          }

          /* CTAボタン */
          .finalcta-btn {
            min-height: 56px !important;
            font-size: 18px !important;
          }
          .finalcta-btn:not(:disabled) {
            background: #b03023 !important;
          }
          .finalcta-btn:disabled {
            background: #ccc !important;
          }
        }
      `}</style>
    </section>
  )
}
