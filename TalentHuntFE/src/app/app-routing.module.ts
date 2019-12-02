import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequirementComponent } from './requirement/requirement.component';


const routes: Routes = [
  {path:' requirement',component:RequirementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
