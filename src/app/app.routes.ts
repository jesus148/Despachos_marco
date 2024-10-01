import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';

export const routes: Routes = [


  // vacio
  {path:'' , redirectTo:'Index' , pathMatch : 'full'},

  {path:'Index' , component: IndexComponent} ,

  //  * name
  {path:'**' , redirectTo:'Index' , pathMatch : 'full'}
];
