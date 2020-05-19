import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserTableComponent } from './table-component/user-table.component';
import { UserFormComponent } from './form-component/user-form.component';


const routes: Routes = [
  { path: 'user-table-component', component: UserTableComponent },
  { path: 'user-form-component', component: UserFormComponent },
  { path: 'user-form-component/:id', component: UserFormComponent },
  { path: '**', component: UserTableComponent },
  { path: '', redirectTo: '/user-table-component', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
