import {animate, state, style, transition, trigger} from '@angular/animations';

export const scale = trigger('scale', [
  state('true', style({opacity: 1, transform: 'scale(1.0)'})),
  state('false', style({opacity: 0, transform: 'scale(0.0)'})),
  transition('1 => 0', animate('500ms')),
  transition('0 => 1', animate('500ms'))
]);
