import { Component, Renderer2 } from '@angular/core';
import {ChatService} from './providers/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public chatService:ChatService, private renderer:Renderer2) {
  	this.renderer.addClass(document.body, 'body-class'); 
  }
}
