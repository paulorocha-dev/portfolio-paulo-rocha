'use client'

import { FooterWrapper, FooterText, FooterLink } from '@/styles/footer.styles'

export default function Footer() {
  return (
    <FooterWrapper>
      {/* Crédito com link para o GitHub */}
      <FooterText>
        Desenvolvido por{' '}
        <FooterLink
          href="https://github.com/paulorocha-dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Paulo Rocha
        </FooterLink>
      </FooterText>

      {/* Ano atual gerado dinamicamente — nunca fica desatualizado */}
      <FooterText>
        © {new Date().getFullYear()}
      </FooterText>
    </FooterWrapper>
  )
}