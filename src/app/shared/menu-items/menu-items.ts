import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'av_timer' },
  { state: 'orange', type: 'link', name: 'Orange', icon: 'child_friendly' },
  { state: 'brown', type: 'link', name: 'Brown', icon: 'escalator_warning' },
  { state: 'green', type: 'link', name: 'Green', icon: 'emoji_people' },
  { state: 'blue', type: 'link', name: 'Blue', icon: 'self_improvement' },
  { state: 'gold', type: 'link', name: 'Gold', icon: 'psychology' },
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
