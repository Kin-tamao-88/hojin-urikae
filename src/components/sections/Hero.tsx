import { Mail, ChevronRight } from 'lucide-react'
import heroConsultation from '../../assets/hero/hero-consultation.png'
import jcaoLogo from '../../assets/hero/jcao-logo-top.png'

const NAVY = '#1a2744'
const ORANGE = '#e8550a'

export default function Hero() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <header style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e8e8e8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 32px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src={jcaoLogo} alt="日本法人査定機構" style={{ height: '74px', width: 'auto', marginLeft: '16px' }} />
        </div>
        <a href="#contact" style={{
          display: 'flex', alignItems: 'center', gap: '12px',
          backgroundColor: ORANGE, color: '#ffffff',
          padding: '12px 20px', textDecoration: 'none',
        }}>
          <Mail style={{ width: '16px', height: '16px', flexShrink: 0 }} />
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: 700, fontSize: '0.9rem', lineHeight: 1.3 }}>法人価値を無料で診断する</div>
            <div style={{ fontSize: '0.68rem', opacity: 0.9, lineHeight: 1.3 }}>24時間受付中</div>
          </div>
          <ChevronRight style={{ width: '16px', height: '16px', flexShrink: 0 }} />
        </a>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#F5F2EC',
        height: '560px',
      }}>

        {/* 右ブリード画像 */}
        <div style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '55%',
          height: '100%',
        }}>
          <img
            src={heroConsultation}
            alt="法人の無料相談の様子"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
            }}
          />
          {/* 左端フェードオーバーレイ */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to right, #F5F2EC 0%, transparent 25%)',
            pointerEvents: 'none',
          }} />
        </div>

        {/* テキストエリア */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 64px',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
        }}>
          <div style={{ width: '45%' }}>

            {/* 1行目 */}
            <p style={{ fontSize: '35px', color: NAVY, fontWeight: 500, margin: '0 0 8px 0', lineHeight: 1.1 }}>
              不要な法人が
            </p>

            {/* 2行目 */}
            <h1 style={{
              fontSize: '60px',
              color: ORANGE,
              fontWeight: 900,
              lineHeight: 1.1,
              margin: 0,
              whiteSpace: 'nowrap',
            }}>
              高額資金に変わる
            </h1>

            {/* 2行目下 直線アンダーライン */}
            <div style={{
              height: '3px',
              background: ORANGE,
              width: '70%',
              marginTop: '6px',
              marginBottom: '20px',
            }} />

            {/* 3行目 */}
            <p style={{ fontSize: '30px', color: '#1a2744', fontWeight: 500, marginBottom: '20px' }}>
              <span style={{ background: 'linear-gradient(transparent 60%, #FFE066 60%)' }}>
                法人査定は<span style={{ position: 'relative', display: 'inline-block' }}>JCAO</span>にご相談ください。
              </span>
            </p>

            {/* 5〜6行目 */}
            <p style={{ fontSize: '21px', color: '#374151', margin: '0 0 4px 0' }}>
              休眠法人・赤字法人・債務超過法人にも
            </p>
            <p style={{ fontSize: '21px', color: '#374151', margin: 0 }}>
              価値が残っている可能性があります。
            </p>

          </div>
        </div>
      </section>

      {/* ===== 3カラム特徴エリア ===== */}
      <section style={{
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e5e7eb',
        padding: '40px 0',
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
        }}>

          {/* 01 */}
          <div style={{ borderRight: '1px solid #e5e7eb', padding: '0 48px' }}>
            <div style={{
              width: '36px', height: '36px', borderRadius: '50%',
              backgroundColor: ORANGE, color: '#ffffff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 700, fontSize: '14px',
              marginBottom: '16px',
            }}>01</div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: NAVY, margin: '0 0 12px 0' }}>
              価値が残る可能性
            </h3>
            <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.7, margin: 0 }}>
              解散前に査定することで、思わぬ価値が見つかる場合があります。
            </p>
          </div>

          {/* 02 */}
          <div style={{ borderRight: '1px solid #e5e7eb', padding: '0 48px' }}>
            <div style={{
              width: '36px', height: '36px', borderRadius: '50%',
              backgroundColor: ORANGE, color: '#ffffff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 700, fontSize: '14px',
              marginBottom: '16px',
            }}>02</div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: NAVY, margin: '0 0 12px 0' }}>
              最短即日査定
            </h3>
            <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.7, margin: 0 }}>
              売却可能性をスピーディーに確認できます。
            </p>
          </div>

          {/* 03 */}
          <div style={{ padding: '0 48px' }}>
            <div style={{
              width: '36px', height: '36px', borderRadius: '50%',
              backgroundColor: ORANGE, color: '#ffffff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 700, fontSize: '14px',
              marginBottom: '16px',
            }}>03</div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: NAVY, margin: '0 0 12px 0' }}>
              来店不要で完結
            </h3>
            <p style={{ fontSize: '16px', color: '#374151', lineHeight: 1.7, margin: 0 }}>
              全国どこからでもオンラインで手続きが可能です。
            </p>
          </div>
        </div>

        <p style={{
          fontSize: '12px',
          color: '#9ca3af',
          textAlign: 'center',
          padding: '12px 0',
          margin: 0,
        }}>
          ※法令・定款・契約内容等により、買取できない場合があります。
        </p>
      </section>
    </>
  )
}
