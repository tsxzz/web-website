<template>
  <div id="app">
    <Header />
    <main class="main-content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font-family: inherit;
}

img {
  max-width: 100%;
  height: auto;
}
</style>
