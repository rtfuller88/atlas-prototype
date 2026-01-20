/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'warm-bg': '#FAFAF9',
        'warm-black': '#1C1917',
        'warm-muted': '#57534E',
        'agreed': '#65A30D',
        'disputed': '#D97706',
        'uncertain': '#6B7280',
        'type-empirical': '#3B82F6',
        'type-inferential': '#8B5CF6',
        'type-normative': '#EC4899',
        'type-confidence': '#6B7280',
      },
    },
  },
  plugins: [],
}
