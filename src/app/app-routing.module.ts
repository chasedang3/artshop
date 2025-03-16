import { Routes } from '@angular/router';
import { MainLayoutComponent } from './features/layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./features/pages/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./features/pages/products/products.component').then(m => m.ProductsComponent)
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./features/pages/about/about.component').then(m => m.AboutComponent)
      },
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ]
  }
];
