import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { StoreService } from '../../../shared/store';
import { PagesPaginator } from '../../../shared/pages-pagenator';
import { Router } from '@angular/router';
import { DailySentence } from '../../../shared/model/daily.model';
import { DailySentenceService } from '../../../shared/services/dailySentence.services';

@Component({
  selector: 'app-admindailysentence',
  templateUrl: './admindailysentence.component.html',
  styleUrls: ['./admindailysentence.component.scss']
})
export class AdminDailySentenceComponent extends PagesPaginator implements OnInit {
  type = 'add';
  loading = false;
  // table DATA
  ELEMENT_DATA!: DailySentence[];
  length!: string;
  editData!: any;
  english!: string;
  chinese!: string;
  wordE!: string;
  wordS!: string;
  wordC!: string;
  addWords = [] as any;
  showDate!: string;
  actionId!: string;
  displayedColumns = [
    'english',
    'chinese',
    'showDate',
    'action'
  ];

  constructor(
    private dailySentenceService: DailySentenceService,
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
  addWord(): void {
    if (!this.wordE || !this.wordC || !this.wordS) {
      this.snackBar.open('缺少訊息', '關閉');
      return;
    }
    const word = {
      word: this.wordE,
      chinese: this.wordC,
      speech: this.wordS,
    }
    this.addWords.push(word)
    this.wordE = ''
    this.wordC = ''
    this.wordS = ''

    this.snackBar.open('新增成功', '關閉');
  }
  new(): void {
    this.type = 'add';
  }
  put(): void {
    this.loading = true;
    if (!this.editData) return;
    if (!this.editData.english || !this.editData.chinese || !this.editData._id) {
      this.snackBar.open('缺少訊息', '關閉');
      this.loading = false;
      return;
    }
    const data = {
      english: this.editData.english,
      chinese: this.editData.chinese,
      words: this.editData.words,
      showDate: this.editData.showDate,
    };
    this.dailySentenceService.put(this.editData._id, data).subscribe(res => {
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
    this.dailySentenceService.getAll().subscribe(res => {
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
  deleteAction(_id: string) {
    this.type = 'delete'
    this.actionId = _id;
  }
  delete(): void {
    this.loading = true;
    this.dailySentenceService.delete(this.actionId || '').subscribe(res => {
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
    this.english = '';
    this.chinese = '';
    this.wordC = '';
    this.wordE = '';
    this.wordS = '';
    this.addWords = [];
    this.showDate = `${new Date().getFullYear()}/${(new Date().getMonth() + 1)}/${new Date().getDate()}`;
  }
  post(): void {
    this.loading = true;
    const data = {
      english: this.english,
      chinese: this.chinese,
      words: this.addWords,
      showDate: this.showDate,
    };
    if (!this.english || !this.chinese || !this.showDate) {
      this.snackBar.open('缺少訊息', '關閉');
      this.loading = false;
      return;
    }
    this.dailySentenceService.post(data).subscribe(res => {
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
