import { Component, OnInit } from '@angular/core';
import { LivroService } from '../livro.service';
import { Livro } from '../livro';
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-livro',
  templateUrl: './create-livro.component.html',
  styleUrls: ['./create-livro.component.css']
})
export class CreateLivroComponent implements OnInit {

  livro: Livro = new Livro();
  submitted = false;

  constructor(private livroService: LivroService, private router: Router) { }

  ngOnInit(): void {
  }

  newLivro(): void {
    this.submitted = false;
    this.livro = new Livro();
  }

  save() {
    this.livroService.createLivro(this.livro)
    .subscribe(data => console.log(data), error => console.log(error));

    this.livro = new Livro();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/livros']);
  }

}
