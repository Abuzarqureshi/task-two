import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  contactForm : any;
  options : any = "choose option";

  constructor(private router : Router){}
  ngOnInit(): void {
  }
  phone(){
    this.options = "phone";
  }
  email(){
    this.options = "email"
  }

}
