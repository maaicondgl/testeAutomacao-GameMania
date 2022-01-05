import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticia } from '../models/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  url = "http://localhost:3000/noticias";

  constructor(private httpCliente: HttpClient) { }
  httpOptions={
    Headers: new HttpHeaders({'Content-type':'application/json'})
  }
  getNoticias():Observable<Noticia[]>{
    return this.httpCliente.get<Noticia[]>(this.url)
  }
}
