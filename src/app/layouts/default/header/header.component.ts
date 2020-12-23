import { Component } from '@angular/core';
import { StoreService } from '../../../shared/store';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {

  constructor(
    private snackBar: MatSnackBar,
    public store: StoreService,
    private router: Router,
  ) { }
  login(): void {
    this.router.navigate(['/login'], { state: { type: 'login' } });
  }
  register(): void {
    this.router.navigate(['/login'], { state: { type: 'register' } });
  }
  admin():void{
    this.router.navigate(['/admin']);
  }
  logout(): void {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    this.store.setLoginStatus().then(() => {
      this.router.navigate(['/dashboard'])
      this.snackBar.open('登出成功', '關閉');
    });
  }
}
