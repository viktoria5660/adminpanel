import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: '/',
    name: 'HOME',
    type: 'link',
    icon: 'home'
  },
  {
    state: 'users',
    name: 'User',
    type: 'link',
    icon: 'face'
  },
  {
    state: 'questions',
    name: 'Questions',
    type: 'link',
    icon: 'question_answer'
  },
  {
    state: 'companies',
    name: 'Companies',
    type: 'link',
    icon: 'location_city'
  }
];

@Injectable()
export class MenuService {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  add(menu) {
    MENUITEMS.push(menu);
  }
}
