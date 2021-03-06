import { Component, OnInit } from '@angular/core';
import { Word, RouterData } from '../../shared/model/word.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WordService } from '../../shared/services/word.services';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DetailComponent } from '../../components/detail/detail.component';
import { StoreService } from '../../shared/store';
import { UserService } from '../../shared/services/user.services';

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
    private userService: UserService,
    public store: StoreService,
    public dialog: MatDialog,
    private wordService: WordService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.store.setLoginStatus()
    this.route.data.subscribe(data => {
      this.routerData = data;
      this.level = data.name;
    });
    this.getLessons();
    this.getWordsByLesson();
  }
  removeNoted(e: Event,word: any): void {
    e.stopPropagation();
    if (!this.store.username) {
      this.snackBar.open('請先登入', '關閉');
      return;
    }
    this.userService.removeNotedWord(this.store.username, word).subscribe(res => {
      if (res.body.statusCode === 400) {
        this.snackBar.open(res.body.message, '關閉');
        return;
      } else {
        this.store.getNoted().then(() => {
          this.snackBar.open(res.body.message, '關閉');
        });
      }
    });
  }
  addNoted(e: Event,word: any): void {
    e.stopPropagation();
    if (!this.store.username) {
      this.snackBar.open('請先登入', '關閉');
      return;
    }
    this.userService.addNotedWord(this.store.username, word).subscribe(res => {
      if (res.body.statusCode === 400) {
        this.snackBar.open(res.body.message, '關閉');
        return;
      } else {
        this.store.getNoted().then(() => {
          this.snackBar.open(res.body.message, '關閉');
        });
      }
    });
  }
  addKnow(e: Event, word: string): void {
    e.stopPropagation();
    this.userService.addKnowWord(this.store.username || '', word).subscribe(res => {
      if (res.body.statusCode === 400) {
        this.snackBar.open(res.body.message, '關閉');
        return;
      } else {
        this.store.getKnow().then(() => {
          this.snackBar.open(res.body.message, '關閉');
        })
      }
    });
  }
  removeKnow(e: Event, word: string): void {
    e.stopPropagation();
    this.userService.removeKnowWord(this.store.username || '', word).subscribe(res => {
      if (res.body.statusCode === 400) {
        this.snackBar.open(res.body.message, '關閉');
        return;
      } else {
        this.store.getKnow().then(() => {
          this.snackBar.open(res.body.message, '關閉');
        })
      }
    });
  }
  seeDetail(e: Event, word: Word): void {
    e.stopPropagation();
    this.dialog.open(DetailComponent, {
      data: word
    });
  }
  resetSearch(): void {
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
