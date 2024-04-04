import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-menu-create',
  templateUrl: './menu-create.component.html',
  styleUrl: './menu-create.component.css'
})
export class MenuCreateComponent implements OnInit {
  menuName: any;

  constructor(private service: SharedService) {}

  ngOnInit() {

  }

  addMenu() {
    var val = {
      Name:this.menuName
    };

    this.service.addMenu(val).subscribe(res => {
      alert(res.toString());
      this.service.notifyAddMenuSuccess();
    })
  }
}
