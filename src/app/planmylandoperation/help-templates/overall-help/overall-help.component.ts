import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'pmlo-overall-help',
  templateUrl: './overall-help.component.html',
  styleUrls: ['./overall-help.component.scss']
})
export class OverallHelpComponent implements OnInit, AfterViewInit {
  @ViewChildren('slide') slides: QueryList<ElementRef>;
  activeSlideIndex:number = 0;
  isLoaded:boolean = false;
  slidesArray:ElementRef[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit():void {
    setTimeout(() => {
      this.slidesArray = this.slides.toArray();
    }, 100);
  }

  nextSlide():void {
    if (this.activeSlideIndex !== this.slides.length - 1)
    {
      this.navigatToNext();
      this.activeSlideIndex += 1;
    }
  }

  previousSlide():void {
    if (this.activeSlideIndex !== 0)
    {
      this.navigateToPrevious();
      this.activeSlideIndex -= 1;
    }
  }

  goToSlide(index:number):void {
    if (this.activeSlideIndex < index)
    {
      for (let i = 0; i < index - this.activeSlideIndex; i++ )
      {
        this.navigatToNext();
      }
    } else if (this.activeSlideIndex > index)
    {
      for (let i = 0; i < this.activeSlideIndex - index; i++ )
      {
        this.navigateToPrevious();
      }
    }
    this.activeSlideIndex = index;
  }

  private navigateToPrevious():void {
    let activeSlide = document.querySelector('.slide.translate-x-0');
    activeSlide.classList.remove('translate-x-0');
    activeSlide.classList.add('translate-x-full');
    
    let previousSlide = activeSlide.previousElementSibling;
    previousSlide.classList.remove('-translate-x-full');
    previousSlide.classList.add('translate-x-0');
  }

  private navigatToNext():void {
    let activeSlide = document.querySelector('.slide.translate-x-0');
    activeSlide.classList.remove('translate-x-0');
    activeSlide.classList.add('-translate-x-full');
    
    let nextSlide = activeSlide.nextElementSibling;
    nextSlide.classList.remove('translate-x-full');
    nextSlide.classList.add('translate-x-0');
  }
}
