import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }
  @Input() store: any;

  ngOnInit(): void { }
  login() {
    this.router.navigate(['/login'], { state: { type: 'login' } });
  }
  register(): void {
    this.router.navigate(['/login'], { state: { type: 'register' } });
  }
  logout() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("username");
    this.store.setLoginStatus().then(() => {
      this.router.navigate(['/dashboard'])
      this.snackBar.open('登出成功', '關閉');
    });
  }
}
