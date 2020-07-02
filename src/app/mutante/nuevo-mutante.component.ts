import { Component, OnInit } from '@angular/core';
import { Mutante } from '../models/mutante';
import { MutanteService } from '../services/mutante.service';
@Component({
  selector: 'app-nuevo-mutante',
  templateUrl: './nuevo-mutante.component.html',
  styleUrls: ['./nuevo-mutante.component.css']
})
export class NuevoMutanteComponent implements OnInit {

  form: any = {};
  mutante: Mutante;
  creado = false;
  failMutante = false;
  mensajeFail = '';
  mensajeOK = '';
  constructor(private mutanteService: MutanteService) { }

  ngOnInit() {
  }
  onCreate(): void {
    this.mutanteService.crear(this.form).subscribe(data => {
      this.mensajeOK = data.mensaje;
      this.creado = true;
      this.failMutante = false;
    },
      (err: any) => {
        this.mensajeFail = err.error.mensaje;
        this.creado = false;
        this.failMutante = true;
      }
    );
  }

  volver(): void {
    window.history.back();
  }
}
