import { Component } from '@angular/core';
import { Boletim } from './boletim';

@Component({
  selector: 'app-calcula-media',
  templateUrl: './calcula-media.component.html',
  styleUrl: './calcula-media.component.css'
})
export class CalculaMediaComponent {
  mediaParcial: number | undefined
  boletim: Boletim



  constructor() {
    this.mediaParcial = undefined
    this.boletim = new Boletim()
  }

  sendNotas(b1: number, b2: number, b3: number, b4: number){
    this.boletim.setNota(1, b1)
    this.boletim.setNota(2, b2)
    this.boletim.setNota(3, b3)
    this.boletim.setNota(4, b4)

    this.boletim.calcMP()

    
  }


  calcularMediaParcial(b1: number, b2: number, b3: number,b4: number) {
      this.mediaParcial =
      (b1 * 2 + b2 * 2 + b3 * 3 + b4 * 3) / 10
  }


}
