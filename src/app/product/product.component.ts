import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  name : string

  @Input("desc")
  description : string

  @Input()
  price : number

  @Output()
  subscribed:EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  interested(event){
    //console.log ("use checked")
    this.subscribed.emit(event)
  }
}
