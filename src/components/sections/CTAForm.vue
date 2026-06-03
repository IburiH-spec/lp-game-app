<template>
  <section id="cta-form" class="cta-form">
    <div class="cta-form__inner container">
      <div class="cta-form__header">
        <h2 class="cta-form__title">今すぐ始めよう</h2>
        <p class="cta-form__lead">無料で登録して、ゲームの世界へ飛び込もう</p>
      </div>

      <div v-if="submitted" class="cta-form__success" role="alert">
        送信完了しました！
      </div>

      <form v-else class="cta-form__form" novalidate @submit.prevent="handleSubmit">
        <div class="cta-form__field">
          <label class="cta-form__label" for="cta-name">
            名前 <span class="cta-form__required" aria-hidden="true">*</span>
          </label>
          <input
            id="cta-name"
            v-model="form.name"
            class="cta-form__input"
            :class="{ 'cta-form__input--error': errors.name }"
            type="text"
            autocomplete="name"
            aria-required="true"
            :aria-describedby="errors.name ? 'cta-name-error' : undefined"
          />
          <p v-if="errors.name" id="cta-name-error" class="cta-form__error" role="alert">
            {{ errors.name }}
          </p>
        </div>

        <div class="cta-form__field">
          <label class="cta-form__label" for="cta-email">
            メールアドレス <span class="cta-form__required" aria-hidden="true">*</span>
          </label>
          <input
            id="cta-email"
            v-model="form.email"
            class="cta-form__input"
            :class="{ 'cta-form__input--error': errors.email }"
            type="email"
            autocomplete="email"
            aria-required="true"
            :aria-describedby="errors.email ? 'cta-email-error' : undefined"
          />
          <p v-if="errors.email" id="cta-email-error" class="cta-form__error" role="alert">
            {{ errors.email }}
          </p>
        </div>

        <div class="cta-form__field">
          <label class="cta-form__label" for="cta-message">メッセージ</label>
          <textarea
            id="cta-message"
            v-model="form.message"
            class="cta-form__textarea"
            rows="4"
            autocomplete="off"
          ></textarea>
        </div>

        <button class="cta-form__submit" type="submit">送信する</button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({ name: '', email: '', message: '' })
const errors = reactive({ name: '', email: '' })
const submitted = ref(false)

function validate() {
  errors.name = ''
  errors.email = ''

  if (!form.name.trim()) {
    errors.name = '名前を入力してください。'
  }

  if (!form.email.trim()) {
    errors.email = 'メールアドレスを入力してください。'
  } else if (!form.email.includes('@')) {
    errors.email = '有効なメールアドレスを入力してください。'
  }

  return !errors.name && !errors.email
}

function handleSubmit() {
  if (validate()) {
    submitted.value = true
  }
}
</script>

<style scoped>
.cta-form {
  padding-block: var(--space-20);
  background-color: var(--color-bg-alt);
}

.cta-form__header {
  text-align: center;
  margin-bottom: var(--space-10);
}

.cta-form__title {
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  color: var(--color-text);
  margin-bottom: var(--space-4);
}

.cta-form__lead {
  font-size: var(--text-lg);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
}

.cta-form__success {
  max-width: 560px;
  margin-inline: auto;
  padding: var(--space-6);
  background-color: var(--color-bg);
  border: 1px solid var(--color-success);
  border-radius: var(--radius-lg);
  color: var(--color-success);
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  text-align: center;
}

.cta-form__form {
  max-width: 560px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.cta-form__field {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.cta-form__label {
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-text);
}

.cta-form__required {
  color: var(--color-error);
}

.cta-form__input,
.cta-form__textarea {
  font-family: var(--font-sans);
  font-size: var(--text-base);
  color: var(--color-text);
  background-color: var(--color-bg);
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: var(--space-3) var(--space-4);
  width: 100%;
  box-sizing: border-box;
  transition: border-color var(--transition-fast), outline var(--transition-fast);
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.cta-form__textarea {
  resize: vertical;
}

.cta-form__input:focus,
.cta-form__textarea:focus {
  outline: 2px solid var(--color-primary);
  border-color: var(--color-primary);
}

.cta-form__input--error {
  border-color: var(--color-error);
}

.cta-form__error {
  font-size: var(--text-xs);
  color: var(--color-error);
  margin: 0;
}

.cta-form__submit {
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  color: var(--color-text-inverse);
  background-color: var(--color-accent);
  border: none;
  border-radius: 8px;
  padding: 14px;
  width: 100%;
  cursor: pointer;
  transition: background-color var(--transition-fast);
}

.cta-form__submit:hover {
  background-color: var(--color-accent-dark);
}

.cta-form__submit:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

@media (max-width: 768px) {
  .cta-form__title {
    font-size: var(--text-3xl);
  }

  .cta-form__form {
    padding-inline: var(--space-4);
  }
}
</style>
