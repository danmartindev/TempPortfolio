import { trigger, state, transition, style, animate } from '@angular/animations';

export let fadeUp =  
  trigger('fadeInUp', [
    state('changing', style({ color: 'red', transform: 'translateY(10px)'})),
    transition('* => changing', [
      animate('1s ease-in')
    ]),
  ])

export let fadeOut =  
  trigger('fadeOutUp', [
    state('reloading', style({ color: 'red', transform: 'translateY(10px)'})),
    transition('* => loading', [
      animate(1000)
    ]),
  ])

export let colorTest =  
  trigger('colorTest', [
    state('red', style({ opacity: 0 })),
    transition('* => red', [
      animate('1s')
    ]),

    transition('red => *', [
      animate('1s 2s')
    ]),
  ])


export let hoverSlide =  trigger('hoverSlide', [
  state('hovered', style({ transform: 'translateY(-2px)', color: '#0288d1'})),
  transition('* <=> hovered', [
    animate('100ms ease-out')
  ]),
])