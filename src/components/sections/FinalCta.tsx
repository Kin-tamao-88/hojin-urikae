import { useState } from 'react';
import { Mail, Phone, Lock, Clock, CheckCircle } from 'lucide-react';

const trustItems = [
  { icon: <Clock size={18} color="#e8550a" strokeWidth={2} />, text: '最短即日対応' },
  { icon: <Lock size={18} color="#e8550a" strokeWidth={2} />, text: '秘密厳守・NDA締結' },
  { icon: <CheckCircle size={18} color="#e8550a" strokeWidth={2} />, text: '相談・査定 完全無料' },
];

export function FinalCta() {
  const [form, setForm] = useState({
    company: '',
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // TODO: Supabase連携
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ background: '#fff8f5', padding: '80px 0' }}>
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>

        {/* ヘッダー */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{
            color: '#e8550a',
            fontWeight: 700,
            fontSize: '0.85rem',
            letterSpacing: '0.08em',
            marginBottom: 12,
          }}>
            CONTACT
          </p>
          <h2 style={{
            fontWeight: 900,
            fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
            color: '#1a1a1a',
            lineHeight: 1.4,
            margin: '0 0 16px',
          }}>
            まずは<span style={{ color: '#e8550a' }}>無料で相談</span>してみませんか？
          </h2>
          <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
            秘密厳守・相談無料で、あなたの状況に合わせた最適なご提案をいたします。
            <br />
            しつこい営業は一切いたしません。
          </p>

          {/* トラストバッジ */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 16,
            marginTop: 24,
            flexWrap: 'wrap',
          }}>
            {trustItems.map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                background: '#fff0ea',
                border: '1px solid #f5d5c0',
                borderRadius: 999,
                padding: '6px 16px',
              }}>
                {item.icon}
                <span style={{ color: '#e8550a', fontSize: '0.85rem', fontWeight: 600 }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* フォームカード */}
        {!submitted ? (
          <div style={{
            background: '#ffffff',
            borderRadius: 20,
            padding: 'clamp(24px, 5vw, 48px)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
            border: '1px solid #f0e8e0',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="fct-row">
                <div>
                  <label style={labelStyle}>法人名 <span style={{ color: '#e8550a' }}>*</span></label>
                  <input name="company" value={form.company} onChange={handleChange} placeholder="株式会社〇〇" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>お名前 <span style={{ color: '#e8550a' }}>*</span></label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="山田 太郎" style={inputStyle} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="fct-row">
                <div>
                  <label style={labelStyle}>電話番号 <span style={{ color: '#e8550a' }}>*</span></label>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="090-0000-0000" style={inputStyle} type="tel" />
                </div>
                <div>
                  <label style={labelStyle}>メールアドレス</label>
                  <input name="email" value={form.email} onChange={handleChange} placeholder="example@mail.com" style={inputStyle} type="email" />
                </div>
              </div>

              <div>
                <label style={labelStyle}>ご相談内容（任意）</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="法人の状況・売却のご希望など、お気軽にご記入ください。"
                  rows={4}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: 100 }}
                />
              </div>

              <button
                onClick={handleSubmit}
                style={{
                  width: '100%',
                  background: '#e8550a',
                  color: '#fff',
                  fontWeight: 900,
                  fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                  border: 'none',
                  borderRadius: 10,
                  padding: '18px 32px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10,
                  transition: 'background 0.18s',
                }}
                onMouseOver={(e) => ((e.currentTarget as HTMLButtonElement).style.background = '#c94208')}
                onMouseOut={(e) => ((e.currentTarget as HTMLButtonElement).style.background = '#e8550a')}
              >
                <Mail size={20} strokeWidth={2} />
                無料で査定を申し込む
                <span style={{ fontSize: '1.3em', lineHeight: 1 }}>›</span>
              </button>

              <p style={{ textAlign: 'center', fontSize: '0.78rem', color: '#aaa', margin: 0 }}>
                簡単60秒入力・しつこい営業は一切いたしません
              </p>
            </div>
          </div>
        ) : (
          <div style={{
            background: '#ffffff',
            borderRadius: 20,
            padding: '60px 40px',
            textAlign: 'center',
            border: '1px solid #f0e8e0',
          }}>
            <CheckCircle size={56} color="#e8550a" strokeWidth={1.5} style={{ margin: '0 auto 20px' }} />
            <h3 style={{ fontWeight: 900, fontSize: '1.5rem', color: '#1a1a1a', marginBottom: 12 }}>
              お問い合わせありがとうございます
            </h3>
            <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: 1.8 }}>
              内容を確認の上、担当者よりご連絡いたします。
              <br />
              通常1営業日以内にご返信いたします。
            </p>
          </div>
        )}

        {/* 電話番号 */}
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: 8 }}>
            お電話でのご相談はこちら（受付 9:00〜18:00）
          </p>
          <a
            href="tel:03-XXXX-XXXX"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              color: '#e8550a',
              fontWeight: 900,
              fontSize: 'clamp(1.4rem, 4vw, 2rem)',
              textDecoration: 'none',
              letterSpacing: '0.02em',
            }}
          >
            <Phone size={28} strokeWidth={2} />
            03-XXXX-XXXX
          </a>
        </div>

      </div>

      <style>{`
        @media (max-width: 600px) {
          .fct-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontWeight: 700,
  fontSize: '0.85rem',
  color: '#1a1a1a',
  marginBottom: 6,
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  border: '1.5px solid #e0d8d0',
  borderRadius: 8,
  padding: '12px 14px',
  fontSize: '0.95rem',
  color: '#1a1a1a',
  background: '#fafafa',
  outline: 'none',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
};