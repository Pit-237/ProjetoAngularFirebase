import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  projeto: any[] = [
    { descricao: "tomar banho", local: "casa", hora_inicio: "19:00", hora_termino: "19:30", status: "concluido" },
    { descricao: "não morrer de fome", local: "qualquer um", hora_inicio: "00:00", hora_termino: "23:59", status: "em progresso" },
    { descricao: "matar jogadores de LOL", local: "escola", hora_inicio: "13:10", hora_termino: "18:30", status: "em espera" },
    { descricao: "ir à academia", local: "academia", hora_inicio: "19:10", hora_termino: "21:30", status: "em espera" }
  ];

}
