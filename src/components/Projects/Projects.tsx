'use client'

import { projects } from '@/data/projects'
import ProjectCard from './ProjectCard'
import FadeIn from '@/components/Animation/FadeIn'
import {
  Section,
  Container,
  Grid,
  Title
} from '@/styles/projects.styles'

export default function Projects() {
  return (
    /* id="projects" — alvo do link da Navbar */
    <Section id="projects">
      <FadeIn>
        <Container>
          {/* Título com detalhe decorativo (definido via ::after no CSS) */}
          <Title>Projetos</Title>

          {/* Renderiza um card para cada projeto do array em /data/projects.ts */}
          <Grid>
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </Grid>
        </Container>
      </FadeIn>
    </Section>
  )
}