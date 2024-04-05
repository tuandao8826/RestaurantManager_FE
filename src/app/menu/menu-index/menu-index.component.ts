import { Component, Renderer2, ElementRef } from '@angular/core';
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
  
  constructor(private service: SharedService, private renderer: Renderer2) {

  }

  ngOnInit(): void {
    this.reloadListMenu();

    // Đăng ký lắng nghe sự kiện từ SharedService
    this.service.reload$.subscribe(() => {
      this.reloadListMenu();
    });

    // lắng nghe sự kiện đóng cửa sổ
    this.service.close$.subscribe(() => {
      this.showMenuEdit = false;
    });
  }

  ngAfterViewInit() {
    // const element = this.renderer.selectRootElement('.table');
    // console.log(element);
  }

  reloadListMenu() {
    this.service.getMenus().subscribe(data => {
      this.ListMenu = data;
    });
  }

  menuDetails(menu: any) {
    this.menu = menu;
    this.showMenuEdit = true;
  }
}
