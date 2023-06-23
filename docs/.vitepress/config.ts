import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'ns1 observium',
  description: '',
  base: '/ns1-observium/',
  themeConfig: {
    outline: [2, 3],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/HiWay-Media/ns1-observium' },
    ],
    sidebar: [
      { text: 'Introduction', link: '/' },
    ],
  },
})