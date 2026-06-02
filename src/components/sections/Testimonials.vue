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
  {
    id: 'user-4',
    rating: 5,
    comment: 'RPG系のゲームが充実していて毎日楽しんでいます。ストーリーが深くてやめられない！',
    name: 'ケンジ@RPG好き',
    meta: 'RPGプレイヤー · 利用歴2年',
    avatarInitial: 'ケ',
  },
  {
    id: 'user-5',
    rating: 5,
    comment: '女性でも楽しめるゲームが多くて嬉しい。コミュニティも荒れていなくて安心して使えます。',
    name: 'Hana_Game',
    meta: 'カジュアルゲーマー · 利用歴6ヶ月',
    avatarInitial: 'H',
  },
  {
    id: 'user-6',
    rating: 4,
    comment: 'ランキング機能が充実していて競い甲斐があります。大会機能があればもっと嬉しい！',
    name: 'マサキ',
    meta: '競技プレイヤー · 利用歴1年半',
    avatarInitial: 'マ',
  },
  {
    id: 'user-7',
    rating: 5,
    comment: '友達と一緒に始めました。無料でもかなり楽しめるのでコスパ最高です。',
    name: 'Rio_Player',
    meta: '学生ゲーマー · 利用歴4ヶ月',
    avatarInitial: 'R',
  },
  {
    id: 'user-8',
    rating: 5,
    comment: '60代でも楽しめます！操作がシンプルで覚えやすく、サポートも丁寧で安心です。',
    name: 'トシ@シニアゲーマー',
    meta: 'シニアゲーマー · 利用歴2年半',
    avatarInitial: 'ト',
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
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-4);
}

.testimonials__card {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
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
  font-size: var(--text-base);
  color: var(--color-border-dark);
  line-height: 1;
}

.testimonials__star--filled {
  color: var(--color-accent);
}

.testimonials__comment {
  margin: 0;
  flex: 1;
}

.testimonials__comment p {
  font-size: var(--text-sm);
  color: var(--color-text);
  line-height: var(--leading-relaxed);
  position: relative;
  padding-left: var(--space-4);
}

.testimonials__comment p::before {
  content: '"';
  position: absolute;
  left: 0;
  top: -2px;
  font-size: var(--text-2xl);
  color: var(--color-accent);
  font-family: Georgia, serif;
  line-height: 1;
}

.testimonials__user {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding-top: var(--space-3);
  border-top: 1px solid var(--color-border);
}

.testimonials__avatar {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-full);
  background-color: var(--color-primary);
  color: var(--color-text-inverse);
  font-size: var(--text-base);
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
  font-size: var(--text-sm);
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

@media (max-width: 768px) {
  .testimonials__title {
    font-size: var(--text-3xl);
  }

  .testimonials__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .testimonials__grid {
    grid-template-columns: 1fr;
  }
}
</style>
