import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {AccueilComponent} from './accueil/accueil.component';
import {LogoutComponent} from './logout/logout.component';
import {UserComponent} from './user/user.component';
import {AddUserComponent} from './add-user/add-user.component';
import {EditUserComponent} from './edit-user/edit-user.component';
import {DeleteUserComponent} from './delete-user/delete-user.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'pages',component: AccueilComponent, canActivate: [AuthGuard],
    children: [
      { path: 'users', component: UserComponent, canActivate: [AuthGuard] },
      { path: 'adduser', component: AddUserComponent, canActivate: [AuthGuard] },
      { path: 'edituser/:id', component: EditUserComponent, canActivate: [AuthGuard] },
      { path: 'deleteuser/:id', component: DeleteUserComponent, canActivate: [AuthGuard] }
    ]
  },
  { path: 'logout', component: LogoutComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', component: AccueilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
