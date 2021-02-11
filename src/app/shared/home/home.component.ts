import { jitOnlyGuardedExpression } from '@angular/compiler/src/render3/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  person=[
    {id:1,firstName:"sam",lastName:"variath",age:20,email:"a@gmail.com"},
    {id:2,firstName:"peter",lastName:"jos",age:21,email:"b@gmail.com"},
    {id:3,firstName:"jacob",lastName:"rajan",age:22,email:"c@gmail.com"},
    {id:4,firstName:"george",lastName:"jithin",age:23,email:"d@gmail.com"},
    {id:5,firstName:"sunil",lastName:"yasin",age:24,email:"e@gmail.com"},
  ]

  // trackBy used with ngFor

  trackPerson(index, per) {
    console.log(index);
    console.log(per.age)
    return per.id
    
}


}
