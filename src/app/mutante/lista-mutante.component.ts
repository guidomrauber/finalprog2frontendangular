import { Component, OnInit } from '@angular/core';
import { Mutante } from '../models/mutante';
import { MutanteService } from '../services/mutante.service';

@Component({
  selector: 'app-lista-mutante',
  templateUrl: './lista-mutante.component.html',
  styleUrls: ['./lista-mutante.component.css']
})
export class ListaMutanteComponent implements OnInit {

  mutantes: Mutante[] = [];
  constructor(private productoService: MutanteService) { }

  ngOnInit() {
    this.cargarProductos();
  }
  cargarProductos(): void {
    this.productoService.lista().subscribe(data => {
      this.mutantes = data;
    },
      (err: any) => {
        console.log(err);
      }
    );
  }
  onDelete(id: number): void {
    if (confirm('¿Estás seguro?')) {
      this.productoService.borrar(id).subscribe(data => {
        this.cargarProductos();
      });
    }
  }
}
