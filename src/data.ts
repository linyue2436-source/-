export type Experience = { id: string; title: string; subtitle: string; period: string; description: string }
export type Resume = { name: string; role: string; phone: string; email: string; city: string; website: string; summary: string; skills: string; education: Experience[]; work: Experience[]; projects: Experience[] }
export const sample: Resume = {
 name: '林星宇', role: '前端开发工程师', phone: '138 0000 0000', email: 'xingyu@example.com', city: '上海', website: 'github.com/xingyu',
 summary: '3 年前端开发经验，专注于打造流畅、易用的 Web 产品。熟悉 React 与 TypeScript 技术栈，具备从需求分析到产品交付的完整项目经验，关注用户体验与工程质量。',
 skills: 'React, TypeScript, JavaScript, HTML / CSS, Tailwind CSS, Vite, Git',
 education: [{ id: 'edu-1', title: '浙江大学', subtitle: '计算机科学与技术 · 本科', period: '2017.09 — 2021.06', description: '主修：数据结构、计算机网络、软件工程\n获校级优秀毕业生，英语 CET-6' }],
 work: [{ id: 'work-1', title: '星河科技有限公司', subtitle: '前端开发工程师', period: '2021.07 — 至今', description: '负责企业协作平台的前端开发与迭代，服务 10,000+ 活跃用户。\n搭建 React + TypeScript 组件库，减少重复开发，提高团队交付效率。\n优化首屏加载与交互性能，页面加载时间降低 35%。' }],
 projects: [{ id: 'project-1', title: '企业数据可视化平台', subtitle: '核心开发者', period: '2023.03 — 2023.09', description: '使用 React 与 ECharts 构建交互式数据看板，支持多维数据筛选。\n设计可复用图表组件与响应式布局，提升业务数据分析效率。' }],
}
export const blank: Resume = { name: '', role: '', phone: '', email: '', city: '', website: '', summary: '', skills: '', education: [], work: [], projects: [] }
export const storageKey = 'resume-planet:v1'
export function isResume(value: unknown): value is Resume {
 if (!value || typeof value !== 'object') return false
 const r = value as Record<string, unknown>
 return ['name','role','phone','email','city','website','summary','skills'].every(k => typeof r[k] === 'string') && ['education','work','projects'].every(k => Array.isArray(r[k]) && (r[k] as unknown[]).every(e => !!e && typeof e === 'object' && ['id','title','subtitle','period','description'].every(p => typeof (e as Record<string, unknown>)[p] === 'string')))
}
