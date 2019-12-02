import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequirementComponent } from './requirement/requirement.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from  '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    RequirementComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'requirement',component:RequirementComponent }]),
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
