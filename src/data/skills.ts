import {
  SiPython, SiFastapi, SiPydantic,
  SiReact, SiNextdotjs, SiTypescript,
  SiNodedotjs, SiSass, SiAxios,
  SiPostgresql, SiSqlite, SiRedis,
  SiDocker, SiKubernetes, SiElasticsearch,
  SiGit, SiGithub, SiGithubactions,
} from 'react-icons/si'
import { ComponentType } from 'react'

export interface Skill {
  name: string
  icon: ComponentType<{ size?: number; color?: string }>
}

export const skills: Skill[] = [
  /* Back-end */
  { name: 'Python',          icon: SiPython },
  { name: 'FastAPI',         icon: SiFastapi },
  { name: 'Pydantic',        icon: SiPydantic },

  /* Front-end */
  { name: 'React',           icon: SiReact },
  { name: 'Next.js',         icon: SiNextdotjs },
  { name: 'TypeScript',      icon: SiTypescript },
  { name: 'Node.js',         icon: SiNodedotjs },
  { name: 'Sass',            icon: SiSass },
  { name: 'Axios',           icon: SiAxios },

  /* Banco de dados */
  { name: 'PostgreSQL',      icon: SiPostgresql },
  { name: 'SQLite',          icon: SiSqlite },
  { name: 'Redis',           icon: SiRedis },

  /* Infra & DevOps */
  { name: 'Docker',          icon: SiDocker },
  { name: 'Kubernetes',      icon: SiKubernetes },
  { name: 'Elasticsearch',   icon: SiElasticsearch },

  /* Versionamento & CI/CD */
  { name: 'Git',             icon: SiGit },
  { name: 'GitHub',          icon: SiGithub },
  { name: 'GitHub Actions',  icon: SiGithubactions },
]