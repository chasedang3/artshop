import { Routes } from '@angular/router';
import { MainLayoutComponent } from './features/layouts/main-layout/main-layout.component';
import { HomeComponent } from './features/pages/home/home.component';
import { ProductsComponent } from './features/pages/products/products.component';
import { AboutComponent } from './features/pages/about/about.component';

export const routes: Routes = [
	{
		path: '',
		component: MainLayoutComponent,
		children: [
			{ path: 'home', component: HomeComponent },
			{ path: 'products', component: ProductsComponent },
			{ path: 'about', component: AboutComponent },
			{ path: '', redirectTo: '/home', pathMatch: 'full' }
		]
	}
];
