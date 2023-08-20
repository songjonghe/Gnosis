import { Component,ElementRef, Renderer2, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    const carousel = this.elementRef.nativeElement.querySelector('.carousel');
    const seats = this.elementRef.nativeElement.querySelectorAll('.carousel-seat');

    const next = (el: any) => {
      if (el.nextElementSibling) {
        return el.nextElementSibling;
      } else {
        return seats[0];
      }
    };

    const progress = () => {
      const currentRef = this.elementRef.nativeElement.querySelector('.is-ref');
      if (currentRef) {
        currentRef.classList.remove('is-ref');
      }
      const newSeat = next(currentRef || seats[0]);

      newSeat.classList.add('is-ref');
      newSeat.style.order = 1;
      updateSeatsOrder(Array.from(seats).indexOf(newSeat));

      carousel.classList.remove('is-set');

      setTimeout(() => {
        carousel.classList.add('is-set');
      }, 50);
    };

    const updateSeatsOrder = (startIndex: number) => {
      let order = 1;
      for (let i = startIndex; i < seats.length; i++) {
        seats[i].style.order = order;
        order++;
      }
    };

    setInterval(() => {
      progress();
    }, 2000);
  }
}
