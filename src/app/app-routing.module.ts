import { LivroDetailsComponent } from './livro-details/livro-details.component';
import { CreateLivroComponent } from './create-livro/create-livro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroListComponent } from './livro-list/livro-list.component';
import { UpdateLivroComponent } from './update-livro/update-livro.component';

const routes: Routes = [
  { path: '', redirectTo: 'livros', pathMatch: 'full'},
  { path: 'livros', component: LivroListComponent },
  { path: 'add', component: CreateLivroComponent },
  { path: 'update/id', component: UpdateLivroComponent },
  { path: 'details/id', component: LivroDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
