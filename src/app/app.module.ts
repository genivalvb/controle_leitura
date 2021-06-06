import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateLivroComponent } from './create-livro/create-livro.component';
import { LivroDetailsComponent } from './livro-details/livro-details.component';
import { LivroListComponent } from './livro-list/livro-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateLivroComponent } from './update-livro/update-livro.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateLivroComponent,
    LivroDetailsComponent,
    LivroListComponent,
    UpdateLivroComponent,
    LivroListComponent
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
