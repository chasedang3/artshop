import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

export interface MenuItem {
  title: string;
  link?: string;
  description?: string;
  icon?: string;
  iconBgColor?: string;
  children?: MenuItem[];
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
})
export class HeaderComponent {
  
  constructor(
  ) {}
}
