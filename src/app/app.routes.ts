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
              children:[
                {
                  path: 'info-user',
                    loadComponent: ()=> import('./profile/pages/user/user.component').then( c => c.default),
                  },
                {
                  path: 'abstract',
                    loadComponent: ()=> import('./profile/pages/summary/summary.component').then( c => c.default),
                  },
                  {
                    path: 'jobs',
                      loadComponent: ()=> import('./profile/pages/job-experience/job-experience.component').then( c => c.default),
                    },
                  {
                  path: 'skills',
                    loadComponent: ()=> import('./profile/pages/skills/skills.component').then( c => c.default),
                  },
                  {
                    path: 'courses',
                      loadComponent: ()=> import('./profile/pages/academic-background/academic-background.component').then( c => c.default),
                    },

                ]
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
