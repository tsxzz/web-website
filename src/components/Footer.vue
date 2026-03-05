<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3 class="footer-title">QUANTONG METAL</h3>
          <p class="footer-description">
            Leading manufacturer and supplier of high-quality steel products worldwide.
          </p>
        </div>
        
        <div class="footer-section">
          <h4 class="footer-subtitle">Quick Links</h4>
          <ul class="footer-links">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/products">Products</router-link></li>
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h4 class="footer-subtitle">Contact</h4>
          <ul class="footer-contact">
            <li>Phone: +86 15665778136</li>
            <li>Email: jessie@sdqtmetal.com</li>
            <li>24/7 Service Available</li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Shandong Quantong Metal Products Co., Ltd. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped lang="scss">
.footer {
  background: #2c3e50;
  color: white;
  padding: 60px 0 20px;
  margin-top: 80px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.footer-section {
  .footer-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 15px;
    color: #ff6b6b;
  }
  
  .footer-subtitle {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
  }
  
  .footer-description {
    line-height: 1.6;
    color: #bdc3c7;
  }
}

.footer-links {
  list-style: none;
  padding: 0;
  
  li {
    margin-bottom: 10px;
    
    a {
      color: #bdc3c7;
      text-decoration: none;
      transition: color 0.3s;
      
      &:hover {
        color: #ff6b6b;
      }
    }
  }
}

.footer-contact {
  list-style: none;
  padding: 0;
  
  li {
    margin-bottom: 10px;
    color: #bdc3c7;
  }
}

.footer-bottom {
  border-top: 1px solid #34495e;
  padding-top: 20px;
  text-align: center;
  color: #95a5a6;
  font-size: 14px;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}
</style>
