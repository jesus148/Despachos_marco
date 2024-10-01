import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DespachosComponent } from './components/despachos/despachos.component';

export const routes: Routes = [


  // vacio
  {path:'' , redirectTo:'Index' , pathMatch : 'full'},


  {path:'Index' , component: IndexComponent} ,
  {path:'Despachos' , component: DespachosComponent} ,


  //  * name
  {path:'**' , redirectTo:'Index' , pathMatch : 'full'}
];
