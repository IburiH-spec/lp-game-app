<template>
  <section id="how-it-works" class="hiw">
    <div class="hiw__inner container">
      <div class="hiw__header">
        <h2 class="hiw__title">使い方</h2>
        <p class="hiw__lead">
          たった4ステップで、ゲームの新世界へ。
        </p>
      </div>

      <ol class="hiw__steps">
        <li v-for="step in steps" :key="step.id" class="hiw__step">
          <div class="hiw__step-num" aria-hidden="true">{{ step.num }}</div>
          <div class="hiw__step-icon" aria-hidden="true" v-html="step.icon"></div>
          <div class="hiw__step-body">
            <h3 class="hiw__step-title">{{ step.title }}</h3>
            <p class="hiw__step-desc">{{ step.desc }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    id: 'register',
    num: '①',
    title: 'アカウント登録',
    desc: 'メールアドレスまたはSNSアカウントで無料登録。30秒で完了します。',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="8.5" cy="7" r="4"/>
      <line x1="20" y1="8" x2="20" y2="14"/>
      <line x1="23" y1="11" x2="17" y2="11"/>
    </svg>`,
  },
  {
    id: 'profile',
    num: '②',
    title: 'プロフィール設定',
    desc: 'アバター・ゲームジャンル・プレイスタイルを設定して自分らしいプロフィールを作ろう。',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>`,
  },
  {
    id: 'friends',
    num: '③',
    title: 'フレンド追加',
    desc: 'IDで検索するか、コミュニティから気の合う仲間を見つけてフレンド登録しよう。',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <polyline points="16 11 18 13 22 9"/>
    </svg>`,
  },
  {
    id: 'play',
    num: '④',
    title: 'ゲーム開始',
    desc: 'フレンドと一緒に、またはソロで好きなゲームを選んで今すぐプレイ開始！',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="5 3 19 12 5 21 5 3"/>
    </svg>`,
  },
]
</script>

<style scoped>
.hiw {
  padding-block: var(--space-20);
  background-color: var(--color-bg-alt);
}

.hiw__header {
  text-align: center;
  margin-bottom: var(--space-12);
}

.hiw__title {
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  color: var(--color-text);
  margin-bottom: var(--space-4);
}

.hiw__lead {
  font-size: var(--text-lg);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
}

.hiw__steps {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
  position: relative;
}

/* ステップ間のコネクター線 */
.hiw__steps::before {
  content: '';
  position: absolute;
  top: 28px;
  left: calc(12.5% + var(--space-8));
  right: calc(12.5% + var(--space-8));
  height: 2px;
  background: linear-gradient(
    to right,
    var(--color-primary-light),
    var(--color-primary)
  );
  z-index: 0;
}

.hiw__step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-4);
  position: relative;
  z-index: 1;
}

.hiw__step-num {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-full);
  background-color: var(--color-primary);
  color: var(--color-text-inverse);
  font-size: var(--text-xl);
  font-weight: var(--font-bold);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: var(--shadow-md);
}

.hiw__step-icon {
  width: 64px;
  height: 64px;
  border-radius: var(--radius-2xl);
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.hiw__step:hover .hiw__step-icon {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.hiw__step-title {
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  color: var(--color-text);
  line-height: var(--leading-snug);
}

.hiw__step-desc {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
}

@media (max-width: 1024px) {
  .hiw__steps {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-8);
  }

  .hiw__steps::before {
    display: none;
  }
}

@media (max-width: 768px) {
  .hiw__title {
    font-size: var(--text-3xl);
  }

  .hiw__steps {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .hiw__step {
    flex-direction: row;
    text-align: left;
    align-items: flex-start;
    padding-block: var(--space-6);
    gap: var(--space-5);
  }

  /* モバイル用縦コネクター線 */
  .hiw__step:not(:last-child)::after {
    content: '';
    position: absolute;
    left: 27px;
    top: calc(var(--space-6) + 56px);
    bottom: 0;
    width: 2px;
    background-color: var(--color-border-dark);
  }

  .hiw__step-num {
    flex-shrink: 0;
  }

  .hiw__step-icon {
    display: none;
  }

  .hiw__step-body {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }
}
</style>
