import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 listaNoticias =[] as Noticia[];
  constructor(private noticiaService: NoticiasService) { }

  ngOnInit(): void {
    this.carregarNoticias();
  }
 carregarNoticias(){
   this.noticiaService.getNoticias().subscribe((noticiasRecebidas: Noticia[]) =>{
     this.listaNoticias = noticiasRecebidas
   })
 }
}
