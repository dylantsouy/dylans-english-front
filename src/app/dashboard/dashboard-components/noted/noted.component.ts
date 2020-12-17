import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddnotedComponent } from '../../../addnoted/addnoted.component';
import { RemovenotedComponent } from '../../../removenoted/removenoted.component';
import { DetailComponent } from '../../../detail/detail.component';
import { WordService } from '../../../shared/services/word.services';

@Component({
  selector: 'app-noted',
  templateUrl: './noted.component.html',
  styleUrls: ['./noted.component.scss']
})
export class NotedComponent implements OnInit {
  @Input() storeData: any;

  constructor(
    private wordService: WordService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
  }
  seeDetail( word: string) {
    this.wordService.getWordsByWord(word).subscribe(res => {
      if (res.body === null || res.headers === null) {
        this.snackBar.open('獲取功能資料失敗', '關閉');
        return;
      }
      this.dialog.open(DetailComponent, {
        data: res.body
      });
    });
  }
  removeNoted(e: Event,word: string): void {
    e.stopPropagation();
    const data = { username: this.storeData.username, word: word }
    this.dialog.open(RemovenotedComponent, {
      data: data
    })
  };
  addNoted(): void {
    this.dialog.open(AddnotedComponent, {
      data: this.storeData.username
    });
  }
}
