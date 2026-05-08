import styled from 'styled-components'

/* Faixa inferior da página — separa visualmente do conteúdo */
export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px clamp(20px, 5vw, 80px);
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  /* Em mobile, empilha e centraliza */
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
`

export const FooterText = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
`

/* Link discreto — herda a cor do texto e destaca só no hover */
export const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`