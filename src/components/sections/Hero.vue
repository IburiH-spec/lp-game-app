<template>
  <section class="hero">
    <div class="hero__inner container">
      <div class="hero__content">
        <h1 class="hero__title">
          ゲームの世界を、<br>
          もっと楽しく。
        </h1>
        <p class="hero__subtitle">
          GameLPは次世代のゲーム体験をあなたに届けます。<br>
          仲間と繋がり、記録を競い、新しい冒険を始めよう。
        </p>
        <div class="hero__cta">
          <a href="#contact" class="hero__btn hero__btn--primary">今すぐ始める</a>
          <a href="#features" class="hero__btn hero__btn--secondary">詳しく見る</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100svh;
  padding-top: 64px;
  display: flex;
  align-items: center;
  background: linear-gradient(
    135deg,
    var(--color-bg-dark) 0%,
    #1e3a8a 40%,
    var(--color-primary) 100%
  );
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse 80% 60% at 60% 50%,
    rgb(59 130 246 / 0.25) 0%,
    transparent 70%
  );
  pointer-events: none;
}

.hero__inner {
  position: relative;
  z-index: 1;
  padding-block: var(--space-20);
}

.hero__content {
  max-width: 680px;
}

.hero__title {
  font-size: var(--text-6xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  color: var(--color-text-inverse);
  margin-bottom: var(--space-6);
  letter-spacing: -0.03em;
}

.hero__subtitle {
  font-size: var(--text-lg);
  line-height: var(--leading-relaxed);
  color: rgb(255 255 255 / 0.8);
  margin-bottom: var(--space-10);
}

.hero__cta {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  flex-wrap: wrap;
}

.hero__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-4) var(--space-8);
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  border-radius: var(--radius-full);
  text-decoration: none;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast), background-color var(--transition-fast);
  white-space: nowrap;
}

.hero__btn:hover {
  transform: translateY(-2px);
  text-decoration: none;
}

.hero__btn--primary {
  background-color: var(--color-text-inverse);
  color: var(--color-primary-dark);
  box-shadow: var(--shadow-lg);
}

.hero__btn--primary:hover {
  background-color: var(--color-bg-alt);
  color: var(--color-primary-dark);
  box-shadow: var(--shadow-xl);
}

.hero__btn--secondary {
  background-color: transparent;
  color: var(--color-text-inverse);
  border: 2px solid rgb(255 255 255 / 0.6);
}

.hero__btn--secondary:hover {
  background-color: rgb(255 255 255 / 0.1);
  color: var(--color-text-inverse);
  border-color: var(--color-text-inverse);
}

@media (max-width: 768px) {
  .hero__title {
    font-size: var(--text-4xl);
  }

  .hero__subtitle {
    font-size: var(--text-base);
  }

  .hero__cta {
    flex-direction: column;
    align-items: stretch;
  }

  .hero__btn {
    text-align: center;
  }
}
</style>
