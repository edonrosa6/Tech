import { NgModule } from "@angular/core";
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from "./content/content.component";
import { ButtonComponent } from './button/button.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    HeaderComponent,
    ContentComponent,
    ButtonComponent
  ],
  imports: [
    FontAwesomeModule,
    CommonModule
  ],
  exports: [
    HeaderComponent,
    ContentComponent
  ]
})

export class ComponentsModule { }