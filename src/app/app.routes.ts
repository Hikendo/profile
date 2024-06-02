import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
              loadComponent: ()=> import('./dashboard/layout/layout-page/layout-page.component').then( c => c.default),
              children:[
                {
                  path: 'welcome',
                    loadComponent: ()=> import('./shared/components/welcome/welcome.component').then( c => c.default),
                  },
           {
            path: 'profile',
              loadComponent: ()=> import('./profile/layout/layout-page/layout-page.component').then( c => c.default),
            },
            {path: 'glossary',
                  loadComponent: () => import('./profile/pages/glossary/glossary.component').then( c => c.default),
            },
            {path: 'templates',
                  loadComponent: () => import('./dashboard/pages/templates-project/templates-project.component').then( c => c.default),
            },
            {path: 'diplomas',
                  loadComponent: () => import('./dashboard/pages/diplomas/diplomas.component').then( c => c.default),
            },
                      ],
          },
{
  path: '**', redirectTo:'dashboard/welcome', pathMatch: 'full'
}
];
