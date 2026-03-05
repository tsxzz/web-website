# Home 页面组件结构

## 📁 目录结构

```
home/
├── index.vue              # 首页主组件
└── components/            # 首页子组件
    ├── ProductShowcase.vue    # 产品展示组件
    └── AboutSection.vue       # 公司介绍组件
```

## 🎯 组件说明

### index.vue
首页主组件，负责：
- 组合所有子组件
- 管理首页数据
- 处理首页逻辑

### components/ProductShowcase.vue
产品展示组件：
- **Props**: `products` - 产品列表数组
- **功能**: 展示主要产品（Steel Sheets, Steel Pipes, Steel Coils）

### components/AboutSection.vue
公司介绍组件：
- **功能**: 展示公司简介和主要产品介绍
- **交互**: 点击 "Learn More" 跳转到关于我们页面

## 📝 使用示例

```vue
<template>
  <ProductShowcase :products="products" />
  <AboutSection />
</template>
```

## 🔄 扩展建议

后续可以在 `components` 目录下添加更多组件：
- `BannerSection.vue` - 轮播图区域（如果需要独立管理）
- `NewsSection.vue` - 新闻动态区域
- `ServiceSection.vue` - 服务介绍区域
- `ContactSection.vue` - 联系方式区域
