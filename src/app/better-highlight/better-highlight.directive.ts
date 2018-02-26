import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() color1 : string = "";
  @Input() color2 : string = "blue";
 
  @HostBinding('style.backgroundColor') bgColor : string;

  constructor(private eleRef : ElementRef, private rnderer : Renderer2) { 
  }

  ngOnInit(){ 
  	this.bgColor = this.color1;
  	
  }

  @HostListener('mouseenter') mouseIn(event : Event){
  	//this.rnderer.setStyle(this.eleRef.nativeElement, "backgroundColor", "blue");

  	this.bgColor = this.color2;
  }

   @HostListener('mouseleave') mouseOut(event : Event){
  	//this.rnderer.setStyle(this.eleRef.nativeElement, "backgroundColor", "");

  	this.bgColor = this.color1;
  }

}
