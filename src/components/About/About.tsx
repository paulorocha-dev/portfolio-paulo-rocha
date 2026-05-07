'use client'

import FadeIn from '@/components/Animation/FadeIn'
import {
  Section,
  Content,
  Tag,
  Heading,
  Highlight,
  Description,
  CTAButton
} from '@/styles/about.styles'

export default function About() {
  return (
    <Section id="about"> {/* id usado pela navbar para navegar até aqui */}
      <FadeIn> {/* anima a entrada do conteúdo */}
        <Content>

          {/* Label discreta acima do título */}
          <Tag>Desenvolvedor Full-stack Python</Tag>

          {/* Título principal com nome em destaque */}
          <Heading>
            <Highlight>Paulo Rocha</Highlight>
          </Heading>

          {/* Descrição curta e objetiva */}
          <Description>
            Focado em construir soluções robustas e eficientes, do back-end ao front-end.
            Sempre evoluindo, sempre entregando.
          </Description>

          {/* Botão que leva para a seção de projetos */}
          <CTAButton href="#projects">Ver Projetos →</CTAButton>

        </Content>
      </FadeIn>
    </Section>
  )
}