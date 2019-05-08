import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameComponent } from './name/name.component';
import { DescriptionComponent } from './description/description.component';
import  {FormsModule} from '@angular/forms';

import { PageComponent } from './page/page.component';
import { RouterModule, Routes } from '@angular/router';
import { GitDirective } from './git-.directive';

const routes:Routes=[
  {path:"description",component:DescriptionComponent},
  {path:"name",component:NameComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    DescriptionComponent,
    PageComponent,
    GitDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule 
  ],
providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
