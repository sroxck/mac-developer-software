
import { sidebarConfig } from "../type/config"

const sidebar:sidebarConfig[] = [
  {
    text: '基础配置',
    items: [
      { text: '环境', link: '/mac-dev/env' },
      { text: '工程化', link: '/getting-started' }
    ]
  },
  {
    text: '优秀配置',
    items: [
      { text: '列表1', link: '/introduction' },
      { text: '列表2', link: '/getting-started' }
    ]
  },
  {
    text: '进阶配置',
    items: [
      { text: '列表1', link: '/introduction' },
      { text: '列表2', link: '/getting-started' }
    ]
  }
]

export default sidebar
