import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';
import { ADMIN_MENU  } from './admin-menu';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  constructor(private readonly sidebarService: NbSidebarService) { }

  toggleSidebar(): boolean {
    this.sidebarService.toggle();
    return false;
  }

  menu = ADMIN_MENU;

  ngOnInit(): void {
  }

}
