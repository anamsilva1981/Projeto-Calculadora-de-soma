import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  public resultado: number = 0;
  public numero1?: number;
  public numero2?: number;

  public somaValores(){
    this.resultado = (this.numero1 ?? 0) + (this.numero2 ?? 0);
  }
}
