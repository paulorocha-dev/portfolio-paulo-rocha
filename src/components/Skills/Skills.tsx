'use client'

import { skills } from '@/data/skills'
import FadeIn from '@/components/Animation/FadeIn'
import {
  Section,
  Container,
  Title,
  List,
  Item
} from '@/styles/skills.styles'

export default function Skills() {
  return (
    <Section id="skills">
      <FadeIn>
        <Container>
          <Title>Habilidades</Title>

          <List>
            {skills.map((skill) => {
              /* Instancia o componente de ícone dinamicamente */
              const Icon = skill.icon
              return (
                <Item key={skill.name}>
                  {/* Ícone na cor do tema, tamanho 16px */}
                  <Icon size={16} />
                  {skill.name}
                </Item>
              )
            })}
          </List>

        </Container>
      </FadeIn>
    </Section>
  )
}