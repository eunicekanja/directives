import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRenderer]'
})
export class RendererDirective implements OnInit {

  constructor(private elRef:ElementRef ,private renderer:Renderer2) {

   }

   ngOnInit(): void {
       this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue' )
   }
}
