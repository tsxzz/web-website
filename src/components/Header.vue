<template>
  <header class="header">
    <div class="header-top">
      <div class="container">
        <div class="contact-info">
          <span class="service">24/7 Service: +86 15665778136</span>
          <span class="email">Email: jessie@sdqtmetal.com</span>
        </div>
      </div>
    </div>
    <div class="header-main">
      <div class="container">
        <div class="logo">
          <div class="logo-icon">U</div>
          <span class="logo-text">QUANTONG METAL</span>
        </div>
        <nav class="nav">
          <router-link to="/" class="nav-item" :class="{ active: $route.path === '/' }">HOME</router-link>
          <router-link to="/products" class="nav-item">PRODUCTS</router-link>
          <router-link to="/about" class="nav-item">ABOUT US</router-link>
          <router-link to="/faq" class="nav-item">FAQ</router-link>
          <router-link to="/case" class="nav-item">CASE</router-link>
          <router-link to="/contact" class="nav-item">CONTACT US</router-link>
          <div class="nav-item search-icon" @click="toggleSearch">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M19 19L14.65 14.65" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const toggleSearch = () => {
  // TODO: 实现搜索功能
  console.log('搜索')
}
</script>

<style scoped lang="scss">
.header {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-top {
  background: #f5f5f5;
  padding: 8px 0;
  font-size: 14px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.contact-info {
  display: flex;
  gap: 30px;
  
  .service {
    color: #333;
  }
  
  .email {
    color: #666;
  }
}

.header-main {
  padding: 15px 0;
}

.header-main .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  font-size: 24px;
  
  .logo-icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #ff6b6b, #ffa500);
    color: white;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 28px;
  }
  
  .logo-text {
    color: #333;
    letter-spacing: 1px;
  }
}

.nav {
  display: flex;
  align-items: center;
  gap: 30px;
  
  .nav-item {
    color: #333;
    text-decoration: none;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.5px;
    position: relative;
    transition: color 0.3s;
    
    &:hover,
    &.active {
      color: #ff6b6b;
      
      &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        right: 0;
        height: 2px;
        background: #ff6b6b;
      }
    }
    
    &.search-icon {
      cursor: pointer;
      padding: 5px;
      
      &:hover {
        color: #ff6b6b;
      }
    }
  }
}

@media (max-width: 768px) {
  .nav {
    gap: 15px;
    
    .nav-item {
      font-size: 12px;
    }
  }
  
  .contact-info {
    flex-direction: column;
    gap: 5px;
    font-size: 12px;
  }
}
</style>
