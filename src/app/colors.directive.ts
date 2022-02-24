import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColors]'
})
export class ColorsDirective implements OnInit {
  
  constructor(private el:ElementRef,private renderer:Renderer2) { }

  ngOnInit(): void {
      this.renderer.setStyle(this.el.nativeElement,'color','blue');
      const text=this.renderer.createText('hello there');
      const newDiv=this.renderer.createElement('div');
      this.renderer.appendChild(newDiv,text)
      this.renderer.appendChild(this.el.nativeElement,newDiv)
  }
}
