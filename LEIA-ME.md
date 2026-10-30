# Seu portfólio no GitHub Pages

Este é o site principal para apresentar **você**, suas habilidades e seus projetos. O AgendaFlow é uma demonstração dentro da seção Projetos.

## 1. Personalize seus dados

Edite **profile.js** e preencha nome, marca curta, apresentação, história, objetivo, GitHub e LinkedIn. E-mail é opcional. Descreva apenas habilidades que realmente possui; as tecnologias iniciais são as usadas no AgendaFlow, não uma avaliação do seu conhecimento.

```js
name: 'Seu Nome Completo',
brand: 'seu.nome',
github: 'https://github.com/SEUUSUARIO',
linkedin: 'https://www.linkedin.com/in/SEUPERFIL/',
```

Os contatos sem link ficam marcados como pendentes e não direcionam para perfis inventados. Quando você criar o repositório do AgendaFlow, preencha `projectRepository` para trocar “Baixar código” por “Ver código no GitHub”.

## 2. Crie seu repositório pessoal

No GitHub, clique em **+ → New repository**. Use o nome:

```text
SEUUSUARIO.github.io
```

Troque SEUUSUARIO pelo seu nome de usuário exato do GitHub. Marque **Public** e crie o repositório.

## 3. Envie os arquivos

Extraia o ZIP do portfólio. No repositório, use **Add file → Upload files** e arraste o **conteúdo da pasta portfolio**, incluindo as pastas `assets` e `projects`.

O arquivo **index.html precisa ficar na raiz do repositório**. Não envie apenas o ZIP nem crie uma pasta `portfolio` dentro do repositório. Finalize em **Commit changes**.

Estrutura esperada:

```text
index.html
style.css
app.js
profile.js
agendaflow-source.zip
assets/agendaflow.png
projects/agendaflow/index.html
projects/agendaflow/style.css
projects/agendaflow/app.js
```

## 4. Ative o GitHub Pages

Em **Settings → Pages**, configure:

- Source: **Deploy from a branch**
- Branch: **main**
- Folder: **/ (root)**
- Clique em **Save**.

O site ficará em **https://SEUUSUARIO.github.io/** quando a publicação terminar. Não precisa contratar hospedagem nem instalar Java no GitHub. Um repositório com outro nome também funciona, com endereço `https://SEUUSUARIO.github.io/NOME-DO-REPOSITORIO/`; os links deste site são relativos e suportam esse formato.

Referência: https://docs.github.com/pt/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Como o AgendaFlow funciona dentro do portfólio

O botão “Ver projeto ao vivo” abre uma cópia da interface do AgendaFlow. No GitHub Pages, ela usa dados demonstrativos salvos no navegador. O código Java está no ZIP para download. O GitHub Pages não executa backend Java.

O backend Java foi escrito, mas ainda não teve execução validada com JDK 17 no ambiente da entrega. O projeto inclui seus próprios testes e GitHub Actions.

## Adicionar mais projetos

Cada projeto pode ter seu próprio repositório e uma demonstração. Duplique o bloco `<article class="project">` em `index.html`, atualize texto, imagem, tecnologias e links, e ajuste a contagem na navegação. Não há projetos fictícios nesta versão.

## Testar localmente

Com Node.js instalado, execute nesta pasta:

```sh
node preview.mjs
```

Abra http://localhost:4174. Para encerrar, use Ctrl+C.

O portfólio é estático (HTML, CSS e JavaScript). Java é usado no backend dos projetos que você apresenta. Essa organização permite publicar a página pessoal gratuitamente no GitHub Pages.
