import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../shared/services/user.services';
import { Router } from '@angular/router';
import { StoreService } from '../../shared/store';
import { EmailValidator, AccountValidator, PasswordValidator } from '../../shared/validators/validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  account?: string;
  password?: string;
  type = 'login';
  accountErr?: string;
  passwordErr?: string;
  re_account?: string;
  re_password?: string;
  re_name?: string;
  re_mail?: string;
  re_gender = 'male';
  re_accountErr?: string;
  re_passwordErr?: string;
  re_nameErr?: string;
  re_mailErr?: string;
  hide = true;
  re_hide = true;
  show = false;

  constructor(
    public store: StoreService,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void { 
    if(history.state.type === 'register'){
      this.type = 'register';
    }else{
      this.type = 'login';
    }
  }
  goRegister(): void {
    this.type = 'register';
    this.account = '';
    this.password = '';
    this.accountErr = '';
    this.passwordErr = '';
  }
  goLogin(): void {
    this.type = 'login';
    this.re_account = '';
    this.re_password = '';
    this.re_name = '';
    this.re_mail = '';
    this.re_accountErr = ''
    this.re_passwordErr = ''
    this.re_nameErr = ''
    this.re_mailErr = ''
    this.re_gender = 'male';
  }
  close(): void {
    this.router.navigate(['/dashboard'])
  }
  register(): void {
    if (!this.re_account) {
      this.re_accountErr = '請輸入帳號'
      this.re_passwordErr = ''
      this.re_nameErr = ''
      this.re_mailErr = ''
      this.re_gender = 'male';
      return;
    }
    if (!AccountValidator(this.re_account)) {
      this.re_accountErr = '帳號為6碼以上包含中英文'
      this.re_passwordErr = ''
      this.re_nameErr = ''
      this.re_mailErr = ''
      return;
    }
    if (!this.re_password) {
      this.re_passwordErr = '請輸入密碼'
      this.re_accountErr = ''
      this.re_nameErr = ''
      this.re_mailErr = ''
      return;
    }
    if (!PasswordValidator(this.re_password)) {
      this.re_passwordErr = '密碼為6碼以上包含中英文'
      this.re_accountErr = ''
      this.re_nameErr = ''
      this.re_passwordErr = ''
      return;
    }
    if (!this.re_mail) {
      this.re_mailErr = '請輸入郵箱號'
      this.re_accountErr = ''
      this.re_nameErr = ''
      this.re_passwordErr = ''
      return;
    }
    if (!EmailValidator(this.re_mail)) {
      this.re_mailErr = '郵箱號不符合格式'
      this.re_accountErr = ''
      this.re_nameErr = ''
      this.re_passwordErr = ''
      return;
    }
    if (!this.re_name) {
      this.re_nameErr = '請輸入姓名'
      this.re_accountErr = ''
      this.re_mailErr = ''
      this.re_passwordErr = ''
      return;
    }
    this.re_accountErr = ''
    this.re_mailErr = ''
    this.re_passwordErr = ''
    this.re_nameErr = ''
    const data = { username: this.re_account, password: this.re_password, email: this.re_mail, name: this.re_name, gender: this.re_gender }
    this.userService.register(data).subscribe(res => {
      if (res.body === null || res.headers === null) {
        this.snackBar.open('登入失敗', '關閉');
        this.router.navigate(['/dashboard'])
        return;
      } if (res.body.statusCode === 400) {
        this.re_accountErr = res.body.message;
        return;
      }
      sessionStorage.setItem('token', res.body.token);
      sessionStorage.setItem("username", this.re_account || '');
      this.router.navigate(['/dashboard'])
      this.snackBar.open('註冊成功', '關閉');
      this.re_accountErr = ''
      this.re_mailErr = ''
      this.re_passwordErr = ''
      this.re_nameErr = ''
      this.re_gender = 'male';
    });
  }
  /* 登入 */
  login(): void {
    if (!this.account) {
      this.accountErr = '請輸入帳號'
      this.passwordErr = ''
      return;
    }
    if (!AccountValidator(this.account)) {
      this.accountErr = '帳號為6碼以上包含中英文'
      this.passwordErr = ''
      return;
    }
    if (!this.password) {
      this.passwordErr = '請輸入密碼'
      this.accountErr = ''
      return;
    }
    if (!PasswordValidator(this.password)) {
      this.passwordErr = '密碼為6碼以上包含中英文'
      this.accountErr = ''
      return;
    }

    this.accountErr = ''
    this.passwordErr = ''
    const data = { username: this.account, password: this.password }
    this.userService.login(data).subscribe(res => {
      if (res.body === null || res.headers === null) {
        this.snackBar.open('登入失敗', '關閉');
        return;
      }
      if (res.body.success === false) {
        this.passwordErr = '登入失敗,請確認您的帳號密碼'
        return;
      }

      sessionStorage.setItem('token', res.body.token);
      sessionStorage.setItem("username", this.account || '');
      this.router.navigate(['/dashboard'])
      this.snackBar.open('登入成功', '關閉');
      this.passwordErr = ''
    });
  }
}
