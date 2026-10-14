import type { Resume, Experience } from './data'
export default function ResumePreview({ resume, accent = '#2563eb', compact = false }: { resume: Resume; accent?: string; compact?: boolean }) {
 const sections: [string, Experience[]][] = [['工作经历', resume.work], ['项目经历', resume.projects], ['教育背景', resume.education]]
 return <article className={`resume-sheet ${compact ? 'compact-sheet' : ''}`} style={{ '--resume-accent': accent } as React.CSSProperties} aria-label="A4 简历预览">
  <header className="resume-header"><h1>{resume.name || '你的姓名'}</h1><p className="resume-role">{resume.role || '求职意向'}</p><div className="resume-contact">{[resume.phone, resume.email, resume.city, resume.website].filter(Boolean).map((v, i) => <span key={i}>{v}</span>)}</div></header>
  {resume.summary && <section><h2>个人简介</h2><p className="whitespace-pre-line">{resume.summary}</p></section>}
  {sections.map(([label, entries]) => entries.length > 0 && <section key={label}><h2>{label}</h2>{entries.map(entry => <div className="resume-entry" key={entry.id}><div className="resume-entry-title"><h3>{entry.title || '待填写'}</h3><span>{entry.period}</span></div><p className="resume-subtitle">{entry.subtitle}</p>{entry.description && <ul>{entry.description.split('\n').filter(line => line.trim()).map((line, i) => <li key={i}>{line}</li>)}</ul>}</div>)}</section>)}
  {resume.skills && <section><h2>专业技能</h2><div className="resume-skills">{resume.skills.split(/[,，\n]/).map(s => s.trim()).filter(Boolean).map((s, i) => <span key={i}>{s}</span>)}</div></section>}
 </article>
}
