import { Component } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-menu-index',
  templateUrl: './menu-index.component.html',
  styleUrl: './menu-index.component.css'
})
export class MenuIndexComponent {

  ListMenu: any = [];

  constructor(private service: SharedService) {

  }

  ngOnInit(): void {
    this.reloadListMenu();

    // Đăng ký lắng nghe sự kiện từ SharedService
    this.service.addMenuSuccess$.subscribe(() => {
      this.reloadListMenu();
    });
  }

  reloadListMenu() {
    this.service.getMenus().subscribe(data => {
      this.ListMenu = data;
    });
  }
}
