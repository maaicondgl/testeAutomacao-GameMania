import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { LoginComponent } from './views/login/login.component';
import { FormsModule } from '@angular/forms';
import { SlideComponent } from './views/slide/slide.component';
import { NewsComponent } from './views/news/news.component';
import { NotFoundComponent } from './views/not-found/not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProdutosComponent,
    LoginComponent,
    SlideComponent,
    NewsComponent,
    NotFoundComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
