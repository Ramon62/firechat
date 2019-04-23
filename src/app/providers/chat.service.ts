import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import {Mensaje} from '../interface/mensaje.interface';
import {Usuario} from '../interface/usuario.interface';
import { map } from 'rxjs/operators';

import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  private itemsCollectionu: AngularFirestoreCollection<Usuario>;
  public chats:Mensaje[]=[];
  public usuario:any={};
  public usuariosConectados:any={};
  public userId: string;
  public color: boolean;
  public tamChat: boolean;
  public tamLetra: boolean;

  constructor(private afs: AngularFirestore,
              public afAuth: AngularFireAuth) {

    this.color = false;
    this.tamChat = false;
    this.tamLetra = false;

    this.afAuth.authState.subscribe(user=>{
      //console.log("Estado de usuario", user);

      if (!user) {
          return;
      }
      this.usuario.nombre= user.displayName;
      this.usuario.uid=user.uid;
    })

  }

  login(proveedor:string) {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.usuario={};
    this.afAuth.auth.signOut();
  }

  cargarMensaje(){
     this.itemsCollection = this.afs.collection<Mensaje>('chats', ref=> ref.orderBy('fecha', 'desc').limit(5));
     return this.itemsCollection.valueChanges().pipe(map(mensajes=>{
       //console.log(mensajes);
       this.chats=[];
       for (let mensaje of mensajes) {
           this.chats.unshift(mensaje);
       }
       return this.chats;
     }))
  }

  cargarMensaje2(){
     this.itemsCollection = this.afs.collection<Mensaje>('chats', ref=> ref.orderBy('fecha', 'desc');
     return this.itemsCollection.valueChanges().pipe(map(mensajes=>{
       //console.log(mensajes);
       this.chats=[];
       for (let mensaje of mensajes) {
           this.chats.unshift(mensaje);
       }
       return this.chats;
     }))
  }

  cambiarColor(){
    if(this.color == false){
      this.color = true;
    }else{
      this.color = false;  
    }
  }

  cambiarChat(){
    if(this.tamChat == false){
      this.tamChat = true;
    }else{
      this.tamChat = false;
    }
  }

  cambiarLetra(){
    if(this.tamLetra == false){
      this.tamLetra = true;
    }else{
      this.tamLetra = false;
    }
  }

  agregarMensaje( texto:string){
    //TODO falta uid de usuario
    let mensaje: Mensaje={
      nombre:this.usuario.nombre,
      mensaje: texto,
      fecha: new Date().getTime(),
      uid: this.usuario.uid
    }
    return this.itemsCollection.add(mensaje);
  }
}
