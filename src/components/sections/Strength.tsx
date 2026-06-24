import { Building2, Timer, Lock, FileText, CheckCircle } from 'lucide-react';
import syoudanImg from '../../assets/people/syoudan-lp2.png';

const reasons = [
  {
    num: '01',
    icon: <Building2 size={32} color="#e8550a" strokeWidth={1.5} />,
    title: '業界最高水準の買取価格',
    desc: '多数の買い手ネットワークと独自のノウハウにより、業界最高水準の買取価格をご提示します。',
  },
  {
    num: '02',
    icon: <Timer size={32} color="#e8550a" strokeWidth={1.5} />,
    title: '最短○日で現金化が可能',
    desc: '迅速な査定とスピーディーな手続きで、最短○日での現金化を実現します。',
  },
  {
    num: '03',
    icon: <Lock size={32} color="#e8550a" strokeWidth={1.5} />,
    title: '秘密厳守で安心の取引',
    desc: '企業情報や取引内容は厳重に管理し、秘密厳守で安心してご相談いただけます。',
  },
];

const checks = [
  '全国対応 47都道府県',
  '初回相談 完全無料',
  'オンライン相談 対応可能',
];

export function Strength() {
  return (
    <section style={{ background: '#fff8f5' }}>
      {/* 上ブロック：3つの理由 */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '72px 24px 56px' }}>
        <h2
          style={{
            color: '#1a1a1a',
            fontWeight: 900,
            fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
            textAlign: 'center',
            marginBottom: 48,
            letterSpacing: '-0.01em',
          }}
        >
          ＼ 法人売却センターが選ばれる{' '}
          <span style={{ color: '#e8550a' }}>3つの理由</span> ／
        </h2>

        {/* 3カラムカード */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
          }}
          className="strength-cards"
        >
          {reasons.map((r) => (
            <div
              key={r.num}
              style={{
                background: '#ffffff',
                border: '1px solid #e8e0d8',
                borderRadius: 12,
                padding: '28px 24px 32px',
                position: 'relative',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  top: 20,
                  left: 20,
                  background: '#e8550a',
                  color: '#ffffff',
                  fontWeight: 900,
                  fontSize: '0.75rem',
                  borderRadius: '50%',
                  width: 36,
                  height: 36,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  letterSpacing: '0.02em',
                }}
              >
                {r.num}
              </span>
              <div style={{ marginTop: 36, marginBottom: 16 }}>{r.icon}</div>
              <p
                style={{
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  color: '#1a1a1a',
                  marginBottom: 10,
                }}
              >
                {r.title}
              </p>
              <p style={{ fontWeight: 400, fontSize: '0.9rem', color: '#444', lineHeight: 1.7 }}>
                {r.desc}
              </p>
            </div>
          ))}
        </div>

        {/* フルワイドCTAボタン */}
        <a
          href="#contact"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            marginTop: 36,
            background: '#e8550a',
            color: '#ffffff',
            fontWeight: 900,
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            borderRadius: 8,
            padding: '20px 32px',
            textDecoration: 'none',
            transition: 'background 0.18s',
            width: '100%',
          }}
          onMouseOver={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = '#c94208')}
          onMouseOut={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = '#e8550a')}
        >
          <FileText size={22} strokeWidth={2} />
          今すぐ無料で査定する
          <span style={{ fontSize: '1.3em', lineHeight: 1 }}>›</span>
        </a>
      </div>

      {/* 下ブロック：専門チームセクション */}
      <div
        style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px 80px' }}
        className="strength-team"
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '55% 45%',
            gap: 48,
            alignItems: 'center',
          }}
          className="strength-team-inner"
        >
          {/* 左エリア */}
          <div>
            <h3
              style={{
                fontWeight: 900,
                fontSize: 'clamp(1.4rem, 3vw, 2.1rem)',  /* ← 少し下げて最終行を1行に収める */
                color: '#1a1a1a',
                lineHeight: 1.5,
                marginBottom: 20,
              }}
            >
              法人売却・事業承継の
              <br />
              <span style={{ color: '#e8550a' }}>専門チーム</span>が
              あなたの会社の<span style={{ color: '#e8550a' }}>未来</span>をサポートします
            </h3>
            <p
              style={{
                fontWeight: 400,
                fontSize: '0.95rem',
                color: '#555',
                lineHeight: 1.8,
                marginBottom: 28,
              }}
            >
              豊富な経験と専門知識を持つコンサルタントが、
              <br />
              お客様一人ひとりに最適な解決策をご提案いたします。
              <br />
              まずはお気軽にご相談ください。
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {checks.map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <CheckCircle size={20} color="#e8550a" strokeWidth={2} />
                  <span style={{ fontWeight: 400, fontSize: '0.95rem', color: '#1a1a1a' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* 右エリア：画像 */}
          <div style={{ height: '100%', minHeight: 360 }}>  {/* ← 高さを確保 */}
            <img
              src={syoudanImg}
              alt="専門チームによる商談シーン"
              style={{
                width: '100%',
                height: '100%',
                minHeight: 360,        /* ← 最低高さ指定 */
                borderRadius: 12,
                objectFit: 'cover',
                objectPosition: 'center top',  /* ← 上半身を優先表示 */
                display: 'block',
              }}
            />
          </div>
        </div>
      </div>

      {/* レスポンシブ調整 */}
      <style>{`
        @media (max-width: 768px) {
          .strength-cards {
            grid-template-columns: 1fr !important;
          }
          .strength-team-inner {
            grid-template-columns: 1fr !important;
          }
          .strength-team-inner > div:last-child {
            order: 2;
            min-height: 260px !important;
          }
          .strength-team-inner > div:first-child {
            order: 1;
          }
        }
      `}</style>
    </section>
  );
}