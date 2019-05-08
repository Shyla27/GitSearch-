
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{CommonModule} from '@angular/common';
import{PageComponent} from './page/page.component';

const routes: Routes = [
  {path:"",component:PageComponent},
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }