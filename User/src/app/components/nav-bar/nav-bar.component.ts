import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  @Output() toggleSidebar: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void { }

  openSidebar() {
    this.toggleSidebar.emit();
  }
}
