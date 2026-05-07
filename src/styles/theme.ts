export const theme = {
  colors: {
    primary: '#ff6a00',       /* laranja principal — botões, destaques, links ativos */
    primaryHover: '#e65c00',  /* tom mais escuro para estado hover */
    background: '#0d0d0d',    /* fundo geral da página */
    surface: '#1a1a1a',       /* fundo de cards, navbar — levemente mais claro */
    text: '#ffffff',           /* texto principal */
    textSecondary: '#b3b3b3', /* texto de suporte, legendas, links inativos */
    border: '#2a2a2a',        /* bordas sutis entre elementos */
  },

  fonts: {
    heading: "'Syne', sans-serif",  /* para títulos e logo */
    body: "'Outfit', sans-serif",   /* para parágrafos e UI */
  },

  fontSizes: {
    sm: '0.875rem',  /* 14px — textos pequenos, labels */
    md: '1rem',      /* 16px — tamanho base */
    lg: '1.25rem',   /* 20px — subtítulos, descrições */
    xl: '2rem',      /* 32px — títulos de seção */
    xxl: '3rem',     /* 48px — títulos grandes */
    /* clamp(mínimo, preferido, máximo): escala o tamanho
       automaticamente com a largura da tela, sem media queries */
    hero: 'clamp(2.5rem, 6vw, 5rem)',
  },

  spacing: {
    xs: '4px',
    small: '8px',
    medium: '16px',
    large: '32px',
    xl: '64px',
    /* padding de seção também responsivo via clamp */
    section: 'clamp(100px, 15vh, 160px)',
  },

  borderRadius: {
    sm: '4px',       /* arredondamento leve */
    md: '8px',       /* padrão para cards */
    lg: '16px',      /* cards grandes */
    pill: '9999px',  /* completamente arredondado — usado em botões */
  },

  shadows: {
    card: '0 4px 24px rgba(0, 0, 0, 0.4)',       /* sombra suave para elevação */
    glow: '0 0 24px rgba(255, 106, 0, 0.25)',     /* brilho laranja no hover de botões */
  },

  transitions: {
    fast: '0.15s ease',    /* mudanças rápidas — cor de texto, fundo */
    default: '0.3s ease',  /* padrão — a maioria das animações */
    slow: '0.5s ease',     /* transições mais elaboradas */
  },
}

export type Theme = typeof theme
/* typeof theme: cria um tipo TypeScript baseado no objeto acima.
   É importado no styled.d.ts para tipar o tema corretamente. */