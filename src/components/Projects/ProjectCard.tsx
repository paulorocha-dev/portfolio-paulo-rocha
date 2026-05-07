'use client'

import { motion } from 'framer-motion'
import { Project } from '@/data/projects'
import {
  Card,
  Image,
  Content,
  Title,
  Description,
  TechList,
  Link
} from '@/styles/projectCard.styles'

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    /* motion.div anima a entrada do card quando ele entra na viewport:
       - initial: começa invisível e 20px abaixo
       - whileInView: aparece na posição normal
       - viewport once:true — anima só uma vez, não toda vez que rolar */
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <Card>
        {/* Se o projeto tiver URL live, a imagem vira um link para o site.
            O ?. verifica se project.live existe antes de renderizar o link */}
        {project.live ? (
          <a href={project.live} target="_blank" rel="noopener noreferrer">
            <Image src={project.image} alt={project.title} style={project.imageStyle} />
          </a>
        ) : (
          <Image src={project.image} alt={project.title} style={project.imageStyle} />
        )}

        <Content>
          <Title>{project.title}</Title>
          <Description>{project.description}</Description>

          {/* Tags de tecnologia — ex: React, TypeScript, Node */}
          <TechList>
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </TechList>

          {/* Link abre o repositório em nova aba */}
          <Link href={project.repo} target="_blank" rel="noopener noreferrer">
            Ver projeto
          </Link>
        </Content>
      </Card>
    </motion.div>
  )
}