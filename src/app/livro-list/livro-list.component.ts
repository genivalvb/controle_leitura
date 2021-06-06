import { LivroDetailsComponent } from "src/app/livro-details/livro-details.component";
import { Observable } from 'rxjs';
import { LivroService } from '../livro.service';
import { Livro } from "../livro";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-livro-list',
  templateUrl: './livro-list.component.html',
  styleUrls: ['./livro-list.component.css']
})
export class LivroListComponent implements OnInit {
  livros: Observable<Livro[]>;

  constructor(private livroService: LivroService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.livros = this.livroService.getLivrosList();
  }

  deleteLivro(id: number){
    this.livroService.deleteLivro(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
      }

  livroDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateLivro(id: number){
    this.router.navigate(['update', id]);
  }

}
