/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // CLAUDE.md 準拠パレット（紺#1e3a5f / 赤#b03023 / 金#9a7a3a / 背景#ffffff・#fafafa / 金薄#fff8ee / 金枠#d4af37）
      colors: {
        navy: {
          DEFAULT: "#1e3a5f",
          dark: "#16304d",
          light: "#2c4a70",
        },
        gold: {
          DEFAULT: "#9a7a3a",
          light: "#d4af37", // ゴールドボーダー用
          dark: "#846526",
        },
        cream: "#fff8ee",
        // グレー系テキスト禁止：本文も #1e3a5f に統一
        ink: {
          DEFAULT: "#1e3a5f",
          light: "#1e3a5f",
          muted: "#1e3a5f",
        },
        cta: {
          DEFAULT: "#b03023",
          hover: "#8f2519",
        },
        // グレー系背景禁止：オフホワイトへ
        slate: {
          card: "#1e3a5f",
          bg: "#fafafa",
        },
        teal: {
          DEFAULT: "#1e3a5f",
        },
        mint: "#fafafa",
        skyblue: "#fafafa",
      },
      fontFamily: {
        sans: [
          '"Noto Sans JP"',
          "system-ui",
          '"Hiragino Kaku Gothic ProN"',
          '"Yu Gothic"',
          "Meiryo",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "1120px",
      },
      // CLAUDE.md: box-shadow 禁止 → 全て none（境界は border 1px #e2e8f0 で代替）
      boxShadow: {
        card: "none",
        "card-hover": "none",
        cta: "none",
      },
    },
  },
  plugins: [],
}
