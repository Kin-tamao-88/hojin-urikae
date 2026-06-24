import { Mail, ClipboardList, Users, FileCheck, Banknote } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: <Mail size={28} color="#e8550a" strokeWidth={1.5} />,
    title: 'お問い合わせ',
    desc: 'フォームまたはお電話にて、まずはお気軽にご連絡ください。秘密厳守で対応いたします。',
    time: '最短即日',
  },
  {
    num: '02',
    icon: <ClipboardList size={28} color="#e8550a" strokeWidth={1.5} />,
    title: '無料査定・ヒアリング',
    desc: '法人の状況や希望条件をお伺いし、専門スタッフが価値を無料で査定します。',
    time: '数日以内',
  },
  {
    num: '03',
    icon: <Users size={28} color="#e8550a" strokeWidth={1.5} />,
    title: '買い手候補のご提案',
    desc: '独自ネットワークから最適な買い手候補をご紹介。条件に合う相手をマッチングします。',
    time: '随時',
  },
  {
    num: '04',
    icon: <FileCheck size={28} color="#e8550a" strokeWidth={1.5} />,
    title: '条件交渉・契約',
    desc: '価格や引き継ぎ条件の交渉をサポート。合意後、売買契約を締結します。',
    time: '合意次第',
  },
  {
    num: '05',
    icon: <Banknote size={28} color="#e8550a" strokeWidth={1.5} />,
    title: '成約・入金',
    desc: '手続き完了後、売却代金が入金されます。アフターフォローも丁寧に対応します。',
    time: '最短○日',
  },
];

export function Flow() {
  return (
    <section style={{ background: '#fff8f5', padding: '80px 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>

        {/* ヘッダー */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{
            color: '#e8550a',
            fontWeight: 700,
            fontSize: '0.85rem',
            letterSpacing: '0.08em',
            marginBottom: 12,
          }}>
            FLOW
          </p>
          <h2 style={{
            fontWeight: 900,
            fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
            color: '#1a1a1a',
            lineHeight: 1.4,
            margin: 0,
          }}>
            売却までの<span style={{ color: '#e8550a' }}>かんたん5ステップ</span>
          </h2>
          <p style={{ color: '#777', fontSize: '0.9rem', marginTop: 12 }}>
            ご相談から成約まで、専門スタッフが一貫してサポートします。
          </p>
        </div>

        {/* ステップリスト */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }} className="flow-steps">
          {steps.map((step, idx) => (
            <div key={step.num}>
              {/* ステップカード */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '72px 1fr auto',
                gap: 20,
                alignItems: 'center',
                background: '#ffffff',
                border: '1px solid #f0e8e0',
                borderRadius: 12,
                padding: '20px 24px',
              }}>
                {/* 左：番号＋アイコン */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    background: '#fff0ea',
                    borderRadius: '50%',
                    width: 56,
                    height: 56,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 4px',
                    position: 'relative',
                  }}>
                    {step.icon}
                    <span style={{
                      position: 'absolute',
                      top: -6,
                      right: -6,
                      background: '#e8550a',
                      color: '#fff',
                      fontWeight: 900,
                      fontSize: '0.65rem',
                      borderRadius: '50%',
                      width: 22,
                      height: 22,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      {step.num}
                    </span>
                  </div>
                </div>

                {/* 中央：テキスト */}
                <div>
                  <p style={{ fontWeight: 800, fontSize: '1.05rem', color: '#1a1a1a', marginBottom: 6 }}>
                    {step.title}
                  </p>
                  <p style={{ fontSize: '0.87rem', color: '#555', lineHeight: 1.7, margin: 0 }}>
                    {step.desc}
                  </p>
                </div>

                {/* 右：期間バッジ */}
                <div style={{
                  background: '#fff0ea',
                  border: '1px solid #f5d5c0',
                  borderRadius: 8,
                  padding: '6px 14px',
                  textAlign: 'center',
                  flexShrink: 0,
                }}>
                  <p style={{ fontSize: '0.7rem', color: '#e8550a', fontWeight: 600, margin: '0 0 2px' }}>目安</p>
                  <p style={{ fontSize: '0.85rem', color: '#e8550a', fontWeight: 800, margin: 0, whiteSpace: 'nowrap' }}>
                    {step.time}
                  </p>
                </div>
              </div>

              {/* 矢印コネクタ */}
              {idx < steps.length - 1 && (
                <div style={{ textAlign: 'center', padding: '6px 0', color: '#e8550a', fontSize: '1.2rem' }}>
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 補足テキスト */}
        <p style={{
          textAlign: 'center',
          fontSize: '0.82rem',
          color: '#aaa',
          marginTop: 32,
        }}>
          ※状況により期間は異なります。まずはお気軽にご相談ください。
        </p>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .flow-steps > div > div[style] {
            grid-template-columns: 56px 1fr !important;
          }
          .flow-steps > div > div > div:last-child {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}