import { trigger, state, animate, style, transition } from '@angular/core';

export function routerTransition() {
  return slideToLeft()
}

function slideToLeft() {
  return trigger('routerTransition', [
    state('void', style({position:'fixed', width:'100%', overflow: 'scroll', height: '100%'}) ),
    state('*', style({position:'fixed', width:'100%', overflow: 'scroll', height: '100%'}) ),
    transition(':enter', [
      style({transform: 'translateX(100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateX(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
    ])
  ]);
}
