import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  index: number = 0;

  sidebarOpen = true;

  sidebarToogle() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  urlIndicesMap = [
    '/homepage',
    '/category',
    '/news',
    '/introduce',
    '/search-by-name-list',
  ];

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.navigateRouter();
  }

  navigateRouter() {
    this.router.events.subscribe((val: any) => {
      let tempIndex = 0;
      try {
        tempIndex = this.urlIndicesMap.indexOf(val.routerEvent.url);
      } catch (error) {
        tempIndex = this.urlIndicesMap.indexOf(val.url);
      }
      if (tempIndex >= 0) {
        this.index = tempIndex;
      }
    });
  }
}
