import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Word } from '../shared/model/word.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  word!: Word;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Word,
    public dialogRef: MatDialogRef<DetailComponent>
  ) { }

  ngOnInit(): void {
    this.word = this.data;
    console.log(this.word);

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
