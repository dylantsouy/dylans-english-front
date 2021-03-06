import { Injectable } from '@angular/core';
import { UserService } from '../shared/services/user.services';
import { User } from '../shared/model/user.model';

import { Observable, ReplaySubject, of, BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class StoreService {
    public token?: any;
    public user?: User;
    public level = {
        type: 'Pie',
        data: {
            series: [
                0,
                0,
                0,
                0,
                0,
                100
            ]
        },
        options: {
            donut: true,
            height: 260,
            showLabel: false,
            donutWidth: 20
        }
    };
    public overview = {
        type: 'Bar',
        data: {
            labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
            series: [[0, 0, 0, 0, 0, 0]]
        },
        options: {
            seriesBarDistance: 100,
            high: 1000,

            axisX: {
                showGrid: false,
                offset: 10
            },
            axisY: {
                showGrid: true,
                offset: 40
            },
            height: 360
        }
    };
    public knowWord?: any;
    public notedWord?: any;
    public username?: string;

    constructor(
        private userService: UserService,
        private snackBar: MatSnackBar,
    ) { }

    getUser(): any {
        return new Promise<void>((resolve, reject) => {
            this.username = sessionStorage.getItem('username') || '';
            this.token = sessionStorage.getItem('token') || '';
            if(!this.username){
                this.user = undefined;
                return
            }
            this.userService.getUser(this.username).subscribe(res => {
                if (res.body === null || res.headers === null) {
                    this.snackBar.open('登入失敗', '關閉');
                    return;
                }
                this.user = res.body;
                resolve();
            });
        });
    }
    getNoted(): any {
        return new Promise<void>((resolve, reject) => {
            this.userService.getNotedWord(this.username || '').subscribe(res => {
                if (res.body === null || res.headers === null) {
                    this.snackBar.open('登入失敗', '關閉');
                    return;
                }
                this.notedWord = res.body;
                resolve();
            });
        });
    }

    getKnow(): any {
        return new Promise<void>((resolve, reject) => {
            this.userService.getKnowWord(this.username || '').subscribe(res => {
                if (res.body === null || res.headers === null) {
                    this.snackBar.open('登入失敗', '關閉');
                    return;
                }
                this.knowWord = res.body;
                resolve();
            });
        });
    }

    setLoginStatus(): any {
        return new Promise<void>((resolve, reject) => {
            this.username = sessionStorage.getItem('username') || '';
            this.token = sessionStorage.getItem('token') || '';
            if (!this.username) {
                this.level = {
                    type: 'Pie',
                    data: {
                        series: [
                            0,
                            0,
                            0,
                            0,
                            0,
                            100
                        ]
                    },
                    options: {
                        donut: true,
                        height: 260,
                        showLabel: false,
                        donutWidth: 20
                    }
                };

                this.knowWord = [];
                this.overview = {
                    type: 'Bar',
                    data: {
                        labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
                        series: [[0, 0, 0, 0, 0, 0]]
                    },
                    options: {
                        seriesBarDistance: 100,
                        high: 1000,

                        axisX: {
                            showGrid: false,
                            offset: 10
                        },
                        axisY: {
                            showGrid: true,
                            offset: 40
                        },
                        height: 360
                    }
                };
                this.user = undefined;
                resolve();
                return;
            }
            else {
                this.userService.getUserLevel(this.username).subscribe(res => {
                    if (res.body === null || res.headers === null) {
                        this.snackBar.open('登入失敗', '關閉');
                        return;
                    }

                    this.level = {
                        type: 'Pie',
                        data:
                        {
                            series: [
                                res.body.orange,
                                res.body.brown,
                                res.body.green,
                                res.body.blue,
                                res.body.gold,
                                res.body.remain
                            ]
                        },
                        options: {
                            donut: true,
                            height: 260,
                            showLabel: false,
                            donutWidth: 20
                        }
                    };

                });

                this.userService.getUser(this.username).subscribe(res => {
                    if (res.body === null || res.headers === null) {
                        this.snackBar.open('登入失敗', '關閉');
                        return;
                    }
                    this.user = res.body;
                });
                this.userService.getOverview(this.username).subscribe(res => {
                    if (res.body === null || res.headers === null) {
                        this.snackBar.open('登入失敗', '關閉');
                        return;
                    }
                    this.overview = {
                        type: 'Bar',
                        data: {
                            labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
                            series: [[res.body.first, res.body.second, res.body.third, res.body.forth, res.body.fifth, res.body.sixth]]
                        },
                        options: {
                            seriesBarDistance: 100,
                            high: 1000,

                            axisX: {
                                showGrid: false,
                                offset: 10
                            },
                            axisY: {
                                showGrid: true,
                                offset: 40
                            },
                            height: 360
                        }
                    };

                });
                this.userService.getKnowWord(this.username).subscribe(res => {
                    if (res.body === null || res.headers === null) {
                        this.snackBar.open('登入失敗', '關閉');
                        return;
                    }
                    this.knowWord = res.body;
                });
                this.userService.getNotedWord(this.username).subscribe(res => {
                    if (res.body === null || res.headers === null) {
                        this.snackBar.open('登入失敗', '關閉');
                        return;
                    }
                    this.notedWord = res.body;
                    resolve();
                });
            }
        });
    }
}
