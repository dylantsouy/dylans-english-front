import { Routes } from '@angular/router';

import { CertificateComponent } from './certificate.component';
import { TestComponent } from './test/test.component';

export const CertificateRoutes: Routes = [
  {
    path: 'orange',
    component: CertificateComponent,
    data: {
      name: 'orange', title: '橘色證書', subtitle: 'Orange Certificate', level: 1, score: '10~215分',
      describe: '只能以背誦的句子進行問答而不能自行造句，尚無法將英語當作溝通工具來使用。'
    }
  },
  {
    path: 'brown',
    component: CertificateComponent,
    data: {
      name: 'brown', title: '棕色證書', subtitle: 'Brown Certificate', level: 2, score: '220~465分',
      describe: '語言能力僅僅侷限在簡單的一般日常生活對話，同時無法做連續性交談，亦無法用英文工作。'
    }
  },
  {
    path: 'green',
    component: CertificateComponent,
    data: {
      name: 'green', title: '綠色證書', subtitle: 'Green Certificate', level: 3, score: '470~725分',
      describe: '英文文字溝通能力尚可、會話方面稍嫌詞彙不足、語句簡單，但已能掌握少量工作相關語言，可以從事英語相關程度較低的工作。'
    }
  },
  {
    path: 'blue',
    component: CertificateComponent,
    data: {
      name: 'blue', title: '藍色證書', subtitle: 'Blue Certificate', level: 4, score: '730~855分',
      describe: '可有效運用英語滿足社交及工作所需、措辭洽當、表達流暢；但在某些特定情形下，如：面臨緊張壓力、討論話題過於冷僻艱澀時，仍會顯現出語言能力不足的狀況。'
    }
  },
  {
    path: 'gold',
    component: CertificateComponent,
    data: {
      name: 'gold', title: '金色證書', subtitle: 'Gold Certificate', level: 5, score: '860~990分',
      describe: '英文能力已十分近似英語母語人士，能夠流暢有條理的表達意見、參與對話、主持英文會議、調和衝突並做出結論，語言使用上即使有瑕疵，亦不會造成理解上的困擾。'
    }
  },
  {
    path: 'test',
    component: TestComponent
  },
];
