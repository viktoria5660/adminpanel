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
    icon: 'explore'
  },
  {
    state: 'settings',
    name: 'Settings',
    type: 'link',
    icon: 'settings'
  },
  {
    state: 'users',
    name: 'Users',
    type: 'link',
    icon: 'face'
  },
  // {
  //   state: 'apps',
  //   name: 'APPS',
  //   type: 'sub',
  //   icon: 'apps',
  //   badge: [
  //     {type: 'red', value: '5'}
  //   ],
  //   children: [
  //     {state: 'calendar', name: 'CALENDAR'},
  //     {state: 'media', name: 'MEDIA'},
  //     {state: 'messages', name: 'MESSAGES'},
  //     {state: 'social', name: 'SOCIAL'},
  //     {state: 'chat', name: 'CHAT'}
  //   ]
  // },
  // {
  //   state: 'widgets',
  //   name: 'WIDGETS',
  //   type: 'link',
  //   icon: 'photo'
  // },
  // {
  //   state: 'material',
  //   name: 'MATERIAL',
  //   type: 'sub',
  //   icon: 'equalizer',
  //   badge: [
  //     {type: 'purple', value: '10'}
  //   ],
  //   children: [
  //     {state: 'autocomplete', name: 'AUTOCOMPLETE'},
  //     {state: 'checkbox', name: 'CHECKBOX'},
  //     {state: 'datepicker', name: 'DATEPICKER'},
  //     {state: 'form-field', name: 'FORMFIELD'},
  //     {state: 'input', name: 'INPUT'},
  //     {state: 'radio', name: 'RADIO'},
  //     {state: 'select', name: 'SELECT'},
  //     {state: 'slider', name: 'SLIDER'},
  //     {state: 'slide-toggle', name: 'SLIDETOGGLE'},
  //     {state: 'menu', name: 'MENU'},
  //     {state: 'sidenav', name: 'SIDENAV'},
  //     {state: 'toolbar', name: 'TOOLBAR'},
  //     {state: 'card', name: 'CARDS'},
  //     {state: 'divider', name: 'DIVIDER'},
  //     {state: 'expansion', name: 'EXPANSION'},
  //     {state: 'grid-list', name: 'GRID'},
  //     {state: 'list', name: 'LISTS'},
  //     {state: 'stepper', name: 'STEPPER'},
  //     {state: 'tabs', name: 'TABS'},
  //     {state: 'tree', name: 'TREE'},
  //     {state: 'button', name: 'BUTTON'},
  //     {state: 'button-toggle', name: 'BUTTONTOGGLE'},
  //     {state: 'badge', name: 'BADGE'},
  //     {state: 'chips', name: 'CHIPS'},
  //     {state: 'icon', name: 'ICON'},
  //     {state: 'progress-spinner', name: 'PROGRESSSPINNER'},
  //     {state: 'progress-bar', name: 'PROGRESSBAR'},
  //     {state: 'bottom-sheet', name: 'BOTTOMSHEET'},
  //     {state: 'dialog', name: 'DIALOG'},
  //     {state: 'snack-bar', name: 'SNACKBAR'},
  //     {state: 'tooltip', name: 'TOOLTIP'},
  //     {state: 'paginator', name: 'PAGINATOR'},
  //     {state: 'sort', name: 'SORTHEADER'},
  //     {state: 'table', name: 'TABLE'},
  //   ]
  // },
  // {
  //   state: 'forms',
  //   name: 'FORMS',
  //   type: 'sub',
  //   icon: 'looks_3',
  //   children: [
  //     {state: 'validation', name: 'VALIDATION'},
  //     {state: 'upload', name: 'UPLOAD'},
  //     {state: 'editor', name: 'EDITOR'},
  //   ]
  // },
  // {
  //   state: 'tables',
  //   name: 'DATATABLE',
  //   type: 'sub',
  //   icon: 'format_line_spacing',
  //   badge: [
  //     {type: 'blue-grey', value: '8'
  //     }
  //   ],
  //   children: [
  //     {state: 'fullscreen', name: 'FULLSCREEN'},
  //     {state: 'editing', name: 'EDITING'},
  //     {state: 'filter', name: 'FILTER'},
  //     {state: 'paging', name: 'PAGING'},
  //     {state: 'sorting', name: 'SORTING'},
  //     {state: 'pinning', name: 'PINNING'},
  //     {state: 'selection', name: 'SELECTION'},
  //   ]
  // },
  // {
  //   state: 'ecommerce',
  //   name: 'ECOMMERCE',
  //   type: 'sub',
  //   icon: 'looks_3',
  //   badge: [
  //     {type: 'red', value: 'new'
  //     }
  //   ],
  //   children: [
  //     {state: 'products', name: 'PRODUCTS'},
  //     {state: 'compact', name: 'COMPACT'},
  //     {state: 'detail', name: 'DETAIL'},
  //   ]
  // },
  // {
  //   state: 'taskboard',
  //   name: 'TASKBOARD',
  //   type: 'link',
  //   icon: 'view_column',
  // },
  // {
  //   state: 'charts',
  //   name: 'CHARTS',
  //   type: 'link',
  //   icon: 'show_chart',
  // },
  // {
  //   state: 'maps',
  //   name: 'MAPS',
  //   type: 'sub',
  //   icon: 'navigation',
  //   children: [
  //     {state: 'google', name: 'GOOGLE'},
  //     {state: 'leaflet', name: 'LEAFLET'}
  //   ]
  // },
  // {
  //   state: 'dragndrop',
  //   name: 'DND',
  //   type: 'link',
  //   icon: 'show_chart',
  // },
  // {
  //   state: 'pages',
  //   name: 'PAGES',
  //   type: 'sub',
  //   icon: 'pages',
  //   children: [
  //     {state: 'invoice', name: 'INVOICE'},
  //     {state: 'timeline', name: 'TIMELINE'},
  //     {state: 'user', name: 'USER'},
  //     {state: 'blank', name: 'BLANK'},
  //     {state: 'pricing', name: 'PRICING'},
  //   ]
  // },
  // {
  //   state: 'session',
  //   name: 'SESSION',
  //   type: 'sub',
  //   icon: 'face',
  //   children: [
  //     {state: '404', name: '404'},
  //     {state: 'error', name: 'ERROR'},
  //     {state: 'signin', name: 'SIGNIN'},
  //     {state: 'signup', name: 'SIGNUP'},
  //     {state: 'forgot', name: 'FORGOT'},
  //     {state: 'lockscreen', name: 'LOCKSCREEN'},
  //   ]
  // },
  {
    state: 'http://primer.nyasha.me/docs',
    name: 'DOCS',
    type: 'extTabLink',
    icon: 'local_library'
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
