<template>
  <section id="testimonials" class="testimonials">
    <div class="testimonials__inner container">
      <div class="testimonials__header">
        <h2 class="testimonials__title">ユーザーの声</h2>
        <p class="testimonials__lead">
          世界中のプレイヤーが GameLP を選ぶ理由。
        </p>
      </div>

      <ul class="testimonials__grid">
        <li v-for="review in reviews" :key="review.id" class="testimonials__card">
          <div class="testimonials__stars" :aria-label="`${review.rating}点満点`">
            <span
              v-for="i in 5"
              :key="i"
              class="testimonials__star"
              :class="{ 'testimonials__star--filled': i <= review.rating }"
              aria-hidden="true"
            >★</span>
          </div>
          <blockquote class="testimonials__comment">
            <p>{{ review.comment }}</p>
          </blockquote>
          <div class="testimonials__user">
            <div class="testimonials__avatar" :aria-hidden="true">
              {{ review.avatarInitial }}
            </div>
            <div class="testimonials__user-info">
              <span class="testimonials__user-name">{{ review.name }}</span>
              <span class="testimonials__user-meta">{{ review.meta }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const reviews = [
  {
    id: 'user-1',
    rating: 5,
    comment: 'フレンドと一緒にプレイできる環境が最高です。遅延もほとんどなく、毎晩ログインするのが楽しみになりました。コミュニティも温かくて居心地がいいです。',
    name: 'たかし@ゲーマー',
    meta: 'マルチプレイ愛好家 · 利用歴1年',
    avatarInitial: 'た',
  },
  {
    id: 'user-2',
    rating: 5,
    comment: '実績記録機能が本当に便利。自分がどれだけ上達したか一目でわかるので、モチベーションが続きます。クロスプラットフォームで外出先もスマホで遊べるのも◎。',
    name: 'Yuki_Pro',
    meta: 'ランキング上位プレイヤー · 利用歴8ヶ月',
    avatarInitial: 'Y',
  },
  {
    id: 'user-3',
    rating: 4,
    comment: 'アカウント登録が驚くほど簡単で、すぐにプレイ開始できました。UIも直感的で迷わない。今後のアップデートにも期待しています！',
    name: 'さくら🌸',
    meta: 'カジュアルゲーマー · 利用歴3ヶ月',
    avatarInitial: 'さ',
  },
]
</script>

<style scoped>
.testimonials {
  padding-block: var(--space-20);
  background-color: var(--color-bg-alt);
}

.testimonials__header {
  text-align: center;
  margin-bottom: var(--space-12);
}

.testimonials__title {
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  color: var(--color-text);
  margin-bottom: var(--space-4);
}

.testimonials__lead {
  font-size: var(--text-lg);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
}

.testimonials__grid {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.testimonials__card {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-2xl);
  padding: var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.testimonials__card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.testimonials__stars {
  display: flex;
  gap: var(--space-1);
}

.testimonials__star {
  font-size: var(--text-xl);
  color: var(--color-border-dark);
  line-height: 1;
}

.testimonials__star--filled {
  color: var(--color-warning);
}

.testimonials__comment {
  margin: 0;
  flex: 1;
}

.testimonials__comment p {
  font-size: var(--text-base);
  color: var(--color-text);
  line-height: var(--leading-relaxed);
  position: relative;
  padding-left: var(--space-5);
}

.testimonials__comment p::before {
  content: '"';
  position: absolute;
  left: 0;
  top: -4px;
  font-size: var(--text-3xl);
  color: var(--color-primary-light);
  font-family: Georgia, serif;
  line-height: 1;
}

.testimonials__user {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border);
}

.testimonials__avatar {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-full);
  background-color: var(--color-primary);
  color: var(--color-text-inverse);
  font-size: var(--text-lg);
  font-weight: var(--font-bold);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.testimonials__user-info {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
}

.testimonials__user-name {
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  color: var(--color-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.testimonials__user-meta {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
}

@media (max-width: 1024px) {
  .testimonials__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  /* 3枚目は中央寄せ */
  .testimonials__card:last-child:nth-child(2n + 1) {
    grid-column: 1 / -1;
    max-width: 480px;
    justify-self: center;
  }
}

@media (max-width: 768px) {
  .testimonials__title {
    font-size: var(--text-3xl);
  }

  .testimonials__grid {
    grid-template-columns: 1fr;
  }

  .testimonials__card:last-child:nth-child(2n + 1) {
    grid-column: auto;
    max-width: none;
    justify-self: auto;
  }
}
</style>
