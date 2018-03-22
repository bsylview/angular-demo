import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { CollectionsComponent } from './shared/components/collections/collections.component';
import { PhotosComponent } from './shared/components/photos/photos.component';

import { AuthGuard } from './shared/guards/auth-guard.guard';

/**
 * The order of the routes in the configuration matters and this is by design.
 * The router uses a first-match wins strategy when matching routes,
 * so more specific routes should be placed above less specific routes.
 * Routes with a static path are listed first, followed by an empty path route,
 * that matches the default route.
*/
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'collections',
    component: CollectionsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'photos/:collectionID',
    component: PhotosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
