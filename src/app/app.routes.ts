import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
              loadComponent: ()=> import('./dashboard/layout/layout-page/layout-page.component').then( c => c.default),
              children:[
           {
            path: 'profile',
              loadComponent: ()=> import('./profile/layout/layout-page/layout-page.component').then( c => c.default),
            },
            {path: 'glossary',
                  loadComponent: () => import('./profile/pages/glossary/glossary.component').then( c => c.default),
            }
                      ],
          },
{
  path: '**', redirectTo:'dashboard/profile', pathMatch: 'full'
}
];
