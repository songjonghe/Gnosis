import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  @Input('index') index: number = 0;

  constructor(public dialog: MatDialog) { }

  // openSetting(){
  //   this.dialog.open(SettingComponent);
  // }
}
