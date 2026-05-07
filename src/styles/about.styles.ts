import styled from 'styled-components'

/* Seção ocupa a tela inteira — impacto visual na primeira dobra */
export const Section = styled.section`
  min-height: 100vh;
  padding: 0 clamp(20px, 5vw, 80px); /* padding lateral responsivo */

  display: flex;
  align-items: center;    /* centraliza verticalmente */
  justify-content: center;
`

export const Content = styled.div`
  max-width: 1000px;
  width: 100%;
`

/* Tag pequena acima do nome — ex: "Desenvolvedor Front-end" */
export const Tag = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.body};
  letter-spacing: 2px;       /* espaçamento largo para estilo de label */
  text-transform: uppercase;
  margin-bottom: 16px;
`

/* Título principal — o maior elemento da página */
export const Heading = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.hero}; /* responsivo via clamp */
  font-weight: 800;
  line-height: 1.1;      /* entrelinha apertada */
  letter-spacing: -1px;  /* aperta as letras */
  margin: 0 0 16px 0;
  color: ${({ theme }) => theme.colors.text};
`

/* Destaque de nome em laranja dentro do Heading */
export const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`

/* Parágrafo de apresentação */
export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;      /* entrelinha */
  max-width: 560px;      /* limita largura para não esticar demais */
  margin: 0 0 40px 0;
`

/* Botão de call-to-action */
export const CTAButton = styled.a`
  display: inline-block;
  padding: 14px 32px;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.md};
  border-radius: ${({ theme }) => theme.borderRadius.pill}; /* botão arredondado */
  text-decoration: none;

  /* transição dupla: cor de fundo + brilho */
  transition:
    background ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
    box-shadow: ${({ theme }) => theme.shadows.glow}; /* brilho laranja no hover */
  }
`