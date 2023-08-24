import { Component, Input, OnInit } from '@angular/core';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent {


  sidebarOpen = true;

  sidebarToogle() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}


