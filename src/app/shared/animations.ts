// import {
//   animate,
//   animateChild,
//   group,
//   query,
//   style,
//   transition,
//   trigger,
// } from '@angular/animations';

// export const slideInAnimation = trigger('routeAnimations', [
//   // transition('LoginPage <=> DashboardPage', [
//   transition('LoginPage <=> *', [
//     style({ position: 'relative' }),
//     query(':enter, :leave', [
//       style({
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//       }),
//     ]),
//     query(':enter', [style({ left: '-100%' })]),
//     query(':leave', animateChild()),
//     group([
//       query(':leave', [animate('200ms ease-in-out', style({ left: '100%' }))]),
//       query(':enter', [animate('200ms ease-in-out', style({ left: '0%' }))]),
//     ]),
//     query(':enter', animateChild()),
//   ]),
//   transition('LoginPage <=> *', [
//     style({ position: 'relative' }),
//     query(':enter, :leave', [
//       style({
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//       }),
//     ]),
//     query(':enter', [style({ left: '-100%' })]),
//     query(':leave', animateChild()),
//     group([
//       query(':leave', [animate('200ms ease-out', style({ left: '100%' }))]),
//       query(':enter', [animate('200ms ease-out', style({ left: '0%' }))]),
//     ]),
//     query(':enter', animateChild()),
//   ]),
// ]);
