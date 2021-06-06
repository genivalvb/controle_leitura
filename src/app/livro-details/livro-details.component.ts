import { Livro } from '../livro';
import { Component, OnInit, Input } from '@angular/core';
import { LivroService } from '../livro.service';
import { LivroListComponent } from '../livro-list/livro-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-livro-details',
  templateUrl: './livro-details.component.html',
  styleUrls: ['./livro-details.component.css']
})
export class LivroDetailsComponent implements OnInit {

  id: number;
  livro: Livro;

  constructor(private route: ActivatedRoute, private router: Router, private livroService: LivroService) { }

  ngOnInit() {
    this.livro = new Livro();

    this.id = this.route.snapshot.params['id'];

    this.livroService.getLivro(this.id)
    .subscribe(data => {
      console.log(data)
      this.livro = data;
    }, error => console.log(error));
  }

  list() {
    this.router.navigate(['livros']);
  }

}
