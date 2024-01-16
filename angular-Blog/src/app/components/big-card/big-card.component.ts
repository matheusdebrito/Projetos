import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', './big-card.component.responsive.css']
})
export class BigCardComponent {
  @Input()
  photoCover:string = ""
  @Input()
  cardTitle:string = "TITULO"
  @Input()
  cardDescription:string = "DESCRIÇÃO"

  constructor(){}
}
