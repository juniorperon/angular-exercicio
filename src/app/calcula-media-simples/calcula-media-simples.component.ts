import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcula-media-simples',
  templateUrl: './calcula-media-simples.component.html',
  styleUrls: ['./calcula-media-simples.component.css']
})
export class CalculaMediaSimplesComponent implements OnInit {
  nota1: any;
  nota2: any;
  media: any;
  constructor() { }

  ngOnInit(): void {
  }

  calcularMedia(){
    this.media = (this.nota1 + this.nota2)/2;
  }

}
