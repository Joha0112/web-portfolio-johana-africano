module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          '50': '#f9fafb',
          '100': '#f0f4f8',
          '500': '#3b82f6',
        },
        secondary: {
          '50': '#f3faf7',
          '100': '#def7ec',
          '500': '#10b981',
        },
      },
    },
  },
  plugins: [],
}
