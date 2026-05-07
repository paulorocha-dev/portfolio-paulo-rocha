import styled from 'styled-components'

/* Padding responsivo — mesmo padrão de todas as seções */
export const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.section} clamp(20px, 5vw, 80px);
`

/* Container mais estreito que o de Projects */
export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`

/* Título com detalhe decorativo — mesmo padrão visual de Projects e Skills */
export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.large};

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

/* Formulário em coluna com espaço consistente entre campos */
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
  text-align: left; /* alinha labels/placeholders à esquerda */
`

/* Estilo base compartilhado por Input e TextArea */
const fieldStyles = `
  width: 100%;
  padding: 12px 16px;
  font-size: 1rem;
  font-family: inherit;

  /* Cores do tema — não hardcoded */
  background-color: transparent;
  color: inherit;
  border: 1px solid;
  outline: none;
`

export const Input = styled.input`
  ${fieldStyles}
  border-color: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};

  /* Transição suave ao focar no campo */
  transition: border-color ${({ theme }) => theme.transitions.fast};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  /* Remove fundo azul do autocomplete do browser */
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.colors.surface} inset;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.text};
  }
`

export const TextArea = styled.textarea`
  ${fieldStyles}
  border-color: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  height: 140px;
  resize: vertical; /* usuário pode redimensionar só verticalmente */

  transition: border-color ${({ theme }) => theme.transitions.fast};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

/* Botão de envio — mesmo visual do CTAButton do About */
export const Button = styled.button`
  padding: 14px 32px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 500;
  cursor: pointer;
  align-self: center; /* centraliza o botão no form */

  transition:
    background ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`

/* Mensagem de feedback após envio — verde para sucesso, vermelho para erro */
export const FeedbackMessage = styled.p<{ $type: 'success' | 'error' }>`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-align: center;
  color: ${({ $type }) => $type === 'success' ? '#4caf50' : '#f44336'};
`

/* Área dos links sociais abaixo do formulário */
export const SocialLinks = styled.div`
  margin-top: ${({ theme }) => theme.spacing.large};
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.large};
`

/* Links sociais — mesmo padrão do NavLink com sublinhado animado */
export const Link = styled.a`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  transition: color ${({ theme }) => theme.transitions.fast};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 1px;
    background: ${({ theme }) => theme.colors.primary};
    transition: width ${({ theme }) => theme.transitions.default};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    &::after { width: 100%; }
  }
`