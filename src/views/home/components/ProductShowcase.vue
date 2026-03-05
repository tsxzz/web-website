<template>
  <section class="products-section">
    <div class="container">
      <h2 class="section-title">Our Products</h2>
      <div class="products-grid">
        <div class="product-card" v-for="product in products" :key="product.id">
          <div class="product-image">
            <img v-if="product.image" :src="product.image" :alt="product.name" />
            <div v-else class="product-placeholder">
              <span>{{ product.name }}</span>
            </div>
          </div>
          <h3 class="product-name">{{ product.name }}</h3>
          <p class="product-description">{{ product.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  products: Array<{
    id: number
    name: string
    description: string
    image: string
  }>
}>()
</script>

<style scoped lang="scss">
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 50px;
  color: #333;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: #ff6b6b;
  }
}

.products-section {
  padding: 80px 0;
  background: #f9f9f9;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 60px;
}

.product-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
}

.product-image {
  width: 100%;
  height: 250px;
  overflow: hidden;
  background: #f0f0f0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
  }
  
  &:hover img {
    transform: scale(1.1);
  }
}

.product-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
}

.product-name {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin: 20px 20px 10px;
}

.product-description {
  font-size: 16px;
  color: #666;
  margin: 0 20px 20px;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .section-title {
    font-size: 28px;
  }
}
</style>
