import styled from 'styled-components'

/* Card principal — fundo surface do tema, borda sutil, cantos arredondados.
   overflow: hidden garante que a imagem respeite o border-radius */
export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;

  /* Transição dupla: posição + sombra */
  transition:
    transform ${({ theme }) => theme.transitions.default},
    box-shadow ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${({ theme }) => theme.shadows.card};
  }
`

/* Imagem de capa do projeto */
export const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;            /* recorta sem distorcer */
  display: block;               /* remove espaço fantasma abaixo da imagem */
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

/* Área de texto do card */
export const Content = styled.div`
  padding: ${({ theme }) => theme.spacing.medium};
  display: flex;
  flex-direction: column;
  gap: 10px;
`

/* Nome do projeto */
export const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`

/* Descrição curta */
export const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin: 0;
`

/* Lista de tecnologias usadas no projeto */
export const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap; /* quebra linha se não couber */
  gap: 6px;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    font-size: 0.75rem;
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.primary};
    background: rgba(255, 106, 0, 0.1); /* laranja bem transparente — sutil */
    border: 1px solid rgba(255, 106, 0, 0.2);
    padding: 3px 10px;
    border-radius: ${({ theme }) => theme.borderRadius.pill};
  }
`

/* Link para o repositório — aparece no final do card */
export const Link = styled.a`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  align-self: flex-start; /* não estica até a borda */
  transition: color ${({ theme }) => theme.transitions.fast};

  /* Seta animada no hover */
  &::after {
    content: ' →';
    transition: margin-left ${({ theme }) => theme.transitions.fast};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
    &::after {
      margin-left: 4px; /* seta se afasta levemente */
    }
  }
`