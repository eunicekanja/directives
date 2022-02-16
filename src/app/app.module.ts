import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicDirective } from './basic-directives/basic-directive';
import { RendererDirective } from './render/renderer.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicDirective,
    RendererDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
