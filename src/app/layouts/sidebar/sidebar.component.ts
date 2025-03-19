import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuItem } from '../header/header.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class SidebarComponent {
  menuItems: MenuItem[] = [
    { title: 'Dashboard', icon: 'home-outline', link: '/dashboard' },
    { title: 'Activity', icon: 'bar-chart-outline', link: '/activity' },
    { title: 'Voting', icon: 'checkmark-square-outline', link: '/voting' },
    { title: 'DReps', icon: 'checkmark-square-outline', link: '/dreps' },
    { title: 'More', icon: 'settings-outline', link: '/more' },
  ];

  logo = '../../../assets/images/Logo-trans.png';
  isDisplay = true;

  constructor(private router: Router) {
  }

  goHome(){
    this.router.navigate(['/dashboard']);
  }
}
