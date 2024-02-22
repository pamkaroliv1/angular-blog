import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover:string ="data:image/png;base64,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"
  @Input()
  cardTitle:string= "Nova versão do Angular"
  @Input()
  cardDescription:string =""
  @Input()
  Id:string="0"

  constructor() { }

  ngOnInit(): void {
  }

}
