import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-instrument-serif)', 'ui-serif', 'Georgia', 'serif'],
        body: ['var(--font-geist)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
        sans: ['var(--font-geist)', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: 'var(--bg)',
        'bg-raised': 'var(--bg-raised)',
        line: 'var(--line)',
        'line-strong': 'var(--line-strong)',
        fg: 'var(--fg)',
        'fg-2': 'var(--fg-2)',
        'fg-muted': 'var(--fg-muted)',
        'invert-bg': 'var(--invert-bg)',
        'invert-fg': 'var(--invert-fg)',
        'invert-muted': 'var(--invert-muted)',
      },
    },
  },
  plugins: [typography],
}

export default config
