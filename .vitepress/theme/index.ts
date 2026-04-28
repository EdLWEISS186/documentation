import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './style.css'
import CookieBar from './components/CookieBar.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(CookieBar),
      'nav-bar-content-after': () => h('div', { class: 'hidden md:flex items-center ml-4' }, [
        h('a', {
          href: 'https://www.dachain.tech',
          target: '_blank',
          class: 'bg-secondary text-white text-center font-headline font-bold px-6 py-2 hover:bg-primary transition-all duration-300 text-sm uppercase dac-hack-btn w-fit min-w-[140px] flex items-center justify-center'
        }, h('span', { 'data-value': 'DAC Website' }, 'DAC Website'))
      ])
    })
  },
  enhanceApp({ app }) {
    // App enhancements
  }
}
