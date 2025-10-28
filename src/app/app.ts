import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecalho } from "./cabecalho/cabecalho";
import { SobreMim } from './sobre-mim/sobre-mim';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Cabecalho, SobreMim],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portifólio-2.0');
}
