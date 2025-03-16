import { Component } from '@angular/core';
import { TopContentComponent } from "../top-content/top-content.component";
import { RouterModule } from "@angular/router";
import { FooterComponent } from "../footer/footer.component";
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-main-layout',
  imports: [TopContentComponent, RouterModule, FooterComponent, SidebarComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
