import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { MenuComponent } from '../../components/menu/menu.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',

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
      texto: 'Angular foi criado pelo Google e lançado oficialmente em 2016 como uma reescrita completa do AngularJS, introduzido em 2010. Essa evolução trouxe grandes melhorias em performance e modularidade.'
    },
    {
      icone: 'fas fa-tools',
      titulo: 'O que é o Angular?',
      texto: 'Angular é um framework de código aberto para o desenvolvimento de aplicações web dinâmicas. Criado para facilitar a criação de Single Page Applications (SPAs), ele oferece uma estrutura modular baseada em componentes.'
    },
    {
      icone: 'fas fa-layer-group',
      titulo: 'Arquitetura base do Angular',
      texto: 'A arquitetura do Angular é baseada em componentes, serviços e módulos, promovendo a separação de responsabilidades e a organização do código.'
    },
    {
      icone: 'fas fa-cube',
      titulo: 'Componentes no Angular',
      texto: 'Componentes são os blocos fundamentais no Angular. Eles dividem a interface em pedaços reutilizáveis e independentes, tornando a manutenção mais fácil.'
    },
    {
      icone: 'fas fa-code',
      titulo: 'TypeScript no Angular',
      texto: 'O Angular é escrito em TypeScript, uma linguagem que adiciona tipagem estática ao JavaScript, facilitando a detecção de erros e melhorando a manutenção.'
    },
    {
      icone: 'fas fa-globe',
      titulo: 'Ecossistema do Angular',
      texto: 'O Angular oferece um ecossistema completo, incluindo ferramentas como roteamento, formulários reativos, injeção de dependências e testes.'
    },
    {
      icone: 'fas fa-business-time',
      titulo: 'Angular e a Google',
      texto: 'O Angular é mantido pelo Google, e é amplamente utilizado por grandes empresas que exigem desempenho, escalabilidade e segurança.'
    },
    {
      icone: 'far fa-thumbs-up',
      titulo: 'Vantagens do Angular',
      texto: 'O Angular oferece uma série de vantagens, como desempenho otimizado, fácil manutenção, escalabilidade e um forte suporte comunitário.'
    },
    {
      icone: 'fas fa-users',
      titulo: 'Comunidade do Angular',
      texto: 'A comunidade Angular é ativa e colaborativa, contribuindo constantemente com novas bibliotecas, ferramentas e melhores práticas.'
    },
    {
      icone: 'fas fa-hammer',
      titulo: 'Ferramentas de Desenvolvimento',
      texto: 'O Angular CLI é uma ferramenta poderosa que facilita a criação, testes e manutenção de aplicações Angular, tornando o desenvolvimento mais eficiente.'
    },
    {
      icone: 'fas fa-sync-alt',
      titulo: 'Melhorias contínuas',
      texto: 'O Angular é constantemente atualizado, com novas funcionalidades e melhorias de desempenho, garantindo que os desenvolvedores tenham acesso às melhores práticas e recursos.'
    },
    {
      icone: 'far fa-clipboard',
      titulo: 'Princípios do Angular',
      texto: 'O Angular é baseado em princípios sólidos como a injeção de dependências, reatividade e a separação de preocupações, que ajudam na construção de aplicações robustas.'
    },
    {
      icone: 'fas fa-briefcase',
      titulo: 'Framework para Empresas',
      texto: 'O Angular é uma escolha popular para empresas que desenvolvem aplicações complexas, devido à sua robustez e capacidade de escalar.'
    },
    {
      icone: 'fas fa-th',
      titulo: 'Exemplos de uso do Angular',
      texto: 'O Angular é utilizado em várias aplicações web populares, incluindo plataformas de e-commerce, sistemas de gestão e aplicativos corporativos.'
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
