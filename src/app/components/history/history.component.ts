import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../providers/chat.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styles: []
})
export class HistoryComponent implements OnInit {

  mensaje:string="";
  elemento: any;
  constructor( public chatService:ChatService) {
    this.chatService.cargarMensaje().subscribe(()=>{
      setTimeout(()=>{
        this.elemento.scrollTop= this.elemento.scrollHeight;
      }, 20);

    });
   }

  ngOnInit() {
    this.elemento=document.getElementById('app-mensajes')
  }
}
