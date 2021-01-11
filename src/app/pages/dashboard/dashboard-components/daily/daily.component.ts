import { Component, OnInit, Input } from '@angular/core';
import { DailyWord, DailyArticle,DailySentence } from '../../../../shared//model/daily.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DailyWordService } from '../../../../shared/services/dailyword.services';
import { DailyArticleService } from '../../../../shared/services/dailyarticle.services';
import { DailySentenceService } from '../../../../shared/services/dailySentence.services';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss']
})
export class DailyComponent implements OnInit {
  @Input() store: any;
  dailyWords?: DailyWord[];
  dailyArticle?: DailyArticle[];
  dailySentence?: DailySentence[];
  loading = false;

  constructor(
    private dailyWordService: DailyWordService,
    private dailyArticleService: DailyArticleService,
    private dailySentenceService: DailySentenceService,
    private snackBar: MatSnackBar
  ) { }
  ngOnInit(): void {
    this.getDailyWords();
    this.getDailyArticle();
    this.getDailySentence();
  }
  // get api
  getDailyWords(): void {
    this.loading = true;
    this.dailyWordService.get().subscribe(res => {
      if (res.body === null || res.headers === null) {
        this.snackBar.open('獲取功能資料失敗', '關閉');
        return;
      }
      this.dailyWords = res.body;
      this.loading = false;
    });
  }
  getDailyArticle(): void {
    this.loading = true;
    this.dailyArticleService.get().subscribe(res => {
      if (res.body === null || res.headers === null) {
        this.snackBar.open('獲取功能資料失敗', '關閉');
        return;
      }
      this.dailyArticle = res.body;
      this.loading = false;
    });
  }
  getDailySentence(): void {
    this.loading = true;
    this.dailySentenceService.get().subscribe(res => {
      if (res.body === null || res.headers === null) {
        this.snackBar.open('獲取功能資料失敗', '關閉');
        return;
      }
      this.dailySentence = res.body;
      this.loading = false;
    });
  }
}