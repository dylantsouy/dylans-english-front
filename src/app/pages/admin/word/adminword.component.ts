import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { WordService } from '../../../shared/services/word.services';
import { StoreService } from '../../../shared/store';
import { PagesPaginator } from '../../../shared/pages-pagenator';
import { Router } from '@angular/router';
import { Word } from '../../../shared/model/word.model';

@Component({
  selector: 'app-adminword',
  templateUrl: './adminword.component.html',
  styleUrls: ['./adminword.component.scss']
})
export class AdminwordComponent extends PagesPaginator implements OnInit {
  type = 'add';
  word?: string;
  searchName = '';
  filterLevel = 'orange';
  filterWord?: any;
  chinese?: string;
  speech = 'n';
  sentence?: string;
  sentenceChinese?: string;
  phrase?: string;
  editData?: any;
  derivative?: string;
  synonym?: string;
  antonym?: string;
  note?: string;
  note2?: string;
  level = 'orange';
  actionWord?: string;
  lesson = 1;
  arr: Array<any> = [];
  loading = false;
  // table DATA
  ELEMENT_DATA!: Word[];
  length!: string;
  displayedColumns = [
    'word',
    'speech',
    'level',
    'lesson',
    'action'
  ];

  constructor(
    private wordService: WordService,
    private snackBar: MatSnackBar,
    public store: StoreService,
    private router: Router,
  ) {
    super();
    this.arr = Array.from({ length: 50 }, (v, k) => k + 1);
  }
  ngOnInit(): void {
    this.getServerData();
    super.ngOnInit();
    this.store.getUser().then(() => {
      if (this.store && !this.store.user || (this.store.user && this.store.user.level !== 'admin')) {
        this.router.navigate(['/dashboard'])
        this.snackBar.open('無管理員權限', '關閉');
      }
    })
  }

  // 搜尋
  applyFilter(): void {
    this.getServerData();
    this.paginator.firstPage();
  }
  clearFilter(): void {
    this.filterWord = '';
    this.getServerData();
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
    if (!this.editData.word || !this.editData.chinese || !this.editData.speech || !this.editData.sentence || !this.editData.sentenceChinese) {
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
      phrase: this.editData.phrase,
      derivative: this.editData.derivative,
      synonym: this.editData.synonym,
      antonym: this.editData.antonym,
      note: this.editData.note,
      note2: this.editData.note2,
      level: this.editData.level,
      lesson: this.editData.lesson
    };
    this.wordService.put(this.editData.word, data).subscribe(res => {
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
    const params = new HttpParams({
      fromObject: {
        level: this.filterLevel,
        word: this.filterWord ? this.filterWord : '',
      },
    });
    this.wordService.get(params).subscribe(res => {
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
  deleteAction(word: string) {
    this.type = 'delete'
    this.actionWord = word;
  }
  delete(): void {
    this.loading = true;
    this.wordService.delete(this.actionWord || '').subscribe(res => {
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
    this.speech = 'n';
    this.sentence = '';
    this.sentenceChinese = '';
    this.phrase = '';
    this.derivative = '';
    this.synonym = '';
    this.antonym = '';
    this.note = '';
    this.note2 = '';
  }
  post(): void {
    this.loading = true;
    const data = {
      word: this.word,
      chinese: this.chinese,
      speech: this.speech,
      sentence: this.sentence,
      sentenceChinese: this.sentenceChinese,
      phrase: this.phrase,
      derivative: this.derivative,
      synonym: this.synonym,
      antonym: this.antonym,
      note: this.note,
      note2: this.note2,
      level: this.level,
      lesson: this.lesson
    };
    if (!this.word || !this.chinese || !this.speech || !this.sentence || !this.sentenceChinese) {
      this.snackBar.open('缺少訊息', '關閉');
      this.loading = false;
      return;
    }
    this.wordService.post(data).subscribe(res => {
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
