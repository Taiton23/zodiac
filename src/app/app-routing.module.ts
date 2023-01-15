import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FailPageComponent } from './fail-page/fail-page.component';
import { StartPageComponent } from './start-page/start-page.component';

const routes: Routes = [
  {
    path: '',
    component: StartPageComponent
  },
  {
    path: 'fail',
    component: FailPageComponent
  },
  {
    path: 'result',
    loadChildren: () => import('./result-page/result-page.module').then((m) => m.ResultPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
