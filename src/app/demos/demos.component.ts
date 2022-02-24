import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css']
})
export class DemosComponent implements OnInit {
  isOpen=false;
  isCaps=false;
  height=30;
  value=0;
  show=false;
  styles={
    'font-style':'italic'
  }
  constructor() { }

  ngOnInit(): void {
  }
  stylesObject(){
    return this.styles
  }
  changeColor(){
    this.isOpen=!this.isOpen;
    this.isCaps=!this.isCaps;
  }
}
