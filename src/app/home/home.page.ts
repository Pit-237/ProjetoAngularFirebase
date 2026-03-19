import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';
import { Livro } from './livros.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

livros = [
  {
    isbn: '587', 
    titulo: 'All Tomorows', 
    sinopse: 'Este livro te leva para todos os amanhãs', 
    data_lancamento: '01/01/1001', 
    paginas: '123',
    autor: [
      {nome:'Peter Griffin', email:'hehehehehheh@outlook.com'}
    ],
    categoria: [
      { nome: 'Ficção'}
    ],
    editora: {nome: 'Tengo', email: 'Tengo@outlook.com'}
  },

  {
    isbn: '588',
    titulo: 'O Último Horizonte',
    sinopse: 'Uma jornada além das estrelas.',
    data_lancamento: '12/05/2010',
    paginas: '320',
    autor: [{ nome: 'Ana Souza', email: 'ana@outlook.com' }],
    categoria: [{ nome: 'Ficção Científica' }],
    editora: { nome: 'Galáxia', email: 'contato@galaxia.com' }
  },

  {
    isbn: '589',
    titulo: 'Sombras do Passado',
    sinopse: 'Segredos antigos vêm à tona.',
    data_lancamento: '22/08/2015',
    paginas: '280',
    autor: [{ nome: 'Carlos Lima', email: 'carlos@email.com' }],
    categoria: [{ nome: 'Mistério' }],
    editora: { nome: 'Noite', email: 'editora@noite.com' }
  },

  {
    isbn: '590',
    titulo: 'Amor em Paris',
    sinopse: 'Um romance inesquecível na cidade luz.',
    data_lancamento: '14/02/2018',
    paginas: '210',
    autor: [{ nome: 'Juliana Rocha', email: 'ju@email.com' }],
    categoria: [{ nome: 'Romance' }],
    editora: { nome: 'Coração', email: 'amor@editora.com' }
  },

  {
    isbn: '591',
    titulo: 'Código Perdido',
    sinopse: 'Um hacker descobre um segredo global.',
    data_lancamento: '09/11/2020',
    paginas: '350',
    autor: [{ nome: 'Marcos Silva', email: 'marcos@email.com' }],
    categoria: [{ nome: 'Tecnologia' }],
    editora: { nome: 'Digital Books', email: 'tech@books.com' }
  },

  {
    isbn: '592',
    titulo: 'A Floresta Viva',
    sinopse: 'Mistérios escondidos na natureza.',
    data_lancamento: '03/03/2012',
    paginas: '190',
    autor: [{ nome: 'Fernanda Alves', email: 'fer@email.com' }],
    categoria: [{ nome: 'Aventura' }],
    editora: { nome: 'Verde', email: 'natureza@verde.com' }
  },

  {
    isbn: '593',
    titulo: 'Guerra dos Reinos',
    sinopse: 'Batalhas épicas por poder.',
    data_lancamento: '18/07/2016',
    paginas: '500',
    autor: [{ nome: 'Rafael Costa', email: 'rafa@email.com' }],
    categoria: [{ nome: 'Fantasia' }],
    editora: { nome: 'Dragão', email: 'fantasia@dragao.com' }
  },

  {
    isbn: '594',
    titulo: 'Mente Milionária',
    sinopse: 'Como desenvolver hábitos de sucesso.',
    data_lancamento: '01/01/2019',
    paginas: '230',
    autor: [{ nome: 'Paulo Mendes', email: 'paulo@email.com' }],
    categoria: [{ nome: 'Negócios' }],
    editora: { nome: 'Sucesso', email: 'contato@sucesso.com' }
  },

  {
    isbn: '595',
    titulo: 'Histórias do Brasil',
    sinopse: 'Relatos marcantes da história brasileira.',
    data_lancamento: '21/04/2005',
    paginas: '410',
    autor: [{ nome: 'Lucia Fernandes', email: 'lucia@email.com' }],
    categoria: [{ nome: 'História' }],
    editora: { nome: 'Brasil', email: 'historia@brasil.com' }
  },

  {
    isbn: '596',
    titulo: 'O Despertar',
    sinopse: 'Uma jornada espiritual transformadora.',
    data_lancamento: '10/10/2013',
    paginas: '275',
    autor: [{ nome: 'Ricardo Nunes', email: 'ricardo@email.com' }],
    categoria: [{ nome: 'Espiritualidade' }],
    editora: { nome: 'Luz', email: 'luz@editora.com' }
  },

  {
    isbn: '597',
    titulo: 'Segredos da Cozinha',
    sinopse: 'Receitas incríveis e dicas culinárias.',
    data_lancamento: '05/06/2021',
    paginas: '150',
    autor: [{ nome: 'Clara Gomes', email: 'clara@email.com' }],
    categoria: [{ nome: 'Culinária' }],
    editora: { nome: 'Sabor', email: 'cozinha@sabor.com' }
  }
];

}
