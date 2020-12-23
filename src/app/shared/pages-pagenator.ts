import { Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  template: '',
})
export class PagesPaginator implements OnInit {
  // 分頁的共用設定
  currentPage: PageEvent = { length: 0, pageIndex: 0, pageSize: 10 };
  pageSizeOptions: number[] = [10, 20, 30, 50, 100, 200, 500];
  dataSource!: MatTableDataSource<Object>;
  pageEvent!: PageEvent;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    // 如切換頁數呼叫新分頁api
    this.paginator.page.subscribe((page: PageEvent) => {
      this.currentPage.pageIndex = page.pageIndex;
      this.currentPage.pageSize = page.pageSize;
    });
  }

  // inherit call get http
  getServerData(): void { }
}