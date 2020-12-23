import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Word } from '../../shared/model/word.model';
import { StoreService } from '../../shared/store';
import { UserService } from '../../shared/services/user.services';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  word!: Word;

  constructor(
    public store: StoreService,
    private userService: UserService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) private data: Word,
    public dialogRef: MatDialogRef<DetailComponent>
  ) { }

  ngOnInit(): void {
    this.word = this.data;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
