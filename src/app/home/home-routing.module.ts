import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { HomeComponent } from './home.component';
import { Shell } from '@app/shell/shell.service';
import { AuthenticationGuard } from '@app/auth';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditPostComponent } from '@app/posts/edit-post/edit-post.component';
import { UserProfileComponent } from '@app/user-profile/user-profile.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    { path: 'landing', component: HomeComponent, data: { title: marker('Landing')} },
    { path: 'dashboard', component: DashboardComponent, data: { title: marker('Dashboard')}, canActivate: [AuthenticationGuard] },
    { path: 'edit/:id', component: EditPostComponent, data: { title: marker('Edit Post')}, canActivate: [AuthenticationGuard] },
    { path: 'user-profile', component: UserProfileComponent, data: { title: marker('User Profile')}, canActivate: [AuthenticationGuard] },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class HomeRoutingModule { }
