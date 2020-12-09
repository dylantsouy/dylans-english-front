import { Component, OnInit } from '@angular/core';
import { Word, RouterData } from '../shared/model/word.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WordService } from '../shared/services/word.services';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.scss']
})
export class CertificateComponent implements OnInit {

  words?: Word[];
  loading = false;
  level = 'orange';
  lessons?: Array<Number>;
  selectedValue = 1;
  searchWord?: string;
  routerData?: RouterData;

  constructor(
    public dialog: MatDialog,
    private wordService: WordService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
  ) { }
  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.routerData = data
      this.level = data.name
    });
    this.getLessons();
    this.getWordsByLesson();
  }
  seeDetail(e: Event, word: Word) {
    e.stopPropagation();
    this.dialog.open(DetailComponent, {
      data: word
    });
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
