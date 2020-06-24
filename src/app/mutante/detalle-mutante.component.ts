import { Component, OnInit } from '@angular/core';
import { Mutante } from '../models/mutante';
import { MutanteService } from '../services/mutante.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-mutante',
  templateUrl: './detalle-mutante.component.html',
  styleUrls: ['./detalle-mutante.component.css']
})
export class DetalleMutanteComponent implements OnInit {

  mutante: Mutante = null;

  constructor(private mutanteService: MutanteService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.mutanteService.detalle(id).subscribe(data => {
      this.mutante = data;
    },
      err => {
        this.router.navigate(['']);
      }
    );
  }

  volver(): void {
    window.history.back();
  }

}
