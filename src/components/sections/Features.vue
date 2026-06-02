<template>
  <section id="features" class="features">
    <div class="features__inner container">
      <div class="features__header">
        <h2 class="features__title">GameLPの特徴</h2>
        <p class="features__lead">
          すべてのプレイヤーに、最高のゲーム体験を。
        </p>
      </div>

      <ul class="features__grid">
        <li v-for="feature in features" :key="feature.id" class="features__card">
          <div class="features__card-icon" :aria-hidden="true" v-html="feature.icon"></div>
          <h3 class="features__card-title">{{ feature.title }}</h3>
          <p class="features__card-desc">{{ feature.desc }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    id: 'multiplayer',
    title: 'マルチプレイ対応',
    desc: '世界中のプレイヤーとリアルタイムで対戦・協力。ラグのない快適なオンライン体験を提供します。',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>`,
  },
  {
    id: 'records',
    title: '実績記録',
    desc: 'プレイ履歴・スコア・トロフィーを自動で記録。自分の成長をビジュアルで確認できます。',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>`,
  },
  {
    id: 'community',
    title: 'コミュニティ',
    desc: '同じゲームを愛するプレイヤーと繋がろう。フォーラム・ギルド・イベントで仲間を見つけよう。',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>`,
  },
  {
    id: 'crossplatform',
    title: 'クロスプラットフォーム',
    desc: 'PC・スマホ・タブレット、どのデバイスからでも同じアカウントでシームレスにプレイ可能。',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <line x1="8" y1="21" x2="16" y2="21"/>
      <line x1="12" y1="17" x2="12" y2="21"/>
    </svg>`,
  },
]
</script>

<style scoped>
.features {
  padding-block: var(--space-20);
  background-color: var(--color-bg-alt);
}

.features__header {
  text-align: center;
  margin-bottom: var(--space-12);
}

.features__title {
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  color: var(--color-text);
  margin-bottom: var(--space-4);
}

.features__lead {
  font-size: var(--text-lg);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
}

.features__grid {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.features__card {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-2xl);
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.features__card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.features__card-icon {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-xl);
  background-color: var(--color-primary);
  color: var(--color-text-inverse);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.features__card-title {
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  color: var(--color-text);
  line-height: var(--leading-snug);
}

.features__card-desc {
  font-size: var(--text-base);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
}

/* 4枚目のカードを中央寄せ */
.features__card:last-child:nth-child(3n + 1) {
  grid-column: 2 / 3;
}

@media (max-width: 1024px) {
  .features__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .features__card:last-child:nth-child(3n + 1) {
    grid-column: auto;
  }
}

@media (max-width: 768px) {
  .features__title {
    font-size: var(--text-3xl);
  }

  .features__grid {
    grid-template-columns: 1fr;
  }
}
</style>
