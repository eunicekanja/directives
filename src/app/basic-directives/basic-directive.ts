import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[appDirective]'
})

export class BasicDirective implements OnInit{
    constructor(private elementRef:ElementRef){
        elementRef.nativeElement
    }

    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor='green'
    }
}


