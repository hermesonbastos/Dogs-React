# Dogs React App

Este projeto foi desenvolvido como parte do curso "React Completo" oferecido pela plataforma ORIGAMID. A aplicação utiliza React para criar uma experiência interativa de rede social para os nossos amigos de quatro patas.

## Descrição

A aplicação tem como objetivo proporcionar uma experiência de rede social em torno do mundo dos nossos queridos pets. Utilizando tecnologias modernas como React e Vite e boas práticas de desenvolvimento, além de utilizar de conceitos consistentes de UI e UX para garantir a usabilidade e experiência do usuário.

## Funcionalidades Principais

- **Autenticação e Autorização:**
  - Implementação de rotas de login para autenticação de usuários.
  - Uso de contexto (`userContext`) para gerenciar o estado global de usuário.
  - Criação de rotas protegidas para garantir o acesso apenas a usuários autenticados.

- **Gerenciamento de Estado:**
  - Utilização do hook `useForm` para gerenciar formulários.
  - Desenvolvimento do hook `useFetch` para facilitar o gerenciamento de requisições assíncronas.

- **Integração com API:**
  - Uso da API Fetch para realizar requisições HTTP.
  - Implementação de validação de token para garantir a segurança da autenticação.

- **Componentização e Estilização:**
  - Organização do código em componentes reutilizáveis.
  - Estilização personalizada para melhorar a experiência do usuário.

- **Funcionalidades Avançadas:**
  - Lazy loading e suspense para otimizar o carregamento de componentes.
  - Scroll infinito para proporcionar uma experiência fluida ao usuário.

- **Manipulação de Dados:**
  - Criação de funcionalidades como postagem de fotos, comentários e exclusão.
  - Desenvolvimento de um feed de postagens com modal interativo.

- **Validação de Dados:**
  - Utilização do pacote `prop-types` para validar as propriedades dos componentes.

- **Tratamento de Erros:**
  - Páginas personalizadas para perfil de usuário e tratamento de erro 404.
  - Implementação de recuperação de senha.

- **Build e Hospedagem:**
  - Configuração do processo de build e hospedagem da aplicação.

## Tecnologias Principais

- React: ^18.2.0
- React Router DOM: ^6.21.2
- Vite: ^5.0.8
- ESLint: ^8.55.0

## Como Executar o Projeto

1. **Instalação de Dependências:**
   ```bash
   npm install
   ```

2. **Executar em Ambiente de Desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Build da Aplicação:**
   ```bash
   npm run build
   ```

Sinta-se à vontade para explorar e contribuir para o desenvolvimento deste projeto. Se encontrar problemas ou tiver sugestões, abra uma issue neste repositório.
