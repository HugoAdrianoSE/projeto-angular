import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { MenuComponent } from '../../components/menu/menu.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],

  imports: [
    CardComponent,
    CommonModule,
    MenuComponent,
    RouterLink,
    RouterModule,
  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class HomePage implements OnInit {
  public itens = [
    {
      icone: 'fab fa-google',
      titulo: 'O Surgimento do Angular',
      texto: 'O Angular foi criado pelo Google e lançado oficialmente em 2016 como uma reescrita completa do seu antecessor, o AngularJS, introduzido originalmente em 2010. O objetivo da reformulação foi abordar as limitações de escalabilidade, desempenho e modularidade do AngularJS. Essa nova versão trouxe uma abordagem mais moderna para o desenvolvimento de aplicações web, facilitando a criação de aplicações complexas e otimizando o desempenho por meio de ferramentas como a compilação Ahead-of-Time (AOT) e a detecção de mudanças mais eficiente.'
    },
    {
      icone: 'fas fa-tools',
      titulo: 'O que é o Angular?',
      texto: 'O Angular é um framework de código aberto para o desenvolvimento de aplicações web dinâmicas, baseado em TypeScript. Criado para facilitar a criação de Single Page Applications (SPAs), o Angular permite a construção de interfaces ricas e interativas com carregamento rápido de páginas. Com uma arquitetura modular e altamente escalável, ele fornece uma estrutura robusta para gerenciar estados, realizar chamadas assíncronas, manipular DOM e realizar testes automatizados. Seu ecossistema é vasto, integrando ferramentas que simplificam a configuração de ambientes e a manutenção de grandes projetos.'
    },
    {
      icone: 'fas fa-layer-group',
      titulo: 'Arquitetura base do Angular',
      texto: 'A arquitetura do Angular é baseada em uma organização clara e modular composta por componentes, serviços, módulos e diretivas. Os componentes são os blocos fundamentais de construção de uma interface no Angular, responsáveis por controlar a lógica de exibição e interação. Os serviços encapsulam a lógica de negócios, enquanto os módulos ajudam a organizar o código em diferentes partes da aplicação, facilitando a reutilização e o carregamento preguiçoso (lazy loading). Além disso, o Angular usa uma estrutura baseada em injeção de dependências, que melhora a testabilidade e flexibilidade do código.'
    },
    {
      icone: 'fas fa-cube',
      titulo: 'Componentes no Angular',
      texto: 'No Angular, componentes são os elementos centrais de uma aplicação, permitindo a criação de interfaces de usuário complexas divididas em partes independentes e reutilizáveis. Cada componente no Angular é composto por um template HTML, uma classe TypeScript para a lógica e um arquivo de estilo CSS para a apresentação visual. Essa abordagem modular facilita o desenvolvimento de aplicações escaláveis, pois os componentes podem ser facilmente combinados, atualizados ou substituídos conforme necessário, promovendo a manutenção e a organização do código.'
    },
    {
      icone: 'fas fa-code',
      titulo: 'TypeScript no Angular',
      texto: 'O Angular é escrito em TypeScript, uma linguagem de programação desenvolvida pela Microsoft que adiciona tipagem estática ao JavaScript. A tipagem estática torna o código mais robusto e fácil de manter, pois permite que erros sejam detectados durante a compilação, antes mesmo da execução. Além disso, o TypeScript oferece suporte a recursos modernos do JavaScript (ES6+), como classes, módulos e arrow functions, enquanto ainda é compatível com bibliotecas e frameworks em JavaScript puro. Isso proporciona uma base sólida para desenvolvedores que trabalham com aplicações grandes e complexas.'
    },
    {
      icone: 'fas fa-globe',
      titulo: 'Ecossistema do Angular',
      texto: 'O Angular oferece um ecossistema completo e integrado que facilita o desenvolvimento de aplicações web modernas. Dentro desse ecossistema, estão incluídas ferramentas como o Angular CLI, que simplifica a criação e manutenção de projetos; o Angular Material, que oferece uma vasta biblioteca de componentes prontos para uso; o RxJS, para trabalhar com programação reativa; e o sistema de roteamento interno do Angular, que gerencia navegação em Single Page Applications. Essas ferramentas ajudam a reduzir a complexidade do desenvolvimento e garantem consistência no código.'
    },
    {
      icone: 'fas fa-business-time',
      titulo: 'Angular e a Google',
      texto: 'O Angular é mantido pelo Google, e sua continuidade é garantida por uma equipe dedicada dentro da empresa. Além disso, ele é utilizado por grandes organizações ao redor do mundo que exigem alto desempenho, escalabilidade e segurança em suas aplicações web. O fato de o Google usar o Angular em diversos produtos, como o Google Ads, oferece uma garantia de longo prazo, demonstrando o comprometimento da empresa com a evolução contínua do framework. Isso dá aos desenvolvedores e empresas confiança para adotá-lo em projetos de grande escala.'
    },
    {
      icone: 'far fa-thumbs-up',
      titulo: 'Vantagens do Angular',
      texto: 'O Angular oferece várias vantagens em relação a outros frameworks e bibliotecas. Entre seus pontos fortes estão o suporte nativo para roteamento, injeção de dependências, templates declarativos e um poderoso sistema de diretivas. Outro benefício importante é a capacidade de fazer renderização no lado do servidor (Server-Side Rendering) para melhorar o desempenho de SEO e o tempo de carregamento inicial das páginas. Além disso, o Angular tem uma comunidade ativa que constantemente contribui com novas bibliotecas, ferramentas e boas práticas, facilitando o desenvolvimento de projetos complexos e de longo prazo.'
    },
    {
      icone: 'fas fa-users',
      titulo: 'Comunidade do Angular',
      texto: 'A comunidade do Angular é uma das mais vibrantes no mundo de desenvolvimento web. Com milhares de desenvolvedores ativos contribuindo para a evolução do framework, a comunidade Angular cria um ambiente colaborativo onde novos recursos, bibliotecas e ferramentas são constantemente introduzidos. Há conferências dedicadas ao Angular, como a ng-conf, além de uma vasta gama de tutoriais, fóruns e grupos online que ajudam desenvolvedores a trocar conhecimento e resolver problemas de forma rápida e eficiente.'
    },
    {
      icone: 'fas fa-hammer',
      titulo: 'Ferramentas de Desenvolvimento',
      texto: 'O Angular CLI é uma das ferramentas mais poderosas à disposição dos desenvolvedores que utilizam Angular. Ele facilita a criação, configuração e manutenção de projetos Angular com comandos simples para gerar componentes, serviços, módulos, e realizar builds otimizados para produção. Além disso, o CLI oferece suporte para testes automatizados, linting de código, internacionalização e muito mais, proporcionando um fluxo de desenvolvimento eficiente e consistente. Essa automação e padronização ajudam a reduzir erros e garantir uma alta qualidade de código.'
    },
    {
      icone: 'fas fa-sync-alt',
      titulo: 'Melhorias contínuas',
      texto: 'O Angular está em constante evolução, com uma equipe dedicada que lança atualizações regulares contendo novas funcionalidades, melhorias de desempenho e correções de segurança. Essas atualizações garantem que o framework se mantenha moderno e eficiente, suportando as últimas tendências e tecnologias da web. O Angular também oferece ferramentas que facilitam a migração de versões anteriores para as mais recentes, minimizando o impacto nas aplicações em produção e mantendo-as sempre atualizadas com as melhores práticas.'
    },
    {
      icone: 'far fa-clipboard',
      titulo: 'Princípios do Angular',
      texto: 'O Angular é guiado por princípios sólidos de design e desenvolvimento, como a separação de responsabilidades, modularidade, e a utilização de injeção de dependências para melhorar a flexibilidade e a testabilidade. Ele também promove o uso de reatividade através do RxJS, que permite o tratamento eficiente de eventos e a manipulação de fluxos de dados assíncronos. Esses princípios tornam o Angular uma escolha robusta para a construção de aplicações complexas e de larga escala, mantendo a clareza e a organização do código.'
    },
    {
      icone: 'fas fa-briefcase',
      titulo: 'Framework para Empresas',
      texto: 'O Angular é amplamente adotado por empresas que desenvolvem aplicações corporativas de grande escala. Sua arquitetura modular, suporte para renderização no servidor e ferramentas integradas de desenvolvimento tornam o framework ideal para lidar com projetos complexos e exigentes. Empresas como Google, Microsoft, e The Guardian utilizam Angular para construir plataformas robustas, escaláveis e de alta performance, o que reforça sua popularidade no mundo corporativo. Além disso, o suporte contínuo do Google garante sua longevidade.'
    },
    {
      icone: 'fas fa-th',
      titulo: 'Exemplos de uso do Angular',
      texto: 'O Angular é utilizado em uma variedade de aplicações web que vão desde plataformas de e-commerce, sistemas de gestão interna, até aplicativos corporativos. Alguns exemplos incluem grandes sites de notícias, plataformas de gerenciamento de projetos e sistemas de CRM. O framework se destaca em aplicações onde o desempenho, a modularidade e a capacidade de escalar são requisitos essenciais. A flexibilidade do Angular permite que ele seja utilizado em diferentes tipos de indústrias e para diversas finalidades, demonstrando sua versatilidade.'
    }
  ];

  public tituloAtual = this.itens[0].titulo;
  public textoAtual = this.itens[0].texto;

  constructor() {}

  public async ngOnInit() {

  }

  public async atualizarTexto(item: any) {
    this.tituloAtual = item.titulo;
    this.textoAtual = item.texto;
  }
}
