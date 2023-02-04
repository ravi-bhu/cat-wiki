import { Routes } from '@angular/router';

export default [
  {
    path: 'breed/:breed',
    loadComponent: () =>
      import('./cat-info/cat-info.component').then((c) => c.CatInfoComponent),
  },
  {
    path: 'top',
    loadComponent: () =>
      import('./cat-top-ten/cat-top-ten.component').then((c) => c.CatTopTenComponent),
  },
] as Routes;
