import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from "../layouts/layout.component";

@Component({
  imports: [CommonModule, RouterModule, LayoutComponent],
  styleUrls: ['pages.component.scss'],
  template: `
    <app-layout>
      <router-outlet></router-outlet>
    </app-layout>
  `
})
export class PagesComponent {

  ngOnInit(): void {

  }
}
