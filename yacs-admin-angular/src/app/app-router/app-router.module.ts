import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from '../welcome-page/welcome-page.component';
import { SchoolListComponent } from '../school/school-list/school-list.component';
import { DepartmentListComponent } from '../department/department-list/department-list.component';

const routes: Routes = [
  {path: '', component: WelcomePageComponent},
  {path: 'schools', component: SchoolListComponent},
  {path: 'departments', component: DepartmentListComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRouterModule { }