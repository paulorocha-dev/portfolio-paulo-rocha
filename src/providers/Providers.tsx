'use client'
/* 'use client' é obrigatório aqui porque o ThemeProvider do
   Styled Components usa contexto do React, que só funciona no cliente */

import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'

/* Providers é um wrapper que injeta o tema em toda a árvore de componentes.
   Qualquer componente filho pode acessar o tema via ${({ theme }) => theme.xxx}
   nos arquivos de styled-components. */
export default function Providers({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}