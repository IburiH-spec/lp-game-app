<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const navItems = [
  { label: '特徴', href: '#features' },
  { label: '使い方', href: '#how-to-use' },
  { label: 'お客様の声', href: '#testimonials' },
  { label: 'お問い合わせ', href: '#contact' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="['header', { 'header--scrolled': isScrolled }]">
    <div class="header__inner container">
      <a href="#" class="header__logo">GameLP</a>

      <nav
        class="header__nav"
        :class="{ 'header__nav--open': isMenuOpen }"
        aria-label="メインナビゲーション"
      >
        <ul class="header__nav-list">
          <li v-for="item in navItems" :key="item.href" class="header__nav-item">
            <a :href="item.href" class="header__nav-link" @click="closeMenu">
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>

      <button
        class="header__hamburger"
        :class="{ 'header__hamburger--open': isMenuOpen }"
        @click="toggleMenu"
        :aria-label="isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'"
        :aria-expanded="isMenuOpen"
      >
        <span class="header__hamburger-line"></span>
        <span class="header__hamburger-line"></span>
        <span class="header__hamburger-line"></span>
      </button>
    </div>

    <div
      v-if="isMenuOpen"
      class="header__overlay"
      @click="closeMenu"
      aria-hidden="true"
    ></div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-sticky);
  background-color: transparent;
  transition: background-color var(--transition-base), box-shadow var(--transition-base);
}

.header--scrolled {
  background-color: var(--color-bg);
  box-shadow: var(--shadow-md);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.header__logo {
  font-size: var(--text-xl);
  font-weight: var(--font-bold);
  color: var(--color-accent);
  text-decoration: none;
  letter-spacing: -0.02em;
  flex-shrink: 0;
}

.header__logo:hover {
  color: var(--color-accent-dark);
  text-decoration: none;
}

.header__nav-list {
  display: flex;
  align-items: center;
  gap: var(--space-8);
  list-style: none;
  margin: 0;
  padding: 0;
}

.header__nav-link {
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-text-inverse);
  text-decoration: none;
  padding-block: var(--space-2);
  white-space: nowrap;
  transition: color var(--transition-fast);
}

.header__nav-link:hover {
  color: var(--color-accent);
  text-decoration: none;
}

.header--scrolled .header__nav-link {
  color: var(--color-text);
}

.header--scrolled .header__nav-link:hover {
  color: var(--color-accent);
}

.header__hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--space-2);
  border-radius: var(--radius-md);
}

.header__hamburger:hover {
  background-color: var(--color-bg-alt);
}

.header__hamburger-line {
  display: block;
  width: 22px;
  height: 2px;
  background-color: var(--color-text);
  border-radius: var(--radius-full);
  transition: transform var(--transition-base), opacity var(--transition-fast), transform var(--transition-base);
}

.header__hamburger--open .header__hamburger-line:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.header__hamburger--open .header__hamburger-line:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.header__hamburger--open .header__hamburger-line:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 768px) {
  .header__hamburger {
    display: flex;
  }

  .header__nav {
    position: fixed;
    top: 64px;
    right: 0;
    bottom: 0;
    width: 280px;
    background-color: var(--color-bg);
    box-shadow: var(--shadow-xl);
    transform: translateX(100%);
    transition: transform var(--transition-base);
    overflow-y: auto;
    z-index: var(--z-sticky);
  }

  .header__nav--open {
    transform: translateX(0);
  }

  .header__nav-list {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: var(--space-4) 0;
  }

  .header__nav-item {
    border-bottom: 1px solid var(--color-border);
  }

  .header__nav-item:first-child {
    border-top: 1px solid var(--color-border);
  }

  .header__nav-link {
    display: block;
    padding: var(--space-4) var(--space-6);
    font-size: var(--text-base);
    color: var(--color-text);
  }

  .header__overlay {
    position: fixed;
    inset: 0;
    background-color: rgb(0 0 0 / 0.4);
    z-index: calc(var(--z-sticky) - 1);
  }
}
</style>
