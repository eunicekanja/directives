import { 
  Directive, 
  OnInit,
  Renderer2,
  ElementRef,
  HostListener, 
  HostBinding,
  Input} from '@angular/core';

@Directive({
  selector: '[appRenderer]'
})
export class RendererDirective implements OnInit {
  @Input() defaultColor='transparent';
  @Input() highlightColor='blue';

  @HostBinding('style.backgroundColor') backgroundColor:string=this.defaultColor;
  constructor(private elRef:ElementRef ,private renderer:Renderer2) {

   }

   ngOnInit(): void {
      //this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue' )
   }
   @HostListener('mouseenter') mouseOver(eventData:Event){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue' )
   this.backgroundColor=this.highlightColor;
  }
   @HostListener('mouseleave') mouseLeave(eventData:Event){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent' )
   this.backgroundColor=this.defaultColor;
  }
}
