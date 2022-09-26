import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.scss'],
})
export class CriarPensamentoComponent implements OnInit {
  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: '',
  };

  constructor(private service: PensamentoService, private route: Router) {}

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.route.navigate(['/listarPensamento']);
    });
  }

  cancelar() {
    this.route.navigate(['/listarPensamento']);
  }

  ngOnInit(): void {}
}
