import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MutanteService } from '../services/mutante.service';
@Component({
  selector: 'app-editar-mutante',
  templateUrl: './editar-mutante.component.html',
  styleUrls: ['./editar-mutante.component.css']
})
export class EditarMutanteComponent implements OnInit {
  form: any = {};
  actualizado = false;
  failActualizado = false;
  msjErr = '';
  msjOK = '';

  failInit = false;

  constructor(private productoService: MutanteService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;
    this.productoService.detalle(id).subscribe( data => {
      this.form.dna2 = data.dna2;
      this.form.p = data.condicion;
  },
  (err: any) => {
    this.failInit = true;
    this.router.navigate(['']);
  }
);

}
onUpdate(): void {
  const id = this.activatedRoute.snapshot.params.id;
  this.productoService.editar(this.form, id).subscribe( data => {
    this.actualizado = true;
    this.failActualizado = false;
    this.msjOK = data.mensaje;
  },
  (err: any) => {
    this.actualizado = false;
    this.failActualizado = true;
    this.msjErr = err.error.mensaje;
  }
  );
}

volver(): void {
  window.history.back();
}

}
  
