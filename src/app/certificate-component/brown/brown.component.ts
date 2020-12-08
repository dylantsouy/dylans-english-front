import { Component, OnInit } from '@angular/core';
import { Word } from '../../shared//model/word.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WordService } from '../../shared/services/word.services';

@Component({
  selector: 'app-brown',
  templateUrl: './brown.component.html',
  styleUrls: ['../certificate.scss']
})
export class BrownComponent implements OnInit {

  words?: Word[];
  loading = false;
  level = 'brown';
  lessons?: Array<Number>;
  selectedValue = 1;
  searchWord?: string;

  constructor(
    private wordService: WordService,
    private snackBar: MatSnackBar,
  ) { }
  ngOnInit(): void {
    this.getLessons();
    this.getWordsByLesson();
  }
  seemore(e: any, _id: string): void {
    e.stopPropagation();
  }
  resetSearch() {
    this.searchWord = '';
    this.getWordsByLesson();
  }
  // get all lesson
  getLessons(): void {
    this.loading = true;
    this.wordService.getLessonsByLevel(this.level).subscribe(res => {
      if (res.body === null || res.headers === null) {
        this.snackBar.open('獲取功能資料失敗', '關閉');
        return;
      }
      this.lessons = res.body;
      this.loading = false;
    });
  }
  // get all lesson's word
  getWordsByLesson(): void {
    this.loading = true;
    this.wordService.getWordsByLesson(this.level, this.selectedValue).subscribe(res => {
      if (res.body === null || res.headers === null) {
        this.snackBar.open('獲取功能資料失敗', '關閉');
        return;
      }
      if (this.searchWord) {
        this.words = res.body.filter(e => e.word?.includes(this.searchWord || ''));
      } else {
        this.words = res.body;
      }
      this.loading = false;
    });
  }
}
