import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  @Output() toggleSidebar: EventEmitter<any> = new EventEmitter();


  canShowSearchAsOverlay = false;
  constructor() { }

  ngOnInit(): void {

    window.addEventListener('click', this.outsideClick.bind(this));
  }
  openSidebar() {
    this.toggleSidebar.emit();
  }




  isDropdownOpen = false;

  myFunction() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  outsideClick(event: Event) {
    if (!(event.target as HTMLElement).matches('.dropbtn')) {
      this.isDropdownOpen = false;
    }
  }

  ngOnDestroy() {
    window.removeEventListener('click', this.outsideClick.bind(this));
  }

}
