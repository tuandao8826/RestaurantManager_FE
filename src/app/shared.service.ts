import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = 'http://localhost:5163/api';
  readonly PhotoUrl = 'http://localhost:5163/Photos';

  constructor(private http:HttpClient) { }

  private addMenuSuccessSubject = new Subject<void>();

  addMenuSuccess$ = this.addMenuSuccessSubject.asObservable();

  notifyAddMenuSuccess() {
    this.addMenuSuccessSubject.next();
  }

  // Lấy danh sách thực đơn
  getMenus(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Menu');
  }

  // thêm thực đơn
  addMenu(val: any) {
    return this.http.post(this.APIUrl + '/Menu', val);
  }

  // sửa thực đơn
  editMenu(val: any) {
    return this.http.put(this.APIUrl + '/Menu', val);
  }

  // xóa thực đơn
  deleteMenu(val: any) {
    return this.http.delete(this.APIUrl + '/Menu/' + val);
  }

  // // tải ảnh
  // uploadImage(val: any) {
  //   return this.http.post(this.APIUrl + '/Dish/SaveFile');
  // }
}
