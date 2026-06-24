import { Mail, ChevronRight, Globe, Building2, Clock } from 'lucide-react'
import heroConsultation from '../../assets/hero/hero-consultation.png'
import saruLogo from '../../assets/hero/saru-logo.png'

const BG = '#f8f7f4'
const NAVY = '#1a2744'
const ORANGE = '#e8550a'

export const Hero = () => {
  return (
    <section style={{ backgroundColor: BG }}>

      {/* ===== HEADER ===== */}
      <header style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e8e8e8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 32px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src={saruLogo} alt="法人サルベージ協会" style={{ height: '80px', width: 'auto' }} />
          <span style={{ color: NAVY, fontWeight: 900, fontSize: '2rem', letterSpacing: '0.04em' }}>
            法人サルベージ協会
          </span>
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

      {/* ===== HERO MAIN ===== */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '42% 58%',
        height: '580px',
        width: '100%',
        overflow: 'hidden',
      }}>

        {/* 左：コピー */}
        <div style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column' as const,
          justifyContent: 'center',
          alignItems: 'center',
          padding: '24px 16px 20px 5%',
        }}>
          {/* ロゴ：右上に絶対配置 */}
          <img
            src={saruLogo}
            alt="法人サルベージ協会"
            style={{ position: 'absolute', top: '20px', right: '20px', height: '120px', width: 'auto', opacity: 0.9 }}
          />
          <div style={{ maxWidth: '460px', width: '100%' }}>

            {/* 不要法人を */}
            <p style={{ color: NAVY, fontSize: '3rem', fontWeight: 700, lineHeight: 1.2, margin: '0' }}>
              不要法人を
            </p>

            {/* 現金化する */}
            <span style={{ display: 'inline-block', position: 'relative', margin: '0 0 4px 0' }}>
              <span style={{ color: ORANGE, fontSize: '5.7rem', fontWeight: 900, lineHeight: 1.0 }}>
                現金化する
              </span>
              <span style={{
                position: 'absolute', left: '2%', bottom: '6px',
                width: '85%', height: '12px',
                background: 'rgba(232,85,10,0.38)',
                borderRadius: '3px', display: 'block', zIndex: -1,
              }} />
            </span>

            {/* 新常識 */}
            <p style={{ color: NAVY, fontSize: '6rem', fontWeight: 900, lineHeight: 1.1, margin: '8px 0 16px 0' }}>
              <span style={{
                display: 'inline',
                background: 'linear-gradient(to top, rgba(232,85,10,0.28) 40%, transparent 40%)',
              }}>
                新常識
              </span>
            </p>

            {/* サブコピー */}
            <p style={{ color: NAVY, fontSize: '1.4rem', lineHeight: 1.8, margin: 0 }}>
              休眠法人・赤字法人・債務超過法人も<br />
              <span style={{ color: ORANGE, fontWeight: 600 }}>価値が残っている</span>可能性があります。
            </p>

          </div>
        </div>

        {/* 右：相談写真 */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', top: 0, bottom: 0, left: 0,
            width: '8%', zIndex: 10, pointerEvents: 'none',
            background: `linear-gradient(to right, ${BG} 0%, rgba(248,247,244,0.4) 60%, transparent 100%)`,
          }} />
          <img
            src={heroConsultation}
            alt="法人の無料相談の様子"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
          />
        </div>
      </div>

      {/* ===== 3 POINTS ===== */}
      <div style={{ backgroundColor: BG, borderTop: '1px solid #e0ddd8' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>

          {/* 01 */}
          <div style={{ padding: '14px 36px', borderRight: '1px solid #e0ddd8' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
              <div style={{
                width: '52px', height: '52px', borderRadius: '50%',
                backgroundColor: ORANGE, color: '#ffffff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 800, fontSize: '1.2rem', fontStyle: 'italic', flexShrink: 0,
              }}>01</div>
              <Building2 style={{ width: '36px', height: '36px', color: ORANGE }} />
            </div>
            <h3 style={{ color: NAVY, fontSize: '1.6rem', fontWeight: 900, lineHeight: 1.2, margin: '0 0 4px 0' }}>買取条件</h3>
            <p style={{ color: ORANGE, fontSize: '0.95rem', fontWeight: 700, margin: '0 0 8px 0' }}>業界最高水準</p>
            <p style={{ color: '#555', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>他社で断られた法人もご相談可能です。</p>
          </div>

          {/* 02 */}
          <div style={{ padding: '14px 36px', borderRight: '1px solid #e0ddd8' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
              <div style={{
                width: '52px', height: '52px', borderRadius: '50%',
                backgroundColor: ORANGE, color: '#ffffff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 800, fontSize: '1.2rem', fontStyle: 'italic', flexShrink: 0,
              }}>02</div>
              <Clock style={{ width: '36px', height: '36px', color: ORANGE }} />
            </div>
            <h3 style={{ color: NAVY, fontSize: '1.6rem', fontWeight: 900, lineHeight: 1.2, margin: '0 0 4px 0' }}>現金化可能</h3>
            <p style={{ color: ORANGE, fontSize: '0.95rem', fontWeight: 700, margin: '0 0 8px 0' }}>最短即日で</p>
            <p style={{ color: '#555', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>スピーディーに査定し、最短即日での現金化が可能です。</p>
          </div>

          {/* 03 */}
          <div style={{ padding: '14px 36px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
              <div style={{
                width: '52px', height: '52px', borderRadius: '50%',
                backgroundColor: ORANGE, color: '#ffffff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 800, fontSize: '1.2rem', fontStyle: 'italic', flexShrink: 0,
              }}>03</div>
              <Globe style={{ width: '36px', height: '36px', color: ORANGE }} />
            </div>
            <h3 style={{ color: NAVY, fontSize: '1.6rem', fontWeight: 900, lineHeight: 1.2, margin: '0 0 4px 0' }}>来店不要で完結</h3>
            <p style={{ color: ORANGE, fontSize: '0.95rem', fontWeight: 700, margin: '0 0 8px 0' }}>全国オンライン対応</p>
            <p style={{ color: '#555', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>日本全国どこからでもご利用いただけるオンライン完結のサービスです。</p>
          </div>
        </div>

        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '8px 36px 14px' }}>
          <p style={{ fontSize: '0.65rem', color: '#aaa', margin: 0 }}>
            ※法令・定款・契約内容等により、買取できない場合があります。
          </p>
        </div>
      </div>

    </section>
  )
}