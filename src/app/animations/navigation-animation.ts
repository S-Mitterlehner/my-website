
import { animate, query, style, animateChild, group, transition, trigger } from "@angular/animations";

const timeMs = 600;
const timing = `${timeMs}ms ease-in-out`

export const navigateAnimation = 
    trigger('routeAnimations', [
        transition('* <=> *', [
            query(':leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                })
            ], { optional: true }),
            query(':enter', [
                style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    transform: 'translateX(-200%)'
                })
            ], { optional: true }),
            group([
                query(':leave',  [
                    animate(timing,
                        style({
                            transform: 'translateX(-200%)'
                        })
                    )
                ], { optional: true }),
                query('.app__splitter', [
                    animate(timing, style({
                        left: 0
                    }))
                ])
            ]),

            group([         
                query(':enter', [
                    animate(timing, 
                        style({
                            transform: 'translateX(0)'
                        })
                    )
                ], { optional: true }),
                query('.app__splitter', [
                    animate(timing, style({
                        left: window.innerWidth <= 1200 ? '100%' : 'calc(100% - 32rem - 6px)' //TODO: this only works with startup -> improve
                    }))
                ])
            ]),
        ])
    ]);

export const subNavigateAnimation = trigger('subRouteAnimation', [
    transition('* <=> *', [
        query(':leave', [
            style({
                position: 'absolute',
                width: 'Calc(100% - 4rem)',
                transform: 'scale(1)',
                opacity: 1
            }), 
        ], { optional: true }),
        query(':enter', [
            style({
                position: 'absolute',
                width: 'Calc(100% - 4rem)',
                transform: 'scale(0.8)',
                opacity: 0
            }),
        ], { optional: true }),
        query(':leave', [
            animate(timing, 
                style({
                    transform: 'scale(0.8)',
                    opacity: 0
                })
            ) 
        ], { optional: true }),
        query(':enter', [
            animate(timing, 
                style({
                    transform: 'scale(1)',
                    opacity: 1
                })
            )
        ], { optional: true })
    ])
])