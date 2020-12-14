import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../shared/model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>
  ) { }

  ngOnInit(): void { }
  close(): void {
    this.dialogRef.close();
  }
  login(): void {

  }
}
