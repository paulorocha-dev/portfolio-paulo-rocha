'use client'
/* Framer Motion usa hooks do React — precisa de 'use client' */

import { motion } from 'framer-motion'

interface Props {
  children: React.ReactNode
  /* delay permite escalonar animações quando vários FadeIn
     são usados próximos — ex: <FadeIn delay={0.2}> */
  delay?: number
}

/* Componente reutilizável de animação de entrada.
   Envolve qualquer conteúdo e o anima quando entra na viewport. */
export default function FadeIn({ children, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}   /* começa invisível, 30px abaixo */
      whileInView={{ opacity: 1, y: 0 }} /* anima ao entrar na tela */
      transition={{ duration: 0.6, delay }} /* delay opcional para escalonamento */
      viewport={{ once: true }}           /* anima só uma vez por sessão */
    >
      {children}
    </motion.div>
  )
}