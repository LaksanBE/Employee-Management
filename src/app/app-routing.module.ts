import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent} from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthenticationGuard } from './guards/auth.guard';

const routes: Routes = [

{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: 'notfound', component: PageNotFoundComponent},

{ path: 'admin',   loadChildren: () => import ('./admin/admin.module').then(m => m.AdminModule), },
{ path: 'member', loadChildren: () => import('./member/member.module').then(m => m.MemberModule), canActivate: [AuthenticationGuard] },
{ path: 'leader', loadChildren: () => import('./leader/leader.module').then(m => m.LeaderModule), canActivate: [AuthenticationGuard] },

{ path: '**', redirectTo: 'notfound' }

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
