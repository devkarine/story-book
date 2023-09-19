# Storybook

- [Storybook](#storybook)
  - [O que é o Storybook?](#o-que-é-o-storybook)
  - [Qual problema ele resolve?](#qual-problema-ele-resolve)
  - [Por que usar o Storybook?](#por-que-usar-o-storybook)
  - [Qual tipo de aplicação faria sentido usar o Storybook?](#qual-tipo-de-aplicação-faria-sentido-usar-o-storybook)
  - [Showcase](#showcase)
  - [Como instalar o Storybook?](#como-instalar-o-storybook)
  - [Como rodar o Storybook?](#como-rodar-o-storybook)
  - [O que são histórias?](#o-que-são-histórias)
  - [O que é 'controls'?](#o-que-é-controls)
  - [Addons](#addons)
  - [Publicando o Storybook](#publicando-o-storybook)

## O que é o Storybook?

O Storybook é uma ferramenta de desenvolvimento de interface de usuário para componentes isoladamente, disponibilizando um playground para criação e testes de componentes e páginas de forma isolada, sem a necessidade de iniciar toda a aplicação. Milhares de equipes o utilizam para desenvolvimento, testes e documentação de UI. É open source e gratuito.

Não só React, mas também Vue, Angular, Mithril, Marko, HTML, Svelte, Meteor, Ember, Riot e Preact são suportados.

## Qual problema ele resolve?

O Storybook resolve vários problemas comuns no desenvolvimento de interfaces de usuário (UI) em projetos de frontend:

**Complexidade Crescente na UI:** Com o aumento da complexidade nas interfaces de usuário, devido a diferentes dispositivos, navegadores, requisitos de acessibilidade, desempenho e estados assíncronos, torna-se desafiador desenvolver e testar todas as variações da UI de forma eficiente.

**Gerenciamento de Componentes:** À medida que os projetos crescem, o número de componentes de UI pode se tornar volumoso e difícil de gerenciar. Manter o controle de centenas de componentes e suas variações pode ser complicado.

**Depuração Complexa:** A depuração de componentes de UI pode ser difícil, pois eles estão frequentemente entrelaçados com lógica de negócios, estados interativos e contexto de aplicativo. Isso dificulta a identificação e correção de problemas específicos de UI.

![problem](./../images/stotybook-01.jpg)

## Por que usar o Storybook?

O uso do Storybook em projetos oferece diversas vantagens significativas para o desenvolvimento de interfaces de usuário (UI). Aqui estão algumas razões para considerar o uso do Storybook em projetos de frontend:

**Desenvolvimento em Isolamento:** Com o Storybook, cada pedaço da interface de usuário é tratado como um componente separado. Isso permite que você desenvolva e visualize componentes de forma isolada, sem precisar iniciar toda a aplicação. Isso economiza tempo e facilita o foco no desenvolvimento de cada variação de componente, mesmo as situações complexas e de borda.

**Captura de Variações de UI como "Histórias":** O Storybook permite que você capture diferentes variações de componentes como "histórias". Cada história é uma representação declarativa de como um componente deve se comportar com diferentes propriedades e dados fictícios. Essas histórias podem ser usadas para verificar a aparência e o comportamento do componente.

**Organização e Documentação:** O Storybook age como um diretório interativo de todos os seus componentes de UI e suas histórias. Ele serve como uma fonte única e organizada de verdade para a UI do seu projeto, o que facilita para a equipe encontrar e reutilizar padrões de UI existentes. Além disso, o Storybook pode gerar documentação automaticamente a partir dessas histórias.

**Testes Reprodutíveis:** As histórias do Storybook fornecem uma maneira pragmática e reprodutível de testar estados de UI durante o desenvolvimento. Você pode usar o Storybook para testes de acessibilidade, interação e visualização. Também é possível importar histórias em outras ferramentas de teste JavaScript.

**Compartilhamento e Colaboração:** O Storybook permite compartilhar como a UI realmente funciona, o que ajuda a manter todos alinhados com o que está em produção. Você pode publicar o Storybook para obter aprovação da equipe ou incorporá-lo em wikis, documentos Markdown e ferramentas de design para facilitar a colaboração.

**Automação de Fluxos de Trabalho:** O Storybook pode ser integrado ao seu fluxo de trabalho de integração contínua (CI) para automatizar testes de interface do usuário, revisão de implementação e obtenção de aprovação de partes interessadas.

**Reutilização de Histórias:** As histórias do Storybook são exportadas como funções JavaScript, permitindo que você as reutilize em outras ferramentas de desenvolvimento, teste e design. Isso significa que você pode usar as mesmas histórias em diferentes contextos sem ficar preso a uma única ferramenta.

**Acessbilidade:** O Storybook pode ser usado para testar a acessibilidade de componentes de UI. Ele pode ser integrado a ferramentas de teste de acessibilidade, como Axe, para testar a acessibilidade de componentes de UI em diferentes estados.

No geral, o Storybook é uma ferramenta poderosa que ajuda a desenvolver interfaces de usuário complexas com mais rapidez, durabilidade e menor esforço de manutenção. Ele é amplamente utilizado por muitas empresas e desenvolvedores em todo o mundo para aprimorar o desenvolvimento frontend e facilitar a colaboração entre equipes.

[Veja aqui.](../images/whats-a-story.mp4)

## Qual tipo de aplicação faria sentido usar o Storybook?

O Storybook é mais benéfico e adequado para projetos de desenvolvimento de interfaces de usuário (UI) em que a UI é uma parte fundamental e complexa da aplicação. Aqui estão alguns tipos de aplicações em que o uso do Storybook faz sentido:

**Aplicações da Web Complexas:** Projetos de desenvolvimento de aplicações da web complexas, como painéis de administração, plataformas de comércio eletrônico, sistemas de gerenciamento de conteúdo e aplicativos empresariais, muitas vezes têm interfaces de usuário complexas e multifacetadas. O Storybook ajuda a gerenciar a complexidade dessas interfaces.

**Componentização Elevada:** Quando a aplicação é altamente componentizada, o Storybook se torna especialmente útil. Isso inclui projetos que usam bibliotecas de componentes como React, Vue ou Angular, onde muitos componentes diferentes precisam ser desenvolvidos e testados.

**Reutilização de Componentes:** Se a aplicação prevê a reutilização frequente de componentes de UI em diferentes partes do aplicativo ou em diferentes projetos, o Storybook pode ajudar a criar um catálogo organizado desses componentes e suas variações.

**Foco na Qualidade da UI:** Se a qualidade da interface do usuário é uma prioridade crítica e você deseja testar, documentar e validar todas as variações de componentes de UI de maneira sistemática, o Storybook oferece uma estrutura eficaz para isso.

**Colaboração entre Equipes:** Quando várias equipes trabalham em um projeto de frontend, como equipes de design, desenvolvimento e teste, o Storybook facilita a colaboração, pois fornece uma fonte única de verdade para a UI que todas as equipes podem acessar.

**Projetos de Longo Prazo:** Projetos que têm um ciclo de vida longo ou que podem passar por várias iterações e revisões ao longo do tempo podem se beneficiar do Storybook, pois ele ajuda a manter um registro claro de como a UI evoluiu.

Em resumo, o Storybook é especialmente útil em projetos onde a UI é complexa, altamente componentizada, requer testes rigorosos e documentação, envolve equipes multidisciplinares e/ou tem um ciclo de vida longo. No entanto, mesmo em projetos menores, o Storybook pode ser valioso para melhorar a eficiência e a qualidade do desenvolvimento de UI.

## Showcase

No site do Storybook, você pode ver uma lista de exemplos de empresas que utilizam a ferramenta. [Veja aqui](https://storybook.js.org/showcase).

Podemos ver que [Chakra UI](https://chakra-ui.com/) utiliza a ferramente e disponibiliza o Design System. [Veja aqui.](https://chakra-ui.netlify.app/)

## Como instalar o Storybook?

Em projeto existente, instale o Storybook com o seguinte comando:

```bash
npx storybook@latest init
```

O comando acima fez:

- Instalou as dependências necessárias.
- Configurou os scripts necessários para executar e 🛠 construir o Storybook.
- Adicionou a configuração padrão do Storybook.
- Adicionou algumas histórias de boilerplate para você começar.
- Configurou a telemetria para nos ajudar a melhorar o Storybook. Leia mais sobre isso [aqui](https://storybook.js.org/docs/react/configure/telemetry).

Se tudo correr bem, você verá um assistente de configuração que o ajudará a começar com o Storybook, apresentando os principais conceitos e recursos, incluindo como a IU é organizada, como escrever sua primeira história e como testar a resposta de seus componentes a várias entradas utilizando controles.

Se pular o assistente de configuração, você sempre pode executá-lo novamente adicionando o parâmetro de consulta `?path=/onboarding` à URL da sua instância do Storybook, desde que as histórias de exemplo ainda estejam disponíveis.

## Como rodar o Storybook?

O Storybook vem com um servidor de desenvolvimento integrado com tudo o que você precisa para o desenvolvimento do projeto. Dependendo da configuração do seu sistema, a execução do comando `storybook` iniciará o servidor de desenvolvimento local, exibirá o endereço para você e abrirá automaticamente o endereço em uma nova guia do navegador, onde uma tela de boas-vindas o receberá.

```bash
npm run storybook
```

![interface do storybook](../images/storybook-ui-03.png)

A interface do usuário do Storybook é composta por uma barra lateral à esquerda, que lista todos os seus componentes e suas histórias, e uma área de visualização à direita, onde você pode visualizar e interagir com os componentes na parte de cima e os controles na parte de baixo.

## O que são histórias?

Uma "história" (ou "story" em inglês) é uma representação de um componente de interface de usuário (UI) em um determinado estado ou variação, são blocos de construção do Storybook. As histórias permitem aos desenvolvedores descrever visualmente como um componente específico deve ser renderizado em diferentes cenários ou estados. Cada história captura o estado renderizado de um componente e pode incluir diferentes configurações, como propriedades, dados fictícios ou eventos simulados.

Suponha que você esteja desenvolvendo um componente de botão (por exemplo, um botão em uma página da web) e deseja criar histórias para representar diferentes variações desse botão. Você pode ter histórias para um botão primário, um botão secundário e um botão de desativação.

Arquivo de histórias do Storybook possuem a extensão `.stories.ts` ou `.stories.tsx`.

Aqui está um exemplo de como você pode criar histórias para essas variações usando o Storybook:

```ts
// Button.stories.tsx
// Button.stories.ts|tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

/*
 *  Renderizar funções são um recurso específico do framework que permite controlar como o componente é renderizado.
 */
export const Primary: Story = {
  render: () => <Button primary label="Button" />,
};

export const Secondary: Story = {
  render: () => <Button secondary label="Button" />,
};
```

Neste exemplo:

- Cada história representa uma variação do componente de botão.
- O título é usado para agrupar as histórias relacionadas sob o mesmo título, tornando a organização mais fácil no Storybook.
- Cada história é uma função que renderiza o componente em um estado específico. No caso, temos histórias para um botão primário, um botão secundário e um botão de desativação.
- As histórias podem incluir diferentes propriedades ou configurações (como o tipo "primário" ou "secundário") para simular diferentes estados do botão.

No Storybook, você pode navegar e visualizar todas essas histórias separadamente, o que facilita o desenvolvimento, teste e documentação de componentes de UI em diferentes cenários. Isso ajuda a garantir que o componente funcione corretamente em várias situações e ajuda a evitar regressões acidentais à medida que você faz alterações no código.

## O que é 'controls'?

No Storybook, os "controls" são uma funcionalidade que permite aos desenvolvedores interagirem com as histórias dos componentes diretamente na interface do usuário do Storybook. Esses controles permitem ajustar dinamicamente as propriedades e os valores de entrada de um componente sem a necessidade de alterar o código-fonte. Os controles são especialmente úteis para visualizar como um componente responde a diferentes configurações e dados de entrada. Veja mais [aqui](https://www.youtube.com/watch?v=vAh0KdRcXpI).

![controls](../images/storybook-control.gif)

## Addons

O Storybook possui uma arquitetura de plugin que permite estender sua funcionalidade com "addons". Os addons são pacotes de extensão que adicionam novos recursos e integrações ao Storybook. Eles podem ser usados para adicionar funcionalidades como testes de acessibilidade, documentação, integração com ferramentas de design e muito mais.

## Publicando o Storybook

O Storybook pode ser publicado como um site estático para que você possa compartilhar e colaborar com outras pessoas. Você pode publicar o Storybook em qualquer lugar que hospede sites estáticos, como Netlify, GitHub Pages, Vercel, AWS S3, Google Cloud Storage, etc.

Para publicar o Storybook, você precisa construí-lo primeiro. Para _buildar_ o Storybook, execute o seguinte comando:

```bash
npm run build-storybook
```

Isso criará uma pasta `storybook-static` no diretório raiz do seu projeto. Você pode publicar essa pasta em qualquer lugar que hospede sites estáticos.
