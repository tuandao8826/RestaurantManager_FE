import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrl: './menu-edit.component.css'
})
export class MenuEditComponent implements OnInit{
  @Input() menu: any;
  newMenu: any;

  constructor(private service: SharedService) {

  }

  ngOnInit() {
    this.newMenu = {
      MenuId: this.menu.MenuId,
      Name: this.menu.Name
    }
  }

  // sửa thực đơn
  editMenu() {
    this.service.editMenu(this.newMenu).subscribe(res => {
      alert(res.toString());
      this.service.notifyReload();
    })
  }

  // đóng chỉnh sửa
  close() {
    this.service.notifyClose();
  }
}