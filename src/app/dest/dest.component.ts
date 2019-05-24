import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dest',
  templateUrl: './dest.component.html',
  styleUrls: ['./dest.component.css']
})
export class DestComponent implements OnInit {

  imgsrc= 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png';
  col=5;
  isactive=true;
  val='';
  a='';
  b='';
  constructor(){}
  ngOnInit(){}
  login(){
    console.log("login")
  }

  addition(){
    console.log(this.a+this.b)
  }
   nom;
   prenon;
   email;
   tab=[];
   
   
  
  ajouter(){
    let personne={
      first:this.nom,
      prenon:this.prenon,
      email:this.email
    }
    this.tab.push(personne);
    console.log(this.tab)
  }}
  
  




