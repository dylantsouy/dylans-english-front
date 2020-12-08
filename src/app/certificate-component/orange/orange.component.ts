import { Component, OnInit } from '@angular/core';
import { Word } from '../../shared//model/word.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WordService } from '../../shared/services/word.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orange',
  templateUrl: './orange.component.html',
  styleUrls: ['./orange.component.scss']
})
export class OrangeComponent implements OnInit {

  words?: Word[];
  loading = false;
  level = "orange"
  lessons?: Array<Number>
  selectedValue = 1;

  constructor(
    private wordService: WordService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.getLessons();
    this.getWordsByLesson();
  }
  seemore(e: any, _id: string): void {
    e.stopPropagation()
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
      this.words = res.body;
      this.loading = false;
    });
  }
}
