import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../providers/chat.service';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styles: []
})
export class AjustesComponent implements OnInit {

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
