import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  @Input()
  photoCover:string = "https://sm.ign.com/ign_br/screenshot/default/tony_c455.jpg"
  @Input()
  cardTitle:string = "TITULO"
  @Input()
  cardDescription:string = "DESCRIÇÃO"
  private id:string | null = "0"

  constructor( private route:ActivatedRoute){}

  ngOnInit():void {
    this.route.paramMap.subscribe( value => this.id = value.get("id"))

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]

    console.log(result)

    this.photoCover = result.photo
    this.cardTitle = result.title
    this.cardDescription = result.description
  }

}
