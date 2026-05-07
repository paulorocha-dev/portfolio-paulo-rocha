# Portfólio — Paulo Henrique Rocha

Portfólio pessoal desenvolvido com Next.js e TypeScript, apresentando projetos, habilidades e informações de contato.

## Tecnologias utilizadas

- [Next.js](https://nextjs.org/) — framework React com suporte a SSR
- [TypeScript](https://www.typescriptlang.org/) — tipagem estática
- [Styled Components](https://styled-components.com/) — estilização com tema global
- [Framer Motion](https://www.framer-motion.com/) — animações
- [EmailJS](https://www.emailjs.com/) — envio de e-mails pelo formulário de contato

---

## Como rodar localmente

**Pré-requisitos:** Node.js 18+ e npm instalados.

**1. Clone o repositório**
```bash
git clone https://github.com/paulorocha-dev/portfolio-paulo-rocha
cd portfolio
```

**2. Instale as dependências**
```bash
npm install
```

**3. Configure as variáveis de ambiente**

Crie um arquivo `.env.local` na raiz do projeto com suas credenciais do EmailJS:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=seu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=seu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sua_public_key
```

**4. Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

---

## Deploy

O portfólio está publicado na Vercel e pode ser acessado em:

**[https://portfolio-paulo-rocha.vercel.app](https://portfolio-paulo-rocha.vercel.app)**

Para realizar seu próprio deploy na Vercel:

1. Importe o repositório em [vercel.com](https://vercel.com)
2. Configure as variáveis de ambiente do EmailJS no painel da Vercel
3. Clique em **Deploy**

---

## Projetos apresentados

### Cinelista
Catálogo de filmes em destaque consumindo a API do TMDB, desenvolvido com Next.js e TypeScript.

- **Repositório:** [github.com/paulorocha-dev/nextjs-cinelista](https://github.com/paulorocha-dev/nextjs-cinelista)
- **Tecnologias:** Next.js, TypeScript, Vercel

### PokeAPI REST
API REST com FastAPI integrando PokeAPI, cache Redis, SQLite e pipeline CI/CD completo.

- **Repositório:** [https://github.com/paulorocha-dev/Backend-API-Pokemon](https://github.com/paulorocha-dev/Backend-API-Pokemon)
- **Tecnologias:** FastAPI, Redis, SQLite, GitHub Actions

### To-do List
To-do list com Next.js e TypeScript. Suporta prioridades, categorias, filtros e persistência via localStorage.

- **Repositório:** [https://github.com/paulorocha-dev/todo-nextjs](https://github.com/paulorocha-dev/todo-nextjs)
- **Tecnologias:** Next.js, TypeScript, Styled Components, Framer Motion

---

## Contato

- **GitHub:** [github.com/paulorocha-dev](https://github.com/paulorocha-dev)
- **LinkedIn:** [https://www.linkedin.com/in/paulo-henrique-rocha-dev/](https://www.linkedin.com/in/paulo-henrique-rocha-dev/)