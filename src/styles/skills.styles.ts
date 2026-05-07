import styled from 'styled-components'

export const Section = styled.section`
  padding: clamp(150px, 20vh, 220px) clamp(20px, 5vw, 80px);

  @media (min-width: 641px) and (max-width: 1024px) {
    padding: clamp(150px, 20vh, 220px) clamp(20px, 5vw, 80px) 280px;
  }
`

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`

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

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
`

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;

  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary};
  background: rgba(255, 106, 0, 0.1);
  border: 1px solid rgba(255, 106, 0, 0.2);
  padding: 6px 16px;
  border-radius: ${({ theme }) => theme.borderRadius.pill};

  transition:
    background ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;

    /* Ícone também fica branco no hover */
    svg { color: #fff; }
  }
`