
import { sidebarConfig } from "../type/config"

const sidebar:sidebarConfig[] = [
  {
    text: '开发指南',
    items: [
      { text: '安装', link: '/study/' },
      { text: '快速开始', link: '/getting-started' }
    ]
  },
  {
    text: '目录1',
    items: [
      { text: '列表1', link: '/introduction' },
      { text: '列表2', link: '/getting-started' }
    ]
  }
]

export default sidebar
