import styled from 'styled-components'

export const Nav = styled.nav`
  width: 100%;

  /* clamp garante padding lateral responsivo:
     mínimo 20px, ideal 5% da tela, máximo 80px */
  padding: 16px clamp(20px, 5vw, 80px);

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: sticky; /* fica fixo no topo ao rolar */
  top: 0;
  z-index: 100; /* garante que fique acima de todos os outros elementos */

  /* fundo semi-transparente + blur = efeito glassmorphism */
  background-color: rgba(26, 26, 26, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

export const Logo = styled.span`
  /* span em vez de h1 — logo não é título de conteúdo,
     é identidade visual de navegação */
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: -0.5px; /* aperta levemente as letras */
`

/* Lista de links — esconde em telas pequenas */

export const NavList = styled.ul`
  display: flex;
  gap: 32px; /* espaço entre os itens */
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 640px) {
    display: none;
  }
`

export const NavItem = styled.li``

export const NavLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  letter-spacing: 0.5px;
  transition: color ${({ theme }) => theme.transitions.fast};

  /* pseudo-elemento para o sublinhado animado no hover */
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0; /* começa invisível */
    height: 1px;
    background: ${({ theme }) => theme.colors.primary};
    transition: width ${({ theme }) => theme.transitions.default};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    &::after {
      width: 100%; /* expande o sublinhado ao passar o mouse */
    }
  }
`

/* Botão hamburguer — visível só em mobile */
export const HamburgerButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  z-index: 101; /* acima do MobileMenu */

  @media (max-width: 640px) {
    display: flex;
  }

  /* Cada linha do ícone hamburguer */
  span {
    display: block;
    width: 24px;
    height: 2px;
    background: ${({ theme }) => theme.colors.text};
    border-radius: 2px;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  /* Animação das linhas para X quando aberto:
     primeira linha roda +45°, do meio some, última roda -45° */
  span:nth-child(1).open { transform: translateY(7px) rotate(45deg); }
  span:nth-child(2).open { opacity: 0; }
  span:nth-child(3).open { transform: translateY(-7px) rotate(-45deg); }
`

/* Menu mobile — painel que desce abaixo da navbar */
export const MobileMenu = styled.div<{ $isOpen: boolean }>`
  /* $isOpen com $ evita que a prop vaze para o DOM como atributo HTML */
  display: none;

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    /* Posicionado logo abaixo da navbar */
    position: fixed;
    top: 57px; /* altura da navbar */
    left: 0;
    right: 0;

    background-color: rgba(26, 26, 26, 0.97);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    padding: 32px 20px;

    /* Animação de entrada/saída via transform + opacity */
    transform: ${({ $isOpen }) => $isOpen ? 'translateY(0)' : 'translateY(-10px)'};
    opacity: ${({ $isOpen }) => $isOpen ? '1' : '0'};
    pointer-events: ${({ $isOpen }) => $isOpen ? 'all' : 'none'};
    transition:
      transform ${({ theme }) => theme.transitions.default},
      opacity ${({ theme }) => theme.transitions.default};

    /* Links maiores no mobile para facilitar o toque */
    a {
      font-size: ${({ theme }) => theme.fontSizes.lg};
    }
  }
`