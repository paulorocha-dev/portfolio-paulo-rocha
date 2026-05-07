'use client' /* necessário para componentes com interatividade no Next.js */

import {useState} from 'react'
import {
  Nav,
  Logo,
  NavList,
  NavItem,
  NavLink,
  HamburgerButton,
  MobileMenu
} from '@/styles/navbar.styles'

export default function Navbar() {
  /* Controla se o menu mobile está aberto ou fechado */
  const [isOpen, setIsOpen] = useState(false)

  /* Fecha o menu ao clicar em qualquer link */
  const handleLinkClick = () => setIsOpen(false)

  return (
    <Nav>
      {/* Logo — usando span em vez de h1 por semântica correta */}
      <Logo>paulo.rocha-dev</Logo>

      {/* Links de navegação — visíveis só em desktop */}
      <NavList>
        {/* Cada NavLink aponta para o id da seção correspondente,
            e o scroll-behavior: smooth no globals.css cuida da animação */}
        <NavItem><NavLink href="#about">Sobre</NavLink></NavItem>
        <NavItem><NavLink href="#projects">Projetos</NavLink></NavItem>
        <NavItem><NavLink href="#skills">Habilidades</NavLink></NavItem>
        <NavItem><NavLink href="#contact">Contato</NavLink></NavItem>
      </NavList>

      {/* Menu mobile — visível só em telas pequenas */}
      
      <HamburgerButton
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir menu"
        aria-expanded={isOpen}
      >
        {/* Três linhas que animam para X quando aberto */}
        <span className={isOpen ? 'open' : ''} />
        <span className={isOpen ? 'open' : ''} />
        <span className={isOpen ? 'open' : ''} />
      </HamburgerButton>

      {/* Menu mobile — aparece abaixo da navbar quando aberto */}
      <MobileMenu $isOpen={isOpen}>
        <NavLink href="#about" onClick={handleLinkClick}>Sobre</NavLink>
        <NavLink href="#projects" onClick={handleLinkClick}>Projetos</NavLink>
        <NavLink href="#skills" onClick={handleLinkClick}>Habilidades</NavLink>
        <NavLink href="#contact" onClick={handleLinkClick}>Contato</NavLink>
      </MobileMenu>

    </Nav>
  )
}