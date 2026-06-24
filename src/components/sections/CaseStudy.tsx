import { CheckCircle, FileText } from 'lucide-react';
import personIt from '../../assets/people/person-it.png';
import personConstruction from '../../assets/people/person-construction.png';
import personDormant from '../../assets/people/person-dormant.png';

const cases = [
  {
    num: 'CASE 01',
    category: 'IT企業（システム開発業）',
    before: { label: '他社査定', value: '買取不可', isText: true },
    after: { label: '弊社成約額', value: '200万円' },
    situation: '赤字決算が続き、他社から買取不可と判断された法人。',
    reason: '独自のネットワークにより、事業価値や資産価値を再評価。',
    voice: '他社では「価値がない」と言われて諦めていましたが、想定以上の金額で売却できて感謝しています。',
    img: personIt,
  },
  {
    num: 'CASE 02',
    category: '建設業（内装工事業）',
    before: { label: '他社提示額', value: '140万円', isText: false },
    after: { label: '弊社成約額', value: '700万円' },
    situation: '借入が多く、他社提示額はわずか140万円と低く評価されていた。',
    reason: '取引先との契約関係やブランド価値を評価し、高額売却を実現。',
    voice: '借金が多く売れると思っていませんでしたが、予想を大きく上回る金額で売却できました。',
    img: personConstruction,
  },
  {
    num: 'CASE 03',
    category: '休眠法人（不動産管理業）',
    before: { label: '解散予定', value: '0円', isText: false },
    after: { label: '弊社成約額', value: '120万円' },
    situation: '事業を停止し数年間放置していた休眠法人。',
    reason: '会社としての信用履歴や資産を評価し、再利用価値を見出すことができた。',
    voice: '解散費用もかかると思っていましたが、思わぬ臨時収入になり、非常に助かりました。',
    img: personDormant,
  },
];

export function CaseStudy() {
  return (
    <section style={{ background: '#ffffff', padding: '80px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

        {/* セクションヘッダー */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ display: 'inline-block', marginBottom: 16 }}>
            <span style={{
              display: 'inline-block',
              border: '1.5px solid #e8550a',
              color: '#e8550a',
              fontWeight: 700,
              fontSize: '0.85rem',
              borderRadius: 999,
              padding: '4px 20px',
              letterSpacing: '0.05em',
            }}>
              実際の成約事例
            </span>
          </div>
          <h2 style={{
            fontWeight: 900,
            fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
            color: '#1a1a1a',
            lineHeight: 1.4,
            margin: 0,
          }}>
            他社で買取不可・低額査定だった法人でも
            <br />
            <span style={{ color: '#e8550a' }}>高額売却</span>を実現しています
          </h2>
          <p style={{ color: '#777', fontSize: '0.9rem', marginTop: 12 }}>
            法人の状況は様々ですが、多数の高額売却実績があります。
          </p>
        </div>

        {/* 3カラムCASEカード */}
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}
          className="case-cards"
        >
          {cases.map((c) => (
            <div
              key={c.num}
              style={{
                background: '#fff8f5',
                border: '1px solid #f0e8e0',
                borderRadius: 16,
                padding: '24px 20px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              {/* カードヘッダー */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{
                  background: '#e8550a',
                  color: '#fff',
                  fontWeight: 900,
                  fontSize: '0.75rem',
                  borderRadius: 6,
                  padding: '4px 10px',
                  letterSpacing: '0.05em',
                  whiteSpace: 'nowrap',
                }}>
                  {c.num}
                </span>
                <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#1a1a1a' }}>
                  {c.category}
                </span>
              </div>

              {/* Before → After */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                background: '#fff',
                borderRadius: 10,
                padding: '14px 16px',
              }}>
                {/* Before */}
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <p style={{ fontSize: '0.72rem', color: '#999', marginBottom: 4, fontWeight: 500 }}>
                    {c.before.label}
                  </p>
                  <p style={{
                    fontWeight: 900,
                    fontSize: c.before.isText ? '1.3rem' : '1.5rem',
                    color: '#aaa',
                    lineHeight: 1,
                  }}>
                    {c.before.value}
                  </p>
                </div>
                {/* 矢印 */}
                <span style={{ color: '#e8550a', fontSize: '1.4rem', fontWeight: 900, lineHeight: 1 }}>→</span>
                {/* After */}
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <p style={{ fontSize: '0.72rem', color: '#e8550a', marginBottom: 4, fontWeight: 600 }}>
                    {c.after.label}
                  </p>
                  <p style={{
                    fontWeight: 900,
                    fontSize: '1.6rem',
                    color: '#e8550a',
                    lineHeight: 1,
                  }}>
                    {c.after.value}
                  </p>
                </div>
              </div>

              {/* 法人の状況・売却できた理由 */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                  <CheckCircle size={16} color="#e8550a" strokeWidth={2} style={{ marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <span style={{ fontWeight: 700, fontSize: '0.8rem', color: '#e8550a' }}>法人の状況　</span>
                    <span style={{ fontSize: '0.82rem', color: '#444', lineHeight: 1.6 }}>{c.situation}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                  <CheckCircle size={16} color="#e8550a" strokeWidth={2} style={{ marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <span style={{ fontWeight: 700, fontSize: '0.8rem', color: '#e8550a' }}>売却できた理由　</span>
                    <span style={{ fontSize: '0.82rem', color: '#444', lineHeight: 1.6 }}>{c.reason}</span>
                  </div>
                </div>
              </div>

              {/* オーナーの声 */}
              <div>
                <p style={{ fontWeight: 700, fontSize: '0.8rem', color: '#e8550a', marginBottom: 8 }}>
                  オーナー様の声
                </p>
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <img
                    src={c.img}
                    alt="オーナー様"
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: '50%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      flexShrink: 0,
                      border: '2px solid #f0e8e0',
                    }}
                  />
                  <p style={{ fontSize: '0.82rem', color: '#444', lineHeight: 1.7, margin: 0 }}>
                    {c.voice}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 免責注記 */}
        <p style={{ textAlign: 'center', fontSize: '0.78rem', color: '#aaa', marginTop: 20 }}>
          ※上記は一例であり、すべての法人が同様の金額で売却できることを保証するものではありません。
        </p>

        {/* 下部ミニCTAバナー */}
        <div style={{
          marginTop: 40,
          background: '#fff8f5',
          border: '1px solid #f0e8e0',
          borderRadius: 16,
          padding: '28px 32px',
          display: 'flex',
          alignItems: 'center',
          gap: 32,
          flexWrap: 'wrap',
        }}
          className="case-cta-banner"
        >
          {/* 左：画像＋テキスト */}
          <div style={{ flex: 1, minWidth: 240, display: 'flex', alignItems: 'center', gap: 20 }}>
            <img
              src={personIt}
              alt=""
              style={{ width: 72, height: 72, borderRadius: 8, objectFit: 'cover', flexShrink: 0 }}
            />
            <div>
              <p style={{ fontWeight: 900, fontSize: '1rem', color: '#1a1a1a', marginBottom: 8 }}>
                あなたの法人にも、<span style={{ color: '#e8550a' }}>思わぬ価値が残っている</span>かもしれません。
              </p>
              <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                {['最短○日で査定完了', '情報は完全に秘密厳守', '相談・査定はすべて無料'].map((item) => (
                  <span key={item} style={{ fontSize: '0.8rem', color: '#666', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span style={{ color: '#e8550a', fontWeight: 700 }}>✓</span> {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 右：CTAボタン */}
          <a
            href="#contact"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              background: '#e8550a',
              color: '#fff',
              fontWeight: 900,
              fontSize: '1rem',
              borderRadius: 8,
              padding: '16px 28px',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              transition: 'background 0.18s',
              flexShrink: 0,
            }}
            onMouseOver={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = '#c94208')}
            onMouseOut={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = '#e8550a')}
          >
            <FileText size={18} strokeWidth={2} />
            今すぐ無料で査定してみる
            <span style={{ fontSize: '1.2em' }}>›</span>
          </a>
        </div>
      </div>

      {/* レスポンシブ */}
      <style>{`
        @media (max-width: 900px) {
          .case-cards {
            grid-template-columns: 1fr !important;
          }
          .case-cta-banner {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}