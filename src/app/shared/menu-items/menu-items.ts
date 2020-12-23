import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'dashboard', type: 'link', name: '會員中心', icon: 'av_timer' },
  { state: 'orange', type: 'link', name: '橘色證書', icon: 'child_friendly' },
  { state: 'brown', type: 'link', name: '棕色證書', icon: 'escalator_warning' },
  { state: 'green', type: 'link', name: '綠色證書', icon: 'emoji_people' },
  { state: 'blue', type: 'link', name: '藍色證書', icon: 'self_improvement' },
  { state: 'gold', type: 'link', name: '金色證書', icon: 'psychology' },
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
