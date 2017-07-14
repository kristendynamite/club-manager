import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ClubListComponent } from './club-list/club-list.component';
import { MamaProfileComponent } from './mama-profile/mama-profile.component';
import { AdminComponent } from './admin/admin.component';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [
{
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'mama-profile/:id',
    component: MamaProfileComponent
  },
  {
    path: 'club-list',
    component: ClubListComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: '',
    component: WelcomeComponent
},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
