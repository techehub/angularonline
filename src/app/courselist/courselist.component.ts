import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit {

courses:any = [
  {title:"Java", desc:"Java Developer", price:6756},
  {title:"Python", desc:"Python  data analytics", price:5455},
  {title:"HTML", desc:"HTML for web developers", price:5455},

  ]
  constructor() { }

  ngOnInit() {
  }

}
