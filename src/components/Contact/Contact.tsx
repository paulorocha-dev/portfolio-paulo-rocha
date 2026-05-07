'use client'

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import FadeIn from '@/components/Animation/FadeIn'
import {
  Section,
  Container,
  Title,
  Form,
  Input,
  TextArea,
  Button,
  SocialLinks,
  Link,
  FeedbackMessage
} from '@/styles/contact.styles'

/* Lê as variáveis de ambiente definidas no .env.local */
const SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
const PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!

export default function Contact() {
  /* Referência ao formulário — o EmailJS lê os campos diretamente */
  const formRef = useRef<HTMLFormElement>(null)

  /* Estado do envio: idle | loading | success | error */
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!formRef.current) return

    setStatus('loading')

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setStatus('success')
      formRef.current.reset() /* limpa os campos após envio bem-sucedido */
    } catch (error) {
      console.error('Erro ao enviar:', error)
      setStatus('error')
    }
  }

  return (
    <Section id="contact">
      <FadeIn>
        <Container>
          <Title>Contato</Title>

          <Form ref={formRef} onSubmit={handleSubmit}>
            {/* Os atributos name devem ser idênticos às variáveis do template */}
            <Input
              type="text"
              name="from_name"
              placeholder="Seu nome"
              required
            />
            <Input
              type="email"
              name="from_email"
              placeholder="Seu email"
              required
            />
            <TextArea
              name="message"
              placeholder="Sua mensagem"
              required
            />

            <Button type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Enviando...' : 'Enviar mensagem'}
            </Button>

            {/* Feedback visual após tentativa de envio */}
            {status === 'success' && (
              <FeedbackMessage $type="success">
                Mensagem enviada com sucesso!
              </FeedbackMessage>
            )}
            {status === 'error' && (
              <FeedbackMessage $type="error">
                Erro ao enviar. Tente novamente.
              </FeedbackMessage>
            )}
          </Form>

          <SocialLinks>
            <Link href="https://github.com/paulorocha-dev" target="_blank" rel="noopener noreferrer">
              GitHub
            </Link>
            <Link href="https://www.linkedin.com/in/paulo-henrique-rocha-dev/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </Link>
          </SocialLinks>

        </Container>
      </FadeIn>
    </Section>
  )
}