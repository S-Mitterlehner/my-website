import { animate, query, stagger, style, transition, trigger } from "@angular/animations";

var durationMs = 600;
var timing = `${durationMs}ms ease-in-out`;

export const slideInFromLeft = trigger('listAnimation', [
    transition('* <=> *', [
        query(':enter', [
            style({
                transform: 'translateX(-100%)',
                opacity: 0
            }),
            stagger(300, [
                animate(timing, 
                    style({
                        transform: 'translateX(0)',
                        opacity: 1
                    })
                )
            ])
        ], {optional: true}),
        query(':leave', [
            style({
                transform: 'translateX(0)',
                opacity: 1
            }),
            stagger(300, [
                animate(timing, 
                    style({
                        transform: 'translateX(-100%)',
                        opacity: 0
                    })
                )
            ])
        ], {optional: true})
    ])
])

export const slideInFromRight = trigger('listAnimation', [
    transition('* <=> *', [
        query(':enter', [
            style({
                transform: 'translateX(100%)',
                opacity: 0
            }),
            stagger(300, [
                animate(timing, 
                    style({
                        transform: 'translateX(0)',
                        opacity: 1
                    })
                )
            ])
        ], {optional: true}),
        query(':leave', [
            style({
                transform: 'translateX(0)',
                opacity: 1
            }),
            stagger(300, [
                animate(timing, 
                    style({
                        transform: 'translateX(100%)',
                        opacity: 0
                    })
                )
            ])
        ], {optional: true})
    ])
])