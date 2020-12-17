import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StoreService } from '../shared/store';
import { UserService } from '../shared/services/user.services';

@Component({
  selector: 'app-addnoted',
  templateUrl: './addnoted.component.html',
  styleUrls: ['./addnoted.component.scss'],
})
export class AddnotedComponent implements OnInit {
  username?: string;
  notedWord?: string;
  constructor(
		public store: StoreService,
    @Inject(MAT_DIALOG_DATA) private data: string,
    private snackBar: MatSnackBar,
    private userService: UserService,
    public dialogRef: MatDialogRef<AddnotedComponent>
  ) { }

  ngOnInit(): void {
    this.username = this.data;

  }
  add(): void {
    if(!this.notedWord){
      this.snackBar.open('請輸入單字', '關閉');
      return;
    }
    if(!this.username){
      this.snackBar.open('請先登入', '關閉');
      return;
    }
    this.userService.addNotedWord(this.username, this.notedWord).subscribe(res => {
      if (res.body.statusCode === 400) {
        this.snackBar.open(res.body.message, '關閉');
        return;
      } else {
        this.snackBar.open(res.body.message, '關閉');
        this.store.getUser();
        this.dialogRef.close();
      }
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
