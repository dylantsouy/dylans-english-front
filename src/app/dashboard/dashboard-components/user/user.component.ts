import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StoreService } from '../../../shared/store';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    public store: StoreService,
  ) { }
  @Input() storeData: any;

  ngOnInit(): void { }
  login() {
    this.router.navigate(['/login']);
  }
  logout() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("username");
    this.store.setLoginStatus();
    this.snackBar.open('登出成功', '關閉');
  }
}
