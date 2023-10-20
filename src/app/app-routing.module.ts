import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PereComponent } from './pere/pere.component';
import { FilsComponent } from './fils/fils.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [ 
  {path:'pere',component:PereComponent},{path:'fils',component:FilsComponent},{path:'child',component:ChildComponent},{path:'parent',component:ParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
