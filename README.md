# Web Website - 外贸钢材网站前端

## 📋 项目简介

这是外贸钢材公司的官网前端项目，使用 Vue 3 + TypeScript + Vite 构建。

## 🚀 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发环境运行

```bash
pnpm dev
```

项目将在 `http://localhost:5173` 启动（Vite 默认端口）

### 构建生产版本

```bash
pnpm build
```

## 📁 项目结构

```
web-website/
├── src/
│   ├── api/              # API 接口
│   │   └── banner.ts     # 轮播图接口
│   ├── components/       # 公共组件
│   │   ├── Header.vue   # 头部导航
│   │   ├── Footer.vue   # 页脚
│   │   └── Banner.vue   # 轮播图组件
│   ├── views/           # 页面组件
│   │   ├── Home.vue     # 首页
│   │   ├── Products.vue # 产品页
│   │   ├── About.vue    # 关于我们
│   │   ├── FAQ.vue      # 常见问题
│   │   ├── Case.vue     # 案例
│   │   └── Contact.vue  # 联系我们
│   ├── router/          # 路由配置
│   ├── utils/           # 工具函数
│   │   └── request.ts   # Axios 请求封装
│   └── App.vue          # 根组件
├── public/              # 静态资源
└── vite.config.ts       # Vite 配置
```

## 🔧 配置说明

### 环境变量

创建 `.env.development` 和 `.env.production` 文件：

```env
# 后端 API 地址
VITE_APP_BASE_API=http://localhost:8080
```

### 后端接口

轮播图接口对接：
- **接口地址**: `/system/banner/list`
- **请求方式**: GET
- **参数**: 
  - `status`: 状态（'0'=正常，'1'=停用）
  - `title`: 标题（可选）

## ✨ 功能特性

- ✅ 响应式设计，支持移动端
- ✅ 轮播图自动播放和手动切换
- ✅ 产品展示区域
- ✅ 公司介绍区域
- ✅ 导航菜单
- ✅ 路由配置

## 🎨 页面说明

### 首页 (Home)

- **轮播图**: 从后端接口获取轮播图数据，支持自动播放和手动切换
- **产品展示**: 展示主要产品（Steel Sheets, Steel Pipes, Steel Coils）
- **公司介绍**: 公司简介和主要产品介绍

### 其他页面

- Products: 产品页面（待开发）
- About: 关于我们（待开发）
- FAQ: 常见问题（待开发）
- Case: 案例展示（待开发）
- Contact: 联系我们（待开发）

## 🔗 后端接口说明

### 轮播图接口

**请求示例**:
```typescript
import { listBanner } from '@/api/banner'

// 获取正常状态的轮播图
const response = await listBanner({ status: '0' })
```

**响应格式**:
```json
{
  "code": 200,
  "msg": "操作成功",
  "rows": [
    {
      "bannerId": 1,
      "title": "欢迎访问钢材网站",
      "imageUrl": "/profile/upload/2026/03/05/xxx.jpg",
      "linkUrl": "/",
      "sortOrder": 1,
      "status": "0"
    }
  ],
  "total": 1
}
```

## 📝 注意事项

1. **跨域问题**: 确保后端已配置 CORS，允许前端域名访问
2. **图片路径**: 轮播图图片路径会自动拼接基础 URL
3. **路由**: 使用 Vue Router 进行页面导航
4. **样式**: 使用 SCSS 编写样式，支持响应式设计

## 🐛 常见问题

### Q: 轮播图不显示？
A: 检查后端服务是否运行，以及 CORS 配置是否正确。

### Q: 图片加载失败？
A: 检查图片路径是否正确，以及后端静态资源映射配置。

### Q: API 请求失败？
A: 检查 `.env` 文件中的 `VITE_APP_BASE_API` 配置是否正确。

## 📞 联系方式

- Email: jessie@sdqtmetal.com
- Phone: +86 15665778136
