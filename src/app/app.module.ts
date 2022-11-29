import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LiveNewsComponent } from './live-news/live-news.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
// const myRoute:Routes=[
//   {
//     path:"",
//     component:LiveNewsComponent
//   }
// ]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LiveNewsComponent
  ],
  imports: [
    BrowserModule,
   AppRoutingModule,
   HttpClientModule
    // RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
