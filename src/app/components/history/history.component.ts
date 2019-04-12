import { Component, OnInit } from '@angular/core';
import {HistoryService} from '../../providers/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styles: []
})
export class HistoryComponent implements OnInit {

  mensaje:string="";
  elemento: any;
  constructor( public chatService:HistoryService) {
    this.chatService.cargarMensaje().subscribe(()=>{
      setTimeout(()=>{
        this.elemento.scrollTop= this.elemento.scrollHeight;
      }, 20);

    });
   }

  ngOnInit() {
    this.elemento=document.getElementById('app-mensajes')
  }

  enviarMensaje(){
    if (this.mensaje.length===0) {
      return;

    }
    this.chatService.agregarMensaje(this.mensaje)
          .then(()=>this.mensaje="")
          .catch((err)=>console.error("Error al enviar", err));



  }

}
