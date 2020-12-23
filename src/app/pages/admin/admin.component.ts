import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { StoreService } from '../../shared/store';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  loading = false;

  constructor(
    private snackBar: MatSnackBar,
    public store: StoreService,
    private router: Router,
  ) { }
  ngOnInit(): void {
    this.loading = true;
    this.store.getUser().then(() => {
      if (this.store && !this.store.user || (this.store.user && this.store.user.level !== 'admin')) {
        this.router.navigate(['/dashboard'])
        this.snackBar.open('無管理員權限', '關閉');
      }
      this.loading = false;
    })
  }

}
