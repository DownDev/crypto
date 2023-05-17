import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptodetailComponent } from './cryptodetail/cryptodetail.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ShowSearchBarGuard } from './show-search-bar.guard';
import { HideSearchBarGuard } from './hide-search-bar.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '',
    canActivate: [ShowSearchBarGuard],
    children: [{ path: 'home', component: MainpageComponent }],
  },
  {
    path: '',
    canActivate: [HideSearchBarGuard],
    children: [
      {
        path: 'cryptodetail/:id',
        component: CryptodetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
