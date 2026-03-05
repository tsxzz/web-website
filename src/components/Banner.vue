<template>
  <div class="banner-container">
    <div class="banner-carousel" v-if="banners.length > 0">
      <div 
        class="banner-slide" 
        v-for="(banner, index) in banners" 
        :key="banner.bannerId"
        :class="{ active: currentIndex === index }"
        :style="{ backgroundImage: `url(${getImageUrl(banner.imageUrl)})` }"
      >
        <div class="banner-overlay">
          <div class="banner-content">
            <h1 class="banner-title">{{ banner.title }}</h1>
            <p class="banner-description" v-if="banner.remark">
              {{ banner.remark }}
            </p>
            <button class="banner-button" v-if="banner.linkUrl" @click="handleClick(banner.linkUrl)">
              READ MORE
            </button>
          </div>
        </div>
      </div>
      
      <!-- 导航箭头 -->
      <button class="banner-nav prev" @click="prevSlide" v-if="banners.length > 1">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <button class="banner-nav next" @click="nextSlide" v-if="banners.length > 1">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      
      <!-- 指示器 -->
      <div class="banner-indicators" v-if="banners.length > 1">
        <span 
          v-for="(banner, index) in banners" 
          :key="banner.bannerId"
          class="indicator"
          :class="{ active: currentIndex === index }"
          @click="goToSlide(index)"
        ></span>
      </div>
    </div>
    
    <!-- 加载状态 -->
    <div v-if="loading" class="banner-loading">
      <div class="loading-spinner"></div>
    </div>
    
    <!-- 空状态 -->
    <div v-if="!loading && banners.length === 0" class="banner-empty">
      <p>暂无轮播图</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { listBanner, type Banner } from '@/api/banner'

const router = useRouter()
const banners = ref<Banner[]>([])
const currentIndex = ref(0)
const loading = ref(true)
let autoPlayTimer: number | null = null

// 获取图片完整 URL
const getImageUrl = (imageUrl?: string) => {
  if (!imageUrl) return ''
  
  // 如果是外部链接，直接返回
  if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
    return imageUrl
  }
  
  // 如果是相对路径，拼接基础 URL
  const baseUrl = import.meta.env.VITE_APP_BASE_API || 'http://localhost:8080'
  if (imageUrl.startsWith('/')) {
    return baseUrl + imageUrl
  }
  
  return baseUrl + '/' + imageUrl
}

// 加载轮播图数据
const loadBanners = async () => {
  try {
    loading.value = true
    const response = await listBanner({ status: '0' }) // 只获取正常状态的轮播图
    if (response.code === 200 && response.rows) {
      // 按排序号排序
      banners.value = response.rows.sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0))
    }
  } catch (error) {
    console.error('加载轮播图失败:', error)
  } finally {
    loading.value = false
  }
}

// 上一张
const prevSlide = () => {
  if (banners.value.length === 0) return
  currentIndex.value = (currentIndex.value - 1 + banners.value.length) % banners.value.length
  resetAutoPlay()
}

// 下一张
const nextSlide = () => {
  if (banners.value.length === 0) return
  currentIndex.value = (currentIndex.value + 1) % banners.value.length
  resetAutoPlay()
}

// 跳转到指定幻灯片
const goToSlide = (index: number) => {
  currentIndex.value = index
  resetAutoPlay()
}

// 自动播放
const startAutoPlay = () => {
  if (banners.value.length <= 1) return
  autoPlayTimer = window.setInterval(() => {
    nextSlide()
  }, 5000) // 5秒切换一次
}

// 重置自动播放
const resetAutoPlay = () => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer)
  }
  startAutoPlay()
}

// 处理点击跳转
const handleClick = (linkUrl?: string) => {
  if (linkUrl) {
    if (linkUrl.startsWith('http://') || linkUrl.startsWith('https://')) {
      window.open(linkUrl, '_blank')
    } else {
      router.push(linkUrl)
    }
  }
}

onMounted(() => {
  loadBanners().then(() => {
    if (banners.value.length > 1) {
      startAutoPlay()
    }
  })
})

onUnmounted(() => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer)
  }
})
</script>

<style scoped lang="scss">
.banner-container {
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
}

.banner-carousel {
  position: relative;
  width: 100%;
  height: 100%;
}

.banner-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  
  &.active {
    opacity: 1;
    z-index: 1;
  }
}

.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-content {
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 0 20px;
  z-index: 2;
}

.banner-title {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.banner-description {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 30px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.banner-button {
  background: white;
  color: #333;
  border: none;
  padding: 12px 40px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 4px;
  
  &:hover {
    background: #ff6b6b;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
}

.banner-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s;
  
  &:hover {
    background: rgba(255, 255, 255, 0.4);
  }
  
  &.prev {
    left: 20px;
  }
  
  &.next {
    right: 20px;
  }
}

.banner-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s;
  
  &.active {
    background: white;
    width: 30px;
    border-radius: 6px;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }
}

.banner-loading,
.banner-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #666;
  font-size: 18px;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #ff6b6b;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@media (max-width: 768px) {
  .banner-container {
    height: 400px;
  }
  
  .banner-title {
    font-size: 32px;
  }
  
  .banner-description {
    font-size: 14px;
  }
  
  .banner-nav {
    width: 40px;
    height: 40px;
    
    &.prev {
      left: 10px;
    }
    
    &.next {
      right: 10px;
    }
  }
}
</style>
