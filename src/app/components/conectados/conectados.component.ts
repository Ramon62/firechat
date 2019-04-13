import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../providers/chat.service';

@Component({
  selector: 'app-conectados',
  templateUrl: './conectados.component.html',
  styles: []
})
export class ConectadosComponent implements OnInit {

  mensaje:string="";
  elemento: any;
  constructor( public chatService:ChatService) {
  }

  ngOnInit() {
    this.elemento=document.getElementById('app-conectados')
  }
}
