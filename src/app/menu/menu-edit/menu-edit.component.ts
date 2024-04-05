import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrl: './menu-edit.component.css'
})
export class MenuEditComponent implements OnInit{
  @Input() menu: any;
  @Output() updateShowMenuEdit: EventEmitter<void> = new EventEmitter<void>();
  newMenu: any;

  constructor(private service: SharedService) {

  }

  ngOnInit() {
    this.newMenu = this.menu;
  }

  // sửa thực đơn
  editMenu() {
    this.service.editMenu(this.newMenu).subscribe(res => {
      alert(res.toString());
    })
  }

  closeMenuEdit() {
    this.updateShowMenuEdit.emit();
  }
}