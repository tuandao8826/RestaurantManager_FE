import { Component } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-menu-index',
  templateUrl: './menu-index.component.html',
  styleUrl: './menu-index.component.css'
})
export class MenuIndexComponent {

  ListMenu: any = [];
  menu: any;
  showMenuEdit: boolean = false;

  constructor(private service: SharedService) {

  }

  ngOnInit(): void {
    this.reloadListMenu();

    // // Đăng ký lắng nghe sự kiện từ SharedService
    // this.service.addMenuSuccess$.subscribe(() => {
    //   this.reloadListMenu();
    // });
  }

  reloadListMenu() {
    this.service.getMenus().subscribe(data => {
      this.ListMenu = data;
    });
  }

  menuDetails(menu: any) {
    console.log(this.showMenuEdit);
    this.menu = menu;
    this.showMenuEdit = true;
  }

  // Function để cập nhật giá trị của showMenuEdit
  onUpdateShowMenuEdit() {
    this.showMenuEdit = false;
    this.reloadListMenu();
  }
}
