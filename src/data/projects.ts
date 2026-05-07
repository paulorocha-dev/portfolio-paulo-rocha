// Tipagem de um projeto
export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  image: string
  imageStyle?: React.CSSProperties // estilos extras para a imagem, ex: objectPosition
  repo: string
  live?: string // opcional — nem todo projeto tem deploy público
}

// Lista de projetos
export const projects: Project[] = [
  {
    id: 1,
    title: 'Cinelista',
    description: 'Catálogo de filmes em destaque consumindo a API do TMDB, desenvolvido com Next.js e TypeScript.',
    technologies: ['Next.js', 'TypeScript', 'Vercel'],
    image: '/images/projects/cinelista.png',
    repo: 'https://github.com/paulorocha-dev/nextjs-cinelista',
    live: 'https://nextjs-cinelista-zeta.vercel.app'
  },
  {
    id: 2,
    title: 'API Pokémon',
    description: 'API REST com FastAPI integrando PokeAPI, cache Redis, SQLite e pipeline CI/CD completo.',
    technologies: ['Python', 'FastAPI', 'Redis', 'GitHub Actions',],
    image: '/images/projects/pokeapi.png',
    imageStyle: { objectFit: 'contain' },  
    repo: 'https://github.com/paulorocha-dev/Backend-API-Pokemon'
  },
  {
    id: 3,
    title: 'Gerenciador de Tarefas',
    description: 'To-do list com Next.js, TypeScript e persistência via localStorage.',
    technologies: ['Next.js', 'TypeScript', 'Vercel'],
    image: '/images/projects/todo.png',
    repo: 'https://github.com/paulorocha-dev/todo-nextjs',
    live: 'https://todo-nextjs-amber-ten.vercel.app'
  }
]