import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
 
  tab=[];
  constructor() { }
  
  
 personne=new FormGroup({
    firstName:new FormControl(''),
    lastname:new FormControl(''),
  });
  ngOnInit() {
  }


  register(){
  
  console.log(this.personne.value)
}
}