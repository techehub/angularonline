import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:any = [{name:"aaa", desc:"fhjshdgfjdsf dsfgshjdgfdsf", price:5345},
  {name:"bbb", desc:"fhjshdgfjdsf dsfgshjdgfdsf", price:4555},
  {name:"ccc", desc:"fhjshdgfjdsf dsfgshjdgfdsf", price:212},
  {name:"ddd", desc:"fhjshdgfjdsf dsfgshjdgfdsf", price:2323}]
   
  subscribed: string []=[]

  

  constructor() { }

  ngOnInit() {
  }

  updateList(event){
   //console.log ("Parent got event !!!!")
   // console.log (event.target.value)
   let i:number = this.subscribed.indexOf(event.target.value)

   if (i<0){
      this.subscribed.push(event.target.value)
   }
  else{
      this.subscribed.splice(i,1)
    }

   console.log (this.subscribed)
  }
}
