import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./FE/fe.module').then(module => module.FEModule)
  },
<<<<<<< HEAD
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}
=======
>>>>>>> 371aaf5ad2c4c2bbce9800dc6560f2f17762cc0f
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
