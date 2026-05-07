import 'styled-components'

/* Este arquivo "aumenta" a tipagem do styled-components.
   Sem ele, o TypeScript não sabe o que existe dentro do `theme`
   e reclama de cada propriedade acessada via ${({ theme }) => theme.xxx}.
   
   Sempre que adicionar algo no theme.ts,
   adicionar a mesma estrutura aqui. */
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      primaryHover: string
      background: string
      surface: string
      text: string
      textSecondary: string
      border: string
    }
    fonts: {
      heading: string
      body: string
    }
    fontSizes: {
      sm: string
      md: string
      lg: string
      xl: string
      xxl: string
      hero: string
    }
    spacing: {
      xs: string
      small: string
      medium: string
      large: string
      xl: string
      section: string
    }
    borderRadius: {
      sm: string
      md: string
      lg: string
      pill: string
    }
    shadows: {
      card: string
      glow: string
    }
    transitions: {
      fast: string
      default: string
      slow: string
    }
  }
}