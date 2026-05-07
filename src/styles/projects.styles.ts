import styled from 'styled-components'

/* Seção com padding responsivo via clamp */
export const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.section} clamp(20px, 5vw, 80px);
`

/* Container centralizado com largura máxima */
export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`

/* Título da seção — mesmo padrão visual do About */
export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.large};

  /* Detalhe decorativo abaixo do título */
  &::after {
    content: '';
    display: block;
    width: 40px;
    height: 3px;
    background: ${({ theme }) => theme.colors.primary};
    margin: 12px auto 0;
    border-radius: ${({ theme }) => theme.borderRadius.pill};
  }
`

/* Grid responsivo:
   3 colunas em desktop → 2 em tablet → 1 em mobile */
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.large};

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`