import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { HistoryComponent } from './components/history/history.component';
import { AjustesComponent } from './components/ajustes/ajustes.component';
import { ConectadosComponent } from './components/conectados/conectados.component';
import { LoginComponent } from './components/login/login.component';

import {FormsModule} from '@angular/forms';

//servicios
import {ChatService} from './providers/chat.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent,
    HistoryComponent,
    AjustesComponent,
    ConectadosComponent
  ],
  imports: [
    BrowserModule,
     AngularFireModule.initializeApp(environment.firebase),
     AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
