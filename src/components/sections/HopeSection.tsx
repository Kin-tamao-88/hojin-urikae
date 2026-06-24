import { ChevronRight } from 'lucide-react'
import reportSample from '../../assets/hero/report-sample.png'

const NAVY = '#1a2744'
const ORANGE = '#e8550a'
const BG = '#fafafa'

export const HopeSection = () => {
  return (
    <section style={{ backgroundColor: BG }}>

      {/* ===== 上段：左テキスト / 右画像 ===== */}
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '80px 40px 64px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'center',
      }}>

        {/* 左：説明文 */}
        <div>
          {/* ラベル */}
          <p style={{
            color: ORANGE,
            fontSize: '2.8rem',
            fontWeight: 700,
            letterSpacing: '0.05em',
            margin: '0 0 10px 0',
          }}>
            法人サルベージとは？
          </p>
          <div style={{
            width: '28px',
            height: '2px',
            backgroundColor: ORANGE,
            margin: '0 0 28px 0',
          }} />

          {/* 見出し */}
          <h2 style={{
            color: NAVY,
            fontSize: '2.2rem',
            fontWeight: 800,
            lineHeight: 1.5,
            margin: '0 0 32px 0',
          }}>
            あなたの法人、<br />
            {/* 「いくらの価値が付くか」にオレンジ下からハイライト40% */}
            <span style={{
              background: `linear-gradient(to top, rgba(232,85,10,0.25) 40%, transparent 40%)`,
            }}>
              いくらの価値が付くか
            </span><br />
            試してみませんか？
          </h2>

          {/* 区切り線 */}
          <div style={{
            borderTop: '1px solid #e0e0e0',
            paddingTop: '28px',
          }}>
            <p style={{
              color: '#222',
              fontSize: '1.1rem',
              lineHeight: 1.9,
              margin: '0 0 16px 0',
            }}>
              休眠法人や赤字法人だからといって、<br />
              必ずしも価値がないとは限りません。
            </p>
            <p style={{
              color: '#222',
              fontSize: '1.1rem',
              lineHeight: 1.9,
              margin: 0,
            }}>
              法人の信用履歴、取引実績、許認可、設立年数などが評価され、思わぬ価値が付くケースもあります。
            </p>
          </div>
        </div>

        {/* 右：レポート画像 */}
        <div>
          <img
            src={reportSample}
            alt="法人価値診断レポートのサンプル"
            style={{ width: '100%', display: 'block' }}
          />
        </div>
      </div>

      {/* ===== CTA ===== */}
      <div style={{ backgroundColor: BG, padding: '0 40px 72px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <a
            href="#contact"
            style={{
              display: 'block',
              textDecoration: 'none',
              width: '100%',
              boxSizing: 'border-box' as const,
              overflow: 'hidden',
            }}
          >
            {/* 上段 */}
            <div style={{
              backgroundColor: ORANGE,
              color: '#ffffff',
              textAlign: 'center',
              padding: '14px 48px',
              fontSize: '0.95rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
            }}>
              今、法人の価値を知ることにはメリットがあります
            </div>
            {/* 下段 */}
            <div style={{
              backgroundColor: NAVY,
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              padding: '26px 48px',
              fontWeight: 800,
              fontSize: '1.3rem',
            }}>
              まずは法人の価値を無料で診断してみる
              <ChevronRight style={{ width: '22px', height: '22px' }} />
            </div>
          </a>
        </div>
      </div>

    </section>
  )
}