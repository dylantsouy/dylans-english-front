import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StoreService } from '../../shared/store';
import { UserService } from '../../shared/services/user.services';

@Component({
  selector: 'app-removenoted',
  templateUrl: './removenoted.component.html',
  styleUrls: ['./removenoted.component.scss'],
})
export class RemovenotedComponent implements OnInit {
  notedData?: any;
  constructor(
    public store: StoreService,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private snackBar: MatSnackBar,
    private userService: UserService,
    public dialogRef: MatDialogRef<RemovenotedComponent>
  ) { }

  ngOnInit(): void {
    this.notedData = this.data
  }
  remove(): void {
    this.userService.removeNotedWord(this.notedData.username, this.notedData.word).subscribe(res => {
      if (res.body.statusCode === 400) {
        this.snackBar.open(res.body.message, '關閉');
        return;
      } else {
        this.store.getUser();
        this.snackBar.open(res.body.message, '關閉');
        this.dialogRef.close();
      }
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
