import { Component, OnInit, Input } from '@angular/core';
import { DailyWord, DailyArticle } from '../../../../shared//model/daily.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DailyWordService } from '../../../../shared/services/dailyword.services';
import { DailyArticleService } from '../../../../shared/services/dailyarticle.services';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss']
})
export class DailyComponent implements OnInit {
  @Input() store: any;
  dailyWords?: DailyWord[];
  dailyArticle?: DailyArticle[];
  loading = false;

  constructor(
    private dailyWordService: DailyWordService,
    private dailyArticleService: DailyArticleService,
    private snackBar: MatSnackBar
  ) { }
  ngOnInit(): void {
    this.getDailyWords();
    this.getDailyArticle();
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
}