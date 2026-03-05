import request from '@/utils/request'

// 轮播图接口类型定义
export interface Banner {
  bannerId?: number
  title?: string
  imageUrl?: string
  linkUrl?: string
  sortOrder?: number
  status?: string
  createTime?: string
  remark?: string
}

// 查询轮播图列表（公开接口，不需要认证）
export function listBanner(query?: { title?: string; status?: string }) {
  return request<{
    code: number
    msg: string
    rows: Banner[]
    total: number
  }>({
    url: '/system/banner/list',
    method: 'get',
    params: query
  })
}
