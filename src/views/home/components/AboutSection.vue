<template>
  <section class="about-section">
    <div class="container">
      <div class="about-content">
        <div class="about-text">
          <h2 class="section-title">About Us</h2>
          <p class="about-description">
            Shandong Quantong Metal Products Co., Ltd is a leading manufacturer and supplier of various steel products. 
            We specialize in providing high-quality steel coils, sheets, pipes, and strips to customers worldwide.
          </p>
          <p class="about-description">
            Our main products include pre-painted steel coils, hot rolled steel coils, cold rolled steel coils, 
            galvanized steel coils, pre-painted steel coils, stainless steel sheets/coils, stainless steel pipes, 
            and stainless steel strips.
          </p>
          <button class="about-button" @click="handleLearnMore">Learn More</button>
        </div>
        <div class="about-image">
          <div class="placeholder-image">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="200" height="200" fill="#f0f0f0"/>
              <path d="M50 50H150V150H50V50Z" stroke="#999" stroke-width="2" stroke-dasharray="5 5"/>
              <text x="100" y="100" text-anchor="middle" fill="#999" font-size="16" font-family="Arial">Factory Image</text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const handleLearnMore = () => {
  router.push('/about')
}
</script>

<style scoped lang="scss">
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.about-section {
  padding: 80px 0;
  background: white;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.about-text {
  .section-title {
    font-size: 36px;
    font-weight: bold;
    text-align: left;
    margin-bottom: 30px;
    color: #333;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 0;
      width: 60px;
      height: 4px;
      background: #ff6b6b;
    }
  }
}

.about-description {
  font-size: 16px;
  line-height: 1.8;
  color: #666;
  margin-bottom: 20px;
}

.about-button {
  background: #ff6b6b;
  color: white;
  border: none;
  padding: 12px 40px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 20px;
  transition: all 0.3s;
  
  &:hover {
    background: #ff5252;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
  }
}

.about-image {
  width: 100%;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-image {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .about-text .section-title {
    text-align: center;
    
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
  
  .section-title {
    font-size: 28px;
  }
}
</style>
