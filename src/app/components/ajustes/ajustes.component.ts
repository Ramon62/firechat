import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../providers/chat.service';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styles: []
})
export class AjustesComponent implements OnInit {

  constructor( public chatService:ChatService) {
          
  }

  cambiarColor(){
    this.chatService.cambiarColor();
  }

  cambiarChat(){
    this.chatService.cambiarChat();
  }

  cambiarLetra(){
    this.chatService.cambiarLetra();
  }

  ngOnInit() {
    
  }
}
