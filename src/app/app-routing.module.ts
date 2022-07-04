import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './manager/app/app.component';
import { CreateItemComponent } from './manager/create-item/create-item.component';
import { ManageComponent } from './manager/manage/manage.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
 {path:'manager', component: ManageComponent},
  {path:'manager/create-item',component:CreateItemComponent },
 {path:'self-order', component:UserComponent},
 {path:'**', redirectTo:'self-order',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
