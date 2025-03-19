import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";


import { DashboardComponent } from "./dashboard/dashboard.component";
import { DrepComponent } from "./drep/drep.component";
import { PagesComponent } from "./pages.component";
import { VotingComponent } from "./voting/voting.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "dreps",
        component: DrepComponent,
      },
      {
        path: "voting",
        component: VotingComponent,
      },
      // {
      //   path: "**",
      //   component: NotFoundComponent,
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
