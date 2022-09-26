import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.scss'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];

  // Injetar serviço
  constructor(private service: PensamentoService) {}

  // Ciclo de vida do componente;
  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }
}
