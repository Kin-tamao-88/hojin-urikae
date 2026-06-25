import { ChevronRight } from 'lucide-react'
import reportSample from '../../assets/hero/report-sample.png'
import jcaoLogo from '../../assets/hero/jcao-logo-top.png'

const NAVY = '#1a2744'
const ORANGE = '#e8550a'
const BG = '#fafafa'

export const HopeSection = () => {
  return (
    <section style={{ backgroundColor: BG }}>

      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '48px 40px 64px',
      }}>

        {/* 1段目：ロゴ中央 */}
        <div>
          <img
            src={jcaoLogo}
            alt="JCAO"
            style={{ height: '120px', display: 'block', margin: '0 auto 40px auto' }}
          />
        </div>

        {/* 2段目：見出し */}
        <h2 style={{
          color: NAVY,
          fontSize: '2.73rem',
          fontWeight: 800,
          lineHeight: 1.5,
          margin: 0,
        }}>
          JCAOとは？
        </h2>
        <div style={{
          height: '3px',
          background: ORANGE,
          width: '280px',
          marginTop: '8px',
          marginBottom: '40px',
        }} />

        {/* 3段目：上2段落・全幅 */}
        <p style={{ color: '#222', fontSize: '1.1rem', lineHeight: 2.0, margin: '0 0 20px 0', maxWidth: '720px' }}>
          「会社を持つって、こんなにお金がかかるものだったのか。」
        </p>
     <p style={{ color: '#e8550a', fontSize: '1.2rem', lineHeight: 2.0, margin: '0 0 16px 0', fontWeight: 700  }}>
          設立にも、維持にも、そして解散にも——<br />

          法人というのは、持っているだけでコストが生まれ続けます。
        </p>

        {/* 4段目：下2段落＋画像 横並び */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '64px' }}>
          <div style={{ maxWidth: '620px', flex: '0 0 620px' }}>
            <p style={{ color: '#222', fontSize: '1.1rem', lineHeight: 2.0, margin: '0 0 20px 0' }}>
              「使わなくなった会社を、ただ眠らせておくしかない」<br />
              そう諦めている経営者の方が、日本にはたくさんいます。
            </p>
            <p style={{ color: '#222', fontSize: '1.1rem', lineHeight: 2.0, margin: '0 0 8px 0', fontWeight: 700 }}>
  JCAOは、そんな現実に違和感を解消するためのサービスです。
</p>
<p style={{ color: '#222', fontSize: '1.1rem', lineHeight: 2.7, margin: 0 }}>
  あなたの法人に残っている価値を、必要としている人へ繋ぐ。<br />
  無駄なコストが掛からない、最適な提案で価値を生みだし<br />
  次のビジネスへの架け橋になることが私たちの使命です。
</p>
          </div>
          <div style={{ flexShrink: 0, marginLeft: '-60px' }}>
            <img
              src={reportSample}
              alt=""
              style={{ width: '400px', height: 'auto', opacity: 0.85 }}
            />
          </div>
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