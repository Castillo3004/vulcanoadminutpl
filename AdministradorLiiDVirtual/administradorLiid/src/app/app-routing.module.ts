import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: "admin", 
  loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule),
  canActivate: [AdminGuard]},
  {path: "", 
  redirectTo: "login",
  pathMatch: "full",},
  {path: "login", 
  component: LoginComponent},
  {path: "**",
  component: PageNotFoundComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
