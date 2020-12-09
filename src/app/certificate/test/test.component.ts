import { Component } from '@angular/core';
import { Word } from '../../shared//model/word.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WordService } from '../../shared/services/word.services';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  word?: string;
  chinese?: string;
  speech = 'n';
  sentence?: string;
  sentenceChinese?: string;
  phrase?: string;
  derivative?: string;
  synonym?: string;
  antonym?: string;
  note?: string;
  level = 'orange';
  lesson = 1;
  arr: Array<any> = [];
  loading = false;

  constructor(
    private wordService: WordService,
    private snackBar: MatSnackBar
  ) {
    this.arr = Array.from({ length: 50 }, (v, k) => k + 1);
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
    this.level = 'orange';
    this.lesson = 1;
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
      level: this.level,
      lesson: this.lesson
    };
    if (!this.word || !this.chinese || !this.speech || !this.sentence || !this.sentenceChinese ) {
      this.snackBar.open('缺少訊息', '關閉');
      return;
    }
    this.wordService.post(data).subscribe(res => {
      if (res.status === 200) {
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
