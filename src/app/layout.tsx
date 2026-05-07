/* Importa o CSS global — deve ser feito no layout raiz,
   não dentro de componentes, para aplicar em toda a app */
import './globals.css'

import type { Metadata } from 'next'
import StyledComponentsRegistry from '@/lib/StyledComponentsRegistry'
import Providers from '@/providers/Providers'

/* Metadata é lida pelo Next.js para gerar as metatags do <head>
   automaticamente — importante para SEO e compartilhamento em redes sociais */
export const metadata: Metadata = {
  title: 'Paulo Rocha | Desenvolvedor Full-Stack Python',
  description: 'Portfólio de desenvolvedor full-stack com foco em React, Next.js e Python.',
}

/* RootLayout envolve todas as páginas da aplicação.
   É renderizado no servidor (sem 'use client') — correto para o layout raiz. */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        {/* StyledComponentsRegistry: resolve o problema de hidratação do
            Styled Components com o Next.js App Router (SSR).
            Sem ele, os estilos só seriam aplicados no cliente,
            causando flash de conteúdo sem estilo (FOUC). */}
        <StyledComponentsRegistry>

          {/* Providers injeta o ThemeProvider do Styled Components.
              Precisa ser um componente separado porque usa 'use client',
              e o layout raiz não pode ser client component. */}
          <Providers>
            {children}
          </Providers>

        </StyledComponentsRegistry>
      </body>
    </html>
  )
}