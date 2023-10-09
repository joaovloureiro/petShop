import { Component, OnInit } from '@angular/core';
import { HeaderStateManagerService } from 'src/app/services/header-state-manager.service';

@Component({
  selector: 'app-layout-portal',
  templateUrl: './layout-portal.component.html',
  styleUrls: ['./layout-portal.component.scss'],
})
export class LayoutPortalComponent implements OnInit {
  whiteHeader: boolean = false;

  constructor(private headerManager: HeaderStateManagerService) {}

  ngOnInit(): void {
    this.getHeaderState();
  }

  getHeaderState() {
    this.headerManager.defaultHeader.subscribe((state: any) => {
      this.whiteHeader = !state;

      console.log(this.whiteHeader);
    });
  }
}
