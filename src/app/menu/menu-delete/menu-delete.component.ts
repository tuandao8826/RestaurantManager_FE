import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-menu-delete',
  templateUrl: './menu-delete.component.html',
  styleUrl: './menu-delete.component.css'
})
export class MenuDeleteComponent implements OnInit {
  @Input() menu: any;

  constructor(private service: SharedService) {}

  ngOnInit(): void {
    
  }

  deleteMenu() {
    this.service.deleteMenu(this.menu.MenuId).subscribe(res => {
      alert(res.toString());
      this.service.notifyReload();
    })
  }

  // đóng chỉnh sửa
  close() {
    this.service.notifyClose();
  }
}
