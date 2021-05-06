import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    TreeViewModule

  ],

providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
