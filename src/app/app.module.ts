import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicDirective } from './basic-directives/basic-directive';
import { RendererDirective } from './render/renderer.directive';
import { UnlessDirective } from './unless.directive';
import { ColorsDirective } from './colors.directive';
import { ValuesDirective } from './values.directive';
import { DemosComponent } from './demos/demos.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicDirective,
    RendererDirective,
    UnlessDirective,
    ColorsDirective,
    ValuesDirective,
    DemosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
