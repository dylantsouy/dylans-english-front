import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { StoreService } from '../../../shared/store';
import { PagesPaginator } from '../../../shared/pages-pagenator';
import { Router } from '@angular/router';
import { DailyWord } from '../../../shared/model/daily.model';
import { DailyWordService } from '../../../shared/services/dailyword.services';

@Component({
  selector: 'app-admindailyword',
  templateUrl: './admindailyword.component.html',
  styleUrls: ['./admindailyword.component.scss']
})
export class AdminDailyWordComponent extends PagesPaginator implements OnInit {
  type = 'add';
  loading = false;
  // table DATA
  ELEMENT_DATA!: DailyWord[];
  length!: string;
  editData!: any;
  word!: string;
  actionWord!: string;
  chinese!: string;
  sentence!: string;
  speech!: string;
  sentenceChinese!: string;
  showDate!: string;
  actionId!: string;
  displayedColumns = [
    'word',
    'chinese',
    'speech',
    'showDate',
    'action'
  ];

  constructor(
    private dailyWordService: DailyWordService,
    private snackBar: MatSnackBar,
    public store: StoreService,
    private router: Router,
  ) {
    super();
  }
  ngOnInit(): void {
    this.store.getUser().then(() => {
      if (this.store && !this.store.user || (this.store.user && this.store.user.level !== 'admin')) {
        this.router.navigate(['/dashboard'])
        this.snackBar.open('無管理員權限', '關閉');
      }
    })
    if (!this.store.token) {
      this.router.navigate(['/dashboard'])
      this.snackBar.open('無管理員權限', '關閉');
    }
    this.showDate = `${new Date().getFullYear()}/${(new Date().getMonth() + 1)}/${new Date().getDate()}`
    this.getServerData();
    super.ngOnInit();
  }
  edit(data: any): void {
    this.editData = Object.assign({}, data);
    this.type = 'edit';
  }
  new(): void {
    this.type = 'add';
  }
  put(): void {
    this.loading = true;
    if (!this.editData) return;
    if (!this.editData.word || !this.editData.speech || !this.editData.chinese || !this.editData.sentence || !this.editData.sentenceChinese || !this.editData._id) {
      this.snackBar.open('缺少訊息', '關閉');
      this.loading = false;
      return;
    }
    const data = {
      word: this.editData.word,
      chinese: this.editData.chinese,
      speech: this.editData.speech,
      sentence: this.editData.sentence,
      sentenceChinese: this.editData.sentenceChinese,
      showDate: this.editData.showDate,
    };
    this.dailyWordService.put(this.editData._id, data).subscribe(res => {
      if (res.status === 200) {
        this.getServerData();
        this.snackBar.open('編輯成功', '關閉');
        this.type = "add";
        this.loading = false;
      } else {
        this.snackBar.open('編輯失敗', '關閉');
        this.loading = false;
      }
    });
  }
  // get api
  getServerData(): void {
    this.loading = true;
    this.dailyWordService.getAll().subscribe(res => {
      if (res.body === null || res.headers === null) {
        this.snackBar.open('獲取功能資料失敗', '關閉');
        return;
      }

      this.paginator._intl.itemsPerPageLabel = '每頁個數:';
      this.currentPage.length = res.body.totalSize;
      this.ELEMENT_DATA = res.body.data;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.loading = false;
    });
  }
  deleteAction(_id: string, word: string) {
    this.type = 'delete'
    this.actionWord = word;
    this.actionId = _id;
  }
  delete(): void {
    this.loading = true;
    this.dailyWordService.delete(this.actionId || '').subscribe(res => {
      if (res.body === null || res.headers === null) {
        this.snackBar.open('獲取功能資料失敗', '關閉');
        return;
      } else {
        this.getServerData();
        this.snackBar.open('刪除成功', '關閉');
        this.type = 'add';
        this.loading = false;
      }
    });
  }
  reset(): void {
    this.word = '';
    this.chinese = '';
    this.speech = '';
    this.sentence = '';
    this.sentenceChinese = '';
    this.showDate = `${new Date().getFullYear()}/${(new Date().getMonth() + 1)}/${new Date().getDate()}`;
  }
  post(): void {
    this.loading = true;
    const data = {
      word: this.word,
      chinese: this.chinese,
      sentence: this.sentence,
      speech: this.speech,
      sentenceChinese: this.sentenceChinese,
      showDate: this.showDate,
    };
    if (!this.word || !this.chinese || !this.speech || !this.sentence || !this.sentenceChinese || !this.showDate) {
      this.snackBar.open('缺少訊息', '關閉');
      this.loading = false;
      return;
    }
    this.dailyWordService.post(data).subscribe(res => {
      if (res.status === 200) {
        this.getServerData();
        this.snackBar.open('新增成功', '關閉');
        this.reset();
        this.loading = false;
      } else {
        this.snackBar.open('新增失敗', '關閉');
        this.loading = false;
      }
    });
  }
}
