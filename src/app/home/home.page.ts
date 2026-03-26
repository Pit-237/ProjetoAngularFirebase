import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';
import { ILivro } from './acervo.interface';
import { IProduto } from './produto.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  produtos: IProduto[] = [
  {
    nome: "Camiseta",
    marca: "Nike",
    utilidade: [{ nome: "Vestir" }]
  },
  {
    nome: "Tênis",
    marca: "Adidas",
    utilidade: [{ nome: "Correr" }]
  },
  {
    nome: "Relógio",
    marca: "Casio",
    utilidade: [{ nome: "Ver horas" }]
  },
  {
    nome: "Mochila",
    marca: "Puma",
    utilidade: [{ nome: "Carregar itens" }]
  },
  {
    nome: "Óculos de sol",
    marca: "Ray-Ban",
    utilidade: [{ nome: "Proteger os olhos" }]
  },
  {
    nome: "Boné",
    marca: "New Era",
    utilidade: [{ nome: "Proteger do sol" }]
  }
];

  livros: ILivro[] = [
  {
    isbn: "123",
    titulo: "All tomorrows",
    categoria: [{ nome: "Ficção" }]
  },
  {
    isbn: "124",
    titulo: "Dom Casmurro",
    categoria: [{ nome: "Romance" }]
  },
  {
    isbn: "125",
    titulo: "O Hobbit",
    categoria: [{ nome: "Fantasia" }]
  },
  {
    isbn: "126",
    titulo: "1984",
    categoria: [{ nome: "Distopia" }]
  },
  {
    isbn: "127",
    titulo: "A Revolução dos Bichos",
    categoria: [{ nome: "Satírico" }]
  },
  {
    isbn: "128",
    titulo: "Harry Potter e a Pedra Filosofal",
    categoria: [{ nome: "Fantasia" }]
  },
  {
    isbn: "129",
    titulo: "O Senhor dos Anéis",
    categoria: [{ nome: "Fantasia" }]
  },
  {
    isbn: "130",
    titulo: "Percy Jackson e o Ladrão de Raios",
    categoria: [{ nome: "Aventura" }]
  },
  {
    isbn: "131",
    titulo: "O Código Da Vinci",
    categoria: [{ nome: "Suspense" }]
  },
  {
    isbn: "132",
    titulo: "Jogos Vorazes",
    categoria: [{ nome: "Distopia" }]
  },
  {
    isbn: "133",
    titulo: "A Menina que Roubava Livros",
    categoria: [{ nome: "Drama" }]
  },
  {
    isbn: "134",
    titulo: "It: A Coisa",
    categoria: [{ nome: "Terror" }]
  },
  {
    isbn: "135",
    titulo: "Drácula",
    categoria: [{ nome: "Terror" }]
  },
  {
    isbn: "136",
    titulo: "Frankenstein",
    categoria: [{ nome: "Ficção Científica" }]
  },
  {
    isbn: "137",
    titulo: "O Pequeno Príncipe",
    categoria: [{ nome: "Infantil" }]
  },
  {
    isbn: "138",
    titulo: "As Crônicas de Nárnia",
    categoria: [{ nome: "Fantasia" }]
  },
  {
    isbn: "139",
    titulo: "Cem Anos de Solidão",
    categoria: [{ nome: "Realismo Mágico" }]
  },
  {
    isbn: "140",
    titulo: "O Alquimista",
    categoria: [{ nome: "Ficção" }]
  },
  {
    isbn: "141",
    titulo: "A Metamorfose",
    categoria: [{ nome: "Clássico" }]
  },
  {
    isbn: "142",
    titulo: "O Nome do Vento",
    categoria: [{ nome: "Fantasia" }]
  }
];
}
