import { Component, ElementRef, Input, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel-tag',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-tag.component.html',
  styleUrl: './carousel-tag.component.scss'
})
export class CarouselTagComponent implements OnInit, OnDestroy {
  @Input() items: any[] = [];
  @Input() template?: any;
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;

  private autoScrollId: any;
  private autoScrollTimeoutId: any;

  ngOnInit() {
    this.startAutoScroll();
  }

  ngOnDestroy() {
    this.stopAutoScroll();
  }

  scrollLeft() {
    this.carousel.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
    this.stopAutoScroll();
    this.setAutoScrollInterval();
  }

  scrollRight() {
    this.carousel.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
    this.stopAutoScroll();
    this.setAutoScrollInterval();
  }

  startAutoScroll() {
    const scroll = () => {
      this.carousel.nativeElement.scrollBy({ left: 1, behavior: 'smooth' });
      this.autoScrollId = requestAnimationFrame(scroll);
    };
    this.autoScrollId = requestAnimationFrame(scroll);
  }

  stopAutoScroll() {
    if (this.autoScrollId) {
      cancelAnimationFrame(this.autoScrollId);
    }
    if (this.autoScrollTimeoutId) {
      clearTimeout(this.autoScrollTimeoutId);
    }
  }

  setAutoScrollInterval() {
    if (this.autoScrollTimeoutId) {
      clearTimeout(this.autoScrollTimeoutId);
    }
    this.autoScrollTimeoutId = setTimeout(() => {
      this.startAutoScroll();
    }, 1000);
  }
}
