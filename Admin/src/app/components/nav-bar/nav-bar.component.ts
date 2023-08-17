import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  @Output() toggleSidebar: EventEmitter<any> = new EventEmitter();
  ngOnInit(): void { }

  openSidebar() {
    this.toggleSidebar.emit();
  }
}
