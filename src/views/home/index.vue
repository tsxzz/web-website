<template>
  <div class="home">
    <!-- 轮播图 -->
    <Banner />
    
    <!-- 产品展示 -->
    <ProductShowcase :products="products" />
    
    <!-- 公司介绍 -->
    <AboutSection />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Banner from '@/components/Banner.vue'
import ProductShowcase from './components/ProductShowcase.vue'
import AboutSection from './components/AboutSection.vue'

const products = ref([
  {
    id: 1,
    name: 'Steel Sheets',
    description: 'High-quality steel sheets for various applications',
    image: '' // 使用空字符串，组件会显示占位背景
  },
  {
    id: 2,
    name: 'Steel Pipes',
    description: 'Durable steel pipes in various diameters',
    image: '' // 使用空字符串，组件会显示占位背景
  },
  {
    id: 3,
    name: 'Steel Coils',
    description: 'Premium steel coils for industrial use',
    image: '' // 使用空字符串，组件会显示占位背景
  }
])
</script>

<style scoped lang="scss">
.home {
  min-height: 100vh;
}
</style>
