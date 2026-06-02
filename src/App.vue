<script setup>
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
import Hero from './components/sections/Hero.vue'
import Features from './components/sections/Features.vue'
import HowItWorks from './components/sections/HowItWorks.vue'
import Testimonials from './components/sections/Testimonials.vue'
</script>

<template>
  <Header />
  <main>
    <Hero />
    <Features />
    <HowItWorks />
    <Testimonials />
    <!-- セクションはここに追加していく -->
  </main>
  <Footer />
</template>
