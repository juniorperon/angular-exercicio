import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-media-ponderada',
  templateUrl: './media-ponderada.component.html',
  styleUrls: ['./media-ponderada.component.css']
})
export class MediaPonderadaComponent implements OnInit {
  notaAc1: any;
  notaAc2: any;
  notaAg: any;
  notaAf: any;
  mediaPonderada: any;

  constructor() { }

  ngOnInit(): void {

  }

  calcularMediaPonderada(){
    this.mediaPonderada = ((this.notaAc1 * 0.15) + (this.notaAc2 * 0.30) + (this.notaAg * 0.10) + (this.notaAf * 0.45));
  }
}
