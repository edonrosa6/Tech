import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { Route, RouterModule } from "@angular/router";
import { ComponentsModule } from "src/app/components/components.module";

const routes: Route[] = [{
  path: '',
  component: HomeComponent
}]


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    ComponentsModule
  ],
})
export class HomeModule { }